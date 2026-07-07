export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full z-50 relative bg-transparent">
      <div className="w-full py-5 px-4 sm:px-8 flex items-center justify-between gap-4">
        
        {/* Fixed: Added whitespace-nowrap to lock branding to a single line on mobile */}
        <div className="h-8 flex items-center select-none shrink-0">
          <span className="font-general font-semibold tracking-[0.2em] text-xs sm:text-sm text-foreground whitespace-nowrap">
            THIRD EYE
          </span>
        </div>

        {/* High-Fidelity Containerized Nav Capsules */}
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => scrollToSection('capabilities')}
            className="liquid-glass text-foreground/90 hover:text-white rounded-xl px-3 sm:px-5 py-2 text-[11px] sm:text-xs font-medium tracking-wide cursor-pointer transition-all duration-300 hover:scale-[1.03] border border-white/5 shadow-lg whitespace-nowrap"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('benchmarks')}
            className="liquid-glass text-foreground/90 hover:text-white rounded-xl px-3 sm:px-5 py-2 text-[11px] sm:text-xs font-medium tracking-wide cursor-pointer transition-all duration-300 hover:scale-[1.03] border border-white/5 shadow-lg whitespace-nowrap"
          >
            Benchmarks
          </button>
        </nav>

      </div>
    </header>
  );
}