import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Body Workhorse
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = "https://gabriellazo.vercel.app"; // ← cambia esto a tu URL real

export const metadata: Metadata = {
  title: "Gabriel Lazo | Desarrollador Full Stack & Mobile",
  description:
    "Portafolio de Gabriel Lazo — Desarrollador Full Stack & Mobile especializado en React, Next.js, Node.js y arquitecturas escalables. La Rioja, Argentina.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Gabriel Lazo | Desarrollador Full Stack & Mobile",
    description:
      "Portafolio de Gabriel Lazo — Desarrollador Full Stack & Mobile especializado en React, Next.js, Node.js y arquitecturas escalables.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-white selection:text-black`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
