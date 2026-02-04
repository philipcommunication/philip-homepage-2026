import styles from "./ServiceDetails.module.css";
import { serviceDetails } from "@/data/siteData";

interface ProcessStep {
    step: string;
    title: string;
    desc: string;
}

export default function ServiceDetails() {
    return (
        <section id="service-details" className={`${styles.serviceDetails} v7-white-section`}>
            {serviceDetails.map((service, index) => (
                <div key={index} id={service.id} className={styles.serviceSection}>
                    <div className="container">
                        {/* Section Header */}
                        <div className={styles.header}>
                            <h2 className={styles.title}>{service.title}</h2>
                        </div>

                        {/* Intro Box */}
                        <div className={styles.introBox}>
                            <h3 className={styles.introTitle}>{service.intro.title}</h3>
                            <p className={styles.introDesc}>
                                {service.intro.desc.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>

                        {/* Process Title */}
                        {service.process.length > 0 && (
                            <h4 className={styles.processLabel}>업무 프로세스</h4>
                        )}

                        {/* Process Steps */}
                        <div className={styles.processGrid}>
                            {service.process.map((step: ProcessStep, stepIndex: number) => (
                                <div key={stepIndex} className={styles.stepCard}>
                                    <div className={styles.stepNumber}>STEP {step.step}</div>
                                    <h5 className={styles.stepTitle}>{step.title}</h5>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
