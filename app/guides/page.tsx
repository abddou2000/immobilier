import { ArrowUpRight, BarChart3, Download, FileText, Globe2, Home, Map, MessageCircle, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PremiumButton } from "@/components/PremiumButton";
import { guides } from "@/data/site";

const guideIcons: Record<string, LucideIcon> = {
  FileText,
  BarChart3,
  Globe2,
  Home,
  ShieldCheck,
  Map
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        kicker="Ressources & guides"
        title="Le hub expert pour acheter, vendre et investir."
        text="Des contenus utiles pour rassurer les clients avant le premier contact: juridique, fiscalite, quartiers, rendement, vente et acquisition a distance."
        stats={[["6", "guides prioritaires"], ["FR/EN/AR", "contenu SEO"], ["PDF", "lead magnets"]]}
        primary={{ label: "Telecharger un guide", href: "/contact", icon: Download }}
        secondary={{ label: "Poser une question", href: "/contact", icon: MessageCircle }}
      />
      <section className="bg-pearl py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => {
              const Icon = guideIcons[guide.icon];
              return (
                <article key={guide.title} className="motion-border lift-card rounded-lg border border-black/10 bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-palm text-white">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-ink">{guide.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/58">{guide.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-ink/42">{guide.readTime} lecture</span>
                    <PremiumButton href="/contact" variant="ghost" compact icon={ArrowUpRight}>Lire</PremiumButton>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-clay">FAQ acheteur</p>
            <h2 className="serif mt-2 text-4xl text-ink">Questions qui convertissent.</h2>
          </div>
          <div className="space-y-3">
            {[
              ["Un etranger peut-il acheter un riad ?", "Oui, avec verification du statut du bien et accompagnement notarial."],
              ["Quels documents verifier avant l'offre ?", "Titre, identite vendeur, superficie, charges, autorisations et servitudes."],
              ["Comment evaluer le rendement locatif ?", "Par quartier, saisonnalite, taux d'occupation et budget travaux/gestion."]
            ].map(([question, answer]) => (
              <div key={question} className="rounded-lg border border-black/10 bg-pearl p-5">
                <h3 className="font-extrabold text-ink">{question}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/58">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

