import { useRef } from "react";
import { motion as m, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Lock, Star, ArrowRight } from "lucide-react";

const bullets = [
  "Apply in minutes with a simple online form",
  "Fast decision – typically within 24 hours",
  "Access funds against your outstanding invoices",
];

// Each card: z-index order (back → front), rotation, and X/Y offset within the stack
const sectors = [
  { src: "/recruitment.jpg",   label: "Recruitment",   z: 1, rotate: -10, tx: -30, ty:  60 },
  { src: "/manufacturing.jpg", label: "Manufacturing",  z: 2, rotate:  -4, tx:  0,  ty:  20 },
  { src: "/logistics.jpg",     label: "Logistics",      z: 3, rotate:   3, tx:  30, ty: -10 },
  { src: "/construction.jpg",  label: "Construction",   z: 4, rotate:   9, tx:  55, ty: -40 },
];

const stats = [
  { value: "24 hrs",    label: "to get a decision" },
  { value: "Up to 90%", label: "of invoice value released" },
  { value: "No fees",   label: "for early repayment" },
];

function makeStars(n: number): string {
  const pairs: string[] = [];
  for (let i = 0; i < n; i++) {
    pairs.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`);
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
    position: absolute; top: 0; left: 0; background: transparent; border-radius: 50%;
  }
  .stars-sm        { width:1px; height:1px; box-shadow:${shadowsSmall};  animation: animStar  50s linear infinite; }
  .stars-sm::after { content:""; position:absolute; top:2000px; left:0; width:1px; height:1px; box-shadow:${shadowsSmall}; }
  .stars-md        { width:2px; height:2px; box-shadow:${shadowsMedium}; animation: animStar 100s linear infinite; }
  .stars-md::after { content:""; position:absolute; top:2000px; left:0; width:2px; height:2px; box-shadow:${shadowsMedium}; }
  .stars-lg        { width:3px; height:3px; box-shadow:${shadowsBig};    animation: animStar 150s linear infinite; }
  .stars-lg::after { content:""; position:absolute; top:2000px; left:0; width:3px; height:3px; box-shadow:${shadowsBig}; }
`;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked values — track progress as section leaves viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Images fade out and drift up as user scrolls away
  const imageOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const imageY       = useTransform(scrollYProgress, [0, 0.45], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at bottom, #0d1a2a 0%, #050505 100%)" }}
    >
      {/* Stars */}
      <style>{starStyles}</style>
      <div className="stars-sm" aria-hidden="true" />
      <div className="stars-md" aria-hidden="true" />
      <div className="stars-lg" aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

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

          {/* ── RIGHT: overlapping fanned image stack ── */}
          <m.div
            style={{ opacity: imageOpacity, y: imageY, width: 480, height: 420 }}
            className="flex-shrink-0 relative hidden lg:flex items-center justify-center"
          >
            <div className="relative" style={{ width: 420, height: 400 }}>
              {sectors.map(({ src, label, z, rotate, tx, ty }, i) => (
                <m.div
                  key={label}
                  initial={{ opacity: 0, rotate: 0, x: 0, y: 30 }}
                  animate={{ opacity: 1, rotate, x: tx, y: ty }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.04, zIndex: 10, transition: { duration: 0.2 } }}
                  className="absolute cursor-pointer"
                  style={{
                    zIndex: z,
                    top: "50%",
                    left: "50%",
                    marginTop: -150,
                    marginLeft: -100,
                    width: 200,
                    height: 260,
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                >
                  <img
                    src={src}
                    alt={`${label} invoice finance`}
                    className="w-full h-full object-cover brightness-80"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/90 to-transparent">
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                      {label}
                    </span>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>

        </div>
      </div>

      {/* ── Trust bar ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-20 text-center">
            
            {/* Stars & Padlock Group */}
            <div className="flex items-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-gray-400">
                <Lock className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {stats.map(({ value, label }) => (
                <div key={value} className="flex flex-col items-center">
                  <span className="text-lg font-extrabold text-white">{value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* New CTA Button */}
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-2.5 rounded-full text-[11px] font-extrabold hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
            >
              Search for Invoice Finance Brokers
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
