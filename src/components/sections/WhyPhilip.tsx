import Image from "next/image";
import styles from "./WhyPhilip.module.css";
import { ClipboardList, BarChart3, Settings, ScrollText, FlaskConical } from "lucide-react";

export default function WhyPhilip() {
    const features = [
        {
            title: "마케팅\n현황 진단",
            desc: "광고 대행에 앞서 현시점 SWAT분석을 통해 문제점과 개선점을 진단합니다.",
            icon: <ClipboardList size={32} />,
            bgSvg: (
                <svg className={styles.cardBg} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="90" cy="10" r="20" fill="currentColor" opacity="0.05" />
                    <rect x="70" y="70" width="40" height="40" rx="8" transform="rotate(15)" fill="currentColor" opacity="0.03" />
                </svg>
            )
        },
        {
            title: "데이터\n기반 전략",
            desc: "단순한 추측이 아닌, 실제 시장 데이터와 소비자 행동 분석을 통해 승리하는 마케팅 전략을 수립합니다.",
            icon: <BarChart3 size={32} />,
            bgSvg: (
                <svg className={styles.cardBg} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 80 L20 60 L40 70 L60 40 L80 50 L100 20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.05" />
                    <circle cx="85" cy="25" r="5" fill="currentColor" opacity="0.1" />
                </svg>
            )
        },
        {
            title: "단계별\n최적화\n프로세스",
            desc: "인지부터 구매까지, 고객 여정의 모든 접점(Touch-point)을 분석하여 전환율을 극대화합니다.",
            icon: <Settings size={32} />,
            bgSvg: (
                <svg className={styles.cardBg} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="10" y="10" width="80" height="80" rx="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" strokeDasharray="4 4" />
                    <path d="M50 20 V80 M20 50 H80" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
                </svg>
            )
        },
        {
            title: "최적의\nA/B\n테스트",
            desc: "최고의 성과를 찾기 위해 소재, 타겟, 매체를 끊임없이 테스트하고 개선하여 최적의 효율을 유지합니다.",
            icon: <FlaskConical size={32} />,
            bgSvg: (
                <svg className={styles.cardBg} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="20" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.05" />
                    <circle cx="80" cy="20" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.05" />
                    <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.03" />
                </svg>
            )
        },
        {
            title: "투명한\n리포팅",
            desc: "매주/매월 상세한 성과 지표 리포트를 제공하며, 광고비 지출 대비 수익(ROAS)을 명확하게 증명합니다.",
            icon: <ScrollText size={32} />,
            bgSvg: (
                <svg className={styles.cardBg} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="50" y="-10" width="60" height="60" rx="10" transform="rotate(45)" fill="currentColor" opacity="0.04" />
                    <path d="M10 20 H50 M10 40 H70 M10 60 H40" stroke="currentColor" strokeWidth="1" opacity="0.06" />
                </svg>
            )
        }
    ];

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
                    {features.map((item, index) => (
                        <div key={index} className={styles.card}>
                            {item.bgSvg}
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>
                                {item.title.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
