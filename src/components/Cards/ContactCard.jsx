import React from 'react';

export default function ContactCard() {
  return (
    <div className="card-scroll-wrapper absolute top-0 left-0 w-full opacity-0 invisible z-20" style={{ height: '200vh' }}>

      {/* Spacer for Intro Page */}
      <div className="w-full h-screen pointer-events-none" />

      {/* Actual Content Section */}
      <div className="w-full h-screen min-h-[110dvh] shrink-0 flex flex-col items-center justify-center p-8 bg-brand-black text-brand-cream transition-colors duration-300 relative z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.5)] overflow-hidden">

        <h2 className="text-[10vw] lg:text-[6vw] font-drose leading-none uppercase mb-12 text-center text-brand-cream transition-colors duration-300">Let's Connect</h2>

        <div className="w-full max-w-4xl bg-brand-black/90 border border-brand-cream/5 transition-colors duration-300 p-6 md:p-8 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
          {/* Subtle animated background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,94,0,0.1) 0%, rgba(255,94,0,0) 70%)' }}></div>

          <form className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" placeholder="Full Name" className="flex-1 bg-transparent border-b border-brand-cream/30 pb-4 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-orange transition-colors rounded-none" />
              <input type="text" placeholder="Company / Organization" className="flex-1 bg-transparent border-b border-brand-cream/30 pb-4 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-orange transition-colors rounded-none" />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <input type="email" placeholder="Email Address" className="flex-1 bg-transparent border-b border-brand-cream/30 pb-4 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-orange transition-colors rounded-none" />
              <input type="tel" placeholder="Phone Number" className="flex-1 bg-transparent border-b border-brand-cream/30 pb-4 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-orange transition-colors rounded-none" />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <select className="flex-1 bg-transparent border-b border-brand-cream/30 pb-4 text-brand-cream focus:outline-none focus:border-brand-orange transition-colors rounded-none appearance-none">
                <option value="" disabled selected className="text-brand-black">Event Type</option>
                <option value="conference" className="text-brand-black">Conference</option>
                <option value="activation" className="text-brand-black">Brand Activation</option>
                <option value="launch" className="text-brand-black">Product Launch</option>
                <option value="public" className="text-brand-black">Public Event</option>
                <option value="gala" className="text-brand-black">Gala / Award Night</option>
                <option value="ceralab" className="text-brand-black">CERA LAB Innovation</option>
                <option value="other" className="text-brand-black">Other</option>
              </select>
              <input type="number" placeholder="Estimated Guest Count" className="flex-1 bg-transparent border-b border-brand-cream/30 pb-4 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-orange transition-colors rounded-none" />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" placeholder="Budget Range (Optional)" className="flex-1 bg-transparent border-b border-brand-cream/30 pb-4 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-orange transition-colors rounded-none" />
            </div>
            <textarea placeholder="Additional Details" rows="4" className="w-full bg-transparent border-b border-brand-cream/30 pb-4 text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:border-brand-orange transition-colors resize-none rounded-none"></textarea>

            <button type="button" className="w-full md:w-auto self-center md:self-start mt-4 md:mt-8 bg-brand-orange text-white px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-semibold hover:bg-brand-cream hover:text-brand-orange transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
