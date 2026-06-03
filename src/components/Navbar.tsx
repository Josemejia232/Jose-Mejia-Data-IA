import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, BrainCircuit } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Proceso", href: "#process" },
    { label: "Servicios", href: "#services" },
    { label: "Acerca", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4" : "bg-transparent py-4 border-b border-[var(--color-border)]"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        
        <a href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div>
            <div className="font-bold text-2xl tracking-tighter text-[var(--color-accent)]">JM / AI ENTERPRISE</div>
            <div className="text-xs text-[var(--color-text-secondary)] font-semibold uppercase tracking-[0.1em]">Consultoría Estratégica & Desarrollo IA</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="contact-tag"
          >
            Agendar Llamada
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-[var(--color-text-primary)] py-2 border-b border-[var(--color-border)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
