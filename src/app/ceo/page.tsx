"use client"

import Image from "next/image"

export default function CeoPage() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00c7f1]">ABOUT US</h1>
          <p className="mt-3 text-[#00c7f1]">代表取締役　山本和隆</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10 items-start">
          <div className="flex md:block justify-center">
            <div className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-full ring-2 ring-[#00c7f1]/30 shadow-md">
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

          <div className="space-y-6 text-slate-800 leading-relaxed">
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

        {/* <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2 bg-[#e0f7fa] text-[#00bcd4] px-3 py-1 rounded-full">集客・売上支援</span>
          <span className="inline-flex items-center gap-2 bg-[#f3e8ff] text-[#8e24aa] px-3 py-1 rounded-full">ブランド価値向上</span>
          <span className="inline-flex items-center gap-2 bg-[#e8f5e9] text-[#43a047] px-3 py-1 rounded-full">業務効率化</span>
          <span className="inline-flex items-center gap-2 bg-[#fff3e0] text-[#fb8c00] px-3 py-1 rounded-full">利益最大化</span>
        </div> */}
      </div>
    </section>
  )
}
