import React, { useState } from 'react';
import Game from './components/Game';
import LessonResources from './components/LessonResources';
import { audioService } from './services/audioService';
import { Clock, Zap, BookOpen } from 'lucide-react';

function App() {
  const [view, setView] = useState<'home' | 'game' | 'lesson'>('home');

  const handleStart = () => {
    audioService.playClick();
    setView('game');
  };

  const handleLesson = () => {
    audioService.playClick();
    setView('lesson');
  };

  return (
    <div className="min-h-screen halftone-bg text-gray-800">
      {view === 'home' && (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl comic-border comic-shadow max-w-2xl w-full text-center relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-4 bg-yellow-400 border-b-2 border-black"></div>
            
            <div className="flex justify-center mb-6">
               <div className="bg-blue-500 p-4 rounded-full comic-border text-white animate-pulse">
                 <Clock className="w-16 h-16" />
               </div>
            </div>

            <h1 className="text-5xl md:text-6xl text-black mb-4 comic-font uppercase tracking-wider transform -rotate-1">
              Time Superhero <br/><span className="text-red-500">Academy</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 font-bold text-gray-600">
              Match the scenario to the correct Time Power!
            </p>

            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200 text-left">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" /> How to Play:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Read the mission scenario on the card.</li>
                  <li>Decide which <strong>Time Idiom</strong> matches the situation.</li>
                  <li>Select the matching <strong>Superhero</strong>.</li>
                  <li>Collect points to save the day!</li>
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={handleStart}
                  className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-4 px-6 rounded-xl comic-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center justify-center gap-2"
                >
                  <Zap className="w-6 h-6" /> Start Mission
                </button>
                <button
                  onClick={handleLesson}
                  className="bg-blue-400 hover:bg-blue-500 text-white text-xl font-bold py-4 px-6 rounded-xl comic-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all uppercase flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-6 h-6" /> Lesson Plan
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-sm text-gray-400 font-bold">
              Powered by Gemini API • 5th Grade Edition
            </div>
          </div>
        </div>
      )}
      
      {view === 'game' && (
        <Game onBack={() => setView('home')} />
      )}

      {view === 'lesson' && (
        <LessonResources onBack={() => setView('home')} />
      )}
    </div>
  );
}

export default App;