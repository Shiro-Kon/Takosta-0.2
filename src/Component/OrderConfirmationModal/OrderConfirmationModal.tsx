import React from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FaCheckCircle } from 'react-icons/fa';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    products: { name: string; subname: string; quantity: number }[];
    totalPrice: number;
    fullName: string;
    phoneNumber: string;
    email: string;
    postOffice: string;
    paymentMethod: string;
    deliveryMethod: string;
  };
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({ isOpen, onClose, orderData }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <DialogPanel className="w-full max-w-md max-h-md bg-white rounded-lg shadow-lg p-6 relative">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 text-olive-green/50 hover:text-olive-green"
            >
              <span className="sr-only">Закрити</span>
              <XMarkIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="text-center mb-6">
              <FaCheckCircle className="text-olive-drab h-12 w-12 mx-auto mb-4" />
              <h1 className="text-lg font-bold mb-4 text-center text-olive-drab">
            Ваше замовлення підтверджено!
          </h1>
          <p className="text-sm mb-4 text-center">
            Дякуємо за ваше замовлення. Ми отримали його і обробимо найближчим часом.
          </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-olive-green">Дані замовника</h3>
                <p><strong>ФІО:</strong> {orderData.fullName}</p>
                <p><strong>Телефон:</strong> {orderData.phoneNumber}</p>
                <p><strong>Email:</strong> {orderData.email}</p>
                {orderData.deliveryMethod === 'delivery' && (
                  <p><strong>Відділення Нова Пошта:</strong> {orderData.postOffice}</p>
                )}
                <p><strong>Спосіб доставки:</strong> {orderData.deliveryMethod === 'pickup' ? 'Забрати в салоні' : 'Доставка на Нову Пошту'}</p>
                <p><strong>Спосіб оплати:</strong> {orderData.paymentMethod === 'card' ? 'Картка' : 'Готівка'}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-olive-green">Товари в замовленні</h3>
                <ul className="space-y-2">
                  {orderData.products.map((product, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{product.name} {product.subname}</span>
                      <span>{product.quantity} шт.</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-bold">Разом: {orderData.totalPrice.toFixed(2)}₴</p>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default OrderConfirmationModal;
