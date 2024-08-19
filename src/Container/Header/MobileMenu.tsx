import React from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../Component/CartPage/CartContext';

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeLink: string | null;
  handleLinkClick: (to: string) => void;
  navigation: { name: string; to: string }[];
  openCart: () => void;
  openContact: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeLink,
  handleLinkClick,
  navigation,
  openCart,
  openContact,
}) => {
  const { getTotalQuantity } = useCart();

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };


  const handleMobileLinkClick = (to: string) => {
    handleLinkClick(to);
    closeMenu();
  };

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
      <div className="fixed inset-0 z-50">
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="fixed inset-0 bg-sage-green/50 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.2 }}
              className="fixed inset-y-0 right-0 z-50 w-full md:w-3/5 bg-white"
            >
              <div className="flex justify-left px-6 py-6">
                <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Закрити меню</span>
                  <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex flex-col items-center space-y-4 mt-6 ml-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => handleMobileLinkClick(item.to)}
                    className={`relative text-2xl font-semibold font-sans text-olive-drab transition-colors duration-300 pb-1 ${
                      item.to === activeLink ? 'text-olive-drab' : 'text-olive-drab/80'
                    }`}
                  >
                    {item.name}
                    {item.to === activeLink && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-olive-drab/40 transform translate-y-1 transition-transform duration-300 rounded-full"
                        style={{ transformOrigin: 'left center', transform: 'scaleX(1)' }}
                      />
                    )}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    openContact();
                    closeMenu();
                  }}
                  className="relative text-2xl font-semibold font-sans text-olive-drab/80 pb-1"
                >
                  Контакти
                </button>
                <button
                  onClick={() => {
                    openCart();
                    closeMenu();
                  }}
                  className="relative text-2xl font-semibold font-sans bg-olive-drab/50 mt-6 py-2 px-6 rounded-xl"
                >
                  <img src="/Images/Header/Basket.png" alt="Кошик" className="h-10 w-auto invert" />
                  {getTotalQuantity() > 0 && (
                    <span className="absolute -top-0 -right-10 flex text-xl items-center justify-center border-b-2 border-olive-drab/80 text-[10px] text-olive-drab/80 px-2">
                      {getTotalQuantity()}
                    </span>
                  )}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Dialog>
  );
};

export default MobileMenu;
