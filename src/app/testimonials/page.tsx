"use client"

import { useEffect, useRef } from "react"
import { Quote, Sparkles } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    text: "迅速かつ丁寧に対応していただき、誠にありがとうございました。コミュニケーションが非常にスムーズで、技術的な説明も分かりやすく、安心して依頼できました。",
    name: "シン 様",
    title: "クライアント",
    avatar: "/tanaka.png",
    gradient: "from-teal-400 to-cyan-400",
  },
  {
    id: 2,
    text: "とても丁寧で迅速な対応をしていただきました。開発だけでなく、今後の運用や管理方法についても的確なアドバイスをくださり、納品後もサポートを継続していただけるなど、非常に安心できるお取引でした。またぜひお願いしたいと思える素晴らしいランサーさんです。",
    name: "株式会社Atout",
    title: "法人クライアント",
    avatar: "/andrew.png",
    gradient: "from-cyan-400 to-blue-400",
  },
  {
    id: 3,
    text: "丁寧にコミュニケーションしていただきました。対応も素早く、安心して仕事をお任せすることができました。ありがとうございました。",
    name: "一般社団法人Earth Company",
    title: "法人クライアント",
    avatar: "/akiko.png",
    gradient: "from-emerald-400 to-teal-400",
  },
]

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.querySelectorAll(".testimonial-card") || [],
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-4 shadow-lg shadow-teal-500/25">
            <Sparkles size={16} />
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4">
            お客様の声
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            BlackPrince株式会社をご利用いただいたお客様から、温かいお言葉をいただいています。
          </p>
        </div>

        {/* Testimonials Grid - Vertical Layout */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card group relative bg-white rounded-3xl p-6 lg:p-8 border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className={`absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Testimonial text */}
              <p className="text-slate-600 leading-relaxed mt-4 mb-6 text-sm lg:text-base">
                「{testimonial.text}」
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-100 group-hover:border-teal-200 transition-colors"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br ${testimonial.gradient} rounded-lg flex items-center justify-center shadow-sm`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 group-hover:text-teal-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-teal-500 text-sm font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
    </section>
  )
}
