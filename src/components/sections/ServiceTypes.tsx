"use client";

import { useState, useRef } from "react";
import styles from "./ServiceTypes.module.css";
import { serviceDetails } from "@/data/siteData";
import {
    Search,
    Target,
    Rocket,
    Zap,
    FileText,
    Globe,
    Users,
    Edit3,
    ShieldCheck,
    PieChart,
    BarChart2,
    MessageSquare,
    UserCheck,
    RefreshCw,
    Check,
    ChevronDown,
    ChevronUp,
    Heart,
    Handshake
} from 'lucide-react';

// Icon mapping for details
const getIcon = (serviceId: string, stepIndex: number) => {
    const iconSize = 20;
    const iconsMap: Record<string, React.ReactNode[]> = {
        "official-ad": [
            <Search key="s1" size={iconSize} />,
            <Target key="s2" size={iconSize} />,
            <Rocket key="s3" size={iconSize} />,
            <Zap key="s4" size={iconSize} />,
            <FileText key="s5" size={iconSize} />
        ],
        "viral-ad": [
            <Search key="v1" size={iconSize} />,
            <Globe key="v2" size={iconSize} />,
            <Users key="v3" size={iconSize} />,
            <Edit3 key="v4" size={iconSize} />,
            <ShieldCheck key="v5" size={iconSize} />,
            <PieChart key="v6" size={iconSize} />
        ],
        "data-analysis": [
            <Search key="da1" size={iconSize} />,
            <BarChart2 key="da2" size={iconSize} />,
            <Target key="da3" size={iconSize} />,
            <MessageSquare key="da4" size={iconSize} />
        ],
        "consulting": [
            <Search key="c1" size={iconSize} />,
            <PieChart key="c2" size={iconSize} />,
            <UserCheck key="c3" size={iconSize} />,
            <RefreshCw key="c4" size={iconSize} />,
            <Rocket key="c5" size={iconSize} />
        ],
        "education": [
            <Users key="e1" size={iconSize} />,
            <Edit3 key="e2" size={iconSize} />,
            <Target key="e3" size={iconSize} />,
            <ShieldCheck key="e4" size={iconSize} />,
            <Check key="e5" size={iconSize} />
        ]
    };

    return iconsMap[serviceId]?.[stepIndex] || <Check size={iconSize} />;
};

export default function ServiceTypes() {
    const [expandedIds, setExpandedIds] = useState<string[]>([]);
    const detailRef = useRef<HTMLDivElement>(null);

    const toggleExpand = (ids: string | string[]) => {
        const targetIds = Array.isArray(ids) ? ids : [ids];
        const isCurrentlyExpanded = expandedIds.length > 0 && expandedIds.every(id => targetIds.includes(id)) && targetIds.length === expandedIds.length;

        if (isCurrentlyExpanded) {
            setExpandedIds([]);
        } else {
            setExpandedIds(targetIds);
        }
    };

    const services = [
        {
            number: "01",
            title: "공식/바이럴 광고 대행",
            problem: "운영 방법도, 적합한 채널도 모른 채 예산만 쓰고 있다면",
            solution: "막막한 운영을 성과 중심의 실행으로 전환 (SA/DA + Viral)",
            targetIds: ["official-ad", "viral-ad"]
        },
        {
            number: "02",
            title: "데이터 분석 및 진단",
            problem: "어디가 잘못됐는지, 왜 안 팔리는지 이유조차 모른다면",
            solution: "밑 빠진 독에 물 붓기를 멈추는 정밀 진단",
            targetIds: ["data-analysis"]
        },
        {
            number: "03",
            title: "마케팅 컨설팅",
            problem: "마케팅 팀도, 기획자도 없어 의사결정이 어렵다면",
            solution: "당신의 비즈니스를 가장 잘 아는 전담 마케팅 팀 빌딩",
            targetIds: ["consulting"]
        },
        {
            number: "04",
            title: "실무 교육 및 내재화",
            problem: "대행사에 끌려다니지 않고 스스로 운영할 실력이 필요하다면",
            solution: "대표님과 직원이 직접 다루는 광고 최적화 실무",
            targetIds: ["education"]
        }
    ];

    return (
        <section id="service-types" className={`${styles.serviceTypes} v7-ivory-section`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>나에게 맞는 서비스</h2>
                    <p className={styles.sectionDesc}>필립은 가장 필요한 업무를 제공합니다.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => {
                        const isActive = expandedIds.length > 0 && expandedIds.every(id => service.targetIds.includes(id)) && service.targetIds.length === expandedIds.length;

                        return (
                            <div key={index} className={styles.itemWrapper} style={{ display: 'contents' }}>
                                <div className={`${styles.card} ${isActive ? styles.activeCard : ""}`}>
                                    <div className={styles.cardNumber}>{service.number}</div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <div className={styles.problemBox}>
                                        <span className={styles.quoteMark}>“</span>
                                        <p className={styles.problemText}>{service.problem}</p>
                                    </div>
                                    <div className={styles.divider} />
                                    <div className={styles.solutionBox}>
                                        <span className={styles.solutionLabel}>핵심</span>
                                        <p className={styles.solutionText}>{service.solution}</p>
                                    </div>

                                    <button
                                        onClick={() => toggleExpand(service.targetIds)}
                                        className={styles.detailBtn}
                                        aria-expanded={isActive}
                                    >
                                        {isActive ? "상세 프로세스 닫기" : "상세 프로세스 보기"}
                                        {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>
                                </div>

                                {/* Expanded Panel */}
                                {isActive && (
                                    <div className={styles.detailPanel}>
                                        <div className={styles.panelInner}>
                                            {service.targetIds.map((id) => {
                                                const detailData = serviceDetails.find(d => d.id === id);
                                                return <DetailContent key={id} data={detailData} serviceId={id} />;
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function DetailContent({ data, serviceId }: { data: any, serviceId: string }) {
    if (!data) return null;

    return (
        <div className={styles.contentWrap}>
            <div className={styles.introSection}>
                <h4 className={styles.introTitle}>{data.intro.title}</h4>
                <p className={styles.introDesc}>
                    {data.intro.desc.split('\n').map((line: string, i: number) => (
                        <span key={i}>{line}<br /></span>
                    ))}
                </p>
            </div>

            <div className={styles.processSection}>
                <div className={styles.processLabel}>{data.title} 프로세스</div>
                <div className={styles.processGrid}>
                    {data.process.map((step: any, idx: number) => (
                        <div key={idx} className={styles.stepItem}>
                            <div className={styles.stepTop}>
                                <span className={styles.stepIcon}>{getIcon(serviceId, idx)}</span>
                                <span className={styles.stepNum}>{step.step}</span>
                            </div>
                            <h5 className={styles.stepTitle}>{step.title}</h5>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
