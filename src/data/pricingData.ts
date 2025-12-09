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
  icon: string;
  color: string;
}

export interface AddOn {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: string;
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
    title: 'Прозрачное ценообразование',
    subtitle: 'Никаких скрытых платежей. Выберите пакет, который соответствует вашим целям и бюджету.',
    badge: 'Pricing',
    guarantee: '30 дней гарантии возврата средств',
  },
  
  packages: [
    {
      name: 'Starter',
      tagline: 'Для малого бизнеса',
      price: '₪18,000',
      period: 'единоразово',
      description: 'Идеально для запуска первого сайта или лендинга. Всё необходимое для старта вашего digital-присутствия.',
      features: [
        'До 5 страниц',
        'Адаптивный дизайн',
        'Базовые анимации',
        'Контактная форма',
        'Google Analytics setup',
        'SEO-оптимизация',
        '2 раунда правок',
        '30 дней поддержки',
        'Исходный код',
        'Документация',
      ],
      ideal: 'Стартапы, фрилансеры, малый бизнес',
      cta: 'Выбрать Starter',
      icon: '🚀',
      color: '#050608',
    },
    {
      name: 'Growth',
      tagline: 'Самый популярный',
      price: '₪42,000',
      period: 'единоразово',
      description: 'Для бизнеса, готового к росту. Расширенный функционал, премиум дизайн и интеграции для увеличения конверсии.',
      features: [
        'До 15 страниц',
        'Премиум UI/UX дизайн',
        'Продвинутые анимации (Motion)',
        'CMS интеграция (WordPress/Webflow)',
        'Блог система',
        'E-commerce базовый (до 50 товаров)',
        'Email automation setup',
        'Расширенная аналитика',
        'A/B тестирование setup',
        'Performance optimization (90+ Lighthouse)',
        '5 раундов правок',
        '60 дней поддержки',
        'Исходный код + документация',
        'Обучение команды (2 часа)',
      ],
      ideal: 'Растущий бизнес, e-commerce, профессиональные услуги',
      cta: 'Выбрать Growth',
      highlighted: true,
      icon: '💎',
      color: '#050608',
    },
    {
      name: 'Premium',
      tagline: 'Максимальный результат',
      price: '₪85,000',
      period: 'единоразово',
      description: 'Полный пакет для амбициозных проектов. Unlimited возможности, белая перчатка сервис, 3D эффекты и голографический UI.',
      features: [
        'Unlimited страниц',
        '3D дизайн и голографические эффекты',
        'Custom анимации и микроинтеракции',
        'Headless CMS (Strapi/Contentful)',
        'Полноценный e-commerce (unlimited)',
        'Многоязычность',
        'API интеграции (CRM, ERP)',
        'Custom admin panel',
        'Advanced SEO strategy',
        'Conversion Rate Optimization',
        'User behavior analytics (Hotjar)',
        'Lighthouse 95+ гарантия',
        'Unlimited правок',
        '90 дней premium поддержки',
        'Выделенный менеджер проекта',
        'Приоритетная поддержка 24/7',
        'Обучение команды (5 часов)',
        'Quarterly performance reports (3 месяца)',
      ],
      ideal: 'Enterprise, крупные бренды, сложные проекты',
      cta: 'Выбрать Premium',
      icon: '👑',
      color: '#050608',
    },
  ],
  
  comparison: {
    title: 'Сравнение пакетов',
    features: [
      { name: 'Количество страниц', starter: 'До 5', growth: 'До 15', premium: 'Unlimited' },
      { name: 'Дизайн уровень', starter: 'Standard', growth: 'Premium', premium: '3D & Holographic' },
      { name: 'Анимации', starter: 'Базовые', growth: 'Motion/React', premium: 'Custom + 3D' },
      { name: 'CMS', starter: false, growth: true, premium: 'Headless' },
      { name: 'E-commerce', starter: false, growth: 'До 50 товаров', premium: 'Unlimited' },
      { name: 'Многоязычность', starter: false, growth: false, premium: true },
      { name: 'API интеграции', starter: false, growth: 'Базовые', premium: 'Custom' },
      { name: 'A/B тестирование', starter: false, growth: true, premium: true },
      { name: 'Lighthouse score', starter: '85+', growth: '90+', premium: '95+' },
      { name: 'Раунды правок', starter: '2', growth: '5', premium: 'Unlimited' },
      { name: 'Поддержка', starter: '30 дней', growth: '60 дней', premium: '90 дней + 24/7' },
      { name: 'Обучение', starter: false, growth: '2 часа', premium: '5 часов' },
      { name: 'Performance reports', starter: false, growth: false, premium: 'Quarterly' },
    ],
  },
  
  addons: {
    title: 'Дополнительные услуги',
    subtitle: 'Расширьте возможности любого пакета',
    items: [
      {
        name: 'AI Automation',
        price: '₪12,000',
        description: 'Интеграция AI-чатботов, автоматизация поддержки клиентов, умные рекомендации.',
        features: [
          'AI чатбот (GPT-4 powered)',
          'Автоматизация email ответов',
          'Умные product recommendations',
          'Sentiment analysis',
          '24/7 AI support agent',
        ],
        icon: '🤖',
      },
      {
        name: 'Brand Identity',
        price: '₪15,000',
        description: 'Полный брендинг: логотип, цвета, типографика, brand guidelines, визуальный язык.',
        features: [
          'Логотип (3 концепта)',
          'Цветовая палитра',
          'Типографика система',
          'Brand guidelines (PDF)',
          'Business card дизайн',
          'Social media templates',
        ],
        icon: '🎨',
      },
      {
        name: 'SEO Strategy & Audit',
        price: '₪8,000',
        description: 'Глубинный SEO аудит, keyword research, on-page оптимизация, стратегия контента.',
        features: [
          'Technical SEO audit',
          'Keyword research (50+ keywords)',
          'Competitor analysis',
          'On-page optimization',
          'Content strategy',
          'Backlink strategy',
        ],
        icon: '📊',
      },
      {
        name: 'Content Creation',
        price: '₪6,000/месяц',
        description: 'Профессиональный копирайтинг, блог-статьи, SEO-тексты, email campaigns.',
        features: [
          '4 blog posts в месяц',
          'SEO-оптимизированные тексты',
          'Email marketing copy',
          'Social media контент',
          'Product descriptions',
        ],
        icon: '✍️',
      },
      {
        name: 'Professional Photography',
        price: '₪5,000',
        description: 'Профессиональная фотосессия продуктов, команды или пространства.',
        features: [
          'Полдня съемки (4 часа)',
          'До 50 обработанных фото',
          'High-res файлы',
          'Web-optimized версии',
          'Коммерческие права',
        ],
        icon: '📸',
      },
      {
        name: 'Monthly Maintenance',
        price: '₪2,500/месяц',
        description: 'Регулярные обновления, техническая поддержка, мониторинг, бэкапы.',
        features: [
          'Технические обновления',
          'Security patches',
          'Еженедельные бэкапы',
          'Performance monitoring',
          'Priority support',
          'Ежемесячные отчеты',
        ],
        icon: '🔧',
      },
    ],
  },
  
  faq: {
    title: 'Часто задаваемые вопросы',
    subtitle: 'Ответы на самые популярные вопросы о ценах и процессе',
    items: [
      {
        question: 'Как происходит оплата?',
        answer: 'Мы работаем по системе 50/30/20: 50% предоплата для старта проекта, 30% после утверждения дизайна, 20% после запуска. Принимаем банковские переводы, кредитные карты и PayPal.',
      },
      {
        question: 'Сколько времени займет проект?',
        answer: 'Starter: 3-4 недели, Growth: 6-8 недель, Premium: 10-14 недель. Точные сроки зависят от сложности и ваших требований. Мы всегда обсуждаем timeline на этапе Discovery.',
      },
      {
        question: 'Что входит в "раунды правок"?',
        answer: 'Раунд правок — это набор изменений, которые вы можете запросить после презентации дизайна или определенного этапа. Мы собираем все комментарии, вносим изменения и показываем обновленную версию.',
      },
      {
        question: 'Могу ли я обновить сайт самостоятельно?',
        answer: 'Да! Если вы выбираете пакет с CMS (Growth или Premium), вы получите админ-панель для управления контентом. Мы проведем обучение вашей команды и предоставим документацию.',
      },
      {
        question: 'Что если мне нужно больше страниц?',
        answer: 'Дополнительные страницы стоят ₪1,500-₪3,000 в зависимости от сложности. Или вы можете upgrade на следующий пакет для лучшего соотношения цена/качество.',
      },
      {
        question: 'Включен ли хостинг в цену?',
        answer: 'Хостинг не включен в базовую цену, но мы поможем выбрать и настроить hosting (обычно ₪50-₪200/месяц). Также предлагаем managed hosting с нашей стороны за ₪500/месяц.',
      },
      {
        question: 'Что такое Lighthouse score?',
        answer: 'Lighthouse — инструмент Google для оценки качества сайта по 4 метрикам: производительность, доступность, лучшие практики и SEO. Score 90+ означает отличную скорость, UX и готовность к SEO.',
      },
      {
        question: 'Могу ли я начать с малого и расширить позже?',
        answer: 'Конечно! Многие клиенты начинают со Starter, а затем добавляют функции или upgrade на Growth. Мы строим сайты с учетом масштабируемости.',
      },
      {
        question: 'Есть ли скидки для некоммерческих организаций?',
        answer: 'Да, мы предоставляем 20% скидку для зарегистрированных НКО и образовательных учреждений. Свяжитесь с нами для деталей.',
      },
      {
        question: 'Что если результат мне не понравится?',
        answer: 'Мы предлагаем 30-дневную гарантию возврата средств после запуска. Если вы не удовлетворены результатом и мы не смогли решить проблемы, мы вернем деньги. Но такого еще не было! 😊',
      },
    ],
  },
  
  cta: {
    title: 'Не уверены, какой пакет выбрать?',
    subtitle: 'Запишитесь на бесплатную 30-минутную консультацию. Мы поможем определить оптимальное решение для вашего бизнеса.',
    button: 'Бесплатная консультация',
  },
};
