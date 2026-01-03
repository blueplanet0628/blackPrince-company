"use client"

import Image from "next/image"

export default function CeoPage() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-teal-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-100 rounded-full opacity-40 blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-14 px-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white mb-4 shadow-lg shadow-teal-500/25">
            ABOUT US
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">代表メッセージ</h1>
          <p className="mt-3 text-teal-600 font-medium">代表取締役　山本和隆</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10 items-start">
          <div className="flex md:block justify-center">
            <div className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-full ring-4 ring-gradient-to-r from-teal-400 to-cyan-400 shadow-xl shadow-teal-500/20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/ceo.png"
                    alt="代表アバター"
                    fill
                    sizes="(max-width: 768px) 160px, 208px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <p>
              私は、BlackPrince株式会社の代表取締役CEOとして、Web・システム開発を通じた価値創出に取り組んでいます。
            </p>
            <p>
              開発現場で培ってきた実務経験をもとに、技術だけに偏らず、「人と人をつなぐこと」「想いを正しく形にすること」を重視したものづくりを大切にしています。
            </p>
            <p>
              難解な専門用語に頼らず、分かりやすい言葉で丁寧に説明する姿勢を信条とし、お客様との信頼関係を第一に考えています。
              また、プロジェクトは納品して終わりではなく、その後の運用や成長まで見据えて寄り添い続けることが、真のパートナーシップであると考えています。
            </p>
            <p>
              ユーザー視点に立った、滑らかで美しく、長く愛されるWeb体験の創出を目指し、
              お客様にとって「安心して相談できる、心地よいパートナー」であり続けることを使命としています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
