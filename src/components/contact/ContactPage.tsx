
"use client";

import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { buildContactData } from "@/src/data/contactData";

import { ContactHero } from "./ContactHero";
import { ContactMain } from "./ContactMain";
import { ContactCTA } from "./ContactCTA";
import {
  safeReadAddons,
  safeReadPackage,
  safeWriteAddons,
  clearPricingSelection,
} from "@/src/utils/addonsStorage";

export type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  package: string;
  additionalServices: string[];
  message: string;
};

const INITIAL_FORM: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  package: "",
  additionalServices: [],
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);




  const locale = useLocale();
  const isRTL = locale === "he";
  const t = useTranslations("contact");

  const baseUrl = "https://savondev.com";
  const localizedContactUrl = `${baseUrl}/${locale}/contact`;

  const data = buildContactData(t);


  useEffect(() => {
    const addons = [...safeReadAddons()];
    const selectedPackage = safeReadPackage();

    setFormData((prev) => {
      const nextAddons = addons.length ? addons : prev.additionalServices;
      const nextPackage = selectedPackage || prev.package;

      const sameAddons =
        nextAddons.length === prev.additionalServices.length &&
        nextAddons.every(
          (value, index) => value === prev.additionalServices[index],
        );

      if (sameAddons && nextPackage === prev.package) {
        return prev;
      }

      return {
        ...prev,
        additionalServices: [...nextAddons],
        package: nextPackage,
      };
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      clearPricingSelection();

      window.setTimeout(() => {
        setIsSubmitted(false);
        setFormData(INITIAL_FORM);
      }, 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiChange = (name: "additionalServices", values: string[]) => {
    setFormData((prev) => ({
      ...prev,
      [name]: [...values],
    }));

    safeWriteAddons(values);
  };

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />

        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t("meta.ogLocale")} />
        <meta property="og:url" content={localizedContactUrl} />

      
        <meta property="og:image" content={`${baseUrl}/opengraph-image`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

     
        <meta name="twitter:image" content={`${baseUrl}/twitter-image`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("meta.twitterTitle")} />
        <meta
          name="twitter:description"
          content={t("meta.twitterDescription")}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: t("schema.pageName"),
              description: t("schema.pageDescription"),
              url: localizedContactUrl,
              inLanguage: locale,
              mainEntity: {
                "@type": "ProfessionalService",
                name: "SavonDev Studio",
                areaServed: {
                  "@type": "Country",
                  name: "Israel",
                },
                email: "dsavontrumpet@gmail.com",
                telephone: "+97231234567",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rothschild Blvd 42",
                  addressLocality: "Tel Aviv",
                  addressCountry: "IL",
                },
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: t("schema.faq.q1.q"),
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: t("schema.faq.q1.a"),
                  },
                },
                {
                  "@type": "Question",
                  name: t("schema.faq.q2.q"),
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: t("schema.faq.q2.a"),
                  },
                },
                {
                  "@type": "Question",
                  name: t("schema.faq.q3.q"),
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: t("schema.faq.q3.a"),
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <main
        ref={containerRef}
        dir={isRTL ? "rtl" : "ltr"}
        aria-label={t("aria.page")}
        className="relative min-h-screen overflow-x-clip bg-[#020410] text-slate-100"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050814_0%,#050818_35%,#020410_100%)]" />

          <div
            className="absolute -top-60 right-[-20%] h-[520px] w-[520px] rounded-full blur-3xl opacity-60
                     bg-[radial-gradient(circle,rgba(76,194,255,0.85),transparent_60%)]"
          />
          <div
            className="absolute top-[34%] left-[-22%] h-[640px] w-[640px] rounded-full blur-3xl opacity-50
                     bg-[radial-gradient(circle,rgba(58,123,255,0.75),transparent_60%)]"
          />

          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="sr-only">
          <h1 id="contact-hero-title">{t("aria.heroTitle")}</h1>
          <h2 id="contact-main-title">{t("aria.mainTitle")}</h2>
          <h2 id="contact-cta-title">{t("aria.ctaTitle")}</h2>
        </div>

        <section aria-labelledby="contact-hero-title">
          <ContactHero data={data.hero} />
        </section>

        <section aria-labelledby="contact-main-title">
          <ContactMain
            data={data}
            formData={formData}
            isSubmitted={isSubmitted}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            onChange={handleChange}
            onMultiChange={handleMultiChange}
          />
        </section>

        <section aria-labelledby="contact-cta-title">
          <ContactCTA data={data.cta} />
        </section>
      </main>
    </>
  );
}