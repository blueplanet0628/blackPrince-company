"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react"

export default function Footer() {
  const links = [
    { href: "#home", label: "ホーム" },
    { href: "#why-choose-us", label: "選ばれる理由" },
    { href: "#about", label: "会社について" },
    { href: "#performance", label: "パフォーマンス" },
    { href: "#vision", label: "ビジョン" },
    { href: "#portfolio", label: "ポートフォリオ" },
    { href: "#testimonials", label: "お客様の声" },
    { href: "#ceo", label: "About Us" },
    { href: "/policy", label: "利用規約", isExternal: false },
    { href: "/company", label: "会社概要", isExternal: false },
    { href: "/privacy", label: "個人情報保護方針", isExternal: false },
    { href: "#inquiry", label: "お問い合わせ" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "closefriend0330@gmail.com",
      link: "mailto:closefriend0330@gmail.com",
      color: "from-teal-400 to-cyan-400",
    },
    {
      icon: MessageCircle,
      label: "LINE",
      value: "hellosingapre",
      link: "https://line.me/ti/p/~hellosingapre",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+81 70-9441-6496",
      link: "https://wa.me/817094416496",
      color: "from-emerald-400 to-teal-400",
    },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternal?: boolean
  ) => {
    if (isExternal) {
      e.preventDefault();
      window.open(href, "_blank");
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
      
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-16 md:h-20 flex items-center">
                <Image
                  src="/logo/logo.png"
                  alt="BlackPrince株式会社"
                  width={140}
                  height={80}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </div>
            <p className="mt-6 text-slate-500 text-sm leading-relaxed max-w-sm">
              数ヶ月ではなく、数日でプロフェッショナルで使いやすいWebサイトを構築します。親切なサポート、明確なコミュニケーション、そして本当に大切な「ユーザー」に焦点を当てます。
            </p>
            <div className="mt-8">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "#home")}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-full shadow-lg shadow-teal-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-105"
                >
                  今すぐ始める
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold tracking-wide text-teal-600 uppercase mb-6">
              ナビゲーション
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleSmoothScroll(e, l.href, l.isExternal)}
                    className="text-slate-500 hover:text-teal-600 transition-colors duration-300 text-sm"
                    target={l.isExternal ? "_blank" : undefined}
                    rel={l.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-bold tracking-wide text-teal-600 uppercase mb-6">
              お問い合わせ
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-500 hover:text-teal-600 transition-colors duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Business Hours */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-slate-400 text-xs mb-2">営業時間</p>
              <p className="text-slate-600 text-sm font-medium">月〜金 9:00–18:00（JST）</p>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-400" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} BlackPrince株式会社
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/policy"
              className="text-slate-400 hover:text-teal-600 text-xs transition-colors"
            >
              利用規約
            </a>
            <a
              href="/privacy"
              className="text-slate-400 hover:text-teal-600 text-xs transition-colors"
            >
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
