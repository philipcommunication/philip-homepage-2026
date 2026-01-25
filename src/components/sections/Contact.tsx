import Image from "next/image";
import styles from "./Contact.module.css";
import { siteConfig } from "@/data/siteData";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>문의하기</h2>
                    <p className={styles.desc}>{siteConfig.companyName}과 함께 데이터로 성장을 이끌어보세요.</p>

                    <div className={styles.links}>
                        <a href={siteConfig.links.instagram} className={styles.linkItem} target="_blank" rel="noopener noreferrer">
                            <span className={styles.icon}>
                                <Image src="/instaicon.png" alt="Instagram" width={48} height={48} unoptimized />
                            </span>
                        </a>
                        <a href={`tel:${siteConfig.phone}`} className={styles.linkItem}>
                            <span className={styles.icon}>📞</span>
                        </a>
                        <a href={siteConfig.links.kakao} className={styles.linkItem} target="_blank" rel="noopener noreferrer">
                            <span className={styles.icon}>
                                <Image src="/kakaoicon.png" alt="KakaoTalk" width={48} height={48} unoptimized />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
