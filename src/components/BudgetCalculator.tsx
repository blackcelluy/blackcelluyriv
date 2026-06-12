import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, 
  Smartphone, 
  Cpu, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

interface BrandOption {
  id: string;
  name: string;
}

interface IssueOption {
  id: string;
  name: string;
  basePrice: string;
  avgTime: string;
  severity: "Baja" | "Media" | "Alta" | "Compleja";
}

export default function BudgetCalculator() {
  const [selectedBrand, setSelectedBrand] = useState<string>("Apple");
  const [modelName, setModelName] = useState<string>("");
  const [selectedIssue, setSelectedIssue] = useState<string>("pantalla");
  const [success, setSuccess] = useState<boolean>(false);

  const brands: BrandOption[] = [
    { id: "Apple", name: "Apple (iPhone)" },
    { id: "Samsung", name: "Samsung" },
    { id: "Xiaomi", name: "Xiaomi" },
    { id: "Motorola", name: "Motorola" },
    { id: "Huawei", name: "Huawei" },
    { id: "Otro", name: "Otro / Multimarcas" }
  ];

  const issues: IssueOption[] = [
    { 
      id: "microsoldadura", 
      name: "Microsoldadura (Falla de Placa)", 
      basePrice: "Desde $1.500", 
      avgTime: "24 a 48 Horas", 
      severity: "Compleja" 
    },
    { 
      id: "pantalla", 
      name: "Cambio de Pantalla", 
      basePrice: "Varía según modelo", 
      avgTime: "1 a 2 Horas", 
      severity: "Media" 
    },
    { 
      id: "bateria", 
      name: "Cambio de Batería", 
      basePrice: "Desde $950", 
      avgTime: "45 a 60 Minutos", 
      severity: "Baja" 
    },
    { 
      id: "pin-carga", 
      name: "Cambio de Pin de Carga", 
      basePrice: "Desde $1.200", 
      avgTime: "1 a 3 Horas", 
      severity: "Media" 
    },
    { 
      id: "software", 
      name: "Problemas de Software/Sistema", 
      basePrice: "Desde $800", 
      avgTime: "2 a 4 Horas", 
      severity: "Baja" 
    },
    { 
      id: "respaldo", 
      name: "Respaldo y Recuperación de Datos", 
      basePrice: "Según volumen", 
      avgTime: "24 a 48 Horas", 
      severity: "Media" 
    },
    { 
      id: "diagnostico", 
      name: "Diagnóstico Técnico Especializado", 
      basePrice: "Sin costo con reparación", 
      avgTime: "1 a 2 Horas", 
      severity: "Baja" 
    }
  ];

  const currentIssueData = issues.find(i => i.id === selectedIssue) || issues[1];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modelName.trim()) {
      alert("Por favor, introduce el modelo de tu teléfono (ej. iPhone 14 Pro Max o Galaxy S23).");
      return;
    }

    // Generate precise custom message
    const brandLabel = selectedBrand;
    const modelText = modelName.trim();
    const issueLabel = currentIssueData.name;
    const basePriceText = currentIssueData.basePrice;
    
    const message = `Hola BlackCell! Me gustaría solicitar un presupuesto técnico para mi equipo.\n\n` +
                    `📱 Marca: ${brandLabel}\n` +
                    `📦 Modelo: ${modelText}\n` +
                    `🔧 Falla: ${issueLabel}\n` +
                    `⏳ Tiempo Estimado: ${currentIssueData.avgTime}\n` +
                    `💵 Precio Base/Referencia: ${basePriceText}\n\n` +
                    `¿Tienen disponibilidad técnica para recibir mi equipo? ¡Gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/59893505350?text=${encodedMessage}`;
    
    window.open(waUrl, "_blank");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case "Baja":
        return "text-green-400 bg-green-500/10 border border-green-500/25";
      case "Media":
        return "text-yellow-400 bg-yellow-500/10 border border-yellow-500/25";
      case "Alta":
        return "text-orange-400 bg-orange-500/10 border border-orange-500/25";
      case "Compleja":
        return "text-red-400 bg-red-500/10 border border-red-500/25";
      default:
        return "text-white bg-white/10";
    }
  };

  return (
    <div id="calculadora" className="bg-dark-gray/60 p-6 md:p-10 rounded-2xl border border-gold/20 relative overflow-hidden backdrop-blur-md">
      
      {/* Decorative inner light glowing rings */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full filter blur-xl pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
          <Calculator className="w-5.5 h-5.5" />
        </div>
        <div>
          <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase text-white tracking-wider">
            Cotizador <span className="gold-text-gradient">Inteligente</span>
          </h3>
          <p className="text-gray-400 text-xs font-light">Calculá una cotización estimada al instante</p>
        </div>
      </div>

      <form onSubmit={handleWhatsAppSend} className="space-y-6">
        
        {/* Device Brand Select */}
        <div>
          <label className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2.5">
            1. Marca del Smartphone
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {brands.map((brand) => (
              <button
                key={brand.id}
                type="button"
                onClick={() => setSelectedBrand(brand.id)}
                className={`py-3.5 px-3 rounded-lg border text-xs font-semibold tracking-wider text-center transition-all ${
                  selectedBrand === brand.id
                    ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black border-transparent font-bold shadow-md shadow-gold/10"
                    : "bg-black/60 border-white/5 text-gray-300 hover:border-gold/30 hover:text-white"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        {/* Device Model Text Input */}
        <div>
          <label htmlFor="device-model-input" className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2.5">
            2. Modelo Específico de tu Teléfono
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold/80">
              <Smartphone className="w-4.5 h-4.5" />
            </div>
            <input
              id="device-model-input"
              type="text"
              required
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              placeholder="Ej. iPhone 14 Pro, Samsung Galaxy S23, Xiaomi Mi 13"
              className="w-full bg-black/65 border border-white/10 hover:border-gold/30 focus:border-gold rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all focus:ring-1 focus:ring-gold"
            />
          </div>
        </div>

        {/* Falla/Issue selection */}
        <div>
          <label htmlFor="device-issue-select" className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2.5">
            3. Reparación a Realizar o Falla Detectada
          </label>
          <div className="relative">
            <select
              id="device-issue-select"
              value={selectedIssue}
              onChange={(e) => setSelectedIssue(e.target.value)}
              className="w-full bg-black/65 border border-white/10 hover:border-gold/30 focus:border-gold rounded-lg px-4 py-3.5 text-sm text-white outline-none appearance-none transition-all focus:ring-1 focus:ring-gold cursor-pointer"
            >
              {issues.map((option) => (
                <option key={option.id} value={option.id} className="bg-dark-gray text-white">
                  {option.name}
                </option>
              ))}
            </select>
            {/* Custom select arrow down icon */}
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gold">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Simulated quote dashboard */}
        <div className="bg-black/80 border border-white/10 rounded-xl p-5 md:p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">REPORTE ESTIMADO DE TRABAJO</span>
            <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-widest ${getSeverityStyle(currentIssueData.severity)}`}>
              Complejidad: {currentIssueData.severity}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-mono">Tiempo de Laboratorio</span>
              <div className="flex items-center gap-1.5 text-white font-medium text-xs md:text-sm">
                <Clock className="w-4.5 h-4.5 text-gold" />
                <span>{currentIssueData.avgTime}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-mono font-bold">Referencia de Costo</span>
              <div className="flex items-center gap-1.5 text-gold font-bold text-xs md:text-sm">
                <CheckCircle className="w-4.5 h-4.5 text-gold" />
                <span>{currentIssueData.basePrice}</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 font-light italic leading-relaxed pt-1 flex gap-1.5">
            <AlertCircle className="w-4 h-4 text-gold flex-shrink-0" />
            <span>*Nota: El precio oficial final se emite de forma gratuita luego de realizar las pruebas físicas correspondientes en el laboratorio de BlackCell.</span>
          </p>
        </div>

        {/* Submit action */}
        <button
          type="submit"
          id="btn-send-calculator-wa"
          className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-semibold uppercase tracking-widest text-xs rounded-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Reservar Prioridad por WhatsApp</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Success visual indicator */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="text-center text-xs text-green-400 font-mono font-bold"
            >
              ✓ Enlace de reserva generado. Abriendo chat de WhatsApp de BlackCell...
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-mono tracking-wider pt-2 border-t border-white/5">
          <ShieldCheck className="w-4 h-4 text-gold/75" />
          <span>SOPORTE DE ALTA PRECISIÓN GARANTIZADO</span>
        </div>

      </form>
    </div>
  );
}
