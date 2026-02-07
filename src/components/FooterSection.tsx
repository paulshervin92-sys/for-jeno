const FooterSection = () => {
  return (
    <footer className="py-16 px-6 bg-secondary/40 text-center">
      <div className="max-w-xl mx-auto">
        <div className="animate-float mb-6 inline-block">
          <span className="text-4xl">🌹</span>
        </div>
        <p className="font-serif-display text-lg sm:text-xl text-foreground/70 italic leading-relaxed">
          Happy Rose Day, my love. This website blooms only for you 🌹
        </p>
        <div className="mt-8 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="text-sm animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              ❤️
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground font-body">
          Made with love, for the love of my life
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
