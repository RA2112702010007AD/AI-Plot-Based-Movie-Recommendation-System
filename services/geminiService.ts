
import { GoogleGenAI, Type, Modality } from "@google/genai";
import type { MovieRecommendation } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    predictedGenres: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of genres that best classify the user's original plot description."
    },
    title: { type: Type.STRING, description: "The official title of the recommended movie." },
    year: { type: Type.INTEGER, description: "The release year of the recommended movie." },
    rationale: { type: Type.STRING, description: "A compelling, concise reason (1-2 sentences) why this movie is a great match for the user's plot description." },
    plot: { type: Type.STRING, description: "A brief, engaging summary of the recommended movie's plot." },
    posterPrompt: { type: Type.STRING, description: "A rich, descriptive text prompt for an image generation AI to create a conceptual, visually stunning movie poster that captures the film's essence, mood, and key elements. Do not mention the movie title." },
    matchScore: { type: Type.INTEGER, description: "An estimated similarity score from 0 to 100 representing how closely the movie's plot aligns with the user's input." },
    conceptualFit: { type: Type.STRING, description: "A single-word rating (e.g., 'Excellent', 'Strong', 'Creative') describing the thematic and conceptual alignment between the plot and the movie." },
    matchingGenres: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of genres for the recommended movie that are most relevant to the user's plot description."
    },
    audienceScore: { type: Type.INTEGER, description: "A score from 0 to 100 representing the predicted satisfaction for an audience that enjoyed the user's original plot." },
    noveltyScore: { type: Type.INTEGER, description: "A score from 0 to 100 indicating how unique or surprising the movie recommendation is, where a higher score suggests a less obvious but clever connection." },
    keywords: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of key themes, concepts, or elements that connect the user's plot to the recommended movie."
    },
  },
  required: ['predictedGenres', 'title', 'year', 'rationale', 'plot', 'posterPrompt', 'matchScore', 'conceptualFit', 'matchingGenres', 'audienceScore', 'noveltyScore', 'keywords'],
};

export async function getMovieRecommendation(plot: string): Promise<MovieRecommendation> {
  const systemInstruction = `You are a movie recommendation expert. Your task is to analyze a user's plot description. First, determine the most likely genre(s) for the user's plot. Then, recommend a real, existing movie that is a great match for that plot and genre. You must also provide analytical metrics about the match. Provide your response strictly in JSON format, following the provided schema.`;

  try {
    // Step 1: Get the movie recommendation text and poster prompt
    const recommendationResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Based on the following plot, recommend a movie:\n\n---\n${plot}\n---`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });
    
    const jsonText = recommendationResponse.text.trim();
    if (!jsonText) {
        throw new Error("The API returned an empty response. The model might not have found a suitable match.");
    }

    const movieInfo = JSON.parse(jsonText);

    // Step 2: Generate the poster image using the prompt from step 1
    const imageGenerationResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
            parts: [{ text: movieInfo.posterPrompt }],
        },
        config: {
            responseModalities: [Modality.IMAGE],
        },
    });

    let posterBase64: string | undefined;
    for (const part of imageGenerationResponse.candidates[0].content.parts) {
        if (part.inlineData) {
            posterBase64 = part.inlineData.data;
            break;
        }
    }

    if (!posterBase64) {
        throw new Error('Image generation failed or did not return any data.');
    }
    
    return {
        ...movieInfo,
        posterBase64,
    };

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof SyntaxError) {
      throw new Error("Failed to process the AI's response. It may have returned an unexpected format.");
    }
    throw new Error("Failed to get movie recommendation from the AI. The plot might be too abstract or there was a network issue.");
  }
}
