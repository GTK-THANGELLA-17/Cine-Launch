
import React from 'react';
import { motion } from 'framer-motion';
import { Film, Sparkles } from 'lucide-react';

interface LoadingSplashProps {
  isLoading: boolean;
}

export const LoadingSplash: React.FC<LoadingSplashProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-cinelaunch-background flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-12 w-12 text-cinelaunch-primary" />
          </motion.div>
          
          <h1 className="font-display font-bold text-6xl">
            <span className="text-cinelaunch-text">Cine</span>
            <span className="text-cinelaunch-primary font-black">Launch</span>
          </h1>
          
          <motion.div
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          >
            <Film className="h-12 w-12 text-cinelaunch-primary" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-xl text-cinelaunch-text-muted">
            Empowering filmmakers worldwide
          </p>
          
          <div className="flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-12 h-12 border-4 border-cinelaunch-primary border-t-transparent rounded-full animate-spin"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
