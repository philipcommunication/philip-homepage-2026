import styles from "./MarketingBudget.module.css";
import { marketingBudget } from "@/data/siteData";

export default function MarketingBudget() {
    return (
        <section className={styles.marketingBudget}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>{marketingBudget.title}</h2>
                    <p className={styles.desc}>
                        {marketingBudget.description.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                    <div className={styles.bodyText}>
                        <p>
                            대부분의 광고대행사들은 <span className={styles.red}>예산 증액</span>을 말합니다.<br />
                            반대로 <span className={styles.blue}>예산 감액</span>을 말하는 대행사는 찾기 어렵습니다.<br />
                            <br />
                            예산이 증액 될 수록 대행사 수익은 상승하기 때문입니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
