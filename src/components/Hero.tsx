import React, { useEffect, useRef } from 'react';
import { motion as m } from "motion/react";
import { animate, scroll, cubicBezier } from "motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!containerRef.current) return;
    const firstSection = containerRef.current;
    const layers = firstSection.querySelectorAll('.hero-layer');

    const scaleEasings = [
      cubicBezier(0.42, 0, 0.58, 1),
      cubicBezier(0.76, 0, 0.24, 1)
    ];

    layers.forEach((layer, index) => {
      const idx = index % scaleEasings.length;
      const endOffset = `${1 - (idx * 0.05)} end`;

      // opacity animation
      scroll(
        animate(layer, { opacity: [0, 1, 0] }, {
          offset: [0, 0.4, 1],
          // using a slightly different curve for fade out
          easing: cubicBezier(0.42, 0, 0.58, 1)
        }),
        { target: firstSection, offset: ['start start', endOffset] }
      );

      // scale animation
      scroll(
        animate(layer, { scale: [1, 1, 2], y: [100, 100, 0] }, {
          offset: [0, 0.2, 1],
          easing: scaleEasings[idx]
        }),
        { target: firstSection, offset: ['start start', endOffset] }
      );
    });

    // Fade out text as we scroll
    const textOverlay = firstSection.querySelector('.hero-text-overlay');
    if (textOverlay) {
      scroll(
        animate(textOverlay, { opacity: [1, 0], scale: [1, 0.9], y: [0, -50] }, {
          offset: [0, 1],
          easing: cubicBezier(0.42, 0, 1, 1)
        }),
        { target: firstSection, offset: ['start start', '0.5 end'] } // fades out within the first half of the scroll
      );
    }
  }, []);

  return (
    <>
      <style>{`
        .hero-scroll-container {
           min-height: 200vh;
           background: #000;
           position: relative;
        }
        .hero-scroll-content {
           min-height: 100vh;
           width: 100%;
           display: flex;
           place-items: center;
           align-content: center;
           position: sticky;
           top: 0;
           overflow: hidden;
        }
        .hero-scroll-grid {
           --offset: 0;
           --container-width: 1600px;
           --gap: clamp(10px, 7.35vw, 80px);
           width: var(--container-width);
           max-width: calc(100% - (2 * 1rem));
           display: grid;
           grid-template-columns: repeat(5, 1fr);
           grid-template-rows: repeat(3, auto);
           gap: var(--gap);
           margin: 0 auto;
           position: absolute;
           top: 50%;
           left: 50%;
           translate: -50% -50%;
           z-index: 0;
        }
        @media (max-width: 600px) {
           .hero-scroll-grid {
             grid-template-columns: repeat(3, 1fr);
             --offset: -1;
           }
        }
        .hero-layer {
           display: grid;
           grid-column: 1 / -1;
           grid-row: 1 / -1;
           grid-template-columns: subgrid;
           grid-template-rows: subgrid;
           will-change: transform, opacity;
        }
        .hero-layer:nth-of-type(1) div:nth-of-type(odd) { grid-column: 1; }
        .hero-layer:nth-of-type(1) div:nth-of-type(even) { grid-column: -2; }
        .hero-layer:nth-of-type(2) div:nth-of-type(odd) { grid-column: calc(2 + var(--offset)); }
        .hero-layer:nth-of-type(2) div:nth-of-type(even) { grid-column: calc(-3 - var(--offset)); }
        
        .hero-img-wrap {
           display: flex;
           flex-direction: column;
           gap: 1rem;
           align-items: center;
        }
        .hero-img-wrap img {
           width: 100%;
           aspect-ratio: 4 / 5;
           object-fit: cover;
           border-radius: 1.5rem;
           box-shadow: 0 20px 40px rgba(0,0,0,0.8);
           filter: brightness(0.6) contrast(1.1);
           border: 1px solid rgba(255,255,255,0.05);
        }
        .hero-img-wrap p {
           color: #a1a1aa;
           font-size: 0.875rem;
           font-weight: 700;
           letter-spacing: 0.1em;
           text-transform: uppercase;
           background: rgba(0,0,0,0.5);
           padding: 0.25rem 1rem;
           border-radius: 1rem;
           border: 1px solid rgba(255,255,255,0.1);
        }
        .metallic-text {
           background: linear-gradient(180deg, #ffffff 0%, #e4e4e7 40%, #a1a1aa 48%, #d4d4d8 52%, #52525b 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.8)) drop-shadow(0px -1px 1px rgba(255,255,255,0.4));
        }
      `}</style>

      <section ref={containerRef} id="hero-section" className="hero-scroll-container">
        <div className="hero-scroll-content pt-20">

          <div className="hero-scroll-grid pointer-events-none">
            {/* Layer 1: Construction & Logistics */}
            <div className="hero-layer">
              <div className="hero-img-wrap mt-24">
                <img src="/construction.jpg" alt="Construction Invoice Finance" loading="eager" />
                <p>Construction</p>
              </div>
              <div className="hero-img-wrap mb-24">
                <img src="/logistics.jpg" alt="Logistics Invoice Finance" loading="eager" />
                <p>Logistics</p>
              </div>
            </div>

            {/* Layer 2: Manufacturing & Recruitment */}
            <div className="hero-layer">
              <div className="hero-img-wrap mb-32 hidden md:flex">
                <img src="/manufacturing.jpg" alt="Manufacturing Invoice Finance" loading="eager" />
                <p>Manufacturing</p>
              </div>
              <div className="hero-img-wrap mt-32">
                <img src="/recruitment.jpg" alt="Recruitment Invoice Finance" loading="eager" />
                <p>Recruitment</p>
              </div>
            </div>
          </div>

          {/* Central Foreground Text over the background */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20 pointer-events-none">
            <div className="flex flex-col items-center justify-center text-center">
              <m.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hero-text-overlay flex flex-col items-center"
              >
                <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-2xl">
                  Invoice <span className="metallic-text">Finance</span> Brokers
                </h1>
                <p className="text-xl md:text-3xl text-gray-200 leading-relaxed mb-12 max-w-3xl font-medium drop-shadow-xl">
                  You're one click away from unlocking finance.
                </p>
                <a
                  href="#enquiry"
                  className="inline-block bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto text-center shadow-[0_0_30px_rgba(255,255,255,0.2)] pointer-events-auto"
                >
                  Get a Quote
                </a>
              </m.div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
