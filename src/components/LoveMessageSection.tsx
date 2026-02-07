import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LoveMessageSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div ref={ref} className="fade-up max-w-3xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-cursive text-primary mb-10">
          A Note From My Heart
        </h2>

        <div className="space-y-6 font-serif-display text-lg sm:text-xl text-foreground/80 leading-relaxed italic">
          <p>
            From the moment you came into my life, everything started to bloom.
          </p>
          <p>
            Just like a rose, you fill my days with color, fragrance, and warmth.
          </p>
          <p>
            This Rose Day, I give you not just flowers, but my heart, my soul, and my forever.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <span className="text-2xl animate-float" style={{ animationDelay: "0s" }}>🌹</span>
          <span className="text-2xl animate-float" style={{ animationDelay: "0.3s" }}>💕</span>
          <span className="text-2xl animate-float" style={{ animationDelay: "0.6s" }}>🌹</span>
        </div>
      </div>
    </section>
  );
};

export default LoveMessageSection;
