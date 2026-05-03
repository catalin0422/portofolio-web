export type Project = {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  client: string;
  year: string;
  duration: string;
  liveUrl?: string;
  liveLabel?: string;
  tech: string[];
  features: string[];
  gradient: string;
  accent: string;
  image: string;
  screens: { title: string; desc: string; gradient: string }[];
};

export const projects: Project[] = [
  {
    slug: "maison-barber",
    name: "Maison Barber",
    category: "Barbershop premium",
    shortDesc:
      "Programări online, profile pentru 8 angajați și statistici de venituri în timp real.",
    longDesc:
      "Un sistem complet pentru un barbershop premium din centrul orașului. Clienții își fac singuri programări online, aleg frizerul preferat și primesc confirmare automată. Echipa are dashboard separat cu programări, blocare orar și statistici de venit zilnic, săptămânal și lunar.",
    client: "Maison Barber SRL",
    year: "2025",
    duration: "6 săptămâni",
    liveUrl: "/",
    liveLabel: "Vezi demo live",
    tech: ["Next.js 14", "Tailwind CSS", "Supabase", "TypeScript", "Resend"],
    features: [
      "Sistem de programări cu calendar interactiv",
      "Profile individuale pentru fiecare angajat",
      "Dashboard admin cu statistici de venituri",
      "Galerie foto, testimoniale și formular de contact",
      "Notificări email automate prin Resend",
      "Gestiune orar de lucru și perioade blocate",
    ],
    gradient: "from-zinc-800 via-zinc-900 to-black",
    accent: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=85&auto=format&fit=crop",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero cu CTA, galerie foto și testimoniale.",
        gradient: "from-zinc-800 via-zinc-900 to-black",
      },
      {
        title: "Calendar de programări",
        desc: "Selecție frizer, dată și interval orar disponibil.",
        gradient: "from-cyan-900 via-zinc-900 to-black",
      },
      {
        title: "Dashboard angajat",
        desc: "Programările zilei și venitul personal.",
        gradient: "from-blue-900 via-zinc-900 to-black",
      },
      {
        title: "Statistici admin",
        desc: "Venituri pe lună, top angajați, ore aglomerate.",
        gradient: "from-violet-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "tohami-winery",
    name: "Tohami",
    category: "Cramă & Vinărie",
    shortDesc:
      "Website premium pentru o cramă moldovenească — colecție de vinuri, domeniu și degustări.",
    longDesc:
      "Un site de prezentare pentru Cramă Tohami, vinărie de familie din Codrul Moldovei, fondată în 1987. Design sobru și elegant, cu fotografii cinematice din vie și cramă. Vizitatorii descoperă colecția de vinuri, povestea domeniului și pot rezerva o degustare direct prin site.",
    client: "Cramă Tohami · Moldova",
    year: "2025",
    duration: "4 săptămâni",
    liveLabel: "Studiu de caz",
    tech: ["Next.js 14", "Tailwind CSS", "Playfair Display", "Framer Motion", "Resend"],
    features: [
      "Hero full-screen cu fotografie cinematică din vie",
      "Colecție vinuri cu soiuri, an de recoltă și preț",
      "Secțiunea 'Domeniu' cu galerie și povestea cramei",
      "Formular rezervare degustare cu confirmare automată",
      "Tipografie premium serif (Playfair Display)",
      "Design responsiv adaptat pe mobil și tabletă",
    ],
    gradient: "from-red-950 via-zinc-900 to-black",
    accent: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1200&q=85&auto=format&fit=crop",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero cinematografic din vie, titlu serif și CTA elegant.",
        gradient: "from-red-950 via-zinc-900 to-black",
      },
      {
        title: "Colecție vinuri",
        desc: "Soiuri autohtone cu an de recoltă, note și preț.",
        gradient: "from-amber-950 via-zinc-900 to-black",
      },
      {
        title: "Domeniu & Poveste",
        desc: "Galerie din cramă și vie, cu text editorial.",
        gradient: "from-stone-900 via-zinc-900 to-black",
      },
      {
        title: "Rezervare degustare",
        desc: "Formular de contact și informații de vizită.",
        gradient: "from-rose-950 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "pizzeria-da-luigi",
    name: "La Forno",
    category: "Pizzerie artizanală",
    shortDesc:
      "Site elegant cu rezervări online, meniu interactiv, galerie și panou de administrare.",
    longDesc:
      "Site complet pentru o pizzerie artizanală din Chișinău. Hero cu carusel de fotografii, meniu cu categorii, galerie premium, sistem de rezervări online cu confirmare automată și un panou de administrare separat unde proprietarul vede toate rezervările zilei și gestionează meniul.",
    client: "La Forno · Chișinău",
    year: "2026",
    duration: "5 săptămâni",
    liveLabel: "Studiu de caz",
    tech: [
      "Next.js 14",
      "Tailwind CSS",
      "Playfair Display",
      "Supabase",
      "Resend",
    ],
    features: [
      "Hero cu carusel de fotografii și animații elegante",
      "Meniu cu categorii (Pizza, Paste, Antipasti, Deserturi)",
      "Galerie foto cu grid asimetric și hover-effects",
      "Formular rezervare cu validare și confirmare prin email",
      "Dashboard administrator cu toate rezervările și meniu CRUD",
      "Design tipografic premium (Playfair Display + Inter)",
    ],
    gradient: "from-red-900 via-zinc-900 to-black",
    accent: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&q=85&auto=format&fit=crop",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero cu carusel foto, tipografie editorială și CTA elegant.",
        gradient: "from-red-900 via-zinc-900 to-black",
      },
      {
        title: "Meniu interactiv",
        desc: "Categorii, descrieri rafinate și prețuri în culoarea brandului.",
        gradient: "from-orange-900 via-zinc-900 to-black",
      },
      {
        title: "Formular rezervare",
        desc: "Selecție dată, oră, persoane — confirmare prin email.",
        gradient: "from-amber-900 via-zinc-900 to-black",
      },
      {
        title: "Panou administrator",
        desc: "Listă rezervări cu status, note și acțiuni rapide.",
        gradient: "from-rose-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "dentalcare-clinic",
    name: "DentalCare Clinic",
    category: "Clinică stomatologică",
    shortDesc:
      "Fișe pacienți, programări multi-medic și notificări automate prin SMS.",
    longDesc:
      "Pentru o clinică stomatologică cu 5 medici. Sistemul gestionează fișele pacienților, istoricul tratamentelor, programări sincronizate între cabinete și trimite SMS-uri automate cu o zi înainte pentru a reduce no-show-urile.",
    client: "DentalCare Clinic",
    year: "2025",
    duration: "10 săptămâni",
    liveLabel: "Studiu de caz",
    tech: ["Next.js 14", "Tailwind CSS", "PostgreSQL", "Twilio SMS", "Prisma"],
    features: [
      "Fișe pacienți cu istoric tratamente complet",
      "Programări sincronizate între 5 medici",
      "Notificări SMS automate înainte de programare",
      "Dashboard medic cu programările zilei",
      "Rapoarte financiare și pe tip de tratament",
      "Acces securizat cu roluri separate (medic, recepție, admin)",
    ],
    gradient: "from-blue-900 via-zinc-900 to-black",
    accent: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=85&auto=format&fit=crop",
    screens: [
      {
        title: "Fișă pacient",
        desc: "Date personale, istoric și programări viitoare.",
        gradient: "from-blue-900 via-zinc-900 to-black",
      },
      {
        title: "Calendar multi-medic",
        desc: "Vedere combinată sau pe medic individual.",
        gradient: "from-indigo-900 via-zinc-900 to-black",
      },
      {
        title: "Programare nouă",
        desc: "Selecție medic, tratament și interval liber.",
        gradient: "from-violet-900 via-zinc-900 to-black",
      },
      {
        title: "Rapoarte financiare",
        desc: "Încasări per medic, per tratament, lunar.",
        gradient: "from-purple-900 via-zinc-900 to-black",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
