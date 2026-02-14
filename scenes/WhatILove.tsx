
import React from 'react';
import { motion } from 'framer-motion';

const content = [
  "My Charisma Baby",
  "I love the way you handle things.",
  "I love how strong and energetic you are — even with business, even with life, and with ME.",
  "You’re not a lazy bone… though I don’t always love how much you work and get so stressed, na me go suffer am😒.",
  "Truth is, nothing worries me more than seeing you stressed, again... na me go suffer am.",
  "You’re beautiful and down to earth. Sweet, Yummy, Crunchy, Loving, Caring… but not too caring by the way...yea, that's true.. 😏 (it’s been a while since you asked if I’ve eaten 😂)",
  "A lady like you is far-fetched in the outside world. And I truly love the woman you’re becoming.",
  "Just so much to say… ❤️‍🔥"
];

export const WhatILove: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full p-6 md:p-12 overflow-y-auto bg-white">
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.005 }}
        transition={{ duration: 40, ease: "linear" }}
        className="max-w-xs md:max-w-md space-y-7 py-24"
      >
        {content.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.6, duration: 1.5 }}
            className={`text-[15px] md:text-[17px] font-serif text-center leading-relaxed tracking-wide opacity-100 font-bold ${i === content.length - 1 ? 'text-red-700 text-[18px] md:text-[20px] mt-10' : 'text-gray-950'}`}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};
