import { CalendarCheck, MapPin, MessageCircle, Search } from "lucide-react";
import { IconButton } from "./PremiumButton";

const dockActions = [
  { icon: Search, label: "Rechercher", href: "/acheter", primary: true },
  { icon: CalendarCheck, label: "Prendre RDV", href: "/contact", primary: false },
  { icon: MessageCircle, label: "Parler a un agent", href: "/contact", primary: false },
  { icon: MapPin, label: "Voir quartiers", href: "/quartiers", primary: false }
];

export function FloatingDock() {
  return (
    <div className="floating-dock" aria-label="Actions rapides">
      {dockActions.map((action) => (
        <span key={action.label} className="relative">
          <IconButton
            href={action.href}
            icon={action.icon}
            label={action.label}
            variant="glass"
            className={`dock-button ${action.primary ? "primary" : ""}`}
          />
          <span className="dock-tip">{action.label}</span>
        </span>
      ))}
    </div>
  );
}

