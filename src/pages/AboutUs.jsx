import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicIntro from '../components/CinematicIntro';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Triggers when the top of AboutUs reaches 70% of viewport height
          toggleActions: "play none none none"
        }
      });

      tl.from('.ethos-title', { 
        y: 100, 
        opacity: 0, 
        duration: 1.5, 
        ease: 'power4.out', 
      })
      .from('.ethos-img', { 
        clipPath: 'inset(100% 0 0 0)', 
        duration: 1.5, 
        ease: 'power3.inOut', 
      }, "-=1.2")
      .from('.ethos-text', { 
        y: 20, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: 'power2.out', 
      }, "-=1.0")
      .from('.ethos-service', { 
        x: 30, 
        opacity: 0, 
        duration: 1.2, 
        ease: 'power3.out', 
      }, "-=0.8");

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-[#0d0d0d]">
      <CinematicIntro 
        preTitle="S T O R Y"
        title="ABOUT US"
        descTitle="OUR JOURNEY"
        descText="Discover the conviction behind our craft. We build the ecosystem that connects organizations, communities, and audiences."
        indexStr="03_05"
        bgImage="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2574&auto=format&fit=crop"
      />
      <div ref={containerRef} className="min-h-screen bg-brand-black text-brand-cream pt-32 pb-24 px-[4vw] overflow-hidden relative z-30 border-t border-brand-cream/5">
      
      {/* Top Small Header */}
      <div className="flex justify-between items-center text-xs font-inter opacity-60 mb-8 border-b border-brand-cream/10 pb-4">
        <span>About Us Page</span>
      </div>

      {/* Massive Title */}
      <div className="w-full mb-16 overflow-hidden flex justify-center">
        <h1 className="ethos-title text-[15vw] leading-[0.75] font-drose tracking-tighter uppercase whitespace-nowrap text-brand-cream">
          OUR STORY
        </h1>
      </div>

      {/* Editorial Grid Layout */}
      <div className="w-full max-w-[1800px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative">
          
          {/* Column 1: Left Text Block (Pushed to bottom) */}
          <div className="flex flex-col justify-end pt-12 md:pt-[20vw]">
            <p className="ethos-text text-[1.4rem] leading-snug font-drose opacity-90 text-justify text-brand-cream">
              Creative Era Events & Experiences is an Experience-Led Growth Company — not an event management firm, not a marketing agency. We build the ecosystem that connects organizations, communities, and audiences, turning every experience into compounding trust and measurable business growth.
            </p>
          </div>

          {/* Column 2: The Center Portrait Image */}
          <div className="flex justify-center items-start">
            <div className="w-full max-w-[400px] aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop" 
                alt="Portrait" 
                className="ethos-img w-full h-full object-cover grayscale brightness-90 contrast-125"
              />
            </div>
          </div>

          {/* Column 3: Text to the right of the image */}
          <div className="pt-4 md:pt-12">
            <p className="ethos-text text-xl font-drose leading-relaxed opacity-80 text-justify text-brand-cream">
              Creative Era was founded on a single conviction: experiences are the most powerful driver of growth. What began as a commitment to delivering production excellence across corporate and large-scale events evolved into something larger — a full ecosystem.
              <br/><br/>
              Over 1500 events and across every major format, Creative Era developed the systems, the intelligence layer, and the innovation platform that define the company today. Every event we ran taught us something. That knowledge is now built into CERA™, our AI intelligence layer — and into every proposal, production plan, and experience we deliver.
            </p>
          </div>

          {/* Column 4: Services Page / "01 BRAND STRATEGY" -> Replaced with Experience Led */}
          <div className="ethos-service flex flex-col pt-4 md:pt-0">
            <span className="text-xs font-inter opacity-60 mb-2">Philosophy</span>
            <h2 className="text-[10rem] leading-[0.8] font-drose -ml-2 mb-8 text-brand-cream">01</h2>
            
            <h3 className="text-4xl font-drose leading-[1.1] tracking-wide mb-6 text-brand-cream">
              EXPERIENCE<br />LED
            </h3>
            
            {/* Simple arrow element */}
            <div className="mb-12 opacity-60 text-brand-cream">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            
            <div className="bg-brand-cream text-brand-black px-6 py-3 rounded-2xl w-max flex items-center gap-3 font-inter font-bold text-xs tracking-widest cursor-pointer hover:scale-105 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2z"/>
              </svg>
              CREATIVE ERA
            </div>
          </div>

        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="w-full max-w-[1400px] mx-auto mb-32 border-t border-brand-cream/10 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="ethos-text">
            <h2 className="text-5xl font-drose mb-6 text-brand-orange uppercase tracking-wide">Mission</h2>
            <p className="text-xl md:text-2xl font-inter leading-relaxed opacity-90 font-light">
              To create growth through experiences — connecting organizations, communities, and audiences in a trusted ecosystem where every interaction compounds into lasting value.
            </p>
          </div>
          <div className="ethos-text">
            <h2 className="text-5xl font-drose mb-6 text-brand-cyan uppercase tracking-wide">Vision</h2>
            <p className="text-xl md:text-2xl font-inter leading-relaxed opacity-90 font-light">
              To build the world's most trusted experience ecosystem — where participation is the raw material, intelligence improves every outcome, and trust becomes the most valuable currency.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full max-w-[1400px] mx-auto mb-32 border-t border-brand-cream/10 pt-24">
        <h2 className="text-6xl md:text-8xl font-drose mb-16 text-center tracking-tighter uppercase text-brand-cream">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { id: '01', title: 'Trust First', desc: 'Every interaction is built to compound trust, not extract it.' },
            { id: '02', title: 'Growth Over Events', desc: 'We measure success in outcomes, not deliverables.' },
            { id: '03', title: 'Participation-Led', desc: 'Without active participation, an experience doesn\'t exist.' },
            { id: '04', title: 'Intelligence-Driven', desc: 'Decisions are informed by data, memory, and systems — not instinct alone.' },
            { id: '05', title: 'Relationship Before Transaction', desc: 'Every client engagement is the start of a long-term partnership.' }
          ].map((val, i) => (
             <div key={i} className="ethos-service bg-brand-black/50 border border-brand-cream/5 p-8 rounded-[2rem] hover:border-brand-orange/50 transition-all duration-300">
               <span className="text-brand-orange font-drose text-3xl mb-4 block">{val.id}</span>
               <h3 className="text-2xl font-drose mb-4 uppercase tracking-wide">{val.title}</h3>
               <p className="font-inter text-sm leading-relaxed opacity-70">{val.desc}</p>
             </div>
          ))}
        </div>
      </div>

      {/* Team Section (Placeholder) */}
      <div className="w-full max-w-[1400px] mx-auto border-t border-brand-cream/10 pt-24">
         <h2 className="text-6xl md:text-8xl font-drose mb-4 text-center tracking-tighter uppercase text-brand-cream">The Team</h2>
         <p className="text-center font-inter opacity-60 mb-16 max-w-2xl mx-auto">The people behind the experiences.</p>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
           {[1, 2, 3, 4].map((member, i) => (
             <div key={i} className="flex flex-col group cursor-pointer">
               <div className="w-full aspect-[3/4] bg-brand-cream/5 rounded-[2rem] overflow-hidden mb-6 relative">
                 <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&random=${i}`} alt="Team Member" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                 <div className="absolute inset-0 border-2 border-brand-orange/0 group-hover:border-brand-orange/100 rounded-[2rem] transition-all duration-500 z-10 pointer-events-none"></div>
               </div>
               <h4 className="font-drose text-2xl uppercase tracking-wide mb-1 group-hover:text-brand-orange transition-colors">Team Member Name</h4>
               <p className="font-inter text-xs text-brand-cyan tracking-widest uppercase mb-3">Designation / Role</p>
               <p className="font-inter text-xs leading-relaxed opacity-60">Short biography placeholder describing the role and impact of this team member in the organization.</p>
             </div>
           ))}
         </div>
      </div>

      </div>
    </div>
  );
}
