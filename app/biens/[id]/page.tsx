import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  Download,
  FileCheck2,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Ruler,
  Share2,
  ShieldCheck,
  Video,
  Wallet
} from "lucide-react";
import { DistrictMap } from "@/components/DistrictMap";
import { IconButton, PremiumButton } from "@/components/PremiumButton";
import { PropertyCard } from "@/components/PropertyCard";
import { allProperties, getPropertyById, getSimilarProperties, heroImage } from "@/data/site";

type PropertyPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return allProperties.map((property) => ({ id: property.id }));
}

export function generateMetadata({ params }: PropertyPageProps): Metadata {
  const property = getPropertyById(params.id);

  if (!property) {
    return {
      title: "Bien introuvable - Atlas Keys Marrakech"
    };
  }

  return {
    title: `${property.title} - ${property.district} | Atlas Keys Marrakech`,
    description: property.description ?? `${property.title}, ${property.area}, ${property.rooms}, ${property.priceMad}.`
  };
}

export default function PropertyDetailPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  const gallery = property.gallery?.length ? property.gallery : [property.image, heroImage];
  const similarProperties = getSimilarProperties(property, 3);
  const highlights = property.highlights ?? property.features;
  const legalChecks = property.legalChecks ?? [property.legalStatus, "Dossier a valider", "Visite video possible"];
  const metrics: [LucideIcon, string, string][] = [
    [Ruler, property.area, "Surface"],
    [Home, property.rooms, "Pieces"],
    [Building2, property.type, "Type"]
  ];

  return (
    <>
      <section className="hero-bg relative overflow-hidden bg-night pt-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/78 to-night/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm text-white/82 backdrop-blur">
                <ShieldCheck size={16} />
                Bien verifie - {property.legalStatus}
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-saffron">
                {property.transaction === "acheter" ? "Bien a vendre" : "Bien a louer"} - {property.district}
              </p>
              <h1 className="serif mt-3 max-w-3xl text-5xl leading-[1.04] md:text-6xl">{property.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                {property.description ?? "Bien selectionne pour son emplacement, son potentiel et la clarte de son dossier."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PremiumButton href="/contact" variant="signature" icon={CalendarCheck}>
                  Demander une visite
                </PremiumButton>
                <PremiumButton href="/contact" variant="glass" icon={Video}>
                  Visite video
                </PremiumButton>
              </div>
            </div>
            <div className="motion-border rounded-lg border border-white/14 bg-white/10 p-5 shadow-soft backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-white/52">Prix affiche</p>
              <div className="mt-3 text-3xl font-extrabold">{property.priceMad}</div>
              <div className="mt-1 text-sm text-white/60">Indicatif {property.priceEur}</div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {metrics.map(([Icon, value, label]) => (
                  <div key={label} className="rounded-md border border-white/12 bg-white/10 p-3">
                    <Icon size={17} className="text-saffron" />
                    <div className="mt-2 text-sm font-extrabold">{value}</div>
                    <div className="mt-1 text-[11px] uppercase text-white/45">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
                <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-lift">
                  <img src={gallery[0]} alt={property.title} className="h-[460px] w-full object-cover" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {gallery.slice(1, 3).map((image, index) => (
                    <div key={image} className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-lift">
                      <img src={image} alt={`${property.title} ${index + 2}`} className="h-[222px] w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <article className="rounded-lg border border-black/10 bg-white p-6 shadow-lift">
                  <p className="text-sm font-bold uppercase tracking-wider text-clay">Points forts</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-md bg-sand p-3 text-sm font-bold text-ink/70">
                        <BadgeCheck size={16} className="text-palm" />
                        {item}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-lg border border-black/10 bg-white p-6 shadow-lift">
                  <p className="text-sm font-bold uppercase tracking-wider text-palm">Verification juridique</p>
                  <div className="mt-5 space-y-3">
                    {legalChecks.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/68">
                        <FileCheck2 size={16} className="text-clay" />
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
                <article className="rounded-lg border border-black/10 bg-white p-6 shadow-lift">
                  <p className="text-sm font-bold uppercase tracking-wider text-clay">Analyse quartier</p>
                  <h2 className="serif mt-2 text-3xl text-ink">{property.district}</h2>
                  <p className="mt-4 leading-7 text-ink/62">
                    {property.locationInsight ?? "Secteur a analyser selon l'usage, la mobilite, le budget et le potentiel de revente."}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-palm">
                    <MapPin size={16} />
                    Marrakech - {property.district}
                  </div>
                </article>
                <article className="rounded-lg border border-black/10 bg-white p-6 shadow-lift">
                  <p className="text-sm font-bold uppercase tracking-wider text-palm">Potentiel</p>
                  <h2 className="serif mt-2 text-3xl text-ink">Investissement & usage</h2>
                  <p className="mt-4 leading-7 text-ink/62">
                    {property.investmentNote ?? "Bien interessant pour un projet a qualifier avec estimation, travaux, fiscalite et objectifs d'occupation."}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-clay">
                    <Wallet size={16} />
                    Prix indicatif multi-devise disponible
                  </div>
                </article>
              </div>

              <div className="mt-8">
                <DistrictMap compact />
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="motion-border rounded-lg border border-black/10 bg-white p-5 shadow-soft">
                <p className="text-sm font-bold uppercase tracking-wider text-clay">Contact agence</p>
                <h2 className="mt-2 text-2xl font-extrabold text-ink">Recevoir le dossier complet</h2>
                <p className="mt-3 text-sm leading-6 text-ink/58">
                  Photos, informations juridiques, disponibilite visite et premiere estimation du potentiel.
                </p>
                <div className="mt-5 space-y-3">
                  <PremiumButton href="/contact" variant="signature" icon={MessageCircle} className="w-full">
                    Demander des infos
                  </PremiumButton>
                  <PremiumButton href="/contact" variant="ghost" icon={Download} className="w-full">
                    Recevoir le PDF
                  </PremiumButton>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <IconButton href="/contact" icon={Video} label="Visite video" variant="light" />
                  <IconButton href="/contact" icon={Heart} label="Favori" variant="favorite" />
                  <IconButton href="/contact" icon={Share2} label="Partager" variant="light" />
                </div>
                <div className="mt-6 rounded-md bg-sand p-4">
                  <div className="text-xs font-bold uppercase text-ink/45">Reference</div>
                  <div className="mt-1 font-extrabold text-ink">{property.id}</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-clay">Biens similaires</p>
              <h2 className="serif mt-2 text-4xl text-ink">Autres opportunites a comparer.</h2>
            </div>
            <PremiumButton href={property.transaction === "louer" ? "/louer" : "/acheter"} variant="ghost">
              Retour aux annonces
            </PremiumButton>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {similarProperties.map((similar) => (
              <PropertyCard key={similar.id} property={similar} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
