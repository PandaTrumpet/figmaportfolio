export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  industry: string[];
  type: string[];
  link?: string;
  year: string;
  featured?: boolean;
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string[];
    images: string[];
  };
}

// export const projects: Project[] = [
//   {
//     id: 'luxe-spa',
//     title: 'Desert Luxe Wellness',
//     client: 'Премиум SPA-центр',
//     description: 'Минималистичный сайт для люксового спа-центра с онлайн-бронированием и виртуальными турами',
//     image: 'https://images.unsplash.com/photo-1649345946706-afbf86eee046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd2VsbmVzc3xlbnwxfHx8fDE3NjUyODI3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Wellness', 'Lifestyle'],
//     type: ['Website', 'E-commerce'],
//     year: '2024',
//     featured: true,
//     caseStudy: {
//       challenge: 'Спа-центр нуждался в онлайн-присутствии, которое отражало бы премиум-позиционирование и упрощало процесс бронирования услуг.',
//       solution: 'Создали минималистичный сайт с фокусом на визуальное впечатление. Интегрировали систему онлайн-бронирования, добавили 360° виртуальные туры по помещениям и галерею процедур с детальными описаниями.',
//       results: [
//         '+180% увеличение онлайн-бронирований',
//         '+65% рост среднего чека',
//         '4.5x больше времени на сайте',
//         '92% положительных отзывов о UX',
//       ],
//       images: [
//         'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200',
//         'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200',
//       ],
//     },
//   },
//   {
//     id: 'tech-saas',
//     title: 'CloudFlow Platform',
//     client: 'SaaS Стартап',
//     description: 'Лендинг для B2B SaaS платформы с интерактивными демо и анимированными инфографиками',
//     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cHxlbnwxfHx8fDE3NjUyOTg0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Technology', 'SaaS'],
//     type: ['Landing Page', 'UI/UX'],
//     year: '2024',
//     featured: true,
//     caseStudy: {
//       challenge: 'Стартап запускал инновационную платформу для автоматизации рабочих процессов, но потенциальным клиентам было сложно понять продукт без демо.',
//       solution: 'Разработали интерактивный лендинг с встроенными live-демо ключевых функций. Использовали анимированные инфографики для объяснения сложных концепций и создали калькулятор ROI для персонализации ценностного предложения.',
//       results: [
//         '+240% конверсия в trial',
//         '-58% стоимость лида',
//         '3.8x увеличение времени на странице',
//         'Вошли в топ-3 Product Hunt',
//       ],
//       images: [
//         'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
//         'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200',
//       ],
//     },
//   },
//   {
//     id: 'fashion-ecom',
//     title: 'NOOR Fashion',
//     client: 'Бутик-бренд одежды',
//     description: 'Интернет-магазин с кастомным конфигуратором и AR-примеркой',
//     image: 'https://images.unsplash.com/photo-1573879500655-98f2012dd1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmR8ZW58MXx8fHwxNzY1Mjk4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Fashion', 'Retail'],
//     type: ['E-commerce', 'UI/UX'],
//     year: '2024',
//     featured: true,
//     caseStudy: {
//       challenge: 'Бутик-бренд хотел масштабироваться онлайн, сохраняя персонализированный опыт физического магазина и снижая процент возвратов.',
//       solution: 'Создали премиум e-commerce с AR-примеркой через камеру телефона, конфигуратором персонализации (вышивка, подгонка) и консультацией со стилистом в реальном времени через чат.',
//       results: [
//         '+320% рост онлайн-продаж',
//         '-42% возвратов товаров',
//         '₪2.8M выручки за 6 месяцев',
//         '4.9/5 средняя оценка покупателей',
//       ],
//       images: [
//         'https://images.unsplash.com/photo-1558769132-cb1aea48f186?w=1200',
//         'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200',
//       ],
//     },
//   },
//   {
//     id: 'restaurant-web',
//     title: 'Sababa Kitchen',
//     client: 'Ресторан средиземноморской кухни',
//     description: 'Сайт с меню, онлайн-заказами и интеграцией доставки',
//     image: 'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjUxOTczNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Food', 'Hospitality'],
//     type: ['Website', 'E-commerce'],
//     year: '2024',
//   },
//   {
//     id: 'realestate-luxury',
//     title: 'Horizon Properties',
//     client: 'Агентство элитной недвижимости',
//     description: 'Портал с 3D-турами, картами и системой фильтрации объектов',
//     image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2NTIzOTg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Real Estate', 'Luxury'],
//     type: ['Website', 'UI/UX'],
//     year: '2024',
//   },
//   {
//     id: 'app-mobile',
//     title: 'FitTrack Pro',
//     client: 'Фитнес-приложение',
//     description: 'Редизайн мобильного приложения для трекинга тренировок',
//     image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MjIwODE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Technology', 'Health'],
//     type: ['Mobile App', 'UI/UX'],
//     year: '2024',
//   },
//   {
//     id: 'arch-portfolio',
//     title: 'Studio Arkhe',
//     client: 'Архитектурное бюро',
//     description: 'Портфолио с крупными изображениями проектов и фильтрацией',
//     image: 'https://images.unsplash.com/photo-1745441328887-694e8cd8ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBwb3J0Zm9saW98ZW58MXx8fHwxNzY1Mjk4NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Architecture', 'Design'],
//     type: ['Website', 'Portfolio'],
//     year: '2024',
//   },
//   {
//     id: 'brand-identity',
//     title: 'Essence Cosmetics',
//     client: 'Косметический бренд',
//     description: 'Полный ребрендинг с разработкой сайта и упаковки',
//     image: 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjUyNjc1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Beauty', 'Retail'],
//     type: ['Branding', 'Website'],
//     year: '2023',
//   },
//   {
//     id: 'ecommerce-modern',
//     title: 'Urban Essentials',
//     client: 'Магазин товаров для дома',
//     description: 'Современный интернет-магазин с персонализацией',
//     image: 'https://images.unsplash.com/photo-1758522484646-c8694d1784fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2V8ZW58MXx8fHwxNzY1MTk5NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Retail', 'Lifestyle'],
//     type: ['E-commerce', 'UI/UX'],
//     year: '2023',
//   },
//   {
//     id: 'web-luxury',
//     title: 'Lumière Hotels',
//     client: 'Сеть бутик-отелей',
//     description: 'Премиум-сайт с системой бронирования и виртуальными турами',
//     image: 'https://images.unsplash.com/photo-1657216328535-e981d223dee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NTI5ODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//     industry: ['Hospitality', 'Luxury'],
//     type: ['Website', 'E-commerce'],
//     year: '2023',
//   },
// ];



