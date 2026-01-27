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
    title: "Сайт, который приводит клиентов",
    subtitle:
      "Мы строим понятный процесс: клиент заходит на сайт, пишет в WhatsApp и попадает в систему, где ни одна заявка не теряется.",
    badge: "Как это работает",
  },

  // steps: [
  //   {
  //     number: "01",
  //     title: "Discovery & Strategy",
  //     subtitle: "Погружение в ваш бизнес",
  //     description:
  //       "Мы начинаем с глубинного понимания вашего бизнеса, аудитории и целей. Это не просто встреча — это стратегическая сессия, где мы исследуем ваш рынок, конкурентов и возможности роста.",
  //     duration: "1-2 недели",
  //     deliverables: [
  //       "Брифинг и стратегическая сессия",
  //       "Анализ конкурентов",
  //       "Исследование аудитории",
  //       "Техническое задание",
  //       "Roadmap проекта",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3NjUyOTk5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //     icon: "🔍",
  //     details: [
  //       {
  //         title: "Бизнес-анализ",
  //         description: "Изучаем вашу нишу, конкурентов, UVP и позиционирование",
  //       },
  //       {
  //         title: "User Research",
  //         description: "Создаём персоны, изучаем боли и мотивации аудитории",
  //       },
  //       {
  //         title: "Стратегия",
  //         description: "Определяем цели, KPI и metrics успеха",
  //       },
  //     ],
  //   },
  //   {
  //     number: "02",
  //     title: "UX/UI Design",
  //     subtitle: "Создаём визуальный опыт",
  //     description:
  //       "От wireframes до финального дизайна. Мы создаём интерфейсы, которые не просто красивы — они интуитивны, функциональны и решают бизнес-задачи. Каждый элемент продуман и протестирован.",
  //     duration: "2-3 недели",
  //     deliverables: [
  //       "User flows и sitemap",
  //       "Wireframes",
  //       "UI концепции (2-3 варианта)",
  //       "Финальный дизайн всех страниц",
  //       "Design system и гайдлайны",
  //       "Интерактивные прототипы",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzY1Mjk4ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //     icon: "🎨",
  //     details: [
  //       {
  //         title: "Wireframing",
  //         description: "Структура и логика каждой страницы",
  //       },
  //       {
  //         title: "Visual Design",
  //         description: "Цвета, типографика, стиль, анимации",
  //       },
  //       {
  //         title: "Prototyping",
  //         description: "Интерактивный прототип для тестирования",
  //       },
  //     ],
  //   },
  //   {
  //     number: "03",
  //     title: "Development",
  //     subtitle: "Превращаем дизайн в код",
  //     description:
  //       "Используем современный стек технологий для создания быстрых, безопасных и масштабируемых решений. React, TypeScript, премиум анимации, оптимизация производительности — всё для идеального результата.",
  //     duration: "3-5 недель",
  //     deliverables: [
  //       "Frontend разработка (React/TypeScript)",
  //       "Backend и API (если нужно)",
  //       "CMS интеграция",
  //       "Анимации и микроинтеракции",
  //       "Адаптивная верстка",
  //       "Performance оптимизация",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzY1MjY4NjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
  //     icon: "⚡",
  //     details: [
  //       {
  //         title: "Clean Code",
  //         description: "Читаемый, модульный, масштабируемый код",
  //       },
  //       {
  //         title: "Performance",
  //         description: "Lighthouse 90+ по всем метрикам",
  //       },
  //       {
  //         title: "SEO Ready",
  //         description: "Готовность к индексации и ранжированию",
  //       },
  //     ],
  //   },
  //   {
  //     number: "04",
  //     title: "Testing & QA",
  //     subtitle: "Проверяем каждую деталь",
  //     description:
  //       "Тестирование на всех устройствах и браузерах. Проверка производительности, доступности, SEO. Находим и исправляем даже мельчайшие баги до запуска.",
  //     duration: "1 неделя",
  //     deliverables: [
  //       "Cross-browser тестирование",
  //       "Responsive testing",
  //       "Performance audit",
  //       "Accessibility (WCAG)",
  //       "SEO audit",
  //       "Bug fixing",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
  //     icon: "🔬",
  //     details: [
  //       {
  //         title: "Функциональность",
  //         description: "Все элементы работают безупречно",
  //       },
  //       {
  //         title: "Совместимость",
  //         description: "Работает на всех устройствах и браузерах",
  //       },
  //       {
  //         title: "Производительность",
  //         description: "Быстрая загрузка и плавная работа",
  //       },
  //     ],
  //   },
  //   {
  //     number: "05",
  //     title: "Launch & Deploy",
  //     subtitle: "Выводим проект в свет",
  //     description:
  //       "Настройка хостинга, домена, SSL, аналитики. Плавный запуск без простоев. Обучаем вашу команду работе с сайтом и настраиваем все необходимые инструменты.",
  //     duration: "3-5 дней",
  //     deliverables: [
  //       "Хостинг и домен setup",
  //       "SSL сертификат",
  //       "Google Analytics & Tag Manager",
  //       "Search Console setup",
  //       "Документация",
  //       "Обучение команды",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1685839061205-a3ea35b7b804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGRpYWdyYW0lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjUyOTk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //     icon: "🚀",
  //     details: [
  //       {
  //         title: "Deployment",
  //         description: "Настройка production окружения",
  //       },
  //       {
  //         title: "Monitoring",
  //         description: "Uptime monitoring и error tracking",
  //       },
  //       {
  //         title: "Training",
  //         description: "Обучение команды работе с платформой",
  //       },
  //     ],
  //   },
  //   {
  //     number: "06",
  //     title: "Growth & Support",
  //     subtitle: "Помогаем расти дальше",
  //     description:
  //       "Мы не исчезаем после запуска. Предоставляем техническую поддержку, мониторим метрики, помогаем с улучшениями и масштабированием. Ваш успех — наш успех.",
  //     duration: "Ongoing",
  //     deliverables: [
  //       "Техническая поддержка",
  //       "Performance monitoring",
  //       "A/B тестирование",
  //       "Конверсионная оптимизация",
  //       "Ежемесячные отчеты",
  //       "Обновления и улучшения",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1742415106102-77bbfe14b872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlcHJpbnQlMjBhcmNoaXRlY3R1cmUlMjBwbGFufGVufDF8fHx8MTc2NTIwNjgyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  //     icon: "📈",
  //     details: [
  //       {
  //         title: "Maintenance",
  //         description: "Регулярные обновления и исправления",
  //       },
  //       {
  //         title: "Optimization",
  //         description: "Постоянное улучшение метрик",
  //       },
  //       {
  //         title: "Scaling",
  //         description: "Помощь с ростом и новыми фичами",
  //       },
  //     ],
  //   },
  // ],
  steps: [
    {
      number: "01",
      title: "Аудит и стратегия",
      subtitle: "Понимаем бизнес и путь клиента",
      description:
        "За 1–2 созвона фиксируем цель, оффер и главный сценарий: как клиент находит вас, что видит на сайте и как быстро доходит до сообщения в WhatsApp. Убираем лишнее и оставляем то, что приводит заявки.",
      duration: "3–5 дней",
      deliverables: [
        "Короткий бриф + созвон на 60 минут",
        "Карта пути клиента: сайт → WhatsApp → заявка",
        "Структура страниц и ключевых блоков",
        "Формулировка оффера (коротко и по делу)",
        "План проекта по этапам и срокам",
        "KPI для измерения результата (клики, заявки, конверсия)",
      ],
      image:
        "https://images.unsplash.com/photo-1699570047113-16fdf623e83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3NjUyOTk5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "🔍",
      details: [
        {
          title: "Оффер",
          description:
            "Фиксируем ценность так, чтобы клиент понял её за 5 секунд",
        },
        {
          title: "Сценарий заявки",
          description: "Проектируем короткий путь до WhatsApp без лишних шагов",
        },
        {
          title: "Измеримость",
          description:
            "Сразу закладываем метрики: клики, заявки, конверсия, источники",
        },
      ],
    },

    {
      number: "02",
      title: "UX/UI под конверсию",
      subtitle: "Дизайн, который ведёт к действию",
      description:
        "Делаем прототип и дизайн с упором на понятность и скорость: мобильная версия в приоритете, сильные CTA, доверие и ясная структура. Визуал — премиальный, но главная цель — чтобы клиент быстро написал в WhatsApp.",
      duration: "7–10 дней",
      deliverables: [
        "Sitemap и пользовательские сценарии (user flows)",
        "Wireframes ключевых экранов",
        "UI-концепция в вашем стиле (Night Waves)",
        "Финальный дизайн всех страниц и состояний",
        "UI-kit (кнопки, формы, карточки, цвета)",
        "Интерактивный прототип (для проверки логики)",
      ],
      image:
        "https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzY1Mjk4ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "🎨",
      details: [
        {
          title: "Mobile-first",
          description:
            "Основной сценарий — с телефона: быстро, ясно, без перегрузки",
        },
        {
          title: "Доверие",
          description:
            "Добавляем то, что важно клиенту: факты, отзывы, кейсы, гарантии",
        },
        {
          title: "CTA-логика",
          description:
            "Кнопки и формы ведут к действию, а не просто украшают страницу",
        },
      ],
    },

    {
      number: "03",
      title: "Разработка и интеграции",
      subtitle: "Быстро, чисто, SEO-ready",
      description:
        "Собираем сайт на современном стеке, оптимизируем скорость и SEO, подключаем WhatsApp и при необходимости — CRM. В итоге вы получаете систему, где заявки приходят, фиксируются и не теряются.",
      duration: "2–4 недели",
      deliverables: [
        "Frontend разработка (Next.js / React)",
        "Адаптивность и анимации (premium micro-interactions)",
        "Интеграция WhatsApp (click-to-chat + события)",
        "Формы заявок и обработка лидов",
        "Подключение CRM при необходимости (Notion / Airtable / HubSpot)",
        "Базовая SEO-настройка (структура, meta, индексация)",
      ],
      image:
        "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzY1MjY4NjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "⚡",
      details: [
        {
          title: "Скорость",
          description:
            "Оптимизация загрузки и Core Web Vitals для Google и рекламы",
        },
        {
          title: "Интеграции",
          description: "WhatsApp и CRM связываем в один понятный поток заявок",
        },
        {
          title: "Качество",
          description: "Чистый модульный код — легко расширять и поддерживать",
        },
      ],
    },

    {
      number: "04",
      title: "Проверка и качество",
      subtitle: "Чтобы всё работало в реальности",
      description:
        "Проверяем сайт так, как им пользуются реальные люди: на телефонах, в разных браузерах и при плохом интернете. Тестируем сценарии заявки, скорость, доступность и SEO — до запуска.",
      duration: "3–5 дней",
      deliverables: [
        "Тест на устройствах и браузерах",
        "Проверка сценариев: клик → WhatsApp → заявка",
        "Performance аудит (Lighthouse)",
        "Accessibility базовый чек (WCAG)",
        "SEO чек-лист перед запуском",
        "Исправление найденных проблем",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
      icon: "🔬",
      details: [
        {
          title: "Сценарии",
          description:
            "Проверяем путь клиента до заявки, чтобы не было «потерь»",
        },
        {
          title: "Надёжность",
          description: "Убираем мелкие баги, которые обычно съедают конверсию",
        },
        {
          title: "Готовность",
          description: "Перед запуском всё стабильно, быстро и предсказуемо",
        },
      ],
    },

    {
      number: "05",
      title: "Запуск и аналитика",
      subtitle: "Включаем измеримость результата",
      description:
        "Запускаем проект без простоев: домен, SSL, хостинг, аналитика. Настраиваем события (клик по WhatsApp, отправка формы), чтобы вы видели, что реально работает и откуда приходят заявки.",
      duration: "2–4 дня",
      deliverables: [
        "Деплой на продакшн (Vercel/хостинг по выбору)",
        "Домен + SSL",
        "GA4 + Tag Manager (события и цели)",
        "Search Console",
        "Базовый мониторинг ошибок (по необходимости)",
        "Короткая инструкция для вашей команды",
      ],
      image:
        "https://images.unsplash.com/photo-1685839061205-a3ea35b7b804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGRpYWdyYW0lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjUyOTk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "🚀",
      details: [
        {
          title: "Трекинг",
          description: "Считаем клики по WhatsApp и заявки — без догадок",
        },
        {
          title: "Источники",
          description:
            "Понимаете, откуда пришёл клиент: реклама, поиск, соцсети",
        },
        {
          title: "Контроль",
          description: "Метрики показывают, что улучшать в первую очередь",
        },
      ],
    },
  ],
  deliverables: {
    title: "Что вы получаете",
    subtitle: "Полный комплект для запуска и роста — без хаоса и потерь лидов.",
    items: [
      {
        category: "Дизайн и внешний вид",
        icon: "🎨",
        items: [
          "Готовый дизайн сайта, адаптированный под телефоны",
          "Продуманная структура страниц под заявки",
          "Визуальный стиль, понятный клиентам и вызывающий доверие",
          "Аккуратные анимации и эффекты без перегруза",
          "Дизайн, который легко дорабатывать в будущем",
        ],
      },
      {
        category: "Разработка и работа сайта",
        icon: "💻",
        items: [
          "Полностью готовый сайт, размещённый в интернете",
          "Корректная работа на телефонах и компьютерах",
          "Подключённые формы и кнопки заявок",
          "Интеграция с WhatsApp (и другими каналами при необходимости)",
          "Быстрая загрузка и стабильная работа",
        ],
      },
      {
        category: "Связь и приём заявок",
        icon: "📩",
        items: [
          "Корректная работа всех форм и кнопок",
          "Передача заявок без потерь",
          "Подключение WhatsApp и других каналов связи",
          "Проверка сценариев отправки сообщений",
          "Готовность сайта к приёму реальных клиентов",
        ],
      },
      {
        category: "Поддержка после запуска",
        icon: "📚",
        items: [
          "Помощь после запуска, если что-то нужно поправить",
          "Ответы на вопросы по работе сайта",
          "Небольшие правки по договорённости",
          "Рекомендации, что можно улучшить дальше",
          "Понимание, к кому обратиться, если понадобится помощь",
        ],
      },
    ],
  },
  timeline: {
    title: "Timeline проекта (зависит от масштаба)",
    phases: [
      {
        name: "Discovery",
        weeks: "Обычно: 2–5 дней",
        description:
          "Собираем цели, оффер, аудиторию и конкурентов. Срок зависит от количества услуг/направлений и наличия материалов (тексты, фото, цены).",
      },
      {
        name: "Design",
        weeks: "Обычно: 3–10 дней",
        description:
          "Прототип + дизайн. Лендинг — быстрее, многостраничник/сложная структура — дольше. Ускоряется, если есть бренд-гайд и примеры, которые нравятся.",
      },
      {
        name: "Development",
        weeks: "Обычно: 5–20 дней",
        description:
          "Верстка и сборка. Лендинг — 5–10 дней, сайт с несколькими страницами — 10–15, сайт + интеграции/CRM/бот — до 20. Зависит от функционала и количества секций.",
      },
      {
        name: "Testing",
        weeks: "Обычно: 1–3 дня",
        description:
          "Проверка на устройствах, скорость, SEO-база, формы/WhatsApp сценарии. Дольше, если много интеграций или нестандартные сценарии заявок.",
      },
      {
        name: "Launch",
        weeks: "Обычно: 1–2 дня",
        description:
          "Деплой, домен/SSL, аналитика и передача. Срок зависит от доступа к домену/хостингу и необходимости подключения трекинга/событий.",
      },
    ],
  },
  guarantee: {
    title: "Наши гарантии",
    points: [
      "Запуск в срок или возврат средств",
      "Lighthouse score 90+ по всем метрикам",
      "30 дней бесплатной поддержки после запуска",
      "Unlimited revisions на этапе дизайна",
      "Полные права на исходники",
      "Прозрачная коммуникация на каждом этапе",
    ],
  },
};
