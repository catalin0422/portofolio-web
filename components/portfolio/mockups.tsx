/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import {
  Scissors,
  Calendar,
  Star,
  TrendingUp,
  Users,
  Clock,
  MapPin,
  Wifi,
  Coffee,
  Mountain,
  CreditCard,
  ChevronRight,
  Plus,
  Minus,
  Flame,
  Bell,
  Activity,
  FileText,
  Stethoscope,
  Phone,
  Search,
  Menu,
  Heart,
} from "lucide-react";

const photos = {
  barbershop: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600",
  barber1: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300",
  barber2: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=300",
  barber3: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300",
  // Tohami winery — verified wine/vineyard photos
  wineryHero: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1200",
  wine1: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600",
  wine2: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600",
  wine3: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600",
  wineCellar: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800",
  vineyardLandscape: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800",
  wineryEstate: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?w=600",
  wineryBarrel: "https://images.unsplash.com/photo-1584553421349-3557471bed79?w=600",
  wineGlass: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=600",
  pizza1: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
  pizza2: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
  pizza3: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  pizza4: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400",
  patient1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  doctor1: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200",
  doctor2: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200",
};

// ============================================================
// MAISON BARBER
// ============================================================

function MaisonLanding() {
  return (
    <div className="bg-zinc-950 text-zinc-100 h-full overflow-hidden">
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Scissors className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-bold tracking-widest">MAISON BARBER</span>
        </div>
        <div className="hidden md:flex gap-5 text-[9px] text-zinc-400">
          <span>Servicii</span>
          <span>Echipa</span>
          <span>Galerie</span>
          <span>Contact</span>
        </div>
        <span className="text-[9px] px-2.5 py-1 rounded-full bg-amber-400 text-zinc-900 font-semibold">
          Programează
        </span>
      </div>
      <div className="relative h-[calc(100%-2.6rem)]">
        <img src={photos.barbershop} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-6">
          <span className="text-[9px] uppercase tracking-widest text-amber-400 mb-2">Premium barbershop</span>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-md">
            Stilul tău începe<br />cu o programare.
          </h1>
          <p className="text-[10px] text-zinc-300 mt-2 max-w-xs">
            Echipă premiată, produse premium, atmosferă autentică.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="text-[9px] px-3 py-1.5 rounded-full bg-white text-zinc-900 font-semibold">
              Rezervă online
            </span>
            <span className="text-[9px] px-3 py-1.5 rounded-full border border-white/20">
              Vezi galerie
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaisonBooking() {
  const days = ["Lu", "Ma", "Mi", "Jo", "Vi", "Sâ", "Du"];
  const dates = [4, 5, 6, 7, 8, 9, 10];
  const slots = ["09:00", "10:30", "11:00", "12:30", "14:00", "15:30", "16:00", "17:30"];
  return (
    <div className="bg-zinc-950 text-zinc-100 h-full p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[9px] text-zinc-500 uppercase tracking-wide">Pasul 2 din 3</p>
          <h2 className="text-base font-bold">Alege data și ora</h2>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/10">
          <img src={photos.barber1} className="w-5 h-5 rounded-full object-cover" alt="" />
          <span className="text-[9px]">Andrei · Tunsoare</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1.5 mb-4">
        {days.map((d, i) => (
          <div
            key={d}
            className={`aspect-square rounded-lg flex flex-col items-center justify-center ${
              i === 2 ? "bg-amber-400 text-zinc-900" : "bg-white/5 border border-white/5"
            }`}
          >
            <span className="text-[8px] opacity-70">{d}</span>
            <span className="text-xs font-bold">{dates[i]}</span>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-zinc-500 mb-2">Intervale disponibile · Miercuri 6 mai</p>
      <div className="grid grid-cols-4 gap-1.5 mb-4">
        {slots.map((s, i) => (
          <div
            key={s}
            className={`py-2 rounded-lg text-[10px] text-center ${
              i === 3
                ? "bg-amber-400 text-zinc-900 font-semibold"
                : i === 1 || i === 5
                ? "bg-white/5 text-zinc-600 line-through"
                : "bg-white/5 border border-white/5"
            }`}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-between">
        <div>
          <p className="text-[9px] text-zinc-500">Total programare</p>
          <p className="text-base font-bold">120 lei <span className="text-[9px] text-zinc-500 font-normal">· 45 min</span></p>
        </div>
        <span className="text-[10px] px-4 py-2 rounded-full bg-amber-400 text-zinc-900 font-semibold">
          Confirmă
        </span>
      </div>
    </div>
  );
}

function MaisonDashboard() {
  const appts = [
    { time: "10:00", name: "Andrei Popescu", svc: "Tunsoare + Barbă", price: 180 },
    { time: "11:30", name: "Mihai Ionescu", svc: "Tunsoare", price: 120 },
    { time: "13:00", name: "Radu Stan", svc: "Barbă", price: 80 },
    { time: "14:30", name: "Vlad Marin", svc: "Tunsoare + Barbă", price: 180 },
  ];
  return (
    <div className="bg-zinc-950 text-zinc-100 h-full overflow-hidden flex">
      <div className="w-32 border-r border-white/5 p-3 hidden md:flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-3">
          <img src={photos.barber1} className="w-7 h-7 rounded-full object-cover" alt="" />
          <div>
            <p className="text-[9px] font-semibold leading-tight">Andrei P.</p>
            <p className="text-[8px] text-zinc-500">Senior Barber</p>
          </div>
        </div>
        {["Programări", "Calendar", "Clienți", "Statistici", "Setări"].map((it, i) => (
          <div
            key={it}
            className={`text-[9px] px-2 py-1.5 rounded ${i === 0 ? "bg-amber-400/10 text-amber-300" : "text-zinc-400"}`}
          >
            {it}
          </div>
        ))}
      </div>
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-bold">Bună, Andrei 👋</h2>
            <p className="text-[9px] text-zinc-500">Ai 4 programări astăzi</p>
          </div>
          <Bell className="w-4 h-4 text-zinc-400" />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="rounded-lg bg-white/5 p-2.5 border border-white/5">
            <p className="text-[8px] text-zinc-500 uppercase tracking-wide">Astăzi</p>
            <p className="text-base font-bold">560 <span className="text-[9px] font-normal text-zinc-500">lei</span></p>
          </div>
          <div className="rounded-lg bg-white/5 p-2.5 border border-white/5">
            <p className="text-[8px] text-zinc-500 uppercase tracking-wide">Săptămână</p>
            <p className="text-base font-bold">3.240 <span className="text-[9px] font-normal text-zinc-500">lei</span></p>
          </div>
          <div className="rounded-lg bg-amber-400/10 p-2.5 border border-amber-400/20">
            <p className="text-[8px] text-amber-300/80 uppercase tracking-wide">Lună</p>
            <p className="text-base font-bold text-amber-300">14.800</p>
          </div>
        </div>
        <p className="text-[9px] text-zinc-500 uppercase tracking-wide mb-2">Programările zilei</p>
        <div className="space-y-1.5">
          {appts.map((a) => (
            <div key={a.time} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
              <span className="text-[10px] font-mono font-bold text-amber-300 w-12">{a.time}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold truncate">{a.name}</p>
                <p className="text-[8px] text-zinc-500 truncate">{a.svc}</p>
              </div>
              <span className="text-[10px] font-bold">{a.price}<span className="text-zinc-500 font-normal"> lei</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MaisonStats() {
  const months = ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun"];
  const heights = [40, 55, 48, 70, 85, 95];
  return (
    <div className="bg-zinc-950 text-zinc-100 h-full p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-bold">Panou Admin</h2>
          <p className="text-[9px] text-zinc-500">Vedere de ansamblu · Mai 2025</p>
        </div>
        <span className="text-[9px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
          Ultimele 6 luni
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: "Venit", val: "82.4K", sub: "+12%", icon: TrendingUp, color: "text-emerald-400" },
          { label: "Programări", val: "847", sub: "+8%", icon: Calendar, color: "text-cyan-400" },
          { label: "Clienți", val: "312", sub: "+15%", icon: Users, color: "text-violet-400" },
          { label: "Rating", val: "4.9", sub: "287 rev.", icon: Star, color: "text-amber-400" },
        ].map((k) => (
          <div key={k.label} className="rounded-lg bg-white/5 border border-white/5 p-2.5">
            <k.icon className={`w-3 h-3 ${k.color} mb-1`} />
            <p className="text-[8px] text-zinc-500 uppercase">{k.label}</p>
            <p className="text-sm font-bold">{k.val}</p>
            <p className={`text-[8px] ${k.color}`}>{k.sub}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white/5 border border-white/5 p-3 mb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-semibold">Venituri lunare</p>
          <span className="text-[8px] text-zinc-500">RON</span>
        </div>
        <div className="flex items-end gap-2 h-20">
          {months.map((m, i) => (
            <div key={m} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`w-full rounded-t ${i === 5 ? "bg-amber-400" : "bg-cyan-500/30"}`}
                style={{ height: `${heights[i]}%` }}
              />
              <span className="text-[8px] text-zinc-500">{m}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-white/5 border border-white/5 p-2.5">
          <p className="text-[9px] text-zinc-500 mb-1.5">Top angajat</p>
          <div className="flex items-center gap-2">
            <img src={photos.barber1} className="w-6 h-6 rounded-full object-cover" alt="" />
            <div>
              <p className="text-[10px] font-semibold">Andrei P.</p>
              <p className="text-[8px] text-emerald-400">14.800 lei</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white/5 border border-white/5 p-2.5">
          <p className="text-[9px] text-zinc-500 mb-1.5">Oră aglomerată</p>
          <p className="text-sm font-bold">17:00 – 19:00</p>
          <p className="text-[8px] text-zinc-500">Joi & Vineri</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TOHAMI WINERY
// Palette: deep wine, warm gold, cream ivory, charcoal dark
// ============================================================
const TH_WINE   = "#6b1a2a";
const TH_GOLD   = "#c4a35a";
const TH_CREAM  = "#f8f4ee";
const TH_DARK   = "#1a1510";
const TH_BORDER = "#ddd5c5";
const TH_MUTED  = "#7a6e62";

function TohamiHero() {
  return (
    <div className="h-full relative overflow-hidden" style={{ background: TH_DARK }}>
      <img src={photos.wineryHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(10,5,4,.2) 0%, rgba(10,5,4,.5) 40%, rgba(10,5,4,.92) 100%)" }} />

      {/* Nav — compact, single row */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-5 py-3">
        <span className="font-display text-[11px] tracking-[0.4em] uppercase text-white/95 shrink-0">TOHAMI</span>
        <div className="flex gap-4 text-[7px] tracking-[0.25em] uppercase text-white/55">
          <span>Vinuri</span>
          <span>Domeniu</span>
          <span>Poveste</span>
          <span>Contact</span>
        </div>
        <span className="text-[7px] tracking-[0.18em] uppercase px-2.5 py-1.5 border shrink-0" style={{ borderColor: TH_GOLD, color: TH_GOLD }}>
          Vizitează
        </span>
      </div>

      {/* Hero text — bottom left */}
      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <p className="text-[7px] tracking-[0.5em] uppercase mb-2.5" style={{ color: TH_GOLD }}>
          Moldova · Codru · Est. 1987
        </p>
        <h1 className="font-display text-[2.6rem] text-white font-normal leading-[1.05] max-w-sm">
          Vin din piatră,<br /><em>timp și răbdare.</em>
        </h1>
        <p className="text-[9px] mt-3 max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
          Tohami produce vinuri de caracter din soiuri autohtone.
          Fiecare sticlă spune povestea solului nostru.
        </p>
        <div className="flex gap-2.5 mt-5">
          <span className="text-[8px] tracking-[0.2em] uppercase px-4 py-2 text-white" style={{ background: TH_WINE }}>
            Descoperă vinurile
          </span>
          <span className="text-[8px] tracking-[0.2em] uppercase px-4 py-2 border text-white/70" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
            Despre domeniu
          </span>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <div className="w-8 h-px" style={{ background: TH_GOLD, opacity: 0.35 }} />
          <span className="text-[7px] tracking-[0.4em] uppercase" style={{ color: "rgba(255,255,255,0.28)" }}>Derulează</span>
        </div>
      </div>
    </div>
  );
}

function TohamiWines() {
  const wines = [
    { img: photos.wine1, name: "Fetească Neagră", year: "2021", type: "Roșu sec", desc: "Cireașă, mure și note de pământ umed. Tanini fini, final lung.", price: "185 lei" },
    { img: photos.wine2, name: "Rară Neagră", year: "2020", type: "Roșu sec", desc: "Structură puternică, cu nuanțe de prune și ciocolată amară.", price: "220 lei" },
    { img: photos.wine3, name: "Chardonnay Privat", year: "2022", type: "Alb sec", desc: "Flori albe, citrice și final mineral elegant.", price: "165 lei" },
  ];
  return (
    <div className="h-full overflow-hidden" style={{ background: TH_CREAM }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: TH_BORDER }}>
        <div>
          <span className="font-display text-[11px] tracking-[0.3em] uppercase" style={{ color: TH_DARK }}>TOHAMI</span>
          <span className="text-[7px] tracking-[0.45em] uppercase ml-2" style={{ color: TH_GOLD }}>Vinărie</span>
        </div>
        <div className="flex gap-5 text-[8px] tracking-[0.2em] uppercase" style={{ color: TH_MUTED }}>
          <span style={{ color: TH_WINE, borderBottom: `1px solid ${TH_WINE}`, paddingBottom: "1px" }}>Vinuri</span>
          <span>Domeniu</span>
          <span>Poveste</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="px-6 py-4">
        <p className="text-[8px] tracking-[0.4em] uppercase mb-1" style={{ color: TH_GOLD }}>Colecția 2025</p>
        <h2 className="font-display text-2xl mb-1" style={{ color: TH_DARK }}>Vinurile noastre</h2>
        <p className="text-[9px] mb-4" style={{ color: TH_MUTED }}>Soiuri autohtone moldovenești, îmbuteliate cu respect față de tradiție.</p>
        <div className="grid grid-cols-3 gap-3">
          {wines.map((w) => (
            <div key={w.name} className="overflow-hidden border" style={{ borderColor: TH_BORDER, background: "#fff" }}>
              <div className="overflow-hidden" style={{ height: "110px" }}>
                <img src={w.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[7px] tracking-[0.2em] uppercase px-1.5 py-0.5" style={{ background: `${TH_WINE}18`, color: TH_WINE }}>{w.type}</span>
                  <span className="text-[7px]" style={{ color: TH_MUTED }}>· {w.year}</span>
                </div>
                <p className="font-display text-sm mb-0.5" style={{ color: TH_DARK }}>{w.name}</p>
                <p className="text-[8px] leading-relaxed mb-2" style={{ color: TH_MUTED }}>{w.desc}</p>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold" style={{ color: TH_DARK }}>{w.price}</p>
                  <span className="text-[7px] tracking-[0.15em] uppercase border px-2 py-0.5" style={{ borderColor: TH_WINE, color: TH_WINE }}>Comandă</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TohamiStory() {
  return (
    <div className="h-full overflow-hidden" style={{ background: TH_DARK }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
        <div>
          <span className="font-display text-[11px] tracking-[0.3em] uppercase text-white/90">TOHAMI</span>
          <span className="text-[7px] tracking-[0.45em] uppercase ml-2" style={{ color: TH_GOLD }}>Vinărie</span>
        </div>
        <div className="flex gap-5 text-[8px] tracking-[0.2em] uppercase text-white/40">
          <span>Vinuri</span>
          <span style={{ color: "rgba(196,163,90,0.9)", borderBottom: `1px solid ${TH_GOLD}`, paddingBottom: "1px" }}>Domeniu</span>
          <span>Poveste</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="grid grid-cols-2 h-[calc(100%-2.6rem)]">
        {/* Left: large vineyard image */}
        <div className="relative overflow-hidden">
          <img src={photos.vineyardLandscape} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 60%, rgba(26,21,16,1) 100%)" }} />
          {/* Floating quote */}
          <div className="absolute bottom-6 left-6 right-8">
            <div className="w-5 h-px mb-2" style={{ background: TH_GOLD }} />
            <p className="font-display text-base text-white/90 italic leading-snug">
              &ldquo;Solul de argilă al Codrului dă vinului un caracter unic, inimitabil.&rdquo;
            </p>
            <p className="text-[8px] tracking-[0.3em] uppercase mt-2" style={{ color: TH_GOLD }}>— Ion Tohami, fondator</p>
          </div>
        </div>

        {/* Right: story text */}
        <div className="p-6 overflow-hidden" style={{ color: "rgba(255,255,255,0.8)" }}>
          <p className="text-[8px] tracking-[0.5em] uppercase mb-3" style={{ color: TH_GOLD }}>Domeniul nostru</p>
          <h2 className="font-display text-2xl leading-tight mb-4 text-white">
            Trei generații,<br />un singur sol.
          </h2>
          <p className="text-[9px] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            Cramă Tohami a luat naștere în 1987 în inima Codrului moldovenesc, pe dealuri
            cu sol de argilă care conferă vinurilor noastre mineralitate și adâncime aparte.
          </p>
          <p className="text-[9px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
            Astăzi, 48 de hectare de viță-de-vie susțin o colecție de vinuri care
            reprezintă caracterul autentic al terorului moldovenesc.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { n: "1987", l: "Fondare" },
              { n: "48 ha", l: "Vie" },
              { n: "6", l: "Soiuri" },
            ].map((s) => (
              <div key={s.n} className="border-l pl-3" style={{ borderColor: TH_GOLD, borderLeftWidth: "2px" }}>
                <p className="font-display text-lg text-white">{s.n}</p>
                <p className="text-[8px] tracking-[0.2em] uppercase" style={{ color: TH_MUTED }}>{s.l}</p>
              </div>
            ))}
          </div>
          {/* Cellar image strip */}
          <div className="grid grid-cols-2 gap-2 rounded overflow-hidden" style={{ height: "80px" }}>
            <img src={photos.wineCellar} alt="" className="w-full h-full object-cover" />
            <img src={photos.wineryBarrel} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TohamiContact() {
  return (
    <div className="h-full overflow-hidden" style={{ background: TH_CREAM }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: TH_BORDER }}>
        <div>
          <span className="font-display text-[11px] tracking-[0.3em] uppercase" style={{ color: TH_DARK }}>TOHAMI</span>
          <span className="text-[7px] tracking-[0.45em] uppercase ml-2" style={{ color: TH_GOLD }}>Vinărie</span>
        </div>
        <div className="flex gap-5 text-[8px] tracking-[0.2em] uppercase" style={{ color: TH_MUTED }}>
          <span>Vinuri</span>
          <span>Domeniu</span>
          <span>Poveste</span>
          <span style={{ color: TH_WINE, borderBottom: `1px solid ${TH_WINE}`, paddingBottom: "1px" }}>Contact</span>
        </div>
      </div>

      <div className="grid grid-cols-2 h-[calc(100%-2.6rem)]">
        {/* Left: hero estate + visit info */}
        <div className="relative overflow-hidden">
          <img src={photos.wineryEstate} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${TH_DARK} 0%, rgba(26,21,16,.5) 60%, transparent 100%)` }} />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[8px] tracking-[0.4em] uppercase mb-2" style={{ color: TH_GOLD }}>Planifică o vizită</p>
            <h2 className="font-display text-xl text-white leading-snug mb-3">Vino la cramă</h2>
            <div className="space-y-1.5">
              {[
                { l: "Locație", v: "Codru, Rep. Moldova" },
                { l: "Program", v: "Luni–Sâmbătă, 10:00–18:00" },
                { l: "Telefon", v: "+373 22 123 456" },
                { l: "Email", v: "contact@tohami.md" },
              ].map((c) => (
                <div key={c.l} className="flex gap-2 text-[8px]">
                  <span className="w-14 tracking-[0.2em] uppercase shrink-0" style={{ color: "rgba(196,163,90,0.7)" }}>{c.l}</span>
                  <span className="text-white/75">{c.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: contact form */}
        <div className="p-6" style={{ background: "#fff" }}>
          <p className="text-[8px] tracking-[0.4em] uppercase mb-2" style={{ color: TH_GOLD }}>Scrie-ne</p>
          <h2 className="font-display text-xl mb-4" style={{ color: TH_DARK }}>Rezervă o degustare</h2>
          <div className="space-y-3">
            {[
              { l: "Nume", v: "Alexandru Rusu" },
              { l: "Email", v: "alex@email.md" },
              { l: "Data vizitei", v: "15 Iunie 2025" },
              { l: "Mesaj", v: "Doresc o degustare pentru 4 persoane..." },
            ].map((f) => (
              <div key={f.l}>
                <p className="text-[7px] tracking-[0.3em] uppercase mb-0.5 font-medium" style={{ color: TH_MUTED }}>{f.l}</p>
                <div className="py-1.5 text-[9px] border-b" style={{ borderColor: TH_BORDER, color: TH_DARK }}>{f.v}</div>
              </div>
            ))}
            <div className="pt-1 text-[8px] tracking-[0.2em] uppercase px-4 py-2.5 text-white text-center" style={{ background: TH_WINE }}>
              Trimite cererea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PIZZERIA DA LUIGI
// ============================================================

// La Forno — palette: red #c0392b, cream #faf8f5, warm #f0ebe4, border #e8e0d8
const LF_RED = "#c0392b";
const LF_CREAM = "#faf8f5";
const LF_BORDER = "#e8e0d8";
const LF_MUTED = "#6b6060";

function PizzaLanding() {
  return (
    <div className="h-full bg-white text-zinc-900 overflow-hidden relative">
      {/* Hero image with overlay */}
      <img
        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1800&q=85&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.35) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.75) 100%)",
        }}
      />

      {/* Top nav */}
      <div className="absolute top-0 inset-x-0 z-10 px-6 py-3 flex items-center justify-between">
        <span className="font-display text-base text-white font-medium">La Forno</span>
        <div className="hidden md:flex gap-5 text-[9px] tracking-wide text-white/80">
          <span>Meniu</span>
          <span>Galerie</span>
          <span>Rezervări</span>
          <span>Despre</span>
          <span>Contact</span>
        </div>
        <span
          className="text-[9px] px-3 py-1.5 rounded-full text-white tracking-wide"
          style={{ background: LF_RED }}
        >
          Rezervă →
        </span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-[8px] tracking-[0.45em] uppercase text-white/70 mb-3">
          Pizzerie Artizanală · Chișinău
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white font-medium leading-none">
          La Forno
        </h1>
        <p className="font-display italic text-[11px] md:text-sm text-white/75 mt-3">
          Realizat de Dogaru Catalin
        </p>
        <p className="font-display italic text-[10px] text-white/60 mb-5">+373 60 171 888</p>
        <div className="flex gap-2">
          <span
            className="text-[10px] px-5 py-2 rounded-full text-white tracking-wide flex items-center gap-1.5"
            style={{ background: LF_RED }}
          >
            <Calendar className="w-3 h-3" /> Rezervă o Masă
          </span>
          <span className="text-[10px] px-5 py-2 rounded-full bg-white/15 backdrop-blur text-white border border-white/30 tracking-wide">
            Vezi Meniul
          </span>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
          <span className="w-1 h-1 rounded-full bg-white" />
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="w-1 h-1 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}

function PizzaMenu() {
  const items = [
    {
      name: "Margherita",
      desc: "Sos de roșii San Marzano, mozzarella fior di latte, busuioc proaspăt.",
      price: "79",
    },
    {
      name: "Diavola",
      desc: "Sos picant, mozzarella, salam picant, ardei iute, măsline negre.",
      price: "89",
    },
    {
      name: "Quattro Stagioni",
      desc: "Șuncă, ciuperci, anghinare, măsline, câte un anotimp pe fiecare sfert.",
      price: "95",
    },
    {
      name: "Prosciutto e Rucola",
      desc: "Prosciutto crudo, rucola proaspătă, parmezan, ulei de trufe.",
      price: "105",
    },
    {
      name: "Tartufo Bianco",
      desc: "Bază de smântână, mozzarella, trufe albe, ou de prepeliță.",
      price: "119",
    },
  ];
  const cats = ["Pizza", "Paste", "Antipasti", "Deserturi"];
  return (
    <div className="h-full bg-white text-zinc-900 overflow-hidden p-5">
      <div className="text-center mb-4">
        <p className="text-[8px] tracking-[0.45em] uppercase mb-1.5" style={{ color: LF_RED }}>
          Meniu
        </p>
        <h2 className="font-display text-2xl md:text-3xl">Bucătăria noastră</h2>
        <p className="text-[10px] mt-1.5" style={{ color: LF_MUTED }}>
          Aluat dospit 48h · cuptor cu lemne 485°C
        </p>
        <div className="mt-3 h-px w-12 mx-auto" style={{ background: LF_RED }} />
      </div>

      <div className="flex justify-center gap-1.5 mb-4">
        {cats.map((c, i) => (
          <span
            key={c}
            className="text-[9px] px-3 py-1 rounded-full border tracking-wide"
            style={
              i === 0
                ? { background: LF_RED, borderColor: LF_RED, color: "#fff" }
                : { borderColor: LF_BORDER, color: LF_MUTED }
            }
          >
            {c}
          </span>
        ))}
      </div>

      <ul className="max-w-md mx-auto divide-y" style={{ borderColor: LF_BORDER }}>
        {items.map((it) => (
          <li
            key={it.name}
            className="py-2 flex items-baseline justify-between gap-4"
            style={{ borderColor: LF_BORDER }}
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-sm">{it.name}</h3>
              <p className="text-[9px] mt-0.5 leading-snug truncate" style={{ color: LF_MUTED }}>
                {it.desc}
              </p>
            </div>
            <span className="font-display text-sm flex-none" style={{ color: LF_RED }}>
              {it.price} <span className="text-[8px]" style={{ color: LF_MUTED }}>lei</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PizzaReservation() {
  return (
    <div className="h-full bg-white text-zinc-900 overflow-hidden p-5">
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* Left: copy */}
        <div>
          <p className="text-[8px] tracking-[0.45em] uppercase mb-2" style={{ color: LF_RED }}>
            Rezervări
          </p>
          <h2 className="font-display text-2xl md:text-3xl leading-tight">
            Rezervați
            <br />
            <em>masa voastră.</em>
          </h2>
          <p className="text-[9px] mt-3 leading-relaxed" style={{ color: LF_MUTED }}>
            Recomandăm rezervarea cu cel puțin 24 de ore înainte, mai ales în weekend.
          </p>
          <div className="mt-4 h-px w-10" style={{ background: LF_BORDER }} />
          <ul className="mt-4 space-y-2 text-[9px]" style={{ color: LF_MUTED }}>
            <li className="flex items-start gap-2">
              <Clock className="w-3 h-3 mt-0.5 flex-none" style={{ color: LF_RED }} />
              <span>Mar–Joi 12:00–23:00 · Vin–Sâm 12:00–00:00 · Luni închis</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-3 h-3 mt-0.5 flex-none" style={{ color: LF_RED }} />
              <span>+373 22 456 789</span>
            </li>
          </ul>
        </div>

        {/* Right: form card */}
        <div
          className="rounded-2xl p-4 border bg-white"
          style={{ borderColor: LF_BORDER, boxShadow: "0 4px 30px rgba(0,0,0,.05)" }}
        >
          <h3 className="font-display text-base mb-3">Formular Rezervare</h3>
          <div className="space-y-3">
            <div>
              <p
                className="text-[7px] tracking-[0.3em] uppercase mb-0.5 font-medium"
                style={{ color: LF_MUTED }}
              >
                Nume complet
              </p>
              <div
                className="text-[10px] py-1 border-b"
                style={{ borderColor: LF_BORDER, color: "#1a1a1a" }}
              >
                Maria Popescu
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p
                  className="text-[7px] tracking-[0.3em] uppercase mb-0.5 font-medium"
                  style={{ color: LF_MUTED }}
                >
                  Data
                </p>
                <div className="text-[10px] py-1 border-b" style={{ borderColor: LF_BORDER }}>
                  12 Mai 2026
                </div>
              </div>
              <div>
                <p
                  className="text-[7px] tracking-[0.3em] uppercase mb-0.5 font-medium"
                  style={{ color: LF_MUTED }}
                >
                  Ora
                </p>
                <div className="text-[10px] py-1 border-b" style={{ borderColor: LF_BORDER }}>
                  19:30 ▾
                </div>
              </div>
            </div>
            <div>
              <p
                className="text-[7px] tracking-[0.3em] uppercase mb-1 font-medium"
                style={{ color: LF_MUTED }}
              >
                Număr persoane
              </p>
              <div className="flex gap-1">
                {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n, i) => (
                  <span
                    key={n}
                    className="w-6 h-6 rounded-full text-[9px] flex items-center justify-center border"
                    style={
                      i === 1
                        ? { background: LF_RED, borderColor: LF_RED, color: "#fff" }
                        : { borderColor: LF_BORDER, color: LF_MUTED }
                    }
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p
                className="text-[7px] tracking-[0.3em] uppercase mb-0.5 font-medium"
                style={{ color: LF_MUTED }}
              >
                Telefon
              </p>
              <div className="text-[10px] py-1 border-b" style={{ borderColor: LF_BORDER }}>
                +373 712 345 678
              </div>
            </div>
            <div
              className="mt-3 py-2 rounded-full text-[10px] tracking-wide text-white text-center flex items-center justify-center gap-1.5"
              style={{ background: LF_RED }}
            >
              <Calendar className="w-3 h-3" />
              Confirmă Rezervarea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PizzaDashboard() {
  const reservations = [
    { name: "Andrei Ionescu", time: "19:00", guests: 4, status: "confirmed", note: "Aniversare" },
    { name: "Maria Popescu", time: "19:30", guests: 2, status: "confirmed", note: "" },
    { name: "Vlad Rusu", time: "20:00", guests: 6, status: "pending", note: "Masă în exterior" },
    { name: "Elena Cojocaru", time: "20:30", guests: 2, status: "confirmed", note: "" },
    { name: "Mihai Lupu", time: "21:00", guests: 3, status: "pending", note: "Alergic nuci" },
  ];
  const statusStyles = {
    confirmed: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500", label: "Confirmată" },
    pending: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-400", label: "Așteptare" },
  };
  return (
    <div className="h-full overflow-hidden flex" style={{ background: "#f5f5f0" }}>
      {/* Sidebar */}
      <div className="w-32 bg-white border-r p-3 hidden md:flex flex-col" style={{ borderColor: LF_BORDER }}>
        <div className="mb-4">
          <span className="font-display text-base font-medium" style={{ color: LF_RED }}>
            La Forno
          </span>
          <p className="text-[8px] tracking-[0.25em] uppercase mt-0.5" style={{ color: LF_MUTED }}>
            Dashboard
          </p>
        </div>
        {[
          { l: "Overview", active: false },
          { l: "Rezervări", active: true },
          { l: "Meniu", active: false },
          { l: "Setări", active: false },
        ].map((it) => (
          <div
            key={it.l}
            className="text-[10px] py-1.5 px-2 rounded mb-0.5 tracking-wide"
            style={
              it.active
                ? { background: LF_CREAM, color: LF_RED, fontWeight: 600 }
                : { color: LF_MUTED }
            }
          >
            {it.l}
          </div>
        ))}
        <div className="mt-auto pt-3 border-t" style={{ borderColor: LF_BORDER }}>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] text-white font-semibold"
              style={{ background: LF_RED }}
            >
              GM
            </div>
            <div>
              <p className="text-[9px] font-semibold leading-tight">Giuseppe M.</p>
              <p className="text-[7px]" style={{ color: LF_MUTED }}>
                Owner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-display text-lg">Rezervări astăzi</h2>
            <p className="text-[9px]" style={{ color: LF_MUTED }}>
              Sâmbătă, 2 Mai 2026 · 10 mese rezervate
            </p>
          </div>
          <span
            className="text-[9px] px-3 py-1 rounded-full text-white"
            style={{ background: LF_RED }}
          >
            + Adaugă rezervare
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { l: "Total", v: "10", sub: "rezervări" },
            { l: "Persoane", v: "32", sub: "oaspeți" },
            { l: "Confirmate", v: "7", sub: "din 10" },
            { l: "În așteptare", v: "3", sub: "necesită confirmare" },
          ].map((k) => (
            <div
              key={k.l}
              className="rounded-xl bg-white p-2.5 border"
              style={{ borderColor: LF_BORDER }}
            >
              <p className="text-[7px] tracking-[0.25em] uppercase" style={{ color: LF_MUTED }}>
                {k.l}
              </p>
              <p className="font-display text-xl mt-0.5">{k.v}</p>
              <p className="text-[8px]" style={{ color: LF_MUTED }}>
                {k.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-white border overflow-hidden" style={{ borderColor: LF_BORDER }}>
          <div
            className="grid grid-cols-[3rem_1fr_3rem_5rem_5rem] text-[8px] tracking-[0.2em] uppercase px-3 py-2 border-b"
            style={{ color: LF_MUTED, borderColor: LF_BORDER }}
          >
            <span>Ora</span>
            <span>Client</span>
            <span>Pers.</span>
            <span>Notă</span>
            <span>Status</span>
          </div>
          {reservations.map((r) => {
            const s = statusStyles[r.status as keyof typeof statusStyles];
            return (
              <div
                key={r.name}
                className="grid grid-cols-[3rem_1fr_3rem_5rem_5rem] items-center px-3 py-2 border-b last:border-0 text-[10px]"
                style={{ borderColor: LF_BORDER }}
              >
                <span className="font-display" style={{ color: LF_RED }}>
                  {r.time}
                </span>
                <div>
                  <p className="font-medium">{r.name}</p>
                </div>
                <span style={{ color: LF_MUTED }}>{r.guests}</span>
                <span className="text-[9px] truncate italic" style={{ color: LF_MUTED }}>
                  {r.note || "—"}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-medium w-fit ${s.bg} ${s.text}`}
                >
                  <span className={`w-1 h-1 rounded-full ${s.dot}`} />
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// DENTALCARE CLINIC
// ============================================================

function DentalPatient() {
  const treatments = [
    { date: "12 Apr 2025", name: "Detartraj profesional", doc: "Dr. Popa", price: 350 },
    { date: "28 Feb 2025", name: "Plombă molar 36", doc: "Dr. Ionescu", price: 480 },
    { date: "15 Ian 2025", name: "Consultație + Rx", doc: "Dr. Popa", price: 200 },
    { date: "03 Dec 2024", name: "Albire dentară", doc: "Dr. Popa", price: 1200 },
  ];
  return (
    <div className="bg-white text-zinc-900 h-full overflow-hidden flex">
      <div className="w-36 bg-zinc-50 border-r border-zinc-200 p-3 hidden md:block">
        <div className="flex items-center gap-1.5 mb-4">
          <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-bold tracking-tight">DENTALCARE</span>
        </div>
        {["📋 Pacienți", "📅 Calendar", "💊 Tratamente", "📊 Rapoarte", "⚙️ Setări"].map((it, i) => (
          <div
            key={it}
            className={`text-[10px] py-1.5 px-2 rounded-md mb-0.5 ${
              i === 0 ? "bg-blue-600 text-white font-semibold" : "text-zinc-600"
            }`}
          >
            {it}
          </div>
        ))}
      </div>
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex items-start gap-3 pb-3 border-b border-zinc-100">
          <img src={photos.patient1} alt="" className="w-14 h-14 rounded-full object-cover" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold">Maria Popescu</h2>
              <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                Activ
              </span>
            </div>
            <p className="text-[9px] text-zinc-500">CNP: 2890512•••••• · 36 ani</p>
            <div className="flex items-center gap-3 mt-1 text-[9px] text-zinc-600">
              <span className="flex items-center gap-1"><Phone className="w-2.5 h-2.5" /> +40 712 345 678</span>
              <span>📧 maria@email.ro</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-zinc-500">Total tratamente</p>
            <p className="text-base font-bold text-blue-600">12.840 lei</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 my-3">
          <div className="rounded-lg bg-blue-50 p-2">
            <Activity className="w-3 h-3 text-blue-600 mb-1" />
            <p className="text-[8px] text-zinc-500">Vizite</p>
            <p className="text-sm font-bold">14</p>
          </div>
          <div className="rounded-lg bg-amber-50 p-2">
            <Calendar className="w-3 h-3 text-amber-600 mb-1" />
            <p className="text-[8px] text-zinc-500">Următoarea</p>
            <p className="text-[10px] font-bold">22 Mai</p>
          </div>
          <div className="rounded-lg bg-emerald-50 p-2">
            <FileText className="w-3 h-3 text-emerald-600 mb-1" />
            <p className="text-[8px] text-zinc-500">Plan tratament</p>
            <p className="text-[10px] font-bold">3 active</p>
          </div>
        </div>
        <p className="text-[10px] font-semibold mb-2">Istoric tratamente</p>
        <div className="space-y-1.5">
          {treatments.map((t, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-100">
              <span className="text-[9px] text-zinc-500 font-mono w-20">{t.date}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold truncate">{t.name}</p>
                <p className="text-[8px] text-zinc-500">{t.doc}</p>
              </div>
              <span className="text-[10px] font-bold">{t.price} lei</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DentalCalendar() {
  const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  const docs = [
    { name: "Dr. Popa", color: "bg-blue-500", appts: [0, 2, 4] },
    { name: "Dr. Ionescu", color: "bg-emerald-500", appts: [1, 3] },
    { name: "Dr. Marin", color: "bg-violet-500", appts: [0, 5] },
    { name: "Dr. Stan", color: "bg-amber-500", appts: [2, 4, 6] },
    { name: "Dr. Vlad", color: "bg-rose-500", appts: [1, 5] },
  ];
  return (
    <div className="bg-white text-zinc-900 h-full p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-base font-bold">Calendar · Miercuri 7 Mai</h2>
          <p className="text-[9px] text-zinc-500">5 medici · 18 programări astăzi</p>
        </div>
        <div className="flex gap-1.5">
          {["Zi", "Săpt.", "Lună"].map((v, i) => (
            <span
              key={v}
              className={`text-[9px] px-2.5 py-1 rounded ${
                i === 0 ? "bg-blue-600 text-white font-semibold" : "bg-zinc-100"
              }`}
            >
              {v}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[3rem_repeat(5,1fr)] gap-1 text-[9px]">
        <div></div>
        {docs.map((d) => (
          <div key={d.name} className="text-center pb-1.5 border-b border-zinc-200">
            <div className={`w-1.5 h-1.5 rounded-full ${d.color} mx-auto mb-0.5`} />
            <p className="font-semibold text-[9px]">{d.name}</p>
          </div>
        ))}
        {hours.map((h, hi) => (
          <Fragment key={h}>
            <div className="text-zinc-400 font-mono py-3 text-right pr-1">{h}</div>
            {docs.map((d) => {
              const has = d.appts.includes(hi);
              return (
                <div key={`${h}-${d.name}`} className="border-t border-zinc-100 py-1 px-1">
                  {has && (
                    <div className={`${d.color} bg-opacity-15 border-l-2 ${d.color.replace("bg-", "border-")} rounded p-1.5`}>
                      <p className="text-[9px] font-bold truncate">M. Popescu</p>
                      <p className="text-[8px] opacity-70 truncate">Detartraj · 45min</p>
                    </div>
                  )}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function DentalNewAppt() {
  return (
    <div className="bg-white text-zinc-900 h-full p-5 overflow-hidden">
      <div className="max-w-xl">
        <p className="text-[9px] text-zinc-500 uppercase tracking-wide">Nouă programare</p>
        <h2 className="text-base font-bold mb-4">Adaugă pacient și interval</h2>

        <p className="text-[10px] font-semibold mb-1.5">1. Alege medicul</p>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { name: "Dr. Popa", spec: "Stomatolog general", img: photos.doctor1, sel: true },
            { name: "Dr. Ionescu", spec: "Endodonție", img: photos.doctor2 },
            { name: "Dr. Marin", spec: "Ortodonție", img: photos.doctor1 },
          ].map((d) => (
            <div
              key={d.name}
              className={`p-2.5 rounded-xl border-2 ${
                d.sel ? "border-blue-600 bg-blue-50" : "border-zinc-200"
              }`}
            >
              <img src={d.img} alt="" className="w-8 h-8 rounded-full object-cover mb-1.5" />
              <p className="text-[10px] font-bold">{d.name}</p>
              <p className="text-[8px] text-zinc-500">{d.spec}</p>
            </div>
          ))}
        </div>

        <p className="text-[10px] font-semibold mb-1.5">2. Tip tratament</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {["Consultație", "Detartraj", "Plombă", "Canal", "Albire", "Implant"].map((t, i) => (
            <span
              key={t}
              className={`text-[9px] px-2.5 py-1.5 rounded-full ${
                i === 1 ? "bg-blue-600 text-white font-semibold" : "bg-zinc-100 text-zinc-700"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-[10px] font-semibold mb-1.5">3. Interval disponibil</p>
        <div className="grid grid-cols-6 gap-1.5">
          {["09:00", "10:30", "11:00", "13:30", "14:00", "15:30"].map((s, i) => (
            <span
              key={s}
              className={`py-1.5 rounded text-[9px] text-center ${
                i === 2
                  ? "bg-blue-600 text-white font-bold"
                  : i === 1
                  ? "bg-zinc-100 text-zinc-300 line-through"
                  : "bg-zinc-100 text-zinc-700"
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-200">
          <div>
            <p className="text-[9px] text-blue-700">Sumar</p>
            <p className="text-[10px] font-bold">Detartraj · Dr. Popa · 7 Mai · 11:00</p>
          </div>
          <span className="text-[10px] px-3 py-1.5 rounded-full bg-blue-600 text-white font-semibold">
            Confirmă & SMS
          </span>
        </div>
      </div>
    </div>
  );
}

function DentalReports() {
  const docs = [
    { name: "Dr. Popa", val: 28400, pct: 95 },
    { name: "Dr. Ionescu", val: 22100, pct: 74 },
    { name: "Dr. Marin", val: 18900, pct: 63 },
    { name: "Dr. Stan", val: 14200, pct: 47 },
    { name: "Dr. Vlad", val: 9800, pct: 33 },
  ];
  const treatments = [
    { name: "Plombe", val: 32, color: "bg-blue-500" },
    { name: "Detartraj", val: 28, color: "bg-emerald-500" },
    { name: "Canal", val: 18, color: "bg-violet-500" },
    { name: "Albire", val: 14, color: "bg-amber-500" },
    { name: "Altele", val: 8, color: "bg-rose-500" },
  ];
  return (
    <div className="bg-white text-zinc-900 h-full p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-base font-bold">Rapoarte financiare</h2>
          <p className="text-[9px] text-zinc-500">Aprilie 2025 · clinica completă</p>
        </div>
        <span className="text-[9px] px-2.5 py-1 rounded-full bg-zinc-100">📥 Export PDF</span>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[
          { l: "Încasări", v: "93.4K", c: "text-emerald-600", s: "+22%" },
          { l: "Pacienți", v: "342", c: "text-blue-600", s: "+18%" },
          { l: "Programări", v: "521", c: "text-violet-600", s: "+12%" },
          { l: "No-show", v: "3.2%", c: "text-amber-600", s: "-1.4%" },
        ].map((k) => (
          <div key={k.l} className="rounded-xl bg-zinc-50 border border-zinc-200 p-2.5">
            <p className="text-[8px] text-zinc-500 uppercase">{k.l}</p>
            <p className="text-base font-bold">{k.v}</p>
            <p className={`text-[9px] ${k.c}`}>{k.s}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3">
          <p className="text-[10px] font-semibold mb-2">Încasări per medic</p>
          <div className="space-y-1.5">
            {docs.map((d, i) => (
              <div key={d.name}>
                <div className="flex justify-between text-[9px] mb-0.5">
                  <span className="font-medium">{d.name}</span>
                  <span className="font-bold">{(d.val / 1000).toFixed(1)}K</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-200 overflow-hidden">
                  <div
                    className={`h-full ${i === 0 ? "bg-blue-600" : "bg-blue-300"}`}
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3">
          <p className="text-[10px] font-semibold mb-2">Distribuție tratamente</p>
          <div className="flex h-3 rounded-full overflow-hidden mb-3">
            {treatments.map((t) => (
              <div key={t.name} className={t.color} style={{ width: `${t.val}%` }} />
            ))}
          </div>
          <div className="space-y-1">
            {treatments.map((t) => (
              <div key={t.name} className="flex items-center gap-2 text-[9px]">
                <span className={`w-2 h-2 rounded-sm ${t.color}`} />
                <span className="flex-1">{t.name}</span>
                <span className="font-bold">{t.val}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAP & EXPORT
// ============================================================

export const mockupsBySlug: Record<string, React.ComponentType[]> = {};
