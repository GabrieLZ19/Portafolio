"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { contactInfo } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dict } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: dict.nav.home },
    { href: "#sobre-mi", label: dict.nav.about },
    { href: "#experiencia", label: dict.nav.experience },
    { href: "#educacion", label: dict.nav.education },
    { href: "#habilidades", label: dict.nav.skills },
    { href: "#proyectos", label: dict.nav.projects },
    { href: "#contacto", label: dict.nav.contact },
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
            
            <div className="flex items-center space-x-4 border-l border-border pl-8 ml-4">
              <ThemeToggle />
              <LanguageToggle />
              {/* LinkedIn */}
              <a
                href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground-secondary hover:text-foreground transition-colors text-lg ml-2"
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
                {dict.nav.cv}
              </a>
            </div>
          </div>

          {/* Mobile: LinkedIn + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground text-2xl ml-2"
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
              <div className="flex items-center justify-between pt-6 px-2">
                <a
                  href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary hover:text-foreground text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="/Gabriel Omar Lazo - CV.pdf"
                  download="Gabriel-Lazo-CV.pdf"
                  className="font-mono text-xs uppercase tracking-widest px-6 py-2 border border-border text-foreground-secondary hover:text-foreground hover:border-foreground transition-colors"
                >
                  {dict.nav.cv}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
