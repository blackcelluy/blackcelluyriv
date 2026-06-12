import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShieldCheck, Mail, Phone, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top microbar for ultra-premium brand trust */}
      <div className="bg-black text-[10px] tracking-widest text-[#888888] uppercase border-b border-gold/15 py-1.5 px-4 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-gold/80">
            <ShieldCheck className="w-3.5 h-3.5" /> 
            Garantía técnica especializada
          </span>
          <span>|</span>
          <span>Soporte Oficial Uruguay</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/59893505350" className="hover:text-gold transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-gold" /> 093 505 350
          </a>
          <span>|</span>
          <a 
            href="https://www.instagram.com/blackcell.uyriv/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gold transition-colors flex items-center gap-1"
          >
            Instagram <ExternalLink className="w-2.5 h-2.5 text-gold/80" />
          </a>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 border-b border-gold/20 shadow-2xl backdrop-blur-md py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo brand */}
          <a 
            href="#inicio" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#inicio");
            }}
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-display text-2xl md:text-3xl font-extrabold tracking-[0.25em] text-white hover:text-gold transition-colors relative">
              BLACK<span className="text-gold">CELL</span>
              {/* Gold underline highlight */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="font-sans text-[8px] md:text-[9.5px] tracking-[0.45em] text-gold uppercase mt-0.5 font-semibold">
              Premium Phone Repair
            </span>
          </a>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-sans text-xs uppercase tracking-widest text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Premium Gold Button */}
            <a
              href="#calculadora"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#calculadora");
              }}
              className="px-5 py-2.5 bg-transparent hover:bg-gold border border-gold hover:text-black font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm gold-border-glow"
            >
              Cotizar Reparación
            </a>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-gold p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-gray border-b border-gold/25"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="font-sans text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                
                <a
                  href="#calculadora"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#calculadora");
                  }}
                  className="w-full text-center py-3 mt-2 bg-gradient-to-r from-gold-dark to-gold text-black font-sans text-xs font-bold tracking-widest uppercase rounded-sm hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  Cotizar Reparación
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
