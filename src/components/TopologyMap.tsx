import { Camera, Cpu, Terminal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopologyMap() {
  const steps = [
    {
      id: "sensors",
      title: "Data Acquisition",
      subtitle: "Dual Camera Nodes",
      icon: <Camera className="w-5 h-5 text-[#fcd34d]" />,
      details: ["Thermal IR Sensor (LWIR)", "Optical RGB Sensor"],
      glowColor: "group-hover:bg-[#fcd34d]/5",
      borderColor: "group-hover:border-[#fcd34d]/30"
    },
    {
      id: "edge",
      title: "Edge Core Engine",
      subtitle: "Raspberry Pi 5 + AI NPU",
      icon: <Cpu className="w-5 h-5 text-[#a855f7]" />,
      details: ["YOLOv26 Model Layer", "Local Hardware Inference"],
      glowColor: "group-hover:bg-[#a855f7]/5",
      borderColor: "group-hover:border-[#a855f7]/30"
    },
    {
      id: "portal",
      title: "Presentation Space",
      subtitle: "Third Eye Central UI",
      icon: <Terminal className="w-5 h-5 text-[#6366f1]" />,
      details: ["Real-time Dashboard", "Instant Threat Alerts"],
      glowColor: "group-hover:bg-[#6366f1]/5",
      borderColor: "group-hover:border-[#6366f1]/30"
    }
  ];

  return (
    <section id="topology" className="relative w-full bg-background py-16 px-4 sm:px-8 md:px-12 border-t border-white/5 z-30 overflow-hidden">
      
      {/* Background Micro Ambient Accent Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-10 relative z-10">
        
        <div>
          <span className="text-[#a855f7] font-general tracking-[0.25em] text-[10px] sm:text-xs uppercase font-semibold block mb-2">
            HARDWARE TOPOLOGY MAP
          </span>
          <h2 className="font-general text-2xl sm:text-4xl font-medium tracking-tight text-foreground">
            System Infrastructure & Computing Architecture
          </h2>
          <p className="text-foreground/40 text-xs sm:text-sm mt-2 font-light max-w-2xl">
            Tracing network packets from remote multi-spectral edge nodes into specialized local neural accelerator cores down to client views.
          </p>
        </div>

        {/* Master Flowchart Container Box */}
        <div className="bg-[#07060c]/80 border border-white/[0.03] rounded-2xl p-6 sm:p-10 shadow-2xl relative w-full overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative w-full">
            
            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col lg:flex-row items-center w-full lg:w-auto relative group">
                
                {/* Individual Architecture Node Box */}
                <div className={`w-full lg:w-[260px] bg-black/40 border border-white/[0.04] rounded-xl p-5 relative overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] ${step.borderColor} cursor-pointer shadow-lg`}>
                  <div className={`absolute inset-0 transition-all duration-500 bg-transparent ${step.glowColor}`} />
                  
                  <div className="flex items-center space-x-3 relative z-10">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-wider text-foreground/40 uppercase">{step.title}</span>
                      <h4 className="text-sm font-medium text-foreground mt-0.5">{step.subtitle}</h4>
                    </div>
                  </div>

                  {/* Micro Specs List */}
                  <div className="mt-4 pt-3 border-t border-white/[0.03] space-y-1.5 relative z-10">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-[11px] font-mono text-foreground/50">
                        <div className="w-1 h-1 rounded-full bg-[#a855f7]/60" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pulsing Inter-Node Wire Connector Line Block */}
                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center my-4 lg:my-0 lg:mx-6 rotate-90 lg:rotate-0 select-none pointer-events-none">
                    <div className="relative w-12 h-0.5 bg-white/[0.05] flex items-center">
                      {/* Animated Moving Telemetry Packet Glow */}
                      <motion.div 
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute w-3 h-[2px] bg-gradient-to-r from-transparent via-[#a855f7] to-transparent shadow-[0_0_8px_#a855f7]"
                      />
                      <ArrowRight className="absolute -right-2.5 w-3 h-3 text-white/10 hidden lg:block" />
                    </div>
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}