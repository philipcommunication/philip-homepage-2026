import Image from "next/image";
import styles from "./WhyPhilip.module.css";
// import { strengths } from "@/data/siteData"; // Using custom data for icons
import { ClipboardList, BarChart3, Settings, ScrollText, FlaskConical } from "lucide-react";

export default function WhyPhilip() {
    // Custom data mapping to include Lucide icons
    const features = [
        {
            title: "마케팅\n현황 진단",
            desc: "광고 대행에 앞서 현시점 SWAT분석을 통해 문제점과 개선점을 진단합니다.",
            icon: <ClipboardList size={32} />
        },
        {
            title: "데이터\n기반 전략",
            desc: "단순한 추측이 아닌, 실제 시장 데이터와 소비자 행동 분석을 통해 승리하는 마케팅 전략을 수립합니다.",
            icon: <BarChart3 size={32} />
        },
        {
            title: "단계별\n최적화\n프로세스",
            desc: "인지부터 구매까지, 고객 여정의 모든 접점(Touch-point)을 분석하여 전환율을 극대화합니다.",
            icon: <Settings size={32} />
        },
        {
            title: "최적의\nA/B\n테스트",
            desc: "최고의 성과를 찾기 위해 소재, 타겟, 매체를 끊임없이 테스트하고 개선하여 최적의 효율을 유지합니다.",
            icon: <FlaskConical size={32} />
        },
        {
            title: "투명한\n리포팅",
            desc: "매주/매월 상세한 성과 지표 리포트를 제공하며, 광고비 지출 대비 수익(ROAS)을 명확하게 증명합니다.",
            icon: <ScrollText size={32} />
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
