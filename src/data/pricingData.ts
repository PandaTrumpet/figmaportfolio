// export interface PricingPackage {
//   name: string;
//   tagline: string;
//   price: string;
//   period: string;
//   description: string;
//   features: string[];
//   ideal: string;
//   cta: string;
//   highlighted?: boolean;
//   icon: string | React.ReactNode;
//   color: string;
// }

// export interface AddOn {
//   name: string;
//   price: string;
//   description: string;
//   features: string[];
//   icon: string | React.ReactNode;
// }

// export interface FAQItem {
//   question: string;
//   answer: string;
// }

// export interface PricingData {
//   hero: {
//     title: string;
//     subtitle: string;
//     badge: string;
//     guarantee: string;
//   };

//   packages: PricingPackage[];

//   comparison: {
//     title: string;
//     features: {
//       name: string;
//       starter: boolean | string;
//       growth: boolean | string;
//       premium: boolean | string;
//     }[];
//   };

//   addons: {
//     title: string;
//     subtitle: string;
//     items: AddOn[];
//   };

//   faq: {
//     title: string;
//     subtitle: string;
//     items: FAQItem[];
//   };

//   cta: {
//     title: string;
//     subtitle: string;
//     button: string;
//   };
// }

// export const pricingData: PricingData = {
//   hero: {
//     title: "Прозрачное ценообразование",
//     subtitle:
//       "Никаких скрытых платежей. Понятные пакеты, чёткий объём работ и фиксированная стоимость под задачи вашего бизнеса.",
//     badge: "Pricing",
//     guarantee: "30 дней гарантии возврата средств",
//   },
//   packages: [
//     {
//       name: "Starter",
//       tagline: "Быстрый старт",
//       price: "₪3,900",
//       period: "единоразово",
//       description:
//         "Лендинг или простой сайт, который объясняет ваш сервис и принимает заявки через формы или WhatsApp.",
//       features: [
//         "Лендинг или до 3 страниц",
//         "Адаптивный дизайн (mobile-first)",
//         "Чёткая структура под заявки",
//         "Форма заявки или WhatsApp",
//         "Подключение простой CRM (Notion / Airtable)",
//         "Базовая автоматизация заявок",
//         "Опция: WhatsApp бот (первичные вопросы → CRM)",
//         "2 раунда правок",
//         "14 дней поддержки после запуска",
//         "Доступ к сайту и инструкции",
//         "Многоязычность — опционально",
//       ],
//       ideal: "Частные услуги, салоны, небольшой бизнес",
//       cta: "Выбрать Starter",
//       icon: "🚀",
//       color: "#050608",
//     },
//     {
//       name: "Growth",
//       tagline: "Самый популярный",
//       price: "₪8,900",
//       period: "единоразово",
//       description:
//         "Сайт, который работает как менеджер: принимает заявки, отправляет их в CRM и помогает не терять клиентов.",
//       features: [
//         "До 10 страниц",
//         "Премиум UI/UX под доверие",
//         "Анимации и микроинтеракции",
//         "CMS для самостоятельного редактирования",
//         "Формы + WhatsApp → CRM",
//         "CRM система (Notion / Airtable / HubSpot — по задаче)",
//         "Автоматизация заявок и статусов",
//         "Многоязычность (RU / EN / HE)",
//         "Опция: WhatsApp бот (квалификация лидов + сценарии)",
//         "4 раунда правок",
//         "30 дней поддержки",
//         "Доступ к сайту и инструкции",
//       ],
//       ideal: "Клиники, сервисы, растущий бизнес",
//       cta: "Выбрать Growth",
//       highlighted: true,
//       icon: "💎",
//       color: "#050608",
//     },
//     {
//       name: "Premium",
//       tagline: "Система под бизнес",
//       price: "₪15,900",
//       period: "единоразово",
//       description:
//         "Полноценная digital-система: сайт, CRM и автоматизация процессов под рост бизнеса.",
//       features: [
//         "Неограниченное количество страниц",
//         "Кастомный UI/UX дизайн",
//         "Продвинутые анимации и кастомные элементы",
//         "Headless CMS (по необходимости)",
//         "CRM система под процессы бизнеса",
//         "Автоматизация заявок, статусов и коммуникаций",
//         "Интеграции с внешними сервисами",
//         "Многоязычность",
//         "Опция: WhatsApp бот / AI-бот (поддержка + квалификация + FAQ)",
//         "Правки без ограничений в рамках проекта",
//         "60 дней поддержки",
//         "Доступ к сайту и инструкции",
//         "Обучение работе с системой",
//       ],
//       ideal: "Компании, которым важны процессы и масштабирование",
//       cta: "Выбрать Premium",
//       icon: "👑",
//       color: "#050608",
//     },
//   ],

