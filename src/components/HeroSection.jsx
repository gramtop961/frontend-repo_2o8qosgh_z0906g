import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const HeroSection = ({ onExplore }) => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft glow overlay that won't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-4">
          <Rocket className="w-4 h-4 text-violet-300" />
          <span className="text-sm text-violet-200 tracking-wide">Introducing</span>
          <span className="text-sm font-semibold text-white">EverWant</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
          One Universe. Infinite Wants.
        </h1>
        <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base text-white/80">
          Shop smarter, stream wider, book faster, and game harder — all in one mesmerizing experience.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-cyan-400/30 transition-all"
          >
            Explore Tabs
            <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </button>
          <a
            href="#profile"
            className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white/90 hover:bg-white/20 transition"
          >
            Your Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
