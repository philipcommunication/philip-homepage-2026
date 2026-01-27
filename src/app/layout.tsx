import type { Metadata } from "next";
import { Outfit, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const notoNS = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.philip.kr"), // 도메인에 맞게 수정
  title: "필립(必立) | 데이터 기반 마케팅 에이전시",
  description: "감이 아니라 데이터로 마케팅을 세웁니다. 브랜드를 반드시(必) 일으켜 세우는(立) 필립(Philip).",
  keywords: ["마케팅 에이전시", "데이터 분석", "퍼포먼스 마케팅", "브랜드 마케팅", "필립", "Philip"],
  openGraph: {
    title: "필립(必立) | 데이터 기반 마케팅 에이전시",
    description: "브랜드를 반드시(必) 일으켜 세우는(立) 파트너, 필립입니다.",
    url: "https://www.philip.kr",
    siteName: "필립(Philip)",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/philip-ci.png", // public 폴더의 philip-ci.png 사용
        width: 1200,
        height: 630,
        alt: "Philip Marketing Agency",
      },
    ],
  },
  verification: {
    other: {
      "naver-site-verification": "272ea4f8a865ea27b492ea1794c6423875e7552d",
    },
  },
  alternates: {
    canonical: "https://www.philip.kr",
  },

};

import FloatingCall from "@/components/FloatingCall";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MQWCZKW');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${outfit.variable} ${notoNS.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MQWCZKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="glow-bg">
          <div className="glow-circle glow-1"></div>
          <div className="glow-circle glow-2"></div>
        </div>
        {children}
        <FloatingCall />
        <BackToTop />
      </body>
    </html>
  );
}
