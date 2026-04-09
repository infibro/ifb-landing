import { motion as m } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Apply in minutes with a simple online form",
  "Fast decision – typically within 24 hours",
  "Access funds against your outstanding invoices",
];

const sectors = [
  { src: "/construction.jpg",  label: "Construction" },
  { src: "/logistics.jpg",     label: "Logistics" },
  { src: "/manufacturing.jpg", label: "Manufacturing" },
  { src: "/recruitment.jpg",   label: "Recruitment" },
];

const stats = [
  { value: "24 hrs",     label: "to get a decision" },
  { value: "Up to 90%",  label: "of invoice value released" },
  { value: "No fees",    label: "for early repayment" },
];

/** Generates a CSS box-shadow string of n random white stars */
function makeStars(n: number): string {
  const pairs: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    pairs.push(`${x}px ${y}px #FFF`);
  }
  return pairs.join(", ");
}

const shadowsSmall  = makeStars(700);
const shadowsMedium = makeStars(200);
const shadowsBig    = makeStars(100);

const starStyles = `
  @keyframes animStar {
    from { transform: translateY(0px); }
    to   { transform: translateY(-2000px); }
  }
  .stars-sm, .stars-md, .stars-lg {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    border-radius: 50%;
  }
  .stars-sm        { width: 1px; height: 1px; box-shadow: ${shadowsSmall};  animation: animStar  50s linear infinite; }
  .stars-sm::after { content: ""; position: absolute; top: 2000px; left: 0; width: 1px; height: 1px; box-shadow: ${shadowsSmall}; }
  .stars-md        { width: 2px; height: 2px; box-shadow: ${shadowsMedium}; animation: animStar 100s linear infinite; }
  .stars-md::after { content: ""; position: absolute; top: 2000px; left: 0; width: 2px; height: 2px; box-shadow: ${shadowsMedium}; }
  .stars-lg        { width: 3px; height: 3px; box-shadow: ${shadowsBig};    animation: animStar 150s linear infinite; }
  .stars-lg::after { content: ""; position: absolute; top: 2000px; left: 0; width: 3px; height: 3px; box-shadow: ${shadowsBig}; }
`;

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at bottom, #0d1a2a 0%, #050505 100%)" }}
    >
      {/* Stars */}
      <style>{starStyles}</style>
      <div className="stars-sm" aria-hidden="true" />
      <div className="stars-md" aria-hidden="true" />
      <div className="stars-lg" aria-hidden="true" />

      {/* ── Main hero content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* ── LEFT: text ── */}
          <div className="flex-1 min-w-0">

            <m.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5"
            >
              Check if you qualify for{" "}
              <span className="text-[#00AEEF]">invoice finance</span>{" "}
              in minutes
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-base text-gray-300 leading-relaxed mb-8 max-w-lg"
            >
              Unlock cash tied up in unpaid invoices and improve business cash
              flow instantly. With flexible funding from £1,000 to £1 million,
              invoice finance helps you release working capital without waiting
              for customers to pay.
            </m.p>

            {/* Bullets */}
            <m.ul
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              className="space-y-3 mb-10"
            >
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-white font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </m.ul>

            {/* CTA + sub-note */}
            <m.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.26 }}
              className="flex flex-col items-start gap-3"
            >
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center bg-[#00AEEF] hover:bg-[#009fd8] active:scale-95 text-black font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-[0_0_28px_rgba(0,174,239,0.35)] hover:shadow-[0_0_45px_rgba(0,174,239,0.55)]"
              >
                Unlock Finance
              </a>
              <p className="text-xs text-gray-500">No impact on your credit score</p>
            </m.div>
          </div>

          {/* ── RIGHT: 2×2 image grid ── */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0 w-full lg:w-[480px] xl:w-[520px]"
          >
            <div className="grid grid-cols-2 gap-3">
              {sectors.map(({ src, label }, i) => (
                <m.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.08 }}
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
                >
                  <img
                    src={src}
                    alt={`${label} invoice finance`}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  {/* Label badge */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">
                      {label}
                    </span>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>

        </div>
      </div>

      {/* ── Trust / stats bar ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5">
          <div className="flex flex-wrap justify-start gap-8 lg:gap-16">
            {stats.map(({ value, label }) => (
              <div key={value} className="flex flex-col">
                <span className="text-lg font-extrabold text-white">{value}</span>
                <span className="text-xs text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
