import React, { useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Product, products } from "../../../Utils/Products";
import AnimatedElement from "../../AnimatedElement/AnimatedElement";

const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<any>(null);

  const handleSlideClick = useCallback((index: number) => {
    setActiveSlide(prevIndex => (prevIndex === index ? null : index));
    swiper?.autoplay.stop();
  }, [swiper]);

  const swiperParams = useMemo(() => ({
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 5,
    slidesPerView: 3,
    pagination: {
      clickable: true,
      bulletClass: "swiper-pagination-bullet !bg-sage-green",
      bulletActiveClass: "swiper-pagination-bullet-active !bg-olive-green",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      700: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    speed: 800,
    grabCursor: true,
    preloadImages: false,
    lazy: true,
    watchSlidesProgress: true,
    updateOnWindowResize: true,
  }), []);

  const renderSlide = useCallback((product: Product, index: number) => (
    <SwiperSlide key={product.id} className="p-4 mb-6">
      <div className="relative">
        <motion.div
          className="relative cursor-pointer transition-transform duration-300"
          whileHover={{ scale: activeSlide === index ? 1 : 1.02 }}
          whileTap={{ scale: activeSlide === index ? 1 : 0.98 }}
          onClick={() => handleSlideClick(index)}
        >
          <img
            src={product.image}
            alt={`${product.name} ${product.subname}`}
            className="w-full h-[500px] md:h-[500px] xxl:h-[650px] object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </motion.div>

        <AnimatePresence>
          {activeSlide === index && (
            <motion.div
              initial={{ maxHeight: "20%", opacity: 0 }}
              animate={{ maxHeight: "80%", opacity: 1 }}
              exit={{ maxHeight: "20%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 text-white bg-sage-green/60 backdrop-blur-lg p-6 text-center rounded-2xl overflow-hidden"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-2">
                {product.name} {product.subname}
              </h3>
              <p className="text-sm md:text-md lg:text-lg xxl:text-xl mb-2">
                {product.shirtDescription}
              </p>
              <p className="text-sm md:text-md lg:text-lg font-semibold mb-2">
                {product.price} грн.
              </p>
              <Link to={`/product/${product.id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg border-2 border-white/50 bg-sage-green/40 backdrop-blur-md px-4 py-2 text-white shadow-sm transition-transform duration-200 hover:bg-black/30 hover:text-white"
                >
                  Детальніше
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SwiperSlide>
  ), [activeSlide, handleSlideClick]);

  return (
    <AnimatedElement direction="visibility" delay={0.1} className="container mx-auto relative py-8">
      <Swiper {...swiperParams} onSwiper={setSwiper}>
        {products.map(renderSlide)}
      </Swiper>
      <div className="swiper-pagination"></div>
    </AnimatedElement>
  );
};

export default React.memo(Carousel);