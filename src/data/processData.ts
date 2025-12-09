export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  image: string;
  icon: string;
  details: {
    title: string;
    description: string;
  }[];
}

export interface ProcessData {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
  };
  
  steps: ProcessStep[];
  
  deliverables: {
    title: string;
    subtitle: string;
    items: {
      category: string;
      items: string[];
      icon: string;
    }[];
  };
  
  timeline: {
    title: string;
    phases: {
      name: string;
      weeks: string;
      description: string;
    }[];
  };
  
  guarantee: {
    title: string;
    points: string[];
  };
}

export const processData: ProcessData = {
  hero: {
    title: 'Как мы работаем',
    subtitle: 'Проверенный процесс, который превращает идеи в результаты. Прозрачно, эффективно, измеримо.',
    badge: 'Our Process',
  },
  
  steps: [
    {
      number: '01',
      title: 'Discovery & Strategy',
      subtitle: 'Погружение в ваш бизнес',
      description: 'Мы начинаем с глубинного понимания вашего бизнеса, аудитории и целей. Это не просто встреча — это стратегическая сессия, где мы исследуем ваш рынок, конкурентов и возможности роста.',
      duration: '1-2 недели',
      deliverables: [
        'Брифинг и стратегическая сессия',
        'Анализ конкурентов',
        'Исследование аудитории',
        'Техническое задание',
        'Roadmap проекта',
      ],
      image: 'https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3NjUyOTk5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: '🔍',
      details: [
        {
          title: 'Бизнес-анализ',
          description: 'Изучаем вашу нишу, конкурентов, UVP и позиционирование',
        },
        {
          title: 'User Research',
          description: 'Создаём персоны, изучаем боли и мотивации аудитории',
        },
        {
          title: 'Стратегия',
          description: 'Определяем цели, KPI и metrics успеха',
        },
      ],
    },
    {
      number: '02',
      title: 'UX/UI Design',
      subtitle: 'Создаём визуальный опыт',
      description: 'От wireframes до финального дизайна. Мы создаём интерфейсы, которые не просто красивы — они интуитивны, функциональны и решают бизнес-задачи. Каждый элемент продуман и протестирован.',
      duration: '2-3 недели',
      deliverables: [
        'User flows и sitemap',
        'Wireframes',
        'UI концепции (2-3 варианта)',
        'Финальный дизайн всех страниц',
        'Design system и гайдлайны',
        'Интерактивные прототипы',
      ],
      image: 'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzY1Mjk4ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: '🎨',
      details: [
        {
          title: 'Wireframing',
          description: 'Структура и логика каждой страницы',
        },
        {
          title: 'Visual Design',
          description: 'Цвета, типографика, стиль, анимации',
        },
        {
          title: 'Prototyping',
          description: 'Интерактивный прототип для тестирования',
        },
      ],
    },
    {
      number: '03',
      title: 'Development',
      subtitle: 'Превращаем дизайн в код',
      description: 'Используем современный стек технологий для создания быстрых, безопасных и масштабируемых решений. React, TypeScript, премиум анимации, оптимизация производительности — всё для идеального результата.',
      duration: '3-5 недель',
      deliverables: [
        'Frontend разработка (React/TypeScript)',
        'Backend и API (если нужно)',
        'CMS интеграция',
        'Анимации и микроинтеракции',
        'Адаптивная верстка',
        'Performance оптимизация',
      ],
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzY1MjY4NjExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: '⚡',
      details: [
        {
          title: 'Clean Code',
          description: 'Читаемый, модульный, масштабируемый код',
        },
        {
          title: 'Performance',
          description: 'Lighthouse 90+ по всем метрикам',
        },
        {
          title: 'SEO Ready',
          description: 'Готовность к индексации и ранжированию',
        },
      ],
    },
    {
      number: '04',
      title: 'Testing & QA',
      subtitle: 'Проверяем каждую деталь',
      description: 'Тестирование на всех устройствах и браузерах. Проверка производительности, доступности, SEO. Находим и исправляем даже мельчайшие баги до запуска.',
      duration: '1 неделя',
      deliverables: [
        'Cross-browser тестирование',
        'Responsive testing',
        'Performance audit',
        'Accessibility (WCAG)',
        'SEO audit',
        'Bug fixing',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
      icon: '🔬',
      details: [
        {
          title: 'Функциональность',
          description: 'Все элементы работают безупречно',
        },
        {
          title: 'Совместимость',
          description: 'Работает на всех устройствах и браузерах',
        },
        {
          title: 'Производительность',
          description: 'Быстрая загрузка и плавная работа',
        },
      ],
    },
    {
      number: '05',
      title: 'Launch & Deploy',
      subtitle: 'Выводим проект в свет',
      description: 'Настройка хостинга, домена, SSL, аналитики. Плавный запуск без простоев. Обучаем вашу команду работе с сайтом и настраиваем все необходимые инструменты.',
      duration: '3-5 дней',
      deliverables: [
        'Хостинг и домен setup',
        'SSL сертификат',
        'Google Analytics & Tag Manager',
        'Search Console setup',
        'Документация',
        'Обучение команды',
      ],
      image: 'https://images.unsplash.com/photo-1685839061205-a3ea35b7b804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGRpYWdyYW0lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjUyOTk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: '🚀',
      details: [
        {
          title: 'Deployment',
          description: 'Настройка production окружения',
        },
        {
          title: 'Monitoring',
          description: 'Uptime monitoring и error tracking',
        },
        {
          title: 'Training',
          description: 'Обучение команды работе с платформой',
        },
      ],
    },
    {
      number: '06',
      title: 'Growth & Support',
      subtitle: 'Помогаем расти дальше',
      description: 'Мы не исчезаем после запуска. Предоставляем техническую поддержку, мониторим метрики, помогаем с улучшениями и масштабированием. Ваш успех — наш успех.',
      duration: 'Ongoing',
      deliverables: [
        'Техническая поддержка',
        'Performance monitoring',
        'A/B тестирование',
        'Конверсионная оптимизация',
        'Ежемесячные отчеты',
        'Обновления и улучшения',
      ],
      image: 'https://images.unsplash.com/photo-1742415106102-77bbfe14b872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlcHJpbnQlMjBhcmNoaXRlY3R1cmUlMjBwbGFufGVufDF8fHx8MTc2NTIwNjgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: '📈',
      details: [
        {
          title: 'Maintenance',
          description: 'Регулярные обновления и исправления',
        },
        {
          title: 'Optimization',
          description: 'Постоянное улучшение метрик',
        },
        {
          title: 'Scaling',
          description: 'Помощь с ростом и новыми фичами',
        },
      ],
    },
  ],
  
  deliverables: {
    title: 'Что вы получаете',
    subtitle: 'Полный комплект для успешного запуска и роста',
    items: [
      {
        category: 'Design Assets',
        icon: '🎨',
        items: [
          'Все исходники дизайна (Figma)',
          'Design system и стайлгайд',
          'UI kit для будущих обновлений',
          'Brand guidelines',
          'Иконки и графические элементы',
          'Fonts и цветовая палитра',
        ],
      },
      {
        category: 'Development',
        icon: '💻',
        items: [
          'Исходный код (GitHub)',
          'Документация проекта',
          'API интеграции',
          'Admin panel (если применимо)',
          'Адаптивная верстка',
          'SEO оптимизация',
        ],
      },
      {
        category: 'Analytics & Tools',
        icon: '📊',
        items: [
          'Google Analytics настройка',
          'Tag Manager конфигурация',
          'Heatmaps (Hotjar/MS Clarity)',
          'Performance monitoring',
          'Error tracking (Sentry)',
          'Uptime monitoring',
        ],
      },
      {
        category: 'Documentation',
        icon: '📚',
        items: [
          'User manual',
          'Technical documentation',
          'Content guidelines',
          'Maintenance guide',
          'Видео-туториалы',
          'FAQ для команды',
        ],
      },
    ],
  },
  
  timeline: {
    title: 'Типичный timeline проекта',
    phases: [
      {
        name: 'Discovery',
        weeks: '1-2 недели',
        description: 'Исследование, стратегия, планирование',
      },
      {
        name: 'Design',
        weeks: '2-3 недели',
        description: 'UX/UI дизайн и прототипирование',
      },
      {
        name: 'Development',
        weeks: '3-5 недель',
        description: 'Разработка и интеграции',
      },
      {
        name: 'Testing',
        weeks: '1 неделя',
        description: 'QA и оптимизация',
      },
      {
        name: 'Launch',
        weeks: '3-5 дней',
        description: 'Деплой и обучение',
      },
    ],
  },
  
  guarantee: {
    title: 'Наши гарантии',
    points: [
      'Запуск в срок или возврат средств',
      'Lighthouse score 90+ по всем метрикам',
      '30 дней бесплатной поддержки после запуска',
      'Unlimited revisions на этапе дизайна',
      'Полные права на исходники',
      'Прозрачная коммуникация на каждом этапе',
    ],
  },
};
