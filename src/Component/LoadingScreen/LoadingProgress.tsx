import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-sage-green/100 z-50 flex flex-col items-center justify-center">
      <motion.div className="relative flex space-x-4 mb-6">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-8 h-8 bg-white rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: index * 0.3,
            }}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="text-white text-lg sm:text-xl lg:text-2xl text-center px-4"
      >
        Завантажуємо красу для вас...
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
