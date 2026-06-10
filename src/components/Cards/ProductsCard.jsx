import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ProductsCard() {
  // We have 4 products currently
  const products = [
    {
      id: 1,
      title: 'THE FUTURE OF LISTENING',
      subtitle: 'Noise Cancelling',
      desc: 'Designed for balanced acoustics and refined noise isolation, letting sound adapt seamlessly to your space.',
      heroImg: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2400&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'PURE SONIC PERFECTION',
      subtitle: 'Studio Grade',
      desc: 'High-fidelity audio drivers engineered for studio-grade mixing and audiophile listening.',
      heroImg: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2400&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'WIRELESS FREEDOM',
      subtitle: 'Ultralight',
      desc: 'Ultralight design with massive battery life. Experience your music without boundaries.',
      heroImg: 'https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=2400&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'IMMERSIVE SOUND',
      subtitle: 'Active ANC',
      desc: 'True wireless earbuds engineered with active noise cancellation and a precision-tuned acoustic architecture.',
      heroImg: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2400&auto=format&fit=crop',
    }
  ];

  const [activeId, setActiveId] = useState(null);
  const [modalRect, setModalRect] = useState(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const gridRefs = useRef({});

  const handleOpen = (id) => {
    const el = gridRefs.current[id];
    if (el) {
      const rect = el.getBoundingClientRect();
      setModalRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
      setActiveId(id);
      
      // Trigger expansion animation after a tiny delay
      setTimeout(() => {
        setIsExpanding(true);
      }, 50);
    }
  };

  const handleClose = () => {
    setIsExpanding(false);
    setTimeout(() => {
      setActiveId(null);
      setModalRect(null);
    }, 500); // Wait for shrink animation
  };

  const activeProduct = products.find(p => p.id === activeId);

  return (
    <div className="card-scroll-wrapper absolute top-0 left-0 w-full opacity-0 invisible z-20" style={{ height: '200vh' }}>
      {/* Spacer for Intro Page */}
      <div className="w-full h-screen pointer-events-none shrink-0" />

      <div className="relative w-full h-screen bg-brand-black text-brand-cream overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.5)] z-30 shrink-0">
      
      {/* 4-Section Grid */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-2 md:gap-4 p-2 md:p-4">
        {products.map((p) => (
          <div 
            key={p.id}
            ref={(el) => (gridRefs.current[p.id] = el)}
            onClick={() => handleOpen(p.id)}
            className={`relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-pointer group ${activeId === p.id ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          >
            {/* Background Image */}
            <img 
              src={p.heroImg} 
              alt={p.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end pointer-events-none">
              <span className="text-[#A8D0CE] text-xs font-bold uppercase tracking-[0.2em] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {p.subtitle}
              </span>
              <h2 className="text-2xl md:text-5xl font-sans font-bold text-white tracking-tighter uppercase leading-none">
                {p.title}
              </h2>
            </div>

            {/* Hover Icon */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* FLIP Modal Overlay using React Portal to escape all CSS transforms */}
      {activeId && modalRect && createPortal(
        <div 
          className="fixed inset-0 z-[100] pointer-events-none"
        >
          {/* Backdrop Blur (fades in) */}
          <div 
            className={`absolute inset-0 bg-brand-black/90 backdrop-blur-2xl transition-opacity duration-500 ease-in-out ${isExpanding ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`} 
            onClick={handleClose}
          />

          {/* The Expanding Card */}
          <div 
            className="absolute bg-brand-black overflow-hidden pointer-events-auto flex flex-col md:landscape:flex-row transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] shadow-2xl"
            style={{
              top: isExpanding ? 0 : modalRect.top,
              left: isExpanding ? 0 : modalRect.left,
              width: isExpanding ? '100vw' : modalRect.width,
              height: isExpanding ? '100vh' : modalRect.height,
              borderRadius: isExpanding ? '0px' : '3rem',
            }}
          >
             {/* Left: Image Area */}
             <div className="relative w-full md:landscape:w-1/2 h-[50vh] md:landscape:h-full shrink-0">
               <img src={activeProduct.heroImg} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent md:bg-gradient-to-r" />
               
               {/* Modal Content inside Image */}
               <div className={`absolute bottom-8 left-8 md:bottom-16 md:left-16 pr-8 transition-opacity duration-500 delay-200 ${isExpanding ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="text-[#A8D0CE] text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
                    {activeProduct.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-7xl font-sans font-bold text-white tracking-tighter uppercase leading-none">
                    {activeProduct.title}
                  </h2>
               </div>
             </div>

             {/* Right: Details Area */}
             <div className={`w-full md:landscape:w-1/2 h-[50vh] md:landscape:h-full p-8 md:p-16 flex flex-col justify-center overflow-y-auto transition-opacity duration-500 delay-300 ${isExpanding ? 'opacity-100' : 'opacity-0'}`}>
                
                <h4 className="text-[#A8D0CE] text-sm tracking-[0.2em] uppercase font-bold mb-4">Discover the Features</h4>
                <p className="text-brand-cream/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
                  {activeProduct.desc} Experience unparalleled fidelity and flawless engineering with this meticulously crafted piece.
                </p>

                {/* Software Bento Grid Layout */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-brand-cream/5 rounded-[2rem] p-6 border border-brand-cream/10 hover:border-[#A8D0CE]/50 transition-colors">
                    <div className="text-brand-cream/40 text-[10px] uppercase tracking-widest mb-2">Build</div>
                    <div className="text-brand-cream font-semibold text-lg">Premium</div>
                  </div>
                  <div className="bg-brand-cream/5 rounded-[2rem] p-6 border border-brand-cream/10 hover:border-[#A8D0CE]/50 transition-colors">
                    <div className="text-brand-cream/40 text-[10px] uppercase tracking-widest mb-2">Performance</div>
                    <div className="text-brand-cream font-semibold text-lg">Elite</div>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-start">
                  <button className="bg-[#A8D0CE] text-brand-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(168,208,206,0.2)]">
                    Explore Details
                  </button>
                </div>
             </div>

             {/* Close Button */}
             <button 
               onClick={handleClose}
               className={`absolute top-6 right-6 md:top-12 md:right-12 w-14 h-14 bg-brand-cream/10 backdrop-blur-md text-brand-cream rounded-full flex items-center justify-center hover:bg-brand-cream hover:text-brand-black hover:scale-110 transition-all duration-300 z-50 shadow-2xl ${isExpanding ? 'opacity-100' : 'opacity-0'}`}
             >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </button>

          </div>
        </div>
      , document.body)}

    </div>
    </div>
  );
}
