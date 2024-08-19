import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../../../Utils/Products';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedElement from '../../AnimatedElement/AnimatedElement';
import { useCart } from '../../CartPage/CartContext';
import Notification from './Notification';

const ProductDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const [activeTab, setActiveTab] = useState<'description' | 'composition' | 'usage' | 'contraindication'>('description');
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Продукт не  знайден</div>;
  }

  const tabContent = {
    description: product.description,
    composition: product.composition,
    usage: product.usage,
    contraindication: product.contraindication
  };

  const handleAddToCart = () => {
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); 
  };

  return (
    <main className="container mx-auto py-16 md:py-20 xxl:py-24 px-4 md:px-6 lg:px-8 xl:max-w-6xl xxl:max-w-7xl min-h-screen overflow-hidden ">
      <AnimatedElement direction="right" delay={0.1}>
        <button onClick={() => navigate("/product", { state: { scrollPosition: location.state?.scrollPosition || 0 } })}>
          <h1 className='text-sm md:text-sm lg:text-md xl:text-lg font-light text-sage-green ml-6 md:ml-8 font-sans mb-6 sm:text-center border-b-[1px] border-sage-green '>
            Повернутися до продуктів
          </h1>
        </button>
      </AnimatedElement>
      <div className="flex flex-col md:flex-row gap-12 cursor-default">
        <div className="md:w-1/2">
          <AnimatedElement direction="right" delay={0.1}>
            <img src={product.image} 
            alt={`${product.name} ${product.subname}`} 
            className="w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover rounded-[30px] shadow-black/20 shadow-lg" />
          
          </AnimatedElement>
        </div>
        <div className="md:w-1/2">
          <AnimatedElement direction="right" delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-sage-green font-forum mb-6">
              {product.name} <span className="text-olive-green">{product.subname}</span>
            </h1>
            <div className="space-y-3 text-sm md:text-sm lg:text-md xl:text-lg text-olive-drab mb-8 normal-case">
              <p>Група товару: {product.productGroup}</p>
              <p>Призначення: {product.purpose}</p>
              <p>Тип волосся: {product.hairType}</p>
              <p>Об'єм: {product.volume}</p>
              <p>Примітка: {product.note}</p>
              <p>Зроблено в {product.madeIn}</p>
            </div>
         
             <div className='flex flex-row justify-between items-end self-end'>
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold text-olive-green">
                {product.price.toFixed(2)}₴
              </p>
              <button 
                className="rounded-[10px] bg-olive-green backdrop-blur-sm px-4 py-2 text-sm md:text-sm lg:text-md xl:text-lg  font-light text-white shadow-sm duration-200 ease-out hover:bg-olive-green/80 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base "
                onClick={handleAddToCart}
              >
                Додати в кошик
              </button>
            </div>
            </AnimatedElement>
          
        </div>
      </div>
      <div className="my-10  max-w-6xl xl:max-w-6xl">
        <AnimatedElement direction="right" delay={0.1}>
          <div className="border-b border-olive-drab/30">
            <nav className="flex space-x-4 md:space-x-8 lg:space-x-12">
              {['description', 'composition', 'usage', 'contraindication' ].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 text-md md:text-lg lg:text-xl font-medium ${
                    activeTab === tab ? 'text-olive-drab border-b-2 border-olive-drab' : 'text-olive-drab/70'
                  }`}
                  onClick={() => setActiveTab(tab as 'description' | 'composition' | 'usage' | 'contraindication' )}
                >
                  {tab === 'description' ? 'Опис' : tab === 'composition' ? 'Склад' : tab === 'usage' ? 'Застосування' : 'Протипоказання'}
                </button>
              ))}
            </nav>
          </div>
        </AnimatedElement>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
            className="mt-8 text-sm md:text-md lg:text-lg xl:text-xl text-olive-drab/80 cursor-default whitespace-pre-wrap "
          >
            <AnimatedElement direction="up" delay={0.1}>
              <p>{tabContent[activeTab]}</p>
            </AnimatedElement>
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showNotification && (
          <Notification 
            message="Товар додано в кошик!" 
            onClose={() => setShowNotification(false)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductDetailsPage;
