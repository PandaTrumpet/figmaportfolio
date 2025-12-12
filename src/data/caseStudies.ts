// export interface CaseStudy {
//   id: string;
//   title: string;
//   client: string;
//   industry: string;
//   role: string;
//   year: string;
//   duration: string;
  
//   // Hero
//   heroImage: string;
//   heroVideo?: string;
//   tagline: string;
  
//   // Overview
//   overview: string;
  
//   // Challenge & Solution
//   challenge: string;
//   solution: string;
  
//   // Process
//   process: {
//     title: string;
//     description: string;
//     icon: string;
//   }[];
  
//   // Visual Assets
//   mockups: {
//     type: 'desktop' | 'mobile' | 'tablet' | 'full';
//     image: string;
//     caption?: string;
//   }[];
  
//   // Key Features
//   features: {
//     title: string;
//     description: string;
//     image: string;
//   }[];
  
//   // Results
//   results: {
//     metric: string;
//     value: string;
//     description: string;
//   }[];
  
//   lighthouse: {
//     performance: number;
//     accessibility: number;
//     bestPractices: number;
//     seo: number;
//   };
  
//   // Testimonial
//   testimonial: {
//     quote: string;
//     author: string;
//     position: string;
//     avatar: string;
//   };
  
//   // Tech Stack
//   techStack: string[];
  
//   // Gallery
//   gallery: string[];
// }

// // Simple case study interface for preview cards
// export interface CaseStudyPreview {
//   id: string;
//   label: string;
//   result: string;
//   image: string;
//   imageAlt: string;
// }

// // Case studies for preview section
// export const caseStudies: CaseStudyPreview[] = [
//   {
//     id: 'luxe-spa',
//     label: 'Desert Luxe Wellness',
//     result: '+180% online bookings',
//     image: 'https://images.unsplash.com/photo-1649345946706-afbf86eee046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
//     imageAlt: 'Desert Luxe Wellness website',
//   },
//   {
//     id: 'saas-platform',
//     label: 'CloudFlow Platform',
//     result: '+240% trial conversions',
//     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
//     imageAlt: 'CloudFlow SaaS platform',
//   },
//   {
//     id: 'fashion-ecom',
//     label: 'NOOR Fashion',
//     result: '₪2.8M in 6 months',
//     image: 'https://images.unsplash.com/photo-1573879500655-98f2012dd1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
//     imageAlt: 'NOOR Fashion e-commerce',
//   },
// ];

// // Full case study data
// export const caseStudyData: CaseStudy = {
//   id: 'luxe-spa',
//   title: 'Desert Luxe Wellness',
//   client: 'Премиум SPA-центр в Тель-Авиве',
//   industry: 'Wellness & Lifestyle',
//   role: 'Full-Stack Development, UI/UX Design, Branding',
//   year: '2024',
//   duration: '8 недель',
  
//   heroImage: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGludGVyaW9yfGVufDF8fHx8MTc2NTI2NzA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//   tagline: 'Трансформация премиум SPA-центра в digital-лидера с ростом бронирований на 180%',
  
//   overview: 'Desert Luxe Wellness — это премиум спа-центр, который предлагает уникальные wellness-процедуры, вдохновленные пустыней Негев. Клиент столкнулся с проблемой: высокое качество услуг не отражалось в онлайн-присутствии, а система бронирования была устаревшей и неудобной.',
  
//   challenge: 'Основная задача — создать digital-присутствие, которое соответствует премиум-позиционированию бренда. Существующий сайт был устаревшим, не адаптивным и не отражал роскошь услуг. Процесс бронирования требовал звонков, что создавало барьер для клиентов. Нужно было показать уникальность процедур и атмосферу центра тем, кто никогда не был на месте.',
  
//   solution: 'Мы создали минималистичный сайт с акцентом на визуальное впечатление и пользовательский опыт. Интегрировали систему онлайн-бронирования с календарем в реальном времени, добавили 360° виртуальные туры по помещениям и детальные галереи процедур. Использовали премиум-анимации и brutalist design элементы для создания запоминающегося визуального языка.',
  