// export const projects: Project[] = [
//   {
//     id: "musicteacher4you",
//     title: "MusicTeacher4You",
//     client: "Платформа уроков музыки",
//     description:
//       "Маркетплейс для преподавателей и учеников: профили, слоты занятий, бронирования, чат и видеосвязь — всё в одном продукте.",
//     image:
//       "https://images.unsplash.com/photo-1521334726092-b509a19597c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     industry: ["Образование", "Сервисы"],
//     type: ["Платформа", "UI/UX"],
//     year: "2024",
//     featured: true,
//     caseStudy: {
//       challenge:
//         "Нужно было собрать понятный пользовательский сценарий: быстро найти преподавателя, увидеть доступное время, забронировать занятие и поддерживать связь — без хаоса в переписках и таблицах.",
//       solution:
//         "Спроектировали продуктовую структуру: профили, фильтры, календарь слотов, бронирования со статусами, встроенный чат и видеозвонок. Сделали фокус на мобильный UX и на «прозрачность» для обеих ролей (ученик/преподаватель).",
//       results: [
//         "Единый сценарий: поиск → бронь → коммуникация",
//         "Минимум ручной работы для преподавателя",
//         "Понятные статусы и история бронирований",
//         "Удобно для пользователей с мобильного",
//       ],
//       images: [],
//     },
//   },

