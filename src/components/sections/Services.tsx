import styles from "./Services.module.css";
import { ArrowRight } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>
                        필립과 함께하면 비즈니스는 <br />
                        <span className={styles.highlight}>어떻게 진화할까요?</span>
                    </h2>

                    <div className={styles.keywordGrid}>
                        <div className={styles.keywordItem}>
                            <span className={styles.ko}>진화</span>
                            <span className={styles.en}>Evolution</span>
                        </div>
                        <div className={styles.keywordItem}>
                            <span className={styles.ko}>전환</span>
                            <span className={styles.en}>Transformation</span>
                        </div>
                        <div className={styles.keywordItem}>
                            <span className={styles.ko}>최적화</span>
                            <span className={styles.en}>Optimization</span>
                        </div>
                    </div>
                </div>

                <div className={styles.visualizationWrapper}>
                    <div className={styles.comparisonGrid}>
                        {/* Before Section */}
                        <div className={styles.compCol}>
                            <h4 className={styles.colLabel}>필립 진입 전</h4>

                            <div className={styles.barGroup}>
                                <div className={styles.barLabel}>
                                    <span>광고 예산</span>
                                    <span className={styles.value}>500만원</span>
                                </div>
                                <div className={styles.barTrack}>
                                    <div className={`${styles.barFill} ${styles.bgGrey}`} style={{ width: '100%' }}></div>
                                </div>
                            </div>

                            <div className={styles.barGroup}>
                                <div className={styles.barLabel}>
                                    <span>성과 (ROAS)</span>
                                    <span className={styles.value}>250%</span>
                                </div>
                                <div className={styles.barTrack}>
                                    <div className={`${styles.barFill} ${styles.bgGrey}`} style={{ width: '50%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Centered Arrow */}
                        <div className={styles.arrow}>
                            <ArrowRight size={48} />
                        </div>

                        {/* After Section */}
                        <div className={styles.compCol}>
                            <h4 className={`${styles.colLabel} ${styles.active}`}>
                                <span className={styles.activeDot}></span>
                                필립 진입 후
                            </h4>

                            <div className={styles.barGroup}>
                                <div className={styles.barLabel}>
                                    <span className={styles.impact}>예산 40% 절감</span>
                                    <span className={styles.value}>300만원</span>
                                </div>
                                <div className={styles.barTrack}>
                                    <div className={`${styles.barFill} ${styles.bgGold}`} style={{ width: '60%' }}></div>
                                </div>
                            </div>

                            <div className={styles.barGroup}>
                                <div className={styles.barLabel}>
                                    <span className={styles.impact}>성과 44% 향상</span>
                                    <span className={styles.value}>360%</span>
                                </div>
                                <div className={styles.barTrack}>
                                    <div className={`${styles.barFill} ${styles.bgOrange}`} style={{ width: '72%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statusCard}>
                        <div className={styles.statusInner}>
                            적은 예산으로도 <span className={styles.impact}>더 높은 성과</span>를 만드는 것이 필립의 실력입니다.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
