
export interface Service {
    id: number;
    title: string;
    description: string;
    priceRange: string;
    image: string;
    additionalInfo?: string[];
  }
  
  export const services: Service[] = [
    {
      id: 1,
      title: "Фарбування в техніці",
      description: "ціна варіюється в залежності від довжини",
      priceRange: "від 2000 ₴ до 3000 ₴",
      image: "./Images/ServicesImg/services-1.png"
    },
    {
      id: 2,
      title: "Біколористія",
      description: "ціна варіюється в залежності від довжини",
      priceRange: "від 1800 ₴ до 3000 ₴",
      image: "./Images/ServicesImg/services-2.png"
    },
    {
      id: 3,
      title: "Airtouch",
      description: "ціна варіюється в залежності від довжини",
      priceRange: "від 3000 ₴ до 7000 ₴",
      image: "./Images/ServicesImg/services-3.png"
    },
    {
      id: 4,
      title: "Стрижка",
      description: "По формі від 500 ₴-до 700 ₴",
      priceRange: "",
      additionalInfo: [
        "Корекція довжини 400 ₴",
        "Чубчик 100 ₴",
      ],
      image: "./Images/ServicesImg/services-4.png"
    },
    {
      id: 5,
      title: "Фарбування в один тон",
      description: "ціна варіюється в залежності від довжини",
      priceRange: "від 1500 ₴-до 2000 ₴",
      image: "./Images/ServicesImg/services-5.png"
    },
    {
      id: 6,
      title: "Процедура “Гарячі ножиці”",
      description: "Термо-стрижка за допомогою гарячих ножиць, лікувальна процедура, яка орієнтована на оздоровлення волосся. Результат досягається шляхом позбавлення від січених кінців всій по довжині.",
      priceRange: "1000 ₴",
      image: "./Images/ServicesImg/services-6.png"
    },
    {
      id: 7,
      title: "Вихід із темних відтінків",
      description: "ціна варіюється в залежності від довжини",
      priceRange: "від 4000 ₴-до 7000 ₴",
      image: "./Images/ServicesImg/services-5.png"
    },
  ];