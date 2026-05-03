"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  UtensilsCrossed,
  Scissors,
  Palmtree,
  Stethoscope,
  Zap,
  Smartphone,
  Server,
  LayoutDashboard,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { mockupsBySlug } from "@/components/portfolio/mockups";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const services = [
  {
    icon: UtensilsCrossed,
    title: "Restaurante & Pizzerii",
    desc: "Menu digital cu QR code și sistem de comenzi online fără comision pe tranzacție.",
    accent: "from-orange-500/20 to-red-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Scissors,
    title: "Barbershops & Saloane",
    desc: "Sisteme de programări automate și dashboard separat pentru fiecare angajat.",
    accent: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: Palmtree,
    title: "Complexe Turistice",
    desc: "Rezervări directe pe site-ul tău și galerii foto premium care vând experiența.",
    accent: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Stethoscope,
    title: "Clinici Medicale",
    desc: "Gestiune completă pacienți și programări intuitive pentru personal și clienți.",
    accent: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Zero costuri lunare",
    desc: "Plătești o singură dată pentru dezvoltare. Fără abonamente, fără comisioane ascunse.",
  },
  {
    icon: Smartphone,
    title: "Design adaptat pe mobil",
    desc: "Peste 70% din clienți folosesc telefonul. Site-ul tău arată impecabil pe orice ecran.",
  },
  {
    icon: Server,
    title: "Găzduire rapidă",
    desc: "Infrastructură modernă cu încărcare sub 1 secundă. SEO și conversii la maximum.",
  },
  {
    icon: LayoutDashboard,
    title: "Panou de administrare",
    desc: "Dashboard intuitiv inclus, ca să îți gestionezi singur conținutul, clienții și statisticile.",
  },
];

/* eslint-disable @next/next/no-img-element */
const HERO_PROJECTS = [
  { slug: "pizzeria-da-luigi",     name: "La Forno",          url: "laforno.md",         category: "Pizzerie artizanală" },
  { slug: "maison-barber",         name: "Maison Barber",     url: "maisonbarber.ro",    category: "Barbershop premium" },
  { slug: "tohami-winery",           name: "Tohami",            url: "tohami.md",          category: "Cramă & Vinărie" },
  { slug: "dentalcare-clinic",     name: "DentalCare Clinic", url: "dentalcare.ro",      category: "Clinică stomatologică" },
];

