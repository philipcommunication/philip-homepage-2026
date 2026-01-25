import styles from "./Footer.module.css";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brandSide}>
                        <div className={styles.logo}>
                            <span className={styles.philip}>필립</span>
                            <span className={styles.slogan}>데이터 기반 마케팅 에이전시</span>
                        </div>
                        <p className={styles.companyDesc}>
                            감이 아니라 데이터로 마케팅을 세웁니다.<br />
                            브랜드를 반드시(必) 일으켜 세우는(立) 파트너, 필립입니다.
                        </p>
                    </div>

                    <div className={styles.infoSide}>
                        <div className={styles.infoGroup}>
                            <h4>Company Information</h4>
                            <div className={styles.infoGrid}>
                                <span>상호명: {siteConfig.fullCompanyName}</span>
                                <span>대표자: {siteConfig.representative}</span>
                                <span>사업자등록번호: {siteConfig.businessNumber}</span>
                                <span>주소: {siteConfig.address}</span>
                                <span>이메일: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></span>
                                <span>개인정보책임자: {siteConfig.privacyManager}</span>
                            </div>
                        </div>
                        <div className={styles.linksGroup}>
                            <a href="/privacy" className={styles.privacyLink}>개인정보처리방침</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>{siteConfig.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
