"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"
import { Sparkles, Zap, Code, Users, Shield, Rocket, Heart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

// Dynamically import 3D scene
const AboutScene3D = dynamic(() => import("@/components/AboutScene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#e8f5e9] via-[#e0f2f1] to-[#e3f2fd]" />
  ),
})

export default function WhyChooseUsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Sub heading animation
      gsap.fromTo(
        subHeadingRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subHeadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Content paragraphs animation
      gsap.fromTo(
        contentRef.current?.querySelectorAll(".content-item") || [],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Features animation
      gsap.fromTo(
        featuresRef.current?.querySelectorAll(".feature-card") || [],
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Rocket,
      title: "10年以上の実績",
      description: "多種多様なWeb・システム開発プロジェクトを手がけてきた豊富な経験",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      icon: Heart,
      title: "一貫したサポート",
      description: "企画・設計から開発、運用・保守まで、ワンストップでご支援",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      icon: Zap,
      title: "明瞭なコミュニケーション",
      description: "迅速かつ丁寧な対応、分かりやすい説明を心がけています",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      icon: Shield,
      title: "高品質な成果物",
      description: "長年の開発経験で培ったノウハウにより、常に高品質をご提供",
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      icon: Code,
      title: "幅広い開発領域",
      description: "業務システム、Webアプリ、モバイルアプリ、ECサイト、SaaS開発など",
      gradient: "from-violet-400 to-purple-400"
    },
    {
      icon: Users,
      title: "継続的なパートナーシップ",
      description: "多くのお客様に継続してご依頼いただいています",
      gradient: "from-amber-400 to-orange-400"
    },
  ]

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <AboutScene3D />
      </div>

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60 backdrop-blur-[2px]" />

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
        {/* Main heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-6 shadow-lg shadow-teal-500/25">
            <Sparkles size={16} />
            WHY CHOOSE US
          </span>
          <h1 
            ref={headingRef} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              お互いの思いに寄り添い、
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              素晴らしいプロジェクト
            </span>
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              を共に創り上げる
            </span>
          </h1>
          <h2 
            ref={subHeadingRef}
            className="text-xl sm:text-2xl text-slate-500 font-light"
          >
            会社概要 — BlackPrince株式会社
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left side - Company description */}
          <div ref={contentRef} className="space-y-6">
            <div className="content-item bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <span className="text-teal-600 font-semibold">BlackPrince株式会社</span>は、
                10年以上にわたり多種多様なWeb・システム開発プロジェクトを手がけてきた開発会社です。
                豊富な経験と確かな技術力を強みに、企画・設計から開発、運用・保守まで、
                一貫したサポートをご提供しています。
              </p>
            </div>

            <div className="content-item bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                お客様のビジネス課題に真摯に向き合い、長期的な成長に貢献できる、
                <span className="text-teal-600 font-semibold">堅牢で使いやすいシステムの構築</span>を目指しています。
                迅速かつ丁寧な対応、そして明瞭なコミュニケーションを大切にしており、
                これまで多くの企業様から高い評価と信頼をいただいてまいりました。
              </p>
            </div>

            <div className="content-item bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                業務システム、Webアプリケーション、モバイルアプリ、ECサイト、CMS構築、SaaS開発など、
                <span className="text-teal-600 font-semibold">幅広い領域での開発実績</span>を有しています。
                長年の開発経験で培ってきたノウハウにより、常に高品質な成果物をご提供できる点が当社の大きな強みです。
              </p>
            </div>

            <div className="content-item bg-gradient-to-r from-teal-50 to-cyan-50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-teal-100 shadow-xl shadow-teal-200/30">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                今後も、お客様の事業発展に貢献できるよう、誠心誠意取り組んでまいります。
                ご相談やご質問がございましたら、どうぞお気軽にお問い合わせください。
              </p>
            </div>
          </div>

          {/* Right side - Features grid */}
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card bg-white/80 backdrop-blur-xl rounded-2xl p-5 border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-slate-700 font-semibold text-lg mb-2 group-hover:text-teal-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('inquiry');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold text-lg rounded-full shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 transform hover:scale-105"
          >
            お問い合わせはこちら
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-teal-300" />
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-teal-300" />
        </div>
      </div>
    </div>
  )
}
