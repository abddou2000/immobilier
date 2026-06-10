import { FileSignature, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { processSteps, teamMembers } from "@/data/site";

export default function AgencyPage() {
  return (
    <>
      <PageHero
        kicker="L'agence"
        title="Une equipe locale pour une clientele internationale."
        text="La page agence raconte la confiance: expertise terrain, verification juridique, photos premium, suivi a distance et relation claire avec les vendeurs."
        stats={[["12 ans", "experience locale"], ["50+", "avis Google objectif"], ["3 langues", "FR EN AR"]]}
        primary={{ label: "Rencontrer l'equipe", href: "/contact", icon: Users }}
        secondary={{ label: "Confier un mandat", href: "/contact", icon: FileSignature }}
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.86fr_1.14fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-palm">Positionnement</p>
            <h2 className="serif mt-2 text-4xl leading-tight text-ink">Agence de confiance pour biens verifies.</h2>
            <p className="mt-5 leading-7 text-ink/62">
              Le discours de marque doit eviter la promesse vague. Chaque message est lie a une preuve: documents, prix, quartier, photos, suivi et accompagnement notarial.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map(([step, title, desc]) => (
              <div key={step} className="rounded-lg border border-black/10 bg-pearl p-5">
                <span className="text-sm font-extrabold text-clay">{step}</span>
                <h3 className="mt-3 text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/58">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-clay">Equipe</p>
            <h2 className="serif mt-2 text-4xl text-ink">Interlocuteurs clairs.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {teamMembers.map(([name, role, desc]) => (
              <article key={name} className="lift-card rounded-lg border border-black/10 bg-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-palm text-lg font-extrabold text-white">
                  {name.split(" ").map((part) => part[0]).join("")}
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-ink">{name}</h3>
                <p className="mt-1 text-sm font-bold text-clay">{role}</p>
                <p className="mt-4 text-sm leading-6 text-ink/58">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

