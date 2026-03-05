import Header from "@/components/Header";
import Footer from "@/components/sections/Contact";
import Image from "next/image";
import styles from "./about.module.css";
import { companyHistory as history, siteConfig } from "@/data/siteData";

export default function AboutPage() {
    return (
        <main>
            <Header />
            <div className={styles.hero}>
                <div className="container">
                    <h1 className={styles.title}>회사소개</h1>
                    <p className={styles.subtitle}>데이터로 증명하고 결과로 말합니다.</p>
                </div>
            </div>

            {/* 1. 연혁 (History) */}
            <section className={`${styles.section} ${styles.altBg}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>연혁 (History)</h2>
                    <div className={styles.timeline}>
                        {history.map((item, idx) => (
                            <div key={idx} className={styles.timelineItem}>
                                <div className={styles.year}>{item.year}</div>
                                <div className={styles.event}>{item.event}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. CI (Corporate Identity) */}
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.itemTitle}>CI (Corporate Identity)</h2>
                    <div className={`${styles.ciBox} glass`}>
                        <div className={styles.logoPreview}>
                            <Image
                                src="/philip-ci.png"
                                alt="PHILIP CI"
                                width={600}
                                height={200}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className={styles.ciDesc}>필립의 CI는 '브랜드'와 '바른 성장'의 결합을 상징합니다. 브랜드를 반드시(必) 일으켜 세운다(立)라는 사명과 골드와 네이비의 조화는 신뢰와 프리미엄 가치를 나타냅니다.</p>
                    </div>
                </div>
            </section>

            {/* 3. 위치 (Location) */}
            <section className={`${styles.section} ${styles.altBg}`}>
                <div className="container">
                    <h2 className={styles.itemTitle}>위치 (Location)</h2>
                    <div className={`${styles.mapBox} glass`}>
                        <div className={styles.locationContent}>
                            <div className={styles.mapVisual}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4461.465382664157!2d127.04190473045799!3d37.749421110346944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cc7b904a7f7f1%3A0x4fbd241d4b1f3c4a!2z7ZWE66a9!5e0!3m2!1sko!2skr!4v1769259686572!5m2!1sko!2skr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className={styles.directionsInfo}>
                                <div className={styles.directionsSection}>
                                    <h3 className={styles.directionsTitle}>📍 주소</h3>
                                    <div className={styles.directionsList}>
                                        <p>{siteConfig.address}</p>
                                    </div>
                                    <div className={styles.tagWrapper}>
                                        <span className={styles.locationTag}>#광고대행사</span>
                                        <span className={styles.locationTag}>#온라인광고</span>
                                        <span className={styles.locationTag}>#마케팅</span>
                                        <span className={styles.locationTag}>#공식광고</span>
                                        <span className={styles.locationTag}>#바이럴광고</span>
                                        <span className={styles.locationTag}>#데이터분석</span>
                                        <span className={styles.locationTag}>#퍼포먼스마케팅</span>
                                    </div>
                                </div>

                                <div className={styles.directionsSection}>
                                    <h3 className={styles.directionsTitle}>🚶 오시는 길</h3>
                                    <div className={styles.directionsList}>
                                        <p>가능역에서 하차 후 추병원 방향으로 직진 후 건널목 지나 예수사랑교회 골목으로 진입</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
