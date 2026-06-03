import { motion } from 'motion/react';
import { Database, Building2, BarChart3, LayoutTemplate } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="w-6 h-6 text-[var(--color-accent)]" />,
    title: "Data Analytics & BI",
    description: "Transformación de datos crudos en dashboards interactivos e insights accionables para toma de decisiones gerenciales."
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-[var(--color-accent)]" />,
    title: "AI App Development",
    description: "Diseño y desarrollo de aplicaciones impulsadas por IA local y en la nube para automatizar tareas cognitivas."
  },
  {
    icon: <Building2 className="w-6 h-6 text-[var(--color-accent)]" />,
    title: "Data Management en Construcción",
    description: "Implementación de metodologías de datos, BIM y seguimiento de KPIs para optimizar recursos en grandes proyectos."
  },
  {
    icon: <Database className="w-6 h-6 text-[var(--color-accent)]" />,
    title: "Gerencia Integral de Proyectos",
    description: "Dirección de proyectos tecnológicos y de infraestructura alineando presupuesto, cronograma y expectativas del cliente."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Sectores & Especialidades</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Soluciones transversales diseñadas para resolver los problemas de mayor fricción en la industria moderna.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 text-left transition-transform hover:-translate-y-1"
            >
              <div className="p-3 bg-[var(--color-bg)] rounded-xl w-fit mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-[var(--color-text-primary)]">{service.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-[1.6]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
