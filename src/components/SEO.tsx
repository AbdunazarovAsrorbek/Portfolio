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
    image?: string;
    path?: string; // masalan "/about" — agar sahifalar bo'lsa
}

const DOMAIN = "https://dreamcode.uz";

const OG_LOCALE_MAP: Record<string, string> = {
    uz: "uz_UZ",
    en: "en_US",
    ru: "ru_RU",
};

export default function SEO({
    title,
    description,
    image = `${DOMAIN}/og-image.jpg`,
    path = "",
}: SEOProps) {
    const { i18n } = useTranslation();
    const currentLang = i18n.language?.split("-")[0] || "uz"; // "en-US" -> "en"
    const url = `${DOMAIN}${path}`;

    return (
        <Helmet>
            <html lang={currentLang} />
            <title>{title}</title>
            <meta name="description" content={description} />

            <link rel="canonical" href={url} />
            <link rel="alternate" hrefLang="uz" href={`${DOMAIN}${path}`} />
            <link rel="alternate" hrefLang="en" href={`${DOMAIN}${path}`} />
            <link rel="alternate" hrefLang="ru" href={`${DOMAIN}${path}`} />
            <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${path}`} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:locale" content={OG_LOCALE_MAP[currentLang] || "uz_UZ"} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}