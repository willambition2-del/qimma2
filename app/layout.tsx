import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "قمة للتسويق والبرمجة | شركات تسويق الكتروني في السعودية وشركة برمجيات",
    template: "%s | قمة للتسويق والبرمجة",
  },
  description:
    "قمة للتسويق والبرمجة هي شركة برمجيات ووكالة تسويق رائدة تقدم خدمات تسويق الكتروني وتطوير البرمجيات. نحن شركة برمجة تطبيقات ومواقع متميزة في السعودية متخصصة في تطوير تطبيقات الجوال، وبرمجة مواقع الويب، وادارة حملات التسويق الالكتروني لنمو متجرك أو شركتك.",
  keywords: [
    "شركات تسويق الكتروني في السعودية",
    "التسويق الرقمي",
    "وكالة تسويق",
    "التسويق الالكتروني",
    "تسويق متجر الكتروني",
    "خدمات تسويق الكتروني",
    "خدمات التسويق",
    "ادارة حملات اعلانية",
    "ادارة حملات التسويق الالكتروني",
    "وكالة تسويقية",
    "التسويق في السعودية",
    "تسويق المتاجر الالكترونية",
    "أخصائي تسويق الكتروني",
    "مسوق الكتروني",
    "شركة برمجة تطبيقات",
    "شركة برمجيات",
    "شركة تصميم تطبيقات",
    "شركة انشاء تطبيقات",
    "مبرمج تطبيقات",
    "برمجة مواقع",
    "برمجة تطبيقات",
    "شركة تطوير تطبيقات",
    "تصميم تطبيقات الجوال",
    "برمجة مواقع وتطبيقات",
    "برمجة تطبيقات الجوال",
    "شركة تطبيقات",
    "تطوير تطبيقات",
    "تطوير تطبيقات الجوال",
    "شركات البرمجة",
    "مبرمج تطبيقات ذو خبرة",
    "شركات تطبيقات",
    "برمجة موقع الكتروني",
    "شركة تصميم برامج",
    "مبرمج مواقع",
    "شركة تطوير برمجيات",
    "تطوير تطبيق",
    "تطوير مواقع",
    "برمجه تطبيق",
    "مبرمج مواقع ويب",
    "تصميم تطبيقات جوال",
    "مكتب برمجة",
    "برمجة مواقع الويب",
    "برمجة تطبيقات الويب",
    "خدمات برمجية",
    "موقع برمجيات",
    "برمجة خاصة",
    "تصميم البرمجيات",
    "تطوير البرمجيات",
    "البرمجه والتطبيقات",
    "تطوير البرامج"
  ],
  authors: [{ name: "قمة للتسويق والبرمجة" }],
  creator: "قمة للتسويق والبرمجة",
  metadataBase: new URL("https://qimmaaa.com"),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://qimmaaa.com",
    siteName: "قمة للتسويق والبرمجة",
    title: "قمة للتسويق والبرمجة | حلول رقمية متكاملة",
    description:
      "حلول متكاملة في التسويق الرقمي، تصميم المواقع، تطوير الأنظمة، وتطبيقات الموبايل.",
  },
  twitter: {
    card: "summary_large_image",
    title: "قمة للتسويق والبرمجة",
    description:
      "حلول متكاملة في التسويق الرقمي، تصميم المواقع، تطوير الأنظمة، وتطبيقات الموبايل.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexArabic.variable} ${inter.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XM2LRLK');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.self !== window.top) {
                document.documentElement.classList.add('is-embedded');
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XM2LRLK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
