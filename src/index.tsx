import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Container/App/App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Component/CartPage/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(
      registration => {
        console.log('Service Worker зарегистрирован с областью:', registration.scope);
      },
      err => {
        console.error('Service Worker не зарегистрирован:', err);
      }
    );
  });
}
