import React from "react";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-black text-gray-500 py-16 border-t border-gold/15 relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gold/5 rounded-full filter blur-[70px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
        
        {/* Logo and Tagline Centered */}
        <div className="flex flex-col items-center mb-8">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#inicio");
            }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <span className="font-display text-2xl md:text-3xl font-extrabold tracking-[0.25em] text-white hover:text-gold transition-colors">
              BLACK<span className="text-gold">CELL</span>
            </span>
            <span className="font-sans text-[8.5px] md:text-[9.5px] tracking-[0.45em] text-gold uppercase mt-1 font-semibold">
              Premium Phone Repair
            </span>
          </a>
        </div>

        {/* Footer Quick Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-gold transition-colors duration-250 font-sans"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider line with small star/shield */}
        <div className="relative flex items-center justify-center mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative px-4 bg-black">
            <ShieldCheck className="w-5 h-5 text-gold/60" />
          </div>
        </div>

        {/* Essential Copyright Text and Brand mark */}
        <div className="space-y-3 font-mono text-[10.5px] tracking-wider text-gray-500">
          <p className="uppercase">
            <span className="text-white font-semibold">BLACKCELL</span> &copy; {currentYear} &bull; Premium Phone Repair &bull; Todos los derechos reservados.
          </p>
          <p className="font-sans text-gray-600 font-light text-[10px] flex items-center justify-center gap-1.5 pt-2">
            Desarrollado con precisión técnica por BlackCell Labs UY
          </p>
        </div>

      </div>
    </footer>
  );
}
