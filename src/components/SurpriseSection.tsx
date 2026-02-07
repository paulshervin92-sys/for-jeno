import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const SurpriseSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30 text-center">
      <button
        onClick={() => setOpen(true)}
        className="font-cursive text-2xl sm:text-3xl px-10 py-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Click for a Surprise 💝
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="text-center border-primary/20 bg-gradient-to-br from-card to-secondary/50 max-w-md">
          <DialogTitle className="sr-only">Surprise Message</DialogTitle>
          <div className="py-8 px-4">
            <span className="text-6xl mb-6 block animate-float">💖</span>
            <p className="font-serif-display text-xl sm:text-2xl text-foreground italic leading-relaxed">
              "You are my favorite person in every lifetime."
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <span className="animate-float" style={{ animationDelay: "0s" }}>🌹</span>
              <span className="animate-float" style={{ animationDelay: "0.2s" }}>💕</span>
              <span className="animate-float" style={{ animationDelay: "0.4s" }}>🌹</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SurpriseSection;
