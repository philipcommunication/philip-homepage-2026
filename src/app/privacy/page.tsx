import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteData";

export default function PrivacyPolicy() {
    return (
        <main style={{ backgroundColor: '#fff', color: '#1a1a1a' }}>
            <Header />
            <div className="container" style={{ padding: '12rem 0 8rem', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', borderBottom: '2px solid #000', paddingBottom: '1rem' }}>개인정보처리방침</h1>

                <div style={{ lineHeight: '1.8', fontSize: '1rem', color: '#444' }}>
                    <p>필립(必立)(이하 "회사")은 고객님의 개인정보를 소중하게 생각하며, "개인정보 보호법" 등 관련 법령을 준수하고 있습니다.</p>

                    <h2 style={{ fontSize: '1.4rem', color: '#000', marginTop: '2.5rem', marginBottom: '1rem' }}>1. 개인정보의 수집 항목 및 이용 목적</h2>
                    <p>회사는 서비스 상담 및 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li>수집항목: 이름, 연락처, 이메일, 회사명, 문의내용</li>
                        <li>이용목적: 서비스 상담, 마케팅 제안, 고객 관리</li>
                    </ul>

                    <h2 style={{ fontSize: '1.4rem', color: '#000', marginTop: '2.5rem', marginBottom: '1rem' }}>2. 개인정보의 보유 및 이용기간</h2>
                    <p>원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 일정 기간 보존합니다.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                        <li>보유 기간: 상담 완료 후 1년 (단, 법령에 따른 경우 해당 기간 준수)</li>
                    </ul>

                    <h2 style={{ fontSize: '1.4rem', color: '#000', marginTop: '2.5rem', marginBottom: '1rem' }}>3. 개인정보 파기 절차 및 방법</h2>
                    <p>회사는 목적이 달성된 개인정보를 전자적 파일 형태인 경우 복구가 불가능한 방법으로 영구 삭제하며, 출력물인 경우 분쇄기로 분쇄하여 파기합니다.</p>

                    <h2 style={{ fontSize: '1.4rem', color: '#000', marginTop: '2.5rem', marginBottom: '1rem' }}>4. 개인정보 보호책임자</h2>
                    <p>개인정보 관련 문의사항은 아래의 보호책임자에게 연락주시기 바랍니다.</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyle: 'none' }}>
                        <li>성명: {siteConfig.privacyManager}</li>
                        <li>이메일: {siteConfig.email}</li>
                        <li>전화: {siteConfig.phone}</li>
                    </ul>

                    <p style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#888' }}>시행일자: 2026년 1월 1일</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
