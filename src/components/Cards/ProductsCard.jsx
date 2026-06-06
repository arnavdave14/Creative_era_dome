import React, { useState, useRef } from 'react';

export default function ProductsCard() {
  const products = [
    {
      title: ['THE', 'FUTURE OF', 'LISTENING'],
      desc: 'Designed for balanced acoustics and refined noise isolation, letting sound adapt seamlessly to your space.',
      heroImg: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2400&auto=format&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: ['PURE', 'SONIC', 'PERFECTION'],
      desc: 'High-fidelity audio drivers engineered for studio-grade mixing and audiophile listening.',
      heroImg: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2400&auto=format&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: ['WIRELESS', 'ULTIMATE', 'FREEDOM'],
      desc: 'Ultralight design with massive battery life. Experience your music without boundaries.',
      heroImg: 'https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=2400&auto=format&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: ['IMMERSIVE', 'SOUND', 'ANYWHERE'],
      desc: 'True wireless earbuds engineered with active noise cancellation and a precision-tuned acoustic architecture.',
      heroImg: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2400&auto=format&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=400&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: ['ROOM', 'FILLING', 'ACOUSTICS'],
      desc: 'Architectural speakers that blend seamlessly into your home while delivering powerful, distortion-free bass.',
      heroImg: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2400&auto=format&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: ['CRAFTED', 'FOR', 'AUDIOPHILES'],
      desc: 'Hand-tuned drivers paired with memory foam ear cushions for the ultimate extended listening sessions.',
      heroImg: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2400&auto=format&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop',
      bottomImg: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const throttleRef = useRef(false);

  // Intercept scroll wheel to change products smoothly
  const handleWheel = (e) => {
    // Only hijack scroll if we are actively wheeling vertically over the card
    if (Math.abs(e.deltaY) > 20 && !throttleRef.current) {
      if (e.deltaY > 0 && activeIdx < products.length - 1) {
        e.stopPropagation();
        setActiveIdx(p => p + 1);
        throttleRef.current = true;
        setTimeout(() => throttleRef.current = false, 1200);
      } else if (e.deltaY < 0 && activeIdx > 0) {
        e.stopPropagation();
        setActiveIdx(p => p - 1);
        throttleRef.current = true;
        setTimeout(() => throttleRef.current = false, 1200);
      }
    }
  };

  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientY;
    const distance = touchStart - touchEnd;
    
    if (Math.abs(distance) > 50 && !throttleRef.current) {
      if (distance > 0 && activeIdx < products.length - 1) { // Swipe up
        setActiveIdx(p => p + 1);
        throttleRef.current = true;
        setTimeout(() => throttleRef.current = false, 1200);
      } else if (distance < 0 && activeIdx > 0) { // Swipe down
        setActiveIdx(p => p - 1);
        throttleRef.current = true;
        setTimeout(() => throttleRef.current = false, 1200);
      }
    }
    setTouchStart(null);
  };

  return (
    <div className="card-scroll-wrapper absolute top-0 left-0 w-full opacity-0 invisible z-20" style={{ height: '200vh' }}>
      
      {/* Spacer for Intro Page */}
      <div className="w-full h-screen pointer-events-none" />

      {/* Actual Content */}
      <div 
        className="w-full h-screen bg-brand-black text-brand-cream transition-colors duration-300 p-4 md:p-8 flex flex-col md:flex-row gap-6 relative shadow-[0_-30px_60px_rgba(0,0,0,0.5)] z-30 overflow-hidden"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Left Column */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-between pt-10 pb-4 relative z-30 pointer-events-none">
          
          {/* Top Text & Desc - Crossfading Wrapper */}
          <div className="relative w-full flex-1 md:h-[50vh] min-h-0 mb-4 md:mb-0">
            {products.map((p, idx) => (
              <div 
                key={`text-${idx}`} 
                className={`absolute top-0 left-0 w-full flex flex-col transition-opacity duration-1000 ease-in-out ${activeIdx === idx ? 'opacity-100' : 'opacity-0'}`}
              >
                 <div className="flex flex-col gap-2">
                   <h2 className="font-sans font-light text-[11vw] md:text-[5.5vw] leading-[1.0] tracking-tight uppercase text-brand-cream transition-colors duration-300" style={{ transform: 'scaleX(1.3)', transformOrigin: 'left' }}>
                     {p.title[0]}
                   </h2>
                   <h2 className="font-sans font-light text-[11vw] md:text-[5.5vw] leading-[1.0] tracking-tight uppercase text-brand-cream transition-colors duration-300" style={{ transform: 'scaleX(1.3)', transformOrigin: 'left' }}>
                     {p.title[1]}
                   </h2>
                   <h2 className="font-sans font-light text-[11vw] md:text-[5.5vw] leading-[1.0] tracking-tight uppercase text-brand-cream transition-colors duration-300" style={{ transform: 'scaleX(1.3)', transformOrigin: 'left' }}>
                     {p.title[2]}
                   </h2>
                 </div>

                 <div className="flex justify-start md:ml-[15%] mt-8">
                   <p className="text-xs md:text-sm text-brand-cream/50 transition-colors duration-300 text-left max-w-[280px] font-light leading-relaxed">
                     {p.desc}
                   </p>
                 </div>
              </div>
            ))}
            
            {/* Buttons (Static layer over the crossfading text) */}
            <div className="absolute bottom-0 left-0 mt-8 flex items-center gap-4 pointer-events-auto">
              <button className="bg-[#A8D0CE] text-brand-black font-bold text-[10px] md:text-[11px] tracking-[0.2em] px-8 py-4 rounded-full uppercase hover:bg-brand-cream transition-colors duration-300">
                Explore Collection
              </button>
              <button className="w-12 h-12 rounded-full bg-[#A8D0CE] flex items-center justify-center text-brand-black hover:bg-brand-cream transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Left Small Product Box */}
          <div className="w-full h-[35vh] md:h-[32vh] shrink-0 bg-brand-cream transition-colors duration-300 rounded-[3rem] p-4 md:p-6 flex text-brand-black relative overflow-hidden group shadow-2xl pointer-events-auto">
            <div className="w-[55%] h-full relative">
               {/* Crossfading images inside small box */}
               {products.map((p, idx) => (
                 <img 
                   key={`bl-${idx}`} 
                   src={p.bottomImg} 
                   className={`absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-inner transition-opacity duration-1000 ease-in-out ${activeIdx === idx ? 'opacity-100' : 'opacity-0'}`} 
                   alt="Product Detail"
                 />
               ))}
            </div>
            <div className="w-[45%] flex flex-col justify-center items-end text-right z-10 pl-4">
               <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 max-w-[180px] leading-relaxed text-brand-black transition-colors duration-300">
                 ENGINEERED TO DELIVER CLARITY, DEPTH, AND CONTROL.
               </p>
               <button className="border border-brand-black/30 rounded-full px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-brand-black hover:text-brand-cream transition-all duration-300">
                 Discover
               </button>
            </div>
          </div>

        </div>

        {/* Right Column - Massive Image with Cutouts */}
        <div className="hidden md:block w-[55%] h-full relative z-10">
          
          {/* Main Image Base - Crossfading layer */}
          <div className="w-full h-full rounded-[3rem] overflow-hidden relative bg-brand-black transition-colors duration-300 shadow-2xl pointer-events-auto">
             {products.map((p, idx) => (
               <img 
                 key={`hero-${idx}`} 
                 src={p.heroImg} 
                 alt="Hero" 
                 className={`absolute inset-0 w-full h-full object-cover transition-all duration-1200 ease-in-out ${activeIdx === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} 
               />
             ))}
             {/* Subtle gradient overlay to match reference lighting */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/30 via-transparent to-transparent pointer-events-none transition-colors duration-300" />
          </div>

          {/* === TOP RIGHT CUTOUT === */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-black transition-colors duration-300 rounded-bl-[2.5rem] z-20 flex items-center justify-center pt-2 pr-2">
             <button className="w-14 h-14 rounded-full bg-[#A8D0CE] flex items-center justify-center text-brand-black hover:bg-brand-cream hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer pointer-events-auto">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                 <path d="M5 12h14M12 5l7 7-7 7"/>
               </svg>
             </button>
          </div>
          {/* Inward curves for Top Right */}
          <div className="absolute top-[96px] right-0 w-8 h-8 bg-transparent rounded-tr-full shadow-[15px_-15px_0_15px_var(--color-brand-black)] transition-colors duration-300 z-20 pointer-events-none" />
          <div className="absolute top-0 right-[96px] w-8 h-8 bg-transparent rounded-tr-full shadow-[15px_-15px_0_15px_var(--color-brand-black)] transition-colors duration-300 z-20 pointer-events-none" />

          {/* === MIDDLE LEFT CUTOUT (Vertical Navigation Pill) === */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-20 h-80 bg-brand-black transition-colors duration-300 rounded-r-[2.5rem] z-20 flex flex-col items-center justify-center pl-2">
             {/* The Pill */}
             <div className="w-14 h-72 bg-brand-black transition-colors duration-300 rounded-full flex flex-col items-center justify-between py-2 shadow-inner pointer-events-auto border border-brand-cream/5">
               {products.map((p, i) => (
                 <div 
                   key={`pill-${i}`} 
                   onClick={() => setActiveIdx(i)} 
                   className={`w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer border-2 transition-all duration-500 ease-out shrink-0 ${i === activeIdx ? 'border-brand-cream shadow-[0_0_15px_var(--color-brand-cream)]' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'}`}
                 >
                    <img src={p.thumb} className="w-full h-full object-cover" alt="thumbnail" />
                 </div>
               ))}
             </div>
          </div>
          {/* Inward curves for Middle Left Cutout */}
          {/* top = 50% - (half of cutout height 160px) - (curve height 32px) */}
          <div className="absolute left-0 w-8 h-8 bg-transparent rounded-bl-full shadow-[-15px_15px_0_15px_var(--color-brand-black)] transition-colors duration-300 z-20 pointer-events-none" style={{ top: 'calc(50% - 192px)' }} />
          <div className="absolute left-0 w-8 h-8 bg-transparent rounded-tl-full shadow-[-15px_-15px_0_15px_var(--color-brand-black)] transition-colors duration-300 z-20 pointer-events-none" style={{ top: 'calc(50% + 160px)' }} />

        </div>
        
      </div>
    </div>
  );
}
