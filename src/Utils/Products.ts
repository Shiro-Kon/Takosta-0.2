export interface Product {
  id: string;
  name: string;
  subname: string;
  category: string; // Категорія
  description: string; // Опис
  shirtDescription: string; // Опис скорочений
  image: string;
  price: number; 
  purpose: string; // Призначення
  hairType: string; // Тип волосся
  volume: string; // Обем
  note: string; // Примітка
  madeIn: string; // Зроблено
  composition: string; // Склад
  usage: string; // Спосіб використання
  productGroup: string; // Група продукту
  contraindication: string; // Протипоказання
}

export const products: Product[] = [
  {
    id: "Shampoo Repair",
    image: "/Images/Products/Shampoo Repair.jpg",
    name: "Shampoo",
    subname: "Repair",
    productGroup: "Шампунь",
    purpose: "Очищення, пом'якшення, відновлення",
    category: "Очищення",
    hairType: "Для сухого, пошкодженого, пористого, середнього та товстого",
    volume: "300 мл",
    note: "не тестується на тваринах",
    madeIn: "Україні",
    price: 380,
    description: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся. Дбайливо та делікатно очищає волосся та шкіру голови. Глибоко проникає в структуру волосся, насичуючи їх необхідними мікроелементами, живить, зволожує та відновлює пошкоджені ділянки волосся.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
    usage: "1-2 натиска вспінити в долонях та нанести вологе волосся, за необхідності повторити.",
    contraindication: "Індивідуальна чутливість до компонентів.",
    composition:
      "Ingredients (INCI): Aqua, Cocamidopropyl Betaine, Disodium Laureth Sulfosuccinate, Sodium Lauroyl Sarcosinate, Cocamide DEA, Styrene/Acrylates Copolymer, Hydrolyzed Almond Protein, Chamomilla Recutita (Camomile) Extract, Betula Pendula Extract, Collagen, Elastin, Hydrolyzed Keratin, Ascorbic Acid, Sodium Сhloride, Orbignya Oleifera (Babassu) Seed Oil, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, Parfume, Amyl Сinnamal, Benzyl Вenzoate, Benzyl Salicylate, Citral, Citronellol, Coumarin, Eugenol, Geraniol, Hexyl Сinnamal, Hydroxycitronellal, Butylphenyl Мethylpropional, Limonene, Linalool.",
  },
  {
    id: "Shampoo Trietment",
    image: "/Images/Products/Shampoo Treatment.jpg",
    name: "Shampoo",
    subname: "Trietment",
    productGroup: "Шампунь",
    purpose: " очищення, живлення",
    category: "Очищення",
    hairType: "тонкого та середнього, нормального та схильного до жирності волосся.",
    volume: "300 мл",
    note: "не тестується на тваринах",
    madeIn: "Україні",
    price: 380,
    description: "Шампунь створений тонкого та середнього, нормального та схильного до жирності волосся. Дбайливо та делікатно очищає волосся та шкіру голови. Розгладжує кутикулу, робить його міцнішим, зберігаючи при цьому мʼякість і наділяючи чудовим блиском, перешкоджає його швидкому забрудненню.",
    shirtDescription: "Шампунь створений для сухого, пошкодженого, пористого, середнього та товстого волосся.",
    usage: "1-2 натиска вспінити в долонях та нанести вологе волосся, за необхідності повторити.   ",
    contraindication: "індивідуальна чутливість до компонентів.",
    composition:
      "Ingredients (INCI): Aqua, Cocamidopropyl Betaine, Disodium Laureth Sulfosuccinate, Sodium Lauroyl Sarcosinate, Cocamide DEA, Styrene/Acrylates Copolymer, Hydrolyzed Almond Protein, Chamomilla Recutita (Camomile) Extract, Betula Pendula Extract, Collagen, Elastin, Hydrolyzed Keratin, Ascorbic Acid, Sodium Сhloride, Orbignya Oleifera (Babassu) Seed Oil, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, Parfume, Amyl Сinnamal, Benzyl Вenzoate, Benzyl Salicylate, Citral, Citronellol, Coumarin, Eugenol, Geraniol, Hexyl Сinnamal, Hydroxycitronellal, Butylphenyl Мethylpropional, Limonene, Linalool.",
  },
  {
    id: "Condicioner For all hair types",
    image: "/Images/Products/Condicioner For all hair types.jpg",
    name: "Condicioner",
    subname: "For all hair types",
    productGroup: "Кондиціонер",
    purpose: "Живлення, відновлення",
    category: "Зволоження",
    hairType: "для всіх типів волосся",
    volume: "300 мл",
    note: "не тестується на тваринах",
    madeIn: "Україні",
    price: 380,
    description: "Живить, відновлює, по'якшує та розгладжує волосся, полегшує розчісування, надає м’якість, еластичність та блиск локонам.",
    shirtDescription: "Живить, відновлює, по'якшує та розгладжує волосся, полегшує розчісування, надає м’якість, еластичність та блиск локонам.",
    usage: "кондиціонер нанести вологе волосся, після шампуню, потримати 2-3 хвилини, обережно розчешіть гребінцем, змити.",
    contraindication: "індивідуальна чутливість до компонентів.",
    composition:
      "Ingredients (INCI): Aqua, Gardenia Tahitensis (Monoi De Tahiti) Oil, Myristyl Alcohol, Cetrimonium Chloride, Cetearyl Alcohol, Glyceryl Monostearate, Glyceryl Stearate, Stearamidopropyl Dimethylamine, Myristyl Lactate, Behentrimonium Chloride, Ethylhexyl Cocoate, Lanolin, Hydrolyzed Keratin, Glycerin, Honey Extract, Humulus Lupulus Conus Еxtract, Calendula Оfficinalis Flower Extract, Hydrolyzed Silk Protein, Hydrolyzed Wheat Bran Protein, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, Parfume, Cinnamal, Citral, Citronellol, Coumarin, Eugenol, Geraniol, Hexyl Cinnamal, Limonene, Linalool.",
  },
  {
    id: "Nektar Hair Oil",
    image: "/Images/Products/Nektar Hair Oil.jpg",
    name: "Nektar ",
    subname: "Hair Oil",
    productGroup: "Кондиціонер",
    purpose: " Пом'якшення, відновлення, блиск",
    category: "Зволоження",
    hairType: "Для всіх типів",
    volume: "100 мл",
    note: "не тестується на тваринах",
    madeIn: "Україні",
    price: 800,
    description: "Згладжувальна і зволожуюча олія. Забезпечує захист від впливу зовнішніх подразників і попереджає руйнування кутикули. Активні компоненти роблять волосся шовковистим і м'яким. Ніжна олія швидко проникає в кутикулу, надаючи поживну і регенеруючу дію, полегшує розчісування, оберігає при гарячому укладанні.",
    shirtDescription: "Згладжувальна і зволожуюча олія. Забезпечує захист від впливу зовнішніх подразників і попереджає руйнування кутикули.",
    usage: "1-2 натиска розтерти в долонях та нанести на довжину, як на вологе, так і на сухе волосся.",
    contraindication: "індивідуальна чутливість до компонентів.",
    composition:
      "Ingredients (INCI): Cyclopentasiloxane, Dimethiconol, Phenyl Trimethicone, Hydrolyzed Keratin, Hydrolyzed Silk Protein, Hydrolyzed Сashmere Protein, Retinyl Palmitate, Тocopheryl Acetate, Linoleic Acid, Parfume,",
  },
  {
    id: "Nektar Hair Oil Small",
    image: "/Images/Products/Nektar Hair Oil Small.JPEG",
    name: "Nektar ",
    subname: "Hair Oil Small",
    productGroup: "Кондиціонер",
    purpose: " Пом'якшення, відновлення, блиск",
    category: "Зволоження",
    hairType: "Для всіх типів",
    volume: "30 мл",
    note: "не тестується на тваринах",
    madeIn: "Україні",
    price: 350,
    description: "Згладжувальна і зволожуюча олія. Забезпечує захист від впливу зовнішніх подразників і попереджає руйнування кутикули. Активні компоненти роблять волосся шовковистим і м'яким. Ніжна олія швидко проникає в кутикулу, надаючи поживну і регенеруючу дію, полегшує розчісування, оберігає при гарячому укладанні.",
    shirtDescription: "Згладжувальна і зволожуюча олія. Забезпечує захист від впливу зовнішніх подразників і попереджає руйнування кутикули.",
    usage: "1-2 натиска розтерти в долонях та нанести на довжину, як на вологе, так і на сухе волосся.",
    contraindication: "індивідуальна чутливість до компонентів.",
    composition:
      " ",
  },
  {
    id: "Express Conditioner",
    image: "/Images/Products/Express Conditioner.jpg",
    name: "Express ",
    subname: "Conditioner",
    productGroup: "Кондиціонер",
    purpose: "Легке розчісування, пом'якшення, зволоження",
    category: "Зволоження",
    hairType: "Для всіх типів",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україні",
    price: 470,
    description: `З екстрактом аргани та протеїнами шовку для всіх типів волосся, революційне рішення для догляду за волоссям, створене для живлення, зволоження та слухняності ваших пасм. Ця унікальна формула поєднує в собі зручність спрею з перевагами традиційного кондиціонера, що робить його обов'язковим доповненням до щоденного використання.

Кондиціонер:
- полегшує розчісування;
- робить волосся гладким та блискучим; 
- зволожує, наповнює силою та згладжує лусочки волосся;
- збагачений протеїнами шовку та екстрактом аргани, які піклуються про здоров'я волосся;
- надає волоссю доглянутого вигляду

З спрей-кондиціонером ви забудете про тьмяне, не слухняне, плутане волосся.

Також, спрей виконує функцію термо захисту.`,
    shirtDescription: "З екстрактом аргани та протеїнами шовку для всіх типів волосся, революційне рішення для догляду за волоссям, створене для живлення, зволоження та слухняності ваших пасм.",
    usage: 
    `Спосіб 1: нанесіть спрей на вимите вологе волосся перед тим, як сушити феном.

Спосіб 2: нанесіть спрей на сухе волосся перед використанням випрямляча або бігуді.

Уникайте потрапляння спрею на корені, натомість приділіть увагу кінчикам, оскільки вони є уразливішими для теплового пошкодження.

Можна застосовувати впродовж дня
`,
contraindication: "Індивідуальна чутливість до компонентів.",
    composition:
      "Aqua, Glycerin,Ethylhexyl Оlivate, Argania Spinosa LeafExtract, Cocamidopropyl Betaine, Hydrolyzed Silk Protein, Cetyl PEG/PPG-7/3 Dimethicone, Pentylene Glycol,Niacinamide, Tocopheryl Acetate, BenzylAlcohol, Benzoic Acid, Dehydroacetic Acid,Parfum, Amyl Сinnamal, Benzyl Вenzoate, Benzyl Salicylate, Citral, Citronellol, Coumarin, Eugenol, Geraniol, HexylСinnamal, Hydroxycitronellal, ButylphenylМethylpropional, Limonene, Linalool.",
  },
  {
    id: "Liquid Silk",
    image: "/Images/Products/Liquid Silk.jpg",
    name: "Liquid  ",
    subname: "Silk",
    productGroup: "додатковий догляд",
    purpose: "Пом'якшення, відновлення та блиску",
    category: "Відновлення",
    hairType: "Для всіх типів",
    volume: "250 мл",
    note: "не тестується на тваринах",
    madeIn: "Україні",
    price: 680,
    description: "Робить волосся блискучим та гладким, не обтяжує і не склеює локони. Легка формула, збагачена протеїнами пшениці, додатково пожвавлює пасма, а антистатичні властивості ламелярної води зменшують пухнастість.",
    shirtDescription: "Робить волосся блискучим та гладким, не обтяжує і не склеює локони. Легка формула, збагачена протеїнами пшениці, додатково пожвавлює пасма, а антистатичні властивості ламелярної води зменшують пухнастість.",
    usage: "Приберіть рушником зайву вологу з волосся. Нанесіть ламелярну воду по всій довжині та кінцівки, рівномірно розподілити та залиште максимум на 10 секунд. Потім промийте теплою водою. Уникайте контакту зі шкірою голови.",
    contraindication: "Індивідуальна чутливість до компонентів.",
    composition: "Aqua, Glycerin,Ethylhexyl Оlivate, Argania Spinosa LeafExtract, Cocamidopropyl Betaine, Hydrolyzed Silk Protein, Cetyl PEG/PPG-7/3 Dimethicone, Pentylene Glycol,Niacinamide, Tocopheryl Acetate, BenzylAlcohol, Benzoic Acid, Dehydroacetic Acid,Parfum, Amyl Сinnamal, Benzyl Вenzoate, Benzyl Salicylate, Citral, Citronellol, Coumarin, Eugenol, Geraniol, HexylСinnamal, Hydroxycitronellal, ButylphenylМethylpropional, Limonene, Linalool.",
  },
  


];
