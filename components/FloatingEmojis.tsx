
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EMOJIS = ['❤️‍🔥', '❤️', '💕', '😘', '😉', '🔥'];

interface EmojiInstance {
  id: number;
  char: string;
  x: number;
  size: number;
  duration: number;
}

export const FloatingEmojis: React.FC<{ slowMode?: boolean }> = ({ slowMode }) => {
  const [emojis, setEmojis] = useState<EmojiInstance[]>([]);

  useEffect(() => {
    const spawnRate = slowMode ? 3500 : 2000;
    const interval = setInterval(() => {
      const newEmoji: EmojiInstance = {
        id: Date.now(),
        char: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        x: Math.random() * 100,
        size: 0.8 + Math.random() * 0.4,
        duration: (14 + Math.random() * 6) * (slowMode ? 1.5 : 1),
      };
      setEmojis((prev) => [...prev, newEmoji]);
    }, spawnRate);

    return () => clearInterval(interval);
  }, [slowMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {emojis.map((emoji) => (
          <motion.div
            key={emoji.id}
            initial={{ y: '110vh', opacity: 0 }}
            animate={{ 
              y: '-20vh', 
              opacity: [0, 0.15, 0.15, 0],
              x: `${emoji.x}vw`
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: emoji.duration, ease: 'linear' }}
            onAnimationComplete={() => {
              setEmojis((prev) => prev.filter((e) => e.id !== emoji.id));
            }}
            style={{ fontSize: `${emoji.size * 2}rem` }}
            className="absolute select-none"
          >
            {emoji.char}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
