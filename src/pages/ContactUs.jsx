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
      <form className="w-full max-w-md space-y-6 font-inter">
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300"
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full bg-transparent border-b-2 border-brand-black/20 focus:border-brand-orange outline-none py-3 transition-colors duration-300"
        />
        <button className="w-full bg-brand-orange text-brand-cream py-4 uppercase tracking-widest font-bold hover:bg-brand-black transition-colors duration-300">
          Send Message
        </button>
      </form>
      </div>
    </div>
  );
}
