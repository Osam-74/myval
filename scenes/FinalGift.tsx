
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

enum FinalStage {
  PROPOSAL = 'PROPOSAL',
  THANK_YOU = 'THANK_YOU',
  PRE_GIFT = 'PRE_GIFT',
  REVEALED = 'REVEALED'
}

export const FinalGift: React.FC = () => {
  const [stage, setStage] = useState<FinalStage>(FinalStage.PROPOSAL);

  // Using local image from public folder - gift reveal
  const giftImageUrl = "/image 3.png";

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-6 text-center overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        {stage === FinalStage.PROPOSAL && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 1.2 }}
            className="flex flex-col items-center gap-8 max-w-sm"
          >
            <div className="space-y-4">
              <h2 className="text-[26px] md:text-[32px] font-serif font-black text-red-950 tracking-tight leading-tight opacity-100">
                Babe! Will you be my Val? ❤️‍🔥
              </h2>
              <p className="text-[13px] md:text-[14px] font-bold text-gray-500 italic leading-relaxed opacity-100">
                It feels strange asking though coz you will always be my Val but answer anyways🌚😅
              </p>
            </div>

            <div className="flex flex-col w-full gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStage(FinalStage.THANK_YOU)}
                className="w-full py-4 bg-red-600 text-white font-black text-[14px] uppercase tracking-[0.2em] rounded-xl shadow-xl border border-red-500"
              >
                Yes, Absolutely! ❤️
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStage(FinalStage.THANK_YOU)}
                className="w-full py-4 bg-white text-red-600 font-black text-[14px] uppercase tracking-[0.2em] rounded-xl shadow-md border border-red-100"
              >
                Yes! 🌹
              </motion.button>
            </div>
          </motion.div>
        )}

        {stage === FinalStage.THANK_YOU && (
          <motion.div
            key="thank-you"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center gap-8 max-w-md p-8 md:p-12 bg-red-50/40 rounded-[2rem] border border-red-100 shadow-sm"
          >
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-5xl"
            >
              🥹❤️‍🔥
            </motion.div>
            <div className="space-y-6">
              <h3 className="text-red-900 font-serif text-[20px] font-bold tracking-wide italic">My Dearest Ifemi,</h3>
              <p className="text-[16px] md:text-[18px] font-serif text-gray-950 leading-relaxed font-bold opacity-100">
                Thank you so much for the gift of your love. It means the world to me.
              </p>
              <p className="text-[15px] md:text-[17px] font-serif text-gray-800 leading-relaxed font-bold opacity-100 italic">
                And for that beautiful kind gesture gift you sent to me... I truly cherish it and your golden heart. 🌹
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStage(FinalStage.PRE_GIFT)}
              className="mt-6 px-10 py-4 bg-red-900 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-full shadow-lg"
            >
              Continue to your gift
            </motion.button>
          </motion.div>
        )}

        {stage === FinalStage.PRE_GIFT && (
          <motion.div
            key="pre-gift"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-10 max-w-xs"
          >
            <div className="space-y-5">
               <p className="text-[15px] md:text-[17px] font-black italic text-red-950 opacity-100 leading-relaxed">
                 I promise we'll go out some other time but I have a little gift for you, unwrap below
               </p>
               <motion.p 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="text-[12px] font-black text-red-700 uppercase tracking-[0.4em] mt-8 opacity-100"
               >
                 Tap to unwrap 🎁
               </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ 
                scale: 1,
                rotate: [0, -2, 2, 0]
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              className="cursor-pointer group relative mt-2"
              onClick={() => setStage(FinalStage.REVEALED)}
            >
              <div className="w-44 h-44 bg-red-50 rounded-3xl shadow-2xl flex items-center justify-center relative border-2 border-red-100 group-hover:bg-red-100 transition-colors duration-500">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                   <div className="w-full h-5 bg-red-300 absolute" />
                   <div className="h-full w-5 bg-red-300 absolute" />
                </div>
                <div className="z-10 bg-white p-4 rounded-full shadow-lg">
                  <span className="text-2xl">🎁</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {stage === FinalStage.REVEALED && (
          <motion.div
            key="revealed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-10 w-full max-w-md"
          >
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                boxShadow: ["0 0 0px rgba(255,50,50,0)", "0 0 50px rgba(255,50,50,0.3)", "0 0 0px rgba(255,50,50,0)"]
              }}
              transition={{ 
                y: { type: 'spring', damping: 20, stiffness: 50 },
                scale: { duration: 1.2, ease: "easeOut" },
                rotate: { duration: 1.5, ease: "backOut" },
                boxShadow: { repeat: Infinity, duration: 4 }
              }}
              className="relative w-full aspect-[4/5] max-w-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src={giftImageUrl} 
                alt="Your Gift" 
                className="w-full h-full object-cover"
                onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   if (target.src !== "https://picsum.photos/seed/gift/600/800") {
                      target.src = "https://picsum.photos/seed/gift/600/800";
                   }
                }}
              />
              
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 2.5 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute inset-0 bg-white z-20 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-red-500 rounded-full blur-3xl opacity-50" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 2 }}
              className="space-y-4 px-4"
            >
              <h2 className="text-[24px] md:text-[30px] font-serif font-black text-red-950 tracking-tight uppercase opacity-100 leading-tight">
                Happy Valentine, Ifemi ❤️‍🔥
              </h2>
              <p className="text-red-700 font-bold italic text-[15px] tracking-wide opacity-100">
                My world makes even more sense with you.
              </p>
            </motion.div>
            
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: -300 - Math.random() * 200,
                  x: (Math.random() - 0.5) * 400
                }}
                transition={{ 
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className="absolute top-1/2 left-1/2 text-3xl"
              >
                {['❤️‍🔥', '❤️', '💕', '🌹', '✨'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
