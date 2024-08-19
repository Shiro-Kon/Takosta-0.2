
import "./BrandIntroduction.css";
import AnimatedElement from "../../AnimatedElement/AnimatedElement";

const BrandIntroduction = () => {
  return (
    <div className="mx-auto  w-[90%] py-8  ">
      <h2 className="text-2xl sm:text-3xl md:text-6xl lg:text-5xl font-forum text-center mb-4 xl:mb-8  px-4">
        <AnimatedElement direction="up" delay={0.1}>
          <span className="font-pushkin text-7xl md:text-7xl lg:text-8xl xl:text-8xl xxl:text-[140px] text-olive-green mr-4">
            Привіт, <span className="text-soft-sand/50 text-6xl md:text-7xl lg:text-8xl xl:text-8xl xxl:text-[140px] text-sage-green">це бренд</span>
          </span>
         
        </AnimatedElement>
        <AnimatedElement
          direction="up"
          delay={0.2}
          className="relative flex justify-center items-center py-6 md:py-12"
        >
          <svg className="oval absolute w-[400px] h-[200px] sm:scale-[1] md:scale-[1.2] lg:scale-[1.6] xl:scale-[1.6] xxl:scale-[2.3]  lg:w-[400px] lg:h-[200px]">
            <path
              d="M 160,70 C 300,30 360,130 150,150 C 30,160 110,55 200,50"
              fill="none"
              stroke="#626936"
              strokeWidth="3"
            />
          </svg>
          <div className="z-20 text-6xl md:text-7xl lg:text-8xl xl:text-8xl xxl:text-[140px]  text-olive-green">
            TAKOSTA
          </div>
        </AnimatedElement>
      </h2>
      <AnimatedElement
        direction="up"
        delay={0.2}
        className="mx-auto lg:py-10 xl:py-2 px-4  lg:px-6 xl:px-12 text-md   md:text-xl lg:text-3xl xl:text-2xl xxl:text-3xl leading-relaxed text-center text-olive-drab font-sans  break-words "
      >
        <p>Вітає вас у світі краси та догляду!</p>
        <p>
          У всі віки прекрасна половина людства вигадувала щось незвичайне, щоб
          турбуватися про свою красу…
        </p>
        <p>
          Наша місія - робити ваше волосся сильним, здоровим і блискучим,
          даруючи вам впевненість у собі кожен день.
        </p>
        <p>Дозвольте собі доторкнутися до справжньої магії…</p>
        <p>
          TAKOSTA об’єднує в собі високу якість та індивідульний підхід, щоб
          кожна красуня мала змогу насолоджуватися красою та здоров’ям свого
          волосся.
        </p>
        <p>
          Висока якість та професійний підхід - ось основні принципи, на яких
          ґрунтується наша продукція. Ми обираємо тільки найкращі інгредієнти,
          щоб забезпечити найкращі результати для вашого волосся та шкіри
          голови.
        </p>
        <p>
          Приєднуйтесь до нас у подорожі до краси і дбайте про себе разом з ТМ
          «TAKOSTA».
        </p>
      </AnimatedElement>
    </div>
  );
};

export default BrandIntroduction;
