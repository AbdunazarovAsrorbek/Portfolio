// SEO.tsx — endi i18next bilan avtomatik ishlaydi
//
// O'rnatish: npm install react-helmet-async
//
// main.tsx faylida:
//   import { HelmetProvider } from "react-helmet-async";
//   <HelmetProvider><App /></HelmetProvider>
//
// Foydalanish (til ko'rsatish shart emas — i18next'dan o'zi oladi):
//   <SEO title="Abdunazarov Asrorbek — Frontend Developer" description="..." />

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    path?: string;
}

const DOMAIN = "https://dreamcode.uz";

const OG_LOCALE_MAP: Record<string, string> = {
    uz: "uz_UZ",
    en: "en_US",
    ru: "ru_RU",
};

const DEFAULT_KEYWORDS = "Asror, Abdunazarov, Asrorbek, Asror Abdunazarov, Abdunazarov Asrorbek, Asrorbek Abdunazarov, Abdunazarov Asror, Frontend Developer, React Developer, Web Developer Uzbekistan, dreamcode.uz, JavaScript, TypeScript, Portfolio";

export default function SEO({
    title,
    description,
    keywords = DEFAULT_KEYWORDS,
    image = `${DOMAIN}/og-image.jpg`,
    path = "",
}: SEOProps) {
    const { i18n } = useTranslation();
    const currentLang = i18n.language?.split("-")[0] || "uz";
    const url = `${DOMAIN}${path}`;

    return (
        <Helmet>
            <html lang={currentLang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Asror Abdunazarov" />

            <link rel="canonical" href={url} />
            <link rel="alternate" hrefLang="uz" href={`${DOMAIN}${path}`} />
            <link rel="alternate" hrefLang="en" href={`${DOMAIN}${path}`} />
            <link rel="alternate" hrefLang="ru" href={`${DOMAIN}${path}`} />
            <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${path}`} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Asror Abdunazarov — Portfolio" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:locale" content={OG_LOCALE_MAP[currentLang] || "uz_UZ"} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}