//   process: [
//     {
//       title: 'Discovery & Research',
//       description: 'Глубинное интервью с владельцем, анализ конкурентов в премиум-сегменте, исследование целевой аудитории и их поведения при выборе SPA-услуг.',
//       icon: '🔍',
//     },
//     {
//       title: 'Strategy & Architecture',
//       description: 'Разработка информационной архитектуры, пользовательских сценариев, wireframes и прототипов с фокусом на конверсию в бронирование.',
//       icon: '🎯',
//     },
//     {
//       title: 'Visual Design',
//       description: 'Создание минималистичного дизайна с премиум-ощущением. Большие изображения, много воздуха, черно-бежевая палитра, brutalist акценты.',
//       icon: '✨',
//     },
//     {
//       title: 'Development',
//       description: 'Разработка на React с премиум-анимациями (Motion), интеграция системы бронирования, оптимизация производительности и SEO.',
//       icon: '⚡',
//     },
//     {
//       title: 'Testing & Launch',
//       description: 'A/B тестирование ключевых элементов, оптимизация конверсии, тестирование на различных устройствах и запуск с мониторингом метрик.',
//       icon: '🚀',
//     },
//   ],
  
//   mockups: [
//     {
//       type: 'desktop',
//       image: 'https://images.unsplash.com/photo-1702047143580-0f349be86369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY1Mjk5MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       caption: 'Desktop версия - Hero секция',
//     },
//     {
//       type: 'mobile',
//       image: 'https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjUyMzE5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       caption: 'Mobile версия - Booking flow',
//     },
//     {
//       type: 'full',
//       image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NTE4Njk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       caption: 'Full page preview',
//     },
//   ],
  
//   features: [
//     {
//       title: 'Онлайн-бронирование',
//       description: 'Интуитивная система бронирования с выбором даты, времени, специалиста и услуги. Интеграция с календарем Google и напоминания по WhatsApp.',
//       image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
//     },
//     {
//       title: '360° Виртуальные туры',
//       description: 'Интерактивные туры по процедурным кабинетам, зонам релаксации и spa-помещениям для создания доверия перед первым визитом.',
//       image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200',
//     },
//     {
//       title: 'Галерея процедур',
//       description: 'Детальное описание каждой процедуры с фотографиями, видео, преимуществами и ценами. Фильтрация по типу, длительности и цене.',
//       image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200',
//     },
//   ],
  
//   results: [
//     {
//       metric: 'Онлайн-бронирования',
//       value: '+180%',
//       description: 'Рост онлайн-бронирований за первые 3 месяца после запуска',
//     },
//     {
//       metric: 'Средний чек',
//       value: '+65%',
//       description: 'Увеличение среднего чека благодаря upsell процедур',
//     },
//     {
//       metric: 'Время на сайте',
//       value: '4.5x',
//       description: 'Увеличение среднего времени пребывания на сайте',
//     },
//     {
//       metric: 'Mobile трафик',
//       value: '+220%',
//       description: 'Рост мобильного трафика благодаря адаптивности',
//     },
//     {
//       metric: 'Конверсия',
//       value: '12.4%',
//       description: 'Конверсия посетителей в бронирование (было 3.2%)',
//     },
//     {
//       metric: 'NPS Score',
//       value: '92/100',
//       description: 'Оценка удовлетворенности пользовательским опытом',
//     },
//   ],
  
//   lighthouse: {
//     performance: 98,
//     accessibility: 100,
//     bestPractices: 100,
//     seo: 100,
//   },
  
//   testimonial: {
//     quote: 'Команда не просто создала красивый сайт — они создали работающий инструмент продаж. Количество онлайн-бронирований выросло вдвое за первый месяц. Клиенты постоянно хвалят удобство системы. Это была лучшая инвестиция в наш бизнес.',
//     author: 'Рахель Коэн',
//     position: 'Основательница Desert Luxe Wellness',
//     avatar: 'https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//   },
  
//   techStack: [
//     'React',
//     'TypeScript',
//     'Motion (Framer Motion)',
//     'Tailwind CSS',
//     'Node.js',
//     'MongoDB',
//     'Google Calendar API',
//     'WhatsApp Business API',
//   ],
  
//   gallery: [
//     'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200',
//     'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200',
//     'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200',
//     'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200',
//   ],
// };


