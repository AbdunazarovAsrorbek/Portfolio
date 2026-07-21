import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 🔤 JSON tarjimalarni import qilamiz
import aboutUZ from "../data/uz/about.json";
import contactUZ from "../data/uz/contact.json";
import introduceUZ from "../data/uz/introduce.json";
import leftSidebarUZ from "../data/uz/leftSidebar.json";
import loaderUZ from "../data/uz/loader.json";
import portfolioUZ from "../data/uz/portfolio.json";
import resumeUZ from "../data/uz/resume.json";
import rightSidebarUZ from "../data/uz/rightSidebar.json";
import servicesUZ from "../data/uz/services.json";
import skillsUZ from "../data/uz/skills.json";
import testimonialsUZ from "../data/uz/testimonials.json";
import seoUZ from "../data/uz/seo.json";

import aboutRU from "../data/ru/about.json";
import contactRU from "../data/ru/contact.json";
import introduceRU from "../data/ru/introduce.json";
import leftSidebarRU from "../data/ru/leftSidebar.json";
import loaderRU from "../data/ru/loader.json";
import portfolioRU from "../data/ru/portfolio.json";
import resumeRU from "../data/ru/resume.json";
import rightSidebarRU from "../data/ru/rightSidebar.json";
import servicesRU from "../data/ru/services.json";
import skillsRU from "../data/ru/skills.json";
import testimonialsRU from "../data/ru/testimonials.json";
import seoRU from "../data/ru/seo.json";

import aboutEN from "../data/en/about.json";
import contactEN from "../data/en/contact.json";
import introduceEN from "../data/en/introduce.json";
import leftSidebarEN from "../data/en/leftSidebar.json";
import loaderEN from "../data/en/loader.json";
import portfolioEN from "../data/en/portfolio.json";
import resumeEN from "../data/en/resume.json";
import rightSidebarEN from "../data/en/rightSidebar.json";
import servicesEN from "../data/en/services.json";
import skillsEN from "../data/en/skills.json";
import testimonialsEN from "../data/en/testimonials.json";
import seoEN from "../data/en/seo.json";

// 🌍 Tarjimalar strukturasi
const resources = {
  uz: {
    about: aboutUZ,
    contact: contactUZ,
    introduce: introduceUZ,
    leftSidebar: leftSidebarUZ,
    loader: loaderUZ,
    portfolio: portfolioUZ,
    resume: resumeUZ,
    rightSidebar: rightSidebarUZ,
    services: servicesUZ,
    skills: skillsUZ,
    testimonials: testimonialsUZ,
    seo: seoUZ,
  },
  ru: {
    about: aboutRU,
    contact: contactRU,
    introduce: introduceRU,
    leftSidebar: leftSidebarRU,
    loader: loaderRU,
    portfolio: portfolioRU,
    resume: resumeRU,
    rightSidebar: rightSidebarRU,
    services: servicesRU,
    skills: skillsRU,
    testimonials: testimonialsRU,
    seo: seoRU,
  },
  en: {
    about: aboutEN,
    contact: contactEN,
    introduce: introduceEN,
    leftSidebar: leftSidebarEN,
    loader: loaderEN,
    portfolio: portfolioEN,
    resume: resumeEN,
    rightSidebar: rightSidebarEN,
    services: servicesEN,
    skills: skillsEN,
    testimonials: testimonialsEN,
    seo: seoEN,
  },
};

// 🧹 ESKI NOTO'G'RI KESHNI TOZALASH
// Ba'zi brauzerlar "en-EN", "ru-RU" kabi nostandart formatlarni localStorage'ga
// yozib qo'yishi mumkin edi (eski koddan qolgan). Bunday holatda keshni tozalaymiz,
// aks holda i18next resources ichida mos kalitni topa olmay, ma'lumot bo'sh chiqadi.
const savedLang = localStorage.getItem("portfolio-lang");
if (savedLang && savedLang.includes("-")) {
  localStorage.removeItem("portfolio-lang");
}

// 🧠 i18next konfiguratsiyasi
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    load: "languageOnly",
    ns: [
      "about",
      "contact",
      "introduce",
      "leftSidebar",
      "loader",
      "portfolio",
      "resume",
      "rightSidebar",
      "services",
      "skills",
      "testimonials",
      "seo",
    ],
    defaultNS: "introduce",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "portfolio-lang",
      // 👇 har qanday "en-EN", "ru-RU" kabi kodni "en", "ru" ga aylantiradi
      convertDetectedLanguage: (lng: string) => lng.split("-")[0],
    },
  });

export default i18n;