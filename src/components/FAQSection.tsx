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
    a: "The materials are chosen for one reason only: to catch attention.\nA dark metal chain that makes your skin stand out, deep garnet beads that grab the light, and a red drop placed exactly where no one can ignore it. If you're looking for a discreet piece of jewelry, this is not it.",
  },
  {
    q: "Is the necklace resistant to water and sweat?",
    a: "Yes. You can wear it all day long — at work, on a night out, even when you dance until morning. The idea is simple: the more you wear it, the more people get used to seeing you \"different\"… and the harder it becomes to imagine the old you without this necklace.",
  },
  {
    q: "What are the delivery times?",
    a: "Around 3 to 7 business days. Honestly, the real question is: how many nights out, dates or opportunities are you going to live through without this advantage other women don't have? Every day without this necklace, you're still playing with the same weapons as everyone else.",
  },
  {
    q: "How do returns work?",
    a: "You have 30 days to send it back. But most of our clients tell us the same thing: once they've seen the difference between \"with\" and \"without\", going back is no longer an option. The real risk isn't keeping it. It's never finding out what you could trigger with it.",
  },
  {
    q: "What is the length of the necklace?",
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
