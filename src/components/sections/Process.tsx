import styles from "./Process.module.css";
import { processSteps as steps } from "@/data/siteData";

export default function Process() {
    return (
        <section id="process" className={`${styles.process} v7-ivory-section`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>업무 프로세스</h2>
                    <p className={styles.sectionDesc}>필립은 체계적인 데이터 분석을 통해 가장 효율적인 성과를 만들어냅니다.</p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepContent}>
                                <div className={styles.stepHeader}>
                                    <span className={styles.stepNumber}>{step.number}</span>
                                    <div className={styles.iconWrapper}>{step.icon}</div>
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className={styles.connector}></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
