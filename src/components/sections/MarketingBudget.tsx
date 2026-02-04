import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import styles from "./MarketingBudget.module.css";
// import { marketingBudget } from "@/data/siteData"; // Using siteData, but custom implementation as requested

const MarketingBudget = () => {
    return (
        <section className={styles.marketingBudget}>
            {/* Background Decor */}
            <div className={styles.glowBg} />

            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        합리적인 예산 집행, <br />
                        <span className={styles.goldText}>필립의 데이터는 '감액'도 제안합니다.</span>
                    </h2>
                    <p className={styles.desc}>
                        대다수의 대행사는 감액을 제안하지 않습니다.<br />
                        <span className={styles.orangeText}>대행사의 수익은 광고주의 소진액에 비례하기 때문입니다.</span>
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Reduction Card */}
                    <div className={`${styles.card} ${styles.reductionCard}`}>
                        <div className={`${styles.iconBox} ${styles.iconGold}`}>
                            <TrendingDown size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>데이터 기반 감액</h3>
                        <p className={styles.cardDesc}>
                            성과가 정체된 지면을 필터링하여 불필요한 비용을 절감합니다.
                            우리는 광고주의 이익을 위해 'NO'라고 말할 수 있는 파트너입니다.
                        </p>
                    </div>

                    {/* Expansion Card */}
                    <div className={`${styles.card} ${styles.expansionCard}`}>
                        <div className={`${styles.iconBox} ${styles.iconOrange}`}>
                            <TrendingUp size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>전략적 예산 집중</h3>
                        <p className={styles.cardDesc}>
                            검증된 고효율 채널에는 공격적으로 예산을 투여합니다.
                            최적의 타이밍에 최대의 ROAS를 끌어내는 것이 우리의 실력입니다.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className={styles.ctaContainer}>
                    <a href="#contact" className={styles.ctaButton}>
                        내 브랜드 예산 진단받기
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MarketingBudget;
