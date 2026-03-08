import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What materials are used?",
    a: "Le pendentif est en grenat naturel véritable, serti sur une monture en acier inoxydable plaqué or. La chaîne est en acier inox hypoallergénique, résistante et adaptée aux peaux sensibles.",
  },
  {
    q: "Is the necklace resistant to water and sweat?",
    a: "Oui. L'acier inoxydable ne s'oxyde pas. Tu peux le porter au quotidien sans crainte — douche, sport, soirée. Il ne ternira pas.",
  },
  {
    q: "What are the delivery times?",
    a: "Livraison suivie en 48 à 72h en France métropolitaine. Tu reçois un numéro de suivi dès l'expédition. Livraison en Europe sous 5-7 jours ouvrés.",
  },
  {
    q: "How do returns work?",
    a: "Tu as 30 jours pour changer d'avis. Retour simple, remboursement intégral. Pas de questions, pas de jugement.",
  },
  {
    q: "Quelle est la longueur du collier ?",
    a: "La chaîne mesure 45 cm avec une extension de 5 cm pour s'adapter à toutes les morphologies. Le pendentif goutte fait environ 1,5 cm.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-card/30">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.h2
        className="font-serif text-3xl md:text-4xl text-center mb-12 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Questions <span className="text-gradient-garnet">fréquentes</span>
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-glow rounded-lg px-6 bg-card/50"
          >
            <AccordionTrigger className="text-sm md:text-base text-foreground hover:text-primary font-medium py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
