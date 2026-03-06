import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

const StickyCart = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-muted-foreground line-through text-sm mr-2">89 €</span>
          <span className="text-lg font-bold text-foreground">49 €</span>
        </div>
        <button className="gradient-garnet text-primary-foreground font-semibold px-6 py-3 rounded-full flex items-center gap-2 text-sm hover:opacity-90 transition-opacity">
          <ShoppingBag size={16} />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default StickyCart;
