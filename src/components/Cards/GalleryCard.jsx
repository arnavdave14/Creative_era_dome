import React, { useState } from 'react';

export default function GalleryCard() {
  const products = [
    { 
      name: 'Aura Lamp', 
      type: 'Table Lamp',
      heading: ['LIGHTS MADE', 'FOR MODERN', 'SPACES'],
      desc: 'Thoughtfully crafted lamps that bring warmth, ambiance, and style to your living.',
      img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      name: 'Lume Light', 
      type: 'Pendant Light',
      heading: ['LUME LIGHT', 'MINIMALIST', 'DESIGN'],
      desc: 'Sleek, structural lighting engineered for contemporary workspaces and architectural interiors.',
      img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      name: 'Nova Shine', 
      type: 'Desk Lamp',
      heading: ['NOVA SHINE', 'BRILLIANT', 'OVERHEAD'],
      desc: 'A striking statement piece that bathes your entire room in soft, diffused golden light.',
      img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1200&auto=format&fit=crop' 
    },
    {
      name: 'Eclipse Halo',
      type: 'Wall Sconce',
      heading: ['ECLIPSE', 'AMBIENT', 'GLOW'],
      desc: 'A subtle, wall-mounted halo that mimics a solar eclipse for moody atmospheric lighting.',
      img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Zenith Stand',
      type: 'Floor Lamp',
      heading: ['ZENITH', 'STANDING', 'TALL'],
      desc: 'An elegant floor lamp designed to anchor your living space with powerful, adjustable beams.',
      img: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Geometric Drop',
      type: 'Chandelier',
      heading: ['GEOMETRIC', 'MODERN', 'DROP'],
      desc: 'A striking focal point combining sharp angles with warm illumination.',
      img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Lumina Globe',
      type: 'Table Lamp',
      heading: ['LUMINA', 'FROSTED', 'GLOBE'],
      desc: 'A perfectly spherical frosted glass lamp that emits a soft, 360-degree ambient glow.',
      img: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Artemis Arch',
      type: 'Floor Lamp',
      heading: ['ARTEMIS', 'SWEEPING', 'ARCH'],
      desc: 'A dramatic, sweeping arch lamp designed to reach over sectionals and dining tables.',
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="card-scroll-wrapper absolute top-0 left-0 w-full opacity-0 invisible z-20" style={{ height: '200vh' }}>
      
      {/* Spacer for Intro Page */}
      <div className="w-full h-screen pointer-events-none" />

      {/* Actual Content - Hardcoded vh to prevent overflowing screen */}
      <div className="w-full h-screen bg-brand-cream text-brand-black transition-colors duration-300 p-4 md:px-12 md:pt-16 md:pb-6 flex flex-col relative shadow-[0_-30px_60px_rgba(0,0,0,0.5)] z-30 overflow-hidden">

        {/* Top Split Area - flexible height on mobile to leave room for bottom cards */}
        <div className="w-full flex-1 min-h-0 md:h-[60vh] flex flex-col md:flex-row mb-2 md:mb-6 relative">
          
          {/* Left Text Content */}
          <div className="w-full md:w-[45%] h-full relative z-30 pointer-events-none">
             
             {/* Stretched Wide Typography - TRUE CROSSFADE WRAPPER */}
             <div className="relative w-full h-full">
               {products.map((prod, idx) => (
                 <div 
                   key={`text-${idx}`}
                   className={`absolute top-0 left-0 w-full h-full flex flex-col justify-between pt-4 transition-all duration-1000 ease-in-out ${
                     activeIdx === idx ? 'opacity-100 pointer-events-auto transform-none' : 'opacity-0 pointer-events-none translate-y-4'
                   }`}
                 >
                   <div className="flex flex-col w-full relative z-30">
                     <h2 
                       className="font-sans font-black text-[12vw] md:text-[6vw] leading-[0.95] uppercase text-brand-black transition-colors duration-300" 
                       style={{ transform: 'scaleX(1.15)', transformOrigin: 'left', letterSpacing: '-0.03em' }}
                     >
                       {prod.heading[0]}
                     </h2>
                     <h2 
                       className="font-sans font-black text-[12vw] md:text-[6vw] leading-[0.95] uppercase text-brand-black transition-colors duration-300" 
                       style={{ transform: 'scaleX(1.15)', transformOrigin: 'left', letterSpacing: '-0.03em' }}
                     >
                       {prod.heading[1]}
                     </h2>
                     <h2 
                       className="font-sans font-black text-[12vw] md:text-[6vw] leading-[0.95] uppercase text-brand-black transition-colors duration-300" 
                       style={{ transform: 'scaleX(1.15)', transformOrigin: 'left', letterSpacing: '-0.03em' }}
                     >
                       {prod.heading[2]}
                     </h2>
                   </div>
                   
                   <div className="pb-8">
                     <p className="font-inter text-sm md:text-base leading-relaxed text-brand-black/80 transition-colors duration-300 max-w-sm font-medium mb-8">
                       {prod.desc}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full md:w-[55%] h-full relative z-10 hidden md:block">
             
             {/* Main Image Base - TRUE CROSSFADE */}
             <div className="w-full h-full bg-brand-cream rounded-[2.5rem] overflow-hidden relative shadow-lg transition-colors duration-300">
               {products.map((prod, idx) => (
                 <img 
                   key={`img-${idx}`}
                   src={prod.img} 
                   alt={prod.name} 
                   className={`absolute top-0 left-0 w-full h-full object-cover mix-blend-multiply transition-opacity duration-1000 ease-in-out ${
                     activeIdx === idx ? 'opacity-90' : 'opacity-0'
                   }`}
                 />
               ))}
             </div>

             {/* === TOP LEFT CUTOUT === */}
             <div className="absolute top-0 left-0 w-32 h-24 bg-brand-cream rounded-br-[2rem] z-20 transition-colors duration-300" />
             <div className="absolute top-[96px] left-0 w-8 h-8 bg-transparent rounded-tl-full shadow-[-15px_-15px_0_15px_var(--color-brand-cream)] z-20 transition-colors duration-300" />
             <div className="absolute top-0 left-[128px] w-8 h-8 bg-transparent rounded-tl-full shadow-[-15px_-15px_0_15px_var(--color-brand-cream)] z-20 transition-colors duration-300" />

             {/* === BOTTOM RIGHT CUTOUT === */}
             <div className="absolute bottom-0 right-0 w-56 h-20 bg-brand-cream rounded-tl-[2rem] z-20 flex items-center justify-center pl-4 pt-4 transition-colors duration-300">
               <div className="bg-brand-cream rounded-full py-2 px-4 flex items-center gap-3 shadow-md border border-brand-black/5 hover:scale-105 transition-all duration-300 cursor-pointer pointer-events-auto">
                 <div className="flex -space-x-3">
                   <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-brand-cream object-cover" alt="User 1"/>
                   <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-brand-cream object-cover" alt="User 2"/>
                   <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-brand-cream object-cover" alt="User 3"/>
                 </div>
                 <div className="flex flex-col pr-2">
                   <span className="text-xs font-bold leading-tight text-brand-black transition-colors duration-300">100k+</span>
                   <span className="text-[10px] leading-tight text-brand-black/70 transition-colors duration-300">Happy homes</span>
                 </div>
               </div>
             </div>
             <div className="absolute bottom-[80px] right-0 w-8 h-8 bg-transparent rounded-br-full shadow-[15px_15px_0_15px_var(--color-brand-cream)] z-20 transition-colors duration-300" />
             <div className="absolute bottom-0 right-[224px] w-8 h-8 bg-transparent rounded-br-full shadow-[15px_15px_0_15px_var(--color-brand-cream)] z-20 transition-colors duration-300" />

          </div>
        </div>

        {/* Bottom Horizontal Scrolling Gallery Cards */}
        {/* Added visible custom scrollbar tracking by removing 'no-scrollbar' and added explicit padding */}
        <div className="w-full shrink-0 h-[26vh] md:h-[22vh] flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 relative z-30 pb-4 pt-2 items-center" style={{ scrollbarWidth: 'thin' }}>
          {products.map((prod, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setActiveIdx(idx)}
                // Fixed minimum width ensures the cards peek out, inviting the user to scroll
                className={`min-w-[85vw] md:min-w-[320px] shrink-0 h-full bg-brand-cream transition-colors duration-300 rounded-3xl p-3 flex gap-4 cursor-pointer group snap-start
                  ${isActive ? 'border-2 border-brand-orange shadow-xl -translate-y-2' : 'border border-brand-black/5 hover:shadow-lg hover:-translate-y-1'}`}
              >
                {/* Card Image */}
                <div className="w-[40%] h-full bg-brand-cream rounded-2xl overflow-hidden relative shadow-inner">
                  <img src={prod.img} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-700" alt={prod.name} />
                  
                  {/* Active Indicator Overlay */}
                  {isActive && (
                    <div className="absolute inset-0 bg-brand-black/10 flex items-center justify-center transition-opacity duration-500">
                      <div className="w-8 h-8 bg-brand-cream/30 backdrop-blur-md rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-brand-cream rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Card Info */}
                <div className="flex-1 py-2 pr-4 flex flex-col justify-center relative">
                   <h4 className="font-sans font-bold text-sm md:text-base text-brand-black leading-tight transition-colors duration-300">{prod.name}</h4>
                   <p className="text-[10px] md:text-xs text-brand-black/50 font-medium mt-1 uppercase tracking-widest transition-colors duration-300">{prod.type}</p>
                   <p className="text-[10px] md:text-[11px] text-brand-black/70 font-medium mt-2 line-clamp-2 leading-relaxed transition-colors duration-300">
                     {prod.desc}
                   </p>
                   
                   <div className={`absolute top-2 right-2 transition-colors duration-500 ${isActive ? 'text-brand-orange' : 'text-brand-black/30 group-hover:text-brand-black'}`}>
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
