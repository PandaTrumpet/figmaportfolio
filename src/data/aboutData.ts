export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  
  mission: {
    title: string;
    description: string;
    image: string;
  };
  
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  
  difference: {
    title: string;
    subtitle: string;
    points: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  
  team: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    linkedin?: string;
  }[];
  
  achievements: {
    title: string;
    items: {
      award: string;
      category: string;
      year: string;
      icon: string;
    }[];
  };
  
  recognition: {
    number: string;
    label: string;
    description: string;
  }[];
}

export const aboutData: AboutData = {
  hero: {
    title: 'Создаём цифровые продукты, которые работают',
    subtitle: 'Мы — команда дизайнеров и разработчиков из Тель-Авива, специализирующаяся на премиум веб-решениях для амбициозных брендов.',
    image: 'https://images.unsplash.com/photo-1519205196298-7fc29cb73b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyMDYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: [
      { label: 'Проектов запущено', value: '120+' },
      { label: 'Лет на рынке', value: '8' },
      { label: 'Стран-клиентов', value: '15' },
      { label: 'Рост клиентов', value: '250%' },
    ],
  },
  
  mission: {
    title: 'Наша миссия',
    description: 'Мы верим, что каждый бизнес заслуживает digital-присутствие, которое не просто красиво выглядит, но и приносит измеримые результаты. Наша задача — создавать веб-продукты, которые объединяют эстетику, функциональность и бизнес-цели. Мы не просто делаем сайты — мы создаём инструменты роста.',
    image: 'https://images.unsplash.com/photo-1692571001264-18ff99a0a55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNlcnR8ZW58MXx8fHwxNzY1Mjk5NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  
  values: [
    {
      title: 'Качество превыше скорости',
      description: 'Мы не гонимся за количеством проектов. Каждый проект получает внимание к деталям и время, необходимое для создания чего-то выдающегося.',
      icon: '⚡',
    },
    {
      title: 'Прозрачность',
      description: 'Честность в сроках, ценах и процессе. Вы всегда знаете, на каком этапе проект, что происходит и почему.',
      icon: '💎',
    },
    {
      title: 'Результаты, не просто красота',
      description: 'Дизайн должен решать бизнес-задачи. Мы фокусируемся на конверсии, UX и метриках, которые влияют на ваш рост.',
      icon: '📈',
    },
    {
      title: 'Долгосрочные отношения',
      description: 'Мы не исчезаем после запуска. Многие клиенты работают с нами годами, потому что мы становимся частью их команды.',
      icon: '🤝',
    },
  ],
  
  difference: {
    title: 'Почему мы отличаемся',
    subtitle: 'Не просто агентство. Партнёр по росту.',
    points: [
      {
        title: 'Design-First подход',
        description: 'Мы начинаем с глубокого погружения в ваш бренд, аудиторию и конкурентов. Прежде чем написать строчку кода, мы создаём дизайн-систему, которая отражает вашу уникальность и работает на ваши цели.',
        image: 'https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1MjU3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'Премиум технологии',
        description: 'React, TypeScript, современные анимации Motion, оптимизация производительности. Мы используем технологии, которые обеспечивают скорость, SEO и масштабируемость. Ваш сайт будет быстрым, безопасным и готовым к росту.',
        image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyNjgzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'Data-Driven решения',
        description: 'Каждое решение подкреплено данными. A/B тесты, аналитика поведения, heatmaps, конверсионные эксперименты. Мы не гадаем — мы тестируем, измеряем и улучшаем.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
      },
    ],
  },
  
  team: [
    {
      name: 'Давид Леви',
      role: 'Founder & Creative Director',
      bio: '12 лет в digital, работал с брендами от стартапов до Fortune 500. Специализируется на UX/UI и brand strategy.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      linkedin: '#',
    },
    {
      name: 'Майя Коэн',
      role: 'Lead Developer',
      bio: 'Full-stack разработчик с опытом в React, Node.js и cloud infrastructure. Фанат performance optimization.',
      avatar: 'https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'Ноам Шапиро',
      role: 'UX/UI Designer',
      bio: 'Дизайнер с background в психологии. Создаёт интерфейсы, которые работают на подсознательном уровне.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      linkedin: '#',
    },
    {
      name: 'Тамар Авраам',
      role: 'Project Manager',
      bio: 'Держит все процессы под контролем. Гарантирует, что проекты запускаются вовремя и в рамках бюджета.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      linkedin: '#',
    },
  ],
  
  achievements: {
    title: 'Награды и признание',
    items: [
      {
        award: 'Awwwards Site of the Day',
        category: 'Web Design Excellence',
        year: '2024',
        icon: '🏆',
      },
      {
        award: 'CSS Design Awards',
        category: 'Best UI Design',
        year: '2024',
        icon: '🎨',
      },
      {
        award: 'Webby Awards Honoree',
        category: 'Best User Experience',
        year: '2023',
        icon: '⭐',
      },
      {
        award: 'FWA of the Day',
        category: 'Cutting Edge Design',
        year: '2023',
        icon: '💫',
      },
      {
        award: 'Top 50 Israeli Agencies',
        category: 'Digital Innovation',
        year: '2023',
        icon: '🚀',
      },
      {
        award: 'Google Lighthouse 100',
        category: 'Performance Excellence',
        year: '2024',
        icon: '⚡',
      },
    ],
  },
  
  recognition: [
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'На основе 120+ отзывов',
    },
    {
      number: '4.9/5',
      label: 'Google Rating',
      description: 'Средняя оценка клиентов',
    },
    {
      number: '85%',
      label: 'Повторные клиенты',
      description: 'Возвращаются за новыми проектами',
    },
  ],
};
