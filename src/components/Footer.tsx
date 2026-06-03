export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[var(--color-text-secondary)] text-sm">
          &copy; {new Date().getFullYear()} José Mejía. AI & Data Solutions.
        </div>
        <div className="flex gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
          Arquitecto | Data Manager | Especialista BI | Product Designer
        </div>
      </div>
    </footer>
  );
}
