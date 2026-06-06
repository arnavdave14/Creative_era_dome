import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const companies = ['APPLE', 'GOOGLE', 'AMAZON', 'META', 'MICROSOFT', 'NETFLIX', 'TESLA', 'STARBUCKS', 'NIKE'];

export default function CrossedMarquee() {
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    // Infinite scrolling marquee effect
    const ctx = gsap.context(() => {
      gsap.to(marquee1Ref.current, {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1,
      });

      gsap.to(marquee2Ref.current, {
        xPercent: 50,
        ease: 'none',
        duration: 20,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const marqueeContent = [...companies, ...companies, ...companies, ...companies].map((company, index) => (
    <React.Fragment key={index}>
      <span className="mx-8 font-drose text-[10vh] leading-none tracking-wider text-transparent" style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.2)' }}>
        {company}
      </span>
      <span className="mx-8 text-[8vh] text-white/10">•</span>
    </React.Fragment>
  ));

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 flex items-center justify-between overflow-hidden pointer-events-none opacity-0 marquee-container w-full h-full px-8">
      {/* Left Vertical Marquee */}
      <div className="h-[200vh] w-12 flex items-center justify-center relative">
        <div className="flex h-[200vh] whitespace-nowrap items-center transform -rotate-90 absolute">
          <div ref={marquee1Ref} className="flex items-center">
            {marqueeContent}
          </div>
        </div>
      </div>
      
      {/* Right Vertical Marquee */}
      <div className="h-[200vh] w-12 flex items-center justify-center relative">
        <div className="flex h-[200vh] whitespace-nowrap items-center transform -rotate-90 absolute">
          <div ref={marquee2Ref} className="flex items-center">
            {marqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}
