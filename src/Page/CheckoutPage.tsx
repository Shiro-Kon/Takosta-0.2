import React, { useState } from 'react';
import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';
import OrderConfirmationModal from '../Component/OrderConfirmationModal/OrderConfirmationModal';
import { useCart } from '../Component/CartPage/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    postOffice: '',
    paymentMethod: 'card',
    deliveryMethod: 'pickup'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleButtonClick = (type: 'delivery' | 'payment', value: string) => {
    setFormData(prevState => ({ ...prevState, [`${type}Method`]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      products: cart.map(item => ({
        name: item.product.name,
        subname: item.product.subname,
        quantity: item.quantity
      })),
      totalPrice: getTotalPrice(),
      ...formData
    };

    console.log('Order Data:', orderData);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    clearCart(); 
    navigate('/product');
  };

  return (
    <main className="min-h-screen flex flex-col items-center  my-12 md:my-16 xxl:my-28 px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-4xl bg-white  rounded-lg overflow-hidden">
        <AnimatedElement direction="up" delay={0.1} className="p-6">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
            Ваше замовлення
          </div>

          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.product.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img
                    alt={item.product.name}
                    src={item.product.image}
                    className="h-14 w-14 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-800">{item.product.name} {item.product.subname}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{item.quantity} шт.</p>
                  <p className="text-base font-medium text-green-600">{(item.product.price * item.quantity).toFixed(2)}₴</p>
                </div>
              </div>
            ))}
            <div className="mt-6 border-t pt-4 text-right">
              <p className="text-lg font-semibold text-gray-800">Разом: {getTotalPrice().toFixed(2)}₴</p>
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement direction="up" delay={0.2} className="p-6 ">
          <div  className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
            Оформлення замовлення
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-base font-medium text-gray-700">ПІБ</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-base font-medium text-gray-700">Номер телефону</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700">Електронна пошта</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg "
                  required
                />
              </div>
              
            </div>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-gray-800">Спосіб доставки</legend>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => handleButtonClick('delivery', 'pickup')}
                  className={`py-2 px-4 rounded-lg border border-gray-300 text-sm font-semibold  ${formData.deliveryMethod === 'pickup' ? 'bg-sage-green/60  text-white' : 'bg-white text-sage-green'}`}
                >
                  Забрати в салоні
                </button>
                <button
                  type="button"
                  onClick={() => handleButtonClick('delivery', 'delivery')}
                  className={`py-2 px-4 rounded-lg border border-gray-300 text-sm font-semibold ${formData.deliveryMethod === 'delivery' ? 'bg-sage-green/60  text-white' : 'bg-white text-sage-green'}`}
                >
                  Доставка
                </button>
              </div>
              {formData.deliveryMethod === 'delivery' && (
                <div>
                  <label htmlFor="postOffice" className="block text-base font-medium text-gray-700">Відділення Нова Пошта</label>
                  <input
                    type="text"
                    id="postOffice"
                    name="postOffice"
                    value={formData.postOffice}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg "
                  />
                </div>
              )}
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-gray-800">Спосіб оплати</legend>
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => handleButtonClick('payment', 'card')}
                  className={`py-2 px-4 rounded-lg border border-gray-300 text-sm font-semibold ${formData.paymentMethod === 'card' ? 'bg-sage-green/60  text-white' : 'bg-white text-sage-green'}`}
                >
                  Оплата карткою
                </button>
                <button
                  type="button"
                  onClick={() => handleButtonClick('payment', 'cash')}
                  className={`py-2 px-4 rounded-lg border border-gray-300 text-sm font-semibold ${formData.paymentMethod === 'cash' ? 'bg-sage-green/60  text-white' : 'bg-white text-sage-green'}`}
                >
                  Готівкою
                </button>
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-sage-green/60 text-white py-3 rounded-lg shadow-md ease-in-out duration-300 hover:bg-sage-green/90 active:bgsage-green/60 active:scale-[0.99] text-lg font-semibold"
            >
              Підтвердити замовлення
            </button>
          </form>
        </AnimatedElement>
      </div>

      {isModalOpen && (
        <OrderConfirmationModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          orderData={{
            products: cart.map(item => ({
              name: item.product.name,
              subname: item.product.subname,
              quantity: item.quantity
            })),
            totalPrice: getTotalPrice(),
            ...formData
          }}
        />
      )}
    </main>
  );
};

export default CheckoutPage;
