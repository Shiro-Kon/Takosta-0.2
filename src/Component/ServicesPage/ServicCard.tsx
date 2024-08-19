import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Service } from '../../Utils/servicesData';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.start({ height: '60%' });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({ height: '22%' });
  };

  return (
      <motion.div
        className="container mx-auto p-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden rounded-[50px] cursor-pointer duration-300">
          <img src={service.image}
           alt={service.title}
           className="w-full h-[450px] md:h-[450px] lg:h-[500px] xl:h-[450px] xxl:h-[600px] object-cover rounded-[30px]"/>
          <motion.div
            initial={{ height: '22%' }}
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 right-0 text-white bg-black bg-opacity-35 backdrop-blur-sm p-6 text-center rounded-b-[30px]"
          >
            <h2 className="text-xl md:text-xl lg:text-3xl xl:text-2xl xxl:text-4xl font-light font-sans ">
              {service.title}
            </h2>
            {isHovered && (
              <>
                <p className="text-lg md:text-sm lg:text-xl xl:text-lg xxl:text-xl font-light mb-2 xl:mb-4">
                  {service.priceRange}
                </p>
                <p className="text-md md:text-sm lg:text-lg xl:text-sm xxl:text-lg mb-4 xxl:mb-6">
                  {service.description}
                </p>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
  );
};

export default ServiceCard;
