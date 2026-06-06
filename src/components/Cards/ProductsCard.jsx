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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const throttleRef = useRef(false);

  return (
    <div className="card-scroll-wrapper absolute top-0 left-0 w-full opacity-0 invisible z-20" style={{ height: '200vh' }}>
      
      {/* Spacer for Intro Page */}
      <div className="w-full h-screen pointer-events-none" />

      {/* Actual Content */}
      <div 
        className="w-full h-screen bg-brand-black text-brand-cream transition-colors duration-300 p-4 md:p-8 flex flex-col md:flex-row gap-6 relative shadow-[0_-30px_60px_rgba(0,0,0,0.5)] z-30 overflow-hidden"
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
            
            {/* Main CTA Button (Static layer over the crossfading text) */}
            <div className="absolute bottom-0 left-0 mt-8 flex items-center pointer-events-auto">
              <button onClick={() => setIsModalOpen(true)} className="group bg-[#A8D0CE] text-brand-black font-bold text-[10px] md:text-[11px] tracking-[0.2em] px-8 py-4 rounded-full uppercase hover:bg-brand-cream transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105">
                <span>View Product Details</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45 group-hover:rotate-0 transition-transform duration-300">
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
            </div>
          </div>

          {/* MOBILE ONLY: Cool Expanding Dynamic Dock Wrapper */}
          <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-auto max-w-[95vw]">
             
             {/* Highlight Label so user knows these are the products */}
             <div className="bg-[#A8D0CE]/20 border border-[#A8D0CE]/30 backdrop-blur-md text-[#A8D0CE] px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-[0_4px_15px_rgba(0,0,0,0.5)] flex items-center gap-2 animate-bounce">
               <span>Browse Collection</span>
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
             </div>

             {/* The Dock */}
             <div className="flex items-center gap-2 p-2 bg-[#1A1A1A]/70 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-x-auto w-full snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
               {products.map((p, i) => {
                 const isActive = i === activeIdx;
                 return (
                   <div 
                     key={`mob-thumb-${i}`}
                     onClick={() => setActiveIdx(i)}
                     className={`relative flex items-center gap-2 rounded-full overflow-hidden cursor-pointer transition-all duration-500 ease-out shrink-0 snap-center ${isActive ? 'w-[140px] h-12 bg-white/10 pl-1 pr-4 shadow-inner' : 'w-10 h-10 bg-transparent hover:bg-white/5'}`}
                   >
                      <div className={`rounded-full overflow-hidden shrink-0 transition-all duration-500 ${isActive ? 'w-10 h-10 border-2 border-[#A8D0CE]' : 'w-full h-full opacity-60'}`}>
                        <img src={p.thumb} className="w-full h-full object-cover" alt="thumbnail" />
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider truncate animate-pulse">
                          {p.title[0]}
                        </span>
                      )}
                   </div>
                 )
               })}
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



          {/* === MIDDLE LEFT CUTOUT (Vertical Navigation Pill) === */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-20 h-80 bg-brand-black transition-colors duration-300 rounded-r-[2.5rem] z-20 flex flex-col items-center justify-center pl-2">
             
             {/* Vertical Label to indicate these are the products */}
             <div className="absolute left-[88px] top-1/2 -translate-y-1/2 -rotate-90 origin-center flex items-center gap-3 opacity-60 pointer-events-none">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-cream whitespace-nowrap">Featured Products</span>
               <div className="w-12 h-[1px] bg-brand-cream/50"></div>
             </div>

             {/* The Pill */}
             <div className="w-14 h-72 bg-brand-black transition-colors duration-300 rounded-full flex flex-col items-center justify-between py-2 shadow-inner pointer-events-auto border border-brand-cream/5 relative z-10">
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
        
        {/* MODAL OVERLAY */}
        {isModalOpen && (
          <div className="absolute inset-0 z-[100] bg-brand-black/80 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-fade-in">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-brand-cream text-brand-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50 shadow-2xl"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="w-full max-w-4xl h-full max-h-[80vh] bg-brand-cream/5 border border-brand-cream/10 rounded-[3rem] p-6 md:p-12 flex flex-col md:flex-row gap-8 overflow-y-auto shadow-[0_30px_100px_rgba(0,0,0,0.8)] pointer-events-auto">
              
              {/* Left Side Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-full bg-brand-black rounded-[2rem] overflow-hidden relative border border-brand-cream/10 shrink-0">
                <img src={products[activeIdx].heroImg} alt="Detail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 pr-6">
                  <h3 className="text-2xl md:text-4xl font-sans font-bold text-brand-cream leading-none tracking-tighter uppercase mb-2">
                    {products[activeIdx].title.join(' ')}
                  </h3>
                  <p className="text-xs text-brand-cream/60 font-medium tracking-widest uppercase">Premium Edition</p>
                </div>
              </div>

              {/* Right Side Dummy Data Specs */}
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
                
                <div>
                  <h4 className="text-[#A8D0CE] text-sm tracking-[0.2em] uppercase font-bold mb-2">Technical Specifications</h4>
                  <p className="text-brand-cream/70 text-sm leading-relaxed mb-6">
                    {products[activeIdx].desc} Experience unparalleled fidelity and flawless engineering with this meticulously crafted piece.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Driver</div>
                    <div className="text-white font-semibold text-sm">50mm Titanium</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Battery</div>
                    <div className="text-white font-semibold text-sm">40 Hours Playback</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Connectivity</div>
                    <div className="text-white font-semibold text-sm">Bluetooth 5.3 + Wired</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Weight</div>
                    <div className="text-white font-semibold text-sm">240g Ultra-light</div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-white/50 text-[10px] uppercase tracking-widest">Price</span>
                    <span className="text-white text-3xl font-light tracking-tighter">$299<span className="text-lg">.00</span></span>
                  </div>
                  <button className="bg-[#A8D0CE] text-brand-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(168,208,206,0.2)]">
                    Pre-Order Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
