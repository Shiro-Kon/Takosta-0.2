import React from 'react';
import { Review } from '../../../Utils/reviewsData';


const ReviewCard: React.FC<Review & { onClick: () => void }> = ({ name, service, fullReview, images, onClick }) => {
  return (
    
    <div
      onClick={onClick}
      className="bg-black bg-opacity-45 backdrop-blur-md rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg cursor-pointer text-white w-full "
    >
      
      <h3 className="text-xl md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl  mb-2">{name}</h3>
      <p className="text-md lg:text-lg xl:text-xl text-white/70 mb-4">{service}</p>
      <p className="mb-4 text-lg lg:text-xl xl:text-2xl text-ellipsis text-nowrap overflow-hidden">
        {fullReview}
      </p>
      {images && images.length > 0 && <p className="text-sm text-white/60">Є зображення</p>}
    
    </div>
   
  );
};

export default ReviewCard;
