import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "문의하기 | 필립(必立)",
    description: "필립과 함께 브랜드를 성장시키세요. 문의하기",
};

export default function ContactPage() {
    return (
        <main>
            <Header />
            <div style={{ paddingTop: "80px" }}>
                <Contact />
            </div>
        </main>
    );
}
