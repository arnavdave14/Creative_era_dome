import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicIntro({ preTitle, title, descTitle, descText, indexStr, bgImage }) {
  const containerRef = useRef(null);
  
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Basic entry animation
      gsap.from('.ci-title-char', { 
        yPercent: 120, opacity: 0, duration: 1.5, stagger: 0.05, ease: 'power4.out', delay: 0.2 
      });
      gsap.from('.ci-fade', { 
        opacity: 0, y: 20, duration: 1.5, stagger: 0.15, ease: 'power2.out', delay: 1 
      });

      // Parallax out when scrolling down
      gsap.to('.ci-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      gsap.to('.ci-content', {
        yPercent: 40,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-40 w-full h-screen overflow-hidden bg-brand-black transition-colors duration-300 flex flex-col justify-between pt-32 pb-12 px-8 md:px-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ci-bg scale-[1.15]">
        <img src={bgImage} alt="Intro Background" className="w-full h-full object-cover brightness-[0.7] contrast-125" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 ci-content text-brand-cream dark:text-white">
        
        {/* Pre Title */}
        <p className="text-sm md:text-base tracking-[0.6em] md:tracking-[1em] mb-4 ci-fade uppercase drop-shadow-md">
          {preTitle}
        </p>

        {/* Huge Title */}
        <h1 className="text-[18vw] md:text-[20vw] font-drose leading-[0.75] tracking-tighter text-brand-cream dark:text-white overflow-hidden drop-shadow-2xl">
          {title.split('').map((char, i) => (
            <span key={i} className="inline-block ci-title-char">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

      </div>

      {/* Bottom Footer Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end w-full ci-content text-brand-cream dark:text-white mt-12 gap-8 md:gap-0">
        
        {/* Bottom Left: Description */}
        <div className="max-w-[300px] md:max-w-[400px] ci-fade order-2 md:order-1 text-center md:text-left">
          <h3 className="text-sm md:text-lg font-bold tracking-wider mb-2 uppercase drop-shadow-md">{descTitle}</h3>
          <p className="text-xs md:text-sm leading-relaxed opacity-90 font-light drop-shadow-md">
            {descText}
          </p>
        </div>

        {/* Bottom Center: Scroll Indicator */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bottom-0 flex flex-col items-center ci-fade order-1 md:order-2 w-full md:w-auto">
          <p className="text-[10px] tracking-[0.3em] mb-4 uppercase opacity-80 font-medium">Scroll Down</p>
          <div className="w-7 h-12 border border-brand-cream/40 dark:border-white/40 rounded-full flex justify-center p-2 relative overflow-hidden backdrop-blur-sm shadow-lg">
             <div className="w-1 h-3 bg-brand-cream dark:bg-white rounded-full animate-bounce shadow-[0_0_8px_var(--color-brand-cream)] dark:shadow-[0_0_8px_white]" />
          </div>
        </div>

        {/* Bottom Right: Index */}
        <div className="ci-fade flex items-center md:items-end gap-3 font-light order-3 md:order-3 drop-shadow-md">
           <span className="text-4xl md:text-5xl">{indexStr.split('_')[0]}</span>
           <div className="w-12 h-[1px] bg-brand-cream/50 dark:bg-white/50 md:mb-3" />
           <span className="text-2xl md:text-3xl text-brand-cream/70 dark:text-white/70">{indexStr.split('_')[1]}</span>
        </div>

      </div>
    </div>
  );
}
