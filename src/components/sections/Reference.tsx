import Image from "next/image";
import styles from "./Reference.module.css";
import { portfolioItems } from "@/data/portfolio";
import { siteConfig } from "@/data/siteData";

export default function Reference() {
    // 무한 롤링을 위해 아이템 복제
    const firstRow = [...portfolioItems.slice(0, 8), ...portfolioItems.slice(0, 8)];
    const secondRow = [...portfolioItems.slice(8), ...portfolioItems.slice(8)];

    return (
        <section id="reference" className={`${styles.reference} v7-white-section`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>포트폴리오</h2>
                    <p className={styles.sectionDesc}>필립의 데이터 기반 성공 사례를 확인하세요.</p>
                </div>
            </div>

            <div className={styles.portfolioContainer}>
                {/* 첫 번째 줄: 왼쪽으로 롤링 */}
                <div className={`${styles.rollingRow} styles.rollingRowLeft`}>
                    <div className={`${styles.rollingRow} ${styles.rollingRowLeft}`}>
                        {firstRow.map((item, idx) => (
                            <div key={`${item.id}-${idx}`} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        unoptimized
                                    />
                                    <div className={styles.cardOverlay}>
                                        <span className={styles.category}>{item.category}</span>
                                        <h3 className={styles.cardTitle}>{item.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 두 번째 줄: 오른쪽으로 롤링 */}
                <div className={`${styles.rollingRow} styles.rollingRowRight`}>
                    <div className={`${styles.rollingRow} ${styles.rollingRowRight}`}>
                        {secondRow.map((item, idx) => (
                            <div key={`${item.id}-${idx}`} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        unoptimized
                                    />
                                    <div className={styles.cardOverlay}>
                                        <span className={styles.category}>{item.category}</span>
                                        <h3 className={styles.cardTitle}>{item.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.ctaWrapper}>
                    <a
                        href={siteConfig.links.proposal}
                        id="btn-proposal-download"
                        className={styles.downloadBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        제안서 다운로드
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21H19.439a2 2 0 001.94-1.515L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
