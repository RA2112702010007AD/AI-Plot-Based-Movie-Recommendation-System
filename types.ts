
export interface MovieRecommendation {
  title: string;
  year: number;
  rationale: string;
  plot: string;
  posterPrompt: string;
  posterBase64: string;
  matchScore: number;
  conceptualFit: string;
  matchingGenres: string[];
  predictedGenres: string[];
  audienceScore: number;
  noveltyScore: number;
  keywords: string[];
}