//   {
//     id: "demo-clinic-tau",
//     title: "Clinic Booking Demo (CRM)",
//     client: "Клиника / запись через CRM",
//     description:
//       "Демо-система записи к врачу: выбор услуги и времени, заявки уходят в CRM, администратор видит весь поток и не теряет пациентов.",
//     image:
//       "https://images.unsplash.com/photo-1580281658628-0fddc1f2f5c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     industry: ["Медицина", "Сервисы"],
//     type: ["Веб-сервис", "Автоматизация"],
//     year: "2025",
//     featured: true,
//     caseStudy: {
//       challenge:
//         "В клиниках часто теряются заявки: звонки пропущены, сообщения в разных каналах, нет прозрачной очереди. Требовалось показать простой сценарий записи и контроль обращений через CRM.",
//       solution:
//         "Собрали демо-платформу записи: понятные шаги для пациента + отправка заявки в CRM. Продумали UX под израильский рынок: быстро, без «лишних экранов», с упором на доверие и скорость.",
//       results: [
//         "Запись без звонков и переписки",
//         "Заявки централизуются в CRM",
//         "Администратор видит статус каждого обращения",
//         "Подходит как демонстрация автоматизации",
//       ],
//       images: [],
//     },
//   },

//   {
//     id: "brandroom",
//     title: "BrandRoom",
//     client: "Онлайн-шоурум дизайнерских брендов",
//     description:
//       "Шоурум с lookbook-форматом: акцент на визуальную подачу, быстрый просмотр коллекций, заявки через форму + интеграции в мессенджер.",
//     image:
//       "https://images.unsplash.com/photo-1520975958225-7a2c4d2f4c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     industry: ["Ритейл", "Мода"],
//     type: ["Сайт", "UI/UX"],
//     year: "2023",
//     featured: true,
//     caseStudy: {
//       challenge:
//         "Нужно было показать коллекции так, чтобы они воспринимались как премиальный каталог, а запросы от покупателей/баеров собирались быстро и без потерь.",
//       solution:
//         "Сделали визуальный UX (lookbook, карусели, анимации), оптимизацию изображений, SEO и удобную отправку запросов (форма → уведомления). Итог — сайт работает как витрина и как канал заявок.",
//       results: [
//         "Визуальная подача без перегруза",
//         "Быстрый просмотр коллекций на мобильном",
//         "Заявки приходят в понятный канал",
//         "SEO-структура под коллекции и бренды",
//       ],
//       images: [],
//     },
//   },

//   {
//     id: "nina-ruban",
//     title: "Nina Ruban — Opera Singer",
//     client: "Персональный сайт артистки",
//     description:
//       "Портфолио для артиста: биография, репертуар, медиагалерея и афиша. Мультиязычность и SEO для запросов от организаторов.",
//     image:
//       "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     industry: ["Личный бренд", "Культура"],
//     type: ["Сайт", "Мультиязычность"],
//     year: "2024",
//     featured: false,
//     caseStudy: {
//       challenge:
//         "Нужно было представить артиста профессионально: быстро объяснить «кто это», показать материалы и дать организаторам понятный способ связаться.",
//       solution:
//         "Собрали структуру под доверие: краткая биография, репертуар, медиа, расписание концертов, SEO и мультиязычность. Упор на чистую подачу и быстрый доступ к ключевой информации.",
//       results: [
//         "Профессиональная витрина для организаторов",
//         "Чёткая структура: кто / что / где посмотреть / как связаться",
//         "Хорошо читается с мобильного",
//         "Готово для международной аудитории",
//       ],
//       images: [],
//     },
//   },

