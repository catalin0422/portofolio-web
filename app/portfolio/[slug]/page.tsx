"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Check,
  Calendar,
  Clock,
  User,
  Code2,
} from "lucide-react";
import { getProject, projects } from "@/lib/portfolio-data";

/* ─── Scroll-reveal ──────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
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

/* ─── Browser mockup with static image or React mockup ──────────────────── */
function BrowserMockup({
  urlLabel,
  Mockup,
  image,
  large = false,
}: {
  urlLabel: string;
  Mockup?: React.ComponentType;
  image?: string;
  large?: boolean;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-card">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-stone-50 border-b border-stone-200">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <div className="ml-3 flex-1 px-3 py-1 rounded-md text-[10px] text-stone-400 bg-stone-200/60 truncate font-mono">
          {urlLabel}
        </div>
      </div>

      {/* Content */}
      <div className={`relative overflow-hidden ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        {Mockup ? (
          <Mockup />
        ) : image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={image} alt={urlLabel} className="absolute inset-0 w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full bg-stone-100" />
        )}
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const heroImage = project.image;

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-stone-900">

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/portfolio" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:-translate-x-0.5 transition-all" />
            <span className="text-sm text-stone-500 group-hover:text-stone-900 transition-colors">
              Înapoi la portofoliu
            </span>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Code2 className="w-4 h-4 text-cyan-600" />
            <span className="font-semibold tracking-tight text-stone-900">Dogaru Cătălin</span>
          </div>
        </div>
      </nav>

      {/* ── Hero text ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          <span className={`inline-block text-xs px-3 py-1 rounded-full border ${project.accent} mb-6`}>
            {project.category}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6">
            {project.name}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-lg md:text-xl text-stone-500 max-w-3xl leading-relaxed">
            {project.longDesc}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap gap-3">
            {(project.liveUrl || project.previewUrl) && (
              <a
                href={project.liveUrl || project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {project.liveLabel || "Vezi live"}
              </a>
            )}
            <Link
              href="/portfolio#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-stone-50 transition-colors"
            >
              Vreau ceva similar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Hero screenshot ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <Reveal delay={200}>
          <div
            className="transition-transform hover:scale-[1.005] duration-500"
          >
            <BrowserMockup
              urlLabel={(project.liveUrl || project.previewUrl)?.replace("https://", "") ?? `${project.slug}.app`}
              image={heroImage}
              large
            />
          </div>
        </Reveal>
      </section>

      {/* ── Meta info ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: User,     label: "Client",      value: project.client },
            { icon: Calendar, label: "An",           value: project.year },
            { icon: Clock,    label: "Durată",       value: project.duration },
            { icon: Code2,    label: "Tehnologii",   value: `${project.tech.length} tools` },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <div className="p-5 rounded-2xl border border-stone-200 bg-white shadow-card">
                <item.icon className="w-4 h-4 text-cyan-600 mb-3" />
                <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-stone-900">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Features + Tech ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid lg:grid-cols-3 gap-12">
        <Reveal className="lg:col-span-2">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 uppercase tracking-[0.18em] mb-4">
            <span className="w-5 h-px bg-cyan-500" />Funcționalități
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-8">Ce am construit</h2>
          <ul className="space-y-4">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-600" />
                </span>
                <span className="text-stone-600 leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="p-6 rounded-2xl border border-stone-200 bg-white shadow-card sticky top-24">
            <p className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 uppercase tracking-[0.18em] mb-5">
              <span className="w-5 h-px bg-cyan-500" />Stack tehnic
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>


      {/* ── Other projects ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900">Alte proiecte</h2>
            <Link href="/portfolio" className="text-sm text-stone-400 hover:text-stone-900 transition-colors inline-flex items-center gap-1">
              Vezi toate <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {otherProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Link
                href={`/portfolio/${p.slug}`}
                className="block group rounded-2xl border border-stone-200 bg-white overflow-hidden hover:border-stone-300 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-stone-400 mb-1">{p.category}</p>
                  <h3 className="font-semibold text-stone-900 group-hover:text-cyan-600 transition-colors">{p.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA — dark contrast anchor ────────────────────────────────────── */}
      <section className="bg-stone-900">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Îți place ce vezi?
              </h2>
              <p className="text-stone-400 max-w-xl mx-auto mb-8 leading-relaxed">
                Pot construi ceva similar pentru afacerea ta, adaptat fix pe nevoile și fluxul tău de lucru.
              </p>
              <Link
                href="/portfolio#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-colors"
              >
                Hai să discutăm
                <ArrowRight className="w-4 h-4" />
              </Link>
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

