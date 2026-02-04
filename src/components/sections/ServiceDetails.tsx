import React from 'react';
import styles from "./ServiceDetails.module.css";
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
    Check
} from 'lucide-react';

// Icon mapping per service step for professional look
const getIcon = (serviceId: string, stepIndex: number) => {
    const iconSize = 22;

    const iconsMap: Record<string, React.ReactNode[]> = {
        "official-ad": [
            <Search size={iconSize} />,
            <Target size={iconSize} />,
            <Rocket size={iconSize} />,
            <Zap size={iconSize} />,
            <FileText size={iconSize} />
        ],
        "viral-ad": [
            <Target size={iconSize} />,
            <Globe size={iconSize} />,
            <Users size={iconSize} />,
            <Edit3 size={iconSize} />,
            <ShieldCheck size={iconSize} />,
            <PieChart size={iconSize} />
        ],
        "data-analysis": [
            <Search size={iconSize} />,
            <BarChart2 size={iconSize} />,
            <Target size={iconSize} />,
            <MessageSquare size={iconSize} />
        ],
        "consulting": [
            <Search size={iconSize} />,
            <PieChart size={iconSize} />,
            <UserCheck size={iconSize} />,
            <RefreshCw size={iconSize} />,
            <Rocket size={iconSize} />
        ],
        "education": [
            <Users size={iconSize} />,
            <Edit3 size={iconSize} />,
            <Target size={iconSize} />,
            <ShieldCheck size={iconSize} />,
            <Check size={iconSize} />
        ]
    };

    return iconsMap[serviceId]?.[stepIndex] || <Check size={iconSize} />;
};

const ServiceDetails = () => {
    const displayServices = serviceDetails.filter(s =>
        ["official-ad", "viral-ad", "data-analysis", "consulting", "education"].includes(s.id)
    );

    return (
        <section className={`${styles.serviceDetails} `}>
            {displayServices.map((service, index) => (
                <div
                    key={service.id}
                    className={`${styles.serviceSection} ${index % 2 === 1 ? styles.ivorySection : ''}`}
                    id={service.id}
                >
                    <div className="container">
                        {/* Header Area */}
                        <div className={styles.header}>
                            <h2 className={styles.title}>{service.title}</h2>
                        </div>

                        {/* Intro Box - Compact & High Contrast */}
                        <div className={styles.introBox}>
                            <h3 className={styles.introTitle}>{service.intro.title}</h3>
                            <p className={styles.introDesc}>
                                {service.intro.desc.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </p>
                        </div>

                        {/* Process Section Label */}
                        <div className={styles.processHeader}>
                            <span className={styles.processLabel}>업무 프로세스</span>
                        </div>

                        {/* Visual Step Journey - Compact with Icons */}
                        <div className={styles.processGrid}>
                            {service.process.map((step, stepIndex) => (
                                <div key={stepIndex} className={styles.stepCard}>
                                    <div className={styles.stepHeader}>
                                        <div className={styles.iconWrapper}>
                                            {getIcon(service.id, stepIndex)}
                                        </div>
                                        <div className={styles.stepNumber}>{step.step}</div>
                                    </div>
                                    <h5 className={styles.stepTitle}>{step.title}</h5>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Visual Section Divider */}
                    {index < displayServices.length - 1 && <div className={styles.sectionDivider} />}
                </div>
            ))}
        </section>
    );
};

export default ServiceDetails;
