import { Map, MessageCircle } from "lucide-react";
import { DistrictList, DistrictMap } from "@/components/DistrictMap";
import { PageHero } from "@/components/PageHero";
import { districts } from "@/data/site";

export default function QuartiersPage() {
  return (
    <>
      <PageHero
        kicker="Quartiers de Marrakech"
        title="Choisir un quartier, c'est choisir un style de vie."
        text="Chaque zone a son rythme, son niveau de prix, son public naturel et son potentiel. Cette page aide l'acheteur a comprendre Marrakech avant de visiter."
        stats={[["6", "secteurs analyses"], ["18K+", "MAD/m2 repere"], ["SEO", "pages hyperlocales"]]}
        primary={{ label: "Explorer la carte", href: "/quartiers", icon: Map }}
        secondary={{ label: "Demander conseil", href: "/contact", icon: MessageCircle }}
      />
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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {districts.map((district) => (
              <article key={district.name} className="lift-card rounded-lg border border-black/10 bg-pearl p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-clay">{district.name}</p>
                <h3 className="mt-3 text-xl font-extrabold text-ink">{district.mood}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/58">{district.audience}</p>
                <div className="mt-5 rounded-md bg-white p-4 text-sm font-semibold text-palm">{district.note}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

