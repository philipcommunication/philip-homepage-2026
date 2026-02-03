import styles from "./ServiceTypes.module.css";
import { serviceTypes } from "@/data/siteData";

interface ServiceTypeProp {
    title: string;
    icon: string;
    items: string[];
}

export default function ServiceTypes() {
    return (
        <section id="service-types" className={`${styles.serviceTypes} v7-ivory-section`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>업무 형태</h2>
                    <p className={styles.sectionDesc}>필립은 가장 필요한 업무를 제공합니다.</p>
                </div>

                <div className={styles.grid}>
                    {serviceTypes.map((type: ServiceTypeProp, index: number) => (
                        <div key={index} className={`glass ${styles.card}`}>
                            <div className={styles.icon}>{type.icon}</div>
                            <h3 className={styles.cardTitle}>{type.title}</h3>
                            <ul className={styles.cardList}>
                                {type.items.map((item: string, idx: number) => (
                                    <li key={idx} className={styles.cardItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
