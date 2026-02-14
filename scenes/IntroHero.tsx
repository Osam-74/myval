
import React from 'react';
import { motion } from 'framer-motion';

export const IntroHero: React.FC = () => {
  // Using local image from public folder - "Hey babe" background
  const imageUrl = "/image 2.jpg";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="relative flex items-center justify-center h-full w-full bg-white overflow-hidden"
    >
      {/* Background image container */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-red-50"
      >
        <img 
          src={imageUrl} 
          className="w-full h-full object-cover" 
          alt="Hero Background"
          loading="eager"
          onError={(e) => {
             const target = e.target as HTMLImageElement;
             if (target.src !== "https://picsum.photos/seed/romantic/1200/800") {
               console.error("Hero background failed to load, switching to fallback");
               target.src = "https://picsum.photos/seed/romantic/1200/800";
             }
          }}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 2 }}
        className="font-serif text-[26px] md:text-[32px] font-bold text-red-950 text-center tracking-[0.1em] z-10 px-8 drop-shadow-sm"
      >
        Hey Babe! ❤️‍🔥
      </motion.h1>
    </motion.div>
  );
};
