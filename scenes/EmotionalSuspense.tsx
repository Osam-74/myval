
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EmotionalSuspense: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 0), 
      setTimeout(() => setStep(2), 5500), 
      setTimeout(() => setStep(3), 6700), 
      setTimeout(() => setStep(4), 11000), 
      setTimeout(() => setStep(5), 12800), 
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="flex items-center justify-center h-full w-full p-8 bg-white">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.p
            key="l1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[18px] md:text-[22px] font-serif text-center text-gray-950 font-black italic opacity-100"
          >
            I’ll keep choosing you, baby…
          </motion.p>
        )}
        {step === 3 && (
          <motion.p
            key="l2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[18px] md:text-[22px] font-serif text-center text-red-950 font-black italic opacity-100"
          >
            But here’s the hard part…
          </motion.p>
        )}
        {step === 5 && (
          <motion.div
            key="l3"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -2, 2, 0]
            }}
            transition={{ 
              opacity: { duration: 2 },
              y: { delay: 1, duration: 1.5, repeat: 0 }
            }}
            className="text-[24px] md:text-[32px] font-black font-serif text-center text-red-600 tracking-[0.15em] uppercase leading-tight opacity-100"
          >
            Will you keep choosing me? ❤️‍🔥
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