//   comparison: {
//     title: "Сравнение пакетов",
//     features: [
//       {
//         name: "Тип проекта",
//         starter: "Лендинг / простой сайт",
//         growth: "Сайт для продаж",
//         premium: "Digital-система под бизнес",
//       },
//       {
//         name: "Количество страниц",
//         starter: "До 3",
//         growth: "До 10",
//         premium: "Без ограничений",
//       },
//       {
//         name: "Дизайн и UX",
//         starter: "Чистый, конверсионный",
//         growth: "Премиум UI/UX",
//         premium: "Кастомный UI/UX",
//       },
//       {
//         name: "Анимации и эффекты",
//         starter: "Минимальные",
//         growth: "Микроинтеракции",
//         premium: "Продвинутые и кастомные",
//       },
//       {
//         name: "CRM система",
//         starter: "Notion / Airtable",
//         growth: "CRM под задачи бизнеса",
//         premium: "CRM под процессы бизнеса",
//       },
//       {
//         name: "Заявки и коммуникации",
//         starter: "Форма или WhatsApp",
//         growth: "Формы + WhatsApp → CRM",
//         premium: "Мульти-каналы → CRM",
//       },
//       {
//         name: "WhatsApp бот",
//         starter: "Опция",
//         growth: "Опция",
//         premium: "Опция (AI / сценарии)",
//       },
//       {
//         name: "Многоязычность",
//         starter: "Опция",
//         growth: "Включено (RU / EN / HE)",
//         premium: "Включено",
//       },
//       {
//         name: "CMS (управление контентом)",
//         starter: false,
//         growth: "Для самостоятельного редактирования",
//         premium: "Headless CMS (по необходимости)",
//       },
//       {
//         name: "Интеграции",
//         starter: false,
//         growth: "Базовые",
//         premium: "Внешние сервисы и API",
//       },
//       {
//         name: "Раунды правок",
//         starter: "2",
//         growth: "4",
//         premium: "Без ограничений",
//       },
//       {
//         name: "Поддержка после запуска",
//         starter: "14 дней",
//         growth: "30 дней",
//         premium: "60 дней",
//       },
//       {
//         name: "Обучение работе с системой",
//         starter: false,
//         growth: "Короткий onboarding",
//         premium: "Полное обучение",
//       },
//     ],
//   },

