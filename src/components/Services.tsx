import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Smartphone, 
  BatteryCharging, 
  Zap, 
  Terminal, 
  Save, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  HelpCircle,
  X 
} from "lucide-react";
import { Service } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const servicesList: Service[] = [
    {
      id: "microsoldadura",
      title: "Microsoldadura",
      description: "Reparación avanzada de placas lógicas con microscopio óptico de alta definición.",
      details: "Solucionamos fallas complejas que otros talleres consideran 'irreparables'. Incluye reparación de cortos circuitos, cambio de integrados de carga (Tristar/Hydra), reparación de fallas de retroiluminación (Backlight), reparación de líneas de display interrumpidas, problemas de señal, wi-fi, reconstrucción de pistas rotas y soldadura BGA (reballing).",
      iconName: "Cpu",
      avgTime: "24 a 48 Horas",
      priceEstimate: "Desde $1.500"
    },
    {
      id: "pantalla",
      title: "Cambio de Pantalla",
      description: "Reemplazo profesional de pantallas dañadas con calibración táctil completa.",
      details: "Instalación de repuestos tipo Original u OEM de máxima categoría para conservar la densidad de pixeles, el brillo nítido y la respuesta táctil exacta. Realizamos el traspaso del número de serie para no perder el TrueTone en iPhone y mantenemos el ajuste exacto del marco exterior.",
      iconName: "Smartphone",
      avgTime: "1 a 2 Horas",
      priceEstimate: "Depende modelo (Consulte)"
    },
    {
      id: "bateria",
      title: "Cambio de Batería",
      description: "Recupera la autonomía de fábrica y el máximo rendimiento de tu equipo.",
      details: "Sustitución inmediata con baterías de alta densidad que garantizan la salud al 100%. Calibración de voltaje inicial de carga, protección térmica integrada y traspaso de chip de control en modelos iPhone seleccionados para preservar la medición nativa de salud sin alertas de sistema.",
      iconName: "BatteryCharging",
      avgTime: "45 a 60 Minutos",
      priceEstimate: "Desde $950"
    },
    {
      id: "pin-carga",
      title: "Cambio de Pin de Carga",
      description: "Solución definitiva para fallas de carga lenta, intermitente o sin conexión.",
      details: "Reemplazo del puerto de carga USB-C, Lightning o Micro-USB. Limpieza profunda ultrasónica, resoldadura reforzada sobre placa de anclaje para evitar que vuelva a aflojarse con el conector físico y medición del flujo de corriente de entrada (Amperaje adecuado).",
      iconName: "Zap",
      avgTime: "1 a 3 Horas",
      priceEstimate: "Desde $1.200"
    },
    {
      id: "software",
      title: "Reparación de Software",
      description: "Solución de reinicios constantes, flasheos, cuentas y bloqueos lógicos.",
      details: "Restablecimiento de sistemas colapsados, bucles en logo de inicio (bootloops), reinstalación limpia de iOS y Android sin pérdida de datos cuando es físicamente viable, depuración de logs de fallas de kernel, copias de seguridad de ROMs y reparación de archivos de partición dañada.",
      iconName: "Terminal",
      avgTime: "2 a 4 Horas",
      priceEstimate: "Desde $800"
    },
    {
      id: "respaldo",
      title: "Respaldo de Información",
      description: "Salvaguarda y transferencia de tus fotos, chats, contactos y documentos.",
      details: "Realizamos copias de seguridad completas de tus conversaciones de WhatsApp, galerías de fotos, agendas de contactos y configuraciones. Facilitamos también el traspaso seguro de datos completos entre sistemas Android e iOS al cambiar de dispositivo, garantizando confidencialidad absoluta.",
      iconName: "Save",
      avgTime: "2 a 4 Horas",
      priceEstimate: "Desde $850"
    }
  ];

  const getIcon = (name: string, className = "w-7 h-7 text-gold") => {
    switch (name) {
      case "Cpu":
        return <Cpu className={className} />;
      case "Smartphone":
        return <Smartphone className={className} />;
      case "BatteryCharging":
        return <BatteryCharging className={className} />;
      case "Zap":
        return <Zap className={className} />;
      case "Terminal":
        return <Terminal className={className} />;
      case "Save":
        return <Save className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  const jumpToCalculator = () => {
    const calc = document.querySelector("#calculadora");
    if (calc) {
      calc.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="relative py-24 bg-gradient-to-b from-black to-dark-gray">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase block mb-3">EXCELENCIA TÉCNICA</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Nuestros <span className="gold-text-gradient">Servicios</span>
            </h2>
            <div className="h-0.5 w-16 bg-gold mt-4"></div>
          </div>
          <p className="text-gray-400 text-sm max-w-md font-light">
            Efectuamos reparaciones bajo estándares rigurosos de laboratorio internacional. Haz clic en cualquier tarjeta para ver especificaciones completas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(service)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-black/40 p-8 rounded-xl border border-white/5 cursor-pointer transition-all duration-300 group hover:bg-black hover:border-gold/35 gold-border-glow flex flex-col justify-between h-[300px]"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                    {getIcon(service.iconName, "w-6 h-6 group-hover:scale-110 transition-transform")}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-display text-xl font-bold tracking-wider text-white mt-6 mb-3 uppercase group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-4 text-[11px] text-gray-500 font-mono">
                <Clock className="w-3.5 h-3.5 text-gold/65" />
                <span>Tiempo est.: {service.avgTime}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Feature Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-dark-gray to-black border border-gold/15 p-8 md:p-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full filter blur-xl pointer-events-none"></div>
          <div>
            <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-[9px] tracking-widest uppercase font-semibold mb-4">
              DIAGNÓSTICO AL INSTANTE
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-2 uppercase tracking-wide">
              ¿No sabés exactamente qué tiene tu celular?
            </h3>
            <p className="text-gray-400 text-xs md:text-sm max-w-2xl font-light">
              Utilizá nuestro cotizador interactivo inteligente. Elegí el modelo de tu teléfono, detallá el síntoma o reparación solicitada y obtené un cálculo estimado para enviarnos por WhatsApp y reservar tu prioridad en laboratorio.
            </p>
          </div>
          <button
            onClick={jumpToCalculator}
            className="px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-black uppercase font-bold text-xs tracking-wider rounded-sm shadow-xl active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            Probar Cotizador Digital
          </button>
        </div>

        {/* Modal Overlay / Details Panel for clicked service */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur background */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              ></motion.div>

              {/* Service Specs Modal card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-dark-gray border border-gold/30 rounded-2xl p-6 md:p-10 max-w-2xl w-full z-10 shadow-2xl text-left"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-1.5 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header detail */}
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                    {getIcon(selectedService.iconName, "w-8 h-8")}
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold tracking-widest text-gold uppercase">Servicio Especializado</span>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase text-white mt-1">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-white/10 my-6"></div>

                {/* Specs list */}
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    {selectedService.details}
                  </p>
                  
                  {/* Metadata spec columns */}
                  <div className="grid grid-cols-2 gap-4 bg-black/50 p-4 rounded-xl border border-white/5 my-6 font-mono text-xs">
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider text-[10px]">Tiempo Estimado</p>
                      <p className="text-white font-semibold text-sm mt-1 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gold" /> {selectedService.avgTime}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider text-[10px]">Costo Estimado</p>
                      <p className="text-gold font-semibold text-sm mt-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold-light" /> {selectedService.priceEstimate}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA actions inside Modal */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={`https://wa.me/59893505350?text=Hola%20BlackCell!%20Me%20interesa%20el%20servicio%20de%20${encodeURIComponent(selectedService.title)}.%20¿Me%20podrían%20dar%20más%20información?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-bold uppercase tracking-wider text-xs rounded-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    Consultar por WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      jumpToCalculator();
                    }}
                    className="px-6 py-3.5 bg-transparent border border-white/20 hover:border-gold hover:text-gold text-white font-bold uppercase tracking-wider text-xs rounded-sm transition-all"
                  >
                    Hacer simulación completa
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
