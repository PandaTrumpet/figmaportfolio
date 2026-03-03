// export interface AboutData {
//   hero: {
//     title: string;
//     subtitle: string;
//     image: string;
//     stats: {
//       label: string;
//       value: string;
//     }[];
//   };
  
//   mission: {
//     title: string;
//     description: string;
//     image: string;
//   };
  
//   values: {
//     title: string;
//     description: string;
//     icon: string;
//   }[];
  
//   difference: {
//     title: string;
//     subtitle: string;
//     points: {
//       title: string;
//       description: string;
//       image: string;
//     }[];
//   };
  
//   team: {
//     name: string;
//     role: string;
//     bio: string;
//     avatar: string;
//     linkedin?: string;
//   }[];
  
//   achievements: {
//     title: string;
//     items: {
//       award: string;
//       category: string;
//       year: string;
//       icon: string;
//     }[];
//   };
  
//   recognition: {
//     number: string;
//     label: string;
//     description: string;
//   }[];
// }

// export const aboutData: AboutData = {
//   hero: {
//     title: "Создаём цифровые продукты, которые работают",
//     subtitle:
//       "Мы — команда дизайнеров и разработчиков из Тель-Авива, специализирующаяся на премиум веб-решениях для амбициозных брендов.",
//     image:
//       "https://images.unsplash.com/photo-1519205196298-7fc29cb73b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyMDYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",

//     stats: [
//       { label: "Рынки", value: "Израиль и ЕС" },
//       { label: "Коммуникация", value: "WhatsApp-first" },
//       { label: "Запуск MVP", value: "2–4 недели" },
//       { label: "Автоматизация заявок", value: "С первого дня" },
//     ],
//   },

//   mission: {
//     title: "Наша миссия",
//     description:
//       "Мы верим, что каждый бизнес заслуживает digital-присутствие, которое не просто красиво выглядит, но и приносит измеримые результаты. Наша задача — создавать веб-продукты, которые объединяют эстетику, функциональность и бизнес-цели. Мы не просто делаем сайты — мы создаём инструменты роста.",
//     image:
//       "https://images.unsplash.com/photo-1692571001264-18ff99a0a55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNlcnR8ZW58MXx8fHwxNzY1Mjk5NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
//   },


//   values: [
//     {
//       title: "Качество — без тормозов",
//       description:
//         "Делаем быстро, но не «на коленке». Чёткий UX, нормальная структура и аккуратная реализация — чтобы сайт работал долго.",
//       icon: "⚡",
//     },
//     {
//       title: "Прозрачность в каждом шаге",
//       description:
//         "Сроки, стоимость и этапы — заранее. Ты всегда понимаешь, что сделано и что будет дальше.",
//       icon: "💎",
//     },
//     {
//       title: "Заявки важнее красоты",
//       description:
//         "Дизайн — это инструмент. Фокус на конверсии: оффер, CTA, доверие, скорость и понятные действия.",
//       icon: "📈",
//     },
//     {
//       title: "После релиза мы на связи",
//       description:
//         "Не пропадаем после запуска. Поддержка, улучшения и автоматизация — чтобы сайт приносил результат постоянно.",
//       icon: "🤝",
//     },
//   ],



//   difference: {
//     title: "Почему с нами проще",
//     subtitle: "Не «красивый сайт». Система, которая приводит заявки.",
//     points: [
//       {
//         title: "Сначала — оффер и UX",
//         description:
//           "Начинаем не с «дизайна ради дизайна», а с того, что клиент должен сделать на сайте. Упаковываем предложение, строим структуру, CTA и сценарии — чтобы люди не терялись и доходили до заявки.",
//         image:
//           "https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1MjU3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
//       },
//       {
//         title: "Быстро. Надёжно. SEO-ready",
//         description:
//           "Современный стек (React/Next, оптимизация скорости, базовое SEO и аналитика). Сайт грузится быстро, нормально индексируется и готов к росту — без переписываний через месяц.",
//         image:
//           "https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyNjgzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
//       },
//       {
//         title: "Запуск → измерения → улучшения",
//         description:
//           "После релиза не гадаем. Смотрим, где теряются клиенты (события, воронка, формы), и точечно улучшаем: тексты, блоки, шаги, конверсию.",
//         image:
//           "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
//       },
//     ],
//   },

//   team: [
//     {
//       name: "Давид Леви",
//       role: "Founder & Creative Director",
//       bio: "12 лет в digital, работал с брендами от стартапов до Fortune 500. Специализируется на UX/UI и brand strategy.",
//       avatar:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
//       linkedin: "#",
//     },
//     {
//       name: "Майя Коэн",
//       role: "Lead Developer",
//       bio: "Full-stack разработчик с опытом в React, Node.js и cloud infrastructure. Фанат performance optimization.",
//       avatar:
//         "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
//       linkedin: "#",
//     },
//     {
//       name: "Ноам Шапиро",
//       role: "UX/UI Designer",
//       bio: "Дизайнер с background в психологии. Создаёт интерфейсы, которые работают на подсознательном уровне.",
//       avatar:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
//       linkedin: "#",
//     },
//     {
//       name: "Тамар Авраам",
//       role: "Project Manager",
//       bio: "Держит все процессы под контролем. Гарантирует, что проекты запускаются вовремя и в рамках бюджета.",
//       avatar:
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
//       linkedin: "#",
//     },
//   ],


