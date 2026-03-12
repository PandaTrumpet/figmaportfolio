// export interface ContactInfo {
//   icon: string;
//   label: string;
//   value: string;
//   link: string;
// }

// export interface ContactData {
//   hero: {
//     title: string;
//     subtitle: string;
//     badge: string;
//   };

//   form: {
//     title: string;
//     subtitle: string;
//     fields: {
//       name: { label: string; placeholder: string; type: string };
//       email: { label: string; placeholder: string; type: string };
//       phone: { label: string; placeholder: string; type: string };

//       package: {
//         label: string;
//         placeholder: string;
//         type: string;
//         options: string[];
//       };

//       additionalServices: {
//         label: string;
//         hint?: string;
//         type: string;
//         options: string[];
//       };

//       message: { label: string; placeholder: string; type: string };
//     };
//     button: string;
//     successMessage: string;
//   };

//   contacts: ContactInfo[];

//   office: {
//     title: string;
//     address: string;
//     city: string;
//     hours: string;
//     coordinates: {
//       lat: number;
//       lng: number;
//     };
//   };

//   cta: {
//     title: string;
//     subtitle: string;
//     stats: {
//       label: string;
//       value: string;
//     }[];
//   };
// }

// export const contactData: ContactData = {
//   hero: {
//     title: "Давайте создадим что-то великое",
//     subtitle:
//       "Готовы начать свой проект? Свяжитесь с нами, и мы ответим в течение 24 часов.",
//     badge: "Get In Touch",
//   },

//   form: {
//     title: "Отправьте заявку",
//     subtitle: "Расскажите о своем проекте, и мы подготовим предложение",
//     fields: {
//       name: {
//         label: "Ваше имя",
//         placeholder: "Иван Коэн",
//         type: "text",
//       },
//       email: {
//         label: "Email",
//         placeholder: "ivan@company.co.il",
//         type: "email",
//       },
//       phone: {
//         label: "Телефон",
//         placeholder: "+972 50 123 4567",
//         type: "tel",
//       },

//       package: {
//         label: "Выберите ваш пакет",
//         placeholder: "Starter / Growth / Premium",
//         type: "select",
//         options: ["Starter", "Growth", "Premium"],
//       },

//       additionalServices: {
//         label: "Дополнительные услуги",
//         hint: "Можно выбрать несколько (Ctrl/⌘ + клик).",
//         type: "multiselect",
//         options: [
//           "WhatsApp Bot (Lead Qualifier)",
//           "CRM Setup & Pipeline",
//           "Automation Pack",
//           "Booking & Calendar System",
//           "AI Bot (FAQ / Support)",
//           "Monthly Maintenance",
//         ],
//       },

//       message: {
//         label: "Расскажите о проекте",
//         placeholder: "Опишите ваши цели, задачи, сроки...",
//         type: "textarea",
//       },
//     },
//     button: "Отправить заявку",
//     successMessage: "Спасибо! Мы свяжемся с вами в течение 24 часов.",
//   },

//   contacts: [
//     {
//       icon: "💬",
//       label: "WhatsApp",
//       value: "+972 50 123 4567",
//       link: "https://wa.me/972501234567",
//     },
//     {
//       icon: "📞",
//       label: "Phone",
//       value: "+972 3 123 4567",
//       link: "tel:+97231234567",
//     },
//     {
//       icon: "✉️",
//       label: "Email",
//       value: "dsavontrumpet@gmail.com",
//       link: "mailto:dsavontrumpet@gmail.com",
//     },
//   ],

//   office: {
//     title: "Наш офис",
//     address: "Rothschild Blvd 42",
//     city: "Tel Aviv, Israel",
//     hours: "Вс-Чт: 9:00 - 18:00",
//     coordinates: {
//       lat: 32.0653,
//       lng: 34.7746,
//     },
//   },

//   cta: {
//     title: "Есть вопрос по сайту или автоматизации?",
//     subtitle:
//       "Напишите — коротко обсудим задачу и я подскажу, подойдёт ли вам сайт, автоматизация или WhatsApp-бот. Без обязательств.",
//     stats: [
//       { label: "Первый ответ", value: "В течение дня" },
//       { label: "Бесплатный созвон", value: "20–30 мин" },
//       { label: "Прямой контакт", value: "Лично" },
//     ],
//   },
// };

// export type ContactFormConfig = ContactData["form"];
import type { TranslationValues } from "next-intl";

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
}

