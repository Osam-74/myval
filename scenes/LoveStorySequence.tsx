
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  "Come to think of it…",
  "From “Hello, I can help you fix your JAMB issue…”",
  "To Forever in love with you ❤️‍🔥",
  "Funny how love sneaks in when you least expect it 😉",
  "You even got the Jamb issue fixed for FREE as a birthday kind gesture😁",
  "One conversation…",
  "One connection…",
  "And my world made even more sense with you."
];

export const LoveStorySequence: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 5400);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="flex items-center justify-center h-full w-full p-8 bg-white">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 1.5 }}
          className="text-[16px] md:text-[19px] text-center leading-relaxed font-semibold max-w-lg font-serif text-gray-900 italic opacity-100"
        >
          {lines[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};
