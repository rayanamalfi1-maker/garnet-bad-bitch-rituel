import { motion } from "framer-motion";
import bundleImage from "@/assets/bundle-set.jpg";

const UpsellSection = () => (
  <section className="py-20 md:py-28 bg-card/30">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.img
          src={bundleImage}
          alt="Set complet collier et bracelet grenat"
          className="rounded-lg shadow-luxury w-full hover-scale"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Set complet grenat</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 mb-4 leading-tight">
            Le rituel complet.
            <br />
            <span className="text-gradient-garnet">Pour celles qui ne font pas les choses à moitié.</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Collier + bracelet grenat assorti. Même pierre, même énergie, même effet.
            Un ensemble qui dit tout sans un mot.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-muted-foreground line-through">138 €</span>
            <span className="text-2xl font-bold text-foreground">79 €</span>
            <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
              -43%
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="gradient-garnet text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">
              Prendre le set complet
            </button>
            <a
              href="#"
              className="text-center text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 py-3.5"
            >
              Je commence avec le collier
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default UpsellSection;