//   {
//     id: "nanny-services",
//     title: "Nanny.Services",
//     client: "Сервис поиска нянь",
//     description:
//       "Приложение для поиска и бронирования нянь: профили, фильтры, рейтинги, регистрация и управление бронированиями.",
//     image:
//       "https://images.unsplash.com/photo-1516627145497-ae6968895b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     industry: ["Сервисы", "Семья"],
//     type: ["Веб-приложение", "UI/UX"],
//     year: "2023",
//     featured: false,
//     caseStudy: {
//       challenge:
//         "Сценарий должен быть безопасным и понятным: найти подходящую няню по критериям, увидеть доверительные сигналы (опыт/оценки), забронировать и управлять заказом.",
//       solution:
//         "Построили UX вокруг фильтрации и карточек профилей, добавили регистрацию, управление бронированиями и хранение данных. Архитектура сделана надёжно (TypeScript + Redux).",
//       results: [
//         "Быстрый поиск по критериям",
//         "Доверие через профили и рейтинги",
//         "Управление бронированием внутри приложения",
//         "Адаптивность под мобильные устройства",
//       ],
//       images: [],
//     },
//   },

//   {
//     id: "cryptoplace",
//     title: "CryptoPlace",
//     client: "Трекинг курсов криптовалют",
//     description:
//       "Приложение для мониторинга цен: топ-валюты, динамика, поиск по тикеру и быстрый доступ к актуальным данным.",
//     image:
//       "https://images.unsplash.com/photo-1621761191319-c6fb62004040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     industry: ["Финтех", "Данные"],
//     type: ["Веб-приложение", "UI/UX"],
//     year: "2022",
//     featured: false,
//     caseStudy: {
//       challenge:
//         "Нужно было сделать интерфейс, который открывают «на 30 секунд»: быстро увидеть главное, без перегруза графиками и лишними кликами.",
//       solution:
//         "Собрали лёгкую структуру: список лидеров, динамика, поиск и обновление данных через публичные API. Упор на скорость и читабельность на мобильном.",
//       results: [
//         "Быстрый доступ к актуальным ценам",
//         "Понятный поиск по тикеру/названию",
//         "Интерфейс без перегруза",
//         "Адаптивность и производительность",
//       ],
//       images: [],
//     },
//   },

//   {
//     id: "hmproduction",
//     title: "HM Production",
//     client: "Креативная студия",
//     description:
//       "Сайт-витрина услуг: фото, видео, веб и дизайн. Короткая подача, сильная типографика и акцент на доверие через стиль и портфолио.",
//     image:
//       "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
//     industry: ["Креатив", "Услуги"],
//     type: ["Сайт", "Портфолио"],
//     year: "2024",
//     featured: true,
//     caseStudy: {
//       challenge:
//         "Нужно было упаковать услуги студии в лаконичный продуктовый сайт: чтобы посетитель быстро понял стиль, уровень и как заказать.",
//       solution:
//         "Собрали структуру с быстрым входом: что делаем, примеры, короткие тезисы, ясный CTA. Сайт работает как «визитка + портфолио», без лишней воды.",
//       results: [
//         "Чёткое позиционирование в 1–2 экрана",
//         "Портфолио как основной аргумент доверия",
//         "Лаконичный CTA без давления",
//         "Подходит для международной аудитории",
//       ],
//       images: [],
//     },
//   },
// ];


