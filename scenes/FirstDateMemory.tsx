
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FirstDateMemory: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000), 
      setTimeout(() => setStage(2), 3000), 
      setTimeout(() => setStage(3), 7500), 
      setTimeout(() => setStage(4), 11000), 
      setTimeout(() => setStage(5), 14500), 
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden p-6 bg-white">
      {/* Centered Top Text - Fixed Placement */}
      <div className="absolute top-16 left-0 w-full flex justify-center z-30 px-6">
        <AnimatePresence mode="wait">
          {stage >= 1 && stage < 5 && (
            <motion.h2
              key={stage < 3 ? "text1" : "text2"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1 }}
              className="text-[15px] md:text-[17px] font-serif text-center text-red-950 tracking-[0.15em] uppercase font-bold opacity-100"
            >
              {stage < 3 ? "You remember this? 😌" : "How about this? 😜"}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>

      <div className="relative w-[230px] h-[310px] md:w-[280px] md:h-[380px] z-10 flex items-center justify-center mt-12">
        <AnimatePresence>
          {stage === 2 && (
            <motion.img
              key="img1"
              src="/myval/image 4.png"
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100vw', opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl border-2 border-red-50"
            />
          )}
          {stage >= 3 && stage < 5 && (
            <motion.img
              key="img2"
              src="/myval/image 5.png"
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl border-2 border-red-50"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Stamp Area */}
      <AnimatePresence>
        {stage >= 4 && stage < 5 && (
          <motion.div
            initial={{ scale: 3, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: -6 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', damping: 12, stiffness: 100 }}
            className="absolute bottom-20 z-20 flex flex-col items-center gap-2"
          >
            <div className="bg-red-600 px-6 py-3 rounded-md shadow-2xl border-2 border-red-400 transform">
              <span className="text-[12px] md:text-[14px] font-bold text-white uppercase tracking-[0.2em] whitespace-nowrap">
                IT'S OUR FIRST DATE😅🤗❣️❤️‍🔥
              </span>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-2xl"
            >
              🌹
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center justify-center text-center max-w-sm z-40 px-6"
          >
            <p className="text-[16px] md:text-[18px] font-serif italic text-red-950 leading-relaxed font-bold opacity-100">
              Tell you a secret? I anticipate another one for us Baby.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
