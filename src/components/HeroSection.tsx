import { motion } from "framer-motion";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-necklace.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Collier grenat sur velours sombre"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-medium mb-6 border border-primary/30 px-4 py-2 rounded-full">
            Rituel de grenat pour femmes qui posent leurs standards
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Le collier que tu mets quand tu refuses d'être la version{" "}
          <span className="italic text-gradient-garnet">sage</span> de toi.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Pas un simple bijou. Un rituel. Une façon de te rappeler qui tu es vraiment
          avant de passer cette porte.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-2 mb-8 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-accent text-accent" />
            ))}
          </div>
          <span>4,8/5</span>
          <span className="text-border">•</span>
          <span>1 200+ clientes</span>
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-muted-foreground line-through text-lg">89 €</span>
            <span className="text-3xl font-bold text-foreground">49 €</span>
            <span className="text-xs uppercase tracking-wider bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
              Offre lancement
            </span>
          </div>

          <button className="gradient-garnet text-primary-foreground font-semibold text-lg px-12 py-4 rounded-full hover:opacity-90 transition-opacity animate-glow-pulse w-full max-w-sm">
            Ajouter au panier
          </button>

          <a href="#rituel" className="block mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
            Voir le rituel en 30 secondes ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
