import { motion } from "framer-motion";
import { useScrollAnimationAll } from "@/hooks/useScrollAnimationAll";
import timelineBg from "@/assets/timeline-bg.jpg";
import FloatingPetals from "@/components/FloatingPetals";

const milestones = [
  {
    emoji: "✨",
    title: "The First Glance",
    description: "The moment our eyes met, the universe whispered — she's the one.",
    side: "left" as const,
  },
  {
    emoji: "💬",
    title: "Our First Conversation",
    description: "Words flowed like poetry. Every sentence pulled me deeper into your world.",
    side: "right" as const,
  },
  {
    emoji: "☕",
    title: "Our First Date",
    description: "Nervous hearts, shy smiles, and a feeling that this was just the beginning.",
    side: "left" as const,
  },
  {
    emoji: "🌹",
    title: "The First 'I Love You'",
    description: "Three words. One heartbeat. A lifetime of meaning.",
    side: "right" as const,
  },
  {
    emoji: "🌙",
    title: "Late Night Talks",
    description: "Those 3 AM conversations where we shared our souls, our fears, our dreams.",
    side: "left" as const,
  },
  {
    emoji: "💍",
    title: "Forever Starts Now",
    description: "Every moment with you is a milestone. The best chapters are yet to come.",
    side: "right" as const,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: (side: string) => ({
    opacity: 0,
    x: side === "left" ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const OurStory = () => {
  const scrollRef = useScrollAnimationAll();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" ref={scrollRef}>
      <FloatingPetals />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${timelineBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-6xl mb-4 block animate-float">💫</span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-cursive text-primary mb-4 drop-shadow-lg">
            Our Love Story
          </h1>
          <p className="font-serif-display text-lg sm:text-xl text-foreground/70 italic max-w-lg mx-auto">
            "A journey of two hearts beating as one"
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
          {/* Mobile center line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:hidden" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              custom={milestone.side}
              variants={itemVariants}
              className={`relative flex items-start mb-16 ${
                milestone.side === "left"
                  ? "md:flex-row md:pr-[52%]"
                  : "md:flex-row-reverse md:pl-[52%]"
              } flex-row pl-14 md:pl-0`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/30 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              </div>

              {/* Card */}
              <div className="w-full group">
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                  {/* Decorative gradient corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

                  <span className="text-4xl mb-3 block">{milestone.emoji}</span>
                  <h3 className="text-3xl sm:text-4xl font-cursive text-primary mb-3">
                    {milestone.title}
                  </h3>
                  <p className="font-serif-display text-foreground/70 italic leading-relaxed text-base sm:text-lg">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-background to-secondary/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl mb-4 block animate-float">💕</span>
          <p className="font-serif-display text-xl sm:text-2xl text-foreground/70 italic max-w-xl mx-auto">
            "And the best part? Our story is still being written…"
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default OurStory;
