import React from 'react';
import { Target, Share2, BarChart3, Lightbulb, GraduationCap } from 'lucide-react';
import styles from "./ServiceJourney.module.css";

const ServiceJourney = () => {
    const steps = [
        { icon: <Target />, title: "공식 광고 대행", desc: "검증된 타겟팅으로 확실한 노출 점유" },
        { icon: <Share2 />, title: "바이럴 마케팅", desc: "직접 선별한 인플루언서 기반 자연스러운 확산" },
        { icon: <BarChart3 />, title: "데이터 진단", desc: "Analytics tool을 통한 실시간 성과 트래킹" },
        { icon: <Lightbulb />, title: "마케팅 컨설팅", desc: "브랜드 정체성에 맞춘 로드맵 설계" },
        { icon: <GraduationCap />, title: "마케팅 교육", desc: "실무에 바로 쓰이는 인하우스 교육" }
    ];

    return (
        <section className={styles.serviceJourney}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Service Journey</h2>
                    <p className={styles.desc}>진단부터 실행까지, 5가지 제안</p>
                </div>

                <div className={styles.timelineContainer}>
                    {/* SVG Flow Path for Desktop */}
                    <div className={styles.svgWrapper}>
                        <svg viewBox="0 0 1000 120" className={styles.flowSvg}>
                            <defs>
                                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#C5A059" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#C5A059" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M50 60 C 250 60, 250 60, 500 60 C 750 60, 750 60, 950 60"
                                fill="none"
                                stroke="url(#flowGrad)"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                            >
                                <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite" />
                            </path>
                            {/* Moving indicators */}
                            <circle r="4" fill="#C5A059">
                                <animateMotion
                                    path="M50 60 C 250 60, 250 60, 500 60 C 750 60, 750 60, 950 60"
                                    dur="5s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </svg>
                    </div>

                    <div className={styles.stepsWrapper}>
                        {steps.map((step, index) => (
                            <div key={index} className={styles.stepItem}>
                                <div className={styles.iconCircle}>
                                    {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
                                    <span className={styles.stepBadge}>{index + 1}</span>
                                </div>
                                <h3 className={styles.stepNumber}>Service 0{index + 1}</h3>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceJourney;
