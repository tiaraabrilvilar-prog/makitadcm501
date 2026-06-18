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
} from "lucide-react";
import heroImage from "@/assets/makita-coffee-maker.png";
import heroTransparent from "@/assets/hero-portada.png";
import tankTransparent from "@/assets/tank-transparent.png";
import tealVersion from "@/assets/teal-version.png";
import oliveVersion from "@/assets/olive-version.png";
import constructionImage from "@/assets/makita-construction-bg.png";

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
          <span className="font-serif-display text-3xl leading-none italic text-espresso">Makita</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">/ DCM501</span>
        </a>
        <div className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em]">
          <a href="#story" className="text-espresso/70 hover:text-terracotta transition-colors">01 · Historia</a>
          <a href="#features" className="text-espresso/70 hover:text-terracotta transition-colors">02 · Detalles</a>
          <a href="#specs" className="text-espresso/70 hover:text-terracotta transition-colors">03 · Ficha</a>
          <a href="#contact" className="text-espresso/70 hover:text-terracotta transition-colors">04 · Contacto</a>
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
          <a href="#story" onClick={() => setOpen(false)} className="block text-espresso/80">01 · Historia</a>
          <a href="#features" onClick={() => setOpen(false)} className="block text-espresso/80">02 · Detalles</a>
          <a href="#specs" onClick={() => setOpen(false)} className="block text-espresso/80">03 · Ficha</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-espresso/80">04 · Contacto</a>
        </div>
      )}
    </nav>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-10 sm:pt-40 sm:pb-16 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Top meta strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 font-mono text-[11px] uppercase tracking-[0.25em] text-mocha">
          <span>Edición N.º 01 — Otoño 2026</span>
          <span className="hidden sm:inline">Buenos Aires · 06:42 AM</span>
          <span>Café · Obra · Energía</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          {/* Headline */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <h1 className="font-serif-display text-espresso leading-[0.95] tracking-tight text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem]">
              Café <em className="text-terracotta">recién hecho</em>,<br />
              donde el cable<br />
              <span className="italic text-mocha">no llega.</span>
            </h1>
            <div className="mt-10 grid sm:grid-cols-[1fr_auto] gap-6 items-start">
              <p className="max-w-md text-base sm:text-lg text-espresso-soft leading-relaxed">
                La <strong className="font-semibold">DCM501</strong> es una cafetera inalámbrica
                que corre con la misma batería que tu taladro. Sin enchufe, sin filtros de papel,
                sin excusas para tomar café frío.
              </p>
              <a
                href="#cta"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-4 text-sm font-medium text-cream hover:bg-terracotta-deep transition-colors whitespace-nowrap"
              >
                Pedila ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-6 rounded-full bg-cream-deep" />
              <div className="absolute inset-x-10 -top-2 bottom-2 flex justify-center pointer-events-none z-20">
                <span className="block h-20 w-1.5 rounded-full bg-gradient-to-t from-transparent via-espresso/15 to-transparent blur-md animate-steam-1" />
                <span className="block h-24 w-2 rounded-full bg-gradient-to-t from-transparent via-espresso/20 to-transparent blur-md animate-steam-2 mx-3" />
                <span className="block h-16 w-1.5 rounded-full bg-gradient-to-t from-transparent via-espresso/15 to-transparent blur-md animate-steam-3" />
              </div>
              <img
                src={heroTransparent}
                alt="Makita DCM501"
                className="relative z-10 w-full h-full object-contain animate-float"
              />
              {/* corner tags */}
              <span className="absolute top-2 left-0 font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">Fig. 01</span>
              <span className="absolute bottom-2 right-0 font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">DCM501Z</span>
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
    <div className="border-y border-espresso/15 bg-espresso text-cream overflow-hidden py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center font-serif-display italic text-3xl sm:text-4xl px-8">
            {t}
            <span className="ml-8 inline-block h-2 w-2 rounded-full bg-terracotta" />
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
    <section id="story" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-6">
              Capítulo 01 — Historia
            </p>
            <h2 className="font-serif-display text-5xl sm:text-6xl leading-[1.02] text-espresso">
              Una herramienta<br />que también <em>despierta</em>.
            </h2>
            <div className={`mt-8 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
              <img
                src={constructionImage}
                alt="DCM501 en obra"
                className="w-full rounded-sm border border-espresso/10 grayscale-[20%]"
                loading="lazy"
              />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-mocha">
                ↑ DCM501 en obra · Mendoza, 2025
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-7 space-y-10 text-lg text-espresso-soft leading-[1.7]">
            <p className="font-serif-display text-3xl sm:text-4xl italic text-espresso leading-snug">
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
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-espresso/15">
              {[
                { n: "240", u: "ml por carga" },
                { n: "05", u: "minutos" },
                { n: "18V", u: "batería LXT" },
              ].map((s) => (
                <div key={s.n}>
                  <p className="font-serif-display text-4xl sm:text-5xl text-terracotta">{s.n}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mocha">{s.u}</p>
                </div>
              ))}
            </div>
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
      title: "Batería compartida",
      body: "Compatible con la línea CXT 12V y LXT 18V de Makita. La misma batería de tu taladro hace tu café.",
    },
    {
      n: "02",
      title: "Filtro permanente",
      body: "Malla metálica fina. Se enjuaga bajo la canilla en segundos. Cero filtros de papel descartables.",
    },
    {
      n: "03",
      title: "Taza de acero incluida",
      body: "Vaso térmico de acero inoxidable de 90 mm con tapa. Calza ajustado al portafiltros.",
    },
    {
      n: "04",
      title: "Tanque extraíble",
      body: "Carga 240 ml de agua. Se desmonta para limpiar como cualquier termo.",
    },
    {
      n: "05",
      title: "Café molido común",
      body: "No necesita cápsulas, ni pads. Sólo café molido del que ya tomás.",
    },
    {
      n: "06",
      title: "Hecha para obra",
      body: "Carcasa robusta, agarre antideslizante, pensada para subir andamios sin romperse.",
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-cream-deep/60">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
              Capítulo 02 — Detalles
            </p>
            <h2 className="font-serif-display text-5xl sm:text-6xl leading-[1.02] text-espresso max-w-2xl">
              Seis razones,<br /><em>una sola taza.</em>
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
              <h3 className="col-span-10 sm:col-span-4 font-serif-display text-2xl sm:text-4xl text-espresso leading-tight">
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

/* ---------- ANATOMY ---------- */
function Anatomy() {
  const [active, setActive] = useState<number | null>(1);
  const parts = [
    { id: 1, label: "Manija" },
    { id: 2, label: "Tapa del tanque" },
    { id: 3, label: "Tanque de agua" },
    { id: 4, label: "Portafiltros" },
    { id: 5, label: "Tapa de la taza" },
    { id: 6, label: "Taza de café" },
    { id: 7, label: "Ranura de batería" },
    { id: 8, label: "Descanso de copa" },
    { id: 9, label: "Interruptor de encendido" },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4 text-center">
          Anatomía
        </p>
        <h2 className="font-serif-display text-5xl sm:text-6xl leading-[1.02] text-espresso text-center max-w-3xl mx-auto">
          Cada parte tiene su <em>oficio</em>.
        </h2>

        <div className="mt-16 grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center max-w-5xl mx-auto">
          {/* Left list */}
          <ul className="space-y-2 lg:text-right order-2 lg:order-1">
            {parts.slice(0, 5).map((p) => (
              <li key={p.id}>
                <button
                  onMouseEnter={() => setActive(p.id)}
                  onClick={() => setActive(p.id)}
                  className={`font-serif-display text-2xl sm:text-3xl transition-colors ${
                    active === p.id ? "text-terracotta italic" : "text-espresso/40 hover:text-espresso"
                  }`}
                >
                  <span className="font-mono text-xs mr-2 align-middle">0{p.id}</span>
                  {p.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Center image */}
          <div className="relative w-[260px] sm:w-[320px] mx-auto order-1 lg:order-2">
            <div className="absolute inset-4 rounded-full bg-cream-deep" />
            <img src={heroImage} alt="DCM501" className="relative w-full" />
          </div>

          {/* Right list */}
          <ul className="space-y-2 order-3">
            {parts.slice(5).map((p) => (
              <li key={p.id}>
                <button
                  onMouseEnter={() => setActive(p.id)}
                  onClick={() => setActive(p.id)}
                  className={`font-serif-display text-2xl sm:text-3xl transition-colors ${
                    active === p.id ? "text-terracotta italic" : "text-espresso/40 hover:text-espresso"
                  }`}
                >
                  <span className="font-mono text-xs mr-2 align-middle">0{p.id}</span>
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- SPECS (editorial table) ---------- */
function Specs() {
  const rows = [
    ["Capacidad del tanque", "240 ml"],
    ["Autonomía", "Hasta 3 tazas por carga"],
    ["Tiempo de preparación", "5 minutos"],
    ["Temperatura", "~90 °C"],
    ["Baterías compatibles", "12V CXT / 18V LXT"],
    ["Sistema de filtro", "Malla permanente"],
    ["Tipo de café", "Café molido"],
    ["Peso (sin batería)", "1,5 kg"],
    ["Altura máxima de taza", "90 mm"],
    ["Dimensiones (A×A×L)", "135 × 118 × 244 mm"],
  ];

  return (
    <section id="specs" className="py-24 sm:py-32 bg-espresso text-cream">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
            Capítulo 03 — Ficha
          </p>
          <h2 className="font-serif-display text-5xl sm:text-6xl leading-[1.02]">
            La <em>letra chica</em>,<br />en grande.
          </h2>
          <div className="mt-8 relative w-56">
            <img src={tankTransparent} alt="Tanque" className="w-full opacity-90" loading="lazy" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <table className="w-full border-t border-cream/20">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} className="border-b border-cream/15 hover:bg-cream/5 transition-colors">
                  <td className="py-5 pr-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/60 align-top w-16">
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td className="py-5 pr-4 font-sans text-base sm:text-lg text-cream/85">{k}</td>
                  <td className="py-5 pl-4 text-right font-serif-display italic text-xl sm:text-2xl text-cream">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ---------- VERSIONS ---------- */
function Versions() {
  const versions = [
    {
      name: "Azul Turquesa",
      code: "DCM501Z",
      tag: "Clásico de catálogo",
      img: tealVersion,
      body: "El color institucional de Makita. La versión más fácil de conseguir, la que vas a ver en cualquier ferretería seria.",
    },
    {
      name: "Verde Oliva",
      code: "DCM501ZO",
      tag: "Edición Lifestyle",
      img: oliveVersion,
      body: 'Edición especial del catálogo "Lifestyle" de Makita. Estética táctica, pensada para camping y expediciones. La "O" final viene de Olive.',
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif-display text-5xl sm:text-6xl text-espresso leading-[1.02]">
            Dos <em>versiones</em>.
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
                <h3 className="font-serif-display text-3xl sm:text-4xl text-espresso">{v.name}</h3>
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

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="cta" className="py-28 sm:py-36 bg-terracotta text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-10 left-10 font-serif-display text-[18rem] leading-none italic">c</div>
        <div className="absolute bottom-10 right-10 font-serif-display text-[18rem] leading-none italic">é</div>
      </div>
      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/70 mb-8">
          Una sola cosa más
        </p>
        <h2 className="font-serif-display text-6xl sm:text-8xl leading-[0.95]">
          No vuelvas<br />a tomar café <em>frío</em>.
        </h2>
        <p className="mt-8 text-lg text-cream/85 max-w-xl mx-auto">
          Llevá la potencia de Makita a tu taza. La DCM501 te espera.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="group inline-flex items-center gap-3 rounded-full bg-cream px-9 py-4 text-sm font-medium text-espresso hover:bg-espresso hover:text-cream transition-colors">
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
    <section id="contact" className="py-24 sm:py-32 bg-cream-deep/60">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta mb-4">
              Capítulo 04 — Contacto
            </p>
            <h2 className="font-serif-display text-5xl sm:text-7xl leading-[1] text-espresso">
              Escribinos.<br /><em>Tomamos un café.</em>
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
              <p className="font-serif-display text-2xl sm:text-3xl text-espresso leading-snug">{c.value}</p>
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
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          <div>
            <span className="font-serif-display italic text-3xl text-cream">Makita</span>
            <p className="mt-3 text-sm text-cream/60 max-w-xs">
              DCM501 — Edición editorial. Pieza de comunicación independiente.
            </p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] space-y-2">
            <a href="#story" className="block hover:text-terracotta">Historia</a>
            <a href="#features" className="block hover:text-terracotta">Detalles</a>
            <a href="#specs" className="block hover:text-terracotta">Ficha</a>
            <a href="#contact" className="block hover:text-terracotta">Contacto</a>
          </div>
          <div className="flex sm:justify-end items-center gap-5">
            <a href="#" className="hover:text-terracotta"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-terracotta"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-terracotta"><Youtube className="h-5 w-5" /></a>
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

function Index() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <Navbar />
      <Hero />
      <Marquee />
      <Story />
      <Features />
      <Anatomy />
      <Specs />
      <Versions />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
