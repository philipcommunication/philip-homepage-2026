import type { Metadata } from "next";
import Header from "@/components/Header";
import Reference from "@/components/sections/Reference";

export const metadata: Metadata = {
    title: "레퍼런스 | 필립(必立)",
    description: "필립의 성공적인 마케팅 포트폴리오를 확인하세요.",
};

export default function ReferencePage() {
    return (
        <main>
            <Header />
            {/* Reference 컴포넌트는 자체적으로 상단 패딩이 넉넉함 (10rem) */}
            <Reference />
        </main>
    );
}
