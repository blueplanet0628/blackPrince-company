import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ForcedLoader from "@/components/ForcedLoader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "Apple Color Emoji",
    "Segoe UI Emoji",
  ],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
  ],
});

export const metadata: Metadata = {
  title: {
    default: "ＢｌａｃｋＰｒｉｎｃｅ株式会社 — Webサイト制作とグロース",
    template: "%s | ＢｌａｃｋＰｒｉｎｃｅ株式会社",
  },
  description:
    "ＢｌａｃｋＰｒｉｎｃｅ株式会社は、数ヶ月ではなく数日で、美しく高速なWebサイトを制作します。デザイン、SEO、アナリティクス、パフォーマンスでビジネスの成長を支援します。",
  keywords: [
    "ＢｌａｃｋＰｒｉｎｃｅ株式会社",
    "web design",
    "SEO",
    "SEM",
    "analytics",
    "portfolio",
    "Japan",
    "agency",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ＢｌａｃｋＰｒｉｎｃｅ株式会社 — Webサイト制作とグロース",
    description:
      "数日でプロフェッショナルなWebサイトを公開。終わりのない会議は不要。結果に集中します。",
    url: "/",
    siteName: "ＢｌａｃｋＰｒｉｎｃｅ株式会社",
    images: [{ url: "/logo/logo.png", width: 1200, height: 630, alt: "ＢｌａｃｋＰｒｉｎｃｅ株式会社" }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ＢｌａｃｋＰｒｉｎｃｅ株式会社 — Webサイト制作とグロース",
    description:
      "数日でプロフェッショナルなWebサイトを公開。デザイン、SEO、アナリティクス込み。",
    images: ["/logo/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#134a8b",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-[#00c7f1]/20`}
      >
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 rounded bg-white px-3 py-2 text-sm text-slate-900 shadow"
        >
          Skip to content
        </a>
        <ForcedLoader durationMs={1500} />
        {children}
      </body>
    </html>
  );
}
