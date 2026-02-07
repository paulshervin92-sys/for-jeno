import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className={`relative z-10 text-center px-6 transition-all duration-[1.5s] ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="animate-float mb-6 inline-block">
          <span className="text-6xl">🌹</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-cursive text-primary mb-6 drop-shadow-lg">
          Happy Rose Day, My Love
        </h1>

        <p className="font-serif-display text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto italic leading-relaxed">
          "Every rose reminds me of you — beautiful, rare, and unforgettable."
        </p>

        <div className="mt-10 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
