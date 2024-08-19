
import { services } from '../Utils/servicesData';
import ServiceCard from '../Component/ServicesPage/ServicCard';
import ConsultationInfo from '../Component/ServicesPage/ConsultationInfo';

import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';


const ServicesPage: React.FC = () => {
  
  return (
    <div className="container mx-auto py-20 md:py-28 px-4 md:px-6 lg:px-8 max-w-4xl  xl:max-w-5xl xxl:max-w-6xl min-h-screen overflow-hidden ">
      
      <div className="container mx-auto ">
      <AnimatedElement
            direction="right"
            delay={0.1}>
        <h1 className="font-pushkin text-4xl md:text-5xl lg:text-6xl xl:text-7xl xxl:text-8xl text-sage-green text-center mb-4  px-4">
          <span className='text-olive-green'>Послуги</span> які ми надаємо
        </h1>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-2 ">
          {services.map((service) => (
            <AnimatedElement
            direction="up"
            delay={0.2}>
            <ServiceCard
              key={service.id}
              service={service}
            />
            </AnimatedElement>
          ))}
        </div>
        
        <ConsultationInfo />
      
        </div>
      </div>

      
  
  );
};

export default ServicesPage;