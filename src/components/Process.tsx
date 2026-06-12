import React from "react";
import { motion } from "motion/react";
import { 
  ClipboardList, 
  Activity, 
  Calculator, 
  Wrench, 
  PackageCheck 
} from "lucide-react";
import { WorkStep } from "../types";

export default function Process() {
  const steps: WorkStep[] = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Recibimos tu equipo en tienda o realizas tu consulta online para registrar antecedentes del celular.",
      iconName: "ClipboardList"
    },
    {
      number: "02",
      title: "Diagnóstico Técnico",
      description: "Sometemos el celular a análisis microscópico para dar con el origen exacto de la falla.",
      iconName: "Activity"
    },
    {
      number: "03",
      title: "Presupuesto",
      description: "Te informamos detalladamente qué componentes reparar y el costo exacto antes de proceder.",
      iconName: "Calculator"
    },
    {
      number: "04",
      title: "Reparación",
      description: "Trabajamos en ambiente controlado de laboratorio utilizando insumos y herramientas de precisión.",
      iconName: "Wrench"
    },
    {
      number: "05",
      title: "Entrega y Garantía",
      description: "Testeo final de 15 puntos de control de calidad y entrega del equipo con garantía técnica escrita.",
      iconName: "PackageCheck"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "ClipboardList":
        return <ClipboardList className="w-6 h-6" />;
      case "Activity":
        return <Activity className="w-6 h-6" />;
      case "Calculator":
        return <Calculator className="w-6 h-6" />;
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
      case "PackageCheck":
        return <PackageCheck className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="proceso" className="relative py-24 bg-black overflow-hidden">
      {/* Decorative vertical/horizontal line background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase block mb-3">CONTRALOR DE PASOS</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Nuestro <span className="gold-text-gradient">Proceso</span> de Trabajo
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Un flujo de trabajo planificado y transparente para asegurar que tu celular sea reparado con precisión quirúrgica, previniendo daños colaterales.
          </p>
        </div>

        {/* Timeline Line Container */}
        <div className="relative mt-12">
          
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[62px] left-8 right-8 h-[2px] bg-gradient-to-r from-gold/10 via-gold/50 to-gold/10 z-0"></div>

          {/* Steps list */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                
                {/* Step circle */}
                <div className="relative mb-6">
                  {/* Glowing halo */}
                  <div className="absolute inset-[-6px] rounded-full bg-gold/0 group-hover:bg-gold/10 border border-gold/0 group-hover:border-gold/30 transition-all duration-300 scale-105"></div>
                  
                  {/* Outer circle casing */}
                  <div className="w-24 h-24 rounded-full bg-dark-gray border border-white/10 flex items-center justify-center text-gold relative z-10 transition-all duration-300 group-hover:border-gold group-hover:text-black group-hover:bg-gradient-to-r group-hover:from-gold-dark group-hover:to-gold shadow-xl">
                    
                    {/* Index tag */}
                    <span className="absolute -top-1 -right-1 bg-black text-gold border border-gold/30 text-[9px] font-mono px-2 py-0.5 rounded-full font-bold group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-colors">
                      {step.number}
                    </span>

                    {getIcon(step.iconName)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-base font-extrabold text-white tracking-widest uppercase mb-3 group-hover:text-gold transition-colors duration-200">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[210px] mx-auto font-light">
                  {step.description}
                </p>

              </motion.div>
            ))}
          </div>

        </div>

        {/* Process Trust badging */}
        <div className="mt-16 text-center text-xs text-gray-500 font-mono tracking-wider flex items-center justify-center gap-2">
          <span>SOPORTE DE CALIDAD OEM</span>
          <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
          <span>TIEMPO RÉCORD</span>
          <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
          <span>HERRAMIENTAS PROFESIONALES</span>
        </div>

      </div>
    </section>
  );
}
