import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'visibility';

const getVariants = (direction: Direction) => {
  switch (direction) {
    case 'up':
      return {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    case 'down':
      return {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      };
    case 'left':
      return {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      };
    case 'visibility':
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    default:
      return {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
  }
};

const AnimatedElement: React.FC<{
  className?: string;
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
}> = ({ className, children, direction = 'up', delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={getVariants(direction)}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
