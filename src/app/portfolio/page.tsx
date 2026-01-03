"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import Image from "next/image"

const categories = [
  "Webサイト企画・制作実績",
  "ECサイト構築・運営実績",
  "Webアプリケーション・業務システム開発実績",
  "CMS構築・カスタマイズ実績",
  "UX / UI改善・リニューアル実績",
  "運用・保守・継続支援実績"
]

const projects = {
  "Webサイト企画・制作実績": [
    {
      id: 1,
      title: "TS-BASE｜EC・物流の課題をワンストップで解決するサービスサイト",
      image: "/Webサイト企画・制作実績/1/1.png",
      url: "https://www.ts-base.net/"
    },
    {
      id: 2,
      title: "PERSOL（パーソル）グループ – はたらいて、笑おう",
      image: "/Webサイト企画・制作実績/2/Screenshot_1.png",
      url: "https://www.persol-group.co.jp/"
    },
    {
      id: 3,
      title: "人材派遣・人材紹介・アウトソーシングサービス",
      image: "/Webサイト企画・制作実績/3/Screenshot_2.png",
      url: "https://www.tcpartners.co.jp/"
    },
      {
      id: 4,
      title: "シナモンAI｜企業向けAIドキュメント解析・自動化ソリューション",
      image: "/Webサイト企画・制作実績/4/Screenshot_1.png",
      url: "https://cinnamon.ai/"
    },
      {
      id: 5,
      title: "AI医療機器・医療AI技術開発企業",
      image: "/Webサイト企画・制作実績/5/Screenshot_2.png",
      url: "https://aillis.jp/"
    },
      {
      id: 6,
      title: "ウルトラファインバブル搭載シャワーヘッド公式サイト",
      image: "/Webサイト企画・制作実績/6/Screenshot_2.png",
      url: "https://bollina.jp/"
    },
      {
      id: 7,
      title: "オーガニックコスメ＆自然食品の通販サイト",
      image: "/Webサイト企画・制作実績/7/Screenshot_1.png",
      url: "https://www.mugigokoro.organic/"
    },
      {
      id: 8,
      title: "メンズ向けヘアケアブランド公式サイト",
      image: "/Webサイト企画・制作実績/8/Screenshot_2.png",
      url: "https://eightthethalasso-homme.jp/"
    },
      {
      id: 9,
      title: "レディースファッション通販サイト",
      image: "/Webサイト企画・制作実績/9/Screenshot_1.png",
      url: "https://palemoba.com/"
    },
      {
      id: 10,
      title: "丸亀製麺（Marugame Seimen）",
      image: "/Webサイト企画・制作実績/10/Screenshot_2.png",
      url: "https://jp.marugame.com/"
    }
  ],
  "ECサイト構築・運営実績": [
    {
      id: 12,
      title: "カラーミーショップ",
      image: "/ECサイト構築・運営実績/1/Screenshot_1.png",
      url: "https://shop-pro.jp/"
    },
    {
      id: 13,
      title: "ラミューズドレス",
      image: "/ECサイト構築・運営実績/2/Screenshot_2.png",
      url: "https://lamuse-dress.jp/"
    },
    {
      id: 14,
      title: "ピープルツリー",
      image: "/ECサイト構築・運営実績/3/Screenshot_1.png",
      url: "https://peopletree.co.jp/　"
    },
    {
      id: 15,
      title: "KARAKU by me（カラクバイミー）",
      image: "/ECサイト構築・運営実績/4/Screenshot_2.png",
      url: "https://karakubyme.com/ja"
    },
    {
      id: 16,
      title: "BIZOUX（ビズー）",
      image: "/ECサイト構築・運営実績/5/Screenshot_1.png",
      url: "https://bizoux.jp/"
    },
    {
      id: 17,
      title: "ジュエリー公式オンラインショップ",
      image: "/ECサイト構築・運営実績/6/Screenshot_2.png",
      url: "https://l-co-shop.jp/"
    },
    {
      id: 18,
      title: "フラワーギフト＆ライフスタイル雑貨・オンラインショップ",
      image: "/ECサイト構築・運営実績/8/Screenshot_2.png",
      url: "https://karendo.com/"
    },
  ],
  "Webアプリケーション・業務システム開発実績": [
    {
      id: 19,
      title: "NDSインフォス",
      image: "/Webアプリケーション・業務システム開発実績/1/Screenshot_1.png",
      url: "https://www.nds-infos.co.jp/"
    },
    {
      id: 20,
      title: "CECの物流DXソリューション公式サイト",
      image: "/Webアプリケーション・業務システム開発実績/2/Screenshot_2.png",
      url: "https://logistics.cec-ltd.co.jp/"
    },
    {
      id: 21,
      title: "無料で使える予約管理・予約サイト",
      image: "/Webアプリケーション・業務システム開発実績/3/Screenshot_1.png",
      url: "https://reserva.be/"
    },

     {
      id:22,
      title: "Cloud Brain 業務管理",
      image: "/Webアプリケーション・業務システム開発実績/4/Screenshot_2.png",
      url: "https://lp.report.cloud-brain.net/"
    },
     {
      id: 23,
      title: "Bカート（BCART）",
      image: "/Webアプリケーション・業務システム開発実績/5/Screenshot_1.png",
      url: "https://bcart.jp/"
    }
  ],
  "CMS構築・カスタマイズ実績": [
    {
      id: 26,
      title: "形成外科・皮膚科・美容ひふ科クリニック公式サイ",
      image: "/CMS構築・カスタマイズ実績/1/Screenshot_1.png",
      url: "https://www.iki-clinic.com/"
    },
    {
      id: 27,
      title: "レディースホームクリニックやわた",
      image: "/CMS構築・カスタマイズ実績/2/Screenshot_2.png",
      url: "https://www.lhc-yawata.com/" // This isnt the correct URL
    },
    {
      id: 28,
      title: "そがセントラルクリニック",
      image: "/CMS構築・カスタマイズ実績/3/Screenshot_1.png",
      url: "https://www.soga-centralclinic.jp/" // This isnt the correct URL
    },
    {
      id: 29,
      title: "稲田朋美公式サイト",
      image: "/CMS構築・カスタマイズ実績/4/Screenshot_2.png",
      url: "https://www.inada-tomomi.com/"
    },
   
    {
      id: 30,
      title: "牧島かれん公式サイト",
      image: "/CMS構築・カスタマイズ実績/5/Screenshot_1.png",
      url: "https://makishimakaren.com/" // This isnt the correct URL
    },
    {
      id: 31,
      title: "KINS WITH 動物病院",
      image: "/CMS構築・カスタマイズ実績/6/Screenshot_2.png",
      url: "https://kinswith-vet.com/"
    }
  ],
  "UX / UI改善・リニューアル実績": [
    {
      id: 33,
      title: "有限会社 宮崎製作所",
      image: "/UX  UI改善・リニューアル実績/1/Screenshot_2.png",
      url: "https://miyazaki-factory.com/"
    },
    {
      id: 34,
      title: "ヒルトップリゾート福岡",
      image: "/UX  UI改善・リニューアル実績/2/Screenshot_1.png",
      url: "https://hilltopresort-fukuoka.com/"
    },
    {
      id: 35,
      title: "三重・南伊勢町のオーシャンビューリゾートホテル公式サイト",
      image: "/UX  UI改善・リニューアル実績/3/Screenshot_2.png",
      url: "https://3373nankai.co.jp/"
    },
    
  ],
  "運用・保守・継続支援実績": [
    {
      id: 38,
      title: "アイムスデンタルクリニック",
      image: "/運用・保守・継続支援実績/1/Screenshot_2.png",
      url: "https://www.ims-dc-invisalign.com/"
    },
    {
      id: 39,
      title: "医療・福祉の転職・求人情報サイト",
      image: "/運用・保守・継続支援実績/2/Screenshot_1.png",
      url: "https://www.co-medical.com/"
    },
    {
      id: 40,
      title: "医療法人はるにれ",
      image: "/運用・保守・継続支援実績/3/Screenshot_1.png",
      url: "https://irryo-harunire.or.jp/"
    },
   

  ]
}

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [isMobileCatOpen, setIsMobileCatOpen] = useState(false)
  const mobileCatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMobileCatOpen) return
    const onClick = (e: MouseEvent) => {
      if (mobileCatRef.current && !mobileCatRef.current.contains(e.target as Node)) {
        setIsMobileCatOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [isMobileCatOpen])

  const currentProjects = (projects[activeCategory as keyof typeof projects] || []) as { id: number; title: string; image: string; url?: string }[]
  const visibleProjects = currentProjects.slice(currentIndex, currentIndex + 6)

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return

    gsap.to(projectsRef.current?.children || [], {
      x: -100,
      opacity: 0,
      duration: 0.2,
      stagger: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveCategory(category)
        setCurrentIndex(0)

        gsap.fromTo(
          projectsRef.current?.children || [],
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.2,
            stagger: 0.4,
            ease: "power2.out",
          },
        )
      },
    })
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      gsap.to(projectsRef.current?.children || [], {
        x: 100,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        onComplete: () => {
          setCurrentIndex(currentIndex - 6)
          gsap.fromTo(
            projectsRef.current?.children || [],
            { x: -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.2,
              ease: "power2.out",
            },
          )
        },
      })
    }
  }

  const handleNext = () => {
    if (currentIndex + 6 < currentProjects.length) {
      gsap.to(projectsRef.current?.children || [], {
        x: -100,
        opacity: 0,
        duration: 0.1,
        stagger: 0.05,
        onComplete: () => {
          setCurrentIndex(currentIndex + 6)
          gsap.fromTo(
            projectsRef.current?.children || [],
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.1,
              stagger: 0.2,
              ease: "power2.out",
            },
          )
        },
      })
    }
  }

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        },
      )
    }

    gsap.fromTo(
      projectsRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: projectsRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      },
    )
  }, [])

  return (
    <section
      className="min-h-[70vh] relative py-20 px-4 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
      ref={containerRef}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 ref={headerRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">制作実績</h2>
        <p className="text-slate-400 text-center mb-10 sm:mb-16 max-w-2xl mx-auto">多様な業種・規模のお客様にご依頼いただいた実績をご紹介します</p>
        <div className="xl:hidden mb-6 px-2">
          <div ref={mobileCatRef} className="relative max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setIsMobileCatOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-xl bg-white/10 backdrop-blur-sm text-white px-4 py-3 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <span className="truncate">{activeCategory}</span>
              <ChevronDown size={18} className={`transition-transform ${isMobileCatOpen ? "rotate-180" : ""}`} />
            </button>
            {isMobileCatOpen && (
              <div className="absolute mt-2 w-full max-h-64 overflow-auto rounded-xl bg-slate-800/95 backdrop-blur-md border border-white/10 shadow-xl z-20">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setIsMobileCatOpen(false)
                      handleCategoryChange(category)
                    }}
                    className={`w-full text-left px-4 py-3 text-white/80 hover:bg-teal-500/20 hover:text-white transition-colors ${activeCategory === category ? "bg-gradient-to-r from-teal-500/30 to-cyan-500/30 text-white" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden xl:flex items-center justify-center mb-6 sm:mb-8">
          <div ref={categoriesRef} className="flex bg-white/5 max-w-full xl:w-[1400px] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
            {categories.map((category, index) => (
              <div className="flex-1 min-w-0" key={category}>
                <button
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full h-full text-center px-2 sm:px-4 py-6 sm:py-8 text-xs sm:text-sm font-medium transition-all duration-300 leading-tight ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  } ${index !== categories.length - 1 ? "border-r border-white/10" : ""}`}
                >
                  <span className="block break-words">{category}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous projects"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:border-transparent"
            }`}
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + 6 >= currentProjects.length}
            aria-label="Next projects"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 ${
              currentIndex + 6 >= currentProjects.length ? "opacity-30 cursor-not-allowed" : "hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:border-transparent"
            }`}
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          <div ref={projectsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-4 sm:mx-8 lg:mx-16">
            {visibleProjects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/30 hover:transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white/90 line-clamp-2 mb-3">{project.title}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      if (project.url) {
                        window.open(project.url, "_blank", "noopener,noreferrer")
                      }
                    }}
                    disabled={!project.url}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      project.url 
                        ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/30 hover:from-teal-500 hover:to-cyan-500 hover:text-white hover:border-transparent" 
                        : "bg-white/10 text-white/40 cursor-not-allowed"
                    }`}
                    aria-label={`Visit ${project.title} website`}
                  >
                   サイトを見る
                   <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-3">
            {Array.from({ length: Math.ceil(currentProjects.length / 6) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newIndex = index * 6
                  if (newIndex !== currentIndex) {
                    gsap.to(projectsRef.current?.children || [], {
                      x: newIndex > currentIndex ? -100 : 100,
                      opacity: 0,
                      duration: 0.3,
                      stagger: 0.05,
                      onComplete: () => {
                        setCurrentIndex(newIndex)
                        gsap.fromTo(
                          projectsRef.current?.children || [],
                          { x: newIndex > currentIndex ? 100 : -100, opacity: 0 },
                          {
                            x: 0,
                            opacity: 1,
                            duration: 0.4,
                            stagger: 0.05,
                            ease: "power2.out",
                          },
                        )
                      },
                    })
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 6) === index 
                    ? "bg-gradient-to-r from-teal-400 to-cyan-400 scale-125" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
