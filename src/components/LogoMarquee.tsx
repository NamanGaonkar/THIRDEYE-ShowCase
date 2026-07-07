export default function LogoMarquee() {
  const brands = ["Vortex", "Nimbus", "Prysma", "Cirrus", "Kynder", "Halcyn"];

  return (
    <div className="w-full max-w-5xl mx-auto pb-10 mt-auto z-20">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 px-6">
        
        {/* Left Fixed Context */}
        <div className="text-foreground/50 text-xs sm:text-sm font-light leading-snug tracking-wide min-w-[140px] text-center md:text-left">
          Relied on by brands <br className="hidden md:block" /> across the globe
        </div>

        {/* Right Infinite Scrolling Layer */}
        <div className="w-full overflow-hidden relative mask-gradient">
          <div className="flex gap-16 w-max animate-marquee-infinite py-2">
            {/* Double Render for Imperceptible Loop Toggles */}
            {[...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="flex items-center space-x-3 select-none">
                <div className="liquid-glass w-7 h-7 rounded-lg flex items-center justify-center font-general font-bold text-xs text-[#fcd34d]">
                  {brand.charAt(0)}
                </div>
                <span className="text-base font-semibold tracking-wide text-foreground">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%);
        }
      `}</style>
    </div>
  );
}