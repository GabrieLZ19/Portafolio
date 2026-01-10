import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Lazo | Desarrollador Full Stack",
  description:
    "Portafolio profesional de Gabriel Lazo - Desarrollador Full Stack especializado en React, Next.js, Node.js y tecnologías blockchain.",
  keywords: [
    "Gabriel Lazo",
    "Desarrollador Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Blockchain",
    "Solidity",
  ],
  authors: [{ name: "Gabriel Lazo" }],
  openGraph: {
    title: "Gabriel Lazo | Desarrollador Full Stack",
    description:
      "Portafolio profesional de Gabriel Lazo - Desarrollador Full Stack especializado en React, Next.js, Node.js y React Native.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
