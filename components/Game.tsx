import React, { useState, useEffect, useCallback } from 'react';
import { Scenario, IdiomType, GameStats } from '../types';
import { SUPERHEROES, INITIAL_SCENARIOS } from '../constants';
import GameCard from './GameCard';
import SuperheroBadge from './SuperheroBadge';
import { generateNewScenarios } from '../services/geminiService';
import { audioService } from '../services/audioService';
import { RefreshCw, Star, Trophy, Home, ArrowRight } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const Game: React.FC<Props> = ({ onBack }) => {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIdiom, setSelectedIdiom] = useState<IdiomType | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [stats, setStats] = useState<GameStats>({ correct: 0, total: 0, streak: 0 });
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Shuffle scenarios on mount
  useEffect(() => {
    const shuffled = [...INITIAL_SCENARIOS].sort(() => Math.random() - 0.5);
    setScenarios(shuffled);
  }, []);

  const handleChoice = (idiom: IdiomType) => {
    if (feedback !== null) return; // Prevent multiple clicks

    setSelectedIdiom(idiom);
    const currentScenario = scenarios[currentIndex];
    const isCorrect = currentScenario.correctIdiom === idiom;

    if (isCorrect) {
      audioService.playCorrect();
      setFeedback('correct');
      setStats(prev => ({
        correct: prev.correct + 1,
        total: prev.total + 1,
        streak: prev.streak + 1
      }));
    } else {
      audioService.playIncorrect();
      setFeedback('incorrect');
      setStats(prev => ({
        ...prev,
        total: prev.total + 1,
        streak: 0
      }));
    }
  };

  const nextCard = () => {
    audioService.playFlip();
    setSelectedIdiom(null);
    setFeedback(null);
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleBack = () => {
    audioService.playClick();
    onBack();
  };

  const handleGenerateMore = async () => {
    audioService.playClick();
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const newScenarios = await generateNewScenarios(6);
      setScenarios(prev => [...prev, ...newScenarios]);
      // If we were at summary, move to the new cards
      if (showSummary) {
        setShowSummary(false);
        setCurrentIndex(scenarios.length); // Index of the first new card
      }
    } catch (e) {
      alert("Failed to generate missions. Please check your API Key configuration.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (scenarios.length === 0) return <div className="p-10 text-center font-bold text-2xl animate-pulse">Loading Deck...</div>;

  if (showSummary) {
    return (
      <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center min-h-[60vh] animate-slide-up">
        <div className="bg-white p-8 rounded-xl comic-border comic-shadow text-center w-full max-w-lg">
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-4xl comic-title mb-4">Mission Complete!</h2>
          <div className="text-2xl mb-6 space-y-2">
            <p>Score: <span className="font-bold text-blue-600">{stats.correct}</span> / {stats.total}</p>
            <p>Best Streak: <span className="font-bold text-green-600">{stats.streak}</span></p>
          </div>
          
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleGenerateMore}
              disabled={isGenerating}
              className="bg-purple-500 text-white font-bold py-3 px-6 rounded-lg comic-border hover:bg-purple-600 flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <RefreshCw className="animate-spin w-5 h-5" />
              ) : (
                <Star className="w-5 h-5" />
              )}
              {isGenerating ? "Summoning..." : "Generate New Missions (AI)"}
            </button>
            <button 
              onClick={handleBack}
              className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg comic-border hover:bg-gray-300"
            >
              Back to HQ
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentScenario = scenarios[currentIndex];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pb-24">
      {/* Header Stats */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg comic-border shadow-sm animate-slide-up">
        <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full">
          <Home className="w-6 h-6" />
        </button>
        <div className="flex gap-6 font-bold text-lg md:text-xl">
          <span className="text-blue-600">Score: {stats.correct}</span>
          <span className="text-orange-500">Streak: {stats.streak}</span>
          <span className="text-gray-500">Card: {currentIndex + 1}/{scenarios.length}</span>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Card & Feedback */}
        <div className="flex flex-col gap-6">
          <div key={currentScenario.id}>
             <GameCard scenario={currentScenario} />
          </div>
          
          {feedback && (
            <div className={`
              text-center p-4 rounded-lg comic-border animate-pop-in
              ${feedback === 'correct' ? 'bg-green-100 border-green-600 text-green-800' : 'bg-red-100 border-red-600 text-red-800'}
            `}>
              <h3 className="text-2xl comic-title uppercase">
                {feedback === 'correct' ? 'Pow! You got it!' : 'Oops! Try again next time!'}
              </h3>
              <p className="font-bold mt-2">
                {feedback === 'incorrect' && `Correct answer: ${currentScenario.correctIdiom}`}
              </p>
              <button 
                onClick={nextCard}
                className="mt-4 bg-black text-white px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto"
              >
                Next Mission <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Choices Grid */}
        <div className="grid grid-cols-2 gap-4">
          {Object.values(SUPERHEROES).map((hero, index) => (
            <SuperheroBadge
              key={hero.idiom}
              profile={hero}
              onClick={() => handleChoice(hero.idiom)}
              selected={selectedIdiom === hero.idiom}
              // Staggered entrance animation
              className={`
                animate-pop-in
                ${feedback !== null && hero.idiom !== currentScenario.correctIdiom ? 'opacity-50 grayscale' : 'opacity-100'}
                ${feedback === 'correct' && hero.idiom === currentScenario.correctIdiom ? 'ring-4 ring-green-500 scale-105 z-10' : ''}
                ${feedback === 'incorrect' && hero.idiom === selectedIdiom ? 'ring-4 ring-red-500' : ''}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;