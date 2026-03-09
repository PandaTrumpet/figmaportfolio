// import { StaticImageData } from "next/image";
// import foto1 from "../../public/portfolio/clinic_mobile.png"
// import fotoClinic from "../../public/portfolio/clinic.png"
// import foto2 from "../../public/portfolio/law_mobile.png"
// import fotoLaw from "../../public/portfolio/law.png"
// import foto3 from "../../public/portfolio/teacher_mobile.png";
// import foto4 from "../../public/portfolio/hm_mobile.png";
// import fotoTeacher from "../../public/portfolio/teacher.png"
// import brand from "../../public/portfolio/brand.png"
//   import nina from "../../public/portfolio/nina.png"
// interface Project {
//   id: string;
//   title: string;
//   client: string;
//   description: string;
//   imageLittle: string | StaticImageData;
//   imageBig?: string | StaticImageData;
//   industry: string[];
//   type: string[];
//   link?: string;
//   year: string;
//   featured?: boolean;
//   caseStudy?: {
//     challenge: string;
//     solution: string;
//     results: string[];
//     images: string[];
//   };
// }

// export const projects: Project[] = [
//   {
//     id: "clinic-booking-crm",
//     title: "Clinic Booking Demo",
//     client: "Клиника / медицинский сервис",
//     description:
//       "Онлайн-запись к врачу с отправкой заявок в CRM и контролем обращений.",
//     imageLittle: foto1,
//     imageBig: fotoClinic,
//     industry: ["Медицина"],
//     type: ["Бронирование", "CRM + автоматизация"],
//     year: "2025",
//     featured: true,
//     link: "https://demo-clinic-tau.vercel.app/en",
//     caseStudy: {
//       challenge:
//         "В клиниках заявки часто теряются: звонки, WhatsApp, формы — всё в разных местах. Требовался понятный и быстрый сценарий записи без нагрузки на персонал.",
//       solution:
//         "Создали демо-платформу записи: пациент выбирает услугу и время, заявка автоматически отправляется в CRM. Администратор видит все обращения и их статус в одном месте.",
//       results: [
//         "Запись без звонков и хаотичных сообщений",
//         "Централизация заявок в CRM",
//         "Прозрачный статус каждого обращения",
//         "Подходит для мобильных пользователей",
//       ],
//       images: [],
//     },
//   },
//   {
//     id: "legal-real-estate-tel-aviv",
//     title: "Real Estate Legal Services Demo",
//     client: "Юридическая фирма недвижимости",
//     description:
//       "Премиальная landing-page для юридического сопровождения сделок с недвижимостью в Израиле.",
//     imageLittle: foto2,
//     imageBig: fotoLaw,
//     industry: ["Юридические услуги", "Недвижимость"],
//     type: ["Landing Page", "Консультации", "Лидогенерация"],
//     year: "2026",
//     featured: true,
//     link: "https://law-firma-demo.vercel.app/en",
//     caseStudy: {
//       challenge:
//         "Покупатели недвижимости, особенно иностранные инвесторы, часто не понимают юридические риски сделки. Юридическим фирмам требуется понятный цифровой канал для объяснения рисков, демонстрации экспертности и получения заявок от клиентов с высоким бюджетом.",
//       solution:
//         "Разработали премиальный лендинг для юридической фирмы, специализирующейся на сопровождении сделок с недвижимостью в Израиле. Сайт объясняет ключевые риски, демонстрирует юридическую экспертизу и предлагает консультацию. Реализованы мультиязычность (EN / HE / RU), калькулятор стоимости юридических услуг и удобная форма консультации.",
//       results: [
//         "Понятная презентация юридических рисков для инвесторов",
//         "Фокус на высокобюджетных сделках с недвижимостью",
//         "Мультиязычный интерфейс для иностранных клиентов",
//         "Оптимизация для лидогенерации и консультаций",
//       ],
//       images: [],
//     },
//   },
//   {
//     id: "musicteacher4you",
//     title: "MusicTeacher4You",
//     client: "Платформа обучения музыке",
//     description:
//       "Платформа для поиска преподавателей, бронирования занятий и коммуникации.",
//     imageLittle: foto3,
//     imageBig: fotoTeacher,
//     industry: ["Образование"],
//     type: ["Платформа", "Бронирование"],
//     year: "2024",
//     featured: true,
//     link: "https://musicteacher4you.com/ru",
//     caseStudy: {
//       challenge:
//         "Нужно было объединить учеников и преподавателей в одной системе: поиск, расписание, бронирование и общение — без таблиц и ручной координации.",
//       solution:
//         "Спроектировали продукт с ролями пользователей, фильтрами, календарём слотов, бронированием, встроенным чатом и видеосвязью. Сделали упор на понятный UX и мобильную версию.",
//       results: [
//         "Единый сценарий: поиск → бронь → занятие",
//         "Меньше ручной работы для преподавателей",
//         "Прозрачная история занятий и бронирований",
//         "Удобно с телефона и планшета",
//       ],
//       images: [],
//     },
//   },

