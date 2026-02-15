
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const AudioController: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using local audio file from public folder
    const primaryUrl = "/myval/you.mp3";
    const fallbackUrl = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808f3030e.mp3";

    const playAudio = async () => {
      if (audioRef.current && audioRef.current.paused) {
        try {
          await audioRef.current.play();
          console.debug("Audio playing successfully.");
        } catch (err) {
          console.warn("Autoplay blocked or failed. User interaction required.", err);
        }
      }
    };

    const unlockMedia = () => {
        if (audioRef.current) {
            audioRef.current.load();
            playAudio();
        }
    };

    // Listen for the custom event from user interaction buttons
    window.addEventListener('unlock-audio', playAudio);

    // Initial interaction handlers to prime the audio context
    const events = ['click', 'touchstart', 'mousedown'];
    events.forEach(event => window.addEventListener(event, unlockMedia, { once: true }));

    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.src = primaryUrl;
      console.log("Audio source set to:", primaryUrl);
      
      const handleError = () => {
        if (audioRef.current) {
          console.error("Audio error occurred. Current src:", audioRef.current.src);
          // Try fallback if YouTube source fails
          if (audioRef.current.src !== fallbackUrl) {
            console.warn("YouTube audio failed. Using fallback audio.");
            console.log("Switching to fallback:", fallbackUrl);
            audioRef.current.src = fallbackUrl;
            audioRef.current.load();
            audioRef.current.play().catch(() => {});
          }
        }
      };

      audioRef.current.addEventListener('error', handleError);
      
      // Attempt to play immediately after setup
      setTimeout(() => {
        playAudio();
      }, 500);
      
      return () => {
        audioRef.current?.removeEventListener('error', handleError);
        window.removeEventListener('unlock-audio', playAudio);
        events.forEach(event => {
          window.removeEventListener(event, unlockMedia);
        });
      };
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-8 right-8 z-[100]">
      <audio
        ref={audioRef}
        loop
        playsInline
        preload="auto"
      />
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={toggleMute}
        className="bg-white/10 hover:bg-white/30 backdrop-blur-xl p-3.5 rounded-full transition-all border border-white/20 shadow-2xl active:scale-90 flex items-center justify-center group"
      >
        {isMuted ? (
          <VolumeX className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
        )}
      </motion.button>
    </div>
  );
};
