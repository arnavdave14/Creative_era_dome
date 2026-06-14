import React from 'react';

export default function AboutUsCard() {
  return (
    <div className="card-scroll-wrapper absolute top-0 left-0 w-full opacity-0 invisible z-20">
      
      {/* Spacer for Intro Page */}
      <div className="w-full h-screen pointer-events-none" />

      {/* Actual Content (Editorial Layout) */}
      <div className="w-full min-h-screen bg-brand-black transition-colors duration-300 pt-6 pb-12 md:pt-12 md:pb-24 relative shadow-[0_-30px_60px_rgba(0,0,0,0.8)] z-30 flex flex-col">
        
        {/* Giant Top Title */}
        <div className="w-full px-4 mb-6 md:mb-12 shrink-0">
          <h1 className="w-full text-center font-drose text-[18vw] leading-[0.75] text-brand-cream tracking-tighter transition-colors duration-300">
            OUR STORY
          </h1>
        </div>

        {/* 12-Column Editorial Grid */}
        <div className="w-full max-w-[95vw] mx-auto grid grid-cols-1 md:landscape:grid-cols-12 gap-8 md:landscape:gap-4 relative z-30 flex-1 content-center">
          
          {/* Col 1-4: Left Text (Bottom aligned) */}
          <div className="col-span-1 md:landscape:col-span-4 flex items-end pb-8 md:landscape:pb-16 md:landscape:pr-12 order-3 md:landscape:order-1">
            <p className="font-drose text-3xl md:text-6xl md:landscape:text-[2.2vw] leading-[1.1] text-brand-cream/90 transition-colors duration-300">
              Creative Era is an Experience-Led Growth Company. We build the ecosystem that connects organizations, communities, and audiences.
            </p>
          </div>

          {/* Col 5-7: Center Image */}
          <div className="col-span-1 md:landscape:col-span-3 flex justify-center items-center order-1 md:landscape:order-2">
            <div className="w-full max-w-[80vw] md:landscape:max-w-none aspect-[4/5] bg-zinc-900 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover brightness-90 contrast-125" 
                alt="Our Ethos Portrait" 
              />
            </div>
          </div>

          {/* Col 8-10: Right Paragraph */}
          <div className="col-span-1 md:landscape:col-span-3 md:landscape:pl-8 pt-8 md:landscape:pt-16 order-2 md:landscape:order-3">
            <p className="font-serif text-lg md:text-2xl md:landscape:text-[1vw] leading-[1.7] text-brand-cream/70 text-justify md:landscape:text-left transition-colors duration-300">
              With 1500+ experiences delivered across India, Creative Era operates at the intersection of production excellence, AI intelligence, and experience innovation.
            </p>
          </div>

          {/* Col 11-12: Far Right "01" Section */}
          <div className="col-span-1 md:landscape:col-span-2 flex flex-col items-start md:landscape:items-end pt-4 pb-8 md:landscape:pb-0 order-4">
            
            {/* Top Right Label */}
            <span className="text-[14px] md:landscape:text-[0.6vw] tracking-widest uppercase text-brand-cream/50 mb-12 hidden md:block transition-colors duration-300">
              About Page
            </span>
            
            <div className="flex flex-col items-start w-full md:pl-4">
              <h2 className="font-drose text-8xl md:text-9xl md:landscape:text-[8vw] leading-none text-brand-cream mb-2 transition-colors duration-300">01</h2>
              <h3 className="font-drose text-4xl md:text-5xl md:landscape:text-[1.8vw] leading-[1.1] uppercase text-brand-cream tracking-wide mb-6 transition-colors duration-300">
                EXPERIENCE<br/>LED
              </h3>
            </div>
            
          </div>

        </div>

        {/* Mission & Vision Section */}
        <div id="mission-section" className="w-full max-w-[1400px] mx-auto mt-24 mb-32 border-t border-brand-cream/10 pt-24 px-[4vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="ethos-text">
              <h2 className="text-5xl font-drose mb-6 text-brand-orange uppercase tracking-wide">Mission</h2>
              <p className="text-xl md:text-2xl font-inter leading-relaxed text-brand-cream/90 font-light">
                To create growth through experiences — connecting organizations, communities, and audiences in a trusted ecosystem where every interaction compounds into lasting value.
              </p>
            </div>
            <div className="ethos-text">
              <h2 className="text-5xl font-drose mb-6 text-brand-cyan uppercase tracking-wide">Vision</h2>
              <p className="text-xl md:text-2xl font-inter leading-relaxed text-brand-cream/90 font-light">
                To build the world's most trusted experience ecosystem — where participation is the raw material, intelligence improves every outcome, and trust becomes the most valuable currency.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="w-full max-w-[1400px] mx-auto mb-32 border-t border-brand-cream/10 pt-24 px-[4vw]">
          <h2 className="text-6xl md:text-8xl font-drose mb-16 text-center tracking-tighter uppercase text-brand-cream">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { id: '01', title: 'Trust First', desc: 'Every interaction is built to compound trust, not extract it.' },
              { id: '02', title: 'Growth Over Events', desc: 'We measure success in outcomes, not deliverables.' },
              { id: '03', title: 'Participation-Led', desc: 'Without active participation, an experience doesn\'t exist.' },
              { id: '04', title: 'Intelligence-Driven', desc: 'Decisions are informed by data, memory, and systems — not instinct alone.' },
              { id: '05', title: 'Relationship Before Transaction', desc: 'Every client engagement is the start of a long-term partnership.' }
            ].map((val, i) => (
               <div key={i} className="bg-brand-black/50 border border-brand-cream/5 p-8 rounded-[2rem] hover:border-brand-orange/50 transition-all duration-300">
                 <span className="text-brand-orange font-drose text-3xl mb-4 block">{val.id}</span>
                 <h3 className="text-2xl text-brand-cream font-drose mb-4 uppercase tracking-wide">{val.title}</h3>
                 <p className="text-brand-cream/70 font-inter text-sm leading-relaxed">{val.desc}</p>
               </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full max-w-[1400px] mx-auto border-t border-brand-cream/10 pt-24 px-[4vw]">
           <h2 className="text-6xl md:text-8xl font-drose mb-4 text-center tracking-tighter uppercase text-brand-cream">The Team</h2>
           <p className="text-center font-inter text-brand-cream/60 mb-16 max-w-2xl mx-auto">The people behind the experiences.</p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
             {[1, 2, 3, 4].map((member, i) => (
               <div key={i} className="flex flex-col group cursor-pointer">
                 <div className="w-full aspect-[3/4] bg-brand-cream/5 rounded-[2rem] overflow-hidden mb-6 relative">
                   <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&random=${i}`} alt="Team Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                   <div className="absolute inset-0 border-2 border-brand-orange/0 group-hover:border-brand-orange/100 rounded-[2rem] transition-all duration-500 z-10 pointer-events-none"></div>
                 </div>
                 <h4 className="font-drose text-brand-cream text-2xl uppercase tracking-wide mb-1 group-hover:text-brand-orange transition-colors">Team Member Name</h4>
                 <p className="font-inter text-xs text-brand-cyan tracking-widest uppercase mb-3">Designation / Role</p>
                 <p className="font-inter text-brand-cream/60 text-xs leading-relaxed">Short biography placeholder describing the role and impact of this team member in the organization.</p>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}
