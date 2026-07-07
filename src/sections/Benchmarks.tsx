import { Check } from 'lucide-react';

export default function Benchmarks() {
  const classes = [
    { name: "Fire", precision: "P 69%", recall: "R 66%", score: "67.5%" },
    { name: "Smoke", precision: "P 60%", recall: "R 56%", score: "58.0%" },
    { name: "Person", precision: "P 78%", recall: "R 75%", score: "76.5%" }
  ];

  // Exact target ratio vector calculations for high fidelity progress tracking
  const percentageValue = 63.2;
  const radiusSize = 54; 
  const mathCircumference = 2 * Math.PI * radiusSize;
  const standardStrokeDashoffset = mathCircumference - (percentageValue / 100) * mathCircumference;

  return (
    <section id="benchmarks" className="relative w-full bg-background py-20 sm:py-32 px-4 sm:px-8 md:px-12 border-t border-white/5 z-30">
      
      {/* Background Soft Purple Ambient Base Layer Glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#a855f7]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-10 sm:space-y-12 relative z-10">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/5 pb-6">
          <div>
            <span className="text-[#fcd34d] font-general tracking-[0.25em] text-[10px] sm:text-xs uppercase font-semibold block mb-2">
              SYSTEM MATRIX
            </span>
            <h2 className="font-general text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
              THIRDEYE Benchmarks
            </h2>
            <p className="text-foreground/40 text-[11px] font-mono mt-1">Model layer framework: YOLOv26-nano</p>
          </div>
          <span className="text-foreground/30 text-[10px] font-mono">Generated: May 14, 2026</span>
        </div>

        {/* Bento Data Grid Core Layout Framework with Purple Accent Lighting on Hover */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          
          {/* Rebuilt High-Fidelity Circular Gauge Component */}
          <div className="lg:col-span-4 bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group transition-all duration-300 hover:border-[#a855f7]/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.04)] min-h-[260px] sm:min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#a855f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Unified SVG Vector Rendering Ring using Native Site Palette Tokens */}
              <svg className="w-full h-full transform -rotate-90 select-none pointer-events-none" viewBox="0 0 120 120">
                {/* Background Muted Track */}
                <circle 
                  cx="60" cy="60" r={radiusSize} 
                  className="stroke-white/[0.03] fill-transparent" 
                  strokeWidth="4" 
                />
                {/* Active Progress Segment Matching Deep Violet Color Token */}
                <circle 
                  cx="60" cy="60" r={radiusSize} 
                  className="stroke-[#a855f7] fill-transparent transition-all duration-1000 ease-out" 
                  strokeWidth="4"
                  strokeDasharray={mathCircumference}
                  strokeDashoffset={standardStrokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute text-center z-10">
                <span className="block font-general text-3xl sm:text-4xl font-bold tracking-tight text-foreground group-hover:text-[#a855f7] transition-colors duration-300">
                  63.2%
                </span>
                <span className="block text-[9px] font-mono text-foreground/40 group-hover:text-[#a855f7]/80 uppercase mt-1.5 tracking-widest font-semibold transition-colors duration-300">
                  mAP50
                </span>
              </div>
            </div>
          </div>

          {/* Combined Data Cells with Purple Interactions */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            
            <div className="sm:col-span-2 bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#a855f7]/20">
              <span className="text-foreground/40 text-[10px] font-mono tracking-widest block uppercase">DATASET VOLUME</span>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-bold font-general tracking-tight text-[#fcd34d] block">
                  ≈ 10,432 <span className="text-xs font-light text-foreground/40 ml-1">images</span>
                </span>
              </div>
              <p className="text-foreground/30 text-[11px] font-light">Total annotated training images across environment models.</p>
            </div>

            <div className="bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#a855f7]/20">
              <span className="text-foreground/40 text-[10px] font-mono tracking-widest block uppercase">EPOCHS</span>
              <div className="my-4">
                <span className="text-3xl sm:text-4xl font-bold font-general text-foreground block">30</span>
                <span className="text-xs font-light text-foreground/40 block mt-1">epochs complete</span>
              </div>
            </div>

            <div className="sm:col-span-2 bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 flex flex-col justify-between shadow-2xl min-h-[130px] transition-all duration-300 hover:border-[#a855f7]/20">
              <span className="text-foreground/40 text-[10px] font-mono tracking-widest block uppercase">ARCHITECTURE LAYER</span>
              <div className="mt-4">
                <h4 className="text-lg sm:text-xl font-semibold tracking-wide text-foreground">YOLOv26 Core Architecture</h4>
              </div>
            </div>

            {/* Fixed: Updated label target explicitly map to configuration keys */}
            <div className="bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#a855f7]/20">
              <span className="text-foreground/40 text-[10px] font-mono tracking-widest block uppercase">MAP50</span>
              <div className="mt-4">
                <span className="text-xl sm:text-2xl font-bold text-[#a855f7] block">63.2%</span>
              </div>
            </div>

          </div>

        </div>

        {/* Per-Class Evaluation Section with Scaled Typography handles Mobile viewports */}
        <div className="w-full flex flex-col space-y-4 pt-4">
          <h4 className="font-general text-[11px] uppercase tracking-wider text-foreground/40 font-semibold">Per-Class Performance Metrics</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {classes.map((cls, idx) => (
              <div 
                key={idx} 
                className="bg-[#07060c]/80 border border-white/[0.03] rounded-xl p-5 flex flex-col space-y-3 shadow-xl hover:border-[#a855f7]/30 transition-all duration-300"
              >
                <div className="flex justify-between items-baseline">
                  <span className="font-general text-sm sm:text-base font-medium text-foreground">{cls.name}</span>
                  <span className="text-xs font-mono text-[#fcd34d] font-bold">{cls.score}</span>
                </div>
                <div className="flex items-center space-x-4 text-[11px] font-mono text-foreground/40">
                  <span className="flex items-center"><Check className="w-3 h-3 text-[#6366f1] mr-1" />{cls.precision}</span>
                  <span className="flex items-center"><Check className="w-3 h-3 text-[#a855f7] mr-1" />{cls.recall}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}