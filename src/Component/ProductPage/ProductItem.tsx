import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { Product } from '../../Utils/Products';

const ProductItem: React.FC<{ product: Product; delay: number }> = ({ product, delay }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    

    
    <AnimatedElement direction="right" delay={0.1} >
      <main className='flex flex-col md:flex-row mb-20 text-wrap sm:text-center md:text-left sm:px-6 px-4 '> 
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full md:w-[300px] lg:w-[400px] xl:w-[350px] xxl:w-[550px] h-[350px] md:h-[350px] lg:h-[450px] xl:h-[400px] xxl:h-[600px] object-cover mb-4 md:mb-0 md:mr-6 lg:mr-12 rounded-[30px] shadow-black/20 shadow-lg"
      />
      <div className="flex-grow sm:mt-4">
        <h3 className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl xxl:text-8xl font-light text-sage-green  font-forum mb-2 lg:mb-6 ">
          {product.name} <br />
          <span className="text-olive-green">{product.subname}</span>
        </h3>
        <p className="text-sm md:text-sm lg:text-md xl:text-xl xxl:text-3xl font-sans text-olive-drab my-4 xl:my-6 text-balance break-words ">
          {product.description}
        </p>
        <button
          className="rounded-[10px] bg-olive-green backdrop-blur-sm px-4 py-3 text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-light text-white shadow-sm duration-200 ease-out hover:bg-olive-green/80 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base "
          onClick={handleButtonClick}
        >
          Детальніше
        </button>
      </div>
      </main>
    </AnimatedElement>
    
  );
};

export default ProductItem;
