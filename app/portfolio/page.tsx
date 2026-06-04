"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import Link from "next/link";
import {
  Zap,
  Smartphone,
  Server,
  LayoutDashboard,
  ShoppingCart,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Users,
  Megaphone,
} from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { HeroAnimated } from "@/components/HeroAnimated";

/* ─── Scroll-reveal hook ─────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const services = [
  {
    icon: LayoutDashboard,
    title: "Pagină de Prezentare",
    desc: "Primul tău angajat digital — lucrează 24/7 și convinge vizitatorii înainte să suni tu.",
    includes: ["Design personalizat", "Animații & micro-interacțiuni", "Formular contact", "SEO on-page", "Deployment inclus", "Cod sursă predat"],
    accent: "from-cyan-100 to-sky-50",
    iconColor: "text-cyan-600",
    border: "group-hover:border-cyan-200",
  },
  {
    icon: Calendar,
    title: "Programări Online + Dashboard",
    desc: "Clienții se programează singuri, 24/7. Tu deschizi dimineața un dashboard cu ziua deja organizată — fără telefoane, fără confuzie.",
    includes: ["Calendar interactiv", "Confirmare email/SMS automată", "Dashboard admin complet", "Gestionare personal & orare", "Statistici & rapoarte", "Notificări clienți"],
    accent: "from-violet-100 to-purple-50",
    iconColor: "text-violet-600",
    border: "group-hover:border-violet-200",
  },
  {
    icon: ShoppingCart,
    title: "Magazin Online",
    desc: "Vânzări non-stop, fără abonament lunar la platforme terțe. Controlul total e la tine.",
    includes: ["Catalog produse", "Coș & checkout", "Plăți online (card/Stripe)", "Gestionare stoc", "Comenzi & livrări", "Dashboard vânzări"],
    accent: "from-orange-100 to-amber-50",
    iconColor: "text-orange-500",
    border: "group-hover:border-orange-200",
  },
  {
    icon: Users,
    title: "Portal Clienți + CRM",
    desc: "Clienții tăi au cont propriu cu istoricul programărilor și documentele lor. Tu ai o bază de date organizată și fidelizare automată.",
    includes: ["Login clienți", "Istoric programări & facturi", "Documente personalizate", "Program de fidelitate", "Email marketing integrat", "Segmentare clienți"],
    accent: "from-emerald-100 to-teal-50",
    iconColor: "text-emerald-600",
    border: "group-hover:border-emerald-200",
  },
  {
    icon: Megaphone,
    title: "Landing Page de Campanie",
    desc: "O pagină cu un singur scop: să convertească. Perfectă pentru lansări de produs, evenimente, promoții sezoniere sau reclame plătite.",
    includes: ["Copywriting structurat", "CTA optimizat", "Formular lead capture", "Integrare Meta / Google Ads", "Analytics & conversii"],
    accent: "from-yellow-100 to-amber-50",
    iconColor: "text-yellow-600",
    border: "group-hover:border-yellow-200",
  },
];

const benefits = [
  { icon: Zap,             title: "Zero costuri lunare",      desc: "Plătești o singură dată pentru dezvoltare. Fără abonamente, fără comisioane ascunse." },
  { icon: Smartphone,      title: "Design adaptat pe mobil",  desc: "Peste 70% din clienți folosesc telefonul. Site-ul tău arată impecabil pe orice ecran." },
  { icon: Server,          title: "Găzduire rapidă",          desc: "Infrastructură modernă cu încărcare sub 1 secundă. SEO și conversii la maximum." },
  { icon: LayoutDashboard, title: "Panou de administrare",    desc: "Dashboard intuitiv inclus, ca să îți gestionezi singur conținutul, clienții și statisticile." },
];

/* ─── Static image preview for project cards ────────────────────────────── */
function ProjectPreview({ image, name }: { image: string; name: string }) {
  return (
    <div className="mx-6 relative rounded-xl overflow-hidden bg-stone-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Section label ──────────────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 uppercase tracking-[0.18em] mb-4">
      <span className="w-5 h-px bg-cyan-500" />
      {children}
    </p>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function PortfolioPage() {
  const whatsappLink = "https://wa.me/40733646257?text=Salut%20C%C4%83t%C4%83lin%2C%20a%C8%99%20vrea%20s%C4%83%20discut%C4%83m%20despre%20un%20proiect.";

  // Navbar entrance: starts invisible, animates in on first paint
  const [navReady, setNavReady] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setNavReady(true)); }, []);

  const navStyle: CSSProperties = {
    opacity: navReady ? undefined : 0,
    animation: navReady ? "nav-in 0.6s ease-out both" : "none",
    willChange: "opacity, transform",
  };

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-stone-900">

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/80" style={navStyle}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex flex-col items-start hover:opacity-70 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/lumora_nobg.png" alt="Lumora" className="h-7 w-auto" />
            <span className="text-[10px] text-stone-400 font-medium tracking-tight leading-none mt-0.5">by Dogaru Cătălin</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-500">
            <a href="#servicii" className="hover:text-stone-900 transition-colors">Servicii</a>
            <a href="#proiecte" className="hover:text-stone-900 transition-colors">Exemple</a>
            <a href="#despre"   className="hover:text-stone-900 transition-colors">Despre mine</a>
            <a href="#avantaje" className="hover:text-stone-900 transition-colors">De ce eu?</a>
            <a href="#contact"  className="hover:text-stone-900 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-700 transition-colors"
          >
            Discută cu mine
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroAnimated />

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section id="servicii" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>Servicii</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Ce pot construi<br />pentru tine
            </h2>
            <p className="mt-5 text-stone-500 leading-relaxed">
              De la o pagină simplă de prezentare până la aplicații complexe — fiecare proiect e construit de la zero, adaptat pe nevoile tale.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className={`group relative p-7 rounded-2xl border border-stone-200 bg-white shadow-card hover:shadow-card-hover ${s.border} transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-stone-50 border border-stone-200 mb-5">
                    <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-stone-900">{s.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm mb-5">{s.desc}</p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {s.includes.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-500 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section id="proiecte" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>Exemple</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Cum ar putea arăta<br />site-ul tău
            </h2>
            <p className="mt-5 text-stone-500 leading-relaxed">
              Fiecare proiect de mai jos este un demo funcțional — ca să îți faci o idee concretă despre ce primești.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Link
                href={`/portfolio/${p.slug}`}
                className="block group rounded-2xl border border-stone-200 bg-white overflow-hidden hover:border-stone-300 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className={`inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border ${p.accent} mb-3`}>
                      {p.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-cyan-600 transition-colors">
                      {p.name}
                    </h3>
                  </div>
                  <div className="w-9 h-9 flex-shrink-0 rounded-full border border-stone-200 bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <ProjectPreview image={p.image} name={p.name} />

                <div className="px-6 pt-4 pb-6">
                  <p className="text-sm text-stone-500 leading-relaxed">{p.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-stone-400 group-hover:text-cyan-600 transition-colors">
                    Vezi proiectul <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section id="despre" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-3 rounded-3xl border border-stone-200 bg-stone-100/50" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-card">
                <img
                  src="/me.png"
                  alt="Dogaru Cătălin"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs text-stone-300 uppercase tracking-widest">Web Developer</p>
                  <p className="text-lg font-bold text-white mt-0.5">Dogaru Cătălin</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-card">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-stone-600 font-medium">Disponibil</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Label>Despre mine</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-6">
              Construiesc produse digitale care{" "}
              <span className="italic text-cyan-600">aduc rezultate</span>
            </h2>
            <div className="space-y-4 text-stone-500 leading-relaxed">
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

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { val: "20+",   label: "Proiecte livrate" },
                { val: "2 țări", label: "RO & MD" },
                { val: "100%",  label: "Clienți mulțumiți" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl border border-stone-200 bg-white text-center shadow-card">
                  <p className="text-2xl font-bold text-stone-900">{s.val}</p>
                  <p className="text-xs text-stone-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase", "Node.js"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-cyan-600 transition-colors"
              >
                Hai să lucrăm împreună
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-stone-200" />
      </div>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section id="avantaje" className="max-w-6xl mx-auto px-6 py-28">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <Label>De ce eu?</Label>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Patru motive pentru<br />care alegi cod custom
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <div className="p-6 rounded-2xl border border-stone-200 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 mb-5">
                  <b.icon className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2 text-sm">{b.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div className="p-8 md:p-10 rounded-2xl border border-stone-200 bg-white shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3">
                  Plătești o dată.<br />Stăpânești pe viață.
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
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
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </span>
                    <span className="text-stone-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Contact — dark contrast anchor ───────────────────────────────── */}
      <section id="contact" className="bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <Label>
                <span className="text-cyan-400">Contact</span>
              </Label>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mt-1">
                Hai să transformăm afacerea ta<br />
                <span className="italic text-stone-400">într-un produs digital</span>
              </h2>
              <p className="mt-6 text-stone-400 leading-relaxed max-w-xl mx-auto">
                Răspund de obicei în câteva ore. Prima discuție și estimarea sunt gratuite.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Scrie pe WhatsApp
                </a>
                <a
                  href="mailto:catalindogaru22@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-stone-700 text-stone-300 hover:border-stone-500 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Trimite un email
                </a>
              </div>

              <div className="mt-16 grid sm:grid-cols-3 gap-6 pt-10 border-t border-stone-800 text-left">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Moldova</p>
                    <a href="tel:+37360171888" className="text-sm text-stone-300 hover:text-white transition-colors">
                      +373 60 171 888
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">România</p>
                    <a href="tel:+40733646257" className="text-sm text-stone-300 hover:text-white transition-colors">
                      +40 733 646 257
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Email</p>
                    <a
                      href="mailto:catalindogaru22@gmail.com"
                      className="text-sm text-stone-300 hover:text-white transition-colors break-all"
                    >
                      catalindogaru22@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-stone-300" />
            <span>Dogaru Cătălin · Web Developer</span>
          </div>
          <p>© {new Date().getFullYear()} · Construit cu pasiune și cod curat.</p>
        </div>
      </footer>

    </div>
  );
}
