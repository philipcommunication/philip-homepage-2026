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
        <section className={`${styles.serviceJourney} v7-ivory-section`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Service Journey</h2>
                    <p className={styles.desc}>진단부터 실행까지, 5가지 제안</p>
                </div>

                <div className={styles.timelineContainer}>
                    {/* Connecting Line (Desktop) */}
                    <div className={styles.line} />

                    <div className={styles.stepsWrapper}>
                        {steps.map((step, index) => (
                            <div key={index} className={styles.stepItem}>
                                <div className={styles.iconCircle}>
                                    {/* Size prop is supported by LucideReact icons */}
                                    {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
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
