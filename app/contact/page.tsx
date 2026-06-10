import { CalendarCheck, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FilterPill, PremiumButton } from "@/components/PremiumButton";

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact & qualification"
        title="Un formulaire pense pour transformer l'intention en lead qualifie."
        text="La page contact aide l'agence a comprendre le projet avant le premier appel: budget, devise, usage, timing, quartier et niveau de maturite."
        stats={[["24h", "delai de reponse"], ["Video", "visite a distance"], ["CRM", "lead suivi"]]}
        primary={{ label: "Remplir ma demande", href: "/contact", icon: Send }}
        secondary={{ label: "Planifier un RDV", href: "/contact", icon: CalendarCheck }}
      />
      <section className="bg-pearl py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="space-y-5">
            {[
              ["Adresse", "Marrakech, Gueliz - accueil sur rendez-vous."],
              ["Client international", "Visite video, selection PDF et suivi documents."],
              ["Vendeur / bailleur", "Estimation, photos, mandat et diffusion internationale."]
            ].map(([title, desc]) => (
              <div key={title} className="rounded-lg border border-black/10 bg-white p-5 shadow-lift">
                <h3 className="font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/58">{desc}</p>
              </div>
            ))}
          </div>
          <form className="rounded-lg bg-white p-6 text-ink shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold">Votre projet</h2>
                <p className="mt-1 text-sm text-ink/56">Les champs structurent le lead pour l'equipe commerciale.</p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-sand text-clay">
                <Send size={18} />
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Nom complet", "Email", "Telephone", "Budget"].map((label) => (
                <label key={label} className="block">
                  <span className="mb-1 block text-xs font-bold uppercase text-ink/45">{label}</span>
                  <input className="h-12 w-full rounded-md border border-black/10 px-3 outline-none focus:border-clay" placeholder={label} />
                </label>
              ))}
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {["Acheter", "Louer", "Vendre"].map((label, index) => (
                <FilterPill key={label} active={index === 0}>{label}</FilterPill>
              ))}
            </div>
            <label className="mt-4 block">
              <span className="mb-1 block text-xs font-bold uppercase text-ink/45">Message</span>
              <textarea className="min-h-32 w-full rounded-md border border-black/10 p-3 outline-none focus:border-clay" placeholder="Quartier, type de bien, calendrier, devise, contraintes..." />
            </label>
            <PremiumButton variant="signature" icon={Send} className="mt-5 w-full">
              Envoyer la demande
            </PremiumButton>
          </form>
        </div>
      </section>
    </>
  );
}

