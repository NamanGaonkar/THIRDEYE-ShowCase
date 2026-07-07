import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let opacity = 0;
    let fadeDirection: 'in' | 'stable' | 'out' = 'in';
    let animationFrameId: number;
    let isWaiting = false;

    video.currentTime = 0;
    video.style.opacity = "0";

    const updateLoop = () => {
      if (isWaiting) {
        animationFrameId = requestAnimationFrame(updateLoop);
        return;
      }

      const duration = video.duration || 30;
      const time = video.currentTime;

      if (time < 0.5 && fadeDirection === 'in') {
        opacity = time / 0.5;
        if (opacity > 1) opacity = 1;
      } else if (time >= duration - 0.5) {
        fadeDirection = 'out';
        opacity = (duration - time) / 0.5;
        if (opacity < 0) opacity = 0;
      } else {
        fadeDirection = 'stable';
        opacity = 1;
      }

      video.style.opacity = opacity.toString();
      animationFrameId = requestAnimationFrame(updateLoop);
    };

    const handleEnded = () => {
      isWaiting = true;
      video.style.opacity = "0";
      
      setTimeout(() => {
        video.currentTime = 0;
        fadeDirection = 'in';
        opacity = 0;
        isWaiting = false;
        video.play().catch(() => {});
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.play().catch(() => {});
    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-background select-none overflow-hidden w-full max-w-full">
      
      {/* Background HTML5 Core Streamer */}
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0 transition-opacity duration-75"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[984px] h-[40vh] max-h-[527px] opacity-80 bg-gray-950 blur-[40px] sm:blur-[82px] pointer-events-none z-10 rounded-full" />

      <div className="relative w-full flex-1 flex flex-col justify-between z-20 pb-24 md:pb-32">
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-8 md:mt-0">
          <span className="text-[#fcd34d] font-general tracking-[0.2em] text-[9px] sm:text-xs uppercase font-semibold mb-4 sm:mb-6 block">
            NEXT-GEN CROWD SAFETY
          </span>
          
          {/* Fixed: Bumped up mobile text scaling parameters from text-[36px] to text-[52px] */}
          <h1 className="font-general font-normal text-[52px] sm:text-[72px] md:text-[110px] lg:text-[145px] leading-[1.05] sm:leading-[1.02] tracking-[-0.025em] text-transparent bg-clip-text bg-gradient-to-l from-[#6366f1] via-[#a855f7] to-[#fcd34d] select-none uppercase w-full">
            THIRD EYE
          </h1>

          <p className="text-hero-sub text-xs sm:text-base md:text-lg leading-relaxed max-w-3xl mt-6 opacity-90 font-light tracking-wide px-2 sm:px-0">
            Real time crowd monitoring powered by machine learning at the edge. Detect fire, smoke, falls, thermal anomalies, and unattended objects in one project showcase.
          </p>

          {/* Fixed: Embedded custom portfolio metadata label parameters */}
          <div className="mt-8 opacity-40 select-none">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase font-light text-foreground">
              Built by Naman Gaonkar
            </span>
          </div>
        </div>
      </div>

      {/* Downward Smooth Vignette Blend Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 section-fade-divider pointer-events-none z-30" />
    </section>
  );
}