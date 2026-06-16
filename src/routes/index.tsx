import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Battery,
  Weight,
  Droplets,
  Timer,
  Coffee,
  Zap,
  Filter,
  Shield,
  Check,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Thermometer,
  Plug,
  Box,
  CupSoda,
} from "lucide-react";
import heroImage from "@/assets/makita-coffee-maker.png";
import heroAngleAsset from "@/assets/DCM501_C2L0_1-2.jpg.asset.json";
import sideViewAsset from "@/assets/DCM501_C7C0.jpg.asset.json";
import tankAsset from "@/assets/DCM501_F_001.jpg.asset.json";
import oppositeAngleAsset from "@/assets/DCM501_C2R0.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makita DCM501 \u2014 Cafetera Inal\u00E1mbrica" },
      { name: "description", content: "La cafetera inal\u00E1mbrica definitiva de Makita. Sin cables, sin filtros de papel, impulsada por las mismas bater\u00EDas de tus herramientas." },
      { property: "og:title", content: "Makita DCM501 \u2014 Cafetera Inal\u00E1mbrica" },
      { property: "og:description", content: "La cafetera inal\u00E1mbrica definitiva de Makita." },
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
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-darker/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-makita-teal flex items-center justify-center">
            <span className="font-bold text-primary-foreground text-sm font-brand">M</span>
          </div>
          <span className="text-xl font-brand tracking-wider text-foreground uppercase">
            Makita
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Características
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Funciones
          </a>
          <a href="#includes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Accesorios
          </a>
          <a href="#specs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Especificaciones
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-md bg-makita-teal px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-makita-teal/90 transition-colors"
          >
            Comprar Ahora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface-darker/95 backdrop-blur-md border-t border-border/50 px-4 py-4 space-y-3">
          <a href="#about" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Características</a>
          <a href="#features" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Funciones</a>
          <a href="#includes" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Accesorios</a>
          <a href="#specs" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Especificaciones</a>
          <a href="#cta" className="block text-sm font-bold text-makita-teal" onClick={() => setMobileOpen(false)}>Comprar Ahora</a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-darker">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,_var(--makita-teal-glow),_transparent_50%)] opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
              Cafetera Inalámbrica Makita
            </p>
            <h1 className="text-5xl font-brand tracking-wider uppercase text-foreground sm:text-6xl lg:text-7xl leading-[1.05]">
              Sin Cables<br />Sin Límites
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              La DCM501 te permite disfrutar tu café caliente donde sea que el trabajo te lleve. Sin cables, sin filtros de papel, impulsada por las mismas baterías de tus herramientas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full bg-makita-teal px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-makita-teal/90 hover:scale-105"
              >
                Descubrí la libertad
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Glow layers */}
            <div className="absolute -inset-12 rounded-full bg-makita-teal/10 blur-[120px] animate-pulse-glow" />
            <div className="absolute -inset-8 rounded-full bg-makita-teal/5 blur-[80px]" />

            <div className="relative animate-float">
              <img
                src={heroAngleAsset.url}
                alt="Makita DCM501 cafetera inalámbrica"
                width={800}
                height={800}
                className="relative z-10 w-full max-w-lg lg:max-w-xl drop-shadow-[0_20px_60px_rgba(0,162,167,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="about" ref={ref} className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left - Text */}
          <div className={`flex flex-col gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
              Características
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Todo lo que necesitás
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Diseñada para profesionales que no pueden detenerse. La DCM501 combina la robustez de Makita con la practicidad de un café recién hecho en cualquier lugar de obra. Funciona con baterías de iones de litio de 12V máx. CXT y 18V LXT.
            </p>
          </div>

          {/* Right - Image */}
          <div className={`flex items-center justify-center transition-all duration-700 delay-200 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-makita-teal/10 blur-3xl" />
              <img
                src={sideViewAsset.url}
                alt="Makita DCM501 vista lateral"
                width={600}
                height={600}
                className="relative w-full max-w-md rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { ref, visible } = useInView(0.1);
  const features = [
    {
      icon: <Battery className="h-10 w-10" />,
      title: "Regulación de Energía",
      description: "Compatible con baterías 12V CXT y 18V LXT. Aprovechá la misma energía de tus herramientas Makita.",
    },
    {
      icon: <Filter className="h-10 w-10" />,
      title: "Control de Filtro",
      description: "Filtro permanente de malla fina que se limpia en segundos bajo la canilla. Sin filtros de papel.",
    },
    {
      icon: <Thermometer className="h-10 w-10" />,
      title: "Calor Optimizado",
      description: "Alcanza la temperatura ideal en minutos para extraer el máximo sabor de tu café.",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-20 sm:py-28 bg-surface-darker/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Funciones
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Cada función, una ventaja
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group flex flex-col items-center text-center gap-4 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-surface-dark/60 border border-border/40 flex items-center justify-center overflow-hidden group-hover:border-makita-teal/30 transition-colors">
                <div className="text-makita-teal/80 group-hover:text-makita-teal transition-colors transform group-hover:scale-110 duration-300">
                  {f.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/80 to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludesSection() {
  const { ref, visible } = useInView(0.1);

  const items = [
    { icon: <Box className="h-6 w-6" />, title: "Taza de acero inoxidable", desc: "Incluye taza de 90 mm de altura con tapa.", delay: 100 },
    { icon: <Filter className="h-6 w-6" />, title: "Filtro permanente", desc: "Malla fina reutilizable, fácil de limpiar.", delay: 200 },
    { icon: <Plug className="h-6 w-6" />, title: "Adaptador de carga", desc: "Compatible con cargadores CXT y LXT.", delay: 300 },
    { icon: <CupSoda className="h-6 w-6" />, title: "Cuchara dosificadora", desc: "Medida exacta para tu café perfecto.", delay: 400 },
  ];

  return (
    <section id="includes" ref={ref} className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Contenido
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Activá tu potencial
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            La Makita DCM501 incluye todo lo necesario para que disfrutes de tu café caliente en cualquier lugar de trabajo.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left - Product image */}
          <div className={`flex items-center justify-center transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-makita-teal/10 blur-3xl" />
              <img
                src={tankAsset.url}
                alt="Makita DCM501 tanque de agua extraíble"
                width={500}
                height={500}
                className="relative w-full max-w-sm rounded-xl"
              />
            </div>
          </div>

          {/* Right - Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 rounded-xl border border-border/40 bg-surface-dark/40 p-5 transition-all duration-500 hover:border-makita-teal/20 hover:bg-surface-dark/60 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-makita-teal/10 text-makita-teal">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductDetailsSection() {
  const { ref, visible } = useInView(0.1);

  const details = [
    { id: 2, label: "Tapa del tanque de agua", top: "6%", left: "50%", side: "left" as const },
    { id: 3, label: "Manija", top: "10%", left: "70%", side: "right" as const },
    { id: 1, label: "Tanque de agua", top: "18%", left: "45%", side: "left" as const },
    { id: 7, label: "Filtro", top: "28%", left: "50%", side: "right" as const },
    { id: 8, label: "Portafiltros", top: "35%", left: "45%", side: "left" as const },
    { id: 9, label: "Soporte para cápsulas de café", top: "42%", left: "52%", side: "right" as const },
    { id: 10, label: "Apertura de desbordamiento", top: "50%", left: "40%", side: "left" as const },
    { id: 14, label: "Tapa de la taza de café", top: "56%", left: "55%", side: "right" as const },
    { id: 15, label: "Taza de café", top: "63%", left: "45%", side: "left" as const },
    { id: 11, label: "Descanso de copa", top: "70%", left: "55%", side: "right" as const },
    { id: 13, label: "Interruptor de encendido", top: "76%", left: "38%", side: "left" as const },
    { id: 12, label: "Luz de encendido", top: "80%", left: "60%", side: "right" as const },
    { id: 4, label: "Tapa de la ranura de la batería", top: "86%", left: "42%", side: "left" as const },
    { id: 5, label: "Ranura de batería (10.8V – 12V máx.)", top: "92%", left: "55%", side: "right" as const },
    { id: 6, label: "Ranura de batería (18V y 14.4V)", top: "97%", left: "45%", side: "left" as const },
  ];

  const leftDetails = details.filter((d) => d.side === "left");
  const rightDetails = details.filter((d) => d.side === "right");

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-surface-darker/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Detalles
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Conocé todos sus detalles
          </h2>
        </div>

        {/* Desktop: 3-column grid with connecting lines */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-0 max-w-6xl mx-auto items-stretch">
          {/* Left labels */}
          <div className="relative min-h-[640px]">
            {leftDetails.map((d) => (
              <div
                key={d.id}
                className="absolute flex items-center w-full pr-3"
                style={{ top: d.top, transform: "translateY(-50%)" }}
              >
                <span className="flex items-center gap-2 text-xs font-medium text-foreground whitespace-nowrap bg-surface-darker/90 px-2.5 py-1 rounded-md border border-border/30 mr-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-makita-teal text-[10px] font-bold text-background">
                    {d.id}
                  </span>
                  {d.label}
                </span>
                <div className="flex-1 h-px bg-makita-teal/60" />
              </div>
            ))}
          </div>

          {/* Center image with hotspots and connecting lines */}
          <div className="relative w-[280px] lg:w-[340px]">
            <img
              src={heroImage}
              alt="Makita DCM501 con detalles"
              className="w-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />

            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-makita-teal/5 blur-3xl" />

            {/* Hotspot dots */}
            {details.map((d) => (
              <div key={d.id}>
                <div
                  className="absolute w-2.5 h-2.5 bg-makita-teal rounded-full -translate-x-1/2 -translate-y-1/2 ring-2 ring-makita-teal/40 z-20"
                  style={{ top: d.top, left: d.left }}
                />
              </div>
            ))}

            {/* Connecting lines from column edge to hotspot */}
            {leftDetails.map((d) => (
              <div
                key={d.id}
                className="absolute h-px bg-makita-teal/60 z-10"
                style={{ top: d.top, left: 0, width: d.left }}
              />
            ))}
            {rightDetails.map((d) => (
              <div
                key={d.id}
                className="absolute h-px bg-makita-teal/60 z-10"
                style={{ top: d.top, right: 0, width: `calc(100% - ${d.left})` }}
              />
            ))}
          </div>

          {/* Right labels */}
          <div className="relative min-h-[640px]">
            {rightDetails.map((d) => (
              <div
                key={d.id}
                className="absolute flex items-center w-full pl-3"
                style={{ top: d.top, transform: "translateY(-50%)" }}
              >
                <div className="flex-1 h-px bg-makita-teal/60" />
                <span className="flex items-center gap-2 text-xs font-medium text-foreground whitespace-nowrap bg-surface-darker/90 px-2.5 py-1 rounded-md border border-border/30 ml-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-makita-teal text-[10px] font-bold text-background">
                    {d.id}
                  </span>
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile list */}
        <div className="md:hidden mt-10 grid grid-cols-2 gap-3">
          {details.map((d, i) => (
            <div
              key={d.id}
              className={`flex items-center gap-3 rounded-xl border border-border/40 bg-surface-dark/40 px-4 py-3 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-2 w-2 shrink-0 rounded-full bg-makita-teal ring-2 ring-makita-teal/30" />
              <span className="text-sm font-medium text-foreground">{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecsSection() {
  const { ref, visible } = useInView(0.1);
  const specs = [
    { label: "Capacidad del tanque", value: "240 ml" },
    { label: "Autonomía promedio", value: "Hasta 3 tazas" },
    { label: "Altura máxima de taza", value: "90 mm" },
    { label: "Peso (sin batería)", value: "1.5 kg" },
    { label: "Tiempo de preparación", value: "5 minutos" },
    { label: "Compatibilidad", value: "12V CXT / 18V LXT" },
  ];

  return (
    <section id="specs" ref={ref} className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Ficha técnica
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Especificaciones técnicas
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {specs.map((spec, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded-xl border border-border/40 bg-surface-dark/40 px-6 py-5 transition-all duration-500 hover:border-makita-teal/20 hover:bg-surface-dark/60 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-sm font-medium text-muted-foreground">{spec.label}</span>
                <span className="text-lg font-bold text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="cta" ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-surface-darker">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--makita-teal-glow),_transparent_60%)] opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          No vuelvas a tomar café frío.
        </h2>
        <p
          className={`mt-6 text-lg text-muted-foreground transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Llevá la potencia de Makita a tu taza. Stock disponible con envío a todo el país.
        </p>
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-makita-teal px-8 py-4 text-base font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_var(--makita-teal-glow)]"
          >
            Comprar Ahora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#specs"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-card/50"
          >
            Ver especificaciones
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-makita-teal" />
            <span>2 años garantía</span>
          </div>
          <div className="h-4 w-px bg-border/40" />
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-makita-teal" />
            <span>Envío 24-48h</span>
          </div>
          <div className="h-4 w-px bg-border/40" />
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-makita-teal" />
            <span>30 días devolución</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface-darker py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-makita-teal flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-xs font-brand">M</span>
            </div>
            <span className="text-base font-bold tracking-tight text-foreground font-brand uppercase">MAKITA</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-makita-teal transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-makita-teal transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-makita-teal transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-makita-teal transition-colors"><Youtube className="h-5 w-5" /></a>
          </div>

          <p className="text-sm text-muted-foreground">© 2024 Makita. Derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <IncludesSection />
      <ProductDetailsSection />
      <SpecsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
