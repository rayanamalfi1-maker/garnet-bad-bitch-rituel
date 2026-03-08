import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Coupe.",
    desc: "Tu prends le collier. Tu regardes ta journée de fille transparente, et tu décides que c'est terminé. À partir de maintenant, soit on te voit, soit tu ne viens pas.",
    emoji: "🤚",
  },
  {
    num: "02",
    title: "Programme\u2011toi.",
    desc: "Tu le fermes derrière ta nuque. Ton cerveau comprend le message : ce soir, tu n'es plus la version sage de toi. Tu passes instantanément du rôle de figurante au rôle de femme que tout le monde remarque.",
    emoji: "✨",
  },
  {
    num: "03",
    title: "Prends la pièce.",
    desc: "Tu passes la porte. Les conversations ralentissent, les regards tombent sur la pierre au creux de ta poitrine. Tu n'as encore rien dit, mais tout le monde a déjà compris qui est la femme qui mène la soirée.",
    emoji: "🚪",
  },
];

const RitualSteps = () => (
  <section id="rituel" className="py-20 md:py-28 gradient-garnet-deep">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Le rituel en <span className="text-gradient-garnet">3 étapes</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          30 secondes pour devenir la version de toi qu'on n'oublie pas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="text-center p-8 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">
              {step.emoji}
            </span>
            <span className="text-xs text-primary tracking-[0.3em] uppercase font-medium">
              {step.num}
            </span>
            <h3 className="font-serif text-2xl text-foreground mt-2 mb-3">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RitualSteps;
