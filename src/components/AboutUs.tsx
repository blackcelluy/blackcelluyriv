import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Activity, 
  Cpu, 
  Database, 
  Award, 
  ShieldCheck 
} from "lucide-react";
import { CorePillar } from "../types";

export default function AboutUs() {
  const pillars: CorePillar[] = [
    {
      title: "Atención profesional",
      description: "Asesoramiento técnico honesto y cordial. Nuestro personal está capacitado para guiarte en todo momento.",
      iconName: "Users"
    },
    {
      title: "Diagnóstico especializado",
      description: "Identificamos fallas profundas mediante microscopios de precisión e instrumental de medición avanzado.",
      iconName: "Activity"
    },
    {
      title: "Reparaciones avanzadas",
      description: "Expertos en microsoldadura (reparación de circuitos integrados, problemas de carga, encendido, wifi y señal).",
      iconName: "Cpu"
    },
    {
      title: "Respaldo de información",
      description: "Tu privacidad es sagrada. Protegemos y extraemos la base de datos de tu teléfono con total confidencialidad.",
      iconName: "Database"
    },
    {
      title: "Componentes de calidad",
      description: "Utilizamos repuestos de calidad original y grado OEM certificados para restablecer el rendimiento al 100%.",
      iconName: "Award"
    },
    {
      title: "Garantía de servicio",
      description: "Respaldo post-reparación técnico escrito en cada trabajo realizado para que uses tu equipo con total tranquilidad.",
      iconName: "ShieldCheck"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Users":
        return <Users className="w-8 h-8 text-gold" />;
      case "Activity":
        return <Activity className="w-8 h-8 text-gold" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-gold" />;
      case "Database":
        return <Database className="w-8 h-8 text-gold" />;
      case "Award":
        return <Award className="w-8 h-8 text-gold" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-gold" />;
      default:
        return <Cpu className="w-8 h-8 text-gold" />;
    }
  };

  return (
    <section id="nosotros" className="relative py-20 bg-black/95">
      {/* Absolute dark visual elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-dark/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase block mb-3">CONOCENOS</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            ¿Por qué elegir <span className="gold-text-gradient">BlackCell</span>?
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
            Somos especialistas en reparación avanzada de celulares, brindando soluciones técnicas de calidad profesional para equipos Android e iPhone. Nuestro compromiso es ofrecer diagnósticos precisos, reparaciones confiables y atención personalizada para cada cliente.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-gray/60 p-8 rounded-xl border border-white/5 transition-all duration-300 group hover:bg-black hover:border-gold/30 gold-border-glow flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300 border border-white/5 group-hover:border-gold/20 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getIcon(pillar.iconName)}
                  </motion.div>
                </div>

                <h3 className="font-display text-lg font-bold tracking-wider text-white mb-3 group-hover:text-gold transition-colors duration-300 uppercase">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              {/* Little visual gold corner line on hover */}
              <div className="w-0 h-[2px] bg-gold mt-6 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
