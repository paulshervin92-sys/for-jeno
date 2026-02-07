import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import he1 from "@/assets/he1.png";
import he2 from "@/assets/he2.png";
import he3 from "@/assets/he3.png";
import he4 from "@/assets/he4.png";
import he5 from "@/assets/he5.png";
import he6 from "@/assets/he6.png";

const photos = [
  { src: he1, alt: "Her photo 1", caption: "Favorite moment 💛" },
  { src: he2, alt: "Her photo 2", caption: "Sweet memory 🌸" },
  { src: he3, alt: "Her photo 3", caption: "Golden hour 💕" },
  { src: he4, alt: "Her photo 4", caption: "That day ✨" },
  { src: he5, alt: "Her photo 5", caption: "Brightest smile 🌹" },
  { src: he6, alt: "Her photo 6", caption: "Always a vibe 💖" },
];

const PhotoMemoriesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div ref={ref} className="fade-up max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-cursive text-primary text-center mb-14">
          Our Beautiful Moments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="photo-card group rounded-2xl overflow-hidden bg-card border border-border shadow-lg"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-rose-blush to-secondary">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-serif-display text-foreground/70 italic">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoMemoriesSection;
