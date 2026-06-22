import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Menu,
  X,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Droplet,
  Clock,
  Thermometer,
  Battery,
  Filter,
  Wifi,
  Weight,
  Ruler,
  Box,
  Gauge,
  Layers,
} from "lucide-react";
import tealVersion from "@/assets/teal-version.png";
import oliveVersion from "@/assets/olive-version.png";
import constructionImage from "@/assets/makita-construction-bg.png";
import heroAsset from "@/assets/hero-makita-transparent.png.asset.json";
import anatomyFront from "@/assets/DCM501_C1C0-rembg.png.asset.json";
import bl1041 from "@/assets/compat/BL1041B_C2L0.jpg.asset.json";
import bl1820 from "@/assets/compat/BL1820B_C2L0.jpg.asset.json";
import bl1830 from "@/assets/compat/BL1830B_C2L0.jpg.asset.json";
import bl1840 from "@/assets/compat/BL1840B_C2L0.jpg.asset.json";
import bl1850 from "@/assets/compat/BL1850B_C2L0.jpg.asset.json";
import bl1860 from "@/assets/compat/BL1860B_C2L0.jpg.asset.json";
import dc18sd from "@/assets/compat/DC18SD_C2L0.jpg.asset.json";
import dc18sf from "@/assets/compat/DC18SF_C2L0.jpg.asset.json";
import dc18rd from "@/assets/compat/DC18RD_C2L0.jpg.asset.json";
import dc10wd from "@/assets/compat/DC10WD_C2L0.png.asset.json";
import dc10sb from "@/assets/compat/DC10SB_C2L0.png.asset.json";
import dc18re from "@/assets/compat/DC18RE_C2L0.png.asset.json";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const heroImg = heroAsset.url;
const anatomyImg = anatomyFront.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makita DCM501 — Café de obra, sin enchufes" },
      { name: "description", content: "Edición editorial: la cafetera inalámbrica Makita DCM501, contada como una historia de oficio, energía y café recién hecho." },
      { property: "og:title", content: "Makita DCM501 — Café de obra" },
      { property: "og:description", content: "Sin cables. Sin papel. Solo café, donde sea." },
    ],
  }),
  component: Index,
});

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ---------- NAV ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-cream/80 backdrop-blur-md border-b border-espresso/10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif-display text-3xl leading-none text-espresso tracking-wide">MAKITA</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">/ DCM501</span>
        </a>
        <div className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em]">
          <a href="#story" className="text-espresso/70 hover:text-terracotta transition-colors">Historia</a>
          <a href="#features" className="text-espresso/70 hover:text-terracotta transition-colors">Detalles</a>
          <a href="#parts" className="text-espresso/70 hover:text-terracotta transition-colors">Partes</a>
          <a href="#specs" className="text-espresso/70 hover:text-terracotta transition-colors">Ficha</a>
          <a href="#contact" className="text-espresso/70 hover:text-terracotta transition-colors">Contacto</a>
        </div>
        <a href="#cta" className="hidden md:inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-xs font-medium text-cream hover:bg-terracotta transition-colors">
          Comprar <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <button className="md:hidden text-espresso" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-espresso/10 bg-cream/95 px-5 py-5 space-y-4 font-mono text-xs uppercase tracking-[0.2em]">
          <a href="#story" onClick={() => setOpen(false)} className="block text-espresso/80">Historia</a>
          <a href="#features" onClick={() => setOpen(false)} className="block text-espresso/80">Detalles</a>
          <a href="#parts" onClick={() => setOpen(false)} className="block text-espresso/80">Partes</a>
          <a href="#specs" onClick={() => setOpen(false)} className="block text-espresso/80">Ficha</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-espresso/80">Contacto</a>
        </div>
      )}
    </nav>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-0 overflow-hidden bg-espresso text-cream lg:min-h-[56.25vw] flex flex-col justify-center"
    >
      {/* Pro background: subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          color: "var(--cream)",
        }}
      />
      {/* Diagonal accent line */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-cream/10 pointer-events-none hidden lg:block" />

      {/* Editorial corner marks */}
      <div className="absolute top-24 left-5 sm:left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/45 hidden sm:block">
        N.º 001 — Edición DCM501
      </div>
      <div className="absolute top-24 right-5 sm:right-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/45 hidden sm:block">
        Makita · MMXXVI
      </div>
      <div className="absolute bottom-5 left-5 sm:left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 hidden sm:block">
        Café · Obra · 18V
      </div>
      <div className="absolute bottom-5 right-5 sm:right-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 hidden sm:block">
        Scroll ↓
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10">
          {/* Image */}
          <div className="relative w-full flex items-center justify-center order-1 lg:order-2">
            <div className="relative aspect-square max-w-md w-full sm:max-w-lg">
              <div className="absolute inset-8 rounded-full border border-cream/15" />
              <div className="absolute inset-20 rounded-full border border-cream/10" />
              <img
                src={heroImg}
                alt="Makita DCM501"
                className="relative z-10 w-full h-full object-contain animate-float"
              />
            </div>
          </div>

          {/* Headline */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 mb-6 px-3 py-1.5 border border-cream/30 text-cream/80 font-mono text-[11px] uppercase tracking-[0.25em]">
              <span className="block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Nueva en obra · 18V LXT
            </div>

            <h1 className="font-serif-display text-cream leading-[0.9] tracking-tight text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem]">
              CAFÉ <span className="text-primary">SIN</span><br />
              ENCHUFE.<br />
              <span className="text-mocha">CAFÉ DE OBRA.</span>
            </h1>

            <div className="mt-8 flex flex-col lg:items-start items-center gap-6 max-w-xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-cream/75 leading-relaxed font-light">
                La <strong className="text-primary font-semibold">DCM501</strong> corre con la
                misma batería que tu taladro. Sin cables, sin filtros de papel,
                sin café frío.
              </p>
              <a
                href="#versions"
                className="group inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold text-espresso hover:bg-cream transition-colors whitespace-nowrap uppercase tracking-wider"
              >
                Usá tus baterías acá
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["Sin cables", "240 ml", "18V LXT", "Filtro permanente", "Café molido", "90 °C", "5 minutos", "Hecha para obra"];
  const loop = [...items, ...items];
  return (
    <div className="border-y border-espresso bg-primary text-espresso overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center font-serif-display text-3xl sm:text-4xl px-8 tracking-wide">
            {t}
            <span className="ml-8 inline-block h-2 w-2 rounded-full bg-espresso" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- STORY ---------- */
function Story() {
  const { ref, visible } = useInView(0.1);
  return (
    <section id="story" ref={ref} className="py-16 sm:py-20 lg:min-h-[50vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
              Historia
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl leading-[1.02] text-espresso">
              UNA HERRAMIENTA<br />QUE TAMBIÉN <span className="text-terracotta">DESPIERTA</span>.
            </h2>
            <div className={`mt-6 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
              <img
                src={constructionImage}
                alt="DCM501 en obra"
                className="w-full rounded-sm border border-espresso/10 grayscale-[20%]"
                loading="lazy"
              />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">
                ↑ DCM501 en obra · Mendoza, 2025
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-base text-espresso-soft leading-[1.7]">
            <p className="font-serif-display text-2xl sm:text-3xl text-espresso leading-snug tracking-wide">
              "El café del termo se enfría a las dos horas. El instantáneo nunca fue una opción.
              Y los enchufes en la obra son una utopía."
            </p>
            <p>
              Por eso Makita hizo lo que nadie esperaba de una marca de herramientas: diseñó una
              cafetera. No una cualquiera —una que corre con la misma batería de iones de litio
              que ya tenés cargando en el banco, 12V CXT o 18V LXT.
            </p>
            <p>
              Calienta el agua a <strong className="text-espresso">~90 °C</strong> en cinco minutos,
              filtra <strong className="text-espresso">240 ml</strong> a través de una malla
              metálica permanente y los sirve directo en una taza de acero que viene incluida.
              Sin papel, sin cables, sin termos resignados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURES (numbered editorial list) ---------- */
function Features() {
  const items = [
    {
      n: "01",
      title: "BATERÍA COMPARTIDA",
      body: "Compatible con la línea CXT 12V y LXT 18V de Makita. La misma batería de tu taladro hace tu café.",
    },
    {
      n: "02",
      title: "FILTRO PERMANENTE",
      body: "Malla metálica fina. Se enjuaga bajo la canilla en segundos. Cero filtros de papel descartables.",
    },
    {
      n: "03",
      title: "TAZA DE ACERO INCLUIDA",
      body: "Vaso térmico de acero inoxidable de 90 mm con tapa. Calza ajustado al portafiltros.",
    },
    {
      n: "04",
      title: "TANQUE EXTRAÍBLE",
      body: "Carga 240 ml de agua. Se desmonta para limpiar como cualquier termo.",
    },
    {
      n: "05",
      title: "CAFÉ MOLIDO COMÚN",
      body: "No necesita cápsulas, ni pads. Sólo café molido del que ya tomás.",
    },
    {
      n: "06",
      title: "HECHA PARA OBRA",
      body: "Carcasa robusta, agarre antideslizante, pensada para subir andamios sin romperse.",
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-cream-deep/60 lg:min-h-[56.25vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
              Detalles
            </p>
            <h2 className="font-serif-display text-5xl sm:text-6xl leading-[1.02] text-espresso max-w-2xl">
              SEIS RAZONES,<br /><span className="text-terracotta">UNA SOLA TAZA.</span>
            </h2>
          </div>
          <p className="max-w-sm text-espresso-soft">
            Cada decisión de diseño existe para que el café aparezca donde el café no
            debería ser posible.
          </p>
        </div>

        <ol className="divide-y divide-espresso/20 border-y border-espresso/20">
          {items.map((it) => (
            <li key={it.n} className="group grid grid-cols-12 gap-4 py-7 sm:py-9 items-baseline hover:bg-cream transition-colors px-2">
              <span className="col-span-2 sm:col-span-1 font-mono text-sm text-terracotta">{it.n}</span>
              <h3 className="col-span-10 sm:col-span-4 font-serif-display text-2xl sm:text-4xl text-espresso leading-tight tracking-wide">
                {it.title}
              </h3>
              <p className="col-span-12 sm:col-span-6 sm:col-start-7 text-espresso-soft text-base sm:text-lg leading-relaxed">
                {it.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- PARTS (interactive anatomy) ---------- */
function Parts() {
  const initialHotspots = [
    { id: "manija", x: 38, y: 5, name: "Manija", sub: "de transporte" },
    { id: "tanque", x: 50, y: 28, name: "Tanque", sub: "removible · 240 ml" },
    { id: "filtro", x: 91.5, y: 40.3, name: "Filtro", sub: "malla permanente" },
    { id: "taza", x: 86.1, y: 68.3, name: "Taza", sub: "acero inoxidable" },
    { id: "bateria", x: 28, y: 72, name: "Puerto", sub: "batería 18V LXT" },
  ];
  const [hotspots, setHotspots] = useState(initialHotspots);
  const [active, setActive] = useState<string>("manija");
  const containerRef = useRef<HTMLDivElement>(null);
  const current = hotspots.find((h) => h.id === active) ?? hotspots[0];

  return (
    <section id="parts" className="py-24 sm:py-32 bg-espresso text-cream lg:min-h-[56.25vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <h2 className="font-serif-display text-5xl sm:text-7xl leading-[0.95] text-cream max-w-3xl tracking-wide">
            PARTES DE<br />LA CAFETERA
          </h2>
          <p className="max-w-sm text-cream/65 text-sm sm:text-base">
            Tocá los puntos amarillos para conocer cada parte.
          </p>
        </div>


        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative mx-auto w-full max-w-[520px]">
            <div ref={containerRef} className="relative aspect-[807/1000] w-full overflow-hidden select-none">
              <img
                src={anatomyImg}
                alt="Makita DCM501 — anatomía"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {hotspots.map((h) => {
                const isActive = h.id === active;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActive(h.id)}
                    aria-label={h.name}
                    style={{ left: `${h.x}%`, top: `${h.y}%`, cursor: "pointer" }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group touch-none"
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        isActive
                          ? "h-5 w-5 bg-primary ring-4 ring-primary/30"
                          : "h-4 w-4 bg-cream/90 group-hover:bg-primary"
                      }`}
                    />
                    {isActive && (
                      <span className="absolute left-1/2 top-1/2 -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">

            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
              {String(hotspots.findIndex((h) => h.id === active) + 1).padStart(2, "0")} / {String(hotspots.length).padStart(2, "0")}
            </p>
            <h3 className="font-serif-display text-5xl sm:text-6xl text-cream tracking-wide leading-none">
              {current.name}
            </h3>
            <p className="mt-3 font-sans text-lg text-cream/70">{current.sub}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActive(h.id)}
                  className={`font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-2 border transition-colors ${
                    h.id === active
                      ? "border-primary bg-primary text-espresso"
                      : "border-cream/20 text-cream/60 hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  {h.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SPECS (tabs editorial) ---------- */
function Specs() {
  const tabs = [
    {
      id: "rendimiento",
      label: "Rendimiento",
      icon: Gauge,
      items: [
        { icon: Droplet, label: "Capacidad del tanque", value: "240 ml" },
        { icon: Coffee, label: "Autonomía promedio", value: "Hasta 3 tazas" },
        { icon: Clock, label: "Tiempo de preparación", value: "5 minutos" },
        { icon: Thermometer, label: "Temperatura de extracción", value: "~90 °C" },
      ],
    },
    {
      id: "compatibilidad",
      label: "Compatibilidad",
      icon: Layers,
      items: [
        { icon: Battery, label: "Baterías compatibles", value: "12V CXT / 18V LXT" },
        { icon: Filter, label: "Sistema de filtro", value: "Filtro permanente" },
        { icon: Coffee, label: "Tipo de café", value: "Café molido" },
        { icon: Wifi, label: "Conexión", value: "Inalámbrica" },
      ],
    },
    {
      id: "dimensiones",
      label: "Dimensiones",
      icon: Ruler,
      items: [
        { icon: Weight, label: "Peso (sin batería)", value: "1,5 kg" },
        { icon: Ruler, label: "Altura máxima de taza", value: "90 mm" },
        { icon: Box, label: "Dimensiones (A×A×L)", value: "135 × 118 × 244 mm" },
      ],
    },
  ];
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="specs" className="py-24 sm:py-32 bg-cream-deep/60 text-espresso lg:min-h-[56.25vw] flex items-center">
      <div className="mx-auto max-w-[1100px] w-full px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-terracotta mb-4">
            Ficha técnica
          </p>
          <h2 className="font-serif-display text-5xl sm:text-6xl leading-[1.02] tracking-wide text-espresso">
            Especificaciones técnicas
          </h2>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 border border-espresso/15 rounded-sm p-1.5 bg-cream/60">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center justify-center gap-2 px-3 py-3 sm:py-4 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] rounded-sm transition-colors ${
                  isActive
                    ? "bg-terracotta text-cream"
                    : "text-espresso/70 hover:text-terracotta hover:bg-cream"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {current.items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.label}
                className="flex items-center gap-4 border border-espresso/15 bg-cream/70 rounded-sm px-5 py-5 sm:py-6"
              >
                <div className="grid place-items-center h-11 w-11 shrink-0 rounded-sm border border-terracotta/40 bg-terracotta/10 text-terracotta">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">
                    {it.label}
                  </span>
                  <span className="font-serif-display text-xl sm:text-2xl text-espresso tracking-wide">
                    {it.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- VERSIONS ---------- */
function Versions() {
  const versions = [
    {
      name: "AZUL TURQUESA",
      code: "DCM501Z",
      tag: "Clásico de catálogo",
      img: tealVersion,
      body: "El color institucional de Makita. La versión más fácil de conseguir, la que vas a ver en cualquier ferretería seria.",
    },
    {
      name: "VERDE OLIVA",
      code: "DCM501ZO",
      tag: "Edición Lifestyle",
      img: oliveVersion,
      body: 'Edición especial del catálogo "Lifestyle" de Makita. Estética táctica, pensada para camping y expediciones. La "O" final viene de Olive.',
    },
  ];

  return (
    <section id="versions" className="py-24 sm:py-32 lg:min-h-[56.25vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif-display text-5xl sm:text-6xl text-espresso leading-[1.02] tracking-wide">
            DOS <span className="text-terracotta">VERSIONES</span>.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-mocha hidden sm:block">
            Elegí tu acabado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {versions.map((v, i) => (
            <article key={v.code} className="group">
              <div className="aspect-[4/5] bg-cream-deep rounded-sm overflow-hidden flex items-center justify-center relative">
                <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">
                  N.º {String(i + 1).padStart(2, "0")} · {v.code}
                </span>
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  className="w-2/3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-serif-display text-3xl sm:text-4xl text-espresso tracking-wide">{v.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta">{v.tag}</span>
              </div>
              <p className="mt-3 text-espresso-soft leading-relaxed">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPATIBLES ---------- */
function Compatibles() {
  const items = [
    { img: bl1041.url, family: "Batería CXT 4,0 Ah", code: "BL1041B", meta: "12V max · Li-Ion · 4,0 Ah", body: "Batería compacta con indicador de carga para herramientas Makita 12V max CXT®. Carga aprox. 60 min con cargador rápido." },
    { img: bl1820.url, family: "Batería LXT 2,0 Ah", code: "BL1820B", meta: "18V · Li-Ion · 2,0 Ah", body: "Compacta y ligera con indicador de carga. Ideal para atornilladores. Carga aprox. 24 min con cargador rápido." },
    { img: bl1830.url, family: "Batería LXT 3,0 Ah", code: "BL1830B", meta: "18V · Li-Ion · 3,0 Ah", body: "Potente batería de uso general para herramientas Makita LXT® de 18V. Carga aprox. 24 min con cargador rápido." },
    { img: bl1840.url, family: "Batería LXT 4,0 Ah", code: "BL1840B", meta: "18V · Li-Ion · 4,0 Ah", body: "Para herramientas con consumo normal. Indicador de carga. Carga aprox. 36 min con cargador rápido." },
    { img: bl1850.url, family: "Batería LXT 5,0 Ah", code: "BL1850B", meta: "18V · Li-Ion · 5,0 Ah", body: "Ideal para herramientas de alto consumo. Indicador de carga. Carga aprox. 45 min con cargador rápido." },
    { img: bl1860.url, family: "Batería LXT 6,0 Ah", code: "BL1860B", meta: "18V · Li-Ion · 6,0 Ah", body: "Máxima autonomía para herramientas Makita LXT® de 18V. Carga aprox. 55 min con cargador rápido." },
    { img: dc18sd.url, family: "Cargador LXT", code: "DC18SD", meta: "14,4 – 18V · Li-Ion", body: "Cargador para baterías deslizantes LXT® de 14,4V y 18V. Carga entre 30 y 130 min según capacidad." },
    { img: dc18rd.url, family: "Cargador rápido LXT", code: "DC18RC", meta: "14,4 – 18V · Li-Ion", body: "Cargador rápido con ventilador para refrigerar la batería. Carga optimizada en 15-55 min según capacidad." },
    { img: dc18sf.url, family: "Cargador cuádruple LXT", code: "DC18SF", meta: "14,4 – 18V · Li-Ion", body: "Cargador cuádruple con liberación rápida para baterías LXT® de 14,4V y 18V. 30-130 min según capacidad." },
    { img: dc18rd.url, family: "Cargador doble rápido LXT", code: "DC18RD", meta: "14,4 – 18V · Li-Ion", body: "Cargador rápido doble con ventilador. Carga optimizada en 15-55 min por batería según capacidad." },
    { img: dc10wd.url, family: "Cargador CXT", code: "DC10WD", meta: "10,8 – 12V · Li-Ion", body: "Cargador para baterías CXT® de 10,8V a 12V max con mecanismo deslizante. Compacto y liviano para uso diario." },
    { img: dc10sb.url, family: "Cargador rápido CXT", code: "DC10SB", meta: "12V max · Li-Ion", body: "Cargador rápido CXT® con ventilador. Carga una batería de 2,0Ah en 30 min y una de 4,0Ah en 60 min." },
    { img: dc18re.url, family: "Cargador rápido LXT / CXT", code: "DC18RE", meta: "12V max / 18V · Li-Ion", body: "Carga simultánea de baterías 18V LXT® y 12V max CXT®. Ventilador integrado. Tiempo de carga de 15 a 60 min según capacidad." },
  ];

  return (
    <section id="compatibles" className="py-24 sm:py-32 bg-cream lg:min-h-[56.25vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
              Compatibles
            </p>
            <h2 className="font-serif-display text-5xl sm:text-6xl leading-[1.02] text-espresso tracking-wide max-w-2xl">
              UNA BATERÍA,<br /><span className="text-terracotta">MUCHAS HERRAMIENTAS</span>.
            </h2>
          </div>
          <p className="max-w-sm text-espresso-soft">
            Toda la línea CXT® 12V y LXT® 18V de Makita carga la DCM501. Estos son los modelos compatibles.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: false }} className="relative">
          <CarouselContent className="-ml-4">
            {items.map((it) => (
              <CarouselItem key={it.code} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <article className="h-full border border-espresso/15 bg-cream-deep/40 rounded-sm overflow-hidden flex flex-col group hover:border-terracotta transition-colors">
                  <div className="aspect-[4/3] bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={it.img}
                      alt={it.family}
                      loading="lazy"
                      className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta">
                      {it.code}
                    </span>
                    <h3 className="mt-2 font-serif-display text-3xl text-espresso tracking-wide leading-tight">
                      {it.family}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mocha">
                      {it.meta}
                    </p>
                    <p className="mt-4 text-sm text-espresso-soft leading-relaxed flex-1">
                      {it.body}
                    </p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex justify-center gap-3 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:right-0 md:justify-between md:mt-0 md:pointer-events-none">
            <CarouselPrevious className="relative md:absolute md:left-0 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 bg-espresso text-cream border-espresso hover:bg-terracotta hover:text-cream pointer-events-auto" />
            <CarouselNext className="relative md:absolute md:right-0 md:translate-x-1/2 md:top-1/2 md:-translate-y-1/2 bg-espresso text-cream border-espresso hover:bg-terracotta hover:text-cream pointer-events-auto" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="cta" className="py-28 sm:py-36 bg-terracotta text-cream relative overflow-hidden lg:min-h-[56.25vw] flex items-center">
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
        <div className="absolute top-10 left-10 font-serif-display text-[18rem] leading-none">C</div>
        <div className="absolute bottom-10 right-10 font-serif-display text-[18rem] leading-none">É</div>
      </div>
      <div className="relative mx-auto max-w-[1100px] w-full px-5 sm:px-8 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/70 mb-8">
          Una sola cosa más
        </p>
        <h2 className="font-serif-display text-6xl sm:text-8xl leading-[0.95] tracking-wide">
          NO VUELVAS<br />A TOMAR CAFÉ <span className="text-white">FRÍO</span>.
        </h2>
        <p className="mt-8 text-lg text-cream/85 max-w-xl mx-auto">
          Llevá la potencia de Makita a tu taza. La DCM501 te espera.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="group inline-flex items-center gap-3 bg-cream px-9 py-4 text-sm font-semibold text-espresso hover:bg-espresso hover:text-cream transition-colors uppercase tracking-wider">
            Quiero mi Makita
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#specs" className="inline-flex items-center gap-2 text-sm text-cream/80 underline underline-offset-4 hover:text-cream">
            Ver ficha técnica
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const items = [
    { icon: Phone, label: "Teléfono", value: "+54 9 11 5555-0199", note: "Lun a Vie · 9 a 18 h" },
    { icon: Mail, label: "Correo", value: "hola@makita-demo.local", note: "Respuesta 24-48 h" },
    { icon: MapPin, label: "Dirección", value: "Av. Industrial 1234", note: "Buenos Aires, AR" },
  ];
  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream-deep/60 lg:min-h-[56.25vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
              Contacto
            </p>
            <h2 className="font-serif-display text-5xl sm:text-7xl leading-[1] text-espresso tracking-wide">
              ESCRIBINOS.<br /><span className="text-terracotta">TOMAMOS UN CAFÉ.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-espresso-soft">
            Si querés probarla, distribuirla o sumarte al lanzamiento, estos son nuestros datos
            de contacto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-espresso/15 border border-espresso/15 rounded-sm overflow-hidden">
          {items.map((c) => (
            <div key={c.label} className="bg-cream p-8">
              <div className="flex items-center gap-3 mb-6">
                <c.icon className="h-4 w-4 text-terracotta" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">{c.label}</span>
              </div>
              <p className="font-serif-display text-2xl sm:text-3xl text-espresso leading-snug tracking-wide">{c.value}</p>
              <p className="mt-3 text-sm text-espresso-soft">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          <div>
            <span className="font-serif-display text-3xl text-cream tracking-wide">MAKITA</span>
            <p className="mt-3 text-sm text-cream/60 max-w-xs">
              DCM501 — Edición editorial. Pieza de comunicación independiente.
            </p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] space-y-2">
            <a href="#story" className="block hover:text-primary">Historia</a>
            <a href="#features" className="block hover:text-primary">Detalles</a>
            <a href="#parts" className="block hover:text-primary">Partes</a>
            <a href="#specs" className="block hover:text-primary">Ficha</a>
            <a href="#contact" className="block hover:text-primary">Contacto</a>
          </div>
          <div className="flex sm:justify-end items-center gap-5">
            <a href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-wrap justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-cream/50">
          <span>© 2026 Makita · Todos los derechos reservados</span>
          <span className="flex items-center gap-2"><Coffee className="h-3 w-3" /> Hecho con cafeína</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- EMPATHY ---------- */
function Empathy() {
  const pains = [
    "¿Cansado del café tibio de termo después de unas horas?",
    "¿Perdés tiempo buscando un enchufe en la obra o el camping?",
    "¿El café instantáneo ya no es una opción para vos?",
  ];
  return (
    <section className="py-16 sm:py-20 bg-cream text-espresso">
      <div className="mx-auto max-w-[1100px] w-full px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-3">
            Empatía
          </p>
          <h2 className="font-serif-display text-4xl sm:text-5xl leading-[1.05] text-espresso tracking-wide">
            Te entendemos
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-espresso-soft">
            Antes de mostrarte la solución, sabemos que estos dolores te suenan familiares.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <div
              key={i}
              className="border border-espresso/15 rounded-sm p-6 sm:p-8 bg-cream-deep/40 hover:border-terracotta/30 transition-colors"
            >
              <span className="font-mono text-xs text-terracotta tracking-wider">0{i + 1}</span>
              <p className="mt-3 font-serif-display text-lg sm:text-xl text-espresso leading-snug tracking-wide">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <Navbar />
      <Hero />
      <Empathy />
      <Marquee />
      <Story />
      <Features />
      <Parts />
      <Specs />
      <Versions />
      <Compatibles />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
