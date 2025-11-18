import React from 'react';
import { FilmIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm shadow-lg py-4 text-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-1">
          <FilmIcon className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mr-3" />
          <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wider">
            Novel Movie Recommender
          </h1>
        </div>
        <p className="text-sm font-bold text-gray-300">
          Made By Anurag Das (RA2112702010007)
        </p>
      </div>
    </header>
  );
};

export default Header;