
import React from 'react';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

const ConsultationInfo: React.FC = () => {
    return (
        <div className="mt-24">
          <AnimatedElement
            direction="up"
            delay={0.1}>
          <h2 className="font-pushkin text-4xl md:text-7xl lg:text-5xl xl:text-6xl xxl:text-8xl text-olive-green text-center mb-6 md:mb-12 xl:mb-14 px-4 ">Як проходитиме консультація?</h2>
          </AnimatedElement>
          <AnimatedElement
            direction="up"
            delay={0.1}>
          <ul className="break-words list-disc list-inside text-olive-drab space-y-4 text-lg md:text-md lg:text-xl xl:text-2xl xxl:text-3xl md:text-justify font-semibold">
            <li>Пришліть своє фото (бажано при денному світлі) гарної якості, щоб максимально точно передавало колір та стан волосся.</li>
            <li>Розкажіть історію волосся: кератин, ботокс, змивки, домашнє фарбування та ін.</li>
            <li>Все що пам'ятаєте за два тижні до фарбування виключіть з домашнього догляду всі активні засоби.</li>
            <li>І останнє пришліть фото бажаного результату або підберемо образ при зустрічі.</li>
          </ul>
          </AnimatedElement>
        </div>
      );
    };

export default ConsultationInfo;