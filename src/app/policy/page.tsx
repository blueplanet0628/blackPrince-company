"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power2.out" 
        }
      )

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#134a8b] to-[#00c7f1]">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div ref={headerRef} className="text-center text-white">
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white mb-4">
              利用規約
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              ＢｌａｃｋＰｒｉｎｃｅ株式会社 利用規約
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              安心してご利用いただくための利用規約をご確認ください
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
          <div ref={contentRef} className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-[#00c7f1] p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                ＢｌａｃｋＰｒｉｎｃｅ株式会社（以下「当社」）が運営するWeb制作サービス（以下「本サービス」）をご利用いただき、ありがとうございます。
                本規約は、お客様に安心してご利用いただくために定められたものです。ご利用前に必ずお読みください。
              </p>
            </div>

            {/* Article 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#134a8b] mb-4 flex items-center">
                <span className="bg-[#00c7f1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                適用範囲
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  本規約は、ＢｌａｃｋＰｒｉｎｃｅ株式会社が提供する以下のサービスに適用されます：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Webサイト制作・デザイン</li>
                  <li>システム開発・プログラミング</li>
                  <li>サイト運用サポート・保守管理</li>
                  <li>SEO対策・マーケティング支援</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  本規約に定めのない事項については、当社が別途定めるルールや法令に従います。
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#134a8b] mb-4 flex items-center">
                <span className="bg-[#00c7f1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                ご利用いただく際のお約束
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  お客様には、以下の点をご理解・ご協力いただきます：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>当社のサービスを第三者に迷惑をかける目的でご利用いただくことはできません</li>
                  <li>不正アクセス、ウイルスのアップロード、著作権侵害など法令違反や他者権利侵害行為は禁止いたします</li>
                  <li>当社が提供したデザイン、コード、コンテンツは当社に著作権が帰属します。許可なく転載・配布することはできません</li>
                </ul>
              </div>
            </div>

            {/* Article 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#134a8b] mb-4 flex items-center">
                <span className="bg-[#00c7f1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                免責事項
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  以下の場合、当社は責任を負いかねます：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>当社が提供したWebサイト・コンテンツの利用による損害</li>
                  <li>お客様のご利用により発生したデータ損失やサーバー障害、第三者とのトラブル</li>
                  <li>本サービスの提供中断、変更、停止による損害</li>
                </ul>
                <p className="text-gray-700 mt-4 text-sm">
                  ※ ただし、当社の故意または重大な過失による場合を除きます
                </p>
              </div>
            </div>

            {/* Article 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#134a8b] mb-4 flex items-center">
                <span className="bg-[#00c7f1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                制作物の権利について
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  制作したWebサイト・プログラム・デザイン等の権利について：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>原則として、制作物の著作権は当社に帰属します</li>
                  <li>お客様との契約により、特定の制作物の利用権を譲渡する場合があります</li>
                  <li>利用権の範囲は、個別の契約書に明記いたします</li>
                </ul>
              </div>
            </div>

            {/* Article 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#134a8b] mb-4 flex items-center">
                <span className="bg-[#00c7f1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                禁止行為
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4 font-medium">
                  以下の行為は禁止いたします：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>本サービスを利用した違法行為、犯罪行為</li>
                  <li>他者の知的財産権・肖像権を侵害する行為</li>
                  <li>本サービスの運営を妨げる行為、または妨害を試みる行為</li>
                  <li>虚偽情報の登録や不正利用</li>
                </ul>
              </div>
            </div>

            {/* Article 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#134a8b] mb-4 flex items-center">
                <span className="bg-[#00c7f1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                契約解除・サービス停止
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  以下の場合、当社は契約を解除またはサービス提供を停止できるものとします：
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>お客様が本規約に違反した場合</li>
                  <li>その他、当社が必要と判断した場合</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  サービス停止により発生した損害について、当社は一切責任を負いません。
                </p>
              </div>
            </div>

            {/* Article 7 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#134a8b] mb-4 flex items-center">
                <span className="bg-[#00c7f1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                規約の変更
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700">
                  当社は必要に応じて本規約を改定できます。改定後は、本サービス上に掲示した時点で効力を生じます。
                  重要な変更がある場合は、事前にお知らせいたします。
                </p>
              </div>
            </div>

            {/* Article 8 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#134a8b] mb-4 flex items-center">
                <span className="bg-[#00c7f1] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
                準拠法・裁判管轄
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700">
                  本規約は日本法に準拠します。本サービスに関する紛争は、長崎地方裁判所を専属的合意管轄とします。
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#134a8b] to-[#00c7f1] rounded-lg p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">ご不明な点がございましたら</h3>
              <p className="mb-4">
                本規約についてご不明な点やご質問がございましたら、お気軽にお問い合わせください。
              </p>
              <Link
                href="/#inquiry"
                className="inline-flex items-center justify-center rounded-sm bg-white text-[#134a8b] px-6 py-3 font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                お問い合わせはこちら
              </Link>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-200">
              <p>© ＢｌａｃｋＰｒｉｎｃｅ株式会社</p>
              <p className="mt-2">最終更新日: 2022年3月</p>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-[#00c7f1] px-6 py-3 text-white font-semibold hover:bg-[#134a8b] transition-colors duration-300"
          >
            ← ホームに戻る
          </Link>
        </div>
      </section>
    </div>
  )
}
