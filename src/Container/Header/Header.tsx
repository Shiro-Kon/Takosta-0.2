import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';
import Cart from '../../Component/CartPage/Cart';
import { useCart } from '../../Component/CartPage/CartContext';
import ContactModal from '../../Component/Contac/ContactModal';

const navigation = [
  { name: 'Головна', to: '/' },
  { name: 'Продукція', to: '/product' },
  { name: 'Доставка та оплата', to: '/delivery-payment' },
  { name: 'Послуги', to: '/services' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const { getTotalQuantity } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (to: string) => {
    setActiveLink(to);
    setMobileMenuOpen(false);
    navigate(to);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-sage-green/60 backdrop-blur-sm font-sans">
      <nav className="flex items-center justify-between py-3 xxl:py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5" onClick={() => handleLinkClick('/')}>
            <span className="sr-only">TAKOSTA</span>
            <img 
              className="h-8 md:h-10 w-auto" 
              src="/Images/Header/TAKOSTA_header.svg" 
              alt="TAKOSTA Logo"
              loading="lazy" 
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex gap-x-4 xl:gap-x-6 xxl:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => handleLinkClick(item.to)}
              className={`relative text-base sm:text-lg md:text-xl lg:text-xl xxl:text-2xl font-light text-white transition-colors duration-300 pb-1 ${
                item.to === activeLink ? 'text-white' : 'text-white/80'
              }`}
            >
              {item.name}
              {item.to === activeLink && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/40 transform translate-y-1 transition-transform duration-300 rounded-full"
                  style={{
                    transformOrigin: 'left center',
                    transform: 'scaleX(1)',
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end md:space-x-6">
          <button
            className="text-base sm:text-lg md:text-xl lg:text-xl xxl:text-2xl font-light text-white/80 transition-colors duration-300 pb-1"
            onClick={() => setContactOpen(true)}
          >
            Контакти
          </button>
          <button
            className="relative"
            onClick={() => setCartOpen(true)}
          >
            <img src="/Images/Header/Basket.png" alt="Кошик" className="h-8 pb-2 invert" loading="lazy" />
            {getTotalQuantity() > 0 && (
              <span className="absolute -top-2 -right-3 flex w-4 h-4 items-center justify-center rounded-full bg-white/20 text-[12px] text-white">
                {getTotalQuantity()}
              </span>
            )}
          </button>
        </div>
      </nav>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        navigation={navigation}
        openCart={() => setCartOpen(true)}
        openContact={() => setContactOpen(true)}
      />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
};

export default Header;