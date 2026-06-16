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
  Star,
  Sparkles,
  MoveRight,
} from "lucide-react";
import heroImage from "@/assets/makita-coffee-maker.png";

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
            <span className="font-bold text-primary-foreground text-sm">M</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            MAKITA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Características
          </a>
          <a href="#steps" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Cómo funciona
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
          <a href="#features" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Características</a>
          <a href="#steps" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Cómo funciona</a>
          <a href="#specs" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Especificaciones</a>
          <a href="#cta" className="block text-sm font-bold text-makita-teal" onClick={() => setMobileOpen(false)}>Comprar Ahora</a>
        </div>
      )}
    </nav>
  );
}

function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="#0B0F19"
        />
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface-darker">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,_var(--makita-teal-glow),_transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,_rgba(0,162,167,0.06),_transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Rating badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-makita-teal/10 border border-makita-teal/20 px-3 py-1.5 text-xs font-medium text-makita-teal">
              <div className="flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-makita-teal text-makita-teal" />
                <Star className="h-3 w-3 fill-makita-teal text-makita-teal" />
                <Star className="h-3 w-3 fill-makita-teal text-makita-teal" />
                <Star className="h-3 w-3 fill-makita-teal text-makita-teal" />
                <Star className="h-3 w-3 fill-makita-teal text-makita-teal" />
              </div>
              <span>5.0 — La favorita de los profesionales</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] leading-[1.1]">
              Tu café caliente, donde sea que el trabajo te lleve.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              La cafetera inalámbrica definitiva de Makita. Sin cables, sin filtros
              de papel, impulsada por las mismas baterías de tus herramientas.
            </p>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-lg bg-makita-teal px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_6px_var(--makita-teal-glow)]"
              >
                Conseguí la tuya
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card/30 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-card/50"
              >
                Ver características
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-6 flex items-center gap-6 sm:gap-10 border-t border-border/30 pt-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">240<span className="text-sm font-medium text-muted-foreground ml-1">ml</span></div>
                <div className="text-xs text-muted-foreground mt-0.5">Capacidad del tanque</div>
              </div>
              <div className="h-10 w-px bg-border/30" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">5<span className="text-sm font-medium text-muted-foreground ml-1">min</span></div>
                <div className="text-xs text-muted-foreground mt-0.5">Por taza</div>
              </div>
              <div className="h-10 w-px bg-border/30" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">1.5<span className="text-sm font-medium text-muted-foreground ml-1">kg</span></div>
                <div className="text-xs text-muted-foreground mt-0.5">Peso total</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow layers */}
            <div className="absolute -inset-8 rounded-full bg-makita-teal/10 blur-[100px] animate-pulse-glow" />
            <div className="absolute -inset-4 rounded-full bg-makita-teal/5 blur-[60px]" />

            {/* Sparkle decorations */}
            <div className="absolute top-4 left-8 z-20 text-yellow-400/80">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="absolute top-12 right-12 z-20 text-yellow-400/60">
              <Star className="h-4 w-4 fill-yellow-400/60" />
            </div>
            <div className="absolute bottom-20 left-4 z-20 text-yellow-400/50">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="absolute top-1/3 right-4 z-20 text-yellow-400/40">
              <Star className="h-3 w-3 fill-yellow-400/40" />
            </div>

            {/* Product badge */}
            <div className="absolute -top-2 -right-2 z-20 rounded-full bg-makita-teal px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-lg shadow-makita-teal/30">
              NUEVO
            </div>

            {/* Floating image */}
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Makita DCM501 cafetera inalámbrica"
                width={1024}
                height={1024}
                className="relative z-10 w-full max-w-lg drop-shadow-[0_20px_50px_rgba(0,162,167,0.25)] drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
              />
              <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-tr from-white/5 via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
            </div>

            {/* Subtle rings */}
            <div className="absolute inset-0 -z-10 rounded-full border border-makita-teal/20 scale-110" />
            <div className="absolute inset-0 -z-10 rounded-full border border-makita-teal/10 scale-125" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </div>

      {/* Wave divider */}
      <HeroWave />
    </section>
  );
}

