import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--color-bg)]">
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Potenciemos tu Negocio</h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            Da el primer paso hacia la integración de Inteligencia Artificial en tus procesos empresariales. 
            Contáctame para agendar una consultoría de evaluación estratégica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 grid md:grid-cols-3 gap-6"
          >
            <div className="glass-panel p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center flex-shrink-0 text-[var(--color-accent)] mb-2">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">Móvil (WhatsApp)</p>
                <a href="tel:+573246225685" className="text-[var(--color-text-primary)] text-lg font-medium hover:text-[var(--color-accent)] transition-colors">
                  +57 324 622 5685
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center flex-shrink-0 text-[var(--color-accent)] mb-2">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">Email</p>
                <a href="mailto:josemejia.data@gmail.com" className="text-[var(--color-text-primary)] text-lg font-medium hover:text-[var(--color-accent)] transition-colors break-all">
                  josemejia.data@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center flex-shrink-0 text-[var(--color-accent)] mb-2">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">Ubicación</p>
                <p className="text-[var(--color-text-primary)] text-lg font-medium">
                  Bogotá D.C - Colombia
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
