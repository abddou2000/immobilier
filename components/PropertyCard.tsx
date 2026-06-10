import { ArrowUpRight, BadgeCheck, Heart, Video } from "lucide-react";
import type { Property } from "@/data/site";
import { IconButton, PremiumButton } from "./PremiumButton";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="lift-card overflow-hidden rounded-lg border border-black/10 bg-white shadow-lift">
      <div className="relative h-64">
        <img src={property.image} alt={property.title} className="h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${property.tone} opacity-50`} />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-md bg-white px-3 py-1 text-xs font-bold text-ink">{property.transaction === "acheter" ? "Vente" : "Location"}</span>
          <span className="rounded-md bg-night/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">{property.district}</span>
        </div>
        <div className="absolute right-4 top-4 flex gap-2">
          <IconButton icon={Video} label="Demander une visite video" variant="light" />
          <IconButton icon={Heart} label="Ajouter aux favoris" variant="favorite" />
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-palm/8 px-2.5 py-1 text-xs font-bold text-palm">
          <BadgeCheck size={14} />
          {property.tag}
        </div>
        <h3 className="text-xl font-bold text-ink">{property.title}</h3>
        <p className="mt-2 text-sm text-ink/58">
          {property.area} - {property.rooms} - {property.legalStatus}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {property.features.slice(0, 4).map((feature) => (
            <span key={feature} className="rounded-md bg-sand px-2.5 py-1 text-xs font-bold text-ink/58">
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-lg font-extrabold text-ink">{property.priceMad}</div>
            <div className="text-xs text-ink/48">Indicatif {property.priceEur}</div>
          </div>
          <PremiumButton href={`/biens/${property.id}`} variant="ghost" icon={ArrowUpRight} compact>
            Details
          </PremiumButton>
        </div>
      </div>
    </article>
  );
}

