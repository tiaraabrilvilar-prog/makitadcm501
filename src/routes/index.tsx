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
import ctaBg from "@/assets/cta-bg-new.png";
import heroStudioAsset from "@/assets/hero-makita-studio.png.asset.json";
import anatomyFront from "@/assets/DCM501_C1C0-rembg.png.asset.json";


const heroImg = heroStudioAsset.url;
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
          <span className="font-makita text-3xl leading-none text-espresso tracking-wide">Makita</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">/ DCM501</span>
        </a>
        <div className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em]">
          <a href="#story" className="text-espresso/70 hover:text-terracotta transition-colors">Contexto</a>
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
          <a href="#story" onClick={() => setOpen(false)} className="block text-espresso/80">Contexto</a>
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
      className="relative pt-24 lg:pt-28 overflow-hidden text-cream bg-[#0a0c12]"
    >
      <div className="relative mx-auto max-w-[1400px] w-full">
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* TEXT — solid dark, full contrast */}
          <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-12 lg:py-28 text-center lg:text-left bg-[#0a0c12]">
            <div className="inline-flex items-center gap-3 mb-5 px-3 py-1.5 border border-cream/30 text-cream/85 font-mono text-[11px] uppercase tracking-[0.25em]">
              Nueva en obra
            </div>

            <h1 className="font-serif-display text-cream leading-[0.9] tracking-tight text-[2.75rem] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem]">
              CAFÉ <span className="text-primary">SIN</span><br />
              ENCHUFE<br />
              <span className="text-cream/70">CAFÉ DE OBRA</span>
            </h1>

            <div className="mt-6 lg:mt-8 flex flex-col lg:items-start items-center gap-5 lg:gap-6 max-w-xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-cream/80 leading-relaxed font-light">
                La <strong className="text-primary font-semibold">DCM501</strong> corre con la
                misma batería que tu taladro. Sin cables, sin filtros de papel,
                sin café frío.
              </p>
              <a
                href="#story"
                className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 lg:px-7 lg:py-4 text-xs sm:text-sm font-semibold text-espresso hover:bg-cream transition-colors whitespace-nowrap uppercase tracking-wider shadow-xl"
              >
                potencia tus mañanas
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* IMAGE — own column, no overlap */}
          <div className="relative h-[55vh] sm:h-[60vh] lg:h-auto lg:min-h-[80vh]">
            <img
              src={heroImg}
              alt="Makita DCM501"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            {/* Soft fade into the text column on desktop */}
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-32 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #0a0c12 0%, rgba(10,12,18,0) 100%)",
              }}
            />
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
    <section id="story" ref={ref} className="py-16 sm:py-20 lg:min-h-[50vw] flex items-center bg-[#131520]">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
              <img
                src={constructionImage}
                alt="DCM501 en obra"
                className="w-full object-contain rounded-sm border border-espresso/10 grayscale-[20%]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-espresso-soft leading-[1.7]">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta">
              Contexto
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl leading-[1.02] text-espresso">
              UNA HERRAMIENTA<br />QUE TAMBIÉN <span className="text-terracotta">DESPIERTA</span>
            </h2>
            <p className="text-lg sm:text-xl text-espresso-soft leading-relaxed max-w-xl">
              El café del termo se enfría a las dos horas. El instantáneo nunca fue una opción. Y los enchufes en la obra son una utopía.
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
    <section id="features" className="py-14 sm:py-16 bg-[#131520] lg:min-h-[35vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
              Detalles
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl leading-[1.02] text-espresso max-w-2xl">
              SEIS RAZONES,<br /><span className="text-terracotta">UNA SOLA TAZA</span>
            </h2>
          </div>
        </div>

        <ol className="divide-y divide-espresso/20 border-y border-espresso/20">
          {items.map((it) => (
            <li key={it.n} className="group grid grid-cols-12 gap-4 py-5 sm:py-6 items-baseline hover:bg-cream transition-colors px-2">
              <span className="col-span-2 sm:col-span-1 font-mono text-sm text-terracotta">{it.n}</span>
              <h3 className="col-span-10 sm:col-span-4 font-serif-display text-xl sm:text-2xl text-espresso leading-tight tracking-wide">
                {it.title}
              </h3>
              <p className="col-span-12 sm:col-span-6 sm:col-start-7 text-espresso-soft text-sm sm:text-base leading-relaxed">
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
    {
      id: "manija",
      x: 38,
      y: 5,
      name: "Manija",
      sub: "de transporte",
      desc: "Agarre ergonómico y antideslizante que permite llevar la cafetera de un lugar a otro de la obra sin esfuerzo.",
    },
    {
      id: "tanque",
      x: 50,
      y: 28,
      name: "Tanque",
      sub: "removible · 240 ml",
      desc: "Recipiente removible de 240 ml que se desmonta fácilmente para llenar y limpiar bajo la canilla.",
    },
    {
      id: "filtro",
      x: 91.5,
      y: 40.3,
      name: "Filtro",
      sub: "malla permanente",
      desc: "Malla metálica fina y permanente que filtra el café sin necesidad de papeles desechables.",
    },
    {
      id: "taza",
      x: 86.1,
      y: 68.3,
      name: "Taza",
      sub: "acero inoxidable",
      desc: "Vaso térmico de acero inoxidable de 90 mm con tapa, incluido y calzado al portafiltros.",
    },
    {
      id: "bateria",
      x: 28,
      y: 72,
      name: "Puerto",
      sub: "batería 18V LXT",
      desc: "Base compatible con baterías Makita CXT 12V y LXT 18V para máxima versatilidad en obra.",
    },
  ];
  const [hotspots] = useState(initialHotspots);
  const [active, setActive] = useState<string>("manija");
  const [showDesc, setShowDesc] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = hotspots.find((h) => h.id === active) ?? hotspots[0];

  useEffect(() => {
    setShowDesc(false);
    const t = setTimeout(() => setShowDesc(true), 50);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section id="parts" className="py-16 sm:py-24 lg:py-32 bg-[#161b27] text-espresso lg:min-h-[56.25vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="mb-12">
          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-espresso max-w-3xl tracking-wide">
            PARTES DE<br />LA CAFETERA
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Imagen */}
          <div className="lg:col-span-7 relative mx-auto w-full max-w-[420px] order-1">
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
                      className={`block rounded-full transition-all shadow-lg ${
                        isActive
                          ? "h-5 w-5 bg-primary ring-4 ring-white/40 shadow-primary/50"
                          : "h-4 w-4 bg-white/90 ring-2 ring-primary/50 group-hover:bg-primary group-hover:ring-white/60"
                      }`}
                    />
                    {isActive && (
                      <span className="absolute left-1/2 top-1/2 -z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 animate-ping" />
                    )}
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-espresso/65 text-sm sm:text-base">
              Tocá los puntos verdes para conocer cada parte.
            </p>
          </div>

          {/* Botones — móvil: entre imagen y descripción */}
          <div className="lg:col-span-5 lg:hidden order-2 flex gap-1">
            {hotspots.map((h) => (
              <button
                key={h.id}
                onClick={() => setActive(h.id)}
                className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] px-1.5 sm:px-2 py-1.5 border transition-colors whitespace-nowrap ${
                  h.id === active
                    ? "border-primary bg-primary text-espresso"
                    : "border-espresso/20 text-espresso/60 hover:border-primary/60 hover:text-primary"
                }`}
              >
                {h.name}
              </button>
            ))}
          </div>

          {/* Info */}
          <div className="lg:col-span-5 order-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">
              {String(hotspots.findIndex((h) => h.id === active) + 1).padStart(2, "0")} / {String(hotspots.length).padStart(2, "0")}
            </p>
            <h3 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-espresso tracking-wide leading-none">
              {current.name}
            </h3>
            
            <div
              className={`mt-6 transition-all duration-500 ${
                showDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <p className="text-sm sm:text-base text-espresso-soft leading-relaxed border-l-2 border-primary pl-4">
                {current.desc}
              </p>
            </div>

            {/* Botones — desktop */}
            <div className="mt-8 hidden lg:flex gap-1.5">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActive(h.id)}
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1.5 border transition-colors whitespace-nowrap ${
                    h.id === active
                      ? "border-primary bg-primary text-espresso"
                      : "border-espresso/20 text-espresso/60 hover:border-primary/60 hover:text-primary"
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
    <section id="specs" className="py-16 sm:py-24 lg:py-32 bg-[#11131f] text-espresso lg:min-h-[56.25vw] flex items-center bg-grid-subtle">
      <div className="mx-auto max-w-[1100px] w-full px-5 sm:px-8">

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
      tag: "Clásico",
      img: tealVersion,
      body: "El color institucional de Makita. La versión más fácil de conseguir, la que vas a ver en cualquier ferretería seria.",
    },
    {
      name: "VERDE OLIVA",
      code: "DCM501ZO",
      tag: "Edición Lifestyle",
      img: oliveVersion,
      body: 'Edición especial del catálogo "Lifestyle" de Makita. Estética táctica, pensada para camping y expediciones.',
    },
  ];

  return (
    <section id="versions" className="py-12 sm:py-16 lg:py-20 flex items-center bg-cream">
      <div className="mx-auto max-w-[1200px] w-full px-5 sm:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-espresso leading-[1.02] tracking-wide">
            DOS <span className="text-terracotta">VERSIONES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {versions.map((v, i) => (
            <article key={v.code} className="group">
              <div className="aspect-[4/3] bg-cream-deep rounded-sm overflow-hidden flex items-center justify-center relative">
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  className="w-1/2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-serif-display text-2xl sm:text-3xl text-espresso tracking-wide">{v.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-terracotta">{v.tag}</span>
              </div>
              <p className="mt-2 text-sm text-espresso-soft leading-relaxed">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 lg:py-36 text-cream relative overflow-hidden lg:min-h-[56.25vw] flex items-center">
      {/* Background image — duotone green treatment */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.55)" }}
      />
      <div className="absolute inset-0 bg-[#0f4d45] mix-blend-multiply opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[#2dd4bf] mix-blend-screen opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60 pointer-events-none" />

      <div className="relative mx-auto max-w-[1100px] w-full px-5 sm:px-8 text-center">
        <h2
          className="font-serif-display text-3xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 4px 40px rgba(0,0,0,0.4)" }}
        >
          Diseñada para que tu energía y tu café nunca se enfríen
        </h2>
        <p className="mt-8 text-lg text-white/95 max-w-xl mx-auto" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}>
          Llevá la potencia de Makita a tu taza. La DCM501 te espera.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="group inline-flex items-center gap-3 bg-cream px-9 py-4 text-sm font-semibold text-espresso hover:bg-espresso hover:text-cream transition-colors uppercase tracking-wider">
            Quiero mi Makita
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#specs" className="inline-flex items-center gap-2 text-sm text-white/90 underline underline-offset-4 hover:text-white">
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
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#131520] lg:min-h-[56.25vw] flex items-center">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
              Contacto
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-7xl leading-[1] text-espresso tracking-wide">
              ESCRIBINOS<br /><span className="text-terracotta">TOMAMOS UN CAFÉ</span>
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
    <footer className="bg-cream-deep text-espresso/80">
      <div className="mx-auto max-w-[1400px] w-full px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          <div>
            <span className="font-serif-display text-3xl text-espresso tracking-wide">MAKITA</span>
            <p className="mt-3 text-sm text-espresso/60 max-w-xs">
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
        <div className="mt-12 pt-6 border-t border-espresso/15 flex flex-wrap justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-espresso/50">
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
              <p className="mt-3 font-serif-display text-xl sm:text-2xl text-espresso leading-snug tracking-wide">
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
      <Marquee />
      <Empathy />
      <Story />
      <Features />
      <Parts />
      <Specs />
      <Versions />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