//   {
//     id: "hm-production",
//     title: "HM Production",
//     client: "Креативная студия",
//     description:
//       "Сайт-витрина услуг: фото, видео, веб и дизайн с фокусом на доверие.",
//     imageLittle: foto4,
//     industry: ["Креатив"],
//     type: ["Сайт", "Портфолио"],
//     year: "2024",
//     featured: true,
//     link: "https://hmproduction.org/",
//     caseStudy: {
//       challenge:
//         "Нужно было показать услуги студии без перегруза: стиль, примеры работ и быстрый способ связаться — без длинных объяснений.",
//       solution:
//         "Собрали лаконичный сайт с сильной визуальной подачей, чёткой структурой услуг и портфолио. Фокус — на первом впечатлении и простом CTA.",
//       results: [
//         "Понятное позиционирование за 1–2 экрана",
//         "Портфолио как основной аргумент доверия",
//         "Быстрый контакт без давления",
//         "Подходит для международной аудитории",
//       ],
//       images: [],
//     },
//   },

//   {
//     id: "brandroom",
//     title: "BrandRoom",
//     client: "Онлайн-шоурум брендов",
//     link: "https://brandroom.ua/",
//     description:
//       "Онлайн-шоурум дизайнерских брендов с визуальной подачей и заявками.",
//     imageLittle: brand,
//     industry: ["Ритейл"],
//     type: ["Сайт"],
//     year: "2023",
//     featured: false,
//   },

//   {
//     id: "nina-ruban",
//     title: "Nina Ruban — Opera Singer",
//     client: "Персональный бренд",
//     description:
//       "Персональный сайт артиста с мультиязычностью и профессиональной подачей.",
//     imageLittle: nina,
//     industry: ["Личный бренд"],
//     type: ["Сайт", "Портфолио"],
//     year: "2024",
//     featured: false,
//     link: "https://www.ninaruban.com/",
//   },

//   {
//     id: "nanny-services",
//     title: "Nanny.Services",
//     client: "Сервис поиска нянь",
//     description:
//       "Сервис поиска и бронирования нянь с профилями и управлением заказами.",
//     imageLittle:
//       "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1080",
//     industry: ["Сервисы"],
//     type: ["Веб-приложение", "Бронирование"],
//     year: "2023",
//     featured: false,
//     link: "https://nannies-react-type-script.vercel.app/",
//   },

//   {
//     id: "cryptoplace",
//     title: "CryptoPlace",
//     client: "Финансовый сервис",
//     description: "Веб-приложение для быстрого мониторинга курсов криптовалют.",
//     imageLittle:
//       "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1080",
//     industry: ["Финансы"],
//     type: ["Веб-приложение"],
//     year: "2022",
//     featured: false,
//     link: "https://crypto-price-tracking-app-react-fdzz.vercel.app/",
//   },
// ];

// export const industries = ['All', 'Technology', 'Fashion', 'Wellness', 'Food', 'Real Estate', 'Hospitality', 'Luxury'];
// export const types = ['All', 'Website', 'E-commerce', 'Landing Page', 'UI/UX', 'Branding', 'Mobile App'];
import { StaticImageData } from "next/image";
import { TranslationValues } from "next-intl";

