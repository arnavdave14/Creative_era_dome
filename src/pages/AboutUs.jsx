import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicIntro from '../components/CinematicIntro';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Triggers when the top of AboutUs reaches 70% of viewport height
          toggleActions: "play none none none"
        }
      });

      tl.from('.ethos-title', { 
        y: 100, 
        opacity: 0, 
        duration: 1.5, 
        ease: 'power4.out', 
      })
      .from('.ethos-img', { 
        clipPath: 'inset(100% 0 0 0)', 
        duration: 1.5, 
        ease: 'power3.inOut', 
      }, "-=1.2")
      .from('.ethos-text', { 
        y: 20, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: 'power2.out', 
      }, "-=1.0")
      .from('.ethos-service', { 
        x: 30, 
        opacity: 0, 
        duration: 1.2, 
        ease: 'power3.out', 
      }, "-=0.8");

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-[#0d0d0d]">
      <CinematicIntro 
        preTitle="S T O R Y"
        title="ABOUT"
        descTitle="OUR JOURNEY"
        descText="Discover the passion and dedication behind our craft. We build experiences that inspire and connect."
        indexStr="03_05"
        bgImage="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2574&auto=format&fit=crop"
      />
      <div ref={containerRef} className="min-h-screen bg-[#0d0d0d] text-[#f3f0e8] pt-32 pb-24 px-[4vw] overflow-hidden relative z-30 border-t border-white/5">
      
      {/* Top Small Header */}
      <div className="flex justify-between items-center text-xs font-inter opacity-60 mb-8 border-b border-white/10 pb-4">
        <span>About Us Page</span>
      </div>

      {/* Massive Title */}
      <div className="w-full mb-16 overflow-hidden flex justify-center">
        <h1 className="ethos-title text-[15vw] leading-[0.75] font-drose tracking-tighter uppercase whitespace-nowrap">
          OUR ETHOS
        </h1>
      </div>

      {/* Editorial Grid Layout */}
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative">
          
          {/* Column 1: Left Text Block (Pushed to bottom) */}
          <div className="flex flex-col justify-end pt-12 md:pt-[20vw]">
            <p className="ethos-text text-[1.6rem] leading-snug font-drose opacity-90 text-justify">
              We are masters of our craft, revealing our aesthetic integrations for purposeful creative design. Art blends seamlessly to respect and create in practical realms. Our high-readability approaches reverse standard banners into bespoke experiences.
            </p>
          </div>

          {/* Column 2: The Center Portrait Image */}
          <div className="flex justify-center items-start">
            <div className="w-full max-w-[400px] aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop" 
                alt="Portrait" 
                className="ethos-img w-full h-full object-cover grayscale brightness-90 contrast-125"
              />
            </div>
          </div>

          {/* Column 3: Text to the right of the image */}
          <div className="pt-4 md:pt-12">
            <p className="ethos-text text-xl font-drose leading-relaxed opacity-80 text-justify">
              Our team consists of collaborative envelope-pushers, marketing specialists, and strategists coming to lead the charge in the development of tomorrow's concepts. Over alignment comes refinement, ensuring that what we build transcends the ordinary.
            </p>
          </div>

          {/* Column 4: Services Page / "01 BRAND STRATEGY" */}
          <div className="ethos-service flex flex-col pt-4 md:pt-0">
            <span className="text-xs font-inter opacity-60 mb-2">Services Page</span>
            <h2 className="text-[10rem] leading-[0.8] font-drose -ml-2 mb-8">01</h2>
            
            <h3 className="text-4xl font-drose leading-[1.1] tracking-wide mb-6">
              BRAND<br />STRATEGY
            </h3>
            
            {/* Simple arrow element */}
            <div className="mb-12 opacity-60">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            
            {/* White rounded button/logo placeholder matching the reference */}
            <div className="bg-[#f3f0e8] text-[#0d0d0d] px-6 py-3 rounded-2xl w-max flex items-center gap-3 font-inter font-bold text-xs tracking-widest cursor-pointer hover:scale-105 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2z"/>
              </svg>
              BUTTERWHITE
            </div>
          </div>

        </div>
      </div>

      </div>
    </div>
  );
}
