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
    fields: {
      name: { label: string; placeholder: string; type: string };
      email: { label: string; placeholder: string; type: string };
      phone: { label: string; placeholder: string; type: string };
      company: { label: string; placeholder: string; type: string };
      budget: { 
        label: string; 
        placeholder: string; 
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
    stats: {
      label: string;
      value: string;
    }[];
  };
}

export const contactData: ContactData = {
  hero: {
    title: "Давайте создадим что-то великое",
    subtitle:
      "Готовы начать свой проект? Свяжитесь с нами, и мы ответим в течение 24 часов.",
    badge: "Get In Touch",
  },

  form: {
    title: "Отправьте заявку",
    subtitle: "Расскажите о своем проекте, и мы подготовим предложение",
    fields: {
      name: {
        label: "Ваше имя",
        placeholder: "Иван Коэн",
        type: "text",
      },
      email: {
        label: "Email",
        placeholder: "ivan@company.co.il",
        type: "email",
      },
      phone: {
        label: "Телефон",
        placeholder: "+972 50 123 4567",
        type: "tel",
      },
      company: {
        label: "Компания",
        placeholder: "Your Company Ltd.",
        type: "text",
      },
      budget: {
        label: "Бюджет проекта",
        placeholder: "Выберите диапазон",
        type: "select",
        options: [
          "До ₪25,000",
          "₪25,000 - ₪50,000",
          "₪50,000 - ₪100,000",
          "₪100,000+",
          "Еще не определился",
        ],
      },
      message: {
        label: "Расскажите о проекте",
        placeholder: "Опишите ваши цели, задачи, сроки...",
        type: "textarea",
      },
    },
    button: "Отправить заявку",
    successMessage: "Спасибо! Мы свяжемся с вами в течение 24 часов.",
  },

  contacts: [
    {
      icon: "💬",
      label: "WhatsApp",
      value: "+972 50 123 4567",
      link: "https://wa.me/972501234567",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+972 3 123 4567",
      link: "tel:+97231234567",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "hello@studio.co.il",
      link: "mailto:hello@studio.co.il",
    },
  ],

  office: {
    title: "Наш офис",
    address: "Rothschild Blvd 42",
    city: "Tel Aviv, Israel",
    hours: "Вс-Чт: 9:00 - 18:00",
    coordinates: {
      lat: 32.0653,
      lng: 34.7746,
    },
  },

  cta: {
    title: "Есть вопрос по сайту или автоматизации?",
    subtitle:
      "Напишите — коротко обсудим задачу и я подскажу, подойдёт ли вам сайт, автоматизация или WhatsApp-бот. Без обязательств.",
    stats: [
      { label: "Первый ответ", value: "В течение дня" },
      { label: "Бесплатный созвон", value: "20–30 мин" },
      { label: "Прямой контакт", value: "Лично" },
    ],
  },
};
