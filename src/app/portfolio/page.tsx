"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import Image from "next/image"

const categories = [
  "企業関連",
  "不動産関連",
  "教育関連",
  "美容関連",
  "医療関連",
  "食品関連",
  "EC関連",
  "その他（ペット・アニメ）"
]

const projects = {
  "企業関連": [
    {
      id: 1,
      title: "Career Scouting",
      image: "/advance.png",
      url: "https://www.careerscout.co.jp/"
    },
    {
      id: 2,
      title: "Haruchika",
      image: "/haruchika.png",
      url: "https://www.haruchika.co.jp/"
    },
    {
      id: 3,
      title: "funaisoken",
      image: "/funai.png",
      url: "https://www.funaisoken.co.jp/"
    },
      {
      id: 4,
      title: "nextlevelholdings",
      image: "/nextlevel.png",
      url: "https://nextlevelholdings.co.jp/"
    },
      {
      id: 5,
      title: "rewrite",
      image: "/rewrite.png",
      url: "https://www.rewrite.co.jp/"
    },
      {
      id: 6,
      title: "Msols",
      image: "/msol.png",
      url: "https://www.msols.com/"
    },
      {
      id: 7,
      title: "Keywordmap",
      image: "/keyword.png",
      url: "https://keywordmap.jp/"
    },
      {
      id: 8,
      title: "Freelocation",
      image: "/freelocation.png",
      url: "https://freelocation.co.jp/"
    },
      {
      id: 9,
      title: "Recruit",
      image: "/recruit.png",
      url: "https://www.recruit-ms.co.jp/"
    },
      {
      id: 10,
      title: "Famione",
      image: "/famione.png",
      url: "https://famione.com/benefit/"
    },
      {
      id: 11,
      title: "Pro-D-Use",
      image: "/pro.png",
      url: "https://pro-d-use.jp/"
    },
  ],
  "不動産関連": [
    {
      id: 12,
      title: "Odakyu Group",
      image: "/odakyu.png",
      url: "https://www.odakyu.jp/group/brand/topic/"
    },
    {
      id: 13,
      title: "Kafuu Okinawa",
      image: "/kafuu.png",
      url: "https://www.kafuu-okinawa.jp/"
    },
    {
      id: 14,
      title: "N-Story",
      image: "/n-story.png",
      url: "https://www.n-story.net/　"
    },
    {
      id: 15,
      title: "Temairazu",
      image: "/tema.png",
      url: "https://www.temairazu.com/"
    },
    {
      id: 16,
      title: "Asahii Housing",
      image: "/asahii.png",
      url: "https://www.asahi-housing.co.jp/"
    },
    {
      id: 17,
      title: "Open House",
      image: "/openhouse.png",
      url: "https://openhouse-group.com/"
    },
    {
      id: 18,
      title: "Tap",
      image: "/tap.png",
      url: "https://www.tap-ic.co.jp/"
    },
  ],
  "教育関連": [
    {
      id: 19,
      title: "Andrew",
      image: "/andrew.png",
      url: "https://www.andrew.ac.jp"
    },
    {
      id: 20,
      title: "Online",
      image: "/online.png",
      url: "https://to-z.net/online/"
    },
    {
      id: 21,
      title: "School",
      image: "/school.png",
      url: "https://school.js88.com/"
    },

     {
      id:22,
      title: "Ohtake",
      image: "/ohtake.png",
      url: "https://www.ohtake.ac.jp/"
    },
     {
      id: 23,
      title: "Seisa",
      image: "/seisa.png",
      url: "https://seisa.ac.jp/"
    },
     {
      id: 24,
      title: "Tanaka Soroban",
      image: "/tanaka.png",
      url: "https://tanakasorobanjuku.com/"
    },
     {
      id: 25,
      title: "Seigaku",
      image: "/seigaku.png",
      url: "https://seigaku.jp/kase/"
    },
  ],
  "美容関連": [
    {
      id: 26,
      title: "Akiko",
      image: "/akiko.png",
      url: "https://e-akiko.com/lp/"
    },
    {
      id: 27,
      title: "Ethree",
      image: "/yo.jpg",
      url: "https://www.ethree.tokyo/" // This isnt the correct URL
    },
    {
      id: 28,
      title: "Top Class N",
      image: "/yosecondd.jpg",
      url: "https://topclass-n.net" // This isnt the correct URL
    },
    {
      id: 29,
      title: "Select",
      image: "/select.png",
      url: "https://u-select-up.com/"
    },
   
    {
      id: 30,
      title: "Noluc",
      image: "/yotwo.jpg",
      url: "https://www.noluc.jp/" // This isnt the correct URL
    },
    {
      id: 31,
      title: "Bio Spa",
      image: "/spa.png",
      url: "https://bio-spa.jp/"
    }
    // {
    //   id: 32,
    //   title: "Cellabo",
    //   image: "/cellabo.png",
    //   url: "https://www.celllabo.jp/"
    // },
  ],
  "医療関連": [
    {
      id: 33,
      title: "Futamatagawa Dental",
      image: "/futa.png",
      url: "https://futamatagawa-dental.com/"
    },
    {
      id: 34,
      title: "Seed Recruit",
      image: "/seed.png",
      url: "https://www.seed-recruit.com/"
    },
    {
      id: 35,
      title: "Nakayama Kyousei",
      image: "/nakayama.png",
      url: "https://nakayama-kyousei.com/"
    },
    {
      id: 36,
      title: "Fujioka Dental",
      image: "/fuji.png",
      url: "https://fujioka-dental.jp/"
    },
    {
      id: 37,
      title: "Marina ",
      image: "/marina.png",
      url: "https://www.marina-dc.com/"
    },
  ],
  "食品関連": [
    {
      id: 38,
      title: "Shokubun",
      image: "/shok.png",
      url: "https://www.shokubun.co.jp/"
    },
    {
      id: 39,
      title: "Narikoma Group",
      image: "/narikoma.png",
      url: "https://www.narikoma-group.co.jp/corp/"
    },
    {
      id: 40,
      title: "Heart Bread",
      image: "/heart.png",
      url: "https://www.heart-bread.com/"
    },
    {
      id: 41,
      title: "Fujiya",
      image: "/peko.png",
      url: "https://www.fujiya-peko.co.jp"
    },

  ],
  "EC関連": [
    {
      id: 42,
      title: "Marimo Craft",
      image: "/craft.png",
      url: "https://marimocraft.co.jp/"
    },
    {
      id: 43,
      title: "Rise",
      image: "/rise.png",
      url: "https://www.rise.sc/"
    },
    {
      id: 44,
      title: "Francfranc",
      image: "/franc.png",
      url: "https://francfranc.com/"
    },
  ],
  "その他（ペット・アニメ）": [
    {
      id: 45,
      title: "Ripuca",
      image: "/ripuca.png",
      url: "https://ripuca.co.jp/lp-instagram/"
    },
    {
      id: 46,
      title: "Hamaoka",  
      image: "/hamao.png",
      url: "https://hamaokamekki.co.jp/"
    },
    {
      id: 47,
      title: "DogHuggy",
      image: "/dog.png",
      url: "https://doghuggy.com/"
    },
    {
      id: 48,
      title: "Wanpass",
      image: "/wanpass.png",
      url: "https://wanpass.me/"
    },
    {
      id: 49,
      title: "Odakyu Group",
      image: "/odakyu.png",
      url: "https://www.odakyu.jp/group/brand/topic/"
    },
  ],
}

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [categoryStartIndex, setCategoryStartIndex] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [isMobileCatOpen, setIsMobileCatOpen] = useState(false)
  const mobileCatRef = useRef<HTMLDivElement>(null)

  const [categoriesPerView, setCategoriesPerView] = useState(6)
  useEffect(() => {
    const updateCategoriesPerView = () => {
      const w = window.innerWidth
      const next = w <= 360 ? 1 : w <= 640 ? 3 : 6
      setCategoriesPerView(next)
      setCategoryStartIndex((prev) => {
        const maxStart = Math.max(0, categories.length - next)
        return Math.min(prev, maxStart)
      })
    }
    updateCategoriesPerView()
    window.addEventListener('resize', updateCategoriesPerView)
    return () => window.removeEventListener('resize', updateCategoriesPerView)
  }, [])

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

  const visibleCategories = categories.slice(categoryStartIndex, categoryStartIndex + categoriesPerView)

  const currentProjects = (projects[activeCategory as keyof typeof projects] || []) as { id: number; title: string; image: string; url?: string }[]
  const visibleProjects = currentProjects.slice(currentIndex, currentIndex + 6)

  const handleCategoryPrevious = () => {
    if (categoryStartIndex > 0) {
      gsap.to(categoriesRef.current?.children || [], {
        x: 50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        onComplete: () => {
          setCategoryStartIndex(categoryStartIndex - 1)
          gsap.fromTo(
            categoriesRef.current?.children || [],
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.05,
              ease: "power2.out",
            }
          )
        },
      })
    }
  }

  const handleCategoryNext = () => {
    if (categoryStartIndex + categoriesPerView < categories.length) {
      gsap.to(categoriesRef.current?.children || [], {
        x: -50,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        onComplete: () => {
          setCategoryStartIndex(categoryStartIndex + 1)
          gsap.fromTo(
            categoriesRef.current?.children || [],
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.05,
              ease: "power2.out",
            }
          )
        },
      })
    }
  }

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
      className="min-h-[70vh] relative py-20 px-4"
      ref={containerRef}
      style={{
        backgroundImage: "url('/S5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0  z-0"></div>
      <div className="max mx-auto relative z-10">
        <h2 ref={headerRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-16">制作実績(国内)</h2>
        <div className="xl:hidden mb-6 px-2">
          <div ref={mobileCatRef} className="relative max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setIsMobileCatOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-sm bg-[#345b95] text-white px-4 py-3 border border-white/20"
            >
              <span className="truncate">{activeCategory}</span>
              <ChevronDown size={18} className={`transition-transform ${isMobileCatOpen ? "rotate-180" : ""}`} />
            </button>
            {isMobileCatOpen && (
              <div className="absolute mt-1 w-full max-h-64 overflow-auto rounded-sm bg-blue-700/90 backdrop-blur-sm border border-white/20 shadow-lg z-20">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setIsMobileCatOpen(false)
                      handleCategoryChange(category)
                    }}
                    className={`w-full text-left px-4 py-3 text-white hover:bg-[#00c7f1] ${activeCategory === category ? "bg-[#00c7f1]" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden xl:flex items-center justify-center mb-6 sm:mb-8 ">
          <button
            onClick={handleCategoryPrevious}
            disabled={categoryStartIndex === 0}
            className={`px-4 py-10 rounded-sm mr-1 transition-all duration-300 bg-[#345b95] ${
              categoryStartIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#00c7f1]"
            }`}
          >
            <ChevronLeft size={24} className="text-[#00c7f1]" />
          </button>
          <div ref={categoriesRef} className="flex bg-blue-700/30 max-w-full xl:w-[1200px] rounded-sm overflow-hidden backdrop-blur-sm border border-white/20">
            {visibleCategories.map((category, index) => (
              <div className="w-full" key={category}>
                <button
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full text-center px-4 sm:px-8 py-6 sm:py-10 text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-[#00c7f1] text-white"
                      : "text-white hover:bg-[#00c7f1] bg-[#345b95]"
                  } ${index !== visibleCategories.length - 1 ? "border-r border-[#013878]" : ""}`}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleCategoryNext}
            disabled={categoryStartIndex + categoriesPerView >= categories.length}
            className={`px-4 py-10 rounded-sm ml-1 transition-all duration-300 bg-[#345b95] ${
              categoryStartIndex + categoriesPerView >= categories.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight size={24} className="text-[#00c7f1]" />
          </button>
        </div>

        <div className="relative">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous projects"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-sm transition-all  duration-300 bg-[#345b95] ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00c7f1]"
            }`}
          >
            <ChevronLeft size={24} className="text-[#00c7f1]" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex + 6 >= currentProjects.length}
            aria-label="Next projects"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20  p-3 rounded-sm transition-all duration-300 bg-[#345b95] ${
              currentIndex + 6 >= currentProjects.length ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00c7f1]"
            }`}
          >
            <ChevronRight size={24} className="text-[#00c7f1]" />
          </button>

          <div ref={projectsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-4 sm:mx-8 lg:mx-16">
            {visibleProjects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className=" rounded-sm overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      if (project.url) {
                        window.open(project.url, "_blank", "noopener,noreferrer")
                      }
                    }}
                    disabled={!project.url}
                    className={`mt-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      project.url ? "bg-white/30 text-white/70 hover:bg-[#00c7f1] hover:text-white" : "bg-white/30 text-white/70 cursor-not-allowed"
                    }`}
                    aria-label={`Visit ${project.title} website`}
                  >
                   サイトを見る
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
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
                className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                  Math.floor(currentIndex / 6) === index ? "border-2 border-cyan-400" : "bg-white/30 hover:bg-white/50"
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