//   addons: {
//     title: "Дополнительные модули",
//     subtitle: "Усильте сайт автоматизацией и процессами под ваш бизнес",
//     items: [
//       {
//         name: "WhatsApp Bot (Lead Qualifier)",
//         price: "₪1,900",
//         description:
//           "Чат-бот в WhatsApp, который задаёт первичные вопросы клиенту и передаёт данные прямо в CRM.",
//         features: [
//           "Сценарии первичных вопросов",
//           "Квалификация лидов",
//           "Передача данных в CRM",
//           "Работает 24/7",
//           "Подходит для услуг и клиник",
//         ],
//         icon: "💬",
//       },
//       {
//         name: "CRM Setup & Pipeline",
//         price: "₪2,400",
//         description:
//           "Настройка CRM под ваш бизнес: этапы заявок, статусы, автоматические уведомления.",
//         features: [
//           "Notion / Airtable / HubSpot",
//           "Этапы и статусы заявок",
//           "Уведомления о новых лидах",
//           "Удобный интерфейс для команды",
//         ],
//         icon: "🧩",
//       },
//       {
//         name: "Automation Pack",
//         price: "₪1,600",
//         description:
//           "Автоматизация рутинных процессов: заявки, задачи, уведомления и таблицы без ручной работы.",
//         features: [
//           "Make / Zapier сценарии",
//           "Заявки → CRM → задачи",
//           "Email / WhatsApp уведомления",
//           "Экономия времени команды",
//         ],
//         icon: "⚙️",
//       },
//       {
//         name: "Booking & Calendar System",
//         price: "₪1,400",
//         description:
//           "Онлайн-запись клиентов с автоматическими подтверждениями и синхронизацией календаря.",
//         features: [
//           "Форма записи на сайте",
//           "Слоты и расписание",
//           "Авто-подтверждение в WhatsApp",
//           "Google Calendar sync",
//         ],
//         icon: "📅",
//       },
//       {
//         name: "AI Bot (FAQ / Support)",
//         price: "₪2,900",
//         description:
//           "AI-бот для ответов на частые вопросы и поддержки клиентов без участия менеджера.",
//         features: [
//           "Ответы на FAQ",
//           "Поддержка 24/7",
//           "Снижение нагрузки на команду",
//           "Интеграция с сайтом или WhatsApp",
//         ],
//         icon: "🤖",
//       },
//       {
//         name: "Monthly Maintenance",
//         price: "₪1,200 / месяц",
//         description:
//           "Техническая поддержка, обновления и контроль стабильности сайта и автоматизаций.",
//         features: [
//           "Обновления и мелкие правки",
//           "Контроль работы ботов и CRM",
//           "Резервные копии",
//           "Приоритетная поддержка",
//         ],
//         icon: "🔧",
//       },
//     ],
//   },

