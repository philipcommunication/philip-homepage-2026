import Image from "next/image";
import styles from "./WhyPhilip.module.css";
import { strengths } from "@/data/siteData";

export default function WhyPhilip() {
    return (
        <section className={`${styles.whyPhilip} v7-ivory-section`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>
                        왜
                        <Image
                            src="/images/logo-orange.png"
                            alt="필립"
                            width={100}
                            height={40}
                            className={styles.titleLogo}
                            unoptimized
                        />
                        이어야 할까요?
                    </h2>
                    <p className={styles.sectionDesc}>
                        필립이 마케팅 시장에서<br />
                        성과를 내는 이유입니다.
                    </p>
                </div>

                <div className={styles.grid}>
                    {strengths.map((item, index) => (
                        <div key={index} className={`${styles.card} glass`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.icon}>{item.icon}</div>
                                <h3 className={styles.cardTitle}>
                                    {item.title.split('\n').map((line, i) => (
                                        <span key={i}>{line}<br /></span>
                                    ))}
                                </h3>
                            </div>
                            <p className={styles.cardDesc}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
