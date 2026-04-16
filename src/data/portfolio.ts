

// export const industries = ['All', 'Technology', 'Fashion', 'Wellness', 'Food', 'Real Estate', 'Hospitality', 'Luxury'];
// export const types = ['All', 'Website', 'E-commerce', 'Landing Page', 'UI/UX', 'Branding', 'Mobile App'];
import { StaticImageData } from "next/image";
import { TranslationValues } from "next-intl";

import foto1 from "../../public/portfolio/clinic_mobile.avif";
import fotoClinic from "../../public/portfolio/clinic.avif";
import foto2 from "../../public/portfolio/law_mobile.avif";
import fotoLaw from "../../public/portfolio/law.avif";
import foto3 from "../../public/portfolio/teacher_mobile.avif";
import foto4 from "../../public/portfolio/hm_mobile.avif";
import fotoTeacher from "../../public/portfolio/teacher.avif";
import brand from "../../public/portfolio/brand.avif";
import nina from "../../public/portfolio/nina.avif";
import luxury from "../../public/portfolio/luxury.avif";
import luxury_mobile from "../../public/portfolio/luxury_mobile.avif";
// import realty from '../../public/video/realty.mp4'

type TFunction = (key: string, values?: TranslationValues) => string;

// export interface Project {
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
interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  imageLittle: string | StaticImageData;
  imageBig?: string | StaticImageData;
  video?: string;
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
      video: "/video/clinic.mp4",
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
      video: "/video/law.mp4",
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
      id: "luxury-israel-properties",
      title: t("portfolioData.projects.realEstate.title"),
      client: t("portfolioData.projects.realEstate.client"),
      description: t("portfolioData.projects.realEstate.description"),
      imageLittle: luxury_mobile,
      imageBig: luxury,
      video: "/video/realty.mp4",
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
      link: "https://luxury-israel-properties.vercel.app/",
      caseStudy: {
        challenge: t("portfolioData.projects.realEstate.caseStudy.challenge"),
        solution: t("portfolioData.projects.realEstate.caseStudy.solution"),
        results: [
          t("portfolioData.projects.realEstate.caseStudy.results.0"),
          t("portfolioData.projects.realEstate.caseStudy.results.1"),
          t("portfolioData.projects.realEstate.caseStudy.results.2"),
          t("portfolioData.projects.realEstate.caseStudy.results.3"),
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