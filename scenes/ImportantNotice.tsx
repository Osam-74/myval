
import React from 'react';
import { motion } from 'framer-motion';

export const ImportantNotice: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full w-full p-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-md w-full bg-white border border-red-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] rounded-2xl p-10 md:p-14 relative overflow-hidden"
      >
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-100 via-red-300 to-red-100" />
        
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-3xl"
          >
            📢
          </motion.div>
          
          <h3 className="font-serif text-[18px] md:text-[22px] font-bold text-red-950 tracking-[0.1em] uppercase">
            A Gentle Request
          </h3>
          
          <div className="space-y-4">
            <p className="text-[15px] md:text-[17px] font-serif italic text-gray-800 leading-relaxed font-bold opacity-100">
              Babe, I need you to find a quiet spot and sit down for this.
            </p>
            <p className="text-[14px] md:text-[16px] font-serif text-gray-700 leading-relaxed font-bold opacity-100">
              Please pay close attention to every word that follows. It's going to take a few moments of your heart's attention, and I promise... it's all for you. ❤️‍🔥
            </p>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 8, ease: "linear" }}
            className="h-[2px] bg-red-100 mt-4 overflow-hidden"
          >
             <div className="h-full bg-red-500 w-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
