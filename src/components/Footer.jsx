import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-[#E5E5E5] pt-32 pb-12 px-8 md:px-16 relative z-50 border-t border-white/5">
      
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Massive Call to Action */}
        <div className="mb-24">
          <h2 className="font-drose text-[12vw] leading-[0.85] tracking-tighter uppercase">
            Let's create<br />
            <span className="text-brand-orange italic drop-shadow-[0_0_15px_rgba(255,94,0,0.5)]">History.</span>
          </h2>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24 font-inter text-sm md:text-base opacity-80">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-widest uppercase mb-4 text-white">Office</h4>
            <p>[Business Address]</p>
            <p>Pan-India Operations</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-widest uppercase mb-4 text-white">Contact</h4>
            <a href="mailto:gouravevents00@gmail.com" className="hover:text-brand-orange transition-colors">gouravevents00@gmail.com</a>
            <a href="#" className="hover:text-brand-orange transition-colors">[Phone Number TO BE PROVIDED]</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-widest uppercase mb-4 text-white">Social</h4>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-widest uppercase mb-4 text-white">Legal</h4>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 opacity-50 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Creative Era. All rights reserved.</p>
          <p className="mt-4 md:mt-0 uppercase tracking-widest font-semibold">Crafted with precision.</p>
        </div>

      </div>
    </footer>
  );
}
