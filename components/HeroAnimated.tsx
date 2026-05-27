"use client";

import { CSSProperties, useEffect, useState } from "react";

/* ─── Static image card contents ─────────────────────────────────────────── */
function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
    />
  );
}

const MaisonImg    = () => <Img src="/Barbershop.png"             alt="Maison Barber"     />;
const BeautyImg    = () => <Img src="/Lumina Beauty Clinic.png"   alt="Beauty Clinic"     />;
const EmbersImg    = () => <Img src="/Restaurant Embers.png"      alt="Embers"            />;
const TreiImg      = () => <Img src="/trei-pastori.png"           alt="Trei Pastori"      />;
const HotelImg     = () => <Img src="/Hotel.png"                  alt="Pensiune & Hotel"  />;
const LaFornoImg   = () => <Img src="/Pizzeria La Forno.png"      alt="La Forno"          />;
const DentImg      = () => <Img src="/BrightDent Clinic.png"      alt="BrightDent Clinic" />;

/* ─── Card definitions [Component, url-label, dot-color, label] ──────────── */
const CARD_DEFS: [React.ComponentType, string, string, string][] = [
  [MaisonImg,  "barbershop-6m5s.vercel.app",     "#f59e0b", "Maison Barber"    ],
  [BeautyImg,  "beauty-clinic-tan.vercel.app",   "#f472b6", "Beauty Clinic"    ],
  [EmbersImg,  "sisters-ebon.vercel.app",        "#ef4444", "Restaurant Embers"],
  [TreiImg,    "treipastori.md",                 "#34d399", "Trei Pastori"     ],
  [HotelImg,   "pensiune.vercel.app",            "#10b981", "Hotel Melia Durrës"],
  [LaFornoImg, "la-forno.vercel.app",            "#f97316", "La Forno"         ],
  [DentImg,    "brightdent.vercel.app",          "#38bdf8", "BrightDent Clinic"],
];

/* ─── Fan geometry (6 cards) ─────────────────────────────────────────────── */
const CENTER = 3;   // card that rises first; 4th from left (true middle of 7)

const FAN_DESKTOP = [
  { x: -430, y:  90, r: -21 },
  { x: -280, y:  28, r: -13 },
  { x: -140, y:  18, r:  -6 },
  { x:    0, y: -15, r:   0 },   // CENTER
  { x:  140, y:  18, r:   6 },
  { x:  280, y:  28, r:  13 },
  { x:  430, y:  90, r:  21 },
];

// On mobile show only indices 2, 3, 4 (hide 0, 1, 5, 6)
const FAN_MOBILE: Record<number, { x: number; y: number; r: number }> = {
  2: { x: -130, y:  22, r: -12 },
  3: { x:    0, y: -12, r:   0 },
  4: { x:  130, y:  22, r:  12 },
};

/* ─── Card + viewport dimensions ────────────────────────────────────────── */
const CARD_W = 256;
const IMG_H  = Math.round(CARD_W * 10 / 16);   // 160px
const CARD_H = IMG_H + 32;                       // + chrome bar

