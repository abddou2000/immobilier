export type Transaction = "acheter" | "louer";

export type Property = {
  id: string;
  title: string;
  type: string;
  transaction: Transaction;
  district: string;
  priceMad: string;
  priceEur: string;
  priceValue: number;
  area: string;
  areaValue: number;
  rooms: string;
  tag: string;
  image: string;
  legalStatus: string;
  features: string[];
  tone: string;
  description?: string;
  gallery?: string[];
  highlights?: string[];
  legalChecks?: string[];
  locationInsight?: string;
  investmentNote?: string;
};

export type District = {
  name: string;
  mood: string;
  count: string;
  price: string;
  audience: string;
  note: string;
};

export type Guide = {
  title: string;
  description: string;
  readTime: string;
  icon: "FileText" | "BarChart3" | "Globe2" | "Home" | "ShieldCheck" | "Map";
};

export const heroImage = "/assets/marrakech-riad-hero.png";

export const baseProperties: Property[] = [
  {
    id: "riad-medina-bassin",
    title: "Riad titre avec bassin",
    type: "Riad",
    transaction: "acheter",
    district: "Medina",
    priceMad: "4 850 000 MAD",
    priceEur: "435 000 EUR",
    priceValue: 4850000,
    area: "286 m2",
    areaValue: 286,
    rooms: "6 suites",
    tag: "Titre foncier confirme",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    legalStatus: "TF verifie",
    features: ["Piscine", "Terrasse", "Visite video", "Etrangers OK"],
    tone: "from-clay/90 to-saffron/75",
    description: "Riad titre dans un secteur recherche de la Medina, pense pour un usage residence secondaire ou exploitation confidentielle. Les volumes, le bassin et la terrasse donnent une experience tres Marrakech, avec un dossier juridique deja qualifie.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: ["Dossier titre foncier confirme", "Terrasse exploitable", "Bassin central", "Visite video disponible"],
    legalChecks: ["Titre foncier consulte", "Superficie coherente", "Acquisition etranger possible", "Documents vendeur identifies"],
    locationInsight: "Medina: recherche forte pour les riads de caractere, mais selection stricte sur l'acces, le bruit et la clarte documentaire.",
    investmentNote: "Potentiel location boutique ou residence secondaire avec valorisation par ameublement et contenu photo premium."
  },
  {
    id: "villa-palmeraie-jardin",
    title: "Villa contemporaine jardin",
    type: "Villa",
    transaction: "acheter",
    district: "Palmeraie",
    priceMad: "9 800 000 MAD",
    priceEur: "880 000 EUR",
    priceValue: 9800000,
    area: "520 m2",
    areaValue: 520,
    rooms: "5 chambres",
    tag: "Visite video possible",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
    legalStatus: "TF verifie",
    features: ["Jardin", "Piscine", "Suite invite", "Garage"],
    tone: "from-palm/90 to-agave/80",
    description: "Villa contemporaine avec jardin genereux, volumes familiaux et vraie logique de confort. Elle s'adresse a une clientele recherchant le calme de la Palmeraie avec un niveau de prestations immediatement exploitable.",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: ["Jardin paysager", "Piscine familiale", "Suite invite", "Garage prive"],
    legalChecks: ["Titre foncier verifie", "Plan cadastral disponible", "Aucune incoherence relevee", "Visite video possible"],
    locationInsight: "Palmeraie: secteur premium, demande selective, ideal pour villas discretes et sejours longue duree haut de gamme.",
    investmentNote: "Bon actif patrimonial avec potentiel locatif premium si ameublement, photos et gestion sont au niveau."
  },
  {
    id: "appartement-gueliz-terrasse",
    title: "Appartement standing terrasse",
    type: "Appartement",
    transaction: "acheter",
    district: "Gueliz",
    priceMad: "2 150 000 MAD",
    priceEur: "193 000 EUR",
    priceValue: 2150000,
    area: "134 m2",
    areaValue: 134,
    rooms: "3 pieces",
    tag: "Fort rendement locatif",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    legalStatus: "Copropriete claire",
    features: ["Terrasse", "Ascenseur", "Parking", "Meuble"],
    tone: "from-night/90 to-palm/80",
    description: "Appartement standing situe dans une zone urbaine recherchee, avec terrasse et configuration efficace. Un choix pertinent pour residence principale, pied-a-terre ou rendement locatif meublé.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: ["Terrasse lumineuse", "Parking", "Ascenseur", "Rendement locatif"],
    legalChecks: ["Copropriete identifiee", "Charges a verifier", "Titre clair", "Dossier syndic demande"],
    locationInsight: "Gueliz: forte liquidite locative, quartier pratique pour expatries, commerces et vie urbaine.",
    investmentNote: "Bon potentiel de location meublee longue duree avec ticket d'entree plus accessible que les secteurs luxe."
  }
];

