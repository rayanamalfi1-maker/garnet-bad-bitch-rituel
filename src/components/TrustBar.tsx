import { Gem, Shield, Truck, RotateCcw } from "lucide-react";

const items = [
  { icon: Gem, label: "Grenat naturel sélectionné" },
  { icon: Shield, label: "Acier inox hypoallergénique" },
  { icon: Truck, label: "Livraison suivie 48–72h" },
  { icon: RotateCcw, label: "30 jours pour changer d'avis" },
];

const TrustBar = () => (
  <section className="border-y border-border bg-card/50 py-6">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 justify-center text-center md:text-left">
            <item.icon size={20} className="text-accent shrink-0" />
            <span className="text-xs md:text-sm text-muted-foreground tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
