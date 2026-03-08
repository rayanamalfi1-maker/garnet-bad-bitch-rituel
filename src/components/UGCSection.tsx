import { motion } from "framer-motion";

const photos = [
  {
    src: "/lovable-uploads/bc429f29-08a7-404a-b74d-dfb7f35fea8a.png",
    name: "Léa",
    city: "Paris",
    review: "Je le mets chaque soir avant de sortir. C'est devenu mon armure invisible. Trois compliments dès la première soirée.",
    stars: 5,
  },
  {
    src: "/lovable-uploads/1a884897-2ed9-4e8e-be7d-2186ecfa4407.png",
    name: "Sarah",
    city: "Lyon",
    review: "Ma meilleure amie m'a demandé ce qui avait changé chez moi. C'était juste ce collier… et l'énergie qu'il me donne.",
    stars: 5,
  },
  {
    src: "/lovable-uploads/ad54a8c9-5502-4dca-b289-48e6dd0f8860.png",
    name: "Inès",
    city: "Bordeaux",
    review: "Sobre, élégant, et cette couleur grenat… Les gens me fixent sans savoir pourquoi. Moi, je sais.",
    stars: 5,
  },
  {
    src: "/lovable-uploads/39313238-8fe5-4007-be80-f428e9459866.png",
    name: "Camille",
    city: "Marseille",
    review: "Je l'ai offert à ma sœur. Elle ne l'enlève plus. On dirait qu'elle a pris 10 niveaux de confiance.",
    stars: 4,
  },
];

const UGCSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.h2
        className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        À quoi il ressemble sur de{" "}
        <span className="italic text-gradient-garnet">vraies femmes</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12 text-sm">
        Elles l'ont adopté. À ton tour.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...photos, ...photos].map((p, i) => (
          <motion.div
            key={p.name}
            className="relative rounded-lg"
            style={{ perspective: 800 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="group relative w-full aspect-[3/4] [transform-style:preserve-3d] transition-transform duration-700 ease-in-out hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-lg overflow-hidden">
                <img
                  src={p.src}
                  alt={`${p.name} portant le collier grenat`}
                  className="w-full h-full object-cover border"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <span className="text-sm font-medium text-foreground">
                    {p.name}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    · {p.city}
                  </span>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg overflow-hidden bg-card border border-border flex flex-col items-center justify-center p-5 text-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span
                      key={s}
                      className={`text-lg ${s < p.stars ? "text-garnet-400" : "text-muted-foreground/30"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{p.review}"
                </p>
                <span className="text-xs font-semibold text-foreground mt-auto">
                  — {p.name}, {p.city}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UGCSection;
