import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  "Arquitectura de Soluciones",
  "Gerencia Integral de Proyectos",
  "Data Manager Construction",
  "Data Analysis",
  "Business Intelligence",
  "Product Design",
  "AI App Development"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-bg)] border-y border-[var(--color-border)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="glass-panel p-8 relative rounded-2xl aspect-square flex flex-col justify-center items-center bg-[var(--color-bg)] text-center">
                <img 
                  src="/profile.png" 
                  alt="José Mejía" 
                  className="w-40 h-40 rounded-full object-cover shadow-2xl mb-6 border-4 border-[var(--color-surface)]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const icon = document.createElement('div');
                      icon.className = 'w-20 h-20 text-[var(--color-text-secondary)] mb-6 flex items-center justify-center';
                      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
                      parent.insertBefore(icon, parent.firstChild);
                    }
                  }}
                />
                <h3 className="text-2xl font-bold text-center text-[var(--color-text-primary)] mb-2">Visión de Experto</h3>
                <p className="text-center text-[var(--color-text-secondary)] text-sm italic">
                  "Conecto el rigor del mundo físico y la construcción con el potencial ilimitado de los datos y la IA."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium mb-4">
              <span className="w-8 h-px bg-[var(--color-accent)]" />
              Acerca de mí
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">José Mejía</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              Profesional multidisciplinario apasionado por la innovación técnica. Mi formación como Arquitecto combinada con mi experiencia en datos, desarrollo de ecosistemas de BI y aplicaciones con IA, me permite orquestar soluciones que resuelven problemas del mundo real.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-[var(--color-text-primary)]">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
