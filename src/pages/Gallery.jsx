import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CinematicIntro from '../components/CinematicIntro';

export default function Gallery() {
  const containerRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      title: ["LIGHTS MADE", "FOR MODERN", "SPACES"],
      subtitle: "Thoughtfully crafted lamps that bring warmth, ambiance, and style to your living.",
      image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: ["AURA LAMP", "ELEVATE", "INTERIOR"],
      subtitle: "Premium lighting fixtures designed to elevate your modern spatial design.",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: ["LUME LIGHT", "MINIMALIST", "BRILLIANCE"],
      subtitle: "Minimalist design meeting elegant functionality for the modern home.",
      image: "https://images.unsplash.com/photo-1524061614234-8449637d36ce?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1524061614234-8449637d36ce?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: ["NOVA SHINE", "CLASSIC", "AESTHETICS"],
      subtitle: "A modern classic that blends seamless aesthetics with brilliant illumination.",
      image: "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?q=80&w=2000&auto=format&fit=crop",
      thumb: "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?q=80&w=800&auto=format&fit=crop"
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
