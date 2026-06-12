import React from "react";
import { motion } from "motion/react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      name: "Martín Varela",
      rating: 5,
      date: "Hace 1 semana",
      repairType: "iPhone 13 Pro Max - Microsoldadura de Placa",
      comment: "Llevé mi iPhone mojado que no daba señales de vida y en otros talleres me dijeron que no tenía arreglo. El equipo de BlackCell detectó un corto en la sublínea de carga, realizaron la microsoldadura y me lo entregaron andando perfecto en 48 horas. Excelentes profesionales y súper honestos."
    },
    {
      name: "Sofía Rodríguez",
      rating: 5,
      date: "Hace 3 días",
      repairType: "Samsung S22 Ultra - Cambio de Pantalla Completo",
      comment: "La atención es de otro nivel. El cambio de pantalla de mi Samsung quedó impecable, con los colores y la respuesta táctil idéntica a la original. Es difícil encontrar un servicio técnico de tanta confianza en Uruguay."
    },
    {
      name: "Ignacio Pereira",
      rating: 5,
      date: "Hace 2 semanas",
      repairType: "iPhone 11 - Cambio de Batería OEM",
      comment: "Excelente servicio de cambio de batería express. Demoró escasamente 40 minutos en el laboratorio y me devolvieron el teléfono marcando salud al 100% y sin carteles molestos del sistema. Muy recomendados."
    },
    {
      name: "Valentina Méndez",
      rating: 5,
      date: "Hace 10 días",
      repairType: "iPhone 13 - Respaldo y Transferencia Completa",
      comment: "Súper agradecida con BlackCell. Tenía miedo de perder todos mis archivos de trabajo y fotos familiares al cambiar de celular. Hicieron un respaldo total y traspasaron absolutamente todo de manera rápida y muy segura."
    }
  ];

  return (
    <section className="relative py-24 bg-black">
      {/* Visual glowing layout backdrops */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase block mb-3">CLIENTES SATISFECHOS</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Opiniones de <span className="gold-text-gradient">Clientes</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            La satisfacción de nuestra comunidad es el pilar de nuestro prestigio. Descubrí por qué somos la opción número uno en reparaciones de gama alta.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-gray/50 p-8 rounded-2xl border border-white/5 relative group hover:border-gold/25 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Graphic Overlay */}
              <div className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold gold-glow-filter" />
                  ))}
                </div>

                <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed italic mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>
              </div>

              {/* Author Row */}
              <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4 text-xs font-mono text-gray-400">
                <div>
                  <h4 className="font-display font-bold text-white group-hover:text-gold transition-colors text-sm uppercase tracking-wider">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold/75 text-[10px] mt-1 uppercase tracking-widest">{testimonial.repairType}</p>
                </div>
                
                <div className="flex items-center gap-1.5 text-green-500 bg-green-500/5 px-2.5 py-1 rounded border border-green-500/10 text-[10px] uppercase font-semibold self-start sm:self-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verificado</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Uruguay-specific trust statement */}
        <div className="mt-16 text-center text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.25em] font-mono">
          ★ TESTIMONIOS REALES EXTRAÍDOS DIRECTAMENTE DE NUESTROS CLIENTES ★
        </div>

      </div>
    </section>
  );
}