export interface ContactData {
  hero: {
    title: string;
    subtitle: string;
    badge: string;
  };

  form: {
    title: string;
    subtitle: string;
    successSecondary: string;
    submitLoading?: string;
    trustLine?: string;
    fields: {
      name: { label: string; placeholder: string; type: string };
      email: { label: string; placeholder: string; type: string };
      phone: { label: string; placeholder: string; type: string };
      package: {
        label: string;
        placeholder: string;
        type: string;
        options: string[];
      };
      additionalServices: {
        label: string;
        hint?: string;
        type: string;
        options: string[];
      };
      message: { label: string; placeholder: string; type: string };
    };
    button: string;
    successMessage: string;
  };

  contacts: ContactInfo[];

  office: {
    title: string;
    panelTitle: string;
    panelSubtitle: string;
    address: string;
    city: string;
    hours: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };

  cta: {
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonHref: string;
    stats: {
      label: string;
      value: string;
    }[];
   
  
  };
}

type TFunction = (key: string, values?: TranslationValues) => string;

export const buildContactData = (t: TFunction): ContactData => ({
  hero: {
    title: t("hero.title"),
    subtitle: t("hero.subtitle"),
    badge: t("hero.badge"),
  },

  form: {
    title: t("form.title"),
    subtitle: t("form.subtitle"),
    button: t("form.button"),
    successMessage: t("form.successMessage"),
    successSecondary: t("form.successSecondary"),
    submitLoading: t("form.submitLoading"),
    trustLine: t("form.trustLine"),
    fields: {
      name: {
        label: t("form.fields.name.label"),
        placeholder: t("form.fields.name.placeholder"),
        type: "text",
      },
      email: {
        label: t("form.fields.email.label"),
        placeholder: t("form.fields.email.placeholder"),
        type: "email",
      },
      phone: {
        label: t("form.fields.phone.label"),
        placeholder: t("form.fields.phone.placeholder"),
        type: "tel",
      },
      package: {
        label: t("form.fields.package.label"),
        placeholder: t("form.fields.package.placeholder"),
        type: "select",
        options: [
          t("form.fields.package.options.starter"),
          t("form.fields.package.options.growth"),
          t("form.fields.package.options.premium"),
        ],
      },
      additionalServices: {
        label: t("form.fields.additionalServices.label"),
        hint: t("form.fields.additionalServices.hint"),
        type: "multiselect",
        options: [
          t("form.fields.additionalServices.options.whatsappBot"),
          t("form.fields.additionalServices.options.crmSetup"),
          t("form.fields.additionalServices.options.automationPack"),
          t("form.fields.additionalServices.options.bookingSystem"),
          t("form.fields.additionalServices.options.aiBot"),
          t("form.fields.additionalServices.options.maintenance"),
        ],
      },
      message: {
        label: t("form.fields.message.label"),
        placeholder: t("form.fields.message.placeholder"),
        type: "textarea",
      },
    },
  },

  contacts: [
    {
      icon: "💬",
      label: t("contacts.whatsapp.label"),
      value: t("contacts.whatsapp.value"),
      link: "https://wa.me/972557720977",
    },
    {
      icon: "📞",
      label: t("contacts.phone.label"),
      value: t("contacts.phone.value"),
      link: "tel:+972557720977",
    },
    {
      icon: "✉️",
      label: t("contacts.email.label"),
      value: "dsavontrumpet@gmail.com",
      link: "mailto:dsavontrumpet@gmail.com",
    },
  ],

  office: {
    title: t("office.title"),
    panelTitle: t("office.panelTitle"),
    panelSubtitle: t("office.panelSubtitle"),
    address: t("office.address"),
    city: t("office.city"),
    hours: t("office.hours"),
    coordinates: {
      lat: 32.0653,
      lng: 34.7746,
    },
  },

  cta: {
    title: t("cta.title"),
    subtitle: t("cta.subtitle"),
    buttonLabel: t("cta.buttonLabel"),
    buttonHref: t("cta.buttonHref"),
    stats: [
      {
        label: t("cta.stats.firstReply.label"),
        value: t("cta.stats.firstReply.value"),
      },
      {
        label: t("cta.stats.call.label"),
        value: t("cta.stats.call.value"),
      },
      {
        label: t("cta.stats.contact.label"),
        value: t("cta.stats.contact.value"),
      },
    ],
  },
});

export type ContactFormConfig = ContactData["form"];