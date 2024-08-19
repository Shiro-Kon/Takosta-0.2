import React from 'react';
import { motion } from 'framer-motion';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed top-[10%] right-2  bg-olive-green/70 text-[12px] text-white px-2 py-1 rounded-lg shadow-lg"
    >
      <p>{message}</p>
    </motion.div>
  );
};

export default Notification;
