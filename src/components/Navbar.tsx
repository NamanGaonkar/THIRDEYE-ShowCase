export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full z-50 relative bg-transparent">
      <div className="w-full py-5 px-4 sm:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Branding Node */}
        <div className="h-8 flex items-center select-none shrink-0">
          <span className="font-general font-semibold tracking-[0.2em] text-xs sm:text-sm text-foreground whitespace-nowrap">
            THIRD EYE
          </span>
        </div>

        {/* Dynamic Navigation Selectors */}
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
          
          {/* Fixed: Added your customized interactive purple contact button asset link */}
          <a
            href="https://naman-gaonkar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass bg-[#a855f7]/10 hover:bg-[#a855f7]/20 text-white hover:text-white rounded-xl px-3 sm:px-5 py-2 text-[11px] sm:text-xs font-medium tracking-wide cursor-pointer transition-all duration-300 hover:scale-[1.03] border border-[#a855f7]/30 hover:border-[#a855f7]/50 shadow-lg whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}