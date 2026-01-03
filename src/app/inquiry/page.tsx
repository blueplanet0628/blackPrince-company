"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, MessageCircle, Phone, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
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
        cardsRef.current?.querySelectorAll(".contact-card") || [],
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "closefriend0330@gmail.com",
      link: "mailto:closefriend0330@gmail.com",
      gradient: "from-teal-400 to-cyan-400",
      bgGradient: "from-teal-50 to-cyan-50",
      description: "メールでのお問い合わせ",
    },
    {
      icon: MessageCircle,
      title: "LINE",
      value: "hellosingapre",
      link: "https://line.me/ti/p/~hellosingapre",
      gradient: "from-green-400 to-emerald-400",
      bgGradient: "from-green-50 to-emerald-50",
      description: "LINEでお気軽にどうぞ",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+81 70-9441-6496",
      link: "https://wa.me/817094416496",
      gradient: "from-emerald-400 to-teal-400",
      bgGradient: "from-emerald-50 to-teal-50",
      description: "WhatsAppでもご連絡可能",
    },
  ]

  return (
    <section
      ref={containerRef}
      className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-teal-50/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-4 shadow-lg shadow-teal-500/25">
            <Sparkles size={16} />
            CONTACT
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4">
            お問い合わせ
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            ご質問やご相談がございましたら、お気軽にご連絡ください。<br />
            以下の方法でお問い合わせいただけます。
          </p>
        </div>

        {/* Contact Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-card group relative bg-gradient-to-br ${method.bgGradient} rounded-3xl p-8 border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100 transition-all duration-500 text-center hover:-translate-y-2`}
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <method.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-700 mb-2 group-hover:text-teal-600 transition-colors">
                {method.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm mb-4">
                {method.description}
              </p>

              {/* Value */}
              <p className="text-lg font-medium text-teal-600 break-all">
                {method.value}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 group-hover:text-teal-500 transition-colors">
                <span className="text-sm">クリックして連絡</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Additional message */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-slate-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <p className="text-slate-500 text-sm">
              通常24時間以内にご返信いたします
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-4 mt-12">
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
