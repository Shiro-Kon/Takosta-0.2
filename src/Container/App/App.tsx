import React, { Suspense, useEffect, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoadingProgress from '../../Component/LoadingScreen/LoadingProgress';

const Main = React.lazy(() => import('../../Page/Main'));
const ProductPage = React.lazy(() => import('../../Page/ProductPage'));
const ProductDetailsPage = React.lazy(() => import('../../Component/ProductPage/ProductDetails/ProductDetailsPage'));
const DeliveryPaymentPage = React.lazy(() => import('../../Page/DeliveryPaymentPage'));
const ServicesPage = React.lazy(() => import('../../Page/ServicesPage'));
const CheckoutPage = React.lazy(() => import('../../Page/CheckoutPage'));
const NotFoundPage = React.lazy(() => import('../../Page/NotFoundPage'));

// Функция для предзагрузки страниц
const preloadPage = (importFunc: () => Promise<any>) => importFunc();

const App: React.FC = () => {
  const location = useLocation();

  // Эта функция будет вызываться при каждом изменении маршрута и при обновлении страницы
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  // Используем useLayoutEffect для мгновенной прокрутки перед отрисовкой
  useLayoutEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  useEffect(() => {
    // Добавляем слушатель события beforeunload
    window.addEventListener('beforeunload', scrollToTop);

    // Примеры предзагрузки следующих страниц
    if (location.pathname === '/') {
      preloadPage(() => import('../../Page/ProductPage'));
      preloadPage(() => import('../../Page/ServicesPage'));
    }

    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, [location]);

  useEffect(() => {
    const preventHorizontalScroll = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };
  
    window.addEventListener('wheel', preventHorizontalScroll, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', preventHorizontalScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<LoadingProgress />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
            <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default App;