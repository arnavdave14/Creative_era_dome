import React from 'react';
import CinematicIntro from '../components/CinematicIntro';

export default function ContactUs() {
  return (
    <div className="w-full bg-brand-cream">
      <CinematicIntro 
        preTitle="C O N N E C T"
        title="CONTACT"
        descTitle="GET IN TOUCH"
        descText="We'd love to hear from you. Reach out to collaborate, ask questions, or just say hello."
        indexStr="05_05"
        bgImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2574&auto=format&fit=crop"
      />
      <div className="min-h-screen bg-brand-cream text-brand-black flex flex-col items-center justify-center pt-24">
      <h1 className="text-7xl mb-12">Get In Touch</h1>
      <form className="w-full max-w-2xl space-y-6 font-inter px-4">
        <div className="flex flex-col md:flex-row gap-6">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300"
          />
          <input 
            type="text" 
            placeholder="Company / Organization" 
            className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300"
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <select className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300 appearance-none">
            <option value="" disabled selected>Event Type</option>
            <option value="conference">Conference</option>
            <option value="activation">Brand Activation</option>
            <option value="launch">Product Launch</option>
            <option value="public">Public Event</option>
            <option value="gala">Gala / Award Night</option>
            <option value="ceralab">CERA LAB Innovation</option>
            <option value="other">Other</option>
          </select>
          <input 
            type="number" 
            placeholder="Estimated Guest Count" 
            className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300"
          />
        </div>
        <input 
          type="text" 
          placeholder="Budget Range (Optional)" 
          className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300"
        />
        <textarea 
          placeholder="Additional Details" 
          rows="4" 
          className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300 resize-none"
        ></textarea>
        <button className="w-full bg-brand-orange text-brand-cream py-4 uppercase tracking-widest font-bold hover:bg-brand-black transition-colors duration-300 rounded-none">
          Send Message
        </button>
      </form>
      </div>
    </div>
  );
}
