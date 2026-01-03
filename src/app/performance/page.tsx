"use client"

import { useEffect, useRef } from "react"
import { Users, Clock, Shield, Rocket, HeartHandshake, Code } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PerformancePage() {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power2.out" },
      )

      const rows = rowsRef.current?.querySelectorAll(".perf-row") || []
      gsap.fromTo(
        rows,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rowsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-100 rounded-full opacity-40 blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-4 shadow-lg shadow-teal-500/25">
            開発アプローチの違い
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4">私たちが選ばれる理由</h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg">
            10年以上の開発経験で培ったノウハウと、お客様に寄り添う姿勢。<br className="hidden sm:block" />
            BlackPrince株式会社は従来の開発会社とは異なるアプローチでプロジェクトを成功に導きます。
          </p>
        </div>

        <div ref={rowsRef} className="space-y-16 md:space-y-28">
          {/* Row 1: Communication */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate-100 rounded-xl flex-shrink-0">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-1">従来の開発会社</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-[374px]">
                    専門用語が多く、進捗報告が不透明。お客様が置いてけぼりになりがち
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-slate-300 font-bold text-xl">VS</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex-shrink-0 shadow-lg shadow-teal-500/25">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-1">明瞭なコミュニケーション</h3>
                  <p className="text-slate-600 text-sm md:text-base max-w-[374px] md:ml-auto">
                    分かりやすい説明と定期的な進捗報告。はじめての方でも安心してお任せいただけます
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Support */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate-100 rounded-xl flex-shrink-0">
                  <Clock className="w-7 h-7 md:w-8 md:h-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-1">部分的なサポート</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-[374px]">
                    開発のみで終了。運用・保守は別会社に依頼する必要があり、引き継ぎに手間がかかる
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-slate-300 font-bold text-xl">VS</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex-shrink-0 shadow-lg shadow-teal-500/25">
                  <Clock className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-1">ワンストップサポート</h3>
                  <p className="text-slate-600 text-sm md:text-base max-w-[374px] md:ml-auto">
                    企画・設計から開発、運用・保守まで一貫してサポート。長期的なパートナーとして伴走します
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Quality */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate-100 rounded-xl flex-shrink-0">
                  <Shield className="w-7 h-7 md:w-8 md:h-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-1">品質のバラつき</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-[374px]">
                    担当者によって品質が変わる。納品後に問題が発覚することも
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-slate-300 font-bold text-xl">VS</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex-shrink-0 shadow-lg shadow-teal-500/25">
                  <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-1">安定した高品質</h3>
                  <p className="text-slate-600 text-sm md:text-base max-w-[374px] md:ml-auto">
                    10年以上の経験で培った品質管理体制。堅牢で使いやすいシステムをお約束します
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Speed */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate-100 rounded-xl flex-shrink-0">
                  <Rocket className="w-7 h-7 md:w-8 md:h-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-1">長い開発期間</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-[374px]">
                    要件定義だけで数ヶ月。ビジネスチャンスを逃してしまうことも
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-slate-300 font-bold text-xl">VS</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex-shrink-0 shadow-lg shadow-teal-500/25">
                  <Rocket className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-1">迅速な対応</h3>
                  <p className="text-slate-600 text-sm md:text-base max-w-[374px] md:ml-auto">
                    豊富なノウハウで素早く着手。お客様のビジネススピードに合わせた開発を実現します
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 5: Relationship */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate-100 rounded-xl flex-shrink-0">
                  <HeartHandshake className="w-7 h-7 md:w-8 md:h-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-1">単発の取引関係</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-[374px]">
                    プロジェクトごとの関係。ビジネス理解が浅く、毎回説明が必要
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-slate-300 font-bold text-xl">VS</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex-shrink-0 shadow-lg shadow-teal-500/25">
                  <HeartHandshake className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-1">長期的なパートナーシップ</h3>
                  <p className="text-slate-600 text-sm md:text-base max-w-[374px] md:ml-auto">
                    お客様の事業を深く理解し、成長に貢献。多くの企業様に継続してご依頼いただいています
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 6: Technology */}
          <div className="perf-row grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate-100 rounded-xl flex-shrink-0">
                  <Code className="w-7 h-7 md:w-8 md:h-8 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-700 mb-1">限られた技術領域</h3>
                  <p className="text-slate-500 text-sm md:text-base max-w-[374px]">
                    得意分野が限定的。複合的なプロジェクトでは複数の会社との調整が必要
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex px-4 justify-center">
              <span className="text-slate-300 font-bold text-xl">VS</span>
            </div>

            <div className="flex-1">
              <div className="flex items-start md:items-center gap-4 md:flex-row-reverse p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex-shrink-0 shadow-lg shadow-teal-500/25">
                  <Code className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-1">幅広い技術スタック</h3>
                  <p className="text-slate-600 text-sm md:text-base max-w-[374px] md:ml-auto">
                    業務システム、Webアプリ、モバイル、ECサイト、SaaS開発まで。ニーズに応じた柔軟な対応が可能
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