import foto1 from "../../public/portfolio/clinic_mobile.png";
import fotoClinic from "../../public/portfolio/clinic.png";
import foto2 from "../../public/portfolio/law_mobile.png";
import fotoLaw from "../../public/portfolio/law.png";
import foto3 from "../../public/portfolio/teacher_mobile.png";
import foto4 from "../../public/portfolio/hm_mobile.png";
import fotoTeacher from "../../public/portfolio/teacher.png";
import brand from "../../public/portfolio/brand.png";
import nina from "../../public/portfolio/nina.png";

type TFunction = (key: string, values?: TranslationValues) => string;

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  imageLittle: string | StaticImageData;
  imageBig?: string | StaticImageData;
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

export function buildPortfolioData(t: TFunction) {
  const projects: Project[] = [
    {
      id: "clinic-booking-crm",
      title: t("portfolioData.projects.clinic.title"),
      client: t("portfolioData.projects.clinic.client"),
      description: t("portfolioData.projects.clinic.description"),
      imageLittle: foto1,
      imageBig: fotoClinic,
      industry: [t("portfolioData.taxonomy.industries.medicine")],
      type: [
        t("portfolioData.taxonomy.types.booking"),
        t("portfolioData.taxonomy.types.crmAutomation"),
      ],
      year: "2025",
      featured: true,
      link: "https://demo-clinic-tau.vercel.app/en",
      caseStudy: {
        challenge: t("portfolioData.projects.clinic.caseStudy.challenge"),
        solution: t("portfolioData.projects.clinic.caseStudy.solution"),
        results: [
          t("portfolioData.projects.clinic.caseStudy.results.0"),
          t("portfolioData.projects.clinic.caseStudy.results.1"),
          t("portfolioData.projects.clinic.caseStudy.results.2"),
          t("portfolioData.projects.clinic.caseStudy.results.3"),
        ],
        images: [],
      },
    },
    {
      id: "legal-real-estate-tel-aviv",
      title: t("portfolioData.projects.legal.title"),
      client: t("portfolioData.projects.legal.client"),
      description: t("portfolioData.projects.legal.description"),
      imageLittle: foto2,
      imageBig: fotoLaw,
      industry: [
        t("portfolioData.taxonomy.industries.legal"),
        t("portfolioData.taxonomy.industries.realEstate"),
      ],
      type: [
        t("portfolioData.taxonomy.types.landingPage"),
        t("portfolioData.taxonomy.types.consulting"),
        t("portfolioData.taxonomy.types.leadGeneration"),
      ],
      year: "2026",
      featured: true,
      link: "https://law-firma-demo.vercel.app/en",
      caseStudy: {
        challenge: t("portfolioData.projects.legal.caseStudy.challenge"),
        solution: t("portfolioData.projects.legal.caseStudy.solution"),
        results: [
          t("portfolioData.projects.legal.caseStudy.results.0"),
          t("portfolioData.projects.legal.caseStudy.results.1"),
          t("portfolioData.projects.legal.caseStudy.results.2"),
          t("portfolioData.projects.legal.caseStudy.results.3"),
        ],
        images: [],
      },
    },
    {
      id: "musicteacher4you",
      title: t("portfolioData.projects.musicteacher.title"),
      client: t("portfolioData.projects.musicteacher.client"),
      description: t("portfolioData.projects.musicteacher.description"),
      imageLittle: foto3,
      imageBig: fotoTeacher,
      industry: [t("portfolioData.taxonomy.industries.education")],
      type: [
        t("portfolioData.taxonomy.types.platform"),
        t("portfolioData.taxonomy.types.booking"),
      ],
      year: "2024",
      featured: true,
      link: "https://musicteacher4you.com/ru",
      caseStudy: {
        challenge: t("portfolioData.projects.musicteacher.caseStudy.challenge"),
        solution: t("portfolioData.projects.musicteacher.caseStudy.solution"),
        results: [
          t("portfolioData.projects.musicteacher.caseStudy.results.0"),
          t("portfolioData.projects.musicteacher.caseStudy.results.1"),
          t("portfolioData.projects.musicteacher.caseStudy.results.2"),
          t("portfolioData.projects.musicteacher.caseStudy.results.3"),
        ],
        images: [],
      },
    },
    {
      id: "hm-production",
      title: t("portfolioData.projects.hm.title"),
      client: t("portfolioData.projects.hm.client"),
      description: t("portfolioData.projects.hm.description"),
      imageLittle: foto4,
      industry: [t("portfolioData.taxonomy.industries.creative")],
      type: [
        t("portfolioData.taxonomy.types.website"),
        t("portfolioData.taxonomy.types.portfolio"),
      ],
      year: "2024",
      featured: true,
      link: "https://hmproduction.org/",
      caseStudy: {
        challenge: t("portfolioData.projects.hm.caseStudy.challenge"),
        solution: t("portfolioData.projects.hm.caseStudy.solution"),
        results: [
          t("portfolioData.projects.hm.caseStudy.results.0"),
          t("portfolioData.projects.hm.caseStudy.results.1"),
          t("portfolioData.projects.hm.caseStudy.results.2"),
          t("portfolioData.projects.hm.caseStudy.results.3"),
        ],
        images: [],
      },
    },
    {
      id: "brandroom",
      title: t("portfolioData.projects.brandroom.title"),
      client: t("portfolioData.projects.brandroom.client"),
      link: "https://brandroom.ua/",
      description: t("portfolioData.projects.brandroom.description"),
      imageLittle: brand,
      industry: [t("portfolioData.taxonomy.industries.retail")],
      type: [t("portfolioData.taxonomy.types.website")],
      year: "2023",
      featured: false,
    },
    {
      id: "nina-ruban",
      title: t("portfolioData.projects.nina.title"),
      client: t("portfolioData.projects.nina.client"),
      description: t("portfolioData.projects.nina.description"),
      imageLittle: nina,
      industry: [t("portfolioData.taxonomy.industries.personalBrand")],
      type: [
        t("portfolioData.taxonomy.types.website"),
        t("portfolioData.taxonomy.types.portfolio"),
      ],
      year: "2024",
      featured: false,
      link: "https://www.ninaruban.com/",
    },
    {
      id: "nanny-services",
      title: t("portfolioData.projects.nanny.title"),
      client: t("portfolioData.projects.nanny.client"),
      description: t("portfolioData.projects.nanny.description"),
      imageLittle:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1080",
      industry: [t("portfolioData.taxonomy.industries.services")],
      type: [
        t("portfolioData.taxonomy.types.webApp"),
        t("portfolioData.taxonomy.types.booking"),
      ],
      year: "2023",
      featured: false,
      link: "https://nannies-react-type-script.vercel.app/",
    },
    {
      id: "cryptoplace",
      title: t("portfolioData.projects.cryptoplace.title"),
      client: t("portfolioData.projects.cryptoplace.client"),
      description: t("portfolioData.projects.cryptoplace.description"),
      imageLittle:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1080",
      industry: [t("portfolioData.taxonomy.industries.finance")],
      type: [t("portfolioData.taxonomy.types.webApp")],
      year: "2022",
      featured: false,
      link: "https://crypto-price-tracking-app-react-fdzz.vercel.app/",
    },
  ];

  const industries = [
    t("portfolioData.filters.all"),
    t("portfolioData.taxonomy.industries.medicine"),
    t("portfolioData.taxonomy.industries.legal"),
    t("portfolioData.taxonomy.industries.realEstate"),
    t("portfolioData.taxonomy.industries.education"),
    t("portfolioData.taxonomy.industries.creative"),
    t("portfolioData.taxonomy.industries.retail"),
    t("portfolioData.taxonomy.industries.personalBrand"),
    t("portfolioData.taxonomy.industries.services"),
    t("portfolioData.taxonomy.industries.finance"),
  ];

  const types = [
    t("portfolioData.filters.all"),
    t("portfolioData.taxonomy.types.website"),
    t("portfolioData.taxonomy.types.landingPage"),
    t("portfolioData.taxonomy.types.platform"),
    t("portfolioData.taxonomy.types.booking"),
    t("portfolioData.taxonomy.types.crmAutomation"),
    t("portfolioData.taxonomy.types.consulting"),
    t("portfolioData.taxonomy.types.leadGeneration"),
    t("portfolioData.taxonomy.types.portfolio"),
    t("portfolioData.taxonomy.types.webApp"),
  ];

  return {
    projects,
    industries,
    types,
  };
}