/* ─── Browser chrome card ────────────────────────────────────────────────── */
function BrowserCard({ Mockup, url, dot }: { Mockup: React.ComponentType; url: string; dot: string }) {
  return (
    <div
      style={{
        width: CARD_W,
        height: CARD_H,
        borderRadius: 16,
        overflow: "hidden",
        flexShrink: 0,
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 64px -10px rgba(0,0,0,0.40), 0 4px 16px -2px rgba(0,0,0,0.22)",
        userSelect: "none",
        background: "#18181b",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          height: 32,
          background: "#27272a",
          display: "flex",
          alignItems: "center",
          gap: 5,
          paddingLeft: 10,
          paddingRight: 10,
          flexShrink: 0,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444", opacity: 0.85, flexShrink: 0 }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#eab308", opacity: 0.85, flexShrink: 0 }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", opacity: 0.85, flexShrink: 0 }} />
        <div
          style={{
            marginLeft: 6,
            flex: 1,
            height: 17,
            borderRadius: 4,
            background: "#3f3f46",
            display: "flex",
            alignItems: "center",
            paddingLeft: 7,
            gap: 5,
            overflow: "hidden",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: dot, flexShrink: 0 }} />
          <span style={{ fontSize: 8.5, color: "#a1a1aa", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "monospace" }}>
            {url}
          </span>
        </div>
      </div>

      {/* Image */}
      <div style={{ position: "relative", width: CARD_W, height: IMG_H, overflow: "hidden" }}>
        <Mockup />
      </div>
    </div>
  );
}

/* ─── Headline words ─────────────────────────────────────────────────────── */
const WORDS = ["Afacerea", "ta", "merită", "să", "fie", "văzută"];

/* ─── Timing ─────────────────────────────────────────────────────────────── */
const RISE_MS         = 600;
const PHASE2_START_MS = RISE_MS + 40;
const SUBTITLE_DELAY  = 800;

/* ─── Hero ───────────────────────────────────────────────────────────────── */
export function HeroAnimated() {
  const [phase,     setPhase]     = useState<0 | 1 | 2>(0);
  const [isMobile,  setIsMobile]  = useState(false);
  const [centerIdx, setCenterIdx] = useState(CENTER);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setPhase(1));
    const t   = setTimeout(() => setPhase(2), PHASE2_START_MS);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
  }, []);

  useEffect(() => {
    if (phase < 2) return;
    const t = setInterval(() => {
      setCenterIdx(prev => (prev + 1) % CARD_DEFS.length);
    }, 4000);
    return () => clearInterval(t);
  }, [phase]);

  function cardStyle(i: number): CSSProperties {
    // fanIdx = pozitia in evantai (0=stanga extrema, 3=centru, 6=dreapta extrema)
    const fanIdx = (i - centerIdx + CARD_DEFS.length + CENTER) % CARD_DEFS.length;
    const hiddenOnMobile = isMobile && (fanIdx === 0 || fanIdx === 1 || fanIdx === 5 || fanIdx === 6);

    if (phase === 0) {
      return {
        opacity: 0,
        transform: "translateX(0px) translateY(120px) rotate(0deg)",
        transition: "none",
        willChange: "transform, opacity",
      };
    }

    if (phase === 1) {
      if (hiddenOnMobile)
        return { opacity: 0, transform: "translateX(0px) translateY(0px) rotate(0deg)", transition: "none", willChange: "transform, opacity" };
      const isCenter = i === centerIdx;
      return {
        opacity: isCenter ? 1 : 0,
        transform: isCenter
          ? `translateX(0px) translateY(${FAN_DESKTOP[CENTER].y}px) rotate(0deg)`
          : "translateX(0px) translateY(0px) rotate(0deg)",
        transition: isCenter
          ? `opacity ${RISE_MS}ms ease-out, transform ${RISE_MS}ms ease-out`
          : "none",
        willChange: "transform, opacity",
      };
    }

    /* phase 2 — fan out + cycling */
    if (hiddenOnMobile)
      return { opacity: 0, transform: "translateX(0px) translateY(0px) rotate(0deg)", transition: "none", willChange: "transform, opacity" };

    const pos   = isMobile ? FAN_MOBILE[fanIdx] : FAN_DESKTOP[fanIdx];
    if (!pos) return { opacity: 0, transition: "none" };
    const delay = Math.abs(fanIdx - CENTER) * 60;

    return {
      opacity: 1,
      transform: `translateX(${pos.x}px) translateY(${pos.y}px) rotate(${pos.r}deg)`,
      transition: [
        `opacity   0.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        `transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      ].join(", "),
      willChange: "transform, opacity",
    };
  }

  const subtitleStyle: CSSProperties =
    phase < 2
      ? { opacity: 0, transform: "translateY(10px)", transition: "none", willChange: "opacity, transform" }
      : {
          opacity: 1,
          transform: "translateY(0)",
          transition: `opacity 0.5s ease-out ${SUBTITLE_DELAY}ms, transform 0.5s ease-out ${SUBTITLE_DELAY}ms`,
          willChange: "opacity, transform",
        };

  return (
    <section
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.04), transparent 70%)," +
            "radial-gradient(ellipse 50% 40% at 80% 100%, rgba(167,139,250,0.04), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Headline ─────────────────────────────────────────────────────── */}
      <h1
        style={{
          fontSize: "clamp(2.6rem, 6vw, 5rem)",
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          textAlign: "center",
          marginBottom: 64,
          color: "#000",
          position: "relative",
          zIndex: 10,
        }}
      >
        {WORDS.map((word, i) => (
          <span key={i} style={{ display: "inline" }}>
            {word === "văzută" && <br />}
            <span
              style={{
                display: "inline-block",
                opacity: phase === 0 ? 0 : undefined,
                animation: phase >= 1 ? `word-in 500ms ease-out both ${i * 80}ms` : "none",
                marginRight: word === "văzută" ? 0 : "0.26em",
                willChange: "opacity, transform",
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </h1>

      {/* ── Cards ────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: CARD_W,
          height: CARD_H,
          flexShrink: 0,
          zIndex: 5,
        }}
      >
        {CARD_DEFS.map(([Mockup, url, dot], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -(CARD_H / 2),
              marginLeft: -(CARD_W / 2),
              zIndex: 5 - Math.abs(((i - centerIdx + CARD_DEFS.length + CENTER) % CARD_DEFS.length) - CENTER),
              ...cardStyle(i),
            }}
          >
            <BrowserCard Mockup={Mockup} url={url} dot={dot} />
          </div>
        ))}
      </div>

      {/* ── Subtitle + CTA ───────────────────────────────────────────────── */}
      <div
        style={{
          marginTop: 72,
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          ...subtitleStyle,
        }}
      >
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "#6b7280",
            maxWidth: 480,
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          Construiesc site-uri care atrag, conving și convertesc vizitatori în clienți.
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 36px",
            borderRadius: 999,
            background: "#000",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.9375rem",
            letterSpacing: "-0.01em",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1f2937"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#000"; }}
        >
          Vreau un site
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
