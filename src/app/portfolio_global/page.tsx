"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import Image from "next/image"

const categories = [
  "CORPORATE SITE",
  "EC SITE",
  "REAL ESTATE SITE",
  "BLOCKCHAIN SITE",
]

const projects = {
  "CORPORATE SITE": [
    {
      id: 1,
      title: "Bidfrail",
      image: "/Corporate site/Bidfrail/Screenshot_1.png",
      url: "https://bidfrail.com/"
    },
    {
      id: 2,
      title: "Drivedge",
      image: "/Corporate site/Drivedge/Screenshot_1.png",
      url: "https://www.drivedge.com/"
    },
    {
      id: 3,
      title: "Greentek",
      image: "/Corporate site/Greentek/Screenshot_2.png",
      url: "https://greentekreman.com/"
    },
      {
      id: 4,
      title: "Saxandthecityband",
      image: "/Corporate site/Saxandthecityband/Screenshot_2.png",
      url: "https://saxandthecityband.ie/"
    },
      {
      id: 5,
      title: "Siemens",
      image: "/Corporate site/Siemens/Screenshot_1.png",
      url: "https://www.siemens-home.bsh-group.com/"
    },
      {
      id: 6,
      title: "Vitahealth",
      image: "/Corporate site/Vitahealth/Screenshot_1.png",
      url: "https://www.vitahealth.net.au/"
    },
  ],
  "EC SITE": [
    {
      id: 7,
      title: "Arttoframe",
      image: "/EC/Arttoframe/Screenshot_2.png",
      url: "https://www.arttoframe.com/"
    },
    {
      id: 8,
      title: "Evuniverse",
      image: "/EC/Evuniverse/Screenshot_1.png",
      url: "https://www.evuniverse.com/"
    },
    {
      id: 9,
      title: "Food",
      image: "/EC/Food/Screenshot_1.png",
      url: "https://food.grab.com/"
    },
    {
      id: 10,
      title: "Malaysia shopping site",
      image: "/EC/Malaysia shopping site/Screenshot_1.png",
      url: "https://shopee.com.my/"
    },
    {
      id: 11,
      title: "TWL",
      image: "/EC/TWL/Screenshot_2.png",
      url: "https://twl.com.au/"
    },
    {
      id: 12,
      title: "Walkers",
      image: "/EC/Walkers/Screenshot_1.png",
      url: "https://www.walkersfurniture.com/"
    },
  ],
  "REAL ESTATE SITE": [
    {
      id: 13,
      title: "Housingany",
      image: "/real estate/Housingany/Screenshot_1.png",
      url: "https://housinganywhere.com/"
    },
    {
      id: 14,
      title: "Notahotel",
      image: "/real estate/Notahotel/Screenshot_1.png",
      url: "https://notahotel.com/"
    },
    {
      id: 15,
      title: "Thornlighting",
      image: "/real estate/Thornlighting/Screenshot_1.png",
      url: "https://www.thornlighting.com.au/"
    },
  ],
  "BLOCKCHAIN SITE": [
    {
      id: 16,
      title: "Advalorem",
      image: "/Blockchain/Advalorem/Screenshot_1.png",
      url: "https://nft.advalorem.io/"
    },
    {
      id: 17,
      title: "Cryptokitties",
      image: "/Blockchain/Cryptokitties/Screenshot_2.png",
      url: "https://www.cryptokitties.co/"
    },
    {
      id: 18,
      title: "Trading",
      image: "/Blockchain/Trading/Screenshot_1.png",  
      url: "https://www.jump.trade/"
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
        <h2 ref={headerRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-16">制作実績(海外)</h2>
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