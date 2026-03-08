import { motion } from "framer-motion";

const photos = [
{ src: "/lovable-uploads/bc429f29-08a7-404a-b74d-dfb7f35fea8a.png", name: "Léa", city: "Paris" },
{ src: "/lovable-uploads/1a884897-2ed9-4e8e-be7d-2186ecfa4407.png", name: "Sarah", city: "Lyon" },
{ src: "/lovable-uploads/ad54a8c9-5502-4dca-b289-48e6dd0f8860.png", name: "Inès", city: "Bordeaux" },
{ src: "/lovable-uploads/39313238-8fe5-4007-be80-f428e9459866.png", name: "Camille", city: "Marseille" }];


const UGCSection = () =>
<section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.h2
      className="font-serif text-3xl md:text-4xl text-center mb-4 text-foreground"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      
        À quoi il ressemble sur de <span className="italic text-gradient-garnet">vraies femmes</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12 text-sm">
        Elles l'ont adopté. À ton tour.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((p, i) =>
      <motion.div
        key={p.name}
        className="relative group overflow-hidden rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}>
        
            <img
          src={p.src}
          alt={`${p.name} portant le collier grenat`}
          className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 border"
          loading="lazy" />
        
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <span className="text-sm font-medium text-foreground">{p.name}</span>
              <span className="text-xs text-muted-foreground ml-1">· {p.city}</span>
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default UGCSection;