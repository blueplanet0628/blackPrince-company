"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SeoSemPage() {
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
        {/* Hero */}
        <div ref={heroRef} className="text-center mb-10">
          <span className="inline-block rounded-full bg-[#00c7f1] px-4 py-2 text-sm font-bold text-white mb-2">
            SEO/SEM について
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">賢いSEOとSEMでトラフィックを伸ばす</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div ref={textBlockRef} className="border-2 border-blue-200 rounded-lg p-6 bg-white/80 backdrop-blur">
              <p className="text-slate-700 mb-4 text-pretty">
                ウェブサイトを分析することはSEOにおいて重要なステップです。訪問者がどこから来ているのか、どのキーワードでサイトを見つけたのか、どのページに注目しているのかを理解することができます。これらの情報を活用してサイトを最適化すれば、より多くのトラフィックを呼び込むことができ、検索結果での順位向上にもつながります。
              </p>
              <p className="text-slate-700 mb-4 text-pretty">
                オーガニックな成長だけでなく、SEM（検索エンジンマーケティング）によって追加のトラフィックを獲得することも可能です。SEMは検索エンジンでの有料広告を利用し、関連する検索語句を使う潜在顧客に確実にリーチする方法です。
              </p>
              <p className="text-slate-700 text-pretty">
                しかし、SEOとSEMの両方は継続的な努力が必要であり、すぐに時間がかかってしまいます。これに多くの時間を費やすと本来のビジネスに集中できなくなる一方、放置してしまうと大きな機会損失につながります。そこで私たちのチームがサポートします。専任の専門家がこれらの戦略を代行し、効率的かつ効果的に成果を実現します。
              </p>
            </div>
          </div>

          <div className="lg:pl-8 self-stretch">
            <div ref={imageRef} className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="relative w-full aspect-[3/4] lg:h-full">
                <Image
                  src="/SEO.jpg"
                  alt="SEOとSEM"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
