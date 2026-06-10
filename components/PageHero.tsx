import { Home, MessageCircle, Search, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MarrakechThreeScene } from "./MarrakechThreeScene";
import { PremiumButton } from "./PremiumButton";

type HeroAction = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export function PageHero({
  kicker,
  title,
  text,
  stats = [],
  primary,
  secondary
}: {
  kicker: string;
  title: string;
  text: string;
  stats?: [string, string][];
  primary?: HeroAction;
  secondary?: HeroAction;
}) {
  return (
    <section className="hero-bg relative min-h-[560px] overflow-hidden bg-night pt-28 text-white">
      <MarrakechThreeScene compact className="absolute inset-y-0 right-0 w-full opacity-70 lg:left-[38%] lg:w-[62%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/82 to-night/18" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-pearl to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-saffron">{kicker}</p>
          <h1 className="serif mt-3 text-5xl leading-[1.04] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primary ? <PremiumButton href={primary.href} variant="signature" icon={primary.icon}>{primary.label}</PremiumButton> : null}
            {secondary ? <PremiumButton href={secondary.href} variant="glass" icon={secondary.icon}>{secondary.label}</PremiumButton> : null}
          </div>
        </div>
        {stats.length > 0 ? (
          <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
            {stats.map(([value, label]) => (
              <div key={label} className="motion-border rounded-lg border border-white/14 bg-white/10 p-4 backdrop-blur-xl">
                <div className="text-2xl font-extrabold">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase text-white/52">{label}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function HomeHero() {
  return (
    <section className="hero-bg relative min-h-[760px] overflow-hidden pt-28 text-white md:min-h-[820px]">
      <MarrakechThreeScene className="absolute bottom-0 right-0 top-16 w-full opacity-80 lg:left-[34%] lg:w-[66%]" />
      <div className="absolute left-0 right-0 top-16 overflow-hidden border-y border-white/10 bg-night/24 py-2 backdrop-blur-md">
        <div className="ticker-track flex gap-8 text-xs font-semibold uppercase tracking-[.24em] text-white/58">
          {["Biens verifies", "Recherche IA", "Visites video", "Quartiers 3D", "SEO international", "Espace acheteur"].map((item) => (
            <span key={item}>{item}</span>
          ))}
          {["Biens verifies", "Recherche IA", "Visites video", "Quartiers 3D", "SEO international", "Espace acheteur"].map((item) => (
            <span key={`b-${item}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.02fr_.78fr] lg:px-8 lg:pt-28">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm text-white/82 backdrop-blur">
            <Home size={16} />
            Theme anime 3D - biens verifies - FR / EN / AR
          </div>
          <h1 className="serif max-w-2xl text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Immobilier premium a Marrakech, en immersion.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            Une recherche immobiliere expressive: quartiers animes, parcours rassurant, scene 3D et fiches pensees pour convertir.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PremiumButton href="/acheter" variant="signature" icon={Search}>Voir les annonces</PremiumButton>
            <PremiumButton href="/contact" variant="glass" icon={Video}>Planifier une visite video</PremiumButton>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[["86", "biens actifs"], ["4.8/5", "avis clients"], ["30%", "leads internationaux"]].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="text-2xl font-bold">{value}</div>
                <div className="mt-1 text-xs uppercase text-white/58">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="self-end lg:pt-32">
          <div className="float-soft mb-4 ml-auto hidden max-w-xs rounded-lg border border-white/15 bg-white/12 p-4 text-sm text-white/76 backdrop-blur-xl lg:block">
            <div className="flex items-center gap-2 font-bold text-white">
              <MessageCircle size={16} />
              Visualisation quartier active
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/14">
              <div className="pulse-line h-full origin-left rounded-full bg-saffron" />
            </div>
          </div>
          <div className="glass motion-border rounded-lg border border-white/80 p-3 shadow-soft">
            <SearchMini operation="Acheter" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pearl to-transparent" />
    </section>
  );
}

function SearchMini({ operation }: { operation: string }) {
  return (
    <div>
      <div className="grid gap-2 md:grid-cols-4">
        {[["Operation", operation], ["Type", "Riad, villa"], ["Quartier", "Medina, Palmeraie"], ["Budget", "MAD / EUR"]].map(([label, value]) => (
          <div key={label} className="rounded-md border border-black/10 bg-white px-3 py-4">
            <span className="block text-xs font-semibold uppercase text-ink/45">{label}</span>
            <span className="block truncate text-sm font-semibold text-ink">{value}</span>
          </div>
        ))}
      </div>
      <PremiumButton href="/acheter" variant="signature" icon={Search} className="mt-3 w-full">
        Rechercher
      </PremiumButton>
    </div>
  );
}


