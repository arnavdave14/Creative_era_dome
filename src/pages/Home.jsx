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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    if (index !== null) {
      setExpandedCard(index);
      document.body.style.overflow = 'hidden';
    } else {
      setExpandedCard(null);
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
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

      // 2. Master Scroll Timeline (Horizontal Panning)
      const masterTl = gsap.timeline({
        scrollTrigger: {
          id: 'masterScroll',
          trigger: '.pin-wrapper',
          start: 'top top',
          end: () => `+=${window.innerWidth * 3}`, // Scroll area for 4 cards
          scrub: 1, 
          pin: true,
          anticipatePin: 1,
        }
      });

      // Fade out the hero elements gracefully before cards enter
      masterTl.to(['.hero-text-top-scroll', '.hero-text-bottom-scroll', '.hero-bg', '.marquee-container'], { 
        autoAlpha: 0, ease: 'none', duration: 1 
      }, 0);

      const cards = gsap.utils.toArray('.story-card');
      
      let currentTime = 1; // Start sequence after hero fade out

      cards.forEach((card, i) => {
        // If it's the first card, we need to pan it in from 100vw (after hero fades)
        if (i === 0) {
          masterTl.to(cards, {
            x: "-=100vw", 
            ease: "power2.inOut",
            duration: 2
          }, currentTime);
          
          masterTl.to('.bg-marquee-text', { x: "-=20vw", ease: "power2.inOut", duration: 2 }, currentTime);
          
          cards.forEach(c => {
            const cardBg = c.querySelector('.card-bg');
            masterTl.to(cardBg, { xPercent: 20, ease: "power2.inOut", duration: 2 }, currentTime);
          });

          currentTime += 2;
        } else {
          // Subsequent cards pan in from dynamic spacing
          masterTl.to(cards, {
            x: isMobile ? "-=95vw" : "-=45vw",
            ease: "power2.inOut",
            duration: 1.5
          }, currentTime);
          
          masterTl.to('.bg-marquee-text', { x: "-=15vw", ease: "power2.inOut", duration: 1.5 }, currentTime);
          
          cards.forEach(c => {
            const cardBg = c.querySelector('.card-bg');
            masterTl.to(cardBg, { xPercent: 15, ease: "power2.inOut", duration: 1.5 }, currentTime);
          });

          currentTime += 1.5;
        }

        // Add label for Navigation
        masterTl.addLabel(`expand-${sections[i].id}`, currentTime);
      });
      
    }, containerRef); // Scope everything to the container

    return () => ctx.revert(); // Cleanup GSAP instances on unmount
  }, [isMobile]);

  return (
    <div className="w-full bg-brand-black transition-colors duration-300">
      <CinematicIntro 
        preTitle="P A R A D I S E"
        title="CARIBE"
        descTitle="ENDLESS BLUE HORIZONS"
        descText="Turquoise waters, white sand beaches and warm tropical skies create the perfect destination for unforgettable luxury experiences and relaxation."
        indexStr="01_05"
        bgImage="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2670&auto=format&fit=crop"
      />
      <div ref={containerRef} className="w-full relative">
      
        {/* Cinematic Ambient Background for the horizontal scroll section */}
        <AmbientBackground />

        <div className="pin-wrapper h-screen w-full relative flex items-center justify-center overflow-hidden">
          
          {/* ----------------------------------------------------
              Hero State
              ---------------------------------------------------- */}
          <CrossedMarquee />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none pt-12">
            
            <div className="relative hero-text-top-scroll w-full flex justify-center">
              {/* Outer container uses mix-blend-screen to make the pure black background transparent against the app theme */}
              <div className="hero-text-top-intro w-full max-w-[90vw] mx-auto flex justify-center items-center h-[16vw] relative z-20 bg-black mix-blend-screen overflow-hidden rounded-[2rem]">
                
                {/* Ultra-performant CSS-only Video Text Cutout */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/Creative_Era.mp4" type="video/mp4" />
                </video>
                
                {/* Inner mask uses mix-blend-multiply (Black hides video, White shows video) */}
                <div className="absolute inset-0 bg-black flex items-center justify-center mix-blend-multiply pointer-events-none">
                  <span className="text-white font-drose text-[15vw] leading-none" style={{ letterSpacing: '-0.02em' }}>
                    CREATIVE
                  </span>
                </div>
                
                <div className="absolute top-[20%] right-[15%] w-4 h-4 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(255,94,0,0.6)]" />
              </div>
            </div>

            <div className="hero-text-bottom-scroll -mt-[6vw] relative z-30 w-full flex justify-center">
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
              <div className="bg-marquee-text whitespace-nowrap font-drose text-[35vw] leading-none text-brand-cream absolute left-0" style={{ transform: 'translateX(10vw)' }}>
                CREATIVE ERA — LUXURY EVENTS — UNFORGETTABLE EXPERIENCES — 
              </div>
            </div>

            {sections.map((sec, i) => (
              <div 
                key={sec.id} 
                className="story-card absolute top-1/2 left-1/2 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/5 flex items-center justify-center bg-brand-black pointer-events-auto will-change-transform transform-gpu cursor-pointer hover:scale-[1.02] transition-transform duration-500"
                style={{ 
                  width: isMobile ? '85vw' : '35vw', 
                  height: isMobile ? '70dvh' : '60dvh', 
                  borderRadius: '2rem',
                  transform: `translate(-50%, -50%)`, 
                  marginLeft: `${100 + ((isMobile ? 95 : 45) * i)}vw` // Card 0 starts at 100vw, subsequent cards follow tightly
                }}
                onClick={() => toggleCard(i)}
              >
                {/* Parallax Background Wrapper */}
                <div className="card-bg-wrapper absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
                  <img src={sec.bg} className="card-bg absolute top-0 w-[140%] h-full object-cover" style={{ left: '-20%' }} alt={sec.id} />
                  <div className="absolute inset-0 bg-brand-black/30 transition-colors duration-300" />
                </div>
                
                {/* Horizontal State Title (Cinematic Poster Layout) */}
                <div className="absolute inset-0 z-10 flex flex-col p-6 md:p-12 text-brand-cream overflow-hidden pointer-events-none">
                  
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
                    <div className="max-w-[200px] md:max-w-xs hidden sm:block">
                      <h3 className="font-inter font-semibold text-[10px] md:text-xs tracking-widest uppercase mb-3 md:mb-4">{sec.descTitle}</h3>
                      <p className="font-inter text-[10px] md:text-xs leading-relaxed opacity-80">
                        {sec.desc}
                      </p>
                    </div>

                    {/* Center Scroll Indication */}
                    <div className="flex flex-col items-center opacity-60 absolute left-1/2 -translate-x-1/2 bottom-0">
                      <span className="font-inter text-[8px] md:text-[10px] tracking-widest uppercase mb-3 text-brand-cream">Scroll</span>
                      <div className="w-[1px] h-8 md:h-12 bg-brand-cream/50" />
                    </div>

                    {/* Right Number */}
                    <div className="flex items-end gap-2 md:gap-4 font-drose">
                      <span className="text-5xl md:text-8xl leading-none">{sec.number}</span>
                      <span className="text-lg md:text-3xl leading-none opacity-50 mb-1 md:mb-2">_ 04</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
      
      {/* Footer revealed after pinned horizontal scrolling ends */}
      <Footer />

      {/* Expanded Card Overlay */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] bg-brand-black flex flex-col ${expandedCard !== null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-8'}`}
      >
        {expandedCard !== null && (
          <>
            <button 
              className="fixed top-6 right-6 md:top-8 md:right-8 z-[110] w-12 h-12 bg-brand-cream/10 backdrop-blur-md rounded-full flex items-center justify-center text-brand-cream hover:bg-brand-orange transition-colors"
              onClick={() => toggleCard(null)}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden">
              {React.createElement(sections[expandedCard].component)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
