"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Calendar, User, Building, Globe, Briefcase, TrendingUp, CheckCircle, Hash, ArrowRight, Sparkles, Code, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

gsap.registerPlugin(ScrollTrigger)

// Dynamically import 3D scene
const CompanyScene3D = dynamic(() => import("@/components/CompanyScene3D"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#e8f5e9] via-[#e0f2f1] to-[#e3f2fd]" />
  ),
})

export default function CompanyPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each section on scroll
      sectionsRef.current.forEach((section, i) => {
        if (!section) return
        gsap.fromTo(
          section.querySelectorAll(".animate-item"),
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* 3D Background */}
      <CompanyScene3D />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div ref={addToRefs} className="text-center px-6 max-w-4xl mx-auto">
          <div className="animate-item">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-sm px-5 py-2 text-sm font-medium text-teal-700 mb-6 border border-teal-200/50">
              <Sparkles size={16} />
              COMPANY PROFILE
            </span>
          </div>
          <h1 className="animate-item text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            BlackPrince
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl">株式会社</span>
          </h1>
          <p className="animate-item text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed">
            テクノロジーの力で、<br className="sm:hidden" />
            ビジネスの未来を創造する
          </p>
          <div className="animate-item flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-4 text-white font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105"
            >
              お問い合わせ
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/60 backdrop-blur-sm px-8 py-4 text-slate-700 font-semibold border border-slate-200 hover:bg-white/80 transition-all duration-300"
            >
              制作実績を見る
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div ref={addToRefs} className="max-w-5xl mx-auto">
          <div className="animate-item text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">ABOUT US</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mt-3">
              会社概要
            </h2>
          </div>
          
          <div className="animate-item bg-white/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 border border-white/80">
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
              BlackPrince株式会社は、2023年8月に東京都新宿区に設立されたIT企業です。
              Webサイト・ECサイトの企画・制作から、システム開発、アプリケーション開発まで、
              幅広いデジタルソリューションをワンストップでご提供しています。
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building, label: "商号", value: "BlackPrince株式会社" },
                { icon: Hash, label: "法人番号", value: "0111-01-104173" },
                { icon: MapPin, label: "本店所在地", value: "東京都新宿区大久保二丁目25番26号" },
                { icon: Calendar, label: "設立", value: "2023年8月28日" },
                { icon: User, label: "代表取締役", value: "片田 健太 / 山本 和隆" },
                { icon: Briefcase, label: "資本金", value: "100万円" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-700 font-medium mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="animate-item text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">OUR SERVICES</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mt-3">
              事業内容
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web・IT事業 */}
            <div className="animate-item bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-white/80 hover:shadow-2xl hover:shadow-teal-200/30 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Web・IT事業</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Webサイトの企画、制作、販売、運営及び管理",
                  "EC（電子商取引）サイトの企画・制作・運営",
                  "コンピュータシステムの企画、開発、販売及び保守",
                  "各種アプリケーションソフトの企画・制作・販売",
                  "インターネットを利用した各種情報提供サービス",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-teal-500 flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* コンサルティング事業 */}
            <div className="animate-item bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-white/80 hover:shadow-2xl hover:shadow-cyan-200/30 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">コンサルティング事業</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  "経営コンサルティング業務",
                  "各種マーケティングリサーチ業務",
                  "海外への投資及び事業進出に関するコンサルティング",
                  "企業の営業に関するコンサルティング業務",
                  "店舗の企画、プロデュース及びコンサルティング",
                  "人材育成に関するコンサルティング業務",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-500 flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6">
        <div ref={addToRefs} className="max-w-6xl mx-auto">
          <div className="animate-item text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">WHY CHOOSE US</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mt-3">
              選ばれる理由
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "迅速対応", desc: "スピーディーなコミュニケーションで安心のお取引", color: "from-amber-400 to-orange-400" },
              { icon: Code, title: "最新技術", desc: "React・Next.js・TypeScript等モダン技術に対応", color: "from-teal-400 to-cyan-400" },
              { icon: Users, title: "長期パートナー", desc: "納品後も継続的にサポート・改善提案", color: "from-blue-400 to-indigo-400" },
              { icon: Shield, title: "高品質", desc: "SEO対策・レスポンシブデザイン標準対応", color: "from-emerald-400 to-teal-400" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="animate-item bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-white/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Notice Section */}
      <section className="py-16 px-6">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="animate-item bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 text-center">
            <h3 className="text-lg font-semibold text-slate-700 mb-2 flex items-center justify-center gap-2">
              <Globe className="text-teal-500" size={18} />
              公告方法
            </h3>
            <p className="text-slate-500 mb-2">電子公告により行う</p>
            <a 
              href="https://establish.moneyforward.com/announcement/789887" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 text-sm underline underline-offset-2 break-all"
            >
              https://establish.moneyforward.com/announcement/789887
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div ref={addToRefs} className="max-w-4xl mx-auto">
          <div className="animate-item relative overflow-hidden bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-3xl p-10 sm:p-16 text-center shadow-2xl shadow-teal-500/30">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Web制作・システム開発の<br className="sm:hidden" />ご相談はお気軽に
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                御社のビジネス課題をお聞かせください。<br />
                最適なソリューションをご提案いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-teal-600 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  お問い合わせはこちら
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <div ref={addToRefs}>
          <p className="animate-item text-slate-500 text-sm">
            © BlackPrince株式会社
          </p>
          <p className="animate-item text-slate-400 text-xs mt-2">
            登記情報に基づく会社概要（令和6年8月登記）
          </p>
          <div className="animate-item mt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/60 backdrop-blur-sm px-6 py-3 text-slate-600 font-medium border border-slate-200 hover:bg-white/80 transition-all duration-300"
            >
              ← ホームに戻る
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
