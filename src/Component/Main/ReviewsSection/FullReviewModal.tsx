import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Review } from '../../../Utils/reviewsData';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FullReviewModal: React.FC<Review & { onClose: () => void }> = ({ name, service, fullReview, images, onClose }) => {
  useEffect(() => {
   
    document.body.style.overflow = 'hidden';
    return () => {

      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative bg-black/40 rounded-lg max-w-[80vh] w-full max-h-[80vh] overflow-y-auto p-8 text-white"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded border-2 border-white/40 bg-white bg-opacity-35 backdrop-blur-md px-4 py-2 text-sm md:text-md lg:text-lg xl:text-lg xl:2xl font-light text-white shadow-sm duration-200 ease-out hover:bg-white/30 hover:text-white active:scale-95 mobile-landscape:text-base"
        >
          Закрыть
        </button>
        <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl font-semibold mb-4">{name}</h2>
        <p className="text-md lg:text-lg xl:text-xl mb-4">{service}</p>
        <p className="text-lg lg:text-xl xl:text-2xl mb-6">{fullReview}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 flex justify-center">
          {images && images.map((img, index) => (
             <LazyLoadImage
            key={index} src={img} alt={`${name}'s ${service} ${index + 1}`} className="w-full h-full object-cover rounded-md"
               effect="opacity"
               wrapperProps={{
                 
                   style: {transitionDelay: "1s", willChange: "transform"},
               }}
           />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FullReviewModal;
