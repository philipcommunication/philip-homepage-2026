import styles from "./Services.module.css";
import { services } from "@/data/siteData";

export default function Services() {
    return (
        <section id="services" className={`${styles.services} v7-white-section`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>업무영역</h2>
                    <p className={styles.sectionDesc}>필립은 단순한 대행을 넘어 브랜드의 성장을 함께 고민합니다.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={`glass ${styles.card}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.icon}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                            </div>
                            <p className={styles.cardDesc}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
