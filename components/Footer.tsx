import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { contactInfo } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-white/10">
      <div className="container-custom px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Gabriel Lazo
            </h3>
            <p className="text-foreground-secondary">
              Desarrollador Full Stack especializado en crear soluciones web
              innovadoras y escalables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#inicio"
                className="text-foreground-secondary hover:text-accent-blue transition-colors"
              >
                Inicio
              </a>
              <a
                href="#proyectos"
                className="text-foreground-secondary hover:text-accent-blue transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#contacto"
                className="text-foreground-secondary hover:text-accent-blue transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-foreground-secondary hover:text-accent-blue transition-colors"
              >
                <FaEnvelope />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 text-foreground-secondary hover:text-accent-blue transition-colors"
              >
                <FaPhone />
                <span>{contactInfo.phone}</span>
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-foreground-secondary hover:text-accent-blue transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                {contactInfo.github && (
                  <a
                    href={`https://github.com/${contactInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-foreground-secondary hover:text-accent-blue transition-all hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-foreground-secondary">
          <p>
            &copy; {currentYear} Gabriel Lazo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
