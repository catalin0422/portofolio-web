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
  previewUrl?: string;
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
    name: "Barbershop",
    category: "Barbershop premium",
    shortDesc:
      "Programări online, profile pentru 8 angajați și statistici de venituri în timp real.",
    longDesc:
      "Un sistem complet pentru un barbershop premium din centrul orașului. Clienții își fac singuri programări online, aleg frizerul preferat și primesc confirmare automată. Echipa are dashboard separat cu programări, blocare orar și statistici de venit zilnic, săptămânal și lunar.",
    client: "Maison Barber SRL",
    year: "2025",
    duration: "6 săptămâni",
    liveLabel: "Vezi demo live",
    liveUrl: "https://barbershop-6m5s.vercel.app",
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
    image: "/Barbershop.png",
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
    slug: "beauty-clinic",
    name: "Beauty Clinic",
    category: "Clinică Beauty & Estetică",
    shortDesc:
      "Site de prezentare elegant cu galerie de tratamente, testimoniale și sistem de programări online.",
    longDesc:
      "Un site complet pentru o clinică de estetică și beauty. Clienții descoperă serviciile disponibile, galeria cu rezultate și pot face o programare direct din site. Design feminin și rafinat, cu animații fluide și o experiență mobilă impecabilă.",
    client: "Beauty Clinic",
    year: "2025",
    duration: "4 săptămâni",
    liveLabel: "Vezi live",
    liveUrl: "https://beauty-clinic-tan.vercel.app/",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Resend", "TypeScript"],
    features: [
      "Hero elegant cu fotografie full-screen și CTA proeminent",
      "Pagina de servicii cu detalii și prețuri per tratament",
      "Galerie fotografii cu efecte hover sofisticate",
      "Formular de programare cu confirmare automată prin email",
      "Secțiunea testimoniale cu rating și fotografii clienți",
      "Design responsiv optimizat pentru mobil",
    ],
    gradient: "from-rose-900 via-zinc-900 to-black",
    accent: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    image: "/Lumina Beauty Clinic.png",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero cu fotografie cinematică și CTA elegant.",
        gradient: "from-rose-900 via-zinc-900 to-black",
      },
      {
        title: "Servicii & Tratamente",
        desc: "Lista completă cu prețuri și descrieri detaliate.",
        gradient: "from-pink-900 via-zinc-900 to-black",
      },
      {
        title: "Galerie rezultate",
        desc: "Fotografii de prezentare cu efecte hover.",
        gradient: "from-fuchsia-900 via-zinc-900 to-black",
      },
      {
        title: "Programare online",
        desc: "Formular simplu cu selecție serviciu și confirmare email.",
        gradient: "from-purple-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "trei-pastori",
    name: "Pensiunea Trei Pastori",
    category: "Pensiune & Turism",
    shortDesc:
      "Site cu galerie premium, camere detaliate, rezervări online și informații despre destinație.",
    longDesc:
      "Site de prezentare pentru Pensiunea Trei Pastori. Turiștii văd galeria cu camere, facilitățile disponibile și pot face o rezervare direct din site. Design cald și primitor, cu fotografii de peisaj și un sistem de rezervări simplu și rapid.",
    client: "Pensiunea Trei Pastori",
    year: "2025",
    duration: "4 săptămâni",
    liveLabel: "Vezi live",
    liveUrl: "https://treipastori.md",
    tech: ["Next.js 14", "Tailwind CSS", "Resend", "TypeScript", "Framer Motion"],
    features: [
      "Hero full-screen cu fotografii panoramice de peisaj",
      "Pagina camere cu galerie, facilități și prețuri per noapte",
      "Sistem rezervări cu selecție dată check-in/check-out",
      "Secțiunea despre destinație cu harta și atracții locale",
      "Galerie foto premium cu grid editorial",
      "Design responsiv adaptat pentru orice dispozitiv",
    ],
    gradient: "from-emerald-900 via-zinc-900 to-black",
    accent: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    image: "/trei-pastori.png",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero panoramic cu CTA rezervare și facilități principale.",
        gradient: "from-emerald-900 via-zinc-900 to-black",
      },
      {
        title: "Camere & Apartamente",
        desc: "Galerie per cameră, facilități și prețuri afișate clar.",
        gradient: "from-teal-900 via-zinc-900 to-black",
      },
      {
        title: "Galerie foto",
        desc: "Grid editorial cu imagini din pensiune și împrejurimi.",
        gradient: "from-green-900 via-zinc-900 to-black",
      },
      {
        title: "Rezervare online",
        desc: "Formular cu dată sosire, plecare și număr de persoane.",
        gradient: "from-cyan-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "hotel-suisse-plaza",
    name: "Suisse Plaza",
    category: "Hotel & Ospitalitate",
    shortDesc:
      "Site cu galerie premium, camere detaliate, rezervări online și informații despre destinație.",
    longDesc:
      "Site de prezentare pentru Suisse Plaza. Turiștii văd galeria cu camere, facilitățile disponibile și pot face o rezervare direct din site. Design elegant și modern, cu fotografii premium și un sistem de rezervări simplu și rapid.",
    client: "Suisse Plaza",
    year: "2025",
    duration: "4 săptămâni",
    liveLabel: "Vezi live",
    liveUrl: "https://suisse-plaza.vercel.app/",
    tech: ["Next.js 14", "Tailwind CSS", "Resend", "TypeScript", "Framer Motion"],
    features: [
      "Hero full-screen cu fotografii panoramice de peisaj",
      "Pagina camere cu galerie, facilități și prețuri per noapte",
      "Sistem rezervări cu selecție dată check-in/check-out",
      "Secțiunea despre destinație cu harta și atracții locale",
      "Galerie foto premium cu grid editorial",
      "Design responsiv adaptat pentru orice dispozitiv",
    ],
    gradient: "from-emerald-900 via-zinc-900 to-black",
    accent: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    image: "/Suisse-Plaza.png",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero panoramic cu CTA rezervare și facilități principale.",
        gradient: "from-emerald-900 via-zinc-900 to-black",
      },
      {
        title: "Camere & Apartamente",
        desc: "Galerie per cameră, facilități și prețuri afișate clar.",
        gradient: "from-teal-900 via-zinc-900 to-black",
      },
      {
        title: "Galerie foto",
        desc: "Grid editorial cu imagini din pensiune și împrejurimi.",
        gradient: "from-green-900 via-zinc-900 to-black",
      },
      {
        title: "Rezervare online",
        desc: "Formular cu dată sosire, plecare și număr de persoane.",
        gradient: "from-cyan-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "pizzeria-la-forno",
    name: "La Forno",
    category: "Restaurant & Pizzerie",
    shortDesc:
      "Site cu meniu interactiv, rezervări online, galerie foto și panou de administrare.",
    longDesc:
      "Site complet pentru o pizzerie artizanală. Hero cu carusel de fotografii, meniu cu categorii, galerie premium, sistem de rezervări online cu confirmare automată și un panou de administrare unde proprietarul vede toate rezervările și gestionează meniul.",
    client: "La Forno · Chișinău",
    year: "2025",
    duration: "5 săptămâni",
    liveLabel: "Vezi live",
    liveUrl: "https://la-forno.vercel.app/",
    tech: ["Next.js 14", "Tailwind CSS", "Playfair Display", "Supabase", "Resend"],
    features: [
      "Hero cu carusel de fotografii și animații elegante",
      "Meniu cu categorii (Pizza, Paste, Antipasti, Deserturi)",
      "Galerie foto cu grid asimetric și hover-effects",
      "Formular rezervare cu validare și confirmare prin email",
      "Dashboard administrator cu toate rezervările și meniu CRUD",
      "Design tipografic premium (Playfair Display + Inter)",
    ],
    gradient: "from-orange-900 via-zinc-900 to-black",
    accent: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    image: "/la-forno-hero.png",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero cu carusel foto, tipografie editorială și CTA elegant.",
        gradient: "from-orange-900 via-zinc-900 to-black",
      },
      {
        title: "Meniu interactiv",
        desc: "Categorii, descrieri rafinate și prețuri în culoarea brandului.",
        gradient: "from-amber-900 via-zinc-900 to-black",
      },
      {
        title: "Formular rezervare",
        desc: "Selecție dată, oră, persoane — confirmare prin email.",
        gradient: "from-red-900 via-zinc-900 to-black",
      },
      {
        title: "Panou administrator",
        desc: "Listă rezervări cu status, note și acțiuni rapide.",
        gradient: "from-rose-900 via-zinc-900 to-black",
      },
    ],
  },
  {
    slug: "brightdent-clinic",
    name: "BrightDent Clinic",
    category: "Clinică Dentară",
    shortDesc:
      "Site de prezentare cu servicii detaliate, galerie, programări online și echipă medicală.",
    longDesc:
      "Site complet pentru o clinică dentară. Pacienții descoperă serviciile disponibile, echipa de medici și pot face o programare direct din site. Design profesional și curat, care inspiră încredere și ghidează pacientul spre acțiune.",
    client: "BrightDent Clinic",
    year: "2025",
    duration: "4 săptămâni",
    liveUrl: "https://brightdent.vercel.app/",
    liveLabel: "Vezi live",
    tech: ["Next.js 14", "Tailwind CSS", "TypeScript", "Resend", "Framer Motion"],
    features: [
      "Hero profesional cu CTA programare proeminent",
      "Pagina servicii cu descrieri și prețuri transparente",
      "Profiluri medici cu specializări și experiență",
      "Formular de programare cu confirmare automată prin email",
      "Galerie cabinet și echipamente moderne",
      "Design responsiv optimizat pentru orice dispozitiv",
    ],
    gradient: "from-sky-900 via-zinc-900 to-black",
    accent: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    image: "/BrightDent Clinic.png",
    screens: [
      {
        title: "Pagina principală",
        desc: "Hero cu CTA programare și prezentare servicii principale.",
        gradient: "from-sky-900 via-zinc-900 to-black",
      },
      {
        title: "Servicii & Prețuri",
        desc: "Lista completă cu descrieri și prețuri transparente.",
        gradient: "from-blue-900 via-zinc-900 to-black",
      },
      {
        title: "Echipa medicală",
        desc: "Profiluri medici cu specializări și experiență.",
        gradient: "from-cyan-900 via-zinc-900 to-black",
      },
      {
        title: "Programare online",
        desc: "Formular simplu cu selecție serviciu și confirmare email.",
        gradient: "from-teal-900 via-zinc-900 to-black",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
