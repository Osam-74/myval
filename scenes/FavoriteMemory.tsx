
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const FavoriteMemory: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;
    
    const typeLine = async (content: string, speed = 45) => {
      for (let i = 0; i < content.length; i++) {
        if (!isMounted) return;
        setText(prev => prev + content[i]);
        await new Promise(r => setTimeout(r, speed));
      }
    };

    const backspace = async (chars: number, speed = 25) => {
      for (let i = 0; i < chars; i++) {
        if (!isMounted) return;
        setText(prev => prev.slice(0, -1));
        await new Promise(r => setTimeout(r, speed));
      }
    };

    const runScript = async () => {
      // Intro
      await typeLine("My favourite memory of you, babe…\n", 90);
      await new Promise(r => setTimeout(r, 5000));
      
      // Paragraph 1
      await typeLine("With you babe, every moment lingers,\nit's so difficult to have a particular favourite memory of someone who is my favourite from her head to toe, in and out her heart, mind, body and soul\n", 45);
      await new Promise(r => setTimeout(r, 5000));
      
      // Paragraph 2
      await typeLine("I could think of a lot,\nbut one of them was the day you finally left school, I remember I came to meet you at that white garment church.\n\nYou came over to my place before going home.\n\nWhat was special about it?\nProbably nothing… or so I thought.\n\nThat day, you came with all your load in big ‘bagco’.\n", 50);
      
      // Special Deletion Sequence
      const lineToDelete = "that your very heavy load that I almost couldn't carry... maybe not so heavy🤔...";
      await typeLine(lineToDelete, 55);
      await new Promise(r => setTimeout(r, 3000)); // Pause after "carry... maybe not so heavy"
      
      await backspace(lineToDelete.length); // Delete that specific line
      await new Promise(r => setTimeout(r, 2000)); // Pause after deletion
      
      // Paragraph 3 (Final)
      await typeLine("\n\nAnd somehow…\nit reminded me of the day you’ll finally pack your load\nout your Daddy’s house\nand come into this new Zaddy’s house 😉❤️‍🔥", 55);
      await new Promise(r => setTimeout(r, 5000));
    };

    runScript();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-full w-full p-8 md:p-16 bg-white overflow-y-auto pt-24">
      <div className="max-w-xs md:max-w-md w-full">
        <p className="text-[15px] md:text-[17px] font-bold leading-relaxed font-serif italic text-gray-900 whitespace-pre-wrap opacity-100">
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="inline-block w-0.5 h-4 bg-red-600 ml-1 translate-y-0.5"
          />
        </p>
      </div>
      {/* Spacer to allow scrolling if text gets long */}
      <div className="h-32 w-full flex-shrink-0" />
    </div>
  );
};
