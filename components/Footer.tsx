import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="container-custom py-12 md:py-16">
        {/* Top grid — 1 col mobile, 2+2 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3 tracking-tight">
              Gabriel Lazo
            </h3>
            <p className="text-sm text-foreground-secondary max-w-xs">
              Desarrollador Full Stack & Mobile. Construyendo el futuro desde La Rioja, Argentina.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground-secondary mb-4 md:mb-6">
              Navegación
            </h4>
            <div className="flex flex-col space-y-3">
              {["#inicio", "#proyectos", "#experiencia", "#contacto"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-foreground hover:text-foreground-secondary transition-colors capitalize"
                >
                  {href.replace("#", "")}
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground-secondary mb-4 md:mb-6">
              Contacto
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-foreground hover:text-foreground-secondary transition-colors break-all"
              >
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-sm text-foreground hover:text-foreground-secondary transition-colors"
              >
                {contactInfo.phone}
              </a>
              <div className="flex space-x-4 mt-2 pt-3 border-t border-border/50">
                <a
                  href="https://wa.me/543865376697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-[#25d366] hover:opacity-75 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-foreground hover:text-foreground-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                {contactInfo.github && (
                  <a
                    href={`https://github.com/${contactInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-foreground hover:text-foreground-secondary transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-10 md:mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-foreground-tertiary">
          <p>&copy; {currentYear} GABRIEL LAZO.</p>
          <p className="uppercase tracking-widest">Next.js · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
