import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    onClose(); 
  };

  const handleCheckout = () => {
    navigate('/checkout');
    onClose();
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50 w-full">
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 "
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2 }}
          >
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
                <div className="flex h-full flex-col  bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-3xl font-cocomat text-olive-drab cursor-default">Кошик</DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={onClose}
                          className="relative -m-2 p-2 text-olive-drab/50 hover:text-olive-drab"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Закрити кошик</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6 " />
                        </button>
                      </div>
                    </div>

                    {cart.length === 0 ? (
                      <div className="px-4 py-6 md:py-12 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-sage-green font-cocomat">Кошик порожній</div>
                    ) : (
                      <div className="my-8">
                        <div className="flow-root">
                          <ul className="-my-2">
                            {cart.map(item => (
                              <li key={item.product.id} className="flex py-6 ">
                                <div
                                  className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md cursor-pointer"
                                  onClick={() => handleProductClick(item.product.id)}
                                >
                                  <img
                                    alt={item.product.name}
                                    src={item.product.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div className='text-xl'>
                                    <div className="flex justify-between">
                                      <h3
                                        className='text-olive-green font-cocomat cursor-pointer'
                                        onClick={() => handleProductClick(item.product.id)}
                                      >
                                        {item.product.name}
                                      </h3>
                                      <p className="ml-4 text-olive-green font-sans cursor-default">{item.product.price.toFixed(2)}₴</p>
                                    </div>
                                    <p className="text-md font-cocomat text-sage-green cursor-pointer" onClick={() => handleProductClick(item.product.id)}>{item.product.subname}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-olive-green font-cocomat cursor-default">Кількість {item.quantity}</p>
                                    <div className="flex space-x-4 md:space-x-6 text-olive-green font-cocomat">
                                      <div className='flex space-x-3 text-xl'>
                                        <button onClick={() => increaseQuantity(item.product.id)} className="text-olive-green hover:scale-[1.1]">+</button>
                                        <button onClick={() => decreaseQuantity(item.product.id)} className="text-olive-green hover:scale-[1.1]">-</button>
                                      </div>
                                      <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 hover:text-red-700 text-md md:text-lg">Видалити</button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-lg font-sans text-olive-drab cursor-default mb-2">
                      <p>Разом</p>
                      <p>{getTotalPrice().toFixed(2)}₴</p>
                    </div>
                    <p className="mt-0.5 text-sm font-sans text-sage-green cursor-default">Доставка та податки розраховуються при оформленні замовлення.</p>
                    <div className="mt-6">
                      <button
                        onClick={handleCheckout}
                        className="rounded bg-olive-drab/50 backdrop-blur-sm px-4 py-3 text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-light text-white shadow-sm duration-200 ease-out hover:bg-olive-drab/60 hover:text-white active:scale-95 mobile-landscape:text-base cursor-pointer"
                      >
                        Оформити замовлення
                      </button>
                    </div>
                    <div className="mt-6 flex justify-start text-center text-sm font-sans text-sage-green cursor-default">
                      <p>
                        або{' '}
                        <Link
                          to="/product"
                          onClick={onClose}
                          className="font-sans font-semibold hover:text-sage-green text-olive-drab cursor-pointer"
                        >
                          Продовжити покупки
                          <span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Cart;
