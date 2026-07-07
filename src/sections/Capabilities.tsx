import { Eye, Shield, Layers, Cpu } from 'lucide-react';

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative w-full bg-background py-20 sm:py-32 px-4 sm:px-8 md:px-12 border-t border-white/5 z-30">
      
      {/* Background Soft Purple/Blue Accent Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#6366f1]/5 to-[#a855f7]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-10 sm:space-y-12 relative z-10">
        
        <div>
          <span className="text-[#fcd34d] font-general tracking-[0.25em] text-[10px] sm:text-xs uppercase font-semibold block mb-2">
            CAPABILITIES
          </span>
          <h2 className="font-general text-2xl sm:text-4xl font-medium tracking-tight text-foreground">
            Advanced Detection You Can Trust
          </h2>
        </div>

        {/* Responsive Layout Bento Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          
          {/* Box 1: Dual Imaging */}
          <div className="md:col-span-7 bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] relative overflow-hidden group transition-all duration-300 hover:border-white/[0.08] hover:shadow-[0_0_30px_rgba(224,67,27,0.02)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e0431b]/0 blur-3xl rounded-full transition-all duration-500 group-hover:bg-[#e0431b]/5" />
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#6366f1] group-hover:text-[#e0431b] transition-colors duration-300">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-foreground">Dual Imaging</h3>
            </div>
            <p className="text-hero-sub/70 text-xs sm:text-sm leading-relaxed font-light mt-6 max-w-md">
              Normal and thermal cameras provide complete visibility. Detect heat signatures, crowd density, and anomalies in the same live stream seamlessly.
            </p>
          </div>

          {/* Box 2: Multi-Model Pipeline with Dynamic Orange Hover Effect */}
          <div className="md:col-span-5 bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] relative overflow-hidden group transition-all duration-300 hover:border-white/[0.08]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#a855f7] group-hover:text-[#e0431b] transition-colors duration-300">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-foreground">Multi-Model Pipeline</h3>
            </div>
            
            {/* Embedded Micro UI Stack with Dynamic Reactive Hover Accent States */}
            <div className="w-full space-y-2 mt-4 opacity-90 select-none">
              <div className="bg-white/[0.01] border border-white/5 rounded-lg px-4 py-2 text-[11px] text-foreground/50 font-mono transition-all duration-300 group-hover:text-foreground/80 group-hover:bg-white/[0.02]">
                thermal_stream.h264
              </div>
              <div className="bg-white/[0.01] border border-white/5 rounded-lg px-4 py-2 text-[11px] text-foreground/50 font-mono transition-all duration-300 group-hover:text-foreground/80 group-hover:bg-white/[0.02]">
                optical_rgb.mp4
              </div>
              
              {/* Core Reactive Node Component Element */}
              <div className="bg-white/[0.02] border border-white/10 text-foreground/60 group-hover:bg-[#e0431b] group-hover:text-white group-hover:border-transparent rounded-lg px-4 py-2.5 text-[11px] font-mono font-medium tracking-wide transition-all duration-500 shadow-md">
                anomaly_detection_active
              </div>
            </div>
          </div>

          {/* Box 3: Instant Response */}
          <div className="md:col-span-5 bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] relative overflow-hidden group transition-all duration-300 hover:border-white/[0.08]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#fcd34d] group-hover:text-[#e0431b] transition-colors duration-300">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-foreground">Instant Response</h3>
            </div>
            <div className="border-l-2 border-white/20 group-hover:border-[#e0431b] pl-4 my-4 transition-colors duration-500">
              <div className="text-[10px] font-mono text-foreground/40 group-hover:text-[#e0431b] font-bold transition-colors duration-300">EDGE_ALERT [14:02]</div>
              <div className="text-xs sm:text-sm font-light text-foreground/70 mt-1">Thermal signature variance exceeded thresholds across Sector B.</div>
            </div>
            <p className="text-foreground/30 text-[10px] sm:text-xs font-light">Edge AI triggers automated alert frames in milliseconds.</p>
          </div>

          {/* Box 4: Smart Logging Integration */}
          <div className="md:col-span-7 bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[280px] relative overflow-hidden group transition-all duration-300 hover:border-white/[0.08]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-[#6366f1] group-hover:text-[#e0431b] transition-colors duration-300">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-foreground">Smart Logging Integration</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
              {["Export Evidence", "Pattern Parsing", "Live Map Sync", "Compliance Logs", "Telemetry Cache", "API Dispatch"].map((tool) => (
                <div key={tool} className="bg-white/[0.01] border border-white/[0.04] hover:bg-[#e0431b]/10 hover:text-white hover:border-[#e0431b]/30 rounded-xl px-2 sm:px-4 py-2.5 text-[11px] text-foreground/70 font-medium transition-all duration-200 text-center select-none cursor-pointer">
                  {tool}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}