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
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getProject, projects } from "@/lib/portfolio-data";
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

function BrowserMockup({
  title,
  Mockup,
  large = false,
}: {
  title: string;
  Mockup?: React.ComponentType;
  large?: boolean;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-900 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 px-3 py-1 rounded text-[10px] text-zinc-500 bg-zinc-800/50 truncate">
          {title.toLowerCase().replace(/\s+/g, "-")}.app
        </div>
      </div>
      <div className={`relative ${large ? "aspect-[16/9]" : "aspect-[16/10]"} overflow-hidden`}>
        {Mockup ? <Mockup /> : <div className="w-full h-full bg-zinc-900" />}
      </div>
    </div>
  );
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? 0 : (i + 1) % project.screens.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? 0 : (i - 1 + project.screens.length) % project.screens.length
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, project]);

  if (!project) notFound();

  const mockups = mockupsBySlug[project.slug] || [];
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-zinc-950/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/portfolio" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:-translate-x-0.5 transition" />
            <span className="text-sm text-zinc-400 group-hover:text-white transition">
              Înapoi la portofoliu
            </span>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold tracking-tight">Dogaru Cătălin</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <Reveal>
          <span className={`inline-block text-xs px-3 py-1 rounded-full border ${project.accent} mb-6`}>
            {project.category}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {project.name}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            {project.longDesc}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={project.liveUrl.startsWith("/") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition"
              >
                <ExternalLink className="w-4 h-4" />
                {project.liveLabel || "Vezi live"}
              </a>
            )}
            <Link
              href="/portfolio#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
            >
              Vreau ceva similar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Hero screenshot */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal delay={200}>
          <div
            onClick={() => setLightbox(0)}
            className="cursor-zoom-in transition hover:scale-[1.01] duration-500"
          >
            <BrowserMockup
              title={project.screens[0].title}
              Mockup={mockups[0]}
              large
            />
          </div>
        </Reveal>
      </section>

      {/* Meta info */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: User, label: "Client", value: project.client },
            { icon: Calendar, label: "An", value: project.year },
            { icon: Clock, label: "Durată", value: project.duration },
            { icon: Code2, label: "Tehnologii", value: `${project.tech.length}+ tools` },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                <item.icon className="w-4 h-4 text-cyan-400 mb-3" />
                <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features + Tech */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-10">
        <Reveal>
          <div className="lg:col-span-2">
            <p className="text-sm text-cyan-400 font-medium mb-3 tracking-wide uppercase">
              Funcționalități
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Ce am construit
            </h2>
            <ul className="space-y-4">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-zinc-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] sticky top-24">
            <p className="text-sm text-cyan-400 font-medium mb-3 tracking-wide uppercase">
              Stack tehnic
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="mb-12">
            <p className="text-sm text-cyan-400 font-medium mb-3 tracking-wide uppercase">
              Galerie
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Ecrane din aplicație
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {project.screens.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <button
                onClick={() => setLightbox(i)}
                className="text-left w-full group"
              >
                <BrowserMockup title={s.title} Mockup={mockups[i]} />
                <div className="mt-4 px-1">
                  <h3 className="font-semibold mb-1 group-hover:text-cyan-300 transition">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{s.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other projects */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Alte proiecte
            </h2>
            <Link
              href="/portfolio"
              className="text-sm text-zinc-400 hover:text-white transition inline-flex items-center gap-1"
            >
              Vezi toate <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {otherProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="block group rounded-2xl border border-white/5 overflow-hidden hover:border-white/15 transition"
              >
                <div
                  className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold tracking-tight text-white/10 group-hover:text-white/20 transition duration-500">
                      {p.name}
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-white/[0.02]">
                  <p className="text-xs text-zinc-500 mb-1">{p.category}</p>
                  <h3 className="font-semibold group-hover:text-cyan-300 transition">
                    {p.name}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Îți place ce vezi?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8">
              Pot construi ceva similar pentru afacerea ta, adaptat fix pe nevoile și fluxul tău de lucru.
            </p>
            <Link
              href="/portfolio#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition"
            >
              Hai să discutăm
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Dogaru Cătălin · Web Developer</span>
          </div>
          <p>© {new Date().getFullYear()} · Construit cu pasiune și cod curat.</p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + project.screens.length) % project.screens.length
              );
            }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % project.screens.length);
            }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <BrowserMockup
              title={project.screens[lightbox].title}
              Mockup={mockups[lightbox]}
              large
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold mb-1">
                {project.screens[lightbox].title}
              </h3>
              <p className="text-zinc-400 text-sm">
                {project.screens[lightbox].desc}
              </p>
              <p className="text-zinc-600 text-xs mt-3">
                {lightbox + 1} / {project.screens.length} · folosește săgețile pentru a naviga
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
