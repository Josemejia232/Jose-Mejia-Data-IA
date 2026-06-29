import { motion } from 'motion/react';
import { ArrowRight, BrainCircuit } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[var(--color-bg)]">
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-accent)] text-sm font-medium mb-8 bg-[rgba(59,130,246,0.05)]">
            <BrainCircuit size={16} />
            <span>Soluciones Empresariales con IA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-gradient">
            Transformamos Complejidad en <br className="hidden md:block" />
            Ventaja Competitiva
          </h1>
          
          <p className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
            Aplicamos Inteligencia de negocio, Analítica de Datos avanzada y diseño de producto para optimizar procesos comerciales y escalar resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-[var(--color-accent)] hover:opacity-90 text-white rounded-full font-medium transition-opacity shadow-lg flex items-center gap-2"
            >
              Iniciar un Proyecto
              <ArrowRight size={18} />
            </a>
            <a 
              href="#process" 
              className="px-8 py-4 bg-[var(--color-surface)] border border-[var(--color-border)] hover:bg-[var(--color-border)] text-white rounded-full font-medium transition-all"
            >
              Conocer el Proceso
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
