"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

function AnimatedDots() {
  const [dots, setDots] = useState(".")
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "." : prev + ".")
    }, 400)
    return () => clearInterval(interval)
  }, [])
  
  return <span className="text-[#00c7f1] inline-block w-8">{dots}</span>
}

export default function ForcedLoader({ durationMs = 3000 }: { durationMs?: number }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), durationMs)
    return () => clearTimeout(timer)
  }, [durationMs])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden">
      {/* Background radiating rays */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-rays-rotate">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[300px] bg-gradient-to-t from-transparent via-[#00c7f1]/20 to-transparent origin-bottom"
              style={{ transform: `rotate(${i * 30}deg)`, bottom: "50%" }}
            />
          ))}
        </div>
      </div>

      {/* Main container */}
      <div className="relative flex flex-col items-center">
        {/* Outer expanding rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-ring-1 absolute w-[280px] h-[280px] rounded-full border border-[#00c7f1]/20" />
          <div className="animate-ring-2 absolute w-[280px] h-[280px] rounded-full border border-[#00c7f1]/20" />
          <div className="animate-ring-3 absolute w-[280px] h-[280px] rounded-full border border-[#00c7f1]/20" />
        </div>

        {/* Rotating orbit ring */}
        <div className="absolute w-[220px] h-[220px] animate-orbit-rotate">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00c7f1] rounded-full shadow-lg shadow-[#00c7f1]/50" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#134a8b] rounded-full shadow-lg shadow-[#134a8b]/50" />
        </div>

        {/* Glowing aura layers */}
        <div className="absolute w-[200px] h-[200px] animate-glow-pulse rounded-full bg-gradient-radial from-[#00c7f1]/30 via-[#00c7f1]/10 to-transparent blur-2xl" />
        <div className="absolute w-[160px] h-[160px] animate-glow-pulse-delayed rounded-full bg-gradient-radial from-[#134a8b]/20 via-[#134a8b]/5 to-transparent blur-xl" />

        {/* Logo container with rotation */}
        <div className="relative z-10 animate-logo-float">
          <div className="animate-logo-rotate">
            <div className="relative">
              {/* Inner glow behind logo */}
              <div className="absolute inset-[-10px] rounded-full bg-white/80 blur-md" />
              <Image
                src="/logo/logo.png"
                alt="ＢｌａｃｋＰｒｉｎｃｅ株式会社 logo"
                width={160}
                height={160}
                priority
                className="relative drop-shadow-2xl select-none"
              />
            </div>
          </div>
        </div>

        {/* Sparkle particles */}
        <div className="absolute inset-0 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#00c7f1] rounded-full animate-sparkle"
              style={{
                left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <div className="mt-8 animate-fade-pulse">
          <span className="text-lg font-medium text-[#134a8b] tracking-widest">LOADING</span>
          <AnimatedDots />
        </div>
      </div>

      <style>{`
        @keyframes raysRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ringExpand1 {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes ringExpand2 {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes ringExpand3 {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes glowPulseDelayed {
          0%, 100% { opacity: 0.3; transform: scale(1.1); }
          50% { opacity: 0.7; transform: scale(1); }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes logoRotate {
          0% { transform: rotateY(0deg); }
          25% { transform: rotateY(15deg); }
          75% { transform: rotateY(-15deg); }
          100% { transform: rotateY(0deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadePulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-rays-rotate { animation: raysRotate 20s linear infinite; }
        .animate-ring-1 { animation: ringExpand1 2s ease-out infinite; }
        .animate-ring-2 { animation: ringExpand2 2s ease-out infinite 0.66s; }
        .animate-ring-3 { animation: ringExpand3 2s ease-out infinite 1.33s; }
        .animate-orbit-rotate { animation: orbitRotate 3s linear infinite; }
        .animate-glow-pulse { animation: glowPulse 2s ease-in-out infinite; }
        .animate-glow-pulse-delayed { animation: glowPulseDelayed 2s ease-in-out infinite 0.5s; }
        .animate-logo-float { animation: logoFloat 2s ease-in-out infinite; }
        .animate-logo-rotate { animation: logoRotate 4s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 1.2s ease-in-out infinite; }
        .animate-fade-pulse { animation: fadePulse 1.5s ease-in-out infinite; }
        .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
      `}</style>
    </div>
  )
}
