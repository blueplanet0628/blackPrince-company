"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, MessageCircle, Phone } from "lucide-react"

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
      color: "#00c7f1",
      description: "メールでのお問い合わせ",
    },
    {
      icon: MessageCircle,
      title: "LINE",
      value: "hellosingapre",
      link: "https://line.me/ti/p/~hellosingapre",
      color: "#06C755",
      description: "LINEでお気軽にどうぞ",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+81 70-9441-6496",
      link: "https://wa.me/8170944164969",
      color: "#25D366",
      description: "WhatsAppでもご連絡可能",
    },
  ]

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#134a8b]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <span className="inline-block rounded-full bg-[#00c7f1] px-4 py-2 text-sm font-bold text-white mb-4">
            CONTACT
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            お問い合わせ
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
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
              className="contact-card group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00c7f1]/50 hover:bg-white/10 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${method.color}20` }}
              >
                <method.icon
                  className="w-10 h-10 transition-colors duration-300"
                  style={{ color: method.color }}
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00c7f1] transition-colors">
                {method.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm mb-4">
                {method.description}
              </p>

              {/* Value */}
              <p
                className="text-lg font-medium break-all transition-colors duration-300"
                style={{ color: method.color }}
              >
                {method.value}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center justify-center gap-2 text-white/50 group-hover:text-white/80 transition-colors">
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

              {/* Decorative corner */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 rounded-br-2xl pointer-events-none opacity-20"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${method.color} 100%)`,
                }}
              />
            </a>
          ))}
        </div>

        {/* Additional message */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-[#00c7f1] animate-pulse" />
            <p className="text-white/70 text-sm">
              通常24時間以内にご返信いたします
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00c7f1]" />
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00c7f1]" />
            <div className="w-2 h-2 rounded-full bg-[#06C755]" />
            <div className="w-2 h-2 rounded-full bg-[#25D366]" />
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#00c7f1]" />
        </div>
      </div>
    </section>
  )
}
