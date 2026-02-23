"use client";

import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2, XCircle, TrendingUp, PieChart as PieIcon, Search, Users } from 'lucide-react';
import styles from "./HowWeImproved.module.css";

const HowWeImproved = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const cases = [
        {
            category: "ROAS 극대화",
            title: "비효율 예산 제로화 전략",
            before: "성과 미달 키워드 및 매체에 예산 40% 누수",
            after: "고관여 잠재고객 데이터 기반 매체 재분배",
            valBefore: 210,
            valAfter: 450,
            unit: "%",
            label: "ROAS",
            icon: <TrendingUp size={24} />
        },
        {
            category: "시장 점유 선점",
            title: "핵심 키워드 환경 선점",
            before: "경쟁사 대비 검색 점유율 15% 미만 (사각지대)",
            after: "놓치고 있던 유효 키워드 및 신규 키워드 발굴 전략",
            valBefore: 15,
            valAfter: 78,
            unit: "%",
            label: "공유율",
            icon: <PieIcon size={24} />
        },
        {
            category: "정밀 데이터 진단",
            title: "이탈 원인 추적 및 전환 최적화",
            before: "높은 유입 대비 상세페이지 이탈률 85% 상회",
            after: "사용자 행동 패턴 분석을 통한 이탈 구간 집중 개선",
            valBefore: 1.2,
            valAfter: 4.8,
            unit: "%",
            label: "전환율",
            icon: <Search size={24} />
        },
        {
            category: "최적 채널 믹스",
            title: "타겟 맞춤형 매체 고도화",
            before: "타겟층과 부합하지 않는 매체 운영으로 광고 효율 저하",
            after: "고객 페르소나 분석을 통한 반응 기반 채널 전환 제안",
            valBefore: 350,
            valAfter: 920,
            unit: "건",
            label: "유입량",
            icon: <Users size={24} />
        }
    ];

    return (
        <section className={`${styles.howWeImproved} v7-ivory-section`} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.highlight}>How We Improved:</span> <br />
                        우리는 무엇을 어떻게 바꾸었는가
                    </h2>
                    <p className={styles.sectionDesc}>필립은 단순한 대행이 아닌, 비즈니스의 구조적 우위를 설계합니다.</p>
                </div>

                <div className={styles.grid}>
                    {cases.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardHeaderLeft}>
                                    <span className={styles.categoryBadge}>{item.category}</span>
                                    <h3 className={styles.cardMainTitle}>{item.title}</h3>
                                </div>
                                <div className={styles.headerIcon}>{item.icon}</div>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.comparisonGrid}>
                                    <div className={styles.compItem}>
                                        <div className={styles.compLabel}><XCircle size={14} /> 기존 상황</div>
                                        <p className={styles.compText}>{item.before}</p>
                                    </div>
                                    <div className={styles.compItemActive}>
                                        <div className={styles.compLabelActive}><CheckCircle2 size={14} /> 필립의 솔루션</div>
                                        <p className={styles.compTextActive}>{item.after}</p>
                                    </div>
                                </div>

                                <div className={styles.visualBox}>
                                    <div className={styles.graphHeader}>
                                        <span className={styles.graphTitle}>성능 지표 변화</span>
                                        <div className={styles.legend}>
                                            <span className={styles.legendDotBefore}></span> 기존
                                            <span className={styles.legendDotAfter}></span> 필립
                                        </div>
                                    </div>

                                    <div className={styles.graphContainer}>
                                        {/* Bar comparison logic */}
                                        <div className={styles.barWrapper}>
                                            <div className={styles.barGroup}>
                                                <div className={styles.barLabel}>기존 {item.valBefore}{item.unit}</div>
                                                <div className={styles.barTrack}>
                                                    <div
                                                        className={styles.barFillBefore}
                                                        style={{ width: isVisible ? `${(item.valBefore / item.valAfter) * 100}%` : '0%' }}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className={styles.barGroup}>
                                                <div className={styles.barLabelActive}>필립 {item.valAfter}{item.unit}</div>
                                                <div className={styles.barTrack}>
                                                    <div
                                                        className={styles.barFillAfter}
                                                        style={{ width: isVisible ? '100%' : '0%' }}
                                                    >
                                                        <div className={styles.shimmer}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.summaryResult}>
                                        <span className={styles.resLabel}>{item.label} 상승폭</span>
                                        <span className={styles.resValue}>
                                            +{Math.round((item.valAfter - item.valBefore) * 10) / 10}{item.unit}
                                        </span>
                                    </div>
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
