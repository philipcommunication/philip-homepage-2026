import Header from "@/components/Header";
import Footer from "@/components/sections/Contact";
import styles from "./post.module.css";

export default function BlogPost() {
    return (
        <main>
            <Header />
            <article className={styles.container}>
                <div className="container">
                    <header className={styles.header}>
                        <div className={styles.category}>데이터분석</div>
                        <h1 className={styles.title}>데이터로 마케팅 성과를 200% 올리는 법</h1>
                        <div className={styles.meta}>2025.01.20 | 작성자: 필립</div>
                    </header>

                    <div className={styles.postBody}>
                        <p>데이터 기반 마케팅은 현대 비즈니스에서 선택이 아닌 필수입니다. 많은 브랜드들이 단순히 감에 의존하여 광고를 집행하고 있지만, 실제 성과는 철저한 데이터 분석에서 비롯됩니다.</p>
                        <h3>1. 정확한 트래킹 설정</h3>
                        <p>GA4, GTM 등을 활용하여 고객이 어디서 들어오고 어디서 이탈하는지 정확하게 파악해야 합니다.</p>
                        <h3>2. 퍼널 분석의 중요성</h3>
                        <p>인지, 고려, 전환의 각 단계에서 발생하는 데이터의 흐름을 분석하여 병목 구간을 해결하면 성과는 자연스럽게 개선됩니다.</p>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}
