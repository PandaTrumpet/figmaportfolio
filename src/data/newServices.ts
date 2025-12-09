export interface ServiceNew {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  examples: {
    title: string;
    description: string;
    image: string;
  }[];
  startingPrice: string;
  timeline: string;
}

export const servicesNew: ServiceNew[] = [
  {
    id: 'websites-landing',
    title: 'Websites & Landing Pages',
    tagline: 'Конверсия превыше всего',
    description: 'Создаём сайты и лендинги, которые превращают посетителей в клиентов. Каждый пиксель работает на вашу цель: от заголовков до кнопок. Быстрые, адаптивные, результативные.',
    features: [
      'Стратегический дизайн с фокусом на конверсию',
      'Адаптивная вёрстка для всех устройств',
      'SEO-оптимизация и быстрая загрузка',
      'Интеграция аналитики и форм',
      'CMS для лёгкого управления контентом',
    ],
    examples: [
      {
        title: 'Tech Startup Landing',
        description: 'SaaS лендинг с анимациями и интерактивными элементами',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
      {
        title: 'E-commerce Store',
        description: 'Интернет-магазин с каталогом, корзиной и онлайн-оплатой',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
      {
        title: 'Agency Portfolio',
        description: 'Портфолио агентства с кейсами и анимированными переходами',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
    ],
    startingPrice: '₪12,000',
    timeline: '3-5 недель',
  },
  {
    id: 'branding',
    title: 'Branding Systems',
    tagline: 'Визуальная идентичность',
    description: 'Разрабатываем цельные брендинговые системы: от логотипа до гайдлайнов. Создаём визуальный язык, который отражает суть вашего бизнеса и выделяет среди конкурентов.',
    features: [
      'Разработка логотипа и фирменного стиля',
      'Цветовая палитра и типографика',
      'Брендбук и гайдлайны',
      'Шаблоны для социальных сетей',
      'Презентационные материалы',
    ],
    examples: [
      {
        title: 'Desert Wellness Brand',
        description: 'Минималистичный брендинг для премиум спа-центра',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
      {
        title: 'Tech Company Identity',
        description: 'Современный брендинг для стартапа в сфере AI',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
    ],
    startingPrice: '₪15,000',
    timeline: '4-6 недель',
  },
  {
    id: 'uiux-redesign',
    title: 'UI/UX Redesign',
    tagline: 'Трансформация опыта',
    description: 'Анализируем текущий интерфейс, выявляем проблемы и создаём новый UX, который решает задачи пользователей. Улучшаем юзабилити, увеличиваем конверсию, делаем дизайн современным.',
    features: [
      'UX-аудит и анализ пользовательского опыта',
      'Проектирование новой архитектуры',
      'Современный UI-дизайн интерфейса',
      'Прототипирование и тестирование',
      'Дизайн-система для масштабирования',
    ],
    examples: [
      {
        title: 'Dashboard Redesign',
        description: 'Редизайн админ-панели SaaS платформы',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
      {
        title: 'Mobile App UX',
        description: 'Оптимизация мобильного приложения для финтех',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
    ],
    startingPrice: '₪18,000',
    timeline: '4-7 недель',
  },
  {
    id: '3d-motion',
    title: '3D Motion & Premium Animations',
    tagline: 'Вау-эффект',
    description: 'Добавляем премиум-анимации и 3D-графику, которые выделяют ваш сайт. Плавные переходы, интерактивные элементы, кинематографичные эффекты. Создаём не просто сайты, а digital-впечатления.',
    features: [
      '3D моделирование и рендеринг',
      'Микроанимации и интерактив',
      'Scroll-based анимации',
      'WebGL и Three.js эффекты',
      'Анимированные переходы между страницами',
    ],
    examples: [
      {
        title: 'Luxury Product Showcase',
        description: '3D визуализация продукта с интерактивным вращением',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
      {
        title: 'Animated Hero Section',
        description: 'Кинематографичная Hero-секция с параллакс эффектами',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
    ],
    startingPrice: '₪20,000',
    timeline: '5-8 недель',
  },
  {
    id: 'automation',
    title: 'Automation (CRM, WhatsApp, AI)',
    tagline: 'Автоматизируй рутину',
    description: 'Внедряем автоматизацию, которая экономит время и увеличивает продажи. CRM-системы, чат-боты в WhatsApp, AI-ассистенты. Освобождаем вас от рутины, чтобы вы фокусировались на бизнесе.',
    features: [
      'Интеграция CRM (Bitrix24, amoCRM)',
      'WhatsApp боты и автоворонки',
      'AI чат-боты для сайта',
      'Автоматизация email-рассылок',
      'Интеграция платёжных систем',
    ],
    examples: [
      {
        title: 'WhatsApp Sales Bot',
        description: 'Автоматизация продаж через WhatsApp с квалификацией лидов',
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
      {
        title: 'CRM Integration',
        description: 'Полная интеграция сайта с CRM-системой',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      },
    ],
    startingPrice: '₪10,000',
    timeline: '3-6 недель',
  },
];

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Для старта и MVP',
    price: '₪10,000 - 20,000',
    features: [
      'Лендинг или простой сайт',
      'Базовая аналитика',
      'Адаптивный дизайн',
      '1 месяц поддержки',
    ],
  },
  {
    name: 'Professional',
    description: 'Для растущего бизнеса',
    price: '₪20,000 - 50,000',
    features: [
      'Многостраничный сайт',
      'Кастомный дизайн и анимации',
      'CMS и интеграции',
      '3 месяца поддержки',
      'SEO-оптимизация',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Комплексные решения',
    price: 'От ₪50,000',
    features: [
      'Любая сложность',
      'Полный цикл разработки',
      'Автоматизация и интеграции',
      'Персональный менеджер',
      'Приоритетная поддержка',
    ],
  },
];
