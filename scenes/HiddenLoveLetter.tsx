
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letterContent = `
I could tell you things like…
I asked God for a flower,
and He gave me a tree.
I asked for a drop of water,
and He gave me the sky with a remote to outpour rain anytime and every time, I probably would have flooded the universe experimentally many years ago.

I could say roses are magenta,
violets are burgundy,
and recite all those beautiful incantations that people say…

But babe,
still finding the words to say to you
might take me forever to keep saying and keep finding.
To love is one thing.
To be loved is another.
To be loved by the one you love —
that is everything.
Such a rare blessing.

I fantasize about you every time
Like someone who has no job lol.
It's so piled up already.
Ask me,
and I’ll tell you, show you, and do to you what my fantasies are 😌

I love you deeply, babe.
This burning flame is not quenching anytime ❤️‍🔥
`;

export const HiddenLoveLetter: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full bg-white">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="envelope-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="cursor-pointer group relative"
            onClick={() => setIsOpen(true)}
          >
            {/* Professional Minimalist Envelope */}
            <div className="relative w-64 h-40 bg-white border border-red-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm flex items-center justify-center overflow-hidden">
               {/* Flap Designs */}
               <div className="absolute top-0 left-0 w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 100 60">
                     <path d="M0,0 L50,30 L100,0" fill="none" stroke="#fee2e2" strokeWidth="0.5" />
                     <path d="M0,60 L50,30 L100,60" fill="none" stroke="#fee2e2" strokeWidth="0.5" />
                  </svg>
               </div>
               
               <div className="z-10 bg-white px-4 py-2 border border-red-100 shadow-sm group-hover:bg-red-50 transition-all duration-500">
                  <span className="text-red-950 font-serif tracking-[0.3em] text-[10px] font-black uppercase">For Ife</span>
               </div>

               {/* Red Wax Seal */}
               <motion.div 
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ repeat: Infinity, duration: 3 }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-700 rounded-full flex items-center justify-center shadow-lg border border-red-800 z-20"
               >
                 <span className="text-white text-[10px]">❤️</span>
               </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-white flex items-center justify-center z-40 p-10 overflow-hidden"
          >
            <motion.div
              initial={{ y: '100vh' }}
              animate={{ y: '-150%' }}
              transition={{ duration: 45, ease: 'linear' }}
              onAnimationComplete={onComplete}
              className="max-w-sm text-center absolute"
            >
              <pre className="whitespace-pre-wrap font-serif text-[16px] md:text-[18px] leading-relaxed text-red-950 font-bold italic opacity-100">
                {letterContent}
              </pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
