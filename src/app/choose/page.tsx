"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"

gsap.registerPlugin(ScrollTrigger)

// Dynamically import 3D scene
const AboutScene3D = dynamic(() => import("@/components/AboutScene3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#134a8b]" />
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
      icon: "🏢",
      title: "10年以上の実績",
      description: "多種多様なWeb・システム開発プロジェクトを手がけてきた豊富な経験"
    },
    {
      icon: "🔧",
      title: "一貫したサポート",
      description: "企画・設計から開発、運用・保守まで、ワンストップでご支援"
    },
    {
      icon: "💬",
      title: "明瞭なコミュニケーション",
      description: "迅速かつ丁寧な対応、分かりやすい説明を心がけています"
    },
    {
      icon: "🛡️",
      title: "高品質な成果物",
      description: "長年の開発経験で培ったノウハウにより、常に高品質をご提供"
    },
    {
      icon: "📱",
      title: "幅広い開発領域",
      description: "業務システム、Webアプリ、モバイルアプリ、ECサイト、SaaS開発など"
    },
    {
      icon: "🤝",
      title: "継続的なパートナーシップ",
      description: "多くのお客様に継続してご依頼いただいています"
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

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-28">
        {/* Main heading */}
        <div className="text-center mb-12">
          <h1 
            ref={headingRef} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            お互いの思いに寄り添い、
            <br className="hidden sm:block" />
            <span className="text-[#00c7f1]">素晴らしいプロジェクト</span>を共に創り上げる
          </h1>
          <h2 
            ref={subHeadingRef}
            className="text-xl sm:text-2xl text-white/80 font-light"
          >
            会社概要 — BlackPrince株式会社
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left side - Company description */}
          <div ref={contentRef} className="space-y-6">
            <div className="content-item bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                <span className="text-[#00c7f1] font-semibold">BlackPrince株式会社</span>は、
                10年以上にわたり多種多様なWeb・システム開発プロジェクトを手がけてきた開発会社です。
                豊富な経験と確かな技術力を強みに、企画・設計から開発、運用・保守まで、
                一貫したサポートをご提供しています。
              </p>
            </div>

            <div className="content-item bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                お客様のビジネス課題に真摯に向き合い、長期的な成長に貢献できる、
                <span className="text-[#00c7f1] font-semibold">堅牢で使いやすいシステムの構築</span>を目指しています。
                迅速かつ丁寧な対応、そして明瞭なコミュニケーションを大切にしており、
                これまで多くの企業様から高い評価と信頼をいただいてまいりました。
              </p>
            </div>

            <div className="content-item bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                業務システム、Webアプリケーション、モバイルアプリ、ECサイト、CMS構築、SaaS開発など、
                <span className="text-[#00c7f1] font-semibold">幅広い領域での開発実績</span>を有しています。
                長年の開発経験で培ってきたノウハウにより、常に高品質な成果物をご提供できる点が当社の大きな強みです。
              </p>
            </div>

            <div className="content-item bg-gradient-to-r from-[#00c7f1]/20 to-[#134a8b]/20 backdrop-blur-md rounded-2xl p-6 border border-[#00c7f1]/30">
              <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
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
                className="feature-card bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-[#00c7f1]/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#00c7f1] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('inquiry');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00c7f1] hover:bg-[#00b0d8] text-white font-semibold text-lg rounded-lg shadow-lg shadow-[#00c7f1]/30 hover:shadow-xl hover:shadow-[#00c7f1]/40 transition-all duration-300 transform hover:scale-105"
          >
            お問い合わせはこちら
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
