import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

      {/* Floating Glowing Orbs (Optimized with Radial Gradients for 60fps performance) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] mix-blend-screen ambient-orb-1 pointer-events-none" 
           style={{ background: 'radial-gradient(circle, rgba(255,94,0,0.15) 0%, rgba(255,94,0,0) 70%)' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] mix-blend-screen ambient-orb-2 pointer-events-none" 
           style={{ background: 'radial-gradient(circle, rgba(45,58,32,0.3) 0%, rgba(45,58,32,0) 70%)' }} />
      <div className="absolute top-[20%] left-[30%] w-[50vw] h-[50vw] mix-blend-screen ambient-orb-3 pointer-events-none" 
           style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.15) 0%, rgba(30,58,138,0) 70%)' }} />
      
      {/* Subtle grid lines for structural scale */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
           style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '5vw 5vw' }}>
      </div>

      {/* Vignette effect to darken edges */}
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
