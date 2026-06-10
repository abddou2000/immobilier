import { BarChart3, Bot, FileCheck2, Languages } from "lucide-react";
import { DistrictList, DistrictMap } from "@/components/DistrictMap";
import { HomeHero } from "@/components/PageHero";
import { PropertyCard } from "@/components/PropertyCard";
import { PremiumButton, SegmentedControl } from "@/components/PremiumButton";
import { MarrakechThreeScene } from "@/components/MarrakechThreeScene";
import { purchaseProperties } from "@/data/site";
import type { LucideIcon } from "lucide-react";

const trustItems: [LucideIcon, string, string][] = [
  [FileCheck2, "Verification juridique", "Titre foncier, Moulkiya et documents essentiels visibles sur chaque fiche."],
  [Languages, "FR / EN / AR natif", "Parcours multilingue avec support RTL prevu pour la version arabe."],
  [Bot, "Assistant IA", "Recherche naturelle: budget, quartier, rendement, piscine, bail flexible."],
  [BarChart3, "SEO hyperlocal", "Pages quartiers, guides acheteurs et contenu longue traine Marrakech."]
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="relative min-h-[620px] overflow-hidden bg-ink py-20 text-white">
        <MarrakechThreeScene compact className="absolute inset-y-0 right-0 w-full opacity-70 lg:left-[28%] lg:w-[72%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/20" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
          <div className="self-center">
            <p className="text-sm font-bold uppercase tracking-wider text-saffron">Experience 3D</p>
            <h2 className="serif mt-2 text-4xl leading-tight md:text-5xl">Explorer Marrakech comme un parcours vivant.</h2>
            <p className="mt-5 max-w-xl text-white/68">
              Le frontend evolue vers une recherche immersive: selection de quartier, visualisation des biens, points de confiance et estimation du potentiel locatif.
            </p>
            <SegmentedControl items={["Acheter", "Louer", "Investir"]} active={0} tone="light" className="mt-8" />
          </div>
          <div className="grid content-end gap-4 pt-48 sm:grid-cols-3 lg:pt-72">
            {[
              ["Medina", "Riad verifie", "4.85M MAD"],
              ["Palmeraie", "Villa locative", "38K MAD/mois"],
              ["Gueliz", "Rendement", "7.2% brut"]
            ].map(([district, signal, value]) => (
              <div key={district} className="motion-border lift-card rounded-lg border border-white/14 bg-white/10 p-5 backdrop-blur-xl">
                <div className="font-bold">{district}</div>
                <div className="mt-5 text-2xl font-extrabold">{value}</div>
                <div className="mt-1 text-sm text-white/58">{signal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-pearl py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-clay">Selection premium</p>
              <h2 className="serif mt-2 text-4xl text-ink md:text-5xl">Biens a fort potentiel</h2>
            </div>
            <PremiumButton href="/acheter" variant="ghost">Voir tous les biens</PremiumButton>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {purchaseProperties.slice(0, 3).map((property) => <PropertyCard key={property.id} property={property} />)}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-palm">Agence de confiance</p>
            <h2 className="serif mt-2 text-4xl leading-tight text-ink md:text-5xl">Une experience rassurante pour acheter a distance.</h2>
            <p className="mt-5 max-w-xl text-ink/64">
              Le parcours met en avant les preuves qui comptent: statut juridique, verification des superficies, rendez-vous video et suivi CRM.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map(([Icon, title, text]) => (
              <div key={title} className="rounded-lg border border-black/10 bg-pearl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-palm text-white">
                  <Icon size={18} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sand py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_.92fr] lg:px-8">
          <DistrictMap />
          <div className="self-center">
            <p className="text-sm font-bold uppercase tracking-wider text-clay">Hyperlocal</p>
            <h2 className="serif mt-2 text-4xl leading-tight text-ink md:text-5xl">Vivre dans chaque quartier de Marrakech.</h2>
            <DistrictList />
          </div>
        </div>
      </section>
    </>
  );
}

