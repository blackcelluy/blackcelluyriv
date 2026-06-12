import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Smartphone, Zap } from "lucide-react";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center overflow-hidden py-16 md:py-24">
      {/* Dynamic luxury background graphics */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-gold/10 via-transparent to-transparent opacity-60"></div>
      
      {/* Subtle floating gold dust or grid lines */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>

      {/* Luxury gold highlight orbs in the backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-gold-dark/5 rounded-full filter blur-[90px]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 border border-gold/40 rounded-full mb-6 text-gold text-xs tracking-widest uppercase font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
              <span>★ Premium Phone Repair ★</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none mb-6"
            >
              Reparación <br />
              <span className="gold-text-gradient drop-shadow-sm">Premium</span> para tu <br />
              Smartphone
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light"
            >
              Especialistas en microsoldadura avanzada de placas lógicas, cambios express de pantalla y baterías de calidad original, y respaldo total de información de tu equipo Android o iPhone.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollToSection("#calculadora")}
                id="cta-budget-hero"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-semibold uppercase tracking-wider text-xs rounded-sm hover:brightness-110 shadow-lg shadow-gold/20 active:scale-95 transition-all w-full sm:w-auto cursor-pointer"
              >
                Solicitar Presupuesto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/59893505350?text=Hola%20BlackCell%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20reparaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-hero"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-white font-semibold uppercase tracking-wider text-xs rounded-sm transition-all duration-300 w-full sm:w-auto"
              >
                {/* Whatsapp SVG */}
                <svg
                  className="w-4.5 h-4.5 fill-current text-green-400 group-hover:text-green-300"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.003 21.1a9.09 9.09 0 01-4.636-1.255l-.332-.196-3.447.904.92-3.361-.215-.342A9.09 9.09 0 012.91 12.01c0-5.02 4.084-9.102 9.103-9.102 5.019 0 9.102 4.082 9.102 9.102 0 5.019-4.083 9.09-9.102 9.09zM12.003 1c-6.079 0-11.012 4.933-11.012 11.011 0 1.944.507 3.844 1.47 5.516L1 24l6.634-1.74a10.957 10.957 0 005.37 1.391c6.078 0 11.011-4.932 11.011-11.01A11.015 11.015 0 0012.003 1z"/>
                </svg>
                Contactar por WhatsApp
              </a>
            </motion.div>

            {/* Micro Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-12 mt-12 w-full border-t border-white/10"
            >
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-gold">5K+</p>
                <p className="text-gray-400 text-[10px] md:text-xs tracking-wider uppercase mt-1">Reparaciones OK</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-white">99%</p>
                <p className="text-gray-400 text-[10px] md:text-xs tracking-wider uppercase mt-1">Éxito en Micro-soldadura</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-gold">No. 1</p>
                <p className="text-gray-400 text-[10px] md:text-xs tracking-wider uppercase mt-1">Calidad Garantizada</p>
              </div>
            </motion.div>
          </div>

          {/* Right Smartphone Motherboard/Graphics Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-12">
            
            {/* Visual backdrop boarder glow */}
            <div className="absolute w-[340px] h-[340px] bg-gold/10 rounded-full filter blur-[50px] z-0"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative w-[300px] h-[550px] bg-black border-4 border-gold-dark/40 rounded-[40px] shadow-2xl p-4 overflow-hidden z-10 flex flex-col justify-between"
              style={{ perspective: 1000 }}
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
            >
              {/* Premium Phone Speaker cutout */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black border-b border-gold/15 rounded-b-2xl z-20 flex justify-center items-center gap-1.5">
                <span className="w-10 h-1 bg-gray-800 rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-gray-900 rounded-full border border-gold/30"></span>
              </div>

              {/* Dynamic circuitry mockup graphic inside the screen */}
              <div className="flex-1 w-full relative rounded-[28px] border border-gold/15 bg-gradient-to-b from-black via-dark-gray to-black overflow-hidden py-10 px-4 flex flex-col justify-between select-none">
                
                {/* Micro Circuit lines pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full text-gold" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="100" x2="120" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="120" y1="100" x2="160" y2="140" stroke="currentColor" strokeWidth="1" />
                    <circle cx="160" cy="140" r="3" fill="currentColor" />
                    <line x1="260" y1="250" x2="180" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="180" y1="250" x2="140" y2="290" stroke="currentColor" strokeWidth="1" />
                    <circle cx="140" cy="290" r="3.5" fill="currentColor" />
                    <path d="M 50 400 L 120 400 L 150 430" fill="transparent" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {/* Simulated Diagnostic Software HUD */}
                <div className="relative z-10 space-y-4 pt-4">
                  <div className="flex justify-between items-center bg-black/60 border border-gold/20 p-2 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-gold animate-pulse" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">BLACKCELL OS V4.8</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  </div>

                  <div className="text-[10px] font-mono text-gray-400 space-y-1 bg-black/50 p-2.5 rounded border border-white/5">
                    <p className="text-gold font-bold uppercase tracking-widest text-[9px] mb-1">SYSTEM REPORT:</p>
                    <p className="flex justify-between"><span>▸ MOTHERBOARD</span> <span className="text-green-400">RESTORED</span></p>
                    <p className="flex justify-between"><span>▸ COIL SOLDER</span> <span className="text-gold">CALIBRATED</span></p>
                    <p className="flex justify-between"><span>▸ RETINA SCREEN</span> <span className="text-white">GRADE OEM</span></p>
                    <p className="flex justify-between"><span>▸ POWER BATTERY</span> <span className="text-green-400 font-semibold">100% HEALTH</span></p>
                  </div>
                </div>

                {/* Golden abstract inner component graphic */}
                <div className="relative flex justify-center items-center py-6">
                  {/* Glowing core component */}
                  <div className="relative w-28 h-28 border border-gold rounded-2xl flex items-center justify-center p-2.5 bg-black/80 gold-border-glow">
                    <div className="absolute inset-2 border border-gold/10 rounded-xl bg-gradient-to-tr from-gold-dark/20 to-transparent"></div>
                    <Smartphone className="w-12 h-12 text-gold absolute animate-pulse" />
                    {/* Tiny blinking logic markers */}
                    <span className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
                    <span className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    <span className="absolute top-12 right-3 w-1.5 h-1.5 rounded-full bg-gold/52"></span>
                  </div>

                  {/* Radiating circular signal waves */}
                  <span className="absolute w-36 h-36 border border-gold/10 rounded-full animate-ping pointer-events-none"></span>
                  <span className="absolute w-48 h-48 border border-gold/5 rounded-full animate-ping pointer-events-none animation-delay-500"></span>
                </div>

                <div className="space-y-2 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-gold/90 font-semibold justify-center">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span className="tracking-widest uppercase font-display text-[9px]">Garantía Certificada</span>
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                      className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                    ></motion.div>
                  </div>
                </div>

              </div>

              {/* Bottom Touch Bar cutout */}
              <div className="w-24 h-1 bg-gold/50 rounded-full mx-auto mt-2"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
