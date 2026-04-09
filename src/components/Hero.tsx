import { useEffect, useRef } from "react";
import { motion as m } from "motion/react";
import { ArrowRight } from "lucide-react";

const bullets = [
  "Apply in minutes with a simple online form",
  "Fast decision – typically within 24 hours",
  "Access funds against your outstanding invoices",
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

// Generate once at module load so they're stable across renders
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

  .stars-sm         { width: 1px; height: 1px; box-shadow: ${shadowsSmall};  animation: animStar  50s linear infinite; }
  .stars-sm::after  { content: ""; position: absolute; top: 2000px; left: 0; width: 1px; height: 1px; box-shadow: ${shadowsSmall}; }

  .stars-md         { width: 2px; height: 2px; box-shadow: ${shadowsMedium}; animation: animStar 100s linear infinite; }
  .stars-md::after  { content: ""; position: absolute; top: 2000px; left: 0; width: 2px; height: 2px; box-shadow: ${shadowsMedium}; }

  .stars-lg         { width: 3px; height: 3px; box-shadow: ${shadowsBig};    animation: animStar 150s linear infinite; }
  .stars-lg::after  { content: ""; position: absolute; top: 2000px; left: 0; width: 3px; height: 3px; box-shadow: ${shadowsBig}; }
`;

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at bottom, #0d1a2a 0%, #050505 100%)" }}
    >
      {/* Star layers */}
      <style>{starStyles}</style>
      <div className="stars-sm" aria-hidden="true" />
      <div className="stars-md" aria-hidden="true" />
      <div className="stars-lg" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Left: text + bullets */}
          <div className="flex-1 max-w-2xl">

            <m.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-7"
            >
              Check if you qualify for{" "}
              <br className="hidden sm:block" />
              <span className="text-[#00AEEF]">invoice finance</span>{" "}
              in minutes
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Unlock cash tied up in unpaid invoices and improve business cash
              flow instantly. With flexible funding from £1,000 to £1 million,
              invoice finance helps you release working capital without waiting
              for customers to pay.
            </m.p>

            <m.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.22 }}
              className="space-y-2"
            >
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm sm:text-base text-white font-semibold"
                >
                  <span className="text-[#00AEEF] mt-[3px]">•</span>
                  {item}
                </li>
              ))}
            </m.ul>
          </div>

          {/* Right: CTA button */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-12 lg:mt-0 flex-shrink-0"
          >
            <a
              href="#enquiry"
              className="inline-flex items-center gap-3 bg-[#00AEEF] hover:bg-[#009fd8] active:scale-95 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(0,174,239,0.35)] hover:shadow-[0_0_50px_rgba(0,174,239,0.6)]"
            >
              Start
              <ArrowRight className="w-5 h-5" />
            </a>
          </m.div>

        </div>
      </div>
    </section>
  );
}
