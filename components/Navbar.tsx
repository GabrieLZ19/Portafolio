"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { contactInfo } from "@/lib/data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#educacion", label: "Educación" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-border" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo Minimalista */}
          <Link href="#inicio" className="text-xl font-display font-bold tracking-tight text-foreground">
            GABRIEL LAZO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-foreground-secondary hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* LinkedIn */}
            <a
              href={`https://linkedin.com/in/${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Gabriel Lazo"
              className="text-foreground-secondary hover:text-foreground transition-colors text-lg"
            >
              <FaLinkedin />
            </a>
            {/* CV Download */}
            <a
              href="/Gabriel Omar Lazo - CV.pdf"
              download="Gabriel-Lazo-CV.pdf"
              className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-border text-foreground-secondary hover:text-foreground hover:border-foreground transition-colors flex items-center gap-2"
            >
              <HiArrowDown className="text-sm" />
              CV
            </a>
          </div>

          {/* Mobile: LinkedIn + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={`https://linkedin.com/in/${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="/Gabriel Omar Lazo - CV.pdf"
              download="Gabriel-Lazo-CV.pdf"
              aria-label="Descargar CV"
              className="font-mono text-xs uppercase tracking-widest text-foreground-secondary border border-border px-3 py-1.5 hover:text-foreground hover:border-foreground transition-colors"
            >
              CV
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground text-2xl"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="flex flex-col py-6 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-mono text-sm uppercase py-4 border-b border-border/50 text-foreground-secondary hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
