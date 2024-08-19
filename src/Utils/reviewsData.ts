export interface Review {
  id: number;
  name: string;
  service: string;
  fullReview: string;
  images?: string[];
  }
  
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Олена',
      service: 'Фарбування волосся',
      fullReview: 'Дуже задоволена результатом. Майстер - справжній професіонал',
      images: ["./Images/Reviews/work1.png"],
      },
      {
      id: 2,
      name: 'Анна',
      service: 'Стрижка',
      fullReview: 'Відмінна стрижка, рекомендую всім!',
     
      },
      {
      id: 3,
      name: 'Анна',
      service: 'Стрижка',
      fullReview: 'Відмінна стрижка, рекомендую всім!',
     
      },
  ];
  
  export default reviews;
  