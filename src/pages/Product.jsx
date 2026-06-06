import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicIntro from '../components/CinematicIntro';

gsap.registerPlugin(ScrollTrigger);

const productsData = [
  {
    id: 1,
    titleLines: ["THE", "FUTURE OF", "LISTENING"],
    desc: "Designed for balanced acoustics and refined noise isolation, letting sound adapt seamlessly to your space.",
    cardText: "ENGINEERED TO DELIVER CLARITY, DEPTH, AND CONTROL.",
    mainImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    titleLines: ["PURE", "SONIC", "PERFECTION"],
    desc: "Immerse yourself in spatial audio with ultra-low latency and breathtaking clarity for true audiophiles.",
    cardText: "CRAFTED FOR THE ULTIMATE AUDIOPHILE EXPERIENCE.",
    mainImage: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    titleLines: ["UNLEASH", "YOUR", "RHYTHM"],
    desc: "Lightweight, sweat-resistant, and built for motion. Your perfect companion for workouts and daily commutes.",
    cardText: "BUILT TO MOVE WITH YOU, EVERY STEP.",
    mainImage: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop"
    ]
  }
];

export default function Product() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Pin the whole viewport section while scrolling down (length - 1) * 100vh
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinRef.current,
        start: 'top top',
        end: `+=${(productsData.length - 1) * 100}%`, // Scroll 200% for 3 slides
        scrub: 1,
      });

      const slides = gsap.utils.toArray('.prod-slide');
      
      // We start at index 0 visible.
      slides.forEach((slide, i) => {
        if (i === 0) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${(i - 1) * window.innerHeight} top`,
            end: () => `top+=${i * window.innerHeight} top`,
            scrub: 1,
          }
        });

        // The new slide wipes up from the bottom with rounded corners turning sharp
        tl.fromTo(slide, 
          { clipPath: 'inset(100% 0 0 0 round 3rem)' },
          { clipPath: 'inset(0% 0 0 0 round 0rem)', ease: 'none' }
        );

        // Parallax effect on the text inside the sliding panel
        const titles = slide.querySelectorAll('.prod-title-line');
        tl.fromTo(titles, 
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out' },
          0.2
        );
      });

      // Entry animation for ONLY the first slide when the page loads
      const firstSlide = slides[0];
      gsap.from(firstSlide.querySelectorAll('.prod-title-line'), { 
        yPercent: 100, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2
      });
      gsap.from(firstSlide.querySelectorAll('.prod-desc'), { opacity: 0, x: -20, duration: 1, delay: 0.6, ease: 'power2.out' });
      gsap.from(firstSlide.querySelectorAll('.prod-btn'), { scale: 0.8, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.8, ease: 'back.out(1.5)' });
      gsap.from(firstSlide.querySelectorAll('.prod-main-img'), { clipPath: 'inset(100% 0 0 0 round 3rem)', duration: 1.5, delay: 0.4, ease: 'power3.inOut' });
      gsap.fromTo(firstSlide.querySelectorAll('.prod-card'), { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: 'power3.out' });
      gsap.fromTo(firstSlide.querySelectorAll('.prod-thumbnail'), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, delay: 1.2, ease: 'back.out(2)' });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-brand-cream">
      <CinematicIntro 
        preTitle="A U D I O"
        title="SONIC"
        descTitle="PURE AUDIO FIDELITY"
        descText="Experience music the way it was meant to be heard with pristine clarity and immersive soundscapes designed for the modern audiophile."
        indexStr="02_05"
        bgImage="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2574&auto=format&fit=crop"
      />
      <div ref={containerRef} className="relative w-full bg-brand-cream" style={{ height: `${productsData.length * 100}vh` }}>
      
      {/* Pinned Viewport Container */}
      <div ref={pinRef} className="h-screen w-full relative overflow-hidden">
        
        {productsData.map((prod, index) => (
          <div 
            key={prod.id} 
            className="prod-slide absolute inset-0 w-full h-full bg-brand-cream text-brand-black/80 pt-28 pb-8 px-[3vw] font-inter flex flex-col md:flex-row gap-6 md:gap-8"
            style={{ 
              zIndex: index, 
              // First slide is fully visible initially, others are hidden at bottom
              clipPath: index === 0 ? 'inset(0% 0 0 0 round 0rem)' : 'inset(100% 0 0 0 round 3rem)' 
            }}
          >
            
            {/* Left Column (40%) */}
            <div className="w-full md:w-[40%] flex flex-col gap-16 h-full">
              
              {/* Top Content */}
              <div className="pt-4">
                <h1 className="text-[12vw] md:text-[5vw] font-drose leading-[1.05] tracking-tight uppercase mb-8 text-brand-black">
                  {prod.titleLines.map((line, i) => (
                    <div key={i} className="overflow-hidden"><span className="block prod-title-line">{line}</span></div>
                  ))}
                </h1>
                
                <div className="flex justify-end mb-12">
                  <p className="prod-desc text-right text-xs md:text-sm font-medium opacity-80 max-w-[280px] leading-relaxed text-brand-black">
                    {prod.desc}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="prod-btn bg-brand-orange text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest hover:bg-[#e65500] transition-colors shadow-lg">
                    EXPLORE COLLECTION
                  </button>
                  <button className="prod-btn w-12 h-12 shrink-0 rounded-full bg-brand-orange text-white flex items-center justify-center hover:bg-[#e65500] transition-colors shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 19L19 5M19 5v10M19 5H9"/></svg>
                  </button>
                </div>
              </div>

              {/* Bottom Feature Card */}
              <div className="prod-card w-full bg-white text-brand-black rounded-[2.5rem] p-6 md:p-8 flex items-center shadow-xl relative overflow-hidden min-h-[30vh] border border-black/5">
                <div className="w-[45%] h-full flex items-center justify-center relative z-10">
                  <img 
                    src={prod.cardImage} 
                    className="w-[120%] h-[120%] object-cover mix-blend-multiply opacity-90 rounded-2xl grayscale contrast-125"
                    alt="Headphones Card" 
                  />
                </div>
                <div className="w-[55%] h-full flex flex-col justify-center items-end text-right pl-4 relative z-10">
                  <p className="text-[1.1rem] md:text-xl font-medium leading-tight mb-6 tracking-tight">
                    {prod.cardText}
                  </p>
                  <button className="border border-brand-black/30 px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest hover:bg-brand-black hover:text-white transition-colors">
                    DISCOVER
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column (60%) */}
            <div className="w-full md:w-[60%] h-[60vh] md:h-[88vh] relative bg-brand-cream rounded-[3rem] overflow-hidden shadow-2xl prod-main-img">
              <img 
                src={prod.mainImage} 
                alt="Main Product" 
                className="w-full h-full object-cover"
              />

              <div className="absolute top-0 right-0 w-[6rem] h-[6rem] bg-brand-cream rounded-bl-[2.5rem] z-10 flex items-start justify-end p-4">
                 <button className="prod-btn w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg absolute top-4 right-4">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 19L19 5M19 5v10M19 5H9"/></svg>
                 </button>
              </div>

              <div className="absolute bottom-0 left-0 w-[5rem] md:w-[6.5rem] h-[16rem] md:h-[22rem] bg-brand-cream rounded-tr-[2.5rem] z-10 flex flex-col justify-center items-center gap-4">
                 {prod.thumbnails.map((thumb, tIndex) => (
                   <div key={tIndex} className="prod-thumbnail w-12 h-12 md:w-14 md:h-14 rounded-full bg-white overflow-hidden border-2 border-brand-cream shadow-sm cursor-pointer hover:scale-110 transition-transform shrink-0">
                      <img src={thumb} className="w-full h-full object-cover mix-blend-multiply" alt={`Thumb ${tIndex+1}`}/>
                   </div>
                 ))}
              </div>
            </div>

          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
