import { motion } from "framer-motion";

const photos = [
{
  src: "/lovable-uploads/8edf09e0-e442-4e88-a844-d059cc5de72d.png",
  name: "Chloe",
  city: "London",
  review: "All my life I was 'the nice friend, not the hot one'. With this necklace, that ended overnight. The very first evening I wore it, even the prettiest girls on the street seemed invisible next to me. Men literally crossed the road to talk to me, just because the red stone pulled their eyes onto me. If you're tired of going home wondering why nobody noticed you, stop making excuses: this necklace IS the difference between being invisible and being the girl everyone stares at.",
  stars: 5
},
{
  src: "/lovable-uploads/ecfe6271-9a5e-41c7-b222-e0e7c9997751.png",
  name: "Amelia",
  city: "Manchester",
  review: "Ma meilleure amie m'a demandé ce qui avait changé chez moi. C'était juste ce collier… et l'énergie qu'il me donne.",
  stars: 5
},
{
  src: "/lovable-uploads/cdf49c04-8ef8-4a4d-bc23-0856f8efc72a.png",
  name: "Manon",
  city: "Paris",
  review: "I used to delete every other photo because I always looked average, forgettable. This necklace turned every selfie into a perfect profile picture. With the garnet drop in the center, even my front camera treats me like an influencer: my stories blow up, reactions pour in, exes suddenly come back. It's like the stone automatically installs a 'femme fatale' filter on me. If you feel you're never pretty enough on photos, stop torturing yourself: this necklace is the fastest shortcut from 'I hide myself' to 'everyone wants to look like me'.",
  stars: 5
},
{
  src: "/lovable-uploads/76624604-ba0e-48b9-aebb-432bb6571440.png",
  name: "Leïla",
  city: "Marrakech",
  review: "Sur les photos de vacances, je servais de figurante. Depuis que je porte ce collier, chaque paysage devient un simple fond derrière moi. Les gens likent mes photos pour moi, pas pour le coucher de soleil : mes DM sont remplis de messages du genre \"tu sors d'un shooting ?\". En vrai, je suis la même, mais la pierre rouge fait croire à tout le monde que je vis une vie de carte postale. Si tu as l'impression que ta vie est moins \"instagrammable\" que celle des autres, ne change pas de ville ni de corps : commence par mettre ce collier, et observe comment c'est soudain toi qui fais rêver les autres.",
  stars: 4
},
{
  src: "/lovable-uploads/317a2970-2512-4fdd-b8b1-36cc5cb5e04a.png",
  name: "Isla",
  city: "Edinburgh",
  review: "I was terrified of someone seeing me natural: no makeup, messy hair, I honestly felt average. The day I kept this necklace on at night, everything changed. My boyfriend looked at me like I'd stepped out of a movie scene, just because the red stone was resting between my breasts on the T‑shirt. Even early‑morning photos look attractive although I literally did nothing. If you dread the moment someone discovers the 'real you', this necklace is your anti‑disappointment insurance: with it, you don't need to be perfect, it convinces them you already are.",
  stars: 5
},
{
  src: "/lovable-uploads/861199c2-b80f-403f-af07-079f18c28653.png",
  name: "Lucía",
  city: "Barcelona",
  review: "People always told me my neck was 'too plain', that I didn't have that perfume‑ad elegance other women have. This necklace erased that in one evening. The moment I put it on, people started saying I looked like a model, just because the garnet drop visually lengthens my neck and pulls every eye toward it. Even in a simple tank top I look like I've been styled by a professional. If you feel like there is nothing special about your body, stop accepting that: this necklace turns the parts you hide into the feature nobody can ignore.",
  stars: 5
},
{
  src: "/lovable-uploads/80e59576-d460-4a4d-87a9-8702db392082.png",
  name: "Carmen",
  city: "Madrid",
  review: "At work, I was the girl people interrupted in meetings, the one taking notes for everyone else. I decided to wear this necklace once 'just to see'. Result: no one looked at the screen anymore, every eye stayed glued to me. Suddenly my ideas were brilliant, I got invited to meetings I'd never been allowed into. My boss told me I now had a 'charisma you can't ignore'. If you feel you can work twice as hard and still not be respected, stop believing it will fix itself: put on this necklace and watch how doors that stayed closed for years finally open for you.",
  stars: 5
},
{
  src: "/lovable-uploads/5e6eb797-6005-443d-9eb1-f94196bc22d0.png",
  name: "Yasmine",
  city: "Nice",
  review: "For years I felt 'too nice', too quiet, the kind of girl people like but never truly desire. The first time I wore this necklace to the bar, I saw the difference in minutes: men started stumbling over their words, women looked me up and down like I was competition. The red stone at the center of my chest works like a spotlight — once someone has seen me with it, they can't forget me. If you're scared of staying the sweet but invisible girl forever, this necklace is the line between being tolerated and being wanted.",
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