import Header from "@/components/Header";
import Footer from "@/components/sections/Contact";
import Link from "next/link";
import styles from "./blog.module.css";

const posts = [
    { id: 1, title: "데이터로 마케팅 성과를 200% 올리는 법", date: "2025.01.20", category: "데이터분석" },
    { id: 2, title: "2025년 가장 주목받는 바이럴 마케팅 트렌드", date: "2025.01.18", category: "바이럴대행" },
    { id: 3, title: "성공적인 광고 집행을 위한 예산 설계 가이드", date: "2025.01.15", category: "공식광고" },
    { id: 4, title: "고객의 마음을 움직이는 카피라이팅 기법", date: "2025.01.10", category: "마케팅컨설팅" },
];

export default function BlogList() {
    return (
        <main>
            <Header />
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>블로그</h1>
                    <p className={styles.subtitle}>필립의 마케팅 인사이트를 경험하세요.</p>
                </div>
            </div>

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.grid}>
                        {posts.map((post) => (
                            <Link href={`/blog/${post.id}`} key={post.id} className={styles.card}>
                                <div className={styles.category}>{post.category}</div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <div className={styles.date}>{post.date}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
