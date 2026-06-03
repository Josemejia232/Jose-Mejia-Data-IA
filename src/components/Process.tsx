import { motion } from 'motion/react';
import { Target, Lightbulb, Code2 } from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-8 h-8 text-brand-400" />,
    title: "1. Presenta tu Necesidad",
    description: "Analizamos tu modelo de negocio, cuellos de botella y metas estratégicas. Escuchamos tus desafíos para entender exactamente dónde la tecnología puede generar el mayor impacto.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
    title: "2. Propuesta de Alto Valor",
    description: "Diseñamos una arquitectura de solución personalizada. Definimos el stack tecnológico, el modelo de datos y la integración de IA necesaria, proyectando un ROI claro y medible.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-cyan-300" />,
    title: "3. Desarrollo de Solución",
    description: "Construimos e implementamos el producto de forma ágil e iterativa. Integramos la solución en tu ecosistema actual, asegurando adopción y escalabilidad a largo plazo.",
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[var(--color-bg)] border-y border-[var(--color-border)] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">La Ruta del Éxito</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Un marco de trabajo probado para transformar ideas complejas en soluciones tecnológicas robustas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="card-step gap-2 items-center">
                <span className="opacity-80">{step.icon}</span>
                Fase 0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{step.title.split('. ')[1]}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-[1.6]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
