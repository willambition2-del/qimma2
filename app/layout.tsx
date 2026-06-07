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
    default: "قمة للتسويق والبرمجة | حلول رقمية متكاملة",
    template: "%s | قمة للتسويق والبرمجة",
  },
  description:
    "حلول متكاملة في التسويق الرقمي، تصميم المواقع، تطوير الأنظمة، وتطبيقات الموبايل لمساعدتك على النمو والوصول إلى عملائك باحترافية.",
  keywords: [
    "تسويق رقمي",
    "تصميم مواقع",
    "تطوير أنظمة",
    "تطبيقات موبايل",
    "قمة",
    "برمجة",
    "متجر إلكتروني",
    "هوية بصرية",
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
        {children}
      </body>
    </html>
  );
}
