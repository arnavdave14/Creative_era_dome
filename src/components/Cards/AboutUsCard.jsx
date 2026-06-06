import React from 'react';

export default function AboutUsCard() {
  return (
    <div className="card-scroll-wrapper absolute top-0 left-0 w-full opacity-0 invisible z-20" style={{ height: '200vh' }}>
      
      {/* Spacer for Intro Page */}
      <div className="w-full h-screen pointer-events-none" />

      {/* Actual Content (Editorial Layout) */}
      <div className="w-full min-h-screen bg-[#0f0f0f] pt-12 pb-24 relative shadow-[0_-30px_60px_rgba(0,0,0,0.8)] z-30 flex flex-col overflow-hidden">
        
        {/* Giant Top Title */}
        <div className="w-full px-4 mb-12">
          <h1 className="w-full text-center font-drose text-[18vw] leading-[0.75] text-[#E5E5E5] tracking-tighter">
            OUR ETHOS
          </h1>
        </div>

        {/* 12-Column Editorial Grid */}
        <div className="w-full max-w-[95vw] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 relative z-30 flex-1">
          
          {/* Col 1-4: Left Text (Bottom aligned) */}
          <div className="col-span-1 md:col-span-4 flex items-end pb-8 md:pb-16 md:pr-12 order-3 md:order-1">
            <p className="font-drose text-3xl md:text-[2.2vw] leading-[1.1] text-white/90">
              We are masters of our craft, creating high-fidelity experiences and integrations for design-led creative event design, and art blocks to respectfully create in practical means.
            </p>
          </div>

          {/* Col 5-7: Center Image */}
          <div className="col-span-1 md:col-span-3 flex justify-center order-1 md:order-2">
            <div className="w-full aspect-[3/4] md:aspect-[4/5] bg-zinc-900 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover brightness-90 contrast-125" 
                alt="Our Ethos Portrait" 
              />
            </div>
          </div>

          {/* Col 8-10: Right Paragraph */}
          <div className="col-span-1 md:col-span-3 md:pl-8 pt-8 md:pt-16 order-2 md:order-3">
            <p className="font-serif text-sm md:text-[1vw] leading-[1.7] text-white/70 text-justify md:text-left">
              Our team works with bespoke envelope markets, simultaneous and situations that are uncompromising to local on a in the together in influenced as the development process consent, and edge to align it comes true and ongoing to result some what they form. We focus on striking visual identity.
            </p>
          </div>

          {/* Col 11-12: Far Right "01" Section */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start md:items-end pt-4 order-4">
            
            {/* Top Right Label */}
            <span className="text-[10px] md:text-[0.6vw] tracking-widest uppercase text-white/50 mb-12 hidden md:block">
              About Page
            </span>
            
            <div className="flex flex-col items-start w-full md:pl-4">
              <h2 className="font-drose text-8xl md:text-[8vw] leading-none text-white mb-2">01</h2>
              <h3 className="font-drose text-2xl md:text-[1.8vw] leading-[1.1] uppercase text-white tracking-wide mb-6">
                BRAND<br/>STRATEGY
              </h3>
              <span className="text-white/50 text-2xl font-light hover:translate-x-4 transition-transform cursor-pointer">⟶</span>
            </div>
            
            {/* Bottom White Pill */}
            <div className="mt-16 md:mt-auto bg-[#E5E5E5] rounded-xl px-6 py-3 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
               <span className="text-black font-inter text-[10px] md:text-[0.65vw] font-bold tracking-widest uppercase">
                 Creative Era
               </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
