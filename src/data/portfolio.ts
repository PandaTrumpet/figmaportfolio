export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  industry: string[];
  type: string[];
  year: string;
  featured?: boolean;
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string[];
    images: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'luxe-spa',
    title: 'Desert Luxe Wellness',
    client: 'Премиум SPA-центр',
    description: 'Минималистичный сайт для люксового спа-центра с онлайн-бронированием и виртуальными турами',
    image: 'https://images.unsplash.com/photo-1649345946706-afbf86eee046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd2VsbmVzc3xlbnwxfHx8fDE3NjUyODI3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Wellness', 'Lifestyle'],
    type: ['Website', 'E-commerce'],
    year: '2024',
    featured: true,
    caseStudy: {
      challenge: 'Спа-центр нуждался в онлайн-присутствии, которое отражало бы премиум-позиционирование и упрощало процесс бронирования услуг.',
      solution: 'Создали минималистичный сайт с фокусом на визуальное впечатление. Интегрировали систему онлайн-бронирования, добавили 360° виртуальные туры по помещениям и галерею процедур с детальными описаниями.',
      results: [
        '+180% увеличение онлайн-бронирований',
        '+65% рост среднего чека',
        '4.5x больше времени на сайте',
        '92% положительных отзывов о UX',
      ],
      images: [
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200',
      ],
    },
  },
  {
    id: 'tech-saas',
    title: 'CloudFlow Platform',
    client: 'SaaS Стартап',
    description: 'Лендинг для B2B SaaS платформы с интерактивными демо и анимированными инфографиками',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cHxlbnwxfHx8fDE3NjUyOTg0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Technology', 'SaaS'],
    type: ['Landing Page', 'UI/UX'],
    year: '2024',
    featured: true,
    caseStudy: {
      challenge: 'Стартап запускал инновационную платформу для автоматизации рабочих процессов, но потенциальным клиентам было сложно понять продукт без демо.',
      solution: 'Разработали интерактивный лендинг с встроенными live-демо ключевых функций. Использовали анимированные инфографики для объяснения сложных концепций и создали калькулятор ROI для персонализации ценностного предложения.',
      results: [
        '+240% конверсия в trial',
        '-58% стоимость лида',
        '3.8x увеличение времени на странице',
        'Вошли в топ-3 Product Hunt',
      ],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200',
      ],
    },
  },
  {
    id: 'fashion-ecom',
    title: 'NOOR Fashion',
    client: 'Бутик-бренд одежды',
    description: 'Интернет-магазин с кастомным конфигуратором и AR-примеркой',
    image: 'https://images.unsplash.com/photo-1573879500655-98f2012dd1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmR8ZW58MXx8fHwxNzY1Mjk4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Fashion', 'Retail'],
    type: ['E-commerce', 'UI/UX'],
    year: '2024',
    featured: true,
    caseStudy: {
      challenge: 'Бутик-бренд хотел масштабироваться онлайн, сохраняя персонализированный опыт физического магазина и снижая процент возвратов.',
      solution: 'Создали премиум e-commerce с AR-примеркой через камеру телефона, конфигуратором персонализации (вышивка, подгонка) и консультацией со стилистом в реальном времени через чат.',
      results: [
        '+320% рост онлайн-продаж',
        '-42% возвратов товаров',
        '₪2.8M выручки за 6 месяцев',
        '4.9/5 средняя оценка покупателей',
      ],
      images: [
        'https://images.unsplash.com/photo-1558769132-cb1aea48f186?w=1200',
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200',
      ],
    },
  },
  {
    id: 'restaurant-web',
    title: 'Sababa Kitchen',
    client: 'Ресторан средиземноморской кухни',
    description: 'Сайт с меню, онлайн-заказами и интеграцией доставки',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjUxOTczNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Food', 'Hospitality'],
    type: ['Website', 'E-commerce'],
    year: '2024',
  },
  {
    id: 'realestate-luxury',
    title: 'Horizon Properties',
    client: 'Агентство элитной недвижимости',
    description: 'Портал с 3D-турами, картами и системой фильтрации объектов',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2NTIzOTg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Real Estate', 'Luxury'],
    type: ['Website', 'UI/UX'],
    year: '2024',
  },
  {
    id: 'app-mobile',
    title: 'FitTrack Pro',
    client: 'Фитнес-приложение',
    description: 'Редизайн мобильного приложения для трекинга тренировок',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MjIwODE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Technology', 'Health'],
    type: ['Mobile App', 'UI/UX'],
    year: '2024',
  },
  {
    id: 'arch-portfolio',
    title: 'Studio Arkhe',
    client: 'Архитектурное бюро',
    description: 'Портфолио с крупными изображениями проектов и фильтрацией',
    image: 'https://images.unsplash.com/photo-1745441328887-694e8cd8ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1Mjk4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Architecture', 'Design'],
    type: ['Website', 'Portfolio'],
    year: '2024',
  },
  {
    id: 'brand-identity',
    title: 'Essence Cosmetics',
    client: 'Косметический бренд',
    description: 'Полный ребрендинг с разработкой сайта и упаковки',
    image: 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjUyNjc1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Beauty', 'Retail'],
    type: ['Branding', 'Website'],
    year: '2023',
  },
  {
    id: 'ecommerce-modern',
    title: 'Urban Essentials',
    client: 'Магазин товаров для дома',
    description: 'Современный интернет-магазин с персонализацией',
    image: 'https://images.unsplash.com/photo-1758522484646-c8694d1784fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2V8ZW58MXx8fHwxNzY1MTk5NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Retail', 'Lifestyle'],
    type: ['E-commerce', 'UI/UX'],
    year: '2023',
  },
  {
    id: 'web-luxury',
    title: 'Lumière Hotels',
    client: 'Сеть бутик-отелей',
    description: 'Премиум-сайт с системой бронирования и виртуальными турами',
    image: 'https://images.unsplash.com/photo-1657216328535-e981d223dee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NTI5ODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    industry: ['Hospitality', 'Luxury'],
    type: ['Website', 'E-commerce'],
    year: '2023',
  },
];

export const industries = ['All', 'Technology', 'Fashion', 'Wellness', 'Food', 'Real Estate', 'Hospitality', 'Luxury'];
export const types = ['All', 'Website', 'E-commerce', 'Landing Page', 'UI/UX', 'Branding', 'Mobile App'];
