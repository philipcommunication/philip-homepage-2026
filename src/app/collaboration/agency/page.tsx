import Header from "@/components/Header";
import Footer from "@/components/sections/Contact";
import Image from "next/image";
import styles from "../collaboration.module.css";
import { agencyCollabs } from "@/data/siteData";

export default function AgencyPage() {
    return (
        <main>
            <Header />
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>대행사/실행사 협업</h1>
                    <p className={styles.subtitle}>필립과 함께 마케팅 성장을 가속화할 비즈니스 파트너를 찾습니다.</p>
                </div>
            </div>

            <section className={styles.contentSection}>
                <div className="container">
                    {agencyCollabs.map((collab, index) => (
                        <div key={collab.id} className={`${styles.collabItem} ${index % 2 === 1 ? styles.reverse : ""}`}>
                            <div className={styles.imageBox}>
                                <Image src={collab.image} alt={collab.title} fill style={{ objectFit: "cover" }} className={styles.img} unoptimized />
                            </div>
                            <div className={styles.textBox}>
                                <h2 className={styles.itemTitle}>{collab.title}</h2>
                                <p className={styles.itemDesc}>{collab.description}</p>
                                {collab.isActive ? (
                                    <a href={collab.link} target="_blank" rel="noopener noreferrer" className={styles.applyBtn}>
                                        {collab.buttonText || "신청하기"}
                                    </a>
                                ) : (
                                    <button className={`${styles.applyBtn} ${styles.disabled}`} disabled>
                                        {collab.buttonText || "신청하기"}
                                    </button>
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