function FeaturesSection() {
  const { ref, visible } = useInView(0.1);
  const features = [
    {
      icon: <Battery className="h-7 w-7" />,
      title: "Compatibilidad Total",
      description:
        "Funciona con baterías de iones de litio de 12V máx. CXT y 18V LXT de Makita. Si ya tenés las herramientas, ya tenés la energía.",
      link: "#specs",
    },
    {
      icon: <Weight className="h-7 w-7" />,
      title: "Portabilidad Extrema",
      description:
        "Diseño compacto con manija de transporte reforzada para llevarla a cualquier parte.",
      link: "#specs",
    },
    {
      icon: <Filter className="h-7 w-7" />,
      title: "Sin Filtros, Sin Complicaciones",
      description:
        "Incluye un filtro permanente de malla fina. Se limpia en segundos bajo la canilla.",
      link: "#specs",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-20 sm:py-28 bg-[#0B0F19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-wider text-makita-teal uppercase">
            Por qué elegirla
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            3 Razones para elegir la DCM501
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-surface-dark/60 p-7 transition-all duration-500 hover:border-makita-teal/30 hover:bg-surface-dark/80 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Decorative corner border accent */}
              <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-3xl border-l border-b border-makita-teal/20" />
              <div className="absolute bottom-0 left-0 h-16 w-16 rounded-tr-3xl border-r border-t border-makita-teal/20" />

              <div className="mb-5 inline-flex rounded-xl bg-makita-teal/10 p-3.5 text-makita-teal transition-colors group-hover:bg-makita-teal/20">
                {f.icon}
              </div>
              <h3 className="mb-2.5 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              <a
                href={f.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-makita-teal hover:gap-2.5 transition-all"
              >
                Ver más <MoveRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const { ref, visible } = useInView(0.1);

  const steps = [
    { num: "01", title: "Cargá el agua", desc: "Llená el tanque de 240 ml con agua fresca." },
    { num: "02", title: "Insertá la batería", desc: "Conectá tu batería Makita 12V o 18V LXT." },
    { num: "03", title: "Disfrutá", desc: "En 5 minutos tenés tu café listo, donde sea." },
  ];

  const stats = [
    { value: "240", unit: "ml", label: "Capacidad" },
    { value: "5", unit: "min", label: "Por taza" },
    { value: "1.5", unit: "kg", label: "Peso" },
    { value: "3", unit: "tazas", label: "Autonomía" },
  ];

  return (
    <section id="steps" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(0,162,167,0.04),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-wider text-makita-teal uppercase">
            Simple y rápido
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            3 simples pasos para tu café
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 items-center">
          {/* Steps left */}
          <div className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 transition-all duration-500 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-makita-teal/10 border border-makita-teal/20 text-sm font-bold text-makita-teal">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-makita-teal/5 blur-3xl" />
            <div className="relative rounded-2xl border border-border/40 bg-surface-dark/30 p-4 sm:p-6">
              <img
                src={heroImage}
                alt="Makita DCM501 en uso"
                width={400}
                height={400}
                loading="lazy"
                className="w-full max-w-xs sm:max-w-sm rounded-xl"
              />
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 rounded-full bg-makita-teal p-2.5 shadow-lg shadow-makita-teal/30">
                <Coffee className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Stats right */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`rounded-xl border border-border/30 bg-surface-dark/40 p-5 text-center transition-all duration-500 hover:border-makita-teal/20 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  {s.value}
                  <span className="text-sm font-medium text-muted-foreground ml-1">{s.unit}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecsSection() {
  const { ref, visible } = useInView(0.1);
  const specs = [
    { label: "Capacidad del tanque", value: "240 ml", detail: "Una taza estándar en 5 minutos" },
    { label: "Autonomía promedio", value: "Hasta 3 tazas", detail: "160 ml con una batería 18V (5.0 Ah)" },
    { label: "Altura máxima de taza", value: "90 mm", detail: "Incluye taza de acero inoxidable" },
    { label: "Peso (sin batería)", value: "1.5 kg", detail: "Ligera y manejable con una mano" },
  ];

  return (
    <section id="specs" ref={ref} className="relative py-20 sm:py-28 bg-surface-darker/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-wider text-makita-teal uppercase">
            Ficha técnica
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Especificaciones técnicas
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border/40 bg-surface-dark/60 overflow-hidden">
            {specs.map((spec, i) => (
              <div
                key={i}
                className={`flex items-start justify-between gap-4 border-b border-border/30 px-6 py-5 transition-all duration-500 last:border-b-0 hover:bg-surface-dark/80 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-makita-teal/10 p-1.5 text-makita-teal">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{spec.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-foreground">{spec.value}</div>
                  <div className="text-xs text-muted-foreground">{spec.detail}</div>
                </div>
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
    <section id="cta" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--makita-teal-glow),_transparent_60%)] opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          No vuelvas a tomar café frío. Llevá la potencia de Makita a tu taza.
        </h2>
        <p
          className={`mt-6 text-lg text-muted-foreground transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Stock disponible. Envío a todo el país. Garantía Makita oficial de 2 años.
        </p>
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl bg-makita-teal px-8 py-4 text-base font-bold text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_var(--makita-teal-glow)]"
          >
            Comprar Ahora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#specs"
            className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-card/30 px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-card/50"
          >
            Ver especificaciones
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-sm">
            <Droplets className="h-4 w-4 text-makita-teal" />
            <span>240 ml</span>
          </div>
          <div className="h-4 w-px bg-border/40" />
          <div className="flex items-center gap-2 text-sm">
            <Timer className="h-4 w-4 text-makita-teal" />
            <span>5 min</span>
          </div>
          <div className="h-4 w-px bg-border/40" />
          <div className="flex items-center gap-2 text-sm">
            <Coffee className="h-4 w-4 text-makita-teal" />
            <span>3 tazas</span>
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
              <span className="font-bold text-primary-foreground text-xs">M</span>
            </div>
            <span className="text-base font-bold tracking-tight text-foreground">MAKITA</span>
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
      <FeaturesSection />
      <StepsSection />
      <SpecsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
