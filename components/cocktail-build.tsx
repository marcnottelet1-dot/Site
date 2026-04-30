"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  MotionValue,
} from "framer-motion";

/**
 * Scroll-driven Pornstar Martini build.
 *
 *   0.05 - 0.18  Empty coupe glass appears
 *   0.18 - 0.34  Vodka pours in
 *   0.34 - 0.50  Passoa pours in
 *   0.50 - 0.65  Passion fruit puree + lime + vanilla
 *   0.65 - 0.82  Foam rises on top
 *   0.82 - 1.00  Passion fruit half drops in, Champagne shot appears
 */

const STEPS = [
  {
    title: "Le verre",
    desc: "Une coupe Martini glacée, propre, prête à accueillir l'histoire.",
  },
  {
    title: "La vodka",
    desc: "5 cl d'Absolut Vanilla — la base ronde et soyeuse.",
  },
  {
    title: "Passoa",
    desc: "2,5 cl de liqueur de fruit de la passion pour la profondeur.",
  },
  {
    title: "Purée de passion",
    desc: "1,5 cl de purée fraîche, citron vert et sirop de vanille.",
  },
  {
    title: "La mousse",
    desc: "Shaké vif — une mousse aérienne se dépose en surface.",
  },
  {
    title: "La signature",
    desc: "Une demi-passion posée. Un shot de Champagne à côté. Service.",
  },
];

const STEP_RANGES: [number, number][] = [
  [0.05, 0.18],
  [0.18, 0.34],
  [0.34, 0.5],
  [0.5, 0.65],
  [0.65, 0.82],
  [0.82, 1.0],
];

export default function CocktailBuild() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const idx = STEP_RANGES.findIndex(([from, to]) => v >= from && v < to);
      setActiveStep(idx === -1 ? (v >= 1 ? STEPS.length - 1 : 0) : idx);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0807] text-white"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden grain">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,168,80,0.18), transparent 60%), radial-gradient(ellipse 80% 60% at 50% 110%, rgba(120,40,30,0.4), transparent 70%)",
          }}
        />

        <div className="container relative z-10 grid h-full grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="relative flex items-center justify-center h-[60vh] lg:h-full order-2 lg:order-1">
            <CocktailGlass progress={scrollYProgress} />
          </div>

          <div className="relative flex flex-col gap-6 max-w-lg order-1 lg:order-2">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold-300">
              <span className="h-px w-8 bg-gold-300/60" />
              Signature · Pornstar Martini
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              Chaque cocktail
              <br />
              <span className="italic text-gold-200">se compose</span> comme
              une histoire.
            </h2>

            <div className="relative h-[170px]">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: i === activeStep ? 1 : 0,
                    y: i === activeStep ? 0 : 16,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-white/50 mb-2">
                    Étape {String(i + 1).padStart(2, "0")} / 06
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-2 h-px w-full bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gold-300"
                style={{ width: progressWidth }}
              />
            </div>
            <div className="text-xs text-white/40 tracking-widest">
              FAITES DÉFILER · LE COCKTAIL SE CONSTRUIT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- glass ---------------- */

function CocktailGlass({ progress }: { progress: MotionValue<number> }) {
  // Layer rises 0..1
  const vodka = useTransform(progress, [0.18, 0.34], [0, 0.32]);
  const passoa = useTransform(progress, [0.34, 0.5], [0, 0.28]);
  const puree = useTransform(progress, [0.5, 0.65], [0, 0.18]);
  const foam = useTransform(progress, [0.65, 0.82], [0, 0.12]);

  // Cumulative offsets (each layer sits on top of previous)
  const offsetPassoa = vodka;
  const offsetPuree = useTransform([vodka, passoa], (latest) => {
    const arr = latest as number[];
    return arr[0] + arr[1];
  });
  const offsetFoam = useTransform([vodka, passoa, puree], (latest) => {
    const arr = latest as number[];
    return arr[0] + arr[1] + arr[2];
  });

  // Final liquid surface position (for fruit floating)
  const surface = useTransform([vodka, passoa, puree, foam], (latest) => {
    const arr = latest as number[];
    return arr[0] + arr[1] + arr[2] + arr[3];
  });

  // Garnish drop
  const fruitY = useTransform(progress, [0.82, 0.94], [-280, 0]);
  const fruitOpacity = useTransform(progress, [0.82, 0.86], [0, 1]);
  const fruitRotate = useTransform(progress, [0.82, 1], [-60, 8]);

  // Shot glass
  const shotOpacity = useTransform(progress, [0.9, 1], [0, 1]);
  const shotX = useTransform(progress, [0.9, 1], [60, 0]);

  // Coupe appearance
  const glassOpacity = useTransform(progress, [0.05, 0.18], [0, 1]);

  // Subtle sway
  const sway = useTransform(progress, [0, 1], [0, 3]);

  return (
    <motion.div
      className="relative w-full max-w-[520px] aspect-square"
      style={{ opacity: glassOpacity, rotate: sway }}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[10%] w-[78%] h-6 rounded-[50%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,200,140,0.22), transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
      >
        <defs>
          <linearGradient id="vodkaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7e9c8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e6c98a" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="passoaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffb867" />
            <stop offset="100%" stopColor="#e07a2a" />
          </linearGradient>
          <linearGradient id="pureeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59842" />
            <stop offset="100%" stopColor="#a64315" />
          </linearGradient>
          <linearGradient id="foamGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff8e8" />
            <stop offset="100%" stopColor="#f0dfb8" />
          </linearGradient>
          <linearGradient id="glassEdge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
          </linearGradient>

          {/* Coupe interior clip */}
          <clipPath id="bowl">
            <path d="M70 90 Q200 290 330 90 Z" />
          </clipPath>
        </defs>

        {/* Stem + base */}
        <g>
          <rect x="196" y="200" width="8" height="130" fill="url(#glassEdge)" rx="1" />
          <ellipse cx="200" cy="335" rx="60" ry="8" fill="rgba(255,255,255,0.4)" />
          <ellipse cx="200" cy="335" rx="60" ry="3" fill="rgba(255,255,255,0.55)" />
        </g>

        {/* Liquid stack — clipped to coupe interior */}
        <g clipPath="url(#bowl)">
          <Liquid height={vodka} fill="url(#vodkaGrad)" />
          <Liquid height={passoa} offset={offsetPassoa} fill="url(#passoaGrad)" />
          <Liquid height={puree} offset={offsetPuree} fill="url(#pureeGrad)" />
          <Liquid height={foam} offset={offsetFoam} fill="url(#foamGrad)" foam />
        </g>

        {/* Coupe outline */}
        <path
          d="M70 90 Q200 290 330 90"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
        />
        <path
          d="M70 90 L330 90"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1.4"
        />
        <path
          d="M95 105 Q120 200 200 280"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>

      {/* Passion fruit half */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "18%",
          y: fruitY,
          opacity: fruitOpacity,
          rotate: fruitRotate,
        }}
      >
        <PassionFruit />
      </motion.div>

      {/* Shot glass */}
      <motion.div
        className="absolute right-[2%] bottom-[20%]"
        style={{ opacity: shotOpacity, x: shotX }}
      >
        <ShotGlass />
      </motion.div>

      {/* Hidden surface motion value to avoid TS unused-warn (used by future enhancements) */}
      <motion.span style={{ opacity: surface }} className="hidden" aria-hidden />
    </motion.div>
  );
}