// faq: {
//   title: "Часто задаваемые вопросы",
//   subtitle: "Коротко и по делу — как мы работаем и что вы получаете",
//   items: [
//     {
//       question: "Как происходит оплата?",
//       answer:
//         "Оплата делится на этапы: предоплата для старта проекта и остаток после готовности сайта к запуску. Формат оплаты обсуждается индивидуально — банковский перевод или другие удобные способы."
//     },
//     {
//       question: "Сколько времени занимает разработка?",
//       answer:
//         "В среднем: Starter — до 2 недель, Growth — 3–4 недели, Premium — от 4 до 6 недель. Сроки зависят от количества страниц, языков и объёма автоматизации."
//     },
//     {
//       question: "Что входит в раунды правок?",
//       answer:
//         "Раунд правок — это список изменений, которые вы передаёте одним пакетом. Мы вносим их и показываем обновлённую версию. Количество раундов зависит от выбранного пакета."
//     },
//     {
//       question: "Смогу ли я менять контент сам?",
//       answer:
//         "Да. В пакетах Growth и Premium используется CMS — вы сможете редактировать тексты и страницы самостоятельно. Мы показываем, как это делать, и передаём документацию."
//     },
//     {
//       question: "Как работают CRM и заявки с сайта?",
//       answer:
//         "Заявки с сайта и WhatsApp автоматически передаются в CRM (Notion, Airtable, HubSpot и др.). Вы видите клиентов, статусы и историю обращений в одном месте."
//     },
//     {
//       question: "Кто оплачивает CRM, CMS и сервисы автоматизации?",
//       answer:
//         "Лицензии и подписки на CRM, CMS, чат-бот платформы, WhatsApp Business API и другие внешние сервисы оплачивает заказчик. Я помогаю с выбором, настройкой и интеграцией под ваши задачи."
//     },
//     {
//       question: "Подключаете ли вы WhatsApp и чат-ботов?",
//       answer:
//         "Да. В каждом пакете возможна интеграция WhatsApp. В Starter — простая передача заявок, в Growth и Premium — сценарии, квалификация лидов и чат-боты, включая AI по необходимости."
//     },
//     {
//       question: "Поддерживается ли многоязычность?",
//       answer:
//         "Да. В Growth и Premium многоязычность включена (обычно RU / EN / HE). В Starter её можно добавить как дополнительную опцию."
//     },
//     {
//       question: "Кто оплачивает хостинг и домен?",
//       answer:
//         "Хостинг, домен и сторонние платформы оплачиваются заказчиком напрямую. Я помогаю выбрать оптимальный вариант и полностью настраиваю инфраструктуру."
//     },
//     {
//       question: "Можно ли начать с малого и доработать позже?",
//       answer:
//         "Да. Часто клиенты начинают со Starter или Growth и затем добавляют CRM, автоматизацию или новые страницы. Сайт изначально строится с возможностью масштабирования."
//     },
//     {
//       question: "Включена ли поддержка после запуска?",
//       answer:
//         "Да. В каждый пакет входит поддержка после запуска, чтобы вы уверенно начали работу с сайтом и системой заявок."
//     },
//     {
//       question: "Что если мне понадобится нестандартная логика?",
//       answer:
//         "Если задача выходит за рамки пакета — мы заранее обсуждаем решение и стоимость. Никаких скрытых работ или неожиданных доплат."
//     }
//   ]
// }
// ,
//   cta: {
//     title: "Не уверены, какой пакет выбрать?",
//     subtitle:
//       "Запишитесь на бесплатную 30-минутную консультацию. Мы поможем определить оптимальное решение для вашего бизнеса.",
//     button: "Обсудить задачу",
//   },
// };
type TFunction = (key: string) => string;

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
  icon: string; // ✅ только string
  color: string;
}

export interface AddOn {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: string; // ✅ только string
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

