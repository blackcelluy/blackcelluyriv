import React from "react";
import { motion } from "motion/react";
import { 
  FileCheck2, 
  Cpu, 
  UserCheck, 
  Clock3, 
  Briefcase, 
  ShieldAlert,
  Sparkles,
  Zap
} from "lucide-react";
import { Benefit } from "../types";

export default function Benefits() {
  const benefits: Benefit[] = [
    {
      title: "Diagnósticos profesionales",
      description: "Mediciones milimétricas de consumo de corriente y voltaje para identificar el corto exacto sin adivinanzas.",
      iconName: "FileCheck2"
    },
    {
      title: "Reparaciones especializadas",
      description: "Soldaduras a nivel microscópico garantizadas para revivir placas lógicas con daños de agua o cortocircuitos.",
      iconName: "Cpu"
    },
    {
      title: "Atención personalizada",
      description: "Canal directo con el técnico a cargo para conocer el estado y evolución de tu reparación paso a paso.",
      iconName: "UserCheck"
    },
    {
      title: "Soluciones rápidas",
      description: "Servicios express para pantallas y bateríasiseñados para devolverte el celular operativo en pocas horas.",
      iconName: "Clock3"
    },
    {
      title: "Experiencia técnica",
      description: "Años de especialización real en fallas críticas de placas base y sitemas lógicos de todo tipo de smartphones.",
      iconName: "Briefcase"
    },
    {
      title: "Garantía de calidad",
      description: "Riguroso protocolo de pruebas post-ensamblado para avalar la respuesta de la pantalla y la estabilidad de carga.",
      iconName: "ShieldAlert"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "FileCheck2":
        return <FileCheck2 className="w-6 h-6 text-gold" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-gold" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-gold" />;
      case "Clock3":
        return <Clock3 className="w-6 h-6 text-gold" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-gold" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-dark-gray to-black">
      {/* Decorative grids */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase block mb-3">VENTAJAS REALES</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Beneficios <span className="gold-text-gradient">Premium</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-300 text-sm font-light leading-relaxed">
            Nuestros estándares están alineados al de laboratorios internacionales, brindando el máximo nivel de seguridad para tu dispositivo de uso personal.
          </p>
        </div>

        {/* Bento Grid layout style for high visual hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            // Give specific sizes or layouts to create a beautiful Bento rhythm
            const isLargeCell = index === 0 || index === 4;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-black/50 p-6 md:p-8 rounded-xl border border-white/5 transition-all duration-300 group hover:border-gold/25 relative overflow-hidden ${
                  isLargeCell ? "md:col-span-2 lg:col-span-1 border-gold/10" : ""
                }`}
              >
                {/* Background active glow item */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/15 flex items-center justify-center text-gold group-hover:bg-gold/15 transition-all">
                    {getIcon(benefit.iconName)}
                  </div>
                  <h3 className="font-display text-sm md:text-base font-extrabold text-white tracking-wider uppercase group-hover:text-gold transition-colors block leading-tight">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  {benefit.description}
                </p>

                {/* Corner detail decoration */}
                <div className="absolute bottom-2 right-2 opacity-5 scale-90 group-hover:opacity-20 group-hover:scale-100 transition-all text-gold">
                  <Zap className="w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic visual badge trust */}
        <div className="mt-16 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border border-gold/15 rounded-xl p-6 md:p-8 text-center max-w-4xl mx-auto">
          <p className="text-xs md:text-sm text-gold font-medium leading-relaxed uppercase tracking-widest flex flex-col md:flex-row items-center justify-center gap-2">
            <span>🛠 CONTROL DE LABORATORIO ESD</span>
            <span className="hidden md:inline text-white">|</span>
            <span>PROTECCIÓN QUÍMICA Y TÉRMICA</span>
            <span className="hidden md:inline text-white">|</span>
            <span>MÁXIMA EFICIENCIA DE VOLTAJE</span>
          </p>
        </div>

      </div>
    </section>
  );
}
