export interface PricingPackage {
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ideal: string;
  cta: string;
  highlighted?: boolean;
  icon: string | React.ReactNode;
  color: string;
}

export interface AddOn {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: string | React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingData {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    guarantee: string;
  };
  
  packages: PricingPackage[];
  
  comparison: {
    title: string;
    features: {
      name: string;
      starter: boolean | string;
      growth: boolean | string;
      premium: boolean | string;
    }[];
  };
  
  addons: {
    title: string;
    subtitle: string;
    items: AddOn[];
  };
  
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export const pricingData: PricingData = {
  hero: {
    title: "Прозрачное ценообразование",
    subtitle:
      "Никаких скрытых платежей. Понятные пакеты, чёткий объём работ и фиксированная стоимость под задачи вашего бизнеса.",
    badge: "Pricing",
    guarantee: "30 дней гарантии возврата средств",
  },
  packages: [
    {
      name: "Starter",
      tagline: "Быстрый старт",
      price: "₪3,900",
      period: "единоразово",
      description:
        "Лендинг или простой сайт, который объясняет ваш сервис и принимает заявки через формы или WhatsApp.",
      features: [
        "Лендинг или до 3 страниц",
        "Адаптивный дизайн (mobile-first)",
        "Чёткая структура под заявки",
        "Форма заявки или WhatsApp",
        "Подключение простой CRM (Notion / Airtable)",
        "Базовая автоматизация заявок",
        "Опция: WhatsApp бот (первичные вопросы → CRM)",
        "2 раунда правок",
        "14 дней поддержки после запуска",
        "Доступ к сайту и инструкции",
        "Многоязычность — опционально",
      ],
      ideal: "Частные услуги, салоны, небольшой бизнес",
      cta: "Выбрать Starter",
      icon: "🚀",
      color: "#050608",
    },
    {
      name: "Growth",
      tagline: "Самый популярный",
      price: "₪8,900",
      period: "единоразово",
      description:
        "Сайт, который работает как менеджер: принимает заявки, отправляет их в CRM и помогает не терять клиентов.",
      features: [
        "До 10 страниц",
        "Премиум UI/UX под доверие",
        "Анимации и микроинтеракции",
        "CMS для самостоятельного редактирования",
        "Формы + WhatsApp → CRM",
        "CRM система (Notion / Airtable / HubSpot — по задаче)",
        "Автоматизация заявок и статусов",
        "Многоязычность (RU / EN / HE)",
        "Опция: WhatsApp бот (квалификация лидов + сценарии)",
        "4 раунда правок",
        "30 дней поддержки",
        "Доступ к сайту и инструкции",
      ],
      ideal: "Клиники, сервисы, растущий бизнес",
      cta: "Выбрать Growth",
      highlighted: true,
      icon: "💎",
      color: "#050608",
    },
    {
      name: "Premium",
      tagline: "Система под бизнес",
      price: "₪15,900",
      period: "единоразово",
      description:
        "Полноценная digital-система: сайт, CRM и автоматизация процессов под рост бизнеса.",
      features: [
        "Неограниченное количество страниц",
        "Кастомный UI/UX дизайн",
        "Продвинутые анимации и кастомные элементы",
        "Headless CMS (по необходимости)",
        "CRM система под процессы бизнеса",
        "Автоматизация заявок, статусов и коммуникаций",
        "Интеграции с внешними сервисами",
        "Многоязычность",
        "Опция: WhatsApp бот / AI-бот (поддержка + квалификация + FAQ)",
        "Правки без ограничений в рамках проекта",
        "60 дней поддержки",
        "Доступ к сайту и инструкции",
        "Обучение работе с системой",
      ],
      ideal: "Компании, которым важны процессы и масштабирование",
      cta: "Выбрать Premium",
      icon: "👑",
      color: "#050608",
    },
  ],

  // comparison: {
  //   title: "Сравнение пакетов",
  //   features: [
  //     {
  //       name: "Тип проекта",
  //       starter: "Лендинг / простой сайт",
  //       growth: "Сайт для продаж",
  //       premium: "Полноценная digital-система",
  //     },
  //     {
  //       name: "Количество страниц",
  //       starter: "До 3",
  //       growth: "До 10",
  //       premium: "Без ограничений",
  //     },
  //     {
  //       name: "Дизайн и UX",
  //       starter: "Чистый, конверсионный",
  //       growth: "Премиум UI/UX",
  //       premium: "Кастомный UI/UX",
  //     },
  //     {
  //       name: "Анимации и эффекты",
  //       starter: "Минимальные",
  //       growth: "Анимации и микро-эффекты",
  //       premium: "Кастомные анимации",
  //     },
  //     {
  //       name: "CRM система",
  //       starter: "Notion / Airtable",
  //       growth: "CRM под бизнес-процессы",
  //       premium: "CRM + автоматизация",
  //     },
  //     {
  //       name: "Заявки и формы",
  //       starter: "Форма или WhatsApp",
  //       growth: "Формы + WhatsApp → CRM",
  //       premium: "Мульти-каналы → CRM",
  //     },
  //     {
  //       name: "WhatsApp бот",
  //       starter: "Опция",
  //       growth: "Опция",
  //       premium: "Опция (AI / сценарии)",
  //     },
  //     {
  //       name: "Многоязычность",
  //       starter: "Опция",
  //       growth: "Включено",
  //       premium: "Включено",
  //     },
  //     {
  //       name: "Интеграции",
  //       starter: false,
  //       growth: "Базовые (email, формы)",
  //       premium: "CRM, сервисы, API",
  //     },
  //     {
  //       name: "Раунды правок",
  //       starter: "2",
  //       growth: "4",
  //       premium: "Без ограничений",
  //     },
  //     {
  //       name: "Поддержка после запуска",
  //       starter: "14 дней",
  //       growth: "30 дней",
  //       premium: "60 дней",
  //     },
  //     {
  //       name: "Обучение работе с системой",
  //       starter: false,
  //       growth: "Короткий onboarding",
  //       premium: "Полное обучение",
  //     },
  //   ],
  // },
  comparison: {
    title: "Сравнение пакетов",
    features: [
      {
        name: "Тип проекта",
        starter: "Лендинг / простой сайт",
        growth: "Сайт для продаж",
        premium: "Digital-система под бизнес",
      },
      {
        name: "Количество страниц",
        starter: "До 3",
        growth: "До 10",
        premium: "Без ограничений",
      },
      {
        name: "Дизайн и UX",
        starter: "Чистый, конверсионный",
        growth: "Премиум UI/UX",
        premium: "Кастомный UI/UX",
      },
      {
        name: "Анимации и эффекты",
        starter: "Минимальные",
        growth: "Микроинтеракции",
        premium: "Продвинутые и кастомные",
      },
      {
        name: "CRM система",
        starter: "Notion / Airtable",
        growth: "CRM под задачи бизнеса",
        premium: "CRM под процессы бизнеса",
      },
      {
        name: "Заявки и коммуникации",
        starter: "Форма или WhatsApp",
        growth: "Формы + WhatsApp → CRM",
        premium: "Мульти-каналы → CRM",
      },
      {
        name: "WhatsApp бот",
        starter: "Опция",
        growth: "Опция",
        premium: "Опция (AI / сценарии)",
      },
      {
        name: "Многоязычность",
        starter: "Опция",
        growth: "Включено (RU / EN / HE)",
        premium: "Включено",
      },
      {
        name: "CMS (управление контентом)",
        starter: false,
        growth: "Для самостоятельного редактирования",
        premium: "Headless CMS (по необходимости)",
      },
      {
        name: "Интеграции",
        starter: false,
        growth: "Базовые",
        premium: "Внешние сервисы и API",
      },
      {
        name: "Раунды правок",
        starter: "2",
        growth: "4",
        premium: "Без ограничений",
      },
      {
        name: "Поддержка после запуска",
        starter: "14 дней",
        growth: "30 дней",
        premium: "60 дней",
      },
      {
        name: "Обучение работе с системой",
        starter: false,
        growth: "Короткий onboarding",
        premium: "Полное обучение",
      },
    ],
  },

  addons: {
    title: "Дополнительные услуги",
    subtitle: "Расширьте возможности любого пакета",
    items: [
      {
        name: "AI Automation",
        price: "₪12,000",
        description:
          "Интеграция AI-чатботов, автоматизация поддержки клиентов, умные рекомендации.",
        features: [
          "AI чатбот (GPT-4 powered)",
          "Автоматизация email ответов",
          "Умные product recommendations",
          "Sentiment analysis",
          "24/7 AI support agent",
        ],
        icon: "🤖",
      },
      {
        name: "Brand Identity",
        price: "₪15,000",
        description:
          "Полный брендинг: логотип, цвета, типографика, brand guidelines, визуальный язык.",
        features: [
          "Логотип (3 концепта)",
          "Цветовая палитра",
          "Типографика система",
          "Brand guidelines (PDF)",
          "Business card дизайн",
          "Social media templates",
        ],
        icon: "🎨",
      },
      {
        name: "SEO Strategy & Audit",
        price: "₪8,000",
        description:
          "Глубинный SEO аудит, keyword research, on-page оптимизация, стратегия контента.",
        features: [
          "Technical SEO audit",
          "Keyword research (50+ keywords)",
          "Competitor analysis",
          "On-page optimization",
          "Content strategy",
          "Backlink strategy",
        ],
        icon: "📊",
      },
      {
        name: "Content Creation",
        price: "₪6,000/месяц",
        description:
          "Профессиональный копирайтинг, блог-статьи, SEO-тексты, email campaigns.",
        features: [
          "4 blog posts в месяц",
          "SEO-оптимизированные тексты",
          "Email marketing copy",
          "Social media контент",
          "Product descriptions",
        ],
        icon: "✍️",
      },
      {
        name: "Professional Photography",
        price: "₪5,000",
        description:
          "Профессиональная фотосессия продуктов, команды или пространства.",
        features: [
          "Полдня съемки (4 часа)",
          "До 50 обработанных фото",
          "High-res файлы",
          "Web-optimized версии",
          "Коммерческие права",
        ],
        icon: "📸",
      },
      {
        name: "Monthly Maintenance",
        price: "₪2,500/месяц",
        description:
          "Регулярные обновления, техническая поддержка, мониторинг, бэкапы.",
        features: [
          "Технические обновления",
          "Security patches",
          "Еженедельные бэкапы",
          "Performance monitoring",
          "Priority support",
          "Ежемесячные отчеты",
        ],
        icon: "🔧",
      },
    ],
  },

  faq: {
    title: "Часто задаваемые вопросы",
    subtitle: "Ответы на самые популярные вопросы о ценах и процессе",
    items: [
      {
        question: "Как происходит оплата?",
        answer:
          "Мы работаем по системе 50/30/20: 50% предоплата для старта проекта, 30% после утверждения дизайна, 20% после запуска. Принимаем банковские переводы, кредитные карты и PayPal.",
      },
      {
        question: "Сколько времени займет проект?",
        answer:
          "Starter: 3-4 недели, Growth: 6-8 недель, Premium: 10-14 недель. Точные сроки зависят от сложности и ваших требований. Мы всегда обсуждаем timeline на этапе Discovery.",
      },
      {
        question: 'Что входит в "раунды правок"?',
        answer:
          "Раунд правок — это набор изменений, которые вы можете запросить после презентации дизайна или определенного этапа. Мы собираем все комментарии, вносим изменения и показываем обновленную версию.",
      },
      {
        question: "Могу ли я обновить сайт самостоятельно?",
        answer:
          "Да! Если вы выбираете пакет с CMS (Growth или Premium), вы получите админ-панель для управления контентом. Мы проведем обучение вашей команды и предоставим документацию.",
      },
      {
        question: "Что если мне нужно больше страниц?",
        answer:
          "Дополнительные страницы стоят ₪1,500-₪3,000 в зависимости от сложности. Или вы можете upgrade на следующий пакет для лучшего соотношения цена/качество.",
      },
      {
        question: "Включен ли хостинг в цену?",
        answer:
          "Хостинг не включен в базовую цену, но мы поможем выбрать и настроить hosting (обычно ₪50-₪200/месяц). Также предлагаем managed hosting с нашей стороны за ₪500/месяц.",
      },
      {
        question: "Что такое Lighthouse score?",
        answer:
          "Lighthouse — инструмент Google для оценки качества сайта по 4 метрикам: производительность, доступность, лучшие практики и SEO. Score 90+ означает отличную скорость, UX и готовность к SEO.",
      },
      {
        question: "Могу ли я начать с малого и расширить позже?",
        answer:
          "Конечно! Многие клиенты начинают со Starter, а затем добавляют функции или upgrade на Growth. Мы строим сайты с учетом масштабируемости.",
      },
      {
        question: "Есть ли скидки для некоммерческих организаций?",
        answer:
          "Да, мы предоставляем 20% скидку для зарегистрированных НКО и образовательных учреждений. Свяжитесь с нами для деталей.",
      },
      {
        question: "Что если результат мне не понравится?",
        answer:
          "Мы предлагаем 30-дневную гарантию возврата средств после запуска. Если вы не удовлетворены результатом и мы не смогли решить проблемы, мы вернем деньги. Но такого еще не было! 😊",
      },
    ],
  },

  cta: {
    title: "Не уверены, какой пакет выбрать?",
    subtitle:
      "Запишитесь на бесплатную 30-минутную консультацию. Мы поможем определить оптимальное решение для вашего бизнеса.",
    button: "Бесплатная консультация",
  },
};
