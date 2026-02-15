
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Scene } from './types';
import { AudioController } from './components/AudioController';
import { FloatingEmojis } from './components/FloatingEmojis';

// Scenes
import { PreCallNotice } from './scenes/PreCallNotice';
import { IntroHero } from './scenes/IntroHero';
import { ImportantNotice } from './scenes/ImportantNotice';
import { LoveStorySequence } from './scenes/LoveStorySequence';
import { FirstDateMemory } from './scenes/FirstDateMemory';
import { FavoriteMemory } from './scenes/FavoriteMemory';
import { WhatILove } from './scenes/WhatILove';
import { HiddenLoveLetter } from './scenes/HiddenLoveLetter';
import { EmotionalSuspense } from './scenes/EmotionalSuspense';
import { FinalGift } from './scenes/FinalGift';

const BorderHearts: React.FC = () => {
  const hearts = [
    { id: 1, duration: 22, delay: 0, icon: '❤️' },
    { id: 2, duration: 30, delay: -4, icon: '❤️‍🔥' },
    { id: 3, duration: 26, delay: -10, icon: '💕' },
    { id: 4, duration: 33, delay: -18, icon: '💖' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-40">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-[16px] md:text-[20px] filter drop-shadow-md opacity-40"
          animate={{
            offsetDistance: ["0%", "100%"]
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "linear",
            delay: heart.delay
          }}
          style={{
            offsetPath: "rect(0% auto auto 0% round 8px)",
            offsetRotate: "0deg",
          }}
        >
          {heart.icon}
        </motion.div>
      ))}
    </div>
  );
};

const SlideToPick: React.FC<{ onAccept: () => void }> = ({ onAccept }) => {
  const x = useMotionValue(0);
  const backgroundWidth = 280;
  const handleSize = 60;
  const edgePadding = 4;
  const dragRange = backgroundWidth - handleSize - (edgePadding * 2);
  
  const opacity = useTransform(x, [0, dragRange * 0.5], [1, 0]);
  const scale = useTransform(x, [0, dragRange], [1, 1.1]);

  return (
    <div className="relative w-[280px] h-[68px] bg-white/10 backdrop-blur-xl rounded-full p-1 border border-white/20 shadow-2xl overflow-hidden group">
      {/* Beaming Border Effect */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          boxShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 15px rgba(255,255,255,0.3)",
            "0 0 0px rgba(255,255,255,0)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full border-2 border-white/40 pointer-events-none"
      />

      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center pl-12 pointer-events-none"
      >
        <span className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase">Slide to pick</span>
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: dragRange }}
        dragElastic={0.1}
        dragSnapToOrigin={false}
        style={{ x, scale }}
        onDragEnd={(_, info) => {
          if (info.offset.x > dragRange * 0.8 || x.get() > dragRange * 0.8) {
            onAccept();
          } else {
            // Spring back if not far enough
            x.set(0);
          }
        }}
        className="relative z-10 w-[60px] h-[60px] bg-green-500 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg"
      >
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<Scene>(Scene.PRE_CALL);
  
  // Using local image from public folder
  const incomingCallImage = "/myval/image 1.png";

  useEffect(() => {
    let timer: any;

    if (currentScene === Scene.HERO_INTRO) {
      timer = setTimeout(() => setCurrentScene(Scene.IMPORTANT_NOTICE), 15000);
    } else if (currentScene === Scene.IMPORTANT_NOTICE) {
      timer = setTimeout(() => setCurrentScene(Scene.LOVE_STORY), 10000);
    } else if (currentScene === Scene.LOVE_STORY) {
      timer = setTimeout(() => setCurrentScene(Scene.FIRST_DATE), 44000);
    } else if (currentScene === Scene.FIRST_DATE) {
      timer = setTimeout(() => setCurrentScene(Scene.FAVORITE_MEMORY), 19500);
    } else if (currentScene === Scene.FAVORITE_MEMORY) {
      timer = setTimeout(() => setCurrentScene(Scene.WHAT_I_LOVE), 75000);
    } else if (currentScene === Scene.WHAT_I_LOVE) {
      timer = setTimeout(() => setCurrentScene(Scene.HIDDEN_LETTER), 45000);
    } else if (currentScene === Scene.SUSPENSE) {
      timer = setTimeout(() => setCurrentScene(Scene.FINAL_GIFT), 24000);
    }

    return () => clearTimeout(timer);
  }, [currentScene]);

  const renderScene = () => {
    switch (currentScene) {
      case Scene.PRE_CALL:
        return <PreCallNotice onAccept={() => setCurrentScene(Scene.START)} />;
      case Scene.START:
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-between h-full relative py-20 bg-[#1c1c1e]"
          >
            <div className="flex flex-col items-center gap-2 mt-4">
              <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-white text-3xl md:text-4xl font-serif tracking-widest uppercase font-light"
              >
                SUGARPLUM❤️‍🔥
              </motion.h2>
              <motion.p 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 text-lg md:text-xl font-light tracking-[0.3em] uppercase"
              >
                Calling...
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
              className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative bg-zinc-800"
            >
              <img 
                src={incomingCallImage} 
                alt="Ife" 
                className="w-full h-full object-cover"
                loading="eager"
                
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            
            <div className="mb-12">
              <SlideToPick onAccept={() => setCurrentScene(Scene.HERO_INTRO)} />
            </div>
          </motion.div>
        );
      case Scene.HERO_INTRO: return <IntroHero />;
      case Scene.IMPORTANT_NOTICE: return <ImportantNotice />;
      case Scene.LOVE_STORY: return <LoveStorySequence />;
      case Scene.FIRST_DATE: return <FirstDateMemory />;
      case Scene.FAVORITE_MEMORY: return <FavoriteMemory />;
      case Scene.WHAT_I_LOVE: return <WhatILove />;
      case Scene.HIDDEN_LETTER: return <HiddenLoveLetter onComplete={() => setCurrentScene(Scene.SUSPENSE)} />;
      case Scene.SUSPENSE: return <EmotionalSuspense />;
      case Scene.FINAL_GIFT: return <FinalGift />;
      default: return null;
    }
  };

  return (
    <div className={`relative h-screen w-screen selection:bg-red-100 selection:text-red-900 overflow-hidden ${currentScene === Scene.START || currentScene === Scene.PRE_CALL ? 'p-0' : 'p-[25px] bg-white text-[#1a0a0a]'}`}>
      
      {currentScene !== Scene.START && currentScene !== Scene.PRE_CALL && (
        <>
          <motion.div 
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[25px] border-[1.5px] border-red-500 pointer-events-none z-40 rounded-sm"
          />
          
          <div className="absolute inset-[25px] pointer-events-none z-40">
            <BorderHearts />
          </div>

          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] animate-beam opacity-30">
              <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-red-100/50 rounded-full blur-[110px]" />
              <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-pink-50/50 rounded-full blur-[130px]" />
              <div className="absolute top-[40%] right-[30%] w-[350px] h-[350px] bg-red-50/60 rounded-full blur-[90px]" />
            </div>
          </div>

          <FloatingEmojis slowMode={currentScene === Scene.FAVORITE_MEMORY} />
        </>
      )}
      
      <AudioController />
      
      <main className={`relative h-full w-full z-10 overflow-hidden ${currentScene === Scene.START || currentScene === Scene.PRE_CALL ? '' : 'rounded-sm bg-white/30 backdrop-blur-[1px]'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="h-full w-full"
          >
            {renderScene()}
          </motion.div>
        </AnimatePresence>
      </main>

      {currentScene !== Scene.START && currentScene !== Scene.PRE_CALL && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
      )}
    </div>
  );
};

export default App;
