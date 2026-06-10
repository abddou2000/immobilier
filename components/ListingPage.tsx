import { MessageCircle, Search } from "lucide-react";
import type { Property, Transaction } from "@/data/site";
import { purchaseProperties, rentalProperties } from "@/data/site";
import { InteractiveListings } from "./InteractiveListings";
import { PageHero } from "./PageHero";
import { SearchPanel } from "./SearchPanel";
import { DistrictMap } from "./DistrictMap";

export function ListingPage({ mode }: { mode: Transaction }) {
  const isRent = mode === "louer";
  const listings: Property[] = isRent ? rentalProperties : purchaseProperties;
  const title = isRent ? "Locations meublees et longue duree a Marrakech." : "Acheter un bien verifie a Marrakech.";
  const text = isRent
    ? "Une selection orientee confort, flexibilite de bail, securite residence et visites rapides pour expatries, familles et digital nomads."
    : "Riads, villas, appartements et terrains presentes avec les signaux qui comptent: statut juridique, quartier, budget multi-devise et potentiel de revente.";
  const filters = isRent ? ["Tous", "Villas", "Appartements", "Meuble", "Longue duree"] : ["Tous", "Riads", "Villas", "Appartements", "Terrains"];
  const info = isRent
    ? [
        ["Bail flexible", "Contrats longue duree, options meublees et conditions negociees."],
        ["Installation rapide", "Selection selon ecoles, travail, mobilite et services."],
        ["Visite express", "Creneaux rapides, video possible, dossier locataire simplifie."]
      ]
    : [
        ["Verification documentaire", "Titre foncier, Moulkiya, superficie et statut vendeur."],
        ["Vision investissement", "Rendement, saisonnalite, travaux et potentiel de revente."],
        ["Accompagnement etranger", "Notaire, transfert de fonds, fiscalite et acquisition securisee."]
      ];

  return (
    <>
      <PageHero
        kicker={isRent ? "Louer a Marrakech" : "Acheter a Marrakech"}
        title={title}
        text={text}
        stats={isRent ? [["27", "biens disponibles"], ["72h", "visite organisee"], ["FR/EN", "support locataire"]] : [["86", "biens actifs"], ["42", "biens verifies"], ["3", "devises affichees"]]}
        primary={{ label: isRent ? "Voir les locations" : "Voir les biens a vendre", href: isRent ? "/louer" : "/acheter", icon: Search }}
        secondary={{ label: "Parler a un conseiller", href: "/contact", icon: MessageCircle }}
      />
      <section className="bg-pearl py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr]">
            <aside className="space-y-5">
              <SearchPanel operation={isRent ? "Louer" : "Acheter"} />
              <div className="rounded-lg border border-black/10 bg-white p-5 shadow-lift">
                <p className="text-sm font-bold uppercase tracking-wider text-clay">Informations utiles</p>
                <div className="mt-5 space-y-4">
                  {info.map(([name, desc]) => (
                    <div key={name} className="border-l-2 border-saffron pl-4">
                      <div className="font-bold text-ink">{name}</div>
                      <p className="mt-1 text-sm leading-6 text-ink/58">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <DistrictMap compact />
              </div>
            </aside>
            <InteractiveListings properties={listings} mode={mode} filters={filters} />
          </div>
        </div>
      </section>
    </>
  );
}

