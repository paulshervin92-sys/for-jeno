import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import letterBg from "@/assets/letter-bg.jpg";
import FloatingPetals from "@/components/FloatingPetals";

const letterParagraphs = [
  "My Dearest Love,",
  "If I could bottle up the way you make me feel, it would be the most beautiful perfume in the world — warm, intoxicating, and absolutely unforgettable.",
  "You came into my life like the first ray of sunshine after a long winter. Suddenly, everything had color. Everything had meaning. Everything had you.",
  "I love the way you laugh — like the whole world stops just to listen. I love how your eyes light up when you talk about the things you're passionate about. I love how safe I feel when I'm with you.",
  "You are not just my love. You are my best friend, my comfort zone, my favorite notification, my reason to smile at random moments.",
  "On this Rose Day, I want you to know — every rose in the world could wilt, but my love for you? It only grows. Every single day.",
  "I am yours. Today, tomorrow, and in every lifetime after this.",
  "Forever and always,\nYours 💕"
];

const reasons = [
  "Your smile heals my worst days",
  "You believe in me when I forget to",
  "Your hugs feel like home",
  "You make ordinary moments magical",
  "Your voice is my favorite sound",
  "You love me exactly as I am",
  "You're the plot twist I never saw coming",
  "Every day with you is my favorite day",
];

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReasons, setShowReasons] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingPetals />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${letterBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-6xl mb-4 block animate-float">💌</span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-cursive text-primary mb-4 drop-shadow-lg">
            A Letter For You
          </h1>
          <p className="font-serif-display text-lg sm:text-xl text-foreground/70 italic max-w-lg mx-auto mb-8">
            "Some feelings are too deep for words, so I wrote them down"
          </p>

          {!isOpen && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="font-cursive text-2xl px-10 py-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
            >
              Open My Letter 💕
            </motion.button>
          )}
        </motion.div>
      </section>

      {/* The Letter */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-20 px-4 sm:px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-2xl mx-auto"
            >
              {/* Paper effect */}
              <div className="bg-gradient-to-br from-cream to-card border border-gold/30 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 text-gold/30 text-2xl">❦</div>
                <div className="absolute top-4 right-4 text-gold/30 text-2xl">❦</div>
                <div className="absolute bottom-4 left-4 text-gold/30 text-2xl rotate-180">❦</div>
                <div className="absolute bottom-4 right-4 text-gold/30 text-2xl rotate-180">❦</div>

                <div className="space-y-6">
                  {letterParagraphs.map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.3, duration: 0.6 }}
                      className={`font-serif-display leading-relaxed whitespace-pre-line ${
                        i === 0
                          ? "text-2xl sm:text-3xl font-cursive text-primary"
                          : i === letterParagraphs.length - 1
                          ? "text-xl sm:text-2xl font-cursive text-primary pt-4"
                          : "text-base sm:text-lg text-foreground/80 italic"
                      }`}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* Wax seal */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 3, duration: 0.8, type: "spring" }}
                  className="mt-8 flex justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-rose-deep flex items-center justify-center shadow-lg">
                    <span className="text-3xl">❤️</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 8 Reasons Section */}
      {isOpen && (
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/30">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-5xl sm:text-6xl font-cursive text-primary mb-6">
              8 Reasons I Love You
            </h2>

            {!showReasons ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowReasons(true)}
                className="font-cursive text-xl px-8 py-3 rounded-full bg-primary text-primary-foreground shadow-lg mt-4"
              >
                Reveal Them 🌹
              </motion.button>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
              >
                {reasons.map((reason, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0 },
                    }}
                    className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-2xl mb-2 block text-gold">{i + 1}</span>
                    <p className="font-serif-display text-foreground/80 italic">{reason}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </section>
      )}

      {/* Bottom */}
      {isOpen && (
        <section className="py-16 px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl block mb-4 animate-float">🌹</span>
            <p className="font-serif-display text-xl text-foreground/70 italic">
              "This letter lives here forever, just like my love for you."
            </p>
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default LoveLetter;
