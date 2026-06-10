import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Component
function CustomCursor() {
  const cursorRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Accurately center the cursor on the mouse tip
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
      
      // Use quickTo instead of quickSetter to add a buttery liquid trailing effect
      const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3.out" });
      const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3.out" });

      const onMouseMove = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-brand-cream border border-brand-black/20 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(0,0,0,0.2)] hidden md:block will-change-transform"
      style={{ transition: 'width 0.3s, height 0.3s' }}
      id="custom-cursor"
    />
  );
}

// Magnetic Button Component
function MagneticButton({ children, className = "" }) {
  const magneticRef = useRef(null);

  useEffect(() => {
    const element = magneticRef.current;
    if (!element) return;
    
    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.4);
      yTo(y * 0.4);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={magneticRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: () => `+=${ScrollTrigger.maxScroll(window)}`,
          invalidateOnRefresh: true,
          scrub: 0.3,
          onUpdate: (self) => {
            if (textRef.current) {
              textRef.current.innerText = `${Math.round(self.progress * 100)}%`;
            }
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  // Force GSAP to recalculate progress bar range after route changes and GSAP pinning
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500); // Give enough time for child components (like Home) to create their pin spacers
    return () => clearTimeout(timer);
  }, [pathname]);

  const scrollToTop = () => {
    window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: 0 }));
  };

  const scrollDown = () => {
    window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: document.body.scrollHeight }));
  };

  return (
    <>
      <div 
        ref={progressRef}
        className="fixed top-0 left-0 h-1 bg-brand-orange w-full z-[90] origin-left scale-x-0"
      />
      
      {/* Corner Controls */}
      <div className="fixed bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 z-[90] flex justify-between items-center pointer-events-none text-white mix-blend-difference transition-colors duration-300">
        
        {/* Left: Top Arrow & Percentage */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <MagneticButton>
            <button onClick={scrollToTop} className="w-10 h-10 md:w-12 md:h-12 border border-brand-cream/30 rounded-full flex items-center justify-center hover:bg-brand-cream hover:text-brand-black transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
          </MagneticButton>
          <span ref={textRef} className="font-drose text-xl md:text-2xl tracking-widest mt-1">0%</span>
        </div>

        {/* Right: Down Arrow */}
        <div className="pointer-events-auto">
          <MagneticButton>
            <button onClick={scrollDown} className="w-10 h-10 md:w-12 md:h-12 border border-brand-cream/30 rounded-full flex items-center justify-center hover:bg-brand-cream hover:text-brand-black transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            </button>
          </MagneticButton>
        </div>

      </div>
    </>
  );
}

// Loading Screen
function LoadingScreen({ onComplete }) {
  const loaderRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete });
      tl.to(".loader-text", { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .to(".loader-text", { opacity: 0, y: -20, duration: 0.5, ease: "power3.in", delay: 0.5 })
        .to(loaderRef.current, { yPercent: -100, duration: 1, ease: "expo.inOut" });
    });
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[100] bg-brand-black flex items-center justify-center text-brand-cream">
      <h1 className="loader-text text-5xl font-drose tracking-widest opacity-0 translate-y-10">CREATIVE ERA</h1>
    </div>
  );
}

// Scroll Reset component for routing
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Navigation Component
function Navigation({ isLightMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, label) => {
    e.preventDefault();
    const trigger = ScrollTrigger.getById('masterScroll');
    if (trigger) {
      if (label === 'home') {
        window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: 0 }));
      } else {
        const labelTime = trigger.animation.labels[label];
        if (labelTime !== undefined) {
          const progress = labelTime / trigger.animation.duration();
          const scrollPos = trigger.start + (trigger.end - trigger.start) * progress;
          window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: scrollPos }));
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:px-8 md:py-6 flex justify-between items-center pointer-events-auto transition-colors duration-300 backdrop-blur-lg bg-brand-black/60 text-brand-cream border-b border-brand-cream/5 shadow-sm">
        
        {/* Logo */}
      <MagneticButton>
        <a href="/" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2">
          <div className="w-10 h-10 relative flex items-center justify-center font-drose text-3xl">
            {/* Custom interlocking CE logo replication */}
            <span className="absolute">C</span>
            <span className="absolute translate-x-2 text-brand-orange">E</span>
          </div>
          <div className="flex flex-col leading-none font-drose text-sm ml-2">
            <span>Creative</span>
            <span>Era</span>
          </div>
        </a>
      </MagneticButton>
      
      {/* Links */}
      <div className="space-x-6 font-inter text-xs uppercase tracking-widest flex items-center hidden lg:flex">
        <MagneticButton><a href="#" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-brand-orange transition-colors">Home</a></MagneticButton>
        <span className="opacity-30">|</span>
        <MagneticButton><a href="#" onClick={(e) => handleNavClick(e, 'expand-about')} className="hover:text-brand-orange transition-colors">About</a></MagneticButton>
        <span className="opacity-30">|</span>
        <MagneticButton><a href="#" onClick={(e) => handleNavClick(e, 'expand-gallery')} className="hover:text-brand-orange transition-colors">Gallery</a></MagneticButton>
        <span className="opacity-30">|</span>
        <MagneticButton><a href="#" onClick={(e) => handleNavClick(e, 'expand-products')} className="hover:text-brand-orange transition-colors">Services</a></MagneticButton>
        <span className="opacity-30">|</span>
        <MagneticButton><a href="#" onClick={(e) => handleNavClick(e, 'expand-contact')} className="hover:text-brand-orange transition-colors">Contact</a></MagneticButton>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 text-sm font-inter">
        <MagneticButton>
          <button onClick={toggleTheme} className="hover:text-brand-orange transition-colors" aria-label="Toggle Theme">
            {isLightMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            )}
          </button>
        </MagneticButton>
        
        {/* Hamburger Icon for Mobile */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-brand-cream transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-brand-cream transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-brand-cream transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-8 font-drose text-3xl text-brand-cream tracking-widest uppercase mt-12">
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-brand-orange transition-colors">Home</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'expand-about')} className="hover:text-brand-orange transition-colors">About</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'expand-gallery')} className="hover:text-brand-orange transition-colors">Gallery</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'expand-products')} className="hover:text-brand-orange transition-colors">Services</a>
          <a href="#" onClick={(e) => handleNavClick(e, 'expand-contact')} className="hover:text-brand-orange transition-colors">Contact</a>
        </div>
      </div>
    </>
  );
}

// Main App Root
function App() {
  const [loading, setLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isLightMode]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Listen for custom lenis-scroll events from Navigation
    const handleLenisScroll = (e) => {
      lenis.scrollTo(e.detail, { duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    };
    window.addEventListener('lenis-scroll', handleLenisScroll);

    return () => {
      window.removeEventListener('lenis-scroll', handleLenisScroll);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <Router>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      
      <div className="bg-brand-black min-h-screen text-brand-cream selection:bg-brand-orange selection:text-white relative transition-colors duration-300">
        <Navigation isLightMode={isLightMode} toggleTheme={() => setIsLightMode(!isLightMode)} />
        
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