// Полный кейс
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  role: string;
  year: string;
  duration: string;

  // Hero
  heroImage: string;
  heroVideo?: string;
  tagline: string;

  // Overview
  overview: string;

  // Challenge & Solution
  challenge: string;
  solution: string;

  // Process
  process: {
    title: string;
    description: string;
    icon: string;
  }[];

  // Visual Assets
  mockups: {
    type: "desktop" | "mobile" | "tablet" | "full";
    image: string;
    caption?: string;
  }[];

  // Key Features
  features: {
    title: string;
    description: string;
    image: string;
  }[];

  // Results
  results: {
    metric: string;
    value: string;
    description: string;
  }[];

  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };

  // Testimonial
  testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar: string;
  };

  // Tech Stack
  techStack: string[];

  // Gallery
  gallery: string[];
}

/* =======================
   БАЗОВЫЙ КЕЙС: DESERT LUXE
   ======================= */

const luxeSpaCase: CaseStudy = {
  id: "luxe-spa",
  title: "Desert Luxe Wellness",
  client: "Премиум SPA-центр в Тель-Авиве",
  industry: "Wellness & Lifestyle",
  role: "Full-Stack Development, UI/UX Design, Branding",
  year: "2024",
  duration: "8 недель",

  heroImage:
    "https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGludGVyaW9yfGVufDF8fHx8MTc2NTI2NzA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  tagline:
    "Трансформация премиум SPA-центра в digital-лидера с ростом бронирований на 180%",

  overview:
    "Desert Luxe Wellness — это премиум спа-центр, который предлагает уникальные wellness-процедуры, вдохновленные пустыней Негев. Клиент столкнулся с проблемой: высокое качество услуг не отражалось в онлайн-присутствии, а система бронирования была устаревшей и неудобной.",

  challenge:
    "Основная задача — создать digital-присутствие, которое соответствует премиум-позиционированию бренда. Существующий сайт был устаревшим, не адаптивным и не отражал роскошь услуг. Процесс бронирования требовал звонков, что создавало барьер для клиентов. Нужно было показать уникальность процедур и атмосферу центра тем, кто никогда не был на месте.",

  solution:
    "Мы создали минималистичный сайт с акцентом на визуальное впечатление и пользовательский опыт. Интегрировали систему онлайн-бронирования с календарем в реальном времени, добавили 360° виртуальные туры по помещениям и детальные галереи процедур. Использовали премиум-анимации и brutalist design элементы для создания запоминающегося визуального языка.",

  process: [
    {
      title: "Discovery & Research",
      description:
        "Глубинное интервью с владельцем, анализ конкурентов в премиум-сегменте, исследование целевой аудитории и их поведения при выборе SPA-услуг.",
      icon: "🔍",
    },
    {
      title: "Strategy & Architecture",
      description:
        "Разработка информационной архитектуры, пользовательских сценариев, wireframes и прототипов с фокусом на конверсию в бронирование.",
      icon: "🎯",
    },
    {
      title: "Visual Design",
      description:
        "Создание минималистичного дизайна с премиум-ощущением. Большие изображения, много воздуха, черно-бежевая палитра, brutalist акценты.",
      icon: "✨",
    },
    {
      title: "Development",
      description:
        "Разработка на React с премиум-анимациями (Motion), интеграция системы бронирования, оптимизация производительности и SEO.",
      icon: "⚡",
    },
    {
      title: "Testing & Launch",
      description:
        "A/B тестирование ключевых элементов, оптимизация конверсии, тестирование на различных устройствах и запуск с мониторингом метрик.",
      icon: "🚀",
    },
  ],

  mockups: [
    {
      type: "desktop",
      image:
        "https://images.unsplash.com/photo-1702047143580-0f349be86369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY1Mjk5MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Desktop версия - Hero секция",
    },
    {
      type: "mobile",
      image:
        "https://images.unsplash.com/photo-1695048064926-4da0dd8259d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjUyMzE5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Mobile версия - Booking flow",
    },
    {
      type: "full",
      image:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NTE4Njk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Full page preview",
    },
  ],

  features: [
    {
      title: "Онлайн-бронирование",
      description:
        "Интуитивная система бронирования с выбором даты, времени, специалиста и услуги. Интеграция с календарем Google и напоминания по WhatsApp.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200",
    },
    {
      title: "360° Виртуальные туры",
      description:
        "Интерактивные туры по процедурным кабинетам, зонам релаксации и spa-помещениям для создания доверия перед первым визитом.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200",
    },
    {
      title: "Галерея процедур",
      description:
        "Детальное описание каждой процедуры с фотографиями, видео, преимуществами и ценами. Фильтрация по типу, длительности и цене.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200",
    },
  ],

  results: [
    {
      metric: "Онлайн-бронирования",
      value: "+180%",
      description:
        "Рост онлайн-бронирований за первые 3 месяца после запуска",
    },
    {
      metric: "Средний чек",
      value: "+65%",
      description:
        "Увеличение среднего чека благодаря upsell процедур",
    },
    {
      metric: "Время на сайте",
      value: "4.5x",
      description:
        "Увеличение среднего времени пребывания на сайте",
    },
    {
      metric: "Mobile трафик",
      value: "+220%",
      description:
        "Рост мобильного трафика благодаря адаптивности",
    },
    {
      metric: "Конверсия",
      value: "12.4%",
      description: "Конверсия посетителей в бронирование (было 3.2%)",
    },
    {
      metric: "NPS Score",
      value: "92/100",
      description:
        "Оценка удовлетворенности пользовательским опытом",
    },
  ],

  lighthouse: {
    performance: 98,
    accessibility: 100,
    bestPractices: 100,
    seo: 100,
  },

  testimonial: {
    quote:
      "Команда не просто создала красивый сайт — они создали работающий инструмент продаж. Количество онлайн-бронирований выросло вдвое за первый месяц. Клиенты постоянно хвалят удобство системы. Это была лучшая инвестиция в наш бизнес.",
    author: "Рахель Коэн",
    position: "Основательница Desert Luxe Wellness",
    avatar:
      "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },

  techStack: [
    "React",
    "TypeScript",
    "Motion (Framer Motion)",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Google Calendar API",
    "WhatsApp Business API",
  ],

  gallery: [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200",
  ],
};

/* =======================
   ВТОРОЙ КЕЙС: CLOUDFLOW
   ======================= */

const cloudFlowCase: CaseStudy = {
  ...luxeSpaCase,
  id: "saas-platform",
  title: "CloudFlow Platform",
  client: "B2B SaaS-платформа для автоматизации процессов",
  industry: "SaaS & Productivity",
  heroImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  tagline:
    "+240% конверсии в trial-аккаунты после редизайна onboarding-воронки",

  overview:
    "CloudFlow — B2B SaaS-платформа, которая помогает командам автоматизировать внутренние процессы. До редизайна продукт выглядел как сложный enterprise-инструмент и пугал новых пользователей с первых секунд.",

  challenge:
    "Главная проблема — низкая конверсия пробных аккаунтов в активных пользователей. Интерфейс был перегружен, onboarding состоял из сухих форм и длинных инструкций. Новые пользователи просто «выгорали» на первом экране.",

  solution:
    "Мы переработали первый опыт: сфокусировались на трёх ключевых сценариях, добавили визуальные подсказки, прогрессивное раскрытие сложных функций и экскурсию по продукту. Обновили маркетинговый сайт, синхронизировав язык интерфейса и коммуникации.",
};

/* =======================
   ТРЕТИЙ КЕЙС: NOOR FASHION
   ======================= */

const noorFashionCase: CaseStudy = {
  ...luxeSpaCase,
  id: "fashion-ecom",
  title: "NOOR Fashion",
  client: "Онлайн-бренд дизайнерской одежды",
  industry: "Fashion & E-commerce",
  heroImage:
    "https://images.unsplash.com/photo-1573879500655-98f2012dd1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  tagline: "₪2.8M оборота за 6 месяцев после запуска нового магазина",

  overview:
    "NOOR Fashion — молодой бренд дизайнерской одежды, который продавал через Instagram и маркетплейсы. Им нужен был собственный магазин с премиальной подачей, быстрой загрузкой и фокусом на мобильный трафик.",

  challenge:
    "Старый сайт не выдерживал трафик с рекламных кампаний, фото и контент загружались медленно, каталог был неудобным на мобильных устройствах. Бренд терял клиентов ещё до просмотра коллекции.",

  solution:
    "Мы спроектировали новый e-commerce с упором на mobile-first, быстрые фильтры, коллекции и дропы. Добавили lookbook-страницы, шоппинг прямо с образов, интеграцию с CRM и трекингом конверсий по каждому каналу.",
};

/* =======================
   ЭКСПОРТ
   ======================= */

// Массив кейсов — используется в превью и в модалке
export const caseStudies: CaseStudy[] = [
  luxeSpaCase,
  cloudFlowCase,
  noorFashionCase,
];

// Если где-то нужен «основной» кейс отдельно
export const caseStudyData: CaseStudy = luxeSpaCase;
