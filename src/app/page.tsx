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
import StatsPage from "./stats/page"
import Testimonials from "./testimonials/page"
import SuccessfulProjectsPage from "./successful-projects/page"
import WhyChooseUsPage from "./choose/page"
import Footer from "./footer/page"
import InquiryPage from "./inquiry/page"
import Image from "next/image"
import Loading from "./loading"
import SeoSemPage from "./seo-sem/page"
import dynamic from "next/dynamic"

// Dynamically import 3D scene to avoid SSR issues
const HeroScene3D = dynamic(() => import("@/components/HeroScene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#134a8b] to-[#00c7f1]/50" />
  ),
})

// Dynamically import water wave effect
const WaterWaveEffect = dynamic(() => import("@/components/WaterWaveEffect"), {
  ssr: false,
})
import AnalyticsPage from "./analytics/page"
import PricePage from "./price/page"
import GlobalPortfolio from "./portfolio_global/page"
import CeoPage from "./ceo/page"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const HERO_BG_URL = "/japan.jpg"
  const sectionRef = useRef<HTMLElement | null>(null)
  const slantRef = useRef<HTMLDivElement | null>(null)
  const bgImageRef = useRef<HTMLDivElement | null>(null)
  const cyanOverlayRef = useRef<HTMLDivElement | null>(null)
  const gradientRef = useRef<HTMLDivElement | null>(null)

  const badgeRef = useRef<HTMLSpanElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const ctasRef = useRef<HTMLDivElement | null>(null)
  const approachSectionRef = useRef<HTMLElement | null>(null)
  const approachTextRef = useRef<HTMLDivElement | null>(null)
  const approachListRef = useRef<HTMLUListElement | null>(null)
  const approachImageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.timeScale(0.6)

      tl.from(
        bgImageRef.current,
        {
          scale: 1.15,
          rotation: 2,
          duration: 1.8,
          transformOrigin: "center",
          ease: "power2.out",
        },
        0,
      )

      tl.from(
        slantRef.current,
        {
          xPercent: -100,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        0.2,
      )

      tl.from(
        badgeRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotation: -5,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        0.4,
      )

      tl.from(
        titleRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 1.0,
          ease: "power3.out",
        },
        0.6,
      )

      tl.from(
        paragraphRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        0.8,
      )

      if (ctasRef.current) {
        tl.from(
          Array.from(ctasRef.current.children),
          {
            y: 30,
            opacity: 0,
            scale: 0.9,
            stagger: 0.15,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          1.0,
        )
      }



      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set(bgImageRef.current, {
            yPercent: progress * 8,
            scale: 1.06 - progress * 0.03,
          })
          gsap.set(gradientRef.current, {
            yPercent: progress * 8,
          })
          gsap.set(cyanOverlayRef.current, {
            yPercent: progress * 20,
          })


        },
      })
      if (approachSectionRef.current) {
        gsap.fromTo(
          approachTextRef.current?.children || [],
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: approachTextRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
        gsap.fromTo(
          approachListRef.current?.querySelectorAll("li") || [],
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: approachListRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
        gsap.fromTo(
          approachImageRef.current,
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: approachImageRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      return () => {
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
        className="relative isolate min-h-[75vh] sm:min-h-[100vh] flex items-center overflow-hidden"
      >
        {/* 3D Background Scene */}
        <div className="absolute inset-0 z-0">
          <HeroScene3D />
        </div>

        <div
          aria-hidden
          ref={slantRef}
          className="absolute left-0 top-0 hidden xl:block h-full w-[50%] bg-[#0a1628]/60 z-0 pointer-events-none"
          style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 10vw) 100%, 0 100%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-[#0a1628]/40 z-0 xl:hidden" />
        <div aria-hidden className="absolute inset-0 -z-10 hidden">
          <div
            ref={bgImageRef}
            className="absolute left-0 right-0 -top-[20%] -bottom-[20%] bg-[length:cover] bg-center will-change-transform transform-gpu"
            style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
          />

          <div
            ref={gradientRef}
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-transparent will-change-transform"
          />

          <div
            ref={cyanOverlayRef}
            className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#00c7f1]/20 via-transparent to-[#134a8b]/30 will-change-transform"
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 relative z-[1]">
          <div className="max-w-2xl md:max-w-3xl">
            {/* <span
              ref={badgeRef}
              className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur"
            >
              数日で公開
            </span> */}

            <h1
              ref={titleRef}
              className="mt-4 text-md sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow"
            >
              想いを共有し、卓越したプロジェクトを共に創る開発パートナー
            </h1>

            <p ref={paragraphRef} className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90 max-w-prose">
              BlackPrince株式会社は、10年以上にわたり高品質なWeb・システム開発を手がけてきた開発会社です。企画・設計から開発、運用・保守までを一貫して支援し、お客様それぞれのビジネス目標に寄り添った最適なソリューションをご提供しています。
              明確なコミュニケーション、確かな技術力、そして協創の姿勢を大切にし、長期的な成長につながる堅牢で使いやすいシステムを構築します。
            </p>

            <div ref={ctasRef} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('inquiry');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center rounded-sm bg-[#1abddd] px-5 py-4 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#15aecb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1abddd] transition-colors"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="stats"><StatsPage /></section>
      <section id="why-choose-us"><WhyChooseUsPage /></section>
      <section id="about"><AboutPage /></section>
      <section id="performance"><PerformancePage /></section>
      {/* <section id="seo-sem"><SeoSemPage /></section> */}
      {/* <section id="analytics"><AnalyticsPage /></section> */}
      <section id="vision"><VisionPage /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="portfolio_global"><GlobalPortfolio /></section>
      <section id="successful-projects"><SuccessfulProjectsPage /></section>
      {/* <section id="price"><PricePage /></section> */}
      <section id="testimonials"><Testimonials /></section>
      <section id="ceo"><CeoPage /></section>
      <section id="inquiry"><InquiryPage /></section>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 rounded-sm bg-[#00c7f1] text-white shadow-lg hover:shadow-xl w-12 h-12 flex items-center justify-center transition transform hover:scale-105"
      >
        ↑
      </button>
      <Footer />
    </>
  )
}