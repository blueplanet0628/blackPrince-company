"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"
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
  },
  {
    id: 2,
    text: "とても丁寧で迅速な対応をしていただきました。開発だけでなく、今後の運用や管理方法についても的確なアドバイスをくださり、納品後もサポートを継続していただけるなど、非常に安心できるお取引でした。またぜひお願いしたいと思える素晴らしいランサーさんです。",
    name: "株式会社Atout",
    title: "法人クライアント",
    avatar: "/andrew.png",
  },
  {
    id: 3,
    text: "丁寧にコミュニケーションしていただきました。対応も素早く、安心して仕事をお任せすることができました。ありがとうございました。",
    name: "一般社団法人Earth Company",
    title: "法人クライアント",
    avatar: "/akiko.png",
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
      className="py-20 px-4 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#134a8b]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <span className="inline-block rounded-full bg-[#00c7f1] px-4 py-2 text-sm font-bold text-white mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            お客様の声
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            BlackPrince株式会社をご利用いただいたお客様から、温かいお言葉をいただいています。
          </p>
        </div>

        {/* Testimonials Grid - Vertical Layout */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-[#00c7f1]/50 hover:bg-white/10 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-[#00c7f1] rounded-full flex items-center justify-center shadow-lg shadow-[#00c7f1]/30">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Testimonial text */}
              <p className="text-white/90 leading-relaxed mt-4 mb-6 text-sm lg:text-base">
                「{testimonial.text}」
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00c7f1]/50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#00c7f1] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-[#00c7f1] transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#00c7f1] text-sm font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#00c7f1]/10 to-transparent rounded-br-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-4 mt-14">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00c7f1]" />
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00c7f1]" />
            <div className="w-2 h-2 rounded-full bg-[#00c7f1]/60" />
            <div className="w-2 h-2 rounded-full bg-[#00c7f1]/30" />
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#00c7f1]" />
        </div>
      </div>
    </section>
  )
}
