import React from 'react';
import { motion } from 'framer-motion';
import clipboardCopy from 'clipboard-copy';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, link, delay }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (link.startsWith('tel') || link.startsWith('mailto')) {
      clipboardCopy(value).then(() => alert('Скопійовано в буфер обміну'));
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="flex items-center space-x-4 p-4 bg-sage-green/30 rounded-lg shadow-sm hover:bg-sage-green/20 cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-2xl -mt-4">{icon}</div>
      <div className="flex-1">
        <h3 className="text-md font-semibold text-olive-drab font-sans">{label}</h3>
        <p className="font-semibold font-sans text-sage-green text-left text-sm ">{value}</p>
      </div>
    </motion.div>
  );
};

export default ContactItem;
