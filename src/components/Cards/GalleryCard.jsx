import React, { useState } from 'react';

export default function GalleryCard() {
  const products = [
    { 
      name: 'Corporate Conference', 
      type: 'Corporate Event',
      heading: ['DESIGNED FOR', 'DECISION MAKERS', 'NOT AUDIENCES'],
      desc: 'A large-scale corporate conference engineered to drive business decisions — not just attendance. Designed for alignment, authority, and measurable outcomes.',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      name: 'Brand Activation', 
      type: 'Experiential',
      heading: ['PARTICIPATION', 'ENGINEERED', 'FOR MEMORY'],
      desc: 'A brand activation built to be remembered — interactive, intelligent, and designed so every participant leaves with a direct emotional connection.',
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      name: 'Product Launch', 
      type: 'Launch Event',
      heading: ['THE MOMENT', 'BEFORE THE', 'MARKET KNOWS'],
      desc: 'A product launch experience that transforms a reveal into a story. Staged to create anticipation, deliver impact, and generate coverage.',
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop' 
    },
    {
      name: 'Large-Scale Event',
      type: 'Public Event',
      heading: ['THOUSANDS', 'ONE EXPERIENCE', 'ZERO COMPROMISE'],
      desc: 'Multi-thousand audience events requiring military-grade logistics, multi-vendor coordination, and experience design that holds quality at scale.',
      img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Award Night / Gala',
      type: 'Ceremony',
      heading: ['THE ROOM', 'REMEMBERS', 'EVERYTHING'],
      desc: 'An award night where every visual, lighting state, and moment is calibrated to make the honoured feel honoured — and the audience feel part of something.',
      img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Spiritual Experience',
      type: 'Cultural Event',
      heading: ['DEVOTION', 'DESIGNED', 'WITH PRECISION'],
      desc: 'Spiritual and cultural experiences that honour tradition while engineering the participation, flow, and emotional arc that creates genuine connection.',
      img: 'https://images.unsplash.com/photo-1540036666873-19597793d5f9?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Experience Innovation',
      type: 'CERA LAB™',
      heading: ['AI. ROBOTICS.', 'HUMAN', 'EXPERIENCE'],
      desc: 'Interactive and AI-powered experience assets — Smart Activations™, CUB™ hardware platform, and CERA Hand™ — tested at CERA LAB™.',
      img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="card-scroll-wrapper absolute top-0 left-0 w-full opacity-0 invisible z-20" style={{ height: '200vh' }}>
      
      {/* Spacer for Intro Page */}
      <div className="w-full h-screen pointer-events-none" />

      {/* Actual Content - Hardcoded vh to prevent overflowing screen */}
      <div className="w-full h-screen bg-brand-black text-brand-cream transition-colors duration-300 p-4 md:px-12 md:pt-16 md:pb-6 flex flex-col relative shadow-[0_-30px_60px_rgba(0,0,0,0.5)] z-30 overflow-hidden">

        {/* Top Split Area - flexible height on mobile to leave room for bottom cards */}
        <div className="w-full shrink-0 md:landscape:flex-1 md:landscape:h-[60vh] md:max-h-[600px] flex flex-col md:landscape:flex-row mb-2 md:landscape:mb-6 relative">
          
          {/* Left Text Content */}
          <div className="w-full md:landscape:w-[45%] md:landscape:h-full relative z-30 pointer-events-none shrink-0">
             
             {/* Stretched Wide Typography - TRUE CROSSFADE WRAPPER */}
             <div className="relative w-full grid grid-cols-1 grid-rows-1">
               {products.map((prod, idx) => (
                 <div 
                   key={`text-${idx}`}
                   className={`col-start-1 row-start-1 w-full flex flex-col transition-all duration-1000 ease-in-out ${
                     activeIdx === idx ? 'opacity-100 pointer-events-auto transform-none' : 'opacity-0 pointer-events-none translate-y-4'
                   }`}
                 >
                   <div className="flex flex-col w-full relative z-30">
                     <h2 
                       className="font-sans font-black text-[12vw] md:text-[6vw] leading-[0.95] uppercase text-brand-cream transition-colors duration-300" 
                       style={{ transform: 'scaleX(1.15)', transformOrigin: 'left', letterSpacing: '-0.03em' }}
                     >
                       {prod.heading[0]}
                     </h2>
                     <h2 
                       className="font-sans font-black text-[12vw] md:text-[6vw] leading-[0.95] uppercase text-brand-cream transition-colors duration-300" 
                       style={{ transform: 'scaleX(1.15)', transformOrigin: 'left', letterSpacing: '-0.03em' }}
                     >
                       {prod.heading[1]}
                     </h2>
                     <h2 
                       className="font-sans font-black text-[12vw] md:text-[6vw] leading-[0.95] uppercase text-brand-cream transition-colors duration-300" 
                       style={{ transform: 'scaleX(1.15)', transformOrigin: 'left', letterSpacing: '-0.03em' }}
                     >
                       {prod.heading[2]}
                     </h2>
                   </div>
                   
                   {/* MOBILE ONLY MAIN IMAGE */}
                   <div className="w-full h-[180px] relative z-10 py-2 md:landscape:hidden">
                     <div className="w-full h-full bg-brand-black  rounded-3xl overflow-hidden relative shadow-md border border-brand-cream/5">
                        <img src={prod.img} className="w-full h-full object-cover opacity-90 dark:mix-blend-multiply " alt={prod.name}/>
                     </div>
                   </div>

                   <div className="pb-0 md:pb-8 shrink-0 mt-auto">
                     <p className="font-inter text-sm md:text-base leading-relaxed text-brand-cream/80 transition-colors duration-300 max-w-sm font-medium mb-2 md:mb-8 pointer-events-auto">
                       {prod.desc}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full md:landscape:w-[55%] flex-1 md:landscape:h-full relative z-10 mt-2 md:landscape:mt-0 hidden md:landscape:block">
             
             {/* Main Image Base - TRUE CROSSFADE */}
             <div className="w-full h-full bg-brand-black  rounded-[2.5rem] overflow-hidden relative shadow-lg transition-colors duration-300">
               {products.map((prod, idx) => (
                 <img 
                   key={`img-${idx}`}
                   src={prod.img} 
                   alt={prod.name} 
                   className={`absolute top-0 left-0 w-full h-full object-cover opacity-90 dark:mix-blend-multiply  transition-opacity duration-1000 ease-in-out ${
                     activeIdx === idx ? 'opacity-90' : 'opacity-0'
                   }`}
                 />
               ))}
             </div>

             {/* === TOP LEFT CUTOUT === */}
             <div className="absolute top-0 left-0 w-32 h-24 bg-brand-black rounded-br-[2rem] z-20 transition-colors duration-300" />
             <div className="absolute top-[96px] left-0 w-8 h-8 bg-transparent rounded-tl-full shadow-[-15px_-15px_0_15px_var(--color-brand-black)] z-20 transition-colors duration-300" />
             <div className="absolute top-0 left-[128px] w-8 h-8 bg-transparent rounded-tl-full shadow-[-15px_-15px_0_15px_var(--color-brand-black)] z-20 transition-colors duration-300" />

             {/* === BOTTOM RIGHT CUTOUT === */}
             <div className="absolute bottom-0 right-0 w-56 h-20 bg-brand-black rounded-tl-[2rem] z-20 flex items-center justify-center pl-4 pt-4 transition-colors duration-300">
               <div className="bg-brand-black rounded-full py-2 px-4 flex items-center gap-3 shadow-md border border-brand-cream/5 hover:scale-105 transition-all duration-300 cursor-pointer pointer-events-auto">
                 <div className="flex -space-x-3">
                   <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-brand-black object-cover" alt="User 1"/>
                   <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-brand-black object-cover" alt="User 2"/>
                   <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-brand-black object-cover" alt="User 3"/>
                 </div>
                 <div className="flex flex-col pr-2">
                   <span className="text-xs font-bold leading-tight text-brand-cream transition-colors duration-300">100k+</span>
                   <span className="text-[10px] leading-tight text-brand-cream/70 transition-colors duration-300">Happy homes</span>
                 </div>
               </div>
             </div>
             <div className="absolute bottom-[80px] right-0 w-8 h-8 bg-transparent rounded-br-full shadow-[15px_15px_0_15px_var(--color-brand-black)] z-20 transition-colors duration-300" />
             <div className="absolute bottom-0 right-[224px] w-8 h-8 bg-transparent rounded-br-full shadow-[15px_15px_0_15px_var(--color-brand-black)] z-20 transition-colors duration-300" />

          </div>
        </div>

        {/* Bottom Horizontal Scrolling Gallery Cards */}
        {/* Added visible custom scrollbar tracking by removing 'no-scrollbar' and added explicit padding */}
        <div 
          className="w-full flex-1 md:landscape:flex-none md:landscape:h-[22vh] grid grid-cols-1 md:grid-cols-2 md:landscape:flex overflow-y-auto md:landscape:overflow-y-visible md:landscape:overflow-x-auto snap-y md:landscape:snap-x snap-mandatory gap-4 md:landscape:gap-6 relative z-30 pb-4 pt-2 md:landscape:items-center" 
          style={{ scrollbarWidth: 'thin' }}
          onScroll={(e) => {
            const popup = document.getElementById('mobile-swipe-popup');
            if (popup && popup.style.opacity !== '0') {
              popup.style.opacity = '0';
              setTimeout(() => { if (popup) popup.style.display = 'none'; }, 500);
            }
          }}
        >
          
          {/* Mobile Swipe Popup Hint Overlay */}
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-brand-cream/60 backdrop-blur-sm rounded-3xl md:hidden transition-opacity duration-500 pointer-events-none" 
               id="mobile-swipe-popup">
            <div className="bg-brand-black text-brand-cream px-6 py-3 rounded-full flex flex-col items-center shadow-2xl animate-bounce border border-brand-cream/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mb-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <span className="text-xs font-bold uppercase tracking-widest">Swipe for more</span>
            </div>
          </div>
          {products.map((prod, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setActiveIdx(idx)}
                // Fixed minimum width ensures the cards peek out, inviting the user to scroll
                className={`w-full md:landscape:min-w-[320px] md:landscape:w-auto h-[120px] md:landscape:h-full shrink-0 bg-brand-black transition-colors duration-300 rounded-3xl p-3 flex gap-4 cursor-pointer group snap-start
                  ${isActive ? 'border-2 border-brand-orange shadow-xl -translate-y-1' : 'border border-brand-cream/5 hover:shadow-lg hover:-translate-y-1'}`}
              >
                {/* Card Image */}
                <div className="w-[35%] md:landscape:w-[40%] h-full bg-brand-black  rounded-2xl overflow-hidden relative shadow-inner">
                  <img src={prod.img} className="w-full h-full object-cover opacity-90 dark:mix-blend-multiply  opacity-90 group-hover:scale-110 transition-transform duration-700" alt={prod.name} />
                  
                  {/* Active Indicator Overlay */}
                  {isActive && (
                    <div className="absolute inset-0 bg-brand-cream/10 flex items-center justify-center transition-opacity duration-500">
                      <div className="w-8 h-8 bg-brand-black/30 backdrop-blur-md rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-brand-black rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Card Info */}
                <div className="flex-1 py-2 pr-4 flex flex-col justify-center relative">
                   <h4 className="font-sans font-bold text-sm md:text-base text-brand-cream leading-tight transition-colors duration-300">{prod.name}</h4>
                   <p className="text-[10px] md:text-xs text-brand-cream/50 font-medium mt-1 uppercase tracking-widest transition-colors duration-300">{prod.type}</p>
                   <p className="text-[10px] md:text-[11px] text-brand-cream/70 font-medium mt-2 line-clamp-2 leading-relaxed transition-colors duration-300">
                     {prod.desc}
                   </p>
                   
                   <div className={`absolute top-2 right-2 transition-colors duration-500 ${isActive ? 'text-brand-orange' : 'text-brand-cream/30 group-hover:text-brand-cream'}`}>
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M5 12h14M12 5l7 7-7 7" className={`transform origin-center transition-transform duration-500 ${isActive ? 'rotate-0' : '-rotate-45'}`}/>
                     </svg>
                   </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
