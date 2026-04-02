import { motion } from "motion/react";
import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pb-20 lg:pb-32 overflow-hidden bg-[#000000] flex items-center pt-20">

      {/* --- BACKGROUND 3D ELEMENTS AND EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Massive Cosmic Blue Radiance coming from behind */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-500/20 blur-[150px] rounded-full mix-blend-screen mix-blend-lighten" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full hidden md:block" />

        {/* 3D Dark Block (Left/Center) */}
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[70%] bg-gradient-to-b from-[#1c1d22] to-[#0a0f18] border-t border-l border-white/20 shadow-[0_0_100px_rgba(59,130,246,0.2)]"
          style={{
            clipPath: 'polygon(0 35%, 100% 15%, 100% 100%, 0% 100%)',
            boxShadow: 'inset 0 2px 20px rgba(255,255,255,0.1)'
          }}
        >
          {/* Edge light reflection */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/80 to-transparent blur-[1px]" />
        </div>

        {/* 3D Concrete Block (Right) */}
        <div
          className="absolute bottom-0 right-[5%] w-[40%] h-[40%] bg-gradient-to-b from-[#a1a1aa] via-[#71717a] to-[#3f3f46] hidden md:block"
          style={{
            clipPath: 'polygon(0 0%, 100% 15%, 100% 100%, 15% 100%)',
            boxShadow: 'inset 2px 2px 10px rgba(255,255,255,0.4), inset -5px -5px 20px rgba(0,0,0,0.5)'
          }}
        >
          {/* Texture overlay (rough concrete approximation) */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[length:4px_4px]" />
        </div>
      </div>

      {/* --- FOREGROUND CONTENT --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-12">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white tracking-tight leading-[1.05] mb-8 drop-shadow-lg">
              Invoice Finance Brokers
            </h1>
            <p className="text-xl md:text-3xl text-[#d4d4d8] leading-relaxed mb-12 max-w-3xl font-medium">
              You're one click away from unlocking finance.
            </p>

            <a
              href="#unlock-finance"
              className="inline-block bg-white text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto text-center shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Get a Quote
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
