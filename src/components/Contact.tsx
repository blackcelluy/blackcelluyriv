import React from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  Instagram, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  Truck
} from "lucide-react";
import BudgetCalculator from "./BudgetCalculator";

export default function Contact() {
  const waUrl = "https://wa.me/59893505350?text=Hola%20BlackCell%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20reparaci%C3%B3n.";
  const instaUrl = "https://www.instagram.com/blackcell.uyriv/";

  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-black to-dark-gray">
      {/* Dynamic background lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase block mb-3">CANALES DIRECTOS</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Agendá tu <span className="gold-text-gradient">Servicio</span>
          </h2>
          <div className="h-0.5 w-16 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-300 text-sm font-light leading-relaxed">
            Contactanos directamente para coordinar la entrega en laboratorio o resolver tus consultas en minutos. Respondemos en tiempo récord.
          </p>
        </div>

        {/* 2-Column Split: Contact Details vs Budget Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Premium contact cards and social links */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Main Contact Casing Card */}
            <div className="bg-black/50 border border-white/5 p-8 rounded-2xl space-y-6">
              <h3 className="font-display text-lg font-extrabold text-white tracking-widest uppercase pb-4 border-b border-white/5">
                VÍAS DE SOPORTE CELULAR
              </h3>

              {/* Physical/Delivery Option */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-extrabold text-gold">RECEPCIÓN NACIONAL</h4>
                  <p className="text-gray-300 text-xs mt-1.5 leading-relaxed font-light">
                    Laboratorio especializado ofreciendo soporte en Uruguay. Recibimos equipos de todo el país a través de agencias de envíos rápidas de confianza.
                  </p>
                </div>
              </div>

              {/* WhatsApp details */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-extrabold text-white">WHATSAPP DIRECTO</h4>
                  <p className="text-gray-100 text-sm font-bold mt-1 tracking-wider">093 505 350</p>
                  <p className="text-gray-400 text-xs mt-1 font-light">Uruguay (Soporte oficial móvil)</p>
                </div>
              </div>

              {/* Instagram details */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-extrabold text-white">REDES SOCIALES</h4>
                  <p className="text-gray-100 text-sm mt-1 font-bold">@blackcell.uyriv</p>
                  <p className="text-gray-400 text-xs mt-1 font-light">Seguinos para ver casos reales en historias y publicaciones</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-extrabold text-white">HORARIOS DE ATENCIÓN</h4>
                  <p className="text-gray-300 text-xs mt-1.5 leading-relaxed font-light">
                    Lunes a Viernes de 09:00 a 18:00 hs.<br />
                    Sábados de 10:00 a 13:00 hs.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Luxury Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-whatsapp-contact-page"
                className="flex items-center justify-center gap-2.5 py-4 bg-green-500/10 hover:bg-green-500/20 text-white border border-green-500/30 hover:border-green-500 font-semibold uppercase tracking-wider text-[11px] rounded-lg transition-all"
              >
                {/* Whatsapp SVG */}
                <svg
                  className="w-4 h-4 fill-current text-green-400"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.003 21.1a9.09 9.09 0 01-4.636-1.255l-.332-.196-3.447.904.92-3.361-.215-.342A9.09 9.09 0 012.91 12.01c0-5.02 4.084-9.102 9.103-9.102 5.019 0 9.102 4.082 9.102 9.102 0 5.019-4.083 9.09-9.102 9.09zM12.003 1c-6.079 0-11.012 4.933-11.012 11.011 0 1.944.507 3.844 1.47 5.516L1 24l6.634-1.74a10.957 10.957 0 005.37 1.391c6.078 0 11.011-4.932 11.011-11.01A11.015 11.015 0 0012.003 1z"/>
                </svg>
                <span>Chatear por WhatsApp</span>
              </a>

              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-instagram-contact-page"
                className="flex items-center justify-center gap-2.5 py-4 bg-pink-500/10 hover:bg-pink-500/20 text-white border border-pink-500/30 hover:border-pink-500 font-semibold uppercase tracking-wider text-[11px] rounded-lg transition-all"
              >
                <Instagram className="w-4.5 h-4.5 text-pink-400" />
                <span>Instagram Oficial</span>
                <ExternalLink className="w-3 h-3 text-pink-400/80" />
              </a>
            </div>

            {/* Quality seal badge */}
            <div className="p-6 bg-gradient-to-r from-gold-dark/15 to-transparent rounded-xl border border-gold/10 flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-gold flex-shrink-0" />
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-wider">Laboratorio Seguro ESD</p>
                <p className="text-gray-400 text-[11.5px] mt-1 leading-normal font-light">Todas las intervenciones se realizan bajo rigurosas pautas químicas antiestáticas para evitar daños en procesadores o memorias flash de smartphones.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Diagnostic Calculator */}
          <div className="lg:col-span-7">
            <BudgetCalculator />
          </div>

        </div>

      </div>
    </section>
  );
}
