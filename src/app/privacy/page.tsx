"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Eye, Lock, UserCheck, FileText, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function PrivacyPage() {
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
              プライバシーポリシー
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              ＢｌａｃｋＰｒｉｎｃｅ株式会社 個人情報保護方針
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              お客様の個人情報を大切に保護し、安心してご利用いただけるよう努めています
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
          <div ref={contentRef} className="space-y-8">
            
            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Shield className="text-[#00c7f1] mr-3" size={24} />
                <h2 className="text-2xl font-bold text-[#134a8b]">個人情報の取り扱いについて</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                ＢｌａｃｋＰｒｉｎｃｅ株式会社（以下「当社」）は、Webサイトの運営にあたり、
                お客様の個人情報を適切に取り扱うことが重要であると認識し、以下の方針に基づき管理いたします。
                お客様に安心してご利用いただけるよう、個人情報の保護に努めてまいります。
              </p>
            </div>

            {/* Section 1: Information Collection */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#134a8b] mb-6 flex items-center">
                <Eye className="text-[#00c7f1] mr-3" size={20} />
                1. 個人情報の取得について
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  当社は、Webサイトの利用者から以下の情報を取得する場合があります：
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#00c7f1] mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>お名前、メールアドレス、電話番号などの連絡先情報</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#00c7f1] mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>お問い合わせ内容や履歴</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#00c7f1] mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Webサイトのアクセスログ、ブラウザ情報、IPアドレス</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 text-sm bg-blue-50 p-4 rounded-lg">
                  <strong>重要：</strong>取得する個人情報は、利用目的に必要な範囲に限らせていただきます。
                </p>
              </div>
            </div>

            {/* Section 2: Usage Purpose */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#134a8b] mb-6 flex items-center">
                <FileText className="text-[#00c7f1] mr-3" size={20} />
                2. 利用目的について
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  取得した個人情報は、以下の目的で利用いたします：
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">お客様サポート</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• お問い合わせやご相談への対応</li>
                      <li>• サービスや情報の提供</li>
                      <li>• 必要な連絡や通知</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">サービス改善</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Webサイトの運営・改善</li>
                      <li>• アクセス解析</li>
                      <li>• ユーザー体験の向上</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Third Party Disclosure */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#134a8b] mb-6 flex items-center">
                <UserCheck className="text-[#00c7f1] mr-3" size={20} />
                3. 第三者提供について
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  取得した個人情報は、次の場合を除き第三者に提供いたしません：
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#00c7f1] mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>お客様の同意がある場合</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#00c7f1] mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>法令に基づく場合</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#00c7f1] mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>業務委託先に必要な範囲で提供する場合（委託先には適切な管理を義務付けます）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Security */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#134a8b] mb-6 flex items-center">
                <Lock className="text-[#00c7f1] mr-3" size={20} />
                4. 安全管理について
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  当社は、お客様の個人情報の漏洩・滅失・毀損を防止するため、
                  以下の措置を講じています：
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">技術的安全管理措置</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 暗号化による通信保護</li>
                      <li>• アクセス制御の実装</li>
                      <li>• 定期的なセキュリティ更新</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">組織的安全管理措置</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 従業員への教育・研修</li>
                      <li>• アクセス権限の管理</li>
                      <li>• 定期的な監査・点検</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Rights */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#134a8b] mb-6 flex items-center">
                <AlertCircle className="text-[#00c7f1] mr-3" size={20} />
                5. お客様の権利について
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  お客様は、ご自身の個人情報について、以下の権利をお持ちです：
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span><strong>開示請求：</strong>保有する個人情報の開示を請求できます</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span><strong>訂正・削除請求：</strong>個人情報の訂正や削除を請求できます</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span><strong>利用停止請求：</strong>個人情報の利用停止を請求できます</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 text-sm bg-blue-50 p-4 rounded-lg">
                  <strong>ご注意：</strong>請求があった場合は、適切に対応いたします。詳細については、お問い合わせください。
                </p>
              </div>
            </div>

            {/* Section 6: Compliance */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#134a8b] mb-6 flex items-center">
                <Shield className="text-[#00c7f1] mr-3" size={20} />
                6. 法令遵守と継続的改善
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  当社は、個人情報保護法および関連法令、ガイドラインを遵守し、
                  運用体制を継続的に改善してまいります。
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">取り組み内容</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      個人情報保護法の遵守
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      関連法令・ガイドラインの遵守
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      定期的な見直しと改善
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00c7f1] rounded-full mr-3"></span>
                      従業員への継続的な教育
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-[#134a8b] to-[#00c7f1] rounded-xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">ご不明な点がございましたら</h3>
              <p className="mb-4">
                個人情報の取り扱いについてご不明な点やご質問がございましたら、
                お気軽にお問い合わせください。
              </p>
              <Link
                href="/#inquiry"
                className="inline-flex items-center justify-center rounded-sm bg-white text-[#134a8b] px-6 py-3 font-semibold hover:bg-gray-100 transition-colors duration-300"
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
