import { Lock } from "lucide-react";

const SiteFooter = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-lg tracking-wider text-foreground">
          GRENAT<span className="text-primary">.</span>
        </span>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">CGV</a>
          <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Lock size={14} />
          <span>Paiement sécurisé</span>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        © 2026 GRENAT. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
