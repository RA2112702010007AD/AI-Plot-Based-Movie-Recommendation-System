import React, { useState, useCallback, useRef } from 'react';
import { getMovieRecommendation } from './services/geminiService';
import type { MovieRecommendation } from './types';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { SparklesIcon, RefreshIcon } from './components/Icons';

const App: React.FC = () => {
  const [plotDescription, setPlotDescription] = useState<string>('');
  const [recommendation, setRecommendation] = useState<MovieRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    if (!plotDescription.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const result = await getMovieRecommendation(plotDescription);
      setRecommendation(result);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [plotDescription, isLoading]);

  const handleReset = useCallback(() => {
    setRecommendation(null);
    setPlotDescription('');
    setError(null);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);
  
  const handleOpenModal = (url: string) => {
    setModalImageUrl(url);
  };

  const handleCloseModal = () => {
    setModalImageUrl(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-gray-200 font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <div className="w-full max-w-3xl text-center">
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Describe a book's plot or a movie idea, and I'll find a real movie that matches it.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="w-full space-y-4">
            <textarea
              value={plotDescription}
              onChange={(e) => setPlotDescription(e.target.value)}
              placeholder="e.g., A young wizard discovers his magical heritage on his eleventh birthday and attends a school of witchcraft and wizardry..."
              className="w-full h-40 p-4 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 resize-none shadow-lg"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !plotDescription.trim()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-70 transform hover:scale-105"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing Plot...
                </>
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Recommend Movie
                </>
              )}
            </button>
          </form>
        </div>

        <div className="w-full max-w-4xl mt-12">
          {isLoading && <Loader />}
          {error && (
            <div className="text-center">
              <div className="mb-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">{error}</div>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <RefreshIcon className="w-5 h-5 mr-2" />
                Try Again
              </button>
            </div>
          )}
          {recommendation && (
            <div className="animate-fade-in text-center">
              <MovieCard
                recommendation={recommendation}
                onPosterClick={handleOpenModal}
              />
              <button
                onClick={handleReset}
                className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <RefreshIcon className="w-5 h-5 mr-2" />
                Try Another Plot
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <Modal
        isOpen={!!modalImageUrl}
        onClose={handleCloseModal}
        imageUrl={modalImageUrl}
        title={recommendation?.title}
      />
    </div>
  );
};

export default App;