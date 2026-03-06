import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Marie L.", note: 5, text: "Je l'ai mis pour un date et j'ai reçu 3 compliments avant même le dessert. Ce collier change l'énergie.", tag: "Pour soi" },
  { name: "Chloé D.", note: 5, text: "Ma meilleure amie l'a vu sur moi et m'a demandé où le trouver. Commandé pour elle le lendemain.", tag: "Offert en cadeau" },
  { name: "Amira K.", note: 5, text: "Le genre de bijou que tu mets et tu te tiens différemment. Pas besoin de plus.", tag: "Pour soi" },
  { name: "Laura M.", note: 4, text: "Qualité au top, le grenat est magnifique en vrai. Mieux qu'en photo même.", tag: "Pour soi" },
  { name: "Julie R.", note: 5, text: "Offert à ma sœur pour ses 25 ans. Elle ne le quitte plus. Le genre de cadeau qui marque.", tag: "Offert en cadeau" },
  { name: "Sofia B.", note: 5, text: "J'avais peur que ce soit du marketing creux. Mais non — tu le mets et tu le sens. Quelque chose change.", tag: "Pour soi" },
];

const ReviewsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? reviews.filter((r) => r.tag === filter) : reviews;

  return (
    <section id="avis" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Ce qu'elles en <span className="text-gradient-garnet">disent</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-accent text-accent" />
            ))}
            <span className="ml-2 text-foreground font-medium">4,8/5</span>
          </div>
          <p className="text-sm text-muted-foreground">Basé sur 1 200+ avis vérifiés</p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-10">
          {[null, "Pour soi", "Offert en cadeau"].map((tag) => (
            <button
              key={tag ?? "all"}
              onClick={() => setFilter(tag)}
              className={`text-xs px-4 py-2 rounded-full border transition-colors ${
                filter === tag
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag ?? "Tous"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((r, i) => (
            <motion.div
              key={r.name}
              className="p-6 rounded-xl border-glow bg-card/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(r.note)].map((_, j) => (
                  <Star key={j} size={12} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">{r.name}</span>
                <span className="text-xs text-primary/70">{r.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
