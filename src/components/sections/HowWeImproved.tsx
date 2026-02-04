import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import styles from "./HowWeImproved.module.css";

const HowWeImproved = () => {
    const cases = [
        {
            category: "예산 최적화",
            before: "성과 없는 키워드에 예산 40% 낭비",
            after: "불필요 예산 삭감 후 고효율 채널 집중 투자",
            result: "ROAS 210% → 450% 상승"
        },
        {
            category: "점유율 전략",
            before: "경쟁사 대비 검색 점유율 15% 미만",
            after: "데이터 기반 분석으로 효율성 극대화",
            result: "브랜드 키워드 점유율 78% 달성"
        }
    ];

    return (
        <section className={`${styles.howWeImproved} v7-ivory-section`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.highlight}>How We Improved:</span> <br />
                        우리는 무엇을 어떻게 바꾸었는가
                    </h2>
                </div>

                <div className={styles.grid}>
                    {cases.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.categoryBadge}>{item.category}</span>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.comparisonItem}>
                                    <XCircle className={styles.iconX} size={22} />
                                    <div className={styles.textGroup}>
                                        <span className={styles.labelBefore}>기존</span>
                                        <p className={styles.textBefore}>{item.before}</p>
                                    </div>
                                </div>

                                <div className={styles.comparisonItem}>
                                    <CheckCircle2 className={styles.iconCheck} size={22} />
                                    <div className={styles.textGroup}>
                                        <span className={styles.labelAfter}>필립</span>
                                        <p className={styles.textAfter}>{item.after}</p>
                                    </div>
                                </div>

                                <div className={styles.resultBox}>
                                    <div className={styles.resultLabel}>결과 지표</div>
                                    <div className={styles.resultValue}>{item.result}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeImproved;