function BrowserWindow({
  url,
  MockupComponent,
  active,
  scale = 1,
  className = "",
}: {
  url: string;
  MockupComponent: React.ComponentType;
  active: boolean;
  scale?: number;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border shadow-2xl shadow-black/60 transition-all duration-700 ${
        active ? "border-white/20" : "border-white/5"
      } ${className}`}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-800/70 text-[9px] text-zinc-500">
          <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
          {url}
        </div>
      </div>
      {/* Mockup content */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <div
          className="absolute inset-0 origin-top-left"
          style={{ transform: `scale(${scale})`, width: `${100 / scale}%`, height: `${100 / scale}%` }}
        >
          <MockupComponent />
        </div>
        {!active && (
          <div className="absolute inset-0 bg-zinc-950/40" />
        )}
      </div>
    </div>
  );
}

function HeroSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_PROJECTS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const nextIdx = (idx + 1) % HERO_PROJECTS.length;
  const current = HERO_PROJECTS[idx];
  const next    = HERO_PROJECTS[nextIdx];
  const CurrentMockup = mockupsBySlug[current.slug]?.[0];
  const NextMockup    = mockupsBySlug[next.slug]?.[0];

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Subtle static background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/8 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 w-full grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

        {/* Left: text */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-zinc-200 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Disponibil pentru proiecte noi
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Site-uri{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ultra-rapide
              </span>{" "}
              și sisteme de management pentru afacerea ta
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 text-lg text-zinc-400 max-w-xl leading-relaxed">
              Fără abonamente lunare. Cod personalizat. Performanță maximă.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition"
              >
                Începe un proiect
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#proiecte"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur hover:border-white/40 hover:bg-white/10 transition"
              >
                Vezi proiectele
              </a>
            </div>
          </Reveal>

          {/* Project switcher pills */}
          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap gap-2">
              {HERO_PROJECTS.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => setIdx(i)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-300 ${
                    idx === i
                      ? "bg-white/10 border-white/20 text-white"
                      : "border-white/5 text-zinc-500 hover:border-white/15 hover:text-zinc-300"
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-colors"
                    style={{ background: idx === i ? "rgb(103 232 249)" : "rgba(255,255,255,0.2)" }}
                  />
                  {p.name}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: stacked browser windows with real mockups */}
        <Reveal delay={200} className="hidden lg:block">
          <div className="relative h-[420px]">
            {/* Back window — next project, offset */}
            {NextMockup && (
              <div className="absolute top-0 right-0 left-8 z-0 opacity-50 scale-[0.96] origin-top-right transition-all duration-700">
                <BrowserWindow
                  url={next.url}
                  MockupComponent={NextMockup}
                  active={false}
                />
              </div>
            )}

            {/* Front window — current project */}
            {CurrentMockup && (
              <div className="absolute bottom-0 left-0 right-8 z-10 transition-all duration-700">
                <BrowserWindow
                  url={current.url}
                  MockupComponent={CurrentMockup}
                  active={true}
                />
                {/* Tag below window */}
                <div className="absolute -bottom-3 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 shadow-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-[10px] text-zinc-300 font-medium">{current.name}</span>
                  <span className="text-[10px] text-zinc-500">· {current.category}</span>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const whatsappLink = "https://wa.me/40733646257?text=Salut%20C%C4%83t%C4%83lin%2C%20a%C8%99%20vrea%20s%C4%83%20discut%C4%83m%20despre%20un%20proiect.";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold tracking-tight">Dogaru Cătălin</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#servicii" className="hover:text-white transition">Servicii</a>
            <a href="#proiecte" className="hover:text-white transition">Proiecte</a>
            <a href="#despre" className="hover:text-white transition">Despre mine</a>
            <a href="#avantaje" className="hover:text-white transition">De ce eu?</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition"
          >
            Discută cu mine
          </a>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection />


      {/* Services */}
      <section id="servicii" className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="text-sm text-cyan-400 font-medium mb-3 tracking-wide uppercase">Servicii</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Soluții construite pentru nișa ta
            </h2>
            <p className="mt-4 text-zinc-400">
              Fiecare industrie are nevoile ei. Construiesc software adaptat exact pe fluxul tău de lucru.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/15 transition-all duration-300 overflow-hidden h-full">
                <div
                  className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${s.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 mb-6">
                    <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="proiecte" className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="text-sm text-cyan-400 font-medium mb-3 tracking-wide uppercase">Portofoliu</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Proiecte recente
            </h2>
            <p className="mt-4 text-zinc-400">
              Câteva exemple din afacerile pentru care am construit soluții complete.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="block group rounded-2xl border border-white/5 overflow-hidden hover:border-white/15 hover:bg-white/[0.02] transition-all duration-300"
              >
                {/* Header: title above the image */}
                <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className={`inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${p.accent} mb-3`}>
                      {p.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-cyan-300 transition">
                      {p.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition">
                    <ArrowUpRight className="w-4 h-4 group-hover:text-cyan-300 transition" />
                  </div>
                </div>

                {/* Photo */}
                <div className="mx-6 relative aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Description footer */}
                <div className="px-6 pt-4 pb-6">
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs text-zinc-500 group-hover:text-cyan-400 transition">
                    Vezi proiectul <ArrowRight className="w-3 h-3 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About me */}
      <section id="despre" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <Reveal>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Decorative border offset */}
              <div className="absolute -inset-4 rounded-3xl border border-cyan-500/10 bg-cyan-500/5" />
              <div className="absolute -inset-1 rounded-2xl border border-white/5" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="/me.png"
                  alt="Dogaru Cătălin"
                  className="w-full h-full object-cover object-top"
                />
                {/* subtle gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs text-zinc-400 uppercase tracking-widest">Web Developer</p>
                  <p className="text-lg font-bold mt-0.5">Dogaru Cătălin</p>
                </div>
              </div>
              {/* Floating status badge */}
              <div className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-zinc-300 font-medium">Disponibil</span>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={150}>
            <p className="text-sm text-cyan-400 font-medium mb-4 tracking-wide uppercase">Despre mine</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Construiesc produse digitale care{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                aduc rezultate
              </span>
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Sunt Cătălin, developer specializat în soluții web custom pentru afaceri locale din
                România și Moldova. Lucrez cu restaurante, saloane, complexe turistice și clinici
                medicale care vor să iasă din paradigma abonamentelor lunare.
              </p>
              <p>
                Fiecare proiect e construit de la zero, adaptat exact pe nevoile clientului —
                de la design până la deployment. Nu vând template-uri, vând soluții.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { val: "20+", label: "Proiecte livrate" },
                { val: "2 țări", label: "RO & MD" },
                { val: "100%", label: "Clienți mulțumiți" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
              >
                Hai să lucrăm împreună
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why me */}
      <section id="avantaje" className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <p className="text-sm text-cyan-400 font-medium mb-3 tracking-wide uppercase">De ce eu?</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Patru motive pentru care alegi cod custom
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-5">
                  <b.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 p-8 md:p-10 rounded-2xl border border-white/5 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Plătești o dată. Stăpânești pe viață.</h3>
                <p className="text-zinc-400">
                  Spre deosebire de platformele cu abonament, primești codul sursă și controlul total
                  asupra afacerii tale digitale.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Cod sursă predat la finalul proiectului",
                  "Documentație completă inclusă",
                  "Suport tehnic 30 de zile gratuit",
                  "Mentenanță opțională, fără obligații",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-10 md:p-16 text-center">
            <p className="text-sm text-cyan-400 font-medium mb-3 tracking-wide uppercase">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
              Hai să transformăm afacerea ta într-un produs digital
            </h2>
            <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
              Răspund de obicei în câteva ore. Prima discuție și estimarea sunt gratuite.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-zinc-900 font-medium hover:bg-emerald-400 transition"
              >
                <MessageCircle className="w-4 h-4" />
                Scrie pe WhatsApp
              </a>
              <a
                href="mailto:catalindogaru22@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
              >
                <Mail className="w-4 h-4" />
                Trimite un email
              </a>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6 pt-10 border-t border-white/5 text-left">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Moldova</p>
                  <a href="tel:+37360171888" className="text-sm hover:text-cyan-300 transition">
                    +373 60 171 888
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">România</p>
                  <a href="tel:+40733646257" className="text-sm hover:text-cyan-300 transition">
                    +40 733 646 257
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Email</p>
                  <a
                    href="mailto:catalindogaru22@gmail.com"
                    className="text-sm hover:text-cyan-300 transition break-all"
                  >
                    catalindogaru22@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Dogaru Cătălin · Web Developer</span>
          </div>
          <p>© {new Date().getFullYear()} · Construit cu pasiune și cod curat.</p>
        </div>
      </footer>
    </div>
  );
}
