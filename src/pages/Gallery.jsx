import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CinematicIntro from '../components/CinematicIntro';

export default function Gallery() {
  const containerRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      title: ['DESIGNED FOR', 'DECISION MAKERS', 'NOT AUDIENCES'],
      subtitle: "A large-scale corporate conference engineered to drive business decisions — not just attendance.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: ['PARTICIPATION', 'ENGINEERED', 'FOR MEMORY'],
      subtitle: "A brand activation built to be remembered — interactive, intelligent, and designed for emotional connection.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: ['THE MOMENT', 'BEFORE THE', 'MARKET KNOWS'],
      subtitle: "A product launch experience that transforms a reveal into a story, generating long-lasting coverage.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      title: ['THOUSANDS', 'ONE EXPERIENCE', 'ZERO COMPROMISE'],
      subtitle: "Multi-thousand audience events requiring military-grade logistics and multi-vendor coordination at scale.",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 5,
      title: ['THE ROOM', 'REMEMBERS', 'EVERYTHING'],
      subtitle: "An award night where every visual and moment is calibrated to make the honoured feel honoured.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 6,
      title: ['DEVOTION', 'DESIGNED', 'WITH PRECISION'],
      subtitle: "Spiritual and cultural experiences that honour tradition while engineering participation and flow.",
      image: "https://images.unsplash.com/photo-1540036666873-19597793d5f9?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1540036666873-19597793d5f9?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 7,
      title: ['AI. ROBOTICS.', 'HUMAN', 'EXPERIENCE'],
      subtitle: "Interactive and AI-powered experience assets — tested at CERA LAB™ and deployed to create new memories.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    if (index === activeIndex) return;
    const elementsToAnimate = ['.gallery-main-img img', '.gallery-text-content'];
    gsap.to(elementsToAnimate, { 
      opacity: 0, 
      y: 10,
      duration: 0.3, 
      onComplete: () => {
        setActiveIndex(index);
        gsap.to(elementsToAnimate, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      }
    });
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from('.gallery-title', { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out' });
      gsap.from('.gallery-subtitle', { y: 20, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
      gsap.from('.gallery-btn', { scale: 0.9, opacity: 0, duration: 0.8, delay: 0.5, ease: 'back.out(1.5)' });
      
      gsap.from('.gallery-main-img', { 
        x: 50, 
        opacity: 0, 
        duration: 1.2, 
        delay: 0.4, 
        ease: 'power3.out' 
      });

      gsap.from('.gallery-card-item', { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        delay: 0.6, 
        ease: 'power2.out' 
      });
      
      gsap.from('.happy-homes', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'back.out(1.5)'
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-brand-cream">
      <CinematicIntro 
        preTitle="V I S U A L S"
        title="GALLERY"
        descTitle="CAPTURING MOMENTS"
        descText="A curated collection of visual stories and memories frozen in time, blending aesthetics with modern spatial design."
        indexStr="04_05"
        bgImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2574&auto=format&fit=crop"
      />
      <div ref={containerRef} className="min-h-screen bg-brand-cream text-brand-black pt-32 pb-12 px-[4vw] font-inter">
      
      {/* Top Section */}
      <div className="relative w-full max-w-[1300px] mx-auto h-[600px] mb-12">
        
        {/* Main Image Container */}
        {/* w-[70%] leaves a 30% empty column on the left */}
        <div className="absolute top-0 right-0 w-[70%] h-[600px] rounded-[3rem] overflow-hidden gallery-main-img shadow-2xl bg-white/50">
          <img 
            src={galleryItems[activeIndex].image}
            alt="Modern Lamp" 
            className="w-full h-full object-cover"
          />

          {/* Mask 2: Bottom Right Cutout (for the Pill) */}
          <div className="absolute bottom-0 right-0 w-[240px] h-[90px] bg-brand-cream rounded-tl-[3rem] z-10 pointer-events-none"></div>
        </div>

        {/* Text Content */}
        <div className="relative w-full h-full z-20 pointer-events-none flex flex-col justify-between py-6 items-start">
          
          <div className="pointer-events-auto gallery-text-content max-w-full">
            {/* Dynamic Shape Mask: Wraps the text exactly to form a custom cutout shape for every image */}
            <div className="inline-block bg-brand-cream rounded-br-[3rem] pr-10 pb-6 -mt-6 pt-6 -ml-4 pl-4 relative z-20">
              <h1 className="text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-inter font-bold leading-[1] tracking-tighter uppercase text-brand-black">
                {galleryItems[activeIndex].title.map((line, i) => (
                  <div key={i} className="overflow-hidden"><span className="block gallery-title">{line}</span></div>
                ))}
              </h1>
            </div>
            
            <div className="mt-4">
              <p className="gallery-subtitle text-brand-black/80 text-base md:text-lg max-w-[320px] leading-snug mb-8 font-medium font-inter">
                {galleryItems[activeIndex].subtitle}
              </p>

              <button className="gallery-btn bg-brand-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e65500] transition-colors shadow-xl tracking-wide text-sm font-inter pointer-events-auto mb-10">
                Explore collection
              </button>
            </div>
          </div>
        </div>

        {/* 100k+ Happy Homes Pill */}
        <div className="absolute bottom-4 right-5 z-30 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-3 shadow-md happy-homes border border-white">
          <div className="flex -space-x-3">
            <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
            <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
            <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="User" />
          </div>
          <div className="text-[12px] font-semibold leading-tight text-brand-black font-inter">
            100k+ <br />
            <span className="font-medium opacity-80 text-[10px]">Happy homes</span>
          </div>
        </div>
      </div>

      {/* Thumbnails Row at the bottom of the page to fill empty space */}
      <div className="w-full max-w-[1300px] mx-auto flex flex-wrap gap-6 md:gap-8 items-center pointer-events-auto mt-12 mb-8 pl-4">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id}
            onClick={() => handleItemClick(index)}
            className={`w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-300 ${activeIndex === index ? 'ring-[4px] ring-brand-orange ring-offset-[4px] ring-offset-brand-cream scale-105 shadow-xl opacity-100' : 'opacity-50 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0'}`}
          >
            <img src={item.thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        
        {/* Decorative dot matching the screenshot */}
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-brand-black ml-4 hidden md:block"></div>
      </div>

      </div>
    </div>
  );
}
