import React from "react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    // Show a premium tooltip 3 seconds after load to engage users
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = "https://wa.me/59893505350?text=Hola%20BlackCell%2C%20me%20gustar%C3%ADa%20consultar%20por%20una%20reparaci%C3%B3n.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            className="bg-black/90 text-white text-xs border border-gold/30 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-md max-w-[220px] text-right font-sans relative"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 left-2 text-gray-500 hover:text-white transition-colors text-[10px] font-bold"
            >
              ✕
            </button>
            <p className="text-gold font-medium mb-1 font-display tracking-widest text-[10px]">BLACKCELL SUPPORT</p>
            <p className="text-gray-300 leading-normal">
              ¿Tenés dudas? Escribinos ahora por WhatsApp y te asesoramos.
            </p>
            <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-black border-r border-b border-gold/30 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        id="whatsapp-float-btn"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-black border-2 border-gold text-gold hover:text-white shadow-2xl transition-all duration-300 group overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing visual halo */}
        <span className="absolute inset-0 rounded-full border-2 border-gold/40 animate-ping pointer-events-none scale-105"></span>
        
        {/* Background hover light */}
        <span className="absolute inset-0 bg-gradient-to-tr from-gold-dark via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 relative z-10 fill-current text-gold group-hover:text-black transition-colors duration-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.264 2.267 3.51 5.278 3.51 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.6 1.452 5.4 0 9.8-4.398 9.8-9.8 0-2.6-1.008-5.051-2.828-6.87a9.75 9.75 0 00-6.87-2.87c-5.4 0-9.8 4.4-9.8 9.8 0 1.63.42 3.22 1.22 4.62l-1.01 3.69 3.883-.993zM18.15 14.9c-.34-.17-1.99-.98-2.3-.1-1.12 1.48-1.55 1.62-1.91 1.77-.33.14-.73.06-1.16-.11l-.1-.04c-.65-.25-1.95-.73-3.41-2.03-1.17-1.04-1.96-2.33-2.19-2.73-.23-.42-.02-.64.19-.85l.1-.1c.21-.24.3-.41.45-.69.05-.1.02-.2-.01-.27l-.63-1.52c-.32-.78-.65-.67-.89-.68l-.13-.01c-.26 0-.58.11-.88.42a4.43 4.43 0 00-1.41 3.28c0 2.27 1.61 4.41 1.83 4.72.22.3 3.17 4.98 7.74 6.84 3.42 1.39 4.38 1.21 5.16 1.11.83-.11 1.99-.81 2.27-1.6.28-.79.28-1.47.19-1.6-.08-.13-.31-.22-.65-.39z" />
        </svg>
      </motion.a>
    </div>
  );
}
