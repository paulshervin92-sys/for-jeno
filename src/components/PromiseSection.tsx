import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const promises = [
  "To choose you, every day.",
  "To protect your smile.",
  "To grow with you, like roses in spring.",
  "To love you endlessly.",
];

const PromiseSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Glowing heart background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[200px] sm:text-[300px] animate-glow-pulse opacity-[0.06] select-none">
          ❤️
        </div>
      </div>

      <div ref={ref} className="fade-up relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-cursive text-primary mb-12">
          My Promise to You
        </h2>

        <ul className="space-y-6">
          {promises.map((promise, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-3 font-serif-display text-lg sm:text-xl text-foreground/80 italic"
            >
              <span className="text-primary text-sm">🌹</span>
              <span>{promise}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PromiseSection;