/* Liquid layer rendered as a rect filling from bowl bottom upward.
 * `height` and `offset` are unitless 0..1 values; max rise is 110px in the 400-viewBox. */
const BASE_Y = 200; // y of bowl rim baseline used for liquid stacking
const MAX_RISE = 110;

function Liquid({
  height,
  offset,
  fill,
  foam,
}: {
  height: MotionValue<number>;
  offset?: MotionValue<number>;
  fill: string;
  foam?: boolean;
}) {
  // Always combine both motion values so both contribute to the transform.
  // When `offset` is undefined we fall back to a stable zero MotionValue.
  const zero = useMotionValue(0);
  const layerY = useTransform([offset ?? zero, height], (latest) => {
    const arr = latest as number[];
    return BASE_Y - (arr[0] + arr[1]) * MAX_RISE;
  });
  const rectHeight = useTransform(height, (h) => h * MAX_RISE);

  return (
    <g>
      <motion.rect x={40} width={320} y={layerY} height={rectHeight} fill={fill} />
      <motion.ellipse
        cx={200}
        cy={layerY}
        rx={130}
        ry={foam ? 10 : 4}
        fill={foam ? "url(#foamGrad)" : "rgba(255,255,255,0.18)"}
      />
      {foam && (
        <>
          <motion.ellipse cx={150} cy={layerY} rx={18} ry={5} fill="rgba(255,255,255,0.7)" />
          <motion.ellipse cx={235} cy={layerY} rx={22} ry={6} fill="rgba(255,255,255,0.85)" />
        </>
      )}
    </g>
  );
}

function PassionFruit() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <defs>
        <radialGradient id="rind" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0%" stopColor="#7a3120" />
          <stop offset="60%" stopColor="#4a1a0e" />
          <stop offset="100%" stopColor="#2a0d06" />
        </radialGradient>
        <radialGradient id="pulp" cx="0.5" cy="0.55" r="0.55">
          <stop offset="0%" stopColor="#ffd277" />
          <stop offset="80%" stopColor="#f1a13a" />
          <stop offset="100%" stopColor="#a35d18" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="60" rx="50" ry="46" fill="url(#rind)" />
      <ellipse cx="60" cy="58" rx="34" ry="30" fill="url(#pulp)" />
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI * 2;
        const r = 8 + (i % 3) * 6;
        const cx = 60 + Math.cos(a) * r;
        const cy = 58 + Math.sin(a) * (r * 0.85);
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="2.4" ry="3.6" fill="#1a0a04" opacity="0.85" />
        );
      })}
      <ellipse cx="44" cy="42" rx="10" ry="5" fill="rgba(255,255,255,0.18)" />
    </svg>
  );
}

function ShotGlass() {
  return (
    <svg width="80" height="120" viewBox="0 0 80 120">
      <defs>
        <linearGradient id="champagne" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5cc" />
          <stop offset="100%" stopColor="#e2bf65" />
        </linearGradient>
      </defs>
      <rect x="14" y="16" width="52" height="90" rx="3" fill="url(#champagne)" opacity="0.85" />
      <rect
        x="12"
        y="14"
        width="56"
        height="94"
        rx="4"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="2"
      />
      <circle cx="30" cy="80" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="48" cy="60" r="1.6" fill="rgba(255,255,255,0.7)" />
      <circle cx="40" cy="40" r="1.4" fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}
