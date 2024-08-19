import { motion } from 'framer-motion';
import React from 'react'

interface ServiceProps {
    title: string;
    image: string;
    buttonText: string;
    onClick: () => void;
  }

const ServiceMainCard: React.FC<ServiceProps> = ({
    title,
    image,
    buttonText,
    onClick,
  }) => (
    <div className="flex flex-col items-center ">
   
    
      <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-olive-drab mb-12">
        {title}
      </h3>
        
         <motion.div
          className='overflow-hidden'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="cursor-pointer relative duration-300  rounded-[50px]">
          <img src={image} alt={title} className="relative  w-full h-[450px] md:h-[450px] lg:h-[550px] xl:h-[550px] xxl:h-[650px] object-cover rounded-[50px]" />
          <div className="absolute bottom-0 left-0 right-0 max-h-[60%] text-white  bg-black bg-opacity-35 backdrop-blur-sm p-6  text-center rounded-[50px] overflow-hidden">
            <button onClick={onClick} className="text-xl md:text-xl lg:text-3xl xl:text-2xl xxl:text-4xl font-light text-white font-sans my-2 xll:my-4">{buttonText}</button>
          </div>
          </div>
        </motion.div>
    </div>
   

  );

export default ServiceMainCard