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
  title: "필립(必立) | 데이터 기반 마케팅 에이전시",
  description: "감이 아니라 데이터로 마케팅을 세웁니다. 브랜드를 반드시(必) 일으켜 세우는(立) 필립(Philip).",
};

import FloatingCall from "@/components/FloatingCall";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${outfit.variable} ${notoNS.variable}`}>
        <div className="glow-bg">
          <div className="glow-circle glow-1"></div>
          <div className="glow-circle glow-2"></div>
        </div>
        {children}
        <FloatingCall />
      </body>
    </html>
  );
}
