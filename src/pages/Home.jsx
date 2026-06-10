import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicIntro from '../components/CinematicIntro';
import CrossedMarquee from '../components/CrossedMarquee';
import AboutUsCard from '../components/Cards/AboutUsCard';
import GalleryCard from '../components/Cards/GalleryCard';
import ProductsCard from '../components/Cards/ProductsCard';
import ContactCard from '../components/Cards/ContactCard';
import AmbientBackground from '../components/AmbientBackground';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

    const sections = [
      { 
        id: 'about', 
        title: 'About', 
        component: AboutUsCard,
        subtitle: 'Our Story', 
        number: '01', 
        descTitle: 'CRAFTING EXPERIENCES',
        desc: 'We design award-winning, immersive events that captivate audiences and leave lasting impressions.',
        bg: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop' 
      },
      { 
        id: 'gallery', 
        title: 'Gallery', 
        component: GalleryCard,
        subtitle: 'Visuals', 
        number: '02', 
        descTitle: 'MODERN SPACES',
        desc: 'A curated collection of our most stunning and visually striking event environments.',
        bg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop' 
      },
      { 
        id: 'products', 
        title: 'Services', 
        component: ProductsCard,
        subtitle: 'Offerings', 
        number: '03', 
        descTitle: 'THE FUTURE OF LISTENING',
        desc: 'Explore our premium suite of event management services and high-end technological integrations.',
        bg: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop' 
      },
      { 
        id: 'contact', 
        title: 'Contact', 
        component: ContactCard,
        subtitle: 'Connect', 
        number: '04', 
        descTitle: 'GET IN TOUCH',
        desc: 'Reach out to our team of experts to begin planning your next extraordinary experience.',
        bg: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop' 
      },
    ];

