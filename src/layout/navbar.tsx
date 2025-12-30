"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 199, 241, 0.5), 0 0 10px rgba(0, 199, 241, 0.3), 0 0 15px rgba(0, 199, 241, 0.2);
          }
          50% {
            box-shadow: 0 0 10px rgba(0, 199, 241, 0.8), 0 0 20px rgba(0, 199, 241, 0.6), 0 0 30px rgba(0, 199, 241, 0.4);
          }
        }
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-lg border-b border-gray-100" 
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2 select-none">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('home');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="h-14 sm:h-14 md:h-20 lg:h-20 flex items-center focus:outline-none"
                aria-label="トップへ移動"
              >
                <Image
                  src="/logo/logo.png"
                  alt="BlackPrince ロゴ"
                  width={120}
                  height={70}
                  className="h-full w-auto object-contain"
                  priority
                />
              </button>
            </div>

            <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {[
                { href: "#about", label: "BlackPrince株式会社について" },
                { href: "#performance", label: "パフォーマンス" },
                // { href: "#seo-sem", label: "SEO/SEM" },
                // { href: "#analytics", label: "アナリティクス" },
                { href: "#vision", label: "ビジョン" },
                { href: "#portfolio", label: "実績" },
                { href: "#testimonials", label: "お客様の声" },
                { href: "#successful-projects", label: "システム制作実績" },
                { href: "#why-choose-us", label: "選ばれる理由" },
                { href: "#price", label: "製作料金" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = item.href.replace('#', '');
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`relative transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00c7f1] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                      isScrolled 
                        ? "text-gray-700 hover:text-[#00c7f1]" 
                        : "text-white hover:text-[#00c7f1] drop-shadow-md"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('inquiry');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="hidden sm:inline-flex items-center justify-center py-3 px-7 rounded-xs text-white  bg-[#00c7f1] to-[#00a8d1] transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 glow-animation"
              >
                お問い合わせ
              </a>
{/*               
              <div className="w-8 h-8  bg-[#00c4f8] to-[#00a8d1] rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Image
                  src="/ja.png"
                  alt="日本語"
                  width={18}
                  height={18}
                  
                />
              </div> */}

              <button
                type="button"
                onClick={toggleMobileMenu}
                className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
                  isScrolled 
                    ? "text-gray-600 hover:text-[#00c7f1] hover:bg-gray-50" 
                    : "text-white hover:text-[#00c7f1] hover:bg-white/10"
                }`}
                aria-expanded="false"
                aria-label="ナビゲーションメニューの切り替え"
              >
                <span className="sr-only">メインメニューを開く</span>
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 translate-y-2 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'max-h-[800px] opacity-100 visible'
                : 'max-h-0 opacity-0 invisible'
            } overflow-hidden`}
          >
            <div className={`px-2 pt-2 pb-6 space-y-1 border-t ${
              isScrolled 
                ? "bg-white border-gray-100" 
                : "bg-[#0a1628]/95 backdrop-blur-md border-white/10"
            }`}>
              {[
                { href: "#about", label: "BlackPrince株式会社について" },
                { href: "#performance", label: "業績" },
                // { href: "#seo-sem", label: "SEO/SEM" },
                // { href: "#analytics", label: "アナリティクス" },
                { href: "#vision", label: "ビジョン (Vision)" },
                { href: "#portfolio", label: "実績" },
                { href: "#testimonials", label: "お客様の声" },
                { href: "#successful-projects", label: "システム制作実績" },
                { href: "#why-choose-us", label: "選ばれる理由" },
                { href: "#price", label: "製作料金" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-3 text-base font-medium rounded-md transition-all duration-300 ${
                    isScrolled 
                      ? "text-gray-700 hover:text-[#00c7f1] hover:bg-gray-50" 
                      : "text-white hover:text-[#00c7f1] hover:bg-white/10"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = item.href.replace('#', '');
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#home"
                  className="block w-full text-center py-3 px-6 rounded-lg text-white bg-gradient-to-r from-[#00c7f1] to-[#00a8d1] hover:from-[#043e7e] hover:to-[#032d5a] transition-all duration-300 font-semibold shadow-lg glow-animation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  今すぐ始める
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;