"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"

export default function PricePage() {

    return (
        <section
            className="min-h-[70vh] relative py-20 px-4"
            style={{
                backgroundImage: "url('/S5.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6 sm:mb-10">
                    製作料金
                </h2>
                <div className="bg-white/10 border border-white/20 rounded-lg p-5 sm:p-6 shadow-lg shadow-black/10 backdrop-blur-sm">
                <p className="text-white text-left text-base sm:text-lg">
                    Web制作の発注予算をご検討中の方に向けて、一般的なホームページと予算を抑えたホームページ、ランディングページ（LP）それぞれのWeb制作費用の概算と、その他のご提供しているオプションサービスの料金・予算をご紹介します。
                    各費用は、ご提供するサービス内容と制作ボリュームおよびページ数によって変動いたします。<br />
                    より詳細な見積もりが欲しいという場合には、オンライン会議にて与件や詳細などをお伺いさせて頂いた上で、ご提案させていただいております。<br />
                    なお、ご相談からお見積もりまでは無料となっています。
                </p>
                </div>
            </div>
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-left mb-4">
                    Web戦略を含むホームページ
                    <span className="block [@media(min-width:510px)]:inline">
                        の制作費用
                    </span>
                </h2>
                <p className="text-white/90 text-left text-base sm:text-lg mb-6 pr-4 pl-4">
                    戦略的に仮説をもってWebサイトを運用していきたい企業様向けのホームページ制作プランです。<br />
                    クライアント様のビジネス理解と市場や競合の調査を経て、サイトへの流入から成果（お問い合わせなどのコンバージョン）まで戦略的なWebサイトの制作を行います。
                </p>
            </div>
            <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-10 overflow-hidden">
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-left mb-4">
                  プラン別料金表
                  <span className="text-[18px] sm:text-sm ml-2">(税別)</span>
                </h3>
                <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/10">
                    <table className="min-w-[1190px] text-white text-sm sm:text-base">
                        <thead className="sticky top-0 bg-slate-900/60 backdrop-blur-sm">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">プラン</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">技術</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">対象</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20 min-w-[280px]">特徴</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">制作期間</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">料金</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">Basic Plan</th>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">WordPress（CMS）</td>
                                <td className="px-4 py-4 align-middle">LP / 小規模サイト（1〜5ページ）</td>
                                <td className="px-4 py-4 align-top">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>レスポンシブ対応</li>
                                        <li>基本SEO対策</li>
                                        <li>テンプレートベースのデザイン</li>
                                        <li>納品後1ヶ月の簡易保守付き</li>
                                    </ul>
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">1〜2週間</td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">30〜60万円</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">Standard Plan ★おすすめ</th>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">WordPress / Next.js</td>
                                <td className="px-4 py-4 align-middle">コーポレートサイト / ブランドサイト（5〜15ページ）</td>
                                <td className="px-4 py-4 align-top">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>オリジナルデザイン</li>
                                        <li>CMS 管理画面導入</li>
                                        <li>基本アニメーション実装</li>
                                        <li>納品後3ヶ月の保守サポート</li>
                                    </ul>
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">1〜1.5ヶ月</td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">70〜120万円</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">Advanced Plan</th>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">React / Next.js（MERNスタック）</td>
                                <td className="px-4 py-4 align-middle">大規模サイト / Webアプリ（15ページ以上 + カスタム機能）</td>
                                <td className="px-4 py-4 align-top">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>高度な UI/UX 設計</li>
                                        <li>API 連携 / データベース設計</li>
                                        <li>高速パフォーマンス最適化</li>
                                        <li>納品後6ヶ月の運用サポート</li>
                                    </ul>
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">1.5〜2ヶ月</td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">120〜200万円</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-left mt-10 mb-4">
                    項目別の詳細
                    <span className="text-[18px] sm:text-sm ml-2">(税別)</span>
                </h3>
                <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/10">
                    <table className="min-w-[1198px] text-white text-sm sm:text-base">
                        <tbody>
                            <tr className="border-b border-white/10 odd:bg-white/0 even:bg-white/5 hover:bg-white/10">
                                <th className="text-left font-medium px-4 py-4 align-middle bg-white/10 whitespace-nowrap">制作料金（Development Fee）</th>
                                <td className="px-4 py-4 align-top">
                                    <div className="font-bold">300,000 円 〜 2,000,000 円</div>
                                    <div className="text-sm opacity-80 mt-1">※ プラットフォーム・機能により変動</div>
                                </td>
                            </tr>
                            <tr className="border-b border-white/10 odd:bg-white/0 even:bg-white/5 hover:bg-white/10">
                                <th className="text-left font-medium px-4 py-4 align-middle bg-white/10 whitespace-nowrap">保守管理費（Maintenance Fee）</th>
                                <td className="px-4 py-4 align-top">
                                    <div className="font-bold">20,000 円 / 月 〜</div>
                                    <div className="text-sm opacity-80 mt-1">※ オプション詳細は別途記載</div>
                                </td>
                            </tr>
                            <tr className="border-b border-white/10 odd:bg-white/0 even:bg-white/5 hover:bg-white/10">
                                <th className="text-left font-medium px-4 py-4 align-middle bg-white/10 whitespace-nowrap">料金変動要因（Pricing Factors）</th>
                                <td className="px-4 py-4 align-top">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>調査にかかる時間</li>
                                        <li>企画・戦略設計の難度</li>
                                        <li>デザイン工数</li>
                                        <li>制作ページ数</li>
                                        <li>開発機能の難度</li>
                                        <li>選択するプラットフォーム（WordPress / React / Next.js / MERN Stack）</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="border-b border-white/10 odd:bg-white/0 even:bg-white/5 hover:bg-white/10">
                                <th className="text-left font-medium px-4 py-4 align-middle bg-white/10 whitespace-nowrap">基本制作方針（Development Policy）</th>
                                <td className="px-4 py-4 align-top">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>WordPress（CMS）</li>
                                        <li>フロントエンド開発（NextJSやNuxtJS等）、バックエンド開発（Node、Python、Laravel等）</li>
                                        <li>クライアント要件に応じた技術選択</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="border-b border-white/10 odd:bg-white/0 even:bg-white/5 hover:bg-white/10">
                                <th className="text-left font-medium px-4 py-4 align-middle bg-white/10 whitespace-nowrap">対象サイト（Target Sites）</th>
                                <td className="px-4 py-4 align-top">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>コーポレートサイト</li>
                                        <li>サービスサイト</li>
                                        <li>ブランドサイト</li>
                                        <li>採用サイト</li>
                                        <li>Webアプリケーション</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="border-b border-white/10 odd:bg-white/0 even:bg-white/5 hover:bg-white/10">
                                <th className="text-left font-medium px-4 py-4 align-middle bg-white/10 whitespace-nowrap">制作期間（Production Period）</th>
                                <td className="px-4 py-4 align-top">1週間 〜 2ヶ月</td>
                            </tr>
                            <tr className="border-b border-white/10 odd:bg-white/0 even:bg-white/5 hover:bg-white/10">
                                <th className="text-left font-medium px-4 py-4 align-middle bg-white/10 whitespace-nowrap">サービス概要（Service Overview）</th>
                                <td className="px-4 py-4 align-top">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Web 戦略コンサルティング</li>
                                        <li>ホームページ制作</li>
                                        <li>Web アプリ開発</li>
                                        <li>サイト運用・実行支援</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="odd:bg-white/0 even:bg-white/5 hover:bg-white/10">
                                <th className="text-left font-medium px-4 py-4 align-middle bg-white/10 whitespace-nowrap">補足（Notes）</th>
                                <td className="px-4 py-4 align-top">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>CMS 仕様なしサイトも制作可</li>
                                        <li>制作内容を予算に応じてテンプレート開発可</li>
                                        <li>WordPress の高度機能開発可</li>
                                        <li>React / Next.js ベースの拡張開発対応</li>
                                        <li>多言語対応可</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* SEO・MEO・Analytics Table */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-left mt-10 mb-4">
                    <span className="block [@media(min-width:426px)]:inline">
                        SEO・MEO・Analytics 
                        <span className="block [@media(min-width:510px)]:inline">
                            設定料金
                            <span className="text-[18px] sm:text-sm ml-2">(税別)</span>
                        </span>
                    </span>
                </h3>
                <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/10">
                    <table className="min-w-[1190px] text-white text-sm sm:text-base">
                        <thead className="sticky top-0 bg-slate-900/60 backdrop-blur-sm">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">オプション名</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">内容（概要）</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">料金目安</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">SEO（初期対策）</th>
                                <td className="px-4 py-4 align-middle">
                                    キーワード調査、メタタグ最適化、サイト構造改善、主要ページのコンテンツ最適化、検索エンジン連係（目安：〜15ページ）
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">50,000〜150,000円（一括）</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">SEO（継続運用）</th>
                                <td className="px-4 py-4 align-middle">
                                    コンテンツ制作支援、技術的改善、被リンク対策、月次レポート、KPI管理
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">50,000〜200,000円／月</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">MEO（初期対策）</th>
                                <td className="px-4 py-4 align-middle">
                                    Googleビジネスプロフィール初期設定、情報最適化、NAPの統一
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">30,000〜80,000円（一括）</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">MEO（運用代行）</th>
                                <td className="px-4 py-4 align-middle">
                                    Googleビジネスプロフィールの投稿管理、口コミ対応、月次分析、改善提案 など
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">30,000〜100,000円／月</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">Analytics（GA4 / GSC 設定）</th>
                                <td className="px-4 py-4 align-middle">
                                    GA4 設定、イベント計測、コンバージョン設定、Google サーチコンソール連携
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">20,000〜80,000円（一括）</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Disclaimer Text */}
                <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg backdrop-blur-sm">
                    <p className="text-white text-center text-base sm:text-lg leading-relaxed">
                        ※上記金額は目安です。ページ数・機能・要件により金額は変動します。正式な御見積は要件確定後にご提示いたします。<br />
                        ご不明点やカスタム要望があればお知らせください。
                    </p>
                </div>
                
                {/* Image Content Table */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-left mt-10 mb-4">
                    画像・コンテンツ
                    <span className="block [@media(min-width:510px)]:inline">
                        設定料金
                        <span className="text-[18px] sm:text-sm ml-2">(税別)</span>
                    </span>
                </h3>
                <div className="overflow-x-auto rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/10 mb-10">
                    <table className="min-w-[1198px] text-white text-sm sm:text-base">
                        <thead className="sticky top-0 bg-slate-900/60 backdrop-blur-sm">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">サービス</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">内容</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">料金</th>
                                <th className="px-4 py-3 text-left font-semibold border-b border-white/20">備考</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">写真撮影</th>
                                <td className="px-4 py-4 align-middle">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>商品撮影（1点）</li>
                                        <li>人物撮影（1時間）</li>
                                        <li>企業・店舗撮影（半日）</li>
                                    </ul>
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">
                                    <div>5,000円〜</div>
                                    <div>15,000円〜</div>
                                    <div>30,000円〜</div>
                                </td>
                                <td className="px-4 py-4 align-middle">※ 撮影場所・条件により変動</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">画像編集・加工</th>
                                <td className="px-4 py-4 align-middle">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>写真の色調補正・リタッチ</li>
                                        <li>背景除去・合成</li>
                                        <li>バナー・アイコン制作</li>
                                    </ul>
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">
                                    <div>3,000円〜</div>
                                    <div>5,000円〜</div>
                                    <div>8,000円〜</div>
                                </td>
                                <td className="px-4 py-4 align-middle">※ 1点あたりの料金</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">動画制作</th>
                                <td className="px-4 py-4 align-middle">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>商品紹介動画（30秒）</li>
                                        <li>企業紹介動画（1分）</li>
                                        <li>動画編集・加工</li>
                                    </ul>
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">
                                    <div>50,000円〜</div>
                                    <div>100,000円〜</div>
                                    <div>20,000円〜</div>
                                </td>
                                <td className="px-4 py-4 align-middle">※ 撮影込みの料金</td>
                            </tr>
                            <tr className="align-top odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                                <th className="px-4 py-4 text-left bg-white/10 align-middle whitespace-nowrap">コンテンツ制作</th>
                                <td className="px-4 py-4 align-middle">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>ライティング（1記事）</li>
                                        <li>コピーライティング</li>
                                        <li>翻訳（1,000文字）</li>
                                    </ul>
                                </td>
                                <td className="px-4 py-4 align-middle whitespace-nowrap">
                                    <div>10,000円〜</div>
                                    <div>15,000円〜</div>
                                    <div>8,000円〜</div>
                                </td>
                                <td className="px-4 py-4 align-middle">※ 文字数・難易度により変動</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section >
    )
}
