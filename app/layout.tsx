import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "@/components/WhatsAppButton";

// Body Workhorse
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = "https://gabriellazo.vercel.app";

export const metadata: Metadata = {
  title:
    "Gabriel Lazo | Desarrollador Full Stack & Mobile — React, Next.js, Node.js",
  description:
    "Portafolio de Gabriel Lazo — Desarrollador Full Stack & Mobile con experiencia en React, Next.js, React Native, Node.js, NestJS y PostgreSQL. Disponible para proyectos freelance y posiciones remotas. La Rioja, Argentina.",
  metadataBase: new URL(BASE_URL),
  keywords: [
    "desarrollador full stack",
    "desarrollador mobile",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "freelance Argentina",
    "programador La Rioja",
    "Gabriel Lazo",
    "portfolio desarrollador",
    "desarrollo web Argentina",
    "desarrollador remoto",
  ],
  authors: [{ name: "Gabriel Lazo", url: BASE_URL }],
  creator: "Gabriel Lazo",
  verification: {
    google: "0AcoCIwXaJaM0rieJR2Xh2P3fxYjPw8hFpSxM5oNNks",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Gabriel Lazo | Desarrollador Full Stack & Mobile",
    description:
      "Portafolio de Gabriel Lazo — Desarrollador Full Stack & Mobile especializado en React, Next.js, Node.js y arquitecturas escalables. Disponible para proyectos freelance y remotos.",
    siteName: "Gabriel Lazo — Portafolio",
    locale: "es_AR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Lazo — Desarrollador Full Stack & Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Lazo | Desarrollador Full Stack & Mobile",
    description:
      "Portafolio de Gabriel Lazo — Desarrollador Full Stack & Mobile especializado en React, Next.js, Node.js y arquitecturas escalables.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Lazo",
  url: BASE_URL,
  jobTitle: "Desarrollador Full Stack & Mobile",
  description:
    "Desarrollador Full Stack & Mobile especializado en React, Next.js, React Native, Node.js y arquitecturas escalables. La Rioja, Argentina.",
  email: "gabriellazo48@gmail.com",
  telephone: "+543865376697",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Rioja",
    addressCountry: "AR",
  },
  sameAs: [
    "https://linkedin.com/in/gabriel-lazo20",
    "https://github.com/GabrieLZ19",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-white selection:text-black`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
