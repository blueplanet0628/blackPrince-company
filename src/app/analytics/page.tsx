"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AnalyticsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const textBlockRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power2.out" },
      )

      gsap.fromTo(
        textBlockRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textBlockRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 28, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div ref={heroRef} className="text-center mb-10">
          <span className="inline-block rounded-full bg-[#00c7f1] px-4 py-2 text-sm font-bold text-white mb-2">
            Google アナリティクスによる分析
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">インサイトを成長につなげる</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pr-8 self-stretch order-1 lg:order-none">
            <div ref={imageRef} className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="relative w-full aspect-[3/4] lg:h-full">
                <Image
                  src="/Analytics.jpg"
                  alt="Google アナリティクス"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <div ref={textBlockRef} className="border-2 border-blue-200 rounded-lg p-6 bg-white/80 backdrop-blur">
              <p className="text-slate-700 mb-4 text-pretty">
                訪問者の傾向を分析することで、ユーザーが本当に求めているものを明らかにし、効果的なページやそうでないページを特定し、ユーザー満足度とトラフィックの成長を高める改善を行うことができます。
              </p>
              <p className="text-slate-700 mb-4 text-pretty">
                実際には、売上につながりやすいキーワードを分析し、訪問者がどこから来ているのか、どの時間帯が多いのか、製品やサービスの需要が季節によってどう変化するのかを把握します。
              </p>
              <p className="text-slate-700 mb-4 text-pretty">
                これは実店舗の運営に似ています。お客様の動きを観察することで、商品の配置、よく売れる商品、顧客層を理解できます。この情報がなければ、売上を伸ばすために何を変えればよいのか分かりません。同じことがオンラインにも当てはまります。適切なウェブサイト分析がなければ、最適化はできません。
              </p>
              <p className="text-slate-700 text-pretty">
                そのため、私たちは毎週定期的に分析を行い、改善を実施して、常にウェブサイトのパフォーマンスを最適に保っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
