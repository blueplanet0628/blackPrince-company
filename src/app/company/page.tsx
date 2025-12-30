"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Calendar, User, Building, Heart, Users, Code, Shield } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function CompanyPage() {
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
              会社概要
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              ＢｌａｃｋＰｒｉｎｃｅ株式会社 会社概要
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              「人にやさしいWeb」をコンセプトに、お客様の想いを形にするWeb制作会社です
            </p>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div ref={contentRef} className="space-y-12">
            
            {/* Company Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Heart className="text-[#00c7f1] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-[#134a8b]">BlackPrince株式会社について</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                ＢｌａｃｋＰｒｉｎｃｅ株式会社は、2022年3月に設立されました。
                お客様を家族のように大切にし、長期的なパートナーとして寄り添うことを理念としています。
              </p>
            </div>

            {/* Company Details */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic Information */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#134a8b] mb-6 flex items-center">
                  <Building className="text-[#00c7f1] mr-3" size={20} />
                  基本情報
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building className="text-gray-400 mr-3 mt-1" size={16} />
                    <div>
                      <p className="font-medium text-gray-900">会社名</p>
                      <p className="text-gray-600">ＢｌａｃｋＰｒｉｎｃｅ株式会社</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-gray-400 mr-3 mt-1" size={16} />
                    <div>
                      <p className="font-medium text-gray-900">所在地</p>
                      <p className="text-gray-600">埼玉県さいたま市北区日進町３丁目１３５−３<br />細野ビル 202</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="text-gray-400 mr-3 mt-1" size={16} />
                    <div>
                      <p className="font-medium text-gray-900">設立</p>
                      <p className="text-gray-600">2022年3月</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <User className="text-gray-400 mr-3 mt-1" size={16} />
                    <div>
                      <p className="font-medium text-gray-900">代表者</p>
                      <p className="text-gray-600">代表取締役 山下浩弥</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Features */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#134a8b] mb-6 flex items-center">
                  <Shield className="text-[#00c7f1] mr-3" size={20} />
                  特徴・強み
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Heart className="text-[#00c7f1] mr-3 mt-1" size={16} />
                    <div>
                      <p className="font-medium text-gray-900">人にやさしいWeb</p>
                      <p className="text-gray-600 text-sm">ユーザー視点でわかりやすく美しいサイト制作</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="text-[#00c7f1] mr-3 mt-1" size={16} />
                    <div>
                      <p className="font-medium text-gray-900">長期的パートナー</p>
                      <p className="text-gray-600 text-sm">制作後の運用・更新も一緒に伴走</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Code className="text-[#00c7f1] mr-3 mt-1" size={16} />
                    <div>
                      <p className="font-medium text-gray-900">最新技術対応</p>
                      <p className="text-gray-600 text-sm">SEOやレスポンシブデザインも標準対応</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#134a8b] mb-6 flex items-center">
                <Code className="text-[#00c7f1] mr-3" size={24} />
                事業内容
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Web制作・デザイン</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      Webサイトの企画・デザイン・構築
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      UI/UX設計・運用サポート
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      ECサイト、不動産管理サイト、求人サイト
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      会員制サイト、マッチングサイト
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      エステサロン、レストランサイト
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      コスメサイト、ポータルサイト
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">システム開発・技術</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      WordPress・React・Next.js開発
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      フロントエンド・バックエンド開発
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      サーバー構築、データベース設計・管理
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      Webシステム開発および保守
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bank Information */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">主要取引銀行</h3>
              <p className="text-gray-600">川口信用金庫</p>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-[#134a8b] to-[#00c7f1] rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">お気軽にお問い合わせください</h3>
              <p className="mb-6 text-lg">
                ご質問やご相談がございましたら、お気軽にお問い合わせください。<br />
                お客様の想いを形にするお手伝いをさせていただきます。
              </p>
              <Link
                href="/#inquiry"
                className="inline-flex items-center justify-center rounded-sm bg-white text-[#134a8b] px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg"
              >
                お問い合わせはこちら
              </Link>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
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
