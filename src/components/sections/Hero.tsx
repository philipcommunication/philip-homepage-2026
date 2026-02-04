"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className={`${styles.hero} ${isLoaded ? styles.active : ""}`}>
            <div className={styles.glow} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.dot}></span>
                        PREMIUM MARKETING PARTNER
                    </div>

                    <h1 className={styles.mainTitle}>
                        <span>데이터로 증명하는</span>
                        <span className={styles.goldText}>비즈니스의 압도적 성장</span>
                    </h1>

                    <p className={styles.description}>
                        필립은 단순한 대행을 넘어 브랜드의 현재를 진단하고,
                        데이터 기반의 마케팅 설계를 통해 실제 매출이라는 결과로 보답합니다.
                    </p>

                    <div className={styles.ctaGroup}>
                        <a href="#contact" className={styles.primaryBtn}>
                            브랜드 예산 진단받기
                        </a>
                        <a href="#services" className={styles.secondaryBtn}>
                            서비스 둘러보기
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>SCROLL DOWN</span>
                <div className={styles.mouse}></div>
            </div>
        </section>
    );
}
