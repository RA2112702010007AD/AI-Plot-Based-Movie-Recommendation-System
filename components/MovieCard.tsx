
import React, { useState } from 'react';
import type { MovieRecommendation } from '../types';
import { TargetIcon, LightBulbIcon, TagIcon, BookOpenIcon, ThumbsUpIcon, ThumbsDownIcon, UserGroupIcon, StarIcon, KeyIcon } from './Icons';

interface MovieCardProps {
  recommendation: MovieRecommendation;
  onPosterClick: (url: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ recommendation, onPosterClick }) => {
  const { title, year, rationale, posterBase64, matchScore, conceptualFit, matchingGenres, predictedGenres, audienceScore, noveltyScore, keywords } = recommendation;
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  
  const posterUrl = `data:image/png;base64,${posterBase64}`;

  return (
    <div 
      className="relative aspect-[2/3] md:aspect-video w-full max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 group cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-500/20"
      onClick={() => onPosterClick(posterUrl)}
      role="button"
      aria-label={`View details and larger poster for ${title}`}
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onPosterClick(posterUrl)}
    >
      {/* Background Poster Image */}
      <img 
        src={posterUrl} 
        alt={`Conceptual poster for ${title}`} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />

      {/* Content Container */}
      <div className="relative p-6 md:p-8 h-full flex flex-col justify-end text-white">
        <div>
          {/* Main Info */}
          <div>
            <span className="text-sm font-semibold text-blue-400 tracking-wide uppercase">{year}</span>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mt-1 text-shadow">{title}</h2>
            <p className="mt-3 text-gray-300 italic">"{rationale}"</p>
          </div>

          {/* Predicted Genres */}
          {predictedGenres && predictedGenres.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs uppercase font-bold mb-2">
                <BookOpenIcon className="w-4 h-4" />
                <span>Your Plot's Genre</span>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {predictedGenres.map(genre => (
                    <span key={genre} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-900/70 text-blue-300">
                        {genre}
                    </span>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="my-4 border-t border-gray-600/50" />

          {/* AI Match Metrics */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">AI Match Metrics</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <MetricBlock icon={<TargetIcon className="w-4 h-4" />} title="Match Score">
                <p className="text-2xl font-semibold text-green-400">{matchScore}%</p>
              </MetricBlock>

              <MetricBlock icon={<UserGroupIcon className="w-4 h-4" />} title="Audience Score">
                <p className="text-2xl font-semibold text-yellow-400">{audienceScore}%</p>
              </MetricBlock>
              
              <MetricBlock icon={<LightBulbIcon className="w-4 h-4" />} title="Conceptual Fit">
                <p className="text-xl font-semibold text-purple-400">{conceptualFit}</p>
              </MetricBlock>

              <MetricBlock icon={<StarIcon className="w-4 h-4" />} title="Novelty Score">
                <p className="text-2xl font-semibold text-cyan-400">{noveltyScore}%</p>
              </MetricBlock>
            </div>

            <div className="space-y-3">
              {matchingGenres && matchingGenres.length > 0 && (
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-xs uppercase font-bold mb-2">
                    <TagIcon className="w-4 h-4" />
                    <span>Relevant Genres</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {matchingGenres.slice(0, 3).map(genre => (
                        <span key={genre} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-700 text-gray-300">
                            {genre}
                        </span>
                    ))}
                  </div>
                </div>
              )}
              {keywords && keywords.length > 0 && (
                 <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-xs uppercase font-bold mb-2">
                    <KeyIcon className="w-4 h-4" />
                    <span>Connecting Keywords</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {keywords.slice(0, 5).map(keyword => (
                        <span key={keyword} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-900/70 text-teal-300">
                            {keyword}
                        </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Feedback Section */}
          <div className="mt-6 pt-4 border-t border-gray-600/50">
            {feedback ? (
              <p className="text-center font-semibold text-green-400">Thank you for your feedback!</p>
            ) : (
              <>
                <h3 className="text-sm text-center font-semibold text-gray-400 uppercase tracking-wider mb-3">Was this recommendation helpful?</h3>
                <div className="flex justify-center gap-6">
                  <button
                    onClick={(e) => { e.stopPropagation(); setFeedback('up'); }}
                    aria-label="Mark recommendation as helpful"
                    className="p-3 rounded-full text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <ThumbsUpIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setFeedback('down'); }}
                    aria-label="Mark recommendation as not helpful"
                    className="p-3 rounded-full text-gray-400 hover:text-red-400 hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <ThumbsDownIcon className="w-6 h-6" />
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

interface MetricBlockProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const MetricBlock: React.FC<MetricBlockProps> = ({ icon, title, children }) => (
  <div className="flex flex-col items-center justify-center text-center p-3 bg-white/5 rounded-lg">
    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase font-bold">
      {icon}
      <span>{title}</span>
    </div>
    <div className="mt-1">{children}</div>
  </div>
);

export default MovieCard;