export const purchaseProperties: Property[] = [
  ...baseProperties,
  {
    id: "terrain-ourika-villa",
    title: "Terrain villa route Ourika",
    type: "Terrain",
    transaction: "acheter",
    district: "Route Ourika",
    priceMad: "3 900 000 MAD",
    priceEur: "350 000 EUR",
    priceValue: 3900000,
    area: "1 640 m2",
    areaValue: 1640,
    rooms: "Zone villa",
    tag: "Potentiel construction",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    legalStatus: "Urbanisme a verifier",
    features: ["Vue Atlas", "Acces route", "Projet villa", "Calme"],
    tone: "from-saffron/90 to-clay/70"
  },
  {
    id: "riad-kasbah-boutique",
    title: "Riad boutique-hotel",
    type: "Riad",
    transaction: "acheter",
    district: "Kasbah",
    priceMad: "8 700 000 MAD",
    priceEur: "781 000 EUR",
    priceValue: 8700000,
    area: "410 m2",
    areaValue: 410,
    rooms: "9 chambres",
    tag: "Licence maison d'hotes",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    legalStatus: "Dossier licence",
    features: ["Exploitation", "Rooftop", "Hammam", "Reception"],
    tone: "from-night/90 to-clay/80"
  },
  {
    id: "villa-agdal-golf",
    title: "Villa golf Atlas",
    type: "Villa",
    transaction: "acheter",
    district: "Agdal",
    priceMad: "12 400 000 MAD",
    priceEur: "1 114 000 EUR",
    priceValue: 12400000,
    area: "740 m2",
    areaValue: 740,
    rooms: "6 chambres",
    tag: "Vue Atlas et golf",
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=900&q=80",
    legalStatus: "TF verifie",
    features: ["Golf", "Piscine", "Staff room", "Securite"],
    tone: "from-palm/90 to-saffron/70"
  }
];

export const rentalProperties: Property[] = [
  {
    id: "villa-targa-meublee",
    title: "Villa meublee longue duree",
    type: "Villa",
    transaction: "louer",
    district: "Targa",
    priceMad: "24 000 MAD/mois",
    priceEur: "2 155 EUR/mois",
    priceValue: 24000,
    area: "360 m2",
    areaValue: 360,
    rooms: "4 chambres",
    tag: "Bail flexible",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
    legalStatus: "Contrat long terme",
    features: ["Meuble", "Jardin", "Famille", "Parking"],
    tone: "from-palm/90 to-agave/75"
  },
  {
    id: "appartement-hivernage-terrasse",
    title: "Appartement skyline terrasse",
    type: "Appartement",
    transaction: "louer",
    district: "Hivernage",
    priceMad: "18 500 MAD/mois",
    priceEur: "1 661 EUR/mois",
    priceValue: 18500,
    area: "148 m2",
    areaValue: 148,
    rooms: "3 chambres",
    tag: "Residence securisee",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    legalStatus: "Bail residentiel",
    features: ["Terrasse", "Securite", "Parking", "Concierge"],
    tone: "from-night/90 to-saffron/70"
  },
  {
    id: "riad-medina-location",
    title: "Riad intimiste meuble",
    type: "Riad",
    transaction: "louer",
    district: "Medina",
    priceMad: "29 000 MAD/mois",
    priceEur: "2 604 EUR/mois",
    priceValue: 29000,
    area: "250 m2",
    areaValue: 250,
    rooms: "5 suites",
    tag: "Piscine chauffee",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
    legalStatus: "Bail flexible",
    features: ["Piscine", "Rooftop", "Meuble", "Visite video"],
    tone: "from-clay/90 to-palm/75"
  }
];

