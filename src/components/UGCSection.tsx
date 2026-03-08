import { motion } from "framer-motion";

const photos = [
{
  src: "/lovable-uploads/8edf09e0-e442-4e88-a844-d059cc5de72d.png",
  name: "Léa",
  city: "Paris",
  review: "Je le mets chaque soir avant de sortir. C'est devenu mon armure invisible. Trois compliments dès la première soirée.",
  stars: 5
},
{
  src: "/lovable-uploads/ecfe6271-9a5e-41c7-b222-e0e7c9997751.png",
  name: "Sarah",
  city: "Lyon",
  review: "Ma meilleure amie m'a demandé ce qui avait changé chez moi. C'était juste ce collier… et l'énergie qu'il me donne.",
  stars: 5
},
{
  src: "/lovable-uploads/cdf49c04-8ef8-4a4d-bc23-0856f8efc72a.png",
  name: "Inès",
  city: "Bordeaux",
  review: "Sobre, élégant, et cette couleur grenat… Les gens me fixent sans savoir pourquoi. Moi, je sais.",
  stars: 5
},
{
  src: "/lovable-uploads/76624604-ba0e-48b9-aebb-432bb6571440.png",
  name: "Camille",
  city: "Marseille",
  review: "Je l'ai offert à ma sœur. Elle ne l'enlève plus. On dirait qu'elle a pris 10 niveaux de confiance.",
  stars: 4
},
{
  src: "/lovable-uploads/317a2970-2512-4fdd-b8b1-36cc5cb5e04a.png",
  name: "Chloé",
  city: "Toulouse",
  review: "Je ne croyais pas aux bijoux 'énergétiques'. Puis j'ai porté celui-ci à un rendez-vous… il m'a rappelée le lendemain.",
  stars: 5
},
{
  src: "/lovable-uploads/861199c2-b80f-403f-af07-079f18c28653.png",
  name: "Amira",
  city: "Lille",
  review: "Il va avec tout. Robe noire, jean blanc, peu importe. C'est la pièce qui transforme n'importe quelle tenue.",
  stars: 5
},
{
  src: "/lovable-uploads/80e59576-d460-4a4d-87a9-8702db392082.png",
  name: "Manon",
  city: "Nantes",
  review: "Mon copain m'a dit que j'avais 'quelque chose en plus' depuis que je le porte. Mission accomplie.",
  stars: 5
},
{
  src: "/lovable-uploads/5e6eb797-6005-443d-9eb1-f94196bc22d0.png",
  name: "Yasmine",
  city: "Nice",
  review: "Le grenat capte la lumière d'une façon incroyable. J'ai l'impression de porter un secret précieux.",
  stars: 4
}];


const UGCSection = () =>
<section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.h2
      className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      
        À quoi il ressemble sur de{" "}
        <span className="italic text-gradient-garnet">vraies femmes</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12 text-sm">
        Elles l'ont adopté. À ton tour.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((p, i) =>
      <motion.div
        key={`${p.name}-${i}`}
        className="relative rounded-lg"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}>
        
            <div className="group relative w-full aspect-[3/4] [transform-style:preserve-3d] transition-transform duration-700 ease-in-out hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-lg overflow-hidden">
                <img
              src={p.src}
              alt={`${p.name} portant le collier grenat`}
              className="w-full h-full object-cover border"
              loading="lazy" />
            
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
                  {Array.from({ length: 5 }).map((_, s) =>
              <span
                key={s}
                className={`text-lg ${s < p.stars ? "text-garnet-400" : "text-muted-foreground/30"}`}>
                
                      ★
                    </span>
              )}
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
      )}
      </div>
    </div>
  </section>;


export default UGCSection;