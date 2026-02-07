import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const roses = [
  { emoji: "🌹", color: "Red Rose", meaning: "Deep Love", bgClass: "from-primary/20 to-primary/5" },
  { emoji: "🌸", color: "Pink Rose", meaning: "Sweetness & Grace", bgClass: "from-rose-petal/30 to-rose-blush/20" },
  { emoji: "🤍", color: "White Rose", meaning: "Pure Forever", bgClass: "from-cream to-secondary/30" },
];

const RoseMeaningSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div ref={ref} className="fade-up max-w-4xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-cursive text-primary mb-8">
          Why a Rose?
        </h2>

        <p className="font-serif-display text-lg sm:text-xl text-foreground/70 italic max-w-2xl mx-auto mb-14 leading-relaxed">
          "Because roses speak the language my lips sometimes cannot.
          They say 'I love you', 'I cherish you', and 'I choose you' — every single day."
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {roses.map((rose, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 bg-gradient-to-br ${rose.bgClass} border border-border shadow-md hover:shadow-xl transition-shadow duration-300`}
            >
              <span className="text-5xl mb-4 block">{rose.emoji}</span>
              <h3 className="text-2xl font-cursive text-foreground mb-2">{rose.color}</h3>
              <p className="font-serif-display text-muted-foreground italic">{rose.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoseMeaningSection;