export const projects: Project[] = [
  {
    id: "clinic-booking-crm",
    title: "Clinic Booking Demo",
    client: "Клиника / медицинский сервис",
    description:
      "Онлайн-запись к врачу с отправкой заявок в CRM и контролем обращений.",
    image:
      "https://images.unsplash.com/photo-1580281658628-0fddc1f2f5c9?w=1080",
    industry: ["Медицина"],
    type: ["Бронирование", "CRM + автоматизация"],
    year: "2025",
    featured: true,
    link: "https://demo-clinic-tau.vercel.app/en",
    caseStudy: {
      challenge:
        "В клиниках заявки часто теряются: звонки, WhatsApp, формы — всё в разных местах. Требовался понятный и быстрый сценарий записи без нагрузки на персонал.",
      solution:
        "Создали демо-платформу записи: пациент выбирает услугу и время, заявка автоматически отправляется в CRM. Администратор видит все обращения и их статус в одном месте.",
      results: [
        "Запись без звонков и хаотичных сообщений",
        "Централизация заявок в CRM",
        "Прозрачный статус каждого обращения",
        "Подходит для мобильных пользователей",
      ],
      images: [],
    },
  },

  {
    id: "musicteacher4you",
    title: "MusicTeacher4You",
    client: "Платформа обучения музыке",
    description:
      "Платформа для поиска преподавателей, бронирования занятий и коммуникации.",
    image:
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?w=1080",
    industry: ["Образование"],
    type: ["Платформа", "Бронирование"],
    year: "2024",
    featured: true,
    link: "https://musicteacher4you.com/ru",
    caseStudy: {
      challenge:
        "Нужно было объединить учеников и преподавателей в одной системе: поиск, расписание, бронирование и общение — без таблиц и ручной координации.",
      solution:
        "Спроектировали продукт с ролями пользователей, фильтрами, календарём слотов, бронированием, встроенным чатом и видеосвязью. Сделали упор на понятный UX и мобильную версию.",
      results: [
        "Единый сценарий: поиск → бронь → занятие",
        "Меньше ручной работы для преподавателей",
        "Прозрачная история занятий и бронирований",
        "Удобно с телефона и планшета",
      ],
      images: [],
    },
  },

  {
    id: "hm-production",
    title: "HM Production",
    client: "Креативная студия",
    description:
      "Сайт-витрина услуг: фото, видео, веб и дизайн с фокусом на доверие.",
    image:
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?w=1080",
    industry: ["Креатив"],
    type: ["Сайт", "Портфолио"],
    year: "2024",
    featured: true,
    link: "https://hmproduction.org/",
    caseStudy: {
      challenge:
        "Нужно было показать услуги студии без перегруза: стиль, примеры работ и быстрый способ связаться — без длинных объяснений.",
      solution:
        "Собрали лаконичный сайт с сильной визуальной подачей, чёткой структурой услуг и портфолио. Фокус — на первом впечатлении и простом CTA.",
      results: [
        "Понятное позиционирование за 1–2 экрана",
        "Портфолио как основной аргумент доверия",
        "Быстрый контакт без давления",
        "Подходит для международной аудитории",
      ],
      images: [],
    },
  },

  {
    id: "brandroom",
    title: "BrandRoom",
    client: "Онлайн-шоурум брендов",
    link: "https://brandroom.ua/",
    description:
      "Онлайн-шоурум дизайнерских брендов с визуальной подачей и заявками.",
    image:
      "https://images.unsplash.com/photo-1520975958225-7a2c4d2f4c4b?w=1080",
    industry: ["Ритейл"],
    type: ["Сайт"],
    year: "2023",
    featured: false,
  },

  {
    id: "nina-ruban",
    title: "Nina Ruban — Opera Singer",
    client: "Персональный бренд",
    description:
      "Персональный сайт артиста с мультиязычностью и профессиональной подачей.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1080",
    industry: ["Личный бренд"],
    type: ["Сайт", "Портфолио"],
    year: "2024",
    featured: false,
    link: "https://www.ninaruban.com/",
  },

  {
    id: "nanny-services",
    title: "Nanny.Services",
    client: "Сервис поиска нянь",
    description:
      "Сервис поиска и бронирования нянь с профилями и управлением заказами.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1080",
    industry: ["Сервисы"],
    type: ["Веб-приложение", "Бронирование"],
    year: "2023",
    featured: false,
    link: "https://nannies-react-type-script.vercel.app/",
  },

  {
    id: "cryptoplace",
    title: "CryptoPlace",
    client: "Финансовый сервис",
    description: "Веб-приложение для быстрого мониторинга курсов криптовалют.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1080",
    industry: ["Финансы"],
    type: ["Веб-приложение"],
    year: "2022",
    featured: false,
    link: "https://crypto-price-tracking-app-react-fdzz.vercel.app/",
  },
];

export const industries = ['All', 'Technology', 'Fashion', 'Wellness', 'Food', 'Real Estate', 'Hospitality', 'Luxury'];
export const types = ['All', 'Website', 'E-commerce', 'Landing Page', 'UI/UX', 'Branding', 'Mobile App'];
