import React from 'react';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import ProductItem from './ProductItem';
import { Product } from '../../Utils/Products';

const CategorySection: React.FC<{ category: string; products: Product[] }> = ({
  category,
  products,
}) => {
  return (
    <AnimatedElement direction="right"  >
      <div className="flex flex-col my-6 sm:px-6 px-4 ">
        <h2 className="text-5xl md:text-6xl lg:text-6xl  font-light font-pushkin text-olive-green sm:text-center ">
          {category}
        </h2>
        <div className="h-[1px] md:h-[1px] bg-olive-green/80 w-full mt-2 md:mt-4 rounded-[50px]" />
      </div>
      {products.map((product, index) => (
        <ProductItem key={product.id} product={product} delay={index * 0.1} />
      ))}
    </AnimatedElement>
  );
};

export default CategorySection;
