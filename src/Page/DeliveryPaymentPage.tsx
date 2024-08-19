
import React, { useState } from 'react';
import AnimatedElement from '../Component/AnimatedElement/AnimatedElement';
import DelPaySectionsData from '../Utils/DelPaySectionsData';
import Section from '../Component/DeliveryPayment/Section';
import DeliveryOption from '../Component/DeliveryPayment/DeliveryOption';
import PaymentOption from '../Component/DeliveryPayment/PaymentOption';


const DeliveryPaymentPage: React.FC = () => {
  const [sections, setSections] = useState(DelPaySectionsData.map(() => false));

  const toggleSection = (index: number) => {
    setSections((prevSections) =>
      prevSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <main className="container mx-auto lg:w-[90%]  overflow-hidden  my-12 md:my-16 xxl:my-28 flex justify-center min-h-screen  text-olive-drab">
      <div className="container mx-auto px-6 py-14 md:py-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 md:gap-8">
          <div className="mb-8 md:mb-0 md:mx-16">
            <AnimatedElement
              direction="up"
              delay={0.1}
              className="text-5xl md:text-5xl lg:text-7xl xl:text-7xl xxl:text-8xl text-soft-sand font-pushkin mb-2 md:mb-6 lg:mb-4"
            >
              Доставка <span className='text-sage-green/70 md:text-sage-green'>та оплата</span>
            </AnimatedElement>
            <AnimatedElement direction="up" delay={0.15}>
              <p className="text-md md:text-2xl lg:text-2xl xl:text-xl xxl:text-2xl mb-2 lg:mb-4  font-semibold">
                У нас є 2 способи доставки та 3 способи оплати, ви можете
                скористатись найбільш зручним для вас.
              </p>
            </AnimatedElement>
            <AnimatedElement direction="up" delay={0.2}>
              <p className="text-md md:text-2xl lg:text-2xl xl:text-xl xxl:text-2xl font-extrabold ">
                ЗВЕРНІТЬ УВАГУ! <span className='text-olive-drab/80'>Посилка зберігається на відділенні 5 днів.</span>
              </p>
            </AnimatedElement>
          </div>

          <div className="mb-14 md:mx-16">
            {DelPaySectionsData.map((section, index) => (
              <AnimatedElement  key={index} direction="up" delay={0.2 + index * 0.2}>
                <Section
                  title={section.title}
                  isOpen={sections[index]}
                  toggleSection={() => toggleSection(index)}
                >
                  {section.content.map((content, idx) => {
                    if (content.type === 'delivery') {
                      return (
                        <DeliveryOption
                          key={idx}
                          logo={content.logo}
                          title={content.title}
                          description={content.description}
                        />
                      );
                    } else if (content.type === 'payment') {
                      return (
                        <PaymentOption
                          key={idx}
                          logos={content.logos}
                          logo={content.logo}
                          title={content.title}
                          description={content.description}
                        />
                      );
                    } else {
                      return <p key={idx} className="font-semibold text-left text-sm md:text-md md:text-md   xxl:text-xl mb-4 p-4 rounded-xl ">{content.text}</p>;
                    }
                  })}
                </Section>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeliveryPaymentPage;
