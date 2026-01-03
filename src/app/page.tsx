"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import "@/app/index.css"

import Navbar from "@/layout/navbar"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AboutPage from "./about/page"
import PerformancePage from "./performance/page"
import Portfolio from "./portfolio/page"
import VisionPage from "./vision/page"
// StatsPage removed - section commented out
import Testimonials from "./testimonials/page"
import WhyChooseUsPage from "./choose/page"
import Footer from "./footer/page"
import InquiryPage from "./inquiry/page"
import dynamic from "next/dynamic"
import CeoPage from "./ceo/page"
import { ArrowRight, ChevronDown } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

// Dynamically import 3D scene to avoid SSR issues
const HeroScene3D = dynamic(() => import("@/components/HeroScene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9] via-[#e0f2f1] to-[#e3f2fd]" />
  ),
})

// Dynamically import water wave effect
const WaterWaveEffect = dynamic(() => import("@/components/WaterWaveEffect"), {
  ssr: false,
})

export default function Home() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const ctasRef = useRef<HTMLDivElement | null>(null)
  const badgeRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.timeScale(0.7)

      tl.from(
        badgeRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        0.3,
      )

      tl.from(
        titleRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.98,
          duration: 1.0,
          ease: "power3.out",
        },
        0.5,
      )

      tl.from(
        paragraphRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        0.7,
      )

      if (ctasRef.current) {
        tl.from(
          Array.from(ctasRef.current.children),
          {
            y: 30,
            opacity: 0,
            scale: 0.95,
            stagger: 0.12,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          0.9,
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCTAHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleCTALeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <>
      <WaterWaveEffect />
      <Navbar />
      <section
        id="home"
        ref={sectionRef as any}
        className="relative isolate min-h-[100vh] flex items-center overflow-hidden"
      >
        {/* 3D Background Scene */}
        <div className="absolute inset-0 z-0">
          <HeroScene3D />
        </div>

        {/* Soft gradient overlay for text readability */}
        <div 
          aria-hidden 
          className="absolute left-0 top-0 hidden xl:block h-full w-[55%] z-0 pointer-events-none"
          style={{ 
            clipPath: "polygon(0 0, 100% 0, calc(100% - 12vw) 100%, 0 100%)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 100%)",
            backdropFilter: "blur(8px)"
          }}
        />
        <div 
          aria-hidden 
          className="absolute inset-0 z-0 xl:hidden"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 100%)",
            backdropFilter: "blur(4px)"
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 relative z-[1]">
          <div className="max-w-2xl md:max-w-3xl">
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-teal-500/30"
            >
              ✨ Web & System Development
            </span>

            <h1
              ref={titleRef}
              className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                想いを共有し、
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                卓越したプロジェクト
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                を共に創る開発パートナー
              </span>
            </h1>

            <p ref={paragraphRef} className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-600 max-w-prose leading-relaxed">
              BlackPrince株式会社は、高品質なWeb・システム開発を手がけてきた開発会社です。
              企画・設計から開発、運用・保守までを一貫して支援し、お客様それぞれのビジネス目標に寄り添った最適なソリューションをご提供しています。
            </p>

            <div ref={ctasRef} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('inquiry');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                お問い合わせ
                <ArrowRight size={18} />
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 backdrop-blur-sm px-7 py-4 text-base font-semibold text-slate-700 border border-slate-200 hover:bg-white/90 transition-all duration-300"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                制作実績を見る
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      <section id="why-choose-us"><WhyChooseUsPage /></section>
      <section id="about"><AboutPage /></section>
      <section id="performance"><PerformancePage /></section>
      <section id="vision"><VisionPage /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="ceo"><CeoPage /></section>
      <section id="inquiry"><InquiryPage /></section>
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        ↑
      </button>
      <Footer />
    </>
  )
}
