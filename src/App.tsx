import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