export default function Home() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(!window.matchMedia('(min-width: 768px)').matches);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(!window.matchMedia('(min-width: 768px)').matches);
      }, 150);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      
      // 1. Initial Hero Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.pin-wrapper',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
      
      tl.fromTo('.hero-text-top-intro', 
        { yPercent: 100, opacity: 0 }, 
        { yPercent: 0, opacity: 1, duration: 1.5, ease: 'power4.out' }
      )
      .fromTo('.hero-text-bottom-intro',
        { yPercent: -100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.5, ease: 'power4.out' },
        "-=1.2"
      )
      .fromTo('.marquee-container',
        { yPercent: 50, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.5, ease: 'power4.out' },
        "-=1.5"
      );

      // 2. Master Scroll Timeline (Horizontal + Fullscreen FLIP expansion)
      const masterTl = gsap.timeline({
        scrollTrigger: {
          id: 'masterScroll',
          trigger: '.pin-wrapper',
          start: 'top top',
          end: '+=16000', // Massive scroll area to fit 4 cards + their vertical content
          scrub: 1, 
          pin: true,
          anticipatePin: 1,
        }
      });

      // Fade out the hero elements gracefully before cards enter
      masterTl.to(['.hero-text-top-scroll', '.hero-bg', '.marquee-fade-target'], { 
        autoAlpha: 0, ease: 'none', duration: 1 
      }, 0);

      // Zoom-in effect for "ERA"
      masterTl.to('.hero-text-bottom-scroll', {
        scale: 40,
        autoAlpha: 0,
        ease: 'power3.in',
        duration: 2
      }, 0);

      const cards = gsap.utils.toArray('.story-card');
      const innerScrolls = gsap.utils.toArray('.card-scroll-wrapper');
      const backgrounds = gsap.utils.toArray('.card-bg');
      const textTitles = gsap.utils.toArray('.card-title');

      // CRITICAL: Set centering via GSAP to prevent it from baking CSS translate(-50%, -50%) into absolute pixels.
      // This ensures centering remains perfectly accurate even when card width dynamically expands to 100%.
      gsap.set(cards, { xPercent: -50, yPercent: -50 });

      let currentTime = 1; // Start sequence after hero fade out

      cards.forEach((card, i) => {
        const innerScroll = innerScrolls[i];
        const bg = backgrounds[i];
        const title = textTitles[i];
        
        // Ensure innerScroll height is available (temporarily un-hide if needed)
        // We know they are rendered, but hidden via GSAP autoAlpha. We can read scrollHeight.
        const scrollDistance = Math.max(0, innerScroll.scrollHeight - window.innerHeight);
        const verticalScrollDuration = scrollDistance > 0 ? (scrollDistance / window.innerHeight) * 2 : 0; 
        
        // Calculate absolute X positions based on index
        const stepWidth = isMobile ? 95 : 45;
        const targetX = -(100 + (stepWidth * i));
        
        // If it's the first card, we need to pan it in from 100vw (after hero fades)
        if (i === 0) {
          masterTl.to(cards, {
            x: `${targetX}vw`, 
            ease: "power2.inOut",
            duration: 2
          }, currentTime);
          
          masterTl.to('.bg-marquee-text', { x: "-20vw", ease: "power2.inOut", duration: 2 }, currentTime);
          
          currentTime += 2;
        } else {
          // Subsequent cards pan in using absolute positions
          masterTl.to(cards, {
            x: `${targetX}vw`,
            ease: "power2.inOut",
            duration: 1.5
          }, currentTime);
          
          const marqueeX = -(20 + (15 * i));
          masterTl.to('.bg-marquee-text', { x: `${marqueeX}vw`, ease: "power2.inOut", duration: 1.5 }, currentTime);
          
          currentTime += 1.5;
        }

        // Add label for Navigation
        masterTl.addLabel(`expand-${sections[i].id}`, currentTime);

        // Bring the expanding card to the absolute front
        masterTl.set(card, { zIndex: 50 }, currentTime);

        // Fade out the poster layout so it doesn't show through transparent gaps on mobile Chrome
        const posterLayout = card.querySelector('.z-10.flex-col');
        if (posterLayout) {
          masterTl.to(posterLayout, { autoAlpha: 0, duration: 0.5 }, currentTime);
        }

        // B. Expand Card to Fullscreen (GSAP FLIP simulation for robust scrub)
        masterTl.to(card, {
          width: '100%',
          height: '100%',
          borderRadius: '0px',
          ease: "power2.inOut",
          duration: 1.5
        }, currentTime);
        
        // Reset background image constraints so it perfectly fills the fullscreen
        masterTl.to(bg, {
          width: '100%',
          left: '0%',
          xPercent: 0,
          ease: "power2.inOut",
          duration: 1.5
        }, currentTime);

        currentTime += 1.5;

        // C. Reveal Vertical Storytelling Content
        masterTl.to(innerScroll, {
          autoAlpha: 1,
          duration: 0.5
        }, currentTime);

        // Animate content titles natively
        const titleReveal = innerScroll.querySelector('.title-reveal');
        if (titleReveal) {
          masterTl.to(titleReveal, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          }, currentTime);
        }

        currentTime += 1;

        // D. Vertical Scroll inside the expanded card
        if (scrollDistance > 0) {
          masterTl.to(innerScroll, {
            y: -scrollDistance,
            ease: "none",
            duration: verticalScrollDuration
          }, currentTime);
          currentTime += verticalScrollDuration;
        }

        // Add a slight pause at the end of the content before closing
        currentTime += 0.5;

        if (i < sections.length - 1) {
          // E. Collapse Card back to Horizontal Gallery State
          masterTl.to(innerScroll, {
            autoAlpha: 0,
            duration: 0.5
          }, currentTime);

          if (posterLayout) {
             masterTl.to(posterLayout, { autoAlpha: 1, duration: 0.5 }, currentTime + 0.5);
          }
          
          const vh60 = window.innerHeight * 0.6;
          const vw45 = window.innerWidth * 0.45;
          const desktopHeight = `${Math.min(vh60, vw45)}px`;

          masterTl.to(card, {
            width: isMobile ? '85vw' : '35vw',
            height: isMobile ? '70vh' : desktopHeight,
            borderRadius: '2rem',
            ease: "power2.inOut",
            duration: 1.5
          }, currentTime);

          // Reset z-index after collapsing
          masterTl.set(card, { zIndex: 10 }, currentTime + 1.5);

          masterTl.to(bg, {
            width: '140%',
            left: '-20%',
            ease: "power2.inOut",
            duration: 1.5
          }, currentTime);
        } else {
          // For the final card (Contact), keep it expanded so the user can interact with it
          // Add buffer time to timeline to allow smooth transition to the footer
          currentTime += 2;
        }

        currentTime += 1.5;
      });
      
    }, containerRef); // Scope everything to the container

    return () => ctx.revert(); // Cleanup GSAP instances on unmount
  }, [isMobile]);

  return (
    <div className="w-full bg-brand-black transition-colors duration-300">
      <CinematicIntro 
        preTitle="C R E A T I V E"
        title="ERA"
        descTitle="LUXURY EVENTS & EXPERIENCES"
        descText="We design award-winning, immersive events that captivate audiences and leave lasting impressions."
        indexStr="01_05"
        bgImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop"
      />
      <div ref={containerRef} className="w-full relative">
      
        {/* Cinematic Ambient Background for the horizontal scroll section */}
        <AmbientBackground />

        <div className="pin-wrapper h-screen w-full relative flex items-center justify-center overflow-hidden">
          
          {/* ----------------------------------------------------
              Hero State
              ---------------------------------------------------- */}
          <div className="marquee-fade-target absolute inset-0 z-0 pointer-events-none">
            <CrossedMarquee />
          </div>
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none pt-12">
            
            <div className="relative hero-text-top-scroll w-full flex justify-center">
              <div className="hero-text-top-intro w-full max-w-[90vw] mx-auto flex justify-center items-center h-[16vw] relative z-20">
                
                {/* SVG Mask strictly cuts the video to the text shape, removing any background box */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <mask id="video-text-mask">
                      <rect width="100%" height="100%" fill="black" />
                      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="font-drose" style={{ fontSize: '15vw', letterSpacing: '-0.02em', fill: 'white' }}>
                        CREATIVE
                      </text>
                    </mask>
                  </defs>
                </svg>
                
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ mask: 'url(#video-text-mask)', WebkitMask: 'url(#video-text-mask)' }}
                >
                  <source src="/Creative_Era.mp4" type="video/mp4" />
                </video>

                <div className="absolute top-[20%] right-[15%] w-4 h-4 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(255,94,0,0.6)]" />
              </div>
            </div>

            <div className="hero-text-bottom-scroll -mt-[6vw] relative z-30 w-full flex justify-center origin-center will-change-transform transform-gpu">
              <div className="hero-text-bottom-intro w-full max-w-[90vw] mx-auto flex justify-center items-center h-[26vw]">
                <h1 className="text-[22vw] font-drose leading-[0.8] tracking-tighter">
                  <span 
                    className="bg-clip-text text-transparent bg-cover bg-center block w-full h-full"
                    style={{ 
                      backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
                      backgroundColor: '#ffffff'
                    }}
                  >
                    ERA
                  </span>
                </h1>
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------
              Cinematic Horizontal -> Fullscreen Expand Layout
              ---------------------------------------------------- */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            
            {/* Massive Background Scrolling Text */}
            <div className="absolute inset-0 z-0 flex items-center overflow-hidden opacity-[0.03] pointer-events-none mix-blend-screen">
              <div className="bg-marquee-text whitespace-nowrap font-drose text-[35vw] leading-none text-brand-cream dark:text-white/20 absolute left-0" style={{ transform: 'translateX(10vw)' }}>
                CREATIVE ERA — LUXURY EVENTS — UNFORGETTABLE EXPERIENCES — 
              </div>
            </div>

            {sections.map((sec, i) => {
              const vh60 = typeof window !== 'undefined' ? window.innerHeight * 0.6 : 0;
              const vw45 = typeof window !== 'undefined' ? window.innerWidth * 0.45 : 0;
              const desktopHeight = `${Math.min(vh60, vw45)}px`;
              
              return (
              <div 
                key={sec.id} 
                className="story-card absolute top-1/2 left-1/2 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/5 flex items-center justify-center bg-brand-black pointer-events-auto will-change-transform transform-gpu"
                style={{ 
                  width: isMobile ? '85vw' : '35vw', 
                  height: isMobile ? '70vh' : desktopHeight,
                  borderRadius: '2rem',
                  marginLeft: `${100 + ((isMobile ? 95 : 45) * i)}vw` // Card 0 starts at 100vw, subsequent cards follow tightly
                }}
              >
                {/* Parallax Background Wrapper */}
                <div className="card-bg-wrapper absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
                  <img src={sec.bg} className="card-bg absolute top-0 w-[140%] max-w-none h-full object-cover" style={{ left: '-20%' }} alt={sec.id} />
                  <div className="absolute inset-0 bg-brand-black/30 transition-colors duration-300" />
                </div>
                
                {/* Horizontal State Title (Cinematic Poster Layout) */}
                <div className="absolute inset-0 z-10 flex flex-col p-6 md:p-12 text-brand-cream dark:text-white overflow-hidden pointer-events-none">
                  
                  {/* Top center subtitle */}
                  <div className="w-full flex justify-center mt-2 md:mt-4">
                    <span className="font-drose tracking-[0.8em] text-xs md:text-xl uppercase opacity-80">{sec.subtitle}</span>
                  </div>
                  
                  {/* Center massive title */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-8">
                    <h2 
                      className="card-title font-drose text-[8vw] md:text-[6vw] leading-none text-brand-cream opacity-100 uppercase will-change-transform transform-gpu drop-shadow-2xl"
                    >
                      {sec.title}
                    </h2>
                  </div>

                  {/* Bottom layout */}
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex justify-between items-end">
                    {/* Left Description */}
                    <div className="max-w-[140px] md:max-w-[180px] hidden md:block">
                      <h3 className="font-inter font-semibold text-[10px] md:text-xs tracking-widest uppercase mb-3 md:mb-4">{sec.descTitle}</h3>
                      <p className="font-inter text-[10px] md:text-xs leading-relaxed opacity-80">
                        {sec.desc}
                      </p>
                    </div>

                    {/* Center Scroll Indication */}
                    <div className="flex flex-col items-center opacity-60 absolute left-1/2 -translate-x-1/2 bottom-0">
                      <span className="font-inter text-[8px] md:text-[10px] tracking-widest uppercase mb-3 text-brand-cream dark:text-white">Scroll</span>
                      <div className="w-[1px] h-8 md:h-12 bg-brand-cream/50 dark:bg-white/50" />
                    </div>

                    {/* Right Number */}
                    <div className="flex items-end gap-2 md:gap-4 font-drose">
                      <span className="text-5xl md:text-8xl leading-none">{sec.number}</span>
                      <span className="text-lg md:text-3xl leading-none opacity-50 mb-1 md:mb-2">_ 04</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Vertical Content */}
                <sec.component />
              </div>
              );
            })}
          </div>

        </div>

      </div>
      
      {/* Footer revealed after pinned horizontal scrolling ends */}
      <Footer />
    </div>
  );
}
