"use client"

// Icons not currently used but may be needed for future features
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const textBlockRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power2.out" },
      )

      gsap.fromTo(
        textBlockRef.current?.querySelectorAll("p") || [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textBlockRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        listRef.current?.querySelectorAll("li") || [],
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 32, scale: 0.98 },
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
    <section ref={containerRef} className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-teal-100 rounded-full opacity-30 floating-element blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-100 rounded-full opacity-40 floating-element blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-emerald-100 rounded-full opacity-25 floating-element blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 relative z-10">
        <div ref={heroRef} className="flex flex-col items-center justify-center text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-4 shadow-lg shadow-teal-500/25">
            BlackPrince株式会社について
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6 text-balance">
            お互いの思いに寄り添い、<br className="hidden md:block" />素晴らしいプロジェクトを共に創り上げる会社。
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-2xl">
            <div ref={textBlockRef} className="rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-sm border border-teal-100 shadow-sm mb-8">
              <p className="text-slate-700 mb-4 text-pretty">
                <strong>ＢｌａｃｋＰｒｉｎｃｅ株式会社</strong>は10年以上にわたり多種多様なWebおよびシステム開発を手がけてきた開発会社です。企画・設計から開発、運用・保守までを一貫して支援し、お客様のビジネス課題や成長戦略に寄り添った最適なソリューションを提供しています。
              </p>

              <p className="text-slate-700 mb-4 text-pretty">
                私たちは、単なるシステム開発にとどまらず、お客様の想いを深く理解し、共に価値を創り上げるパートナーであることを大切にしています。明確で丁寧なコミュニケーションと、長年の経験に裏打ちされた確かな技術力を強みに、堅牢で使いやすく、長期的な運用を見据えたシステム構築を実現しています。
              </p>

              <p className="text-slate-700 text-pretty">
                私たちは、単なるシステム開発にとどまらず、お客様の想いを深く理解し、共に価値を創り上げるパートナーであることを大切にしています。明確で丁寧なコミュニケーションと、長年の経験に裏打ちされた確かな技術力を強みに、堅牢で使いやすく、長期的な運用を見据えたシステム構築を実現しています。
              </p>
            </div>

            <div className="mb-8">
              <p className="text-slate-800 font-medium mb-4">
                BlackPrince株式会社は、人と人をつなぐシンプルで分かりやすいWeb制作を大切にしています。
              </p>

              <ul ref={listRef} className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-slate-700">難しい専門用語は使わず、日常的な言葉で丁寧にご説明し、お客様が安心して理解・判断できる環境を提供します。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-700">私たちは、納品して終わりではなく、その後の運用や成長にも寄り添い続けることを重視しています。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-700">常にユーザーの立場に立ち、滑らかで分かりやすく、美しいWeb体験を創り上げます。</span>
                </li>
              </ul>

              <p className="text-slate-700 mt-4 italic">
              この姿勢を大切にしながら、お客様にとって信頼でき、心地よく長く付き合えるパートナーであり続けることを目指しています。
              </p>
            </div>
          </div>

          <div className="lg:pl-8 self-stretch">
            <div ref={imageRef} className="bg-white rounded-xl overflow-hidden h-full flex items-center justify-center">
              <div className="relative w-full" style={{ aspectRatio: '600/800' }}>
                <Image
                  src="/vision-img01.jpg"
                  alt="ショーケース"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
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
