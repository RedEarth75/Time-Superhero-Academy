import React from 'react';
import { audioService } from '../services/audioService';
import { Home, BookOpen, Scroll, List, Printer, Presentation, PenTool, CheckSquare } from 'lucide-react';
import { SUPERHEROES } from '../constants';
import { IdiomType } from '../types';

interface Props {
  onBack: () => void;
}

const LessonResources: React.FC<Props> = ({ onBack }) => {
  const handleBack = () => {
    audioService.playClick();
    onBack();
  };

  const print = () => window.print();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-24 text-gray-800">
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg comic-border shadow-sm print:hidden animate-slide-up">
        <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full flex items-center gap-2 font-bold">
          <Home className="w-6 h-6" /> Back to HQ
        </button>
        <button onClick={print} className="bg-blue-500 text-white px-4 py-2 rounded font-bold comic-border hover:bg-blue-600 flex items-center gap-2">
          <Printer className="w-5 h-5" /> Print Lesson
        </button>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-xl comic-border comic-shadow print:shadow-none print:border-none print:p-0 animate-slide-up">
        
        {/* Lesson Plan Header */}
        <div className="border-b-4 border-black pb-6 mb-8">
          <h1 className="text-4xl md:text-5xl comic-font uppercase mb-2 text-center">Time Superheroes</h1>
          <h2 className="text-xl font-bold text-gray-600 text-center uppercase tracking-widest">Mastering Time Idioms • Lesson Plan</h2>
          
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm font-bold bg-gray-100 p-4 rounded-lg border-2 border-gray-200">
             <div>
               <p><span className="text-blue-600">Grade Level:</span> 5th Grade EFL</p>
               <p><span className="text-blue-600">Duration:</span> 45 Minutes</p>
             </div>
             <div>
               <p><span className="text-blue-600">Objective:</span> Define and use six time idioms.</p>
               <p><span className="text-blue-600">Materials:</span> Whiteboard, Projector/Tablet for App, Worksheet.</p>
             </div>
          </div>
        </div>

        {/* Procedure */}
        <section className="mb-10">
          <h3 className="text-2xl comic-font uppercase border-l-8 border-yellow-400 pl-4 mb-6 flex items-center gap-2">
             <Presentation className="w-6 h-6" /> Lesson Procedure
          </h3>

          <div className="space-y-6">
            {/* Warm Up */}
            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <h4 className="font-black uppercase text-yellow-800 mb-2">1. Warm-Up (5 min)</h4>
              <p>Ask students: <em>"What do you do when you have 10 free minutes?"</em> Write answers on the board.</p>
            </div>

            {/* Introduction / The Setup */}
            <div className="bg-white p-4 rounded border-2 border-black">
              <h4 className="font-black uppercase text-black mb-4">2. Introduction: The Time Bank (10 min)</h4>
              <p className="mb-4 italic text-gray-600">Teacher: Draw a stick figure named "YOU" and a "Time Bank" with 10 coins 🪙 on the board.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="p-3 bg-blue-100 rounded">
                   <strong className="block uppercase text-blue-800">Spend Time</strong>
                   <span className="text-sm">Draw arrow from YOU to a BOOK 📖. Erase 1 coin.</span>
                   <p className="text-xs mt-1 italic">"You give a coin to the book. Good choice!"</p>
                 </div>
                 <div className="p-3 bg-red-100 rounded">
                   <strong className="block uppercase text-red-800">Waste Time</strong>
                   <span className="text-sm">Draw arrow from YOU to TRASH CAN 🗑️. Erase 1 coin.</span>
                   <p className="text-xs mt-1 italic">"Throwing a coin in the trash. It's gone!"</p>
                 </div>
                 <div className="p-3 bg-green-100 rounded">
                   <strong className="block uppercase text-green-800">Save Time</strong>
                   <span className="text-sm">Draw PIGGY BANK 🐷 labeled "Later". Add a coin!</span>
                   <p className="text-xs mt-1 italic">"Finish early? You get a coin for later."</p>
                 </div>
                 <div className="p-3 bg-purple-100 rounded">
                   <strong className="block uppercase text-purple-800">Make Time For</strong>
                   <span className="text-sm">Erase "TV" block on calendar, draw "HELP MOM".</span>
                   <p className="text-xs mt-1 italic">"You are busy, but you move things for what matters."</p>
                 </div>
                 <div className="p-3 bg-orange-100 rounded">
                   <strong className="block uppercase text-orange-800">Take Time</strong>
                   <span className="text-sm">Draw Seed 🌱 → Sprout 🌿 → Flower 🌻.</span>
                   <p className="text-xs mt-1 italic">"Don't rush. Good things take time to grow."</p>
                 </div>
                 <div className="p-3 bg-yellow-100 rounded">
                   <strong className="block uppercase text-yellow-800">Pass the Time</strong>
                   <span className="text-sm">Draw figure waiting for bus 🚌... reading a book.</span>
                   <p className="text-xs mt-1 italic">"Waiting is boring. Do something fun while you wait."</p>
                 </div>
              </div>
            </div>

            {/* Guided Practice */}
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <h4 className="font-black uppercase text-blue-800 mb-2">3. Guided Practice (20 min)</h4>
              <p>Launch the <strong>Time Superhero Academy</strong> app. Have students take turns reading scenarios and selecting the correct Superhero power.</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-10 break-before-page">
           <h3 className="text-2xl comic-font uppercase border-l-8 border-green-400 pl-4 mb-6 flex items-center gap-2">
             <BookOpen className="w-6 h-6" /> Story: Leo's Busy Day
          </h3>
          <div className="bg-white p-6 rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
             <p className="text-lg leading-loose font-serif text-gray-800">
               Leo had a very busy Saturday ahead of him. It was his best friend Sam’s surprise birthday party, and Leo wanted everything to be perfect.
               <br/><br/>
               First, Leo woke up early. He knew he had to <strong>make time for</strong> his chores before he could leave. He cleaned his room quickly to <strong>save time</strong>, using the "Turbo Saver" speed he learned about in school.
               <br/><br/>
               After his chores, he realized he had an hour before the party started. He didn't want to <strong>waste time</strong> watching TV, so he decided to <strong>spend time</strong> making a handmade card for Sam. He used his markers and stickers creatively.
               <br/><br/>
               When he walked to the bus stop, he saw the bus was delayed. "Oh no!" Leo thought. To <strong>pass the time</strong>, he hummed his favorite song and practiced his "Happy Birthday" singing. Finally, the bus arrived!
               <br/><br/>
               When he got to the party, he helped set up the cake. He made sure to <strong>take time</strong> placing the candles carefully so they wouldn't fall. The party was a huge success, and Leo was happy he used his time powers well!
             </p>
          </div>
        </section>

        {/* Worksheet Section */}
        <section className="break-before-page">
          <div className="flex items-center gap-2 mb-6 border-b-2 border-black pb-2">
             <PenTool className="w-6 h-6" />
             <h3 className="text-2xl comic-font uppercase">Worksheet: Time Superhero Mission!</h3>
          </div>

          <div className="space-y-8">
            {/* Part A */}
            <div className="bg-white border-2 border-black p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-4 uppercase flex items-center gap-2">
                <CheckSquare className="w-5 h-5" /> Part A: Match the Power
              </h4>
              <p className="mb-6 italic text-sm text-gray-600">Draw a line connecting the Superhero to their definition.</p>
              
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-8">
                  {Object.values(SUPERHEROES).map(h => (
                    <div key={h.idiom} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full border border-black ${h.color}`}></div>
                      <span className="font-black text-lg">{h.heroName}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-8">
                   {/* Shuffled definitions for display purpose */}
                   {[
                     { text: "Finds shortcuts to finish fast", idiom: "Save Time" },
                     { text: "Creates space for what matters", idiom: "Make Time For" },
                     { text: "Throws time away doing nothing", idiom: "Waste Time" },
                     { text: "Slows down to do things carefully", idiom: "Take Time" },
                     { text: "Uses time to do activities", idiom: "Spend Time" },
                     { text: "Makes waiting fun", idiom: "Pass the Time" }
                   ].map((def, i) => (
                    <div key={i} className="flex items-center gap-3 justify-end">
                      <span className="text-right text-sm font-medium">{def.text} <br/> <span className="text-xs text-gray-400">({def.idiom})</span></span>
                      <div className="w-3 h-3 rounded-full border border-black bg-gray-200"></div>
                    </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Part B */}
            <div className="bg-white border-2 border-black p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-4 uppercase flex items-center gap-2">
                <PenTool className="w-5 h-5" /> Part B: Complete the Mission
              </h4>
              <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300 text-center font-bold text-sm tracking-wide">
                WORD BANK: <br/>
                SPEND TIME • WASTE TIME • SAVE TIME • MAKE TIME FOR • TAKE TIME • PASS THE TIME
              </div>
              <ol className="list-decimal list-inside space-y-6 text-lg leading-relaxed">
                <li>I usually <span className="inline-block w-40 border-b-2 border-black"></span> reading comic books before bed.</li>
                <li>If we take the shortcut through the park, we can <span className="inline-block w-40 border-b-2 border-black"></span>.</li>
                <li>Please don't <span className="inline-block w-40 border-b-2 border-black"></span> playing video games when you have homework!</li>
                <li>You should always <span className="inline-block w-40 border-b-2 border-black"></span> to brush your teeth in the morning.</li>
                <li>The doctor is late, so let's read a magazine to <span className="inline-block w-40 border-b-2 border-black"></span>.</li>
                <li>It is important to <span className="inline-block w-40 border-b-2 border-black"></span> to study for the big test.</li>
              </ol>
            </div>
            
             {/* Answer Key */}
             <div className="mt-12 pt-4 border-t-2 border-dashed border-gray-300">
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">Answer Key (Teachers Only)</p>
                <p className="text-xs text-gray-400 rotate-180">
                   1. spend time, 2. save time, 3. waste time, 4. take time, 5. pass the time, 6. make time for
                </p>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default LessonResources;