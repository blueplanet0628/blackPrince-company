"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Heart, Users, Lightbulb } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function VisionPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)
  const goalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children || [],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
      )
      gsap.fromTo(
        principlesRef.current?.querySelectorAll(".principle-card") || [],
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: principlesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
      gsap.fromTo(
        goalRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: goalRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
      gsap.to(".floating-element", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-30 floating-element" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-100 rounded-full opacity-40 floating-element" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-100 rounded-full opacity-25 floating-element" />
      <div className="absolute top-1/3 left-10 w-20 h-20 bg-green-100 rounded-full opacity-20 floating-element" />
      <div className="absolute bottom-1/3 right-10 w-28 h-28 bg-yellow-100 rounded-full opacity-15 floating-element" />
      
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div ref={heroRef} className="max-w-full mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-4 shadow-lg shadow-teal-500/25">
            ✨ VISION
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6 text-balance">
            想いが正しく伝わり、<br className="hidden sm:block" />人と人が自然につながるWebの未来を創る。
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-pretty">
            私たちは、技術そのものではなく「想いをつなぐこと」に価値があると考えています。
            誰にとっても分かりやすく、心地よく、長く使われ続けるWeb体験を通じて、
            人・企業・社会をつなぎ、信頼が循環する未来の実現を目指します。
          </p>
        </div>
      </section>

      {/* Value セクション */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-4 shadow-lg shadow-teal-500/25">VALUE</span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">私たちが大切にする価値観</h2>
          </div>
          <div ref={principlesRef} className="grid md:grid-cols-3 gap-8">

            <div className="principle-card bg-gradient-to-br from-white to-teal-50 rounded-2xl p-8 shadow-sm border border-teal-100 hover:shadow-xl hover:shadow-teal-100 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-teal-500/25">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">想いを大切に</h3>
              <p className="text-slate-600 leading-relaxed">
                お客様の想いを深く理解し、その想いが正しく届くWebサイトを創ります。技術は手段であり、目的は「伝える」こと。
              </p>
            </div>

            <div className="principle-card bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-8 shadow-sm border border-cyan-100 hover:shadow-xl hover:shadow-cyan-100 hover:border-cyan-200 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/25">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">つながりを生む</h3>
              <p className="text-slate-600 leading-relaxed">
                人と人、企業と社会を自然につなげるWeb体験を提供。信頼が循環する関係性を大切にしています。
              </p>
            </div>

            <div className="principle-card bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-sm border border-emerald-100 hover:shadow-xl hover:shadow-emerald-100 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/25">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">長く愛される</h3>
              <p className="text-slate-600 leading-relaxed">
                誰にとっても分かりやすく、心地よく、長く使われ続けるWebサイト。一時的なトレンドより持続する価値を。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission セクション */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div ref={goalRef} className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-6 shadow-lg shadow-teal-500/25">MISSION</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">私たちの使命</h2>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent mb-8 text-balance leading-relaxed">
            「お客様の想いに寄り添い、<br className="hidden sm:block" />
            Webを通じて信頼と価値を届けること。」
            </blockquote>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty max-w-2xl mx-auto">
            10年以上の経験と技術力を活かし、企画から運用まで一貫したサポートを提供。
            お客様のビジネス成長に貢献し、長期的なパートナーとして共に歩み続けます。
            </p>
        </div>
      </section>

      {/* 締めのメッセージ */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-teal-400" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-teal-400" />
          </div>
          <p className="text-xl bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-clip-text text-transparent font-medium mb-4">
            想いが正しく伝わり、人と人が自然につながる。
          </p>
          <p className="text-slate-500 italic">
            ── そんなWebの未来を、私たちは創り続けます。
          </p>
        </div>
      </section>
    </div>
  )
}
