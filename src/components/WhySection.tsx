import { motion } from "framer-motion";
import necklaceWorn from "@/assets/necklace-worn.jpg";

const bullets = [
"Te mettre en condition avant chaque soirée ou rendez-vous",
"Te rappeler tes standards quand tu doutes",
"Faire tourner quelques têtes sans avoir besoin d'en faire trop",
"Marquer les moments où tu t'es vraiment choisie"];


const WhySection = () =>
<section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
        className="relative"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        
          <img

          alt="Femme portant le collier grenat"
          className="rounded-lg shadow-luxury w-full max-w-md mx-auto"
          loading="lazy" src="/lovable-uploads/f09b6b96-b88f-44b8-bbcd-4db651494955.png" />
        
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg -z-10" />
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground leading-tight">
            Ce n'est pas <span className="italic">"juste"</span> un collier.
            <br />
            <span className="text-gradient-garnet">C'est ton rituel.</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Tu connais cette version de toi qui s'excuse trop, qui doute, qui reste sage.
            Ce collier, c'est le geste que tu fais pour laisser cette version à la porte.
            Tu l'attaches, tu te regardes, et tu sors en étant{" "}
            <span className="text-foreground font-medium">celle qu'on n'oublie pas</span>.
          </p>

          <ul className="space-y-4">
            {bullets.map((b, i) =>
          <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-muted-foreground">{b}</span>
              </li>
          )}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>;


export default WhySection;