
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreCallNoticeProps {
  onAccept: () => void;
}

export const PreCallNotice: React.FC<PreCallNoticeProps> = ({ onAccept }) => {
  const [showCheekyMessage, setShowCheekyMessage] = useState(false);

  const triggerAudio = () => {
    // Dispatch a custom event that AudioController is listening for.
    // This happens synchronously inside the click handler, which browsers allow.
    window.dispatchEvent(new CustomEvent('unlock-audio'));
  };

  const handleYes = () => {
    triggerAudio();
    onAccept();
  };

  const handleNo = () => {
    triggerAudio();
    setShowCheekyMessage(true);
    setTimeout(() => {
      onAccept();
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-white p-8 text-center">
      <AnimatePresence mode="wait">
        {!showCheekyMessage ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-xs space-y-10"
          >
            <h2 className="font-serif text-[22px] md:text-[26px] font-black text-red-950 leading-tight">
              Baby! can i call you, i need to tell you a short story about us..
            </h2>
            
            <div className="flex flex-col gap-3 w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleYes}
                className="w-full py-4 bg-red-600 text-white font-black text-[14px] uppercase tracking-[0.2em] rounded-xl shadow-lg border border-red-500"
              >
                Yes, Of course! ❤️
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNo}
                className="w-full py-4 bg-white text-gray-400 font-bold text-[13px] uppercase tracking-[0.1em] rounded-xl border border-gray-100"
              >
                No 🌚
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cheeky"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <p className="font-serif italic text-[20px] md:text-[24px] text-red-950 font-black">
              Ok! I will call you anyways 😅🌚
            </p>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-4xl"
            >
              📞
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