    primaryCtaLabel: string;
    primaryCtaHref: string;
    primaryCtaAria: string;

    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    secondaryCtaAria: string;
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

export function buildPricingData(t: TFunction): PricingData {
  return {
    hero: {
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
      badge: t("hero.badge"),
      guarantee: t("hero.guarantee"),

      primaryCtaLabel: t("hero.primaryCta.label"),
      primaryCtaHref: t("hero.primaryCta.href"),
      primaryCtaAria: t("hero.primaryCta.aria"),

      secondaryCtaLabel: t("hero.secondaryCta.label"),
      secondaryCtaHref: t("hero.secondaryCta.href"),
      secondaryCtaAria: t("hero.secondaryCta.aria"),
    },

    packages: [
      {
        name: "Starter",
        tagline: t("packages.starter.tagline"),
        price: t("packages.starter.price"),
        period: t("packages.starter.period"),
        description: t("packages.starter.description"),
        features: [
          t("packages.starter.features.f1"),
          t("packages.starter.features.f2"),
          t("packages.starter.features.f3"),
          t("packages.starter.features.f4"),
          t("packages.starter.features.f5"),
          t("packages.starter.features.f6"),
          // t("packages.starter.features.f7"),
          t("packages.starter.features.f8"),
          t("packages.starter.features.f9"),
          t("packages.starter.features.f10"),
          t("packages.starter.features.f11"),
        ],
        ideal: t("packages.starter.ideal"),
        cta: t("packages.starter.cta"),
        icon: "🚀",
        color: "#050608",
      },
      {
        name: "Growth",
        tagline: t("packages.growth.tagline"),
        price: t("packages.growth.price"),
        period: t("packages.growth.period"),
        description: t("packages.growth.description"),
        features: [
          t("packages.growth.features.f1"),
          t("packages.growth.features.f2"),
          t("packages.growth.features.f3"),
          t("packages.growth.features.f4"),
          t("packages.growth.features.f5"),
          t("packages.growth.features.f6"),
          t("packages.growth.features.f7"),
          t("packages.growth.features.f8"),
          // t("packages.growth.features.f9"),
          t("packages.growth.features.f10"),
          t("packages.growth.features.f11"),
          t("packages.growth.features.f12"),
        ],
        ideal: t("packages.growth.ideal"),
        cta: t("packages.growth.cta"),
        highlighted: true,
        icon: "💎",
        color: "#050608",
      },
      {
        name: "Premium",
        tagline: t("packages.premium.tagline"),
        price: t("packages.premium.price"),
        period: t("packages.premium.period"),
        description: t("packages.premium.description"),
        features: [
          t("packages.premium.features.f1"),
          t("packages.premium.features.f2"),
          t("packages.premium.features.f3"),
          t("packages.premium.features.f4"),
          t("packages.premium.features.f5"),
          t("packages.premium.features.f6"),
          t("packages.premium.features.f7"),
          t("packages.premium.features.f8"),
          // t("packages.premium.features.f9"),
          t("packages.premium.features.f10"),
          t("packages.premium.features.f11"),
          t("packages.premium.features.f12"),
          t("packages.premium.features.f13"),
        ],
        ideal: t("packages.premium.ideal"),
        cta: t("packages.premium.cta"),
        icon: "👑",
        color: "#050608",
      },
    ],

    comparison: {
      title: t("comparison.title"),
      features: [
        {
          name: t("comparison.features.f1.name"),
          starter: t("comparison.features.f1.starter"),
          growth: t("comparison.features.f1.growth"),
          premium: t("comparison.features.f1.premium"),
        },
        {
          name: t("comparison.features.f2.name"),
          starter: t("comparison.features.f2.starter"),
          growth: t("comparison.features.f2.growth"),
          premium: t("comparison.features.f2.premium"),
        },
        {
          name: t("comparison.features.f3.name"),
          starter: t("comparison.features.f3.starter"),
          growth: t("comparison.features.f3.growth"),
          premium: t("comparison.features.f3.premium"),
        },
        {
          name: t("comparison.features.f4.name"),
          starter: t("comparison.features.f4.starter"),
          growth: t("comparison.features.f4.growth"),
          premium: t("comparison.features.f4.premium"),
        },
        {
          name: t("comparison.features.f5.name"),
          starter: t("comparison.features.f5.starter"),
          growth: t("comparison.features.f5.growth"),
          premium: t("comparison.features.f5.premium"),
        },
        {
          name: t("comparison.features.f6.name"),
          starter: t("comparison.features.f6.starter"),
          growth: t("comparison.features.f6.growth"),
          premium: t("comparison.features.f6.premium"),
        },
        // {
        //   name: t("comparison.features.f7.name"),
        //   starter: t("comparison.features.f7.starter"),
        //   growth: t("comparison.features.f7.growth"),
        //   premium: t("comparison.features.f7.premium"),
        // },
        {
          name: t("comparison.features.f8.name"),
          starter: t("comparison.features.f8.starter"),
          growth: t("comparison.features.f8.growth"),
          premium: t("comparison.features.f8.premium"),
        },
        {
          name: t("comparison.features.f9.name"),
          starter: false,
          growth: t("comparison.features.f9.growth"),
          premium: t("comparison.features.f9.premium"),
        },
        {
          name: t("comparison.features.f10.name"),
          starter: false,
          growth: t("comparison.features.f10.growth"),
          premium: t("comparison.features.f10.premium"),
        },
        {
          name: t("comparison.features.f11.name"),
          starter: t("comparison.features.f11.starter"),
          growth: t("comparison.features.f11.growth"),
          premium: t("comparison.features.f11.premium"),
        },
        {
          name: t("comparison.features.f12.name"),
          starter: t("comparison.features.f12.starter"),
          growth: t("comparison.features.f12.growth"),
          premium: t("comparison.features.f12.premium"),
        },
        {
          name: t("comparison.features.f13.name"),
          starter: false,
          growth: t("comparison.features.f13.growth"),
          premium: t("comparison.features.f13.premium"),
        },
      ],
    },

    addons: {
      title: t("addons.title"),
      subtitle: t("addons.subtitle"),
      items: [
        {
          name: t("addons.items.a1.name"),
          price: t("addons.items.a1.price"),
          description: t("addons.items.a1.description"),
          features: [
            t("addons.items.a1.features.f1"),
            t("addons.items.a1.features.f2"),
            t("addons.items.a1.features.f3"),
            t("addons.items.a1.features.f4"),
            t("addons.items.a1.features.f5"),
          ],
          icon: "💬",
        },
        // {
        //   name: t("addons.items.a2.name"),
        //   price: t("addons.items.a2.price"),
        //   description: t("addons.items.a2.description"),
        //   features: [
        //     t("addons.items.a2.features.f1"),
        //     t("addons.items.a2.features.f2"),
        //     t("addons.items.a2.features.f3"),
        //     t("addons.items.a2.features.f4"),
        //   ],
        //   icon: "🧩",
        // },
        // {
        //   name: t("addons.items.a3.name"),
        //   price: t("addons.items.a3.price"),
        //   description: t("addons.items.a3.description"),
        //   features: [
        //     t("addons.items.a3.features.f1"),
        //     t("addons.items.a3.features.f2"),
        //     t("addons.items.a3.features.f3"),
        //     t("addons.items.a3.features.f4"),
        //   ],
        //   icon: "⚙️",
        // },
        {
          name: t("addons.items.a4.name"),
          price: t("addons.items.a4.price"),
          description: t("addons.items.a4.description"),
          features: [
            t("addons.items.a4.features.f1"),
            t("addons.items.a4.features.f2"),
            t("addons.items.a4.features.f3"),
            t("addons.items.a4.features.f4"),
          ],
          icon: "📅",
        },
        {
          name: t("addons.items.a5.name"),
          price: t("addons.items.a5.price"),
          description: t("addons.items.a5.description"),
          features: [
            t("addons.items.a5.features.f1"),
            t("addons.items.a5.features.f2"),
            t("addons.items.a5.features.f3"),
            t("addons.items.a5.features.f4"),
          ],
          icon: "🤖",
        },
        {
          name: t("addons.items.a6.name"),
          price: t("addons.items.a6.price"),
          description: t("addons.items.a6.description"),
          features: [
            t("addons.items.a6.features.f1"),
            t("addons.items.a6.features.f2"),
            t("addons.items.a6.features.f3"),
            t("addons.items.a6.features.f4"),
          ],
          icon: "🔧",
        },
      ],
    },

    faq: {
      title: t("faq.title"),
      subtitle: t("faq.subtitle"),
      items: [
        { question: t("faq.items.q1.q"), answer: t("faq.items.q1.a") },
        { question: t("faq.items.q2.q"), answer: t("faq.items.q2.a") },
        { question: t("faq.items.q3.q"), answer: t("faq.items.q3.a") },
        { question: t("faq.items.q4.q"), answer: t("faq.items.q4.a") },
        { question: t("faq.items.q5.q"), answer: t("faq.items.q5.a") },
        { question: t("faq.items.q6.q"), answer: t("faq.items.q6.a") },
        { question: t("faq.items.q7.q"), answer: t("faq.items.q7.a") },
        { question: t("faq.items.q8.q"), answer: t("faq.items.q8.a") },
        { question: t("faq.items.q9.q"), answer: t("faq.items.q9.a") },
        { question: t("faq.items.q10.q"), answer: t("faq.items.q10.a") },
        { question: t("faq.items.q11.q"), answer: t("faq.items.q11.a") },
      ],
    },

    cta: {
      title: t("cta.title"),
      subtitle: t("cta.subtitle"),
      button: t("cta.button"),
    },
  };
}