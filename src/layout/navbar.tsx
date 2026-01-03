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
            box-shadow: 0 4px 15px rgba(20, 184, 166, 0.4), 0 0 20px rgba(20, 184, 166, 0.2);
          }
          50% {
            box-shadow: 0 4px 20px rgba(20, 184, 166, 0.6), 0 0 30px rgba(20, 184, 166, 0.3);
          }
        }
        .glow-animation {
          animation: glow 2.5s ease-in-out infinite;
        }
      `}</style>
      
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100" 
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
                { href: "#why-choose-us", label: "選ばれる理由" },
                { href: "#about", label: "会社について" },
                { href: "#performance", label: "パフォーマンス" },
                { href: "#vision", label: "ビジョン" },
                { href: "#portfolio", label: "実績" },
                { href: "#testimonials", label: "お客様の声" },
                { href: "#ceo", label: "About Us" },
                { href: "#inquiry", label: "Contact" },
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
                    className={`relative transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-teal-500 after:to-cyan-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                      isScrolled 
                        ? "text-slate-600 hover:text-teal-600" 
                        : "text-slate-700 hover:text-teal-600"
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
                className="hidden sm:inline-flex items-center justify-center py-3 px-7 rounded-full text-white bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 glow-animation"
              >
                お問い合わせ
              </a>

              <button
                type="button"
                onClick={toggleMobileMenu}
                className={`lg:hidden inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? "text-slate-600 hover:text-teal-600 hover:bg-slate-50" 
                    : "text-slate-700 hover:text-teal-600 hover:bg-white/50"
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
                ? "bg-white/95 backdrop-blur-xl border-slate-100" 
                : "bg-white/90 backdrop-blur-xl border-slate-200/50"
            }`}>
              {[
                { href: "#why-choose-us", label: "選ばれる理由" },
                { href: "#about", label: "会社について" },
                { href: "#performance", label: "パフォーマンス" },
                { href: "#vision", label: "ビジョン" },
                { href: "#portfolio", label: "実績" },
                { href: "#testimonials", label: "お客様の声" },
                { href: "#ceo", label: "About Us" },
                { href: "#inquiry", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium rounded-xl text-slate-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300"
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
              <div className="pt-4 px-2">
                <a
                  href="#inquiry"
                  className="block w-full text-center py-4 px-6 rounded-full text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg glow-animation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  お問い合わせ
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
