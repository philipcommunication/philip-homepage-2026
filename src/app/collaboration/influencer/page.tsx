import Header from "@/components/Header";
import Footer from "@/components/sections/Contact";
import Image from "next/image";
import styles from "../collaboration.module.css";
import { influencerCollabs } from "@/data/siteData";

export default function InfluencerPage() {
    return (
        <main>
            <Header />
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>인플루언서 협업</h1>
                    <p className={styles.subtitle}>필립과 함께 브랜드 가치를 높일 인플루언서를 찾습니다.</p>
                </div>
            </div>

            <section className={styles.contentSection}>
                <div className="container">
                    {influencerCollabs.map((collab, index) => (
                        <div key={collab.id} className={`${styles.collabItem} ${index % 2 === 1 ? styles.reverse : ""}`}>
                            <div className={styles.imageBox}>
                                <Image src={collab.image} alt={collab.title} fill style={{ objectFit: "cover" }} className={styles.img} unoptimized />
                            </div>
                            <div className={styles.textBox}>
                                <h2 className={styles.itemTitle}>{collab.title}</h2>
                                <p className={styles.itemDesc}>{collab.description}</p>
                                {collab.isActive ? (
                                    <a href={collab.link} target="_blank" rel="noopener noreferrer" className={styles.applyBtn}>신청하기</a>
                                ) : (
                                    <button className={`${styles.applyBtn} ${styles.disabled}`} disabled>모집 완료</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