//   achievements: {
//     title: "Стандарты качества",
//     items: [
//       {
//         icon: "💬",
//         year: "Core",
//         award: "WhatsApp-first UX",
//         category: "Короткий путь до заявки, без лишних шагов",
//       },
//       {
//         icon: "⚡",
//         year: "Core",
//         award: "Скорость и performance",
//         category: "Оптимизация загрузки и стабильная работа",
//       },
//       {
//         icon: "🔎",
//         year: "Core",
//         award: "SEO-база",
//         category: "Структура, meta/OG, индексируемость",
//       },
//       {
//         icon: "📊",
//         year: "Setup",
//         award: "Аналитика событий",
//         category: "Кнопки, формы, воронка — чтобы понимать, где теряются лиды",
//       },
//       {
//         icon: "🧩",
//         year: "Optional",
//         award: "Интеграции и CRM",
//         category: "Notion / Airtable / HubSpot — по задаче",
//       },
//       {
//         icon: "🛡️",
//         year: "Support",
//         award: "Запуск и поддержка",
//         category: "Правки, улучшения, сопровождение после релиза",
//       },
//     ],
//   },

//   recognition: [
//     {
//       number: "2–4 недели",
//       label: "Запуск MVP",
//       description: "Фиксируем этапы и дедлайны, без сюрпризов",
//     },
//     {
//       number: "Один поток",
//       label: "Без лишних посредников",
//       description: "Чёткая коммуникация и быстрые решения без потери контекста",
//     },
//     {
//       number: "С первого дня",
//       label: "Заявки под контролем",
//       description: "Форма/WhatsApp + фиксация лидов (CRM по задаче)",
//     },
//   ],
// };


// src/data/aboutData.ts
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

type TFn = (key: string) => string;

export function buildAboutData(t: TFn): AboutData {
  return {
    hero: {
      title: t("data.hero.title"),
      subtitle: t("data.hero.subtitle"),
      image:
        "https://images.unsplash.com/photo-1519205196298-7fc29cb73b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyMDYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      stats: [
        { label: t("data.hero.stats.0.label"), value: t("data.hero.stats.0.value") },
        { label: t("data.hero.stats.1.label"), value: t("data.hero.stats.1.value") },
        { label: t("data.hero.stats.2.label"), value: t("data.hero.stats.2.value") },
        { label: t("data.hero.stats.3.label"), value: t("data.hero.stats.3.value") },
      ],
    },

    mission: {
      title: t("data.mission.title"),
      description: t("data.mission.description"),
      image:
        "https://images.unsplash.com/photo-1692571001264-18ff99a0a55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNlcnR8ZW58MXx8fHwxNzY1Mjk5NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },

    values: [
      {
        title: t("data.values.0.title"),
        description: t("data.values.0.description"),
        icon: "⚡",
      },
      {
        title: t("data.values.1.title"),
        description: t("data.values.1.description"),
        icon: "💎",
      },
      {
        title: t("data.values.2.title"),
        description: t("data.values.2.description"),
        icon: "📈",
      },
      {
        title: t("data.values.3.title"),
        description: t("data.values.3.description"),
        icon: "🤝",
      },
    ],

    difference: {
      title: t("data.difference.title"),
      subtitle: t("data.difference.subtitle"),
      points: [
        {
          title: t("data.difference.points.0.title"),
          description: t("data.difference.points.0.description"),
          image:
            "https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1MjU3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: t("data.difference.points.1.title"),
          description: t("data.difference.points.1.description"),
          image:
            "https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUyNjgzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          title: t("data.difference.points.2.title"),
          description: t("data.difference.points.2.description"),
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        },
      ],
    },

    // Team можно держать переводами или оставить как мок.
    // Я вынес в переводы тоже (как ты просил "весь текстовый материал").
    team: [
      {
        name: t("data.team.0.name"),
        role: t("data.team.0.role"),
        bio: t("data.team.0.bio"),
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        linkedin: "#",
      },
      {
        name: t("data.team.1.name"),
        role: t("data.team.1.role"),
        bio: t("data.team.1.bio"),
        avatar:
          "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdhcm18ZW58MXx8fHwxNzY1MjkzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        linkedin: "#",
      },
      {
        name: t("data.team.2.name"),
        role: t("data.team.2.role"),
        bio: t("data.team.2.bio"),
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        linkedin: "#",
      },
      {
        name: t("data.team.3.name"),
        role: t("data.team.3.role"),
        bio: t("data.team.3.bio"),
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
        linkedin: "#",
      },
    ],

    achievements: {
      title: t("data.achievements.title"),
      items: [
        {
          icon: "💬",
          year: "Core",
          award: t("data.achievements.items.0.award"),
          category: t("data.achievements.items.0.category"),
        },
        {
          icon: "⚡",
          year: "Core",
          award: t("data.achievements.items.1.award"),
          category: t("data.achievements.items.1.category"),
        },
        {
          icon: "🔎",
          year: "Core",
          award: t("data.achievements.items.2.award"),
          category: t("data.achievements.items.2.category"),
        },
        {
          icon: "📊",
          year: "Setup",
          award: t("data.achievements.items.3.award"),
          category: t("data.achievements.items.3.category"),
        },
        {
          icon: "🧩",
          year: "Optional",
          award: t("data.achievements.items.4.award"),
          category: t("data.achievements.items.4.category"),
        },
        {
          icon: "🛡️",
          year: "Support",
          award: t("data.achievements.items.5.award"),
          category: t("data.achievements.items.5.category"),
        },
      ],
    },

    recognition: [
      {
        number: t("data.recognition.0.number"),
        label: t("data.recognition.0.label"),
        description: t("data.recognition.0.description"),
      },
      {
        number: t("data.recognition.1.number"),
        label: t("data.recognition.1.label"),
        description: t("data.recognition.1.description"),
      },
      {
        number: t("data.recognition.2.number"),
        label: t("data.recognition.2.label"),
        description: t("data.recognition.2.description"),
      },
    ],
  };
}