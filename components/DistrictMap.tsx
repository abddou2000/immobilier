import { districts } from "@/data/site";

const pins = [
  ["Medina", "left-[34%] top-[42%]", "bg-clay"],
  ["Gueliz", "left-[48%] top-[36%]", "bg-palm"],
  ["Hivernage", "left-[43%] top-[52%]", "bg-saffron"],
  ["Palmeraie", "left-[62%] top-[22%]", "bg-agave"],
  ["Ourika", "left-[58%] top-[70%]", "bg-night"]
] as const;

export function DistrictMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-lift">
      <div className={`map-grid relative ${compact ? "min-h-[360px]" : "min-h-[520px]"} bg-[#eef2e9]`}>
        {pins.map(([name, pos, color]) => (
          <button key={name} type="button" className={`map-pin-button absolute ${pos} -translate-x-1/2 -translate-y-1/2 bg-white text-sm shadow-lift`}>
            <span className={`h-3 w-3 rounded-full ${color}`} />
            {name}
          </button>
        ))}
        <div className="absolute bottom-4 left-4 rounded-md bg-white/90 p-3 text-xs font-semibold text-ink/64 backdrop-blur">
          Carte conceptuelle Mapbox - clusters par quartier
        </div>
      </div>
    </div>
  );
}

export function DistrictList() {
  return (
    <div className="mt-8 space-y-3">
      {districts.slice(0, 4).map((district) => (
        <div key={district.name} className="flex items-center justify-between gap-4 rounded-lg border border-black/10 bg-white p-4">
          <div>
            <div className="font-bold">{district.name}</div>
            <div className="text-sm text-ink/56">{district.mood}</div>
          </div>
          <div className="text-right text-xs font-semibold text-ink/55">
            <div>{district.count}</div>
            <div>{district.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

