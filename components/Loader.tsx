
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <h3 className="text-xl font-semibold text-white">Finding Your Movie...</h3>
      <p className="text-gray-400">The AI is scanning its vast library of films.</p>
    </div>
  );
};

export default Loader;
