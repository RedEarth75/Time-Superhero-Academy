import React from 'react';
import { Scenario } from '../types';

interface Props {
  scenario: Scenario;
}

const GameCard: React.FC<Props> = ({ scenario }) => {
  return (
    <div className="w-full max-w-md mx-auto perspective-1000 animate-slide-up">
      <div className="relative bg-white p-8 rounded-xl comic-border comic-shadow transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center comic-border font-bold text-xl z-10 animate-bounce">
          ?
        </div>
        
        <h3 className="text-center text-gray-500 font-bold uppercase tracking-widest mb-4">
          Mission Scenario
        </h3>
        
        <p className="text-2xl md:text-3xl font-bold text-center text-gray-800 leading-snug font-comic min-h-[120px] flex items-center justify-center">
          "{scenario.text}"
        </p>

        <div className="mt-6 flex justify-center">
          <span className="inline-block px-3 py-1 bg-black text-white text-sm font-bold rounded transform -rotate-2">
            WHAT TIME IS IT?
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;