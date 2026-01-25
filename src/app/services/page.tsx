import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
    title: "업무영역 | 필립(必立)",
    description: "필립의 마케팅 업무 영역을 소개합니다.",
};

export default function ServicesPage() {
    return (
        <main>
            <Header />
            <div style={{ paddingTop: "80px" }}>
                <Services />
            </div>
        </main>
    );
}
