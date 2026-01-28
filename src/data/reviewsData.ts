export interface ClientStory {
  name: string;
  role: string;
  company: string;
  avatar: string;
  story: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  quote: string;
  rating: number;
  projectType: string;
  industry: string;
}

export interface VideoTestimonial {
  name: string;
  role: string;
  company: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  quote: string;
  avatar: string;
}

export interface Review {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  projectType: string;
}
import type { LucideIcon } from "lucide-react";
export interface ReviewsData {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    stats: {
      label: string;
      value: string;
      icon: LucideIcon;
    }[];
  };

  clientStories: ClientStory[];

  videoTestimonials: VideoTestimonial[];

  reviews: Review[];

  platforms: {
    name: string;
    rating: string;
    reviewCount: string;
    logo: string;
  }[];

  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}
import { Target, Route, Zap, Eye } from "lucide-react";
export const reviewsData: ReviewsData = {
  hero: {
    title: "Как мы работаем с бизнесом",
    subtitle:
      "Здесь мы показываем не громкие обещания, а подход, процесс и принципы, по которым запускаем сайты и автоматизацию для малого бизнеса.",
    badge: "Client Feedback & Process",
    stats: [
      { label: "Фокус", value: "Результат", icon: Target },
      { label: "Подход", value: "Пошагово", icon: Route },
      { label: "Запуск", value: "Без лишней сложности", icon: Zap },
      { label: "Работа", value: "Прозрачно", icon: Eye },
    ],
  },

  // clientStories: [
  //   {
  //     name: "Яэль Коэн",
  //     role: "CEO & Founder",
  //     company: "GreenTech Israel",
  //     avatar:
  //       "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTIyOTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  //     story:
  //       "Мы искали агентство, которое понимает технологический стартап и может создать сайт, отражающий нашу инновационность. После месяцев поисков нашли STUDIO.",
  //     challenge:
  //       "Старый сайт не конвертировал посетителей. Bounce rate был 78%, среднее время на сайте — 20 секунд. Инвесторы жаловались, что сайт не отражает масштаб компании.",
  //     solution:
  //       "STUDIO разработали премиум веб-приложение с 3D анимациями, интерактивными графиками и personalized UX. Интеграция с CRM и email automation. Полная редизайн brand identity.",
  //     results: [
  //       { metric: "Конверсия лидов", value: "+340%" },
  //       { metric: "Время на сайте", value: "+520%" },
  //       { metric: "Bounce rate", value: "-62%" },
  //       { metric: "Инвестиции (Series A)", value: "$2.5M" },
  //     ],
  //     quote:
  //       "STUDIO не просто создали сайт — они создали инструмент, который помог нам закрыть Series A. Каждый investor meeting теперь начинается с восхищения нашим сайтом.",
  //     rating: 5,
  //     projectType: "Премиум веб-приложение",
  //     industry: "GreenTech",
  //   },
  //   {
  //     name: "Давид Леви",
  //     role: "Marketing Director",
  //     company: "TLV Fashion House",
  //     avatar:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  //     story:
  //       "Фэшн-бренд с 15-летней историей в офлайне. Хотели зайти в онлайн, но боялись потерять премиум-позиционирование.",
  //     challenge:
  //       'Как перенести luxury experience в digital? Конкуренты с дешевыми шаблонными сайтами размывали рынок. Нужен был e-commerce, который кричит "премиум".',
  //     solution:
  //       "STUDIO создали brutalist e-commerce с cinematic product pages, плавными анимациями и custom checkout. Интеграция с inventory management и персональным styling AI.",
  //     results: [
  //       { metric: "Онлайн продажи (первый квартал)", value: "₪890K" },
  //       { metric: "Average order value", value: "+180%" },
  //       { metric: "Customer retention", value: "67%" },
  //       { metric: "Social media engagement", value: "+420%" },
  //     ],
  //     quote:
  //       "Сайт превзошёл наш флагманский магазин на Dizengoff. Клиенты говорят, что покупать онлайн даже приятнее. This is the future of fashion retail.",
  //     rating: 5,
  //     projectType: "E-commerce платформа",
  //     industry: "Fashion & Retail",
  //   },
  //   {
  //     name: "Михаэль Розенберг",
  //     role: "Co-Founder",
  //     company: "HealthTech Solutions",
  //     avatar:
  //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  //     story:
  //       "Медицинский стартап с революционной технологией, но никто не понимал, что мы делаем.",
  //     challenge:
  //       "Объяснить сложную медицинскую технологию простым языком. Compliance требования. Нужна была доверительность для B2B клиентов (больницы, клиники).",
  //     solution:
  //       "STUDIO разработали образовательный сайт с интерактивными демо, видео-анимациями процессов и case studies. Multilingual support (Hebrew, English, Arabic). HIPAA-compliant формы.",
  //     results: [
  //       { metric: "B2B лиды (первые 3 месяца)", value: "47" },
  //       { metric: "Контракты закрыты", value: "12" },
  //       { metric: "Revenue from website", value: "₪1.2M" },
  //       { metric: "Media mentions", value: "18" },
  //     ],
  //     quote:
  //       "До STUDIO мы тратили часы, объясняя нашу технологию на встречах. Теперь мы просто отправляем ссылку на сайт. Половина клиентов приходит уже готовыми подписать контракт.",
  //     rating: 5,
  //     projectType: "B2B платформа",
  //     industry: "HealthTech",
  //   },
  // ],
  clientStories: [
    {
      name: "Яэль Коэн",
      role: "Владелец бизнеса",
      company: "GreenTech Israel",
      avatar:
        "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      story:
        "Мы небольшой технологический бизнес и долго откладывали обновление сайта. Старый сайт был сделан много лет назад и перестал помогать в продажах.",
      challenge:
        "Сайт выглядел устаревшим, не объяснял, чем мы занимаемся, и не приводил заявок. Большинство клиентов писали напрямую или приходили по рекомендациям.",
      solution:
        "Мы получили понятный сайт с чёткой структурой, акцентом на услугах и простой связью через WhatsApp. Процесс был спокойным и без лишней сложности.",
      results: [
        { metric: "Заявки с сайта", value: "стали регулярными" },
        { metric: "Время ответа клиентам", value: "сократилось" },
        { metric: "Понимание услуг", value: "стало проще" },
        { metric: "Использование сайта", value: "в ежедневной работе" },
      ],
      quote:
        "Сайт наконец-то стал рабочим инструментом, а не просто визиткой. Нам стало проще объяснять, чем мы занимаемся, и принимать обращения.",
      rating: 5,
      projectType: "Корпоративный сайт",
      industry: "Technology",
    },

    {
      name: "Давид Леви",
      role: "Управляющий",
      company: "TLV Fashion House",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      story:
        "У нас офлайн-бизнес и постоянные клиенты, но мы понимали, что без нормального сайта теряем новые заказы.",
      challenge:
        "Хотелось сайт, который выглядит аккуратно и современно, но без перегруженного дизайна и сложных систем.",
      solution:
        "Сайт сделали с фокусом на коллекции, примеры работ и быстрый контакт через WhatsApp. Без лишних функций, но с понятной логикой.",
      results: [
        { metric: "Запросы от новых клиентов", value: "появились" },
        { metric: "Онлайн-контакт", value: "стал удобнее" },
        { metric: "Доверие к бренду", value: "выросло" },
        { metric: "Вовлечённость", value: "стала выше" },
      ],
      quote:
        "Нам не обещали чудес — просто сделали аккуратный сайт, который действительно помогает в работе.",
      rating: 5,
      projectType: "Сайт-каталог",
      industry: "Fashion & Retail",
    },

    {
      name: "Михаэль Розенберг",
      role: "Сооснователь",
      company: "HealthTech Solutions",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      story:
        "Мы работаем в медицинской сфере и для нас особенно важно доверие и понятное объяснение услуг.",
      challenge:
        "Сложно объяснить технические и медицинские процессы простым языком. Клиенты часто задавали одни и те же вопросы.",
      solution:
        "Сайт помог структурировать информацию, показать процесс работы и собрать основные вопросы в одном месте. Также добавили удобную форму связи.",
      results: [
        { metric: "Первичные обращения", value: "стали качественнее" },
        { metric: "Количество вопросов", value: "уменьшилось" },
        { metric: "Подготовка клиентов", value: "стала лучше" },
        { metric: "Использование сайта", value: "в продажах" },
      ],
      quote:
        "Теперь сайт действительно помогает в переговорах. Клиенты приходят более подготовленными.",
      rating: 5,
      projectType: "Информационный сайт",
      industry: "Healthcare",
    },
  ],

  videoTestimonials: [
    {
      name: "Сара Авраам",
      role: "Founder",
      company: "Bloom Cosmetics",
      thumbnail:
        "https://images.unsplash.com/photo-1618371441505-be18023fbb98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHJlY29yZGluZ3xlbnwxfHx8fDE3NjUzMDA1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#",
      duration: "2:15",
      quote: "ROI был виден уже в первый месяц. Продажи выросли на 300%.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    },
    {
      name: "Арье Коэн",
      role: "CEO",
      company: "TechFlow",
      thumbnail:
        "https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc2NTMwMDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#",
      duration: "1:45",
      quote:
        "Лучший веб-партнёр, с которым мы работали. Превзошли все ожидания.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Лиор Дахан",
      role: "Marketing Manager",
      company: "FoodHub",
      thumbnail:
        "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNsaWVudCUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc2NTIwODc4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      videoUrl: "#",
      duration: "3:20",
      quote: "Сайт работает как полноценный sales manager 24/7. Невероятно.",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
  ],

  reviews: [
    {
      name: "Ронит Шапиро",
      role: "Product Manager",
      company: "DataViz Pro",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      rating: 5,
      text: "Работали с тремя агентствами до STUDIO. Это первый раз, когда проект был запущен в срок, в рамках бюджета и с результатом, который превзошёл expectations. Команда невероятно профессиональна.",
      date: "2 недели назад",
      projectType: "SaaS Landing",
    },
    {
      name: "Эйтан Барак",
      role: "Founder",
      company: "EduTech Israel",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400",
      rating: 5,
      text: "Сайт получил Awwwards Site of the Day в первую неделю после запуска! Конверсия с organic traffic выросла на 400%. Это инвестиция, которая окупилась за 2 месяца.",
      date: "1 месяц назад",
      projectType: "Платформа образования",
    },
    {
      name: "Талия Гольдман",
      role: "CMO",
      company: "Luxury Homes TLV",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 5,
      text: "Премиум-уровень во всём: от консультации до post-launch support. Наши клиенты (high-net-worth individuals) в восторге от сайта. Lead quality улучшился драматически.",
      date: "3 недели назад",
      projectType: "Real Estate Portal",
    },
    {
      name: "Омер Леви",
      role: "CEO",
      company: "FitLife",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      text: "Migrated от WordPress к custom React app. Performance улучшился с 45 Lighthouse score до 98! SEO rankings взлетели. Сайт теперь наше главное конкурентное преимущество.",
      date: "2 месяца назад",
      projectType: "Фитнес платформа",
    },
    {
      name: "Майя Азулай",
      role: "Co-Founder",
      company: "ArtSpace Gallery",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
      rating: 5,
      text: "Работа с STUDIO — это как работа с художником, который понимает код. Сайт получился произведением искусства. Онлайн продажи art теперь составляют 60% revenue.",
      date: "1 месяц назад",
      projectType: "Art Gallery E-commerce",
    },
    {
      name: "Нетанэль Коэн",
      role: "Operations Director",
      company: "LogiTech Solutions",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      rating: 5,
      text: "Запуск был безупречным. Zero downtime, все интеграции работают идеально. Обучение команды было comprehensive. Support после запуска — на высоте. Highly recommended.",
      date: "6 недель назад",
      projectType: "B2B Portal",
    },
    {
      name: "Шани Левин",
      role: "Marketing Lead",
      company: "BeautyBar",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      rating: 5,
      text: "E-commerce на стероидах! Custom features, которые мы даже не просили, но которые оказались game-changers. Conversion rate вырос с 1.2% до 4.8%. Это безумие!",
      date: "3 недели назад",
      projectType: "Beauty E-commerce",
    },
    {
      name: "Юваль Бергер",
      role: "Founder",
      company: "StartupHub",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      rating: 5,
      text: "Отличное соотношение цена-качество. За Growth package получили Premium качество. Сайт привлёк внимание investors и помог закрыть раунд финансирования. Worth every shekel.",
      date: "5 недель назад",
      projectType: "Startup Platform",
    },
  ],

  platforms: [
    {
      name: "Google Reviews",
      rating: "4.9",
      reviewCount: "87",
      logo: "🔍",
    },
    {
      name: "Clutch.co",
      rating: "5.0",
      reviewCount: "34",
      logo: "💼",
    },
    {
      name: "Awwwards",
      rating: "9.2",
      reviewCount: "12",
      logo: "🏆",
    },
    {
      name: "CSS Awards",
      rating: "9.5",
      reviewCount: "8",
      logo: "🎨",
    },
  ],

  cta: {
    title: "Обсудим ваш проект",
    subtitle:
      "Покажем, как можно запустить сайт с WhatsApp и автоматизацией без лишней сложности и переплат.",
    button: "Обсудить проект",
  },
};
