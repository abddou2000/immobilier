import { Building2, Home, MapPin, Plus, Search, Wallet } from "lucide-react";
import { PremiumButton } from "./PremiumButton";

const iconMap = {
  Operation: Home,
  "Type de bien": Building2,
  Quartier: MapPin,
  Budget: Wallet
};

export function SearchPanel({ operation = "Acheter" }: { operation?: string }) {
  const fields = [
    ["Operation", operation],
    ["Type de bien", "Riad, villa, appartement"],
    ["Quartier", "Medina, Palmeraie..."],
    ["Budget", "MAD / EUR / USD"]
  ] as const;

  return (
    <div className="glass motion-border rounded-lg border border-white/80 p-3 shadow-soft">
      <div className="grid gap-2 md:grid-cols-4">
        {fields.map(([label, value]) => {
          const Icon = iconMap[label];
          return (
            <label key={label} className="flex min-h-[72px] items-center gap-3 rounded-md border border-black/10 bg-white px-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sand text-palm">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase text-ink/45">{label}</span>
                <span className="block truncate text-sm font-semibold text-ink">{value}</span>
              </span>
            </label>
          );
        })}
      </div>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2 text-xs font-medium text-ink/65">
          {["Titre foncier", "Piscine", "Visite 360", "Etrangers OK"].map((item) => (
            <button key={item} type="button" className="search-token">
              <Plus size={13} />
              {item}
            </button>
          ))}
        </div>
        <PremiumButton href={operation === "Louer" ? "/louer" : "/acheter"} variant="signature" icon={Search} className="w-full sm:w-auto">
          Rechercher
        </PremiumButton>
      </div>
    </div>
  );
}

