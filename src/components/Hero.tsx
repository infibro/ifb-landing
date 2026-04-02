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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6">
              This is business banking
            </h1>
            <p className="text-lg md:text-xl text-[#A3A3A3] leading-relaxed mb-10 max-w-lg font-medium">
              Take your finances further with the account designed for efficiency, and built for business.
            </p>

            <a
              href="#open-account"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-200 hover:scale-105 transition-all w-full sm:w-auto text-center shadow-lg"
            >
              Open a bank account
            </a>
          </motion.div>

          {/* Right: Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: -15, rotateX: 10, rotateZ: -4 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto md:mr-10 flex justify-center lg:justify-end perspective-[1200px]"
          >
            {/* The Card */}
            <div
              className="relative w-[340px] h-[215px] sm:w-[420px] sm:h-[265px] bg-gradient-to-br from-[#2f2f32] via-[#0e0e11] to-[#000000] rounded-2xl shadow-[20px_40px_60px_-15px_rgba(0,0,0,0.8),_0_0_40px_rgba(59,130,246,0.3)] border-[0.5px] border-white/20 p-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Glare/Reflection */}
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-[30deg] pointer-events-none mix-blend-overlay" />

              {/* Logo / Text */}
              <div className="flex justify-end items-center mr-2 mt-2">
                <span className="text-transparent border-none bg-clip-text bg-gradient-to-b from-[#e5e5e5] to-[#a3a3a3] font-bold text-2xl sm:text-3xl tracking-tighter" style={{ fontFamily: 'Inter, sans-serif', WebkitTextFillColor: 'transparent' }}>
                  Revolut <span className="font-normal opacity-80 backdrop-brightness-150">Business</span>
                </span>
              </div>

              {/* Chip */}
              <div className="w-10 h-8 sm:w-12 sm:h-9 rounded-sm border border-[#7a7a7a] bg-gradient-to-br from-[#c4c4c4] via-[#9e9e9e] to-[#757575] ml-4 mb-4 relative overflow-hidden flex flex-col justify-evenly px-1">
                <div className="w-full h-[1px] bg-[#535353]/40" />
                <div className="w-full h-[1px] bg-[#535353]/40" />
                <div className="w-full h-[1px] bg-[#535353]/40" />
              </div>
            </div>

            {/* Card Shadow on the pedestal */}
            <div className="absolute -bottom-10 left-10 w-[80%] h-12 bg-black/60 blur-xl rounded-[100%] scale-y-50 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
