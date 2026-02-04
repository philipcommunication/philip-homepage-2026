import styles from "./ServiceTypes.module.css";
// import { serviceTypes } from "@/data/siteData"; // Custom data as requested

export default function ServiceTypes() {

    // Custom data specific for this design request
    const services = [
        {
            number: "01",
            title: "공식/바이럴 광고 대행",
            problem: "운영 방법도, 적합한 채널도 모른 채 예산만 쓰고 있다면",
            solution: "막막한 운영을 성과 중심의 실행으로 전환",
            targetId: "official-ad"
        },
        {
            number: "02",
            title: "데이터 분석 및 진단",
            problem: "어디가 잘못됐는지, 왜 안 팔리는지 이유조차 모른다면",
            solution: "밑 빠진 독에 물 붓기를 멈추는 정밀 진단",
            targetId: "data-analysis"
        },
        {
            number: "03",
            title: "마케팅 컨설팅",
            problem: "마케팅 팀도, 기획자도 없어 의사결정이 어렵다면",
            solution: "당신의 비즈니스를 가장 잘 아는 전담 마케팅 팀 빌딩",
            targetId: "consulting"
        },
        {
            number: "04",
            title: "실무 교육 및 내재화",
            problem: "대행사에 끌려다니지 않고 스스로 운영할 실력이 필요하다면",
            solution: "대표님과 직원이 직접 다루는 광고 최적화 실무",
            targetId: "education"
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
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
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

                            <a href={`#${service.targetId}`} className={styles.detailBtn}>
                                상세 프로세스 보기
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