export const districts: District[] = [
  {
    name: "Medina",
    mood: "Riads authentiques et maisons d'hotes",
    count: "21 biens",
    price: "Prix moyen 18 500 MAD/m2",
    audience: "Acheteurs et investisseurs boutique-hotel",
    note: "Forte valeur de charme, vigilance juridique elevee"
  },
  {
    name: "Palmeraie",
    mood: "Villas discretes, grands jardins, residences de luxe",
    count: "14 biens",
    price: "Prix moyen 24 000 MAD/m2",
    audience: "Familles, Golfe, location premium",
    note: "Liquidite selective, fortes exigences photos"
  },
  {
    name: "Gueliz",
    mood: "Vie urbaine, commerces, restaurants",
    count: "33 biens",
    price: "Prix moyen 17 200 MAD/m2",
    audience: "Locataires expatries et investisseurs rendement",
    note: "Demande reguliere, ticket d'entree plus accessible"
  },
  {
    name: "Hivernage",
    mood: "Prestige hotelier et proximite centre",
    count: "11 biens",
    price: "Prix moyen 26 800 MAD/m2",
    audience: "Clients premium et location courte duree",
    note: "Prix eleves, excellente desirabilite"
  },
  {
    name: "Agdal",
    mood: "Resorts, golf et programmes recents",
    count: "16 biens",
    price: "Prix moyen 21 700 MAD/m2",
    audience: "Investisseurs et residences secondaires",
    note: "Bon potentiel locatif saisonnier"
  },
  {
    name: "Route Ourika",
    mood: "Terrains et villas avec vue Atlas",
    count: "9 biens",
    price: "Prix moyen 8 900 MAD/m2",
    audience: "Familles et projets sur mesure",
    note: "Potentiel de valorisation, verifier urbanisme"
  }
];

export const guides: Guide[] = [
  {
    title: "Acheter un riad a Marrakech",
    description: "Etapes, documents, notaire, verification du titre et pieges a eviter.",
    readTime: "16 min",
    icon: "FileText"
  },
  {
    title: "Investir en location saisonniere",
    description: "Rendement, quartiers, autorisations, ameublement et gestion.",
    readTime: "12 min",
    icon: "BarChart3"
  },
  {
    title: "Guide acheteur etranger",
    description: "Transfert des fonds, acquisition, fiscalite, rapatriement et change.",
    readTime: "18 min",
    icon: "Globe2"
  },
  {
    title: "Vendre son bien a Marrakech",
    description: "Estimation, mandat, photos, diffusion internationale et negociation.",
    readTime: "10 min",
    icon: "Home"
  },
  {
    title: "Moulkiya, TF et securite juridique",
    description: "Comprendre les statuts et organiser la due diligence.",
    readTime: "14 min",
    icon: "ShieldCheck"
  },
  {
    title: "Choisir son quartier",
    description: "Style de vie, budget, transports, ecoles et potentiel de revente.",
    readTime: "9 min",
    icon: "Map"
  }
];

export const teamMembers = [
  ["Salma El Idrissi", "Direction agence", "Mandats premium, relation vendeurs, strategie prix."],
  ["Youssef Ait Mansour", "Conseil investissement", "Rendement, montage dossier, acheteurs internationaux."],
  ["Nadia Benjelloun", "Experience client", "Visites video, suivi a distance, coordination notaire."]
] as const;

export const processSteps = [
  ["01", "Qualification", "Budget, devise, quartier, usage et contraintes juridiques."],
  ["02", "Selection verifiee", "Biens filtres par statut, potentiel et coherence prix."],
  ["03", "Visite & negociation", "Visite sur place ou video, compte-rendu et offre structuree."],
  ["04", "Signature", "Coordination notaire, documents, compromis et suivi dossier."]
] as const;

export const allProperties: Property[] = [...purchaseProperties, ...rentalProperties];

export function getPropertyById(id: string) {
  return allProperties.find((property) => property.id === id);
}

export function getSimilarProperties(property: Property, limit = 3) {
  return allProperties
    .filter((candidate) => candidate.id !== property.id)
    .sort((a, b) => {
      const sameTransaction = Number(b.transaction === property.transaction) - Number(a.transaction === property.transaction);
      if (sameTransaction !== 0) return sameTransaction;
      const sameDistrict = Number(b.district === property.district) - Number(a.district === property.district);
      if (sameDistrict !== 0) return sameDistrict;
      return a.title.localeCompare(b.title);
    })
    .slice(0, limit);
}
