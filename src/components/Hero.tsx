import { motion as m } from "motion/react";
import { ArrowRight } from "lucide-react";

const bullets = [
  "Apply in minutes with a simple online form",
  "Fast decision – typically within 24 hours",
  "Access funds against your outstanding invoices",
  "Flexible funding that grows with your business",
  "Dedicated account manager support",
];

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="min-h-screen bg-black flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Heading */}
          <m.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.07] tracking-tight text-white mb-8"
          >
            Check if you qualify for{" "}
            <br className="hidden sm:block" />
            <span className="text-[#00AEEF]">invoice finance</span>{" "}
            in minutes
          </m.h1>

          {/* Body copy */}
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

          {/* Bullets */}
          <m.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.22 }}
            className="space-y-2 mb-12"
          >
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-white font-semibold">
                <span className="text-[#00AEEF] mt-[3px]">•</span>
                {item}
              </li>
            ))}
          </m.ul>

          {/* CTA button */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.32 }}
          >
            <a
              href="#enquiry"
              className="inline-flex items-center gap-3 bg-[#00AEEF] hover:bg-[#009fd8] active:scale-95 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(0,174,239,0.35)] hover:shadow-[0_0_45px_rgba(0,174,239,0.55)]"
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
