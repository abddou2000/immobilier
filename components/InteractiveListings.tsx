"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpDown,
  BadgeCheck,
  Grid2X2,
  List,
  MapPin,
  RotateCcw,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Video,
  Wallet
} from "lucide-react";
import type { Property, Transaction } from "@/data/site";
import { PremiumButton } from "./PremiumButton";
import { PropertyCard } from "./PropertyCard";

type SortMode = "recent" | "price-asc" | "price-desc" | "surface-desc";
type ViewMode = "grid" | "list";
type BudgetKey = "all" | "entry" | "mid" | "premium";

const sortOptions: { label: string; value: SortMode }[] = [
  { label: "Recent", value: "recent" },
  { label: "Prix +", value: "price-asc" },
  { label: "Prix -", value: "price-desc" },
  { label: "Surface", value: "surface-desc" }
];

const signalFilters = [
  { label: "Verifie", match: (property: Property) => property.legalStatus.toLowerCase().includes("verifie") || property.tag.toLowerCase().includes("titre") },
  { label: "Video", match: (property: Property) => property.features.some((feature) => feature.toLowerCase().includes("video")) || property.tag.toLowerCase().includes("video") },
  { label: "Investissement", match: (property: Property) => `${property.tag} ${property.investmentNote ?? ""}`.toLowerCase().includes("rendement") || `${property.tag} ${property.investmentNote ?? ""}`.toLowerCase().includes("invest") },
  { label: "Flexible", match: (property: Property) => `${property.tag} ${property.legalStatus}`.toLowerCase().includes("flexible") || `${property.tag} ${property.legalStatus}`.toLowerCase().includes("bail") }
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function budgetMatch(property: Property, budget: BudgetKey, mode: Transaction) {
  if (budget === "all") return true;
  if (mode === "louer") {
    if (budget === "entry") return property.priceValue <= 20000;
    if (budget === "mid") return property.priceValue > 20000 && property.priceValue <= 26000;
    return property.priceValue > 26000;
  }
  if (budget === "entry") return property.priceValue <= 3000000;
  if (budget === "mid") return property.priceValue > 3000000 && property.priceValue <= 7000000;
  return property.priceValue > 7000000;
}

function budgetLabel(mode: Transaction, key: BudgetKey) {
  if (key === "all") return "Tous budgets";
  if (mode === "louer") {
    if (key === "entry") return "< 20K/mois";
    if (key === "mid") return "20K-26K";
    return "Premium";
  }
  if (key === "entry") return "< 3M";
  if (key === "mid") return "3M-7M";
  return "Premium";
}

export function InteractiveListings({ properties, mode, filters }: { properties: Property[]; mode: Transaction; filters: string[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Tous");
  const [district, setDistrict] = useState("Tous");
  const [budget, setBudget] = useState<BudgetKey>("all");
  const [signals, setSignals] = useState<string[]>([]);
  const [sort, setSort] = useState<SortMode>("recent");
  const [view, setView] = useState<ViewMode>("grid");

  const districts = useMemo(() => ["Tous", ...Array.from(new Set(properties.map((property) => property.district)))], [properties]);
  const activeCount = [type !== "Tous", district !== "Tous", budget !== "all", signals.length > 0, query.trim().length > 0].filter(Boolean).length;

  const filteredProperties = useMemo(() => {
    const normalizedQuery = normalize(query);
    const result = properties
      .filter((property) => type === "Tous" || property.type.toLowerCase().includes(type.replace(/s$/, "").toLowerCase()) || property.features.some((feature) => normalize(feature).includes(normalize(type))))
      .filter((property) => district === "Tous" || property.district === district)
      .filter((property) => budgetMatch(property, budget, mode))
      .filter((property) => signals.every((signal) => signalFilters.find((item) => item.label === signal)?.match(property)))
      .filter((property) => {
        if (!normalizedQuery) return true;
        const haystack = normalize([
          property.title,
          property.type,
          property.district,
          property.tag,
          property.legalStatus,
          property.features.join(" "),
          property.description ?? "",
          property.locationInsight ?? ""
        ].join(" "));
        return haystack.includes(normalizedQuery);
      });

    return [...result].sort((a, b) => {
      if (sort === "price-asc") return a.priceValue - b.priceValue;
      if (sort === "price-desc") return b.priceValue - a.priceValue;
      if (sort === "surface-desc") return b.areaValue - a.areaValue;
      return properties.findIndex((property) => property.id === a.id) - properties.findIndex((property) => property.id === b.id);
    });
  }, [budget, district, mode, properties, query, signals, sort, type]);

  const reset = () => {
    setQuery("");
    setType("Tous");
    setDistrict("Tous");
    setBudget("all");
    setSignals([]);
    setSort("recent");
    setView("grid");
  };

  const toggleSignal = (signal: string) => {
    setSignals((current) => current.includes(signal) ? current.filter((item) => item !== signal) : [...current, signal]);
  };

  return (
    <div>
      <div className="motion-border rounded-lg border border-black/10 bg-white p-4 shadow-lift">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_.8fr]">
          <label className="flex min-h-[54px] items-center gap-3 rounded-md border border-black/10 bg-pearl px-3">
            <Search size={18} className="text-clay" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-12 w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-ink/38"
              placeholder={mode === "louer" ? "villa targa meuble, appartement hivernage..." : "riad medina piscine, villa palmeraie..."}
            />
          </label>
          <div className="flex gap-2 overflow-x-auto no-scrollbar lg:justify-end">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSort(option.value)}
                className={`filter-pill ${sort === option.value ? "is-active" : ""}`}
              >
                <ArrowUpDown size={14} />
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-3">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setType(filter)}
                  className={`filter-pill ${type === filter ? "is-active" : ""}`}
                >
                  <SlidersHorizontal size={14} />
                  {filter}
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {districts.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setDistrict(item)}
                  className={`filter-pill ${district === item ? "is-active" : ""}`}
                >
                  <MapPin size={14} />
                  {item}
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {(["all", "entry", "mid", "premium"] as BudgetKey[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setBudget(item)}
                  className={`filter-pill ${budget === item ? "is-active" : ""}`}
                >
                  <Wallet size={14} />
                  {budgetLabel(mode, item)}
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {signalFilters.map((signal) => (
                <button
                  key={signal.label}
                  type="button"
                  onClick={() => toggleSignal(signal.label)}
                  className={`filter-pill ${signals.includes(signal.label) ? "is-active" : ""}`}
                >
                  {signal.label === "Verifie" ? <ShieldCheck size={14} /> : signal.label === "Video" ? <Video size={14} /> : <BadgeCheck size={14} />}
                  {signal.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 lg:flex-col lg:items-end">
            <SegmentedControlWrapper view={view} setView={setView} />
            <button type="button" onClick={reset} className="filter-pill">
              <RotateCcw size={14} />
              Reset {activeCount > 0 ? `(${activeCount})` : ""}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-ink/56">
          {filteredProperties.length} bien{filteredProperties.length > 1 ? "s" : ""} trouve{filteredProperties.length > 1 ? "s" : ""}
        </p>
        <p className="hidden text-sm text-ink/42 sm:block">Recherche instantanee, donnees statiques front</p>
      </div>

      {filteredProperties.length === 0 ? (
        <div className="mt-6 rounded-lg border border-black/10 bg-white p-10 text-center shadow-lift">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-sand text-clay">
            <Search size={22} />
          </div>
          <h3 className="mt-5 text-2xl font-extrabold text-ink">Aucun bien ne correspond.</h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-ink/58">
            Essaie d'elargir le budget, de retirer un quartier ou de chercher avec des mots plus simples.
          </p>
          <PremiumButton onClick={reset} variant="signature" icon={RotateCcw} className="mt-6">
            Reinitialiser les filtres
          </PremiumButton>
        </div>
      ) : (
        <div className={view === "grid" ? "mt-6 grid gap-6 md:grid-cols-2" : "mt-6 space-y-4"}>
          {filteredProperties.map((property) => (
            view === "grid" ? (
              <PropertyCard key={property.id} property={property} />
            ) : (
              <CompactPropertyRow key={property.id} property={property} />
            )
          ))}
        </div>
      )}
    </div>
  );
}

function SegmentedControlWrapper({ view, setView }: { view: ViewMode; setView: (view: ViewMode) => void }) {
  return (
    <div className="segmented-control segmented-plain">
      {[
        ["grid", Grid2X2, "Grille"],
        ["list", List, "Liste"]
      ].map(([value, Icon, label]) => (
        <button
          key={String(value)}
          type="button"
          onClick={() => setView(value as ViewMode)}
          className={`segmented-option ${view === value ? "is-active" : ""}`}
          aria-label={String(label)}
        >
          <Icon size={15} />
        </button>
      ))}
    </div>
  );
}

function CompactPropertyRow({ property }: { property: Property }) {
  return (
    <article className="lift-card grid gap-4 rounded-lg border border-black/10 bg-white p-4 shadow-lift sm:grid-cols-[180px_1fr_auto] sm:items-center">
      <img src={property.image} alt={property.title} className="h-40 w-full rounded-md object-cover sm:h-32" />
      <div>
        <div className="mb-2 flex flex-wrap gap-2">
          <span className="rounded-md bg-sand px-2.5 py-1 text-xs font-bold text-palm">{property.district}</span>
          <span className="rounded-md bg-palm/10 px-2.5 py-1 text-xs font-bold text-palm">{property.legalStatus}</span>
        </div>
        <h3 className="text-xl font-extrabold text-ink">{property.title}</h3>
        <p className="mt-1 text-sm text-ink/56">{property.area} - {property.rooms} - {property.type}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {property.features.slice(0, 3).map((feature) => (
            <span key={feature} className="text-xs font-bold text-ink/42">{feature}</span>
          ))}
        </div>
      </div>
      <div className="sm:text-right">
        <div className="text-lg font-extrabold text-ink">{property.priceMad}</div>
        <div className="mb-4 text-xs text-ink/48">{property.priceEur}</div>
        <PremiumButton href={`/biens/${property.id}`} variant="ghost" compact>
          Details
        </PremiumButton>
      </div>
    </article>
  );
}
