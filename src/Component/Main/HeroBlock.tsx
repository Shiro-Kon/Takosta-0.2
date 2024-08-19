import { Link } from "react-router-dom";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const HeroBlock = () => {
  return (
    <div className="relative h-screen">
      <AnimatedElement direction="visibility" delay={0.1}>
        <img 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="./Images/Heroblock/Heroblok.png" />
      </AnimatedElement>
      <div className="flex items-center justify-center h-full mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <AnimatedElement direction="up" delay={0.1}>
            <img 
            alt="Takosta professional cosmetics"
              className="scale-75 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125 mobile-landscape:scale-50"
              src="./Images/Heroblock/TAKOSTA_logo.PNG" />
          </AnimatedElement>
          <AnimatedElement direction="up" delay={0.2}>
            <div className="mt-6 lg:mt-16 flex justify-center mobile-landscape:-mt-6">
              <Link
                to="/product"
                className="rounded border-2 border-white/50 bg-sage-green/60 backdrop-blur-md px-4 py-2 text-base sm:text-lg md:text-md lg:text-lg xl:text-xl xll:4xl font-light text-white shadow-sm duration-200 ease-out hover:bg-black/30 hover:text-white active:scale-95 mobile-landscape:text-base"
              >
                Перейти до каталогу
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
