/**
 * 필립 홈페이지의 모든 텍스트 및 설정 데이터를 관리하는 파일입니다.
 * 문구 수정이 필요할 때 이 파일만 수정하면 사이트 전체에 반영됩니다.
 */

export const siteConfig = {
    companyName: "필립(必立)",
    englishName: "PHILIP",
    fullCompanyName: "필립(必立)",
    address: "경기도 의정부시 평화로 673-5 (가능동)",
    phone: "0507-1383-2365",
    representative: "노동규",
    businessNumber: "839-07-01288",
    email: "ndk@philip.kr",
    privacyManager: "노동규",
    copyright: "2026© 필립(必立) All rights reserved",

    // SNS 및 외부 링크
    links: {
        instagram: "https://www.instagram.com/mkt_philip",
        kakao: "https://pf.kakao.com/_txmrxkT/chat",
        proposal: "https://drive.google.com/file/d/13I8UIbtWz-9Qkq_0kf-W_A6paPa0lOHB/view?usp=sharing"
    }
};

// 1. WHY PHILIP (강점) 섹션 데이터
export const strengths = [
    {
        title: "마케팅\n현황 진단",
        description: "광고 대행에 앞서 현시점 SWAT분석을 통해 문제점과 개선점을 진단합니다.",
        icon: "🔍"
    },
    {
        title: "데이터\n기반 전략",
        description: "단순한 추측이 아닌, 실제 시장 데이터와 소비자 행동 분석을 통해 승리하는 마케팅 전략을 수립합니다.",
        icon: "🎯"
    },
    {
        title: "단계별\n최적화\n프로세스",
        description: "인지부터 구매까지, 고객 여정의 모든 접점(Touch-point)을 분석하여 전환율을 극대화합니다.",
        icon: "⚙️"
    },
    {
        title: "투명한\n리포팅",
        description: "매주/매월 상세한 성과 지표 리포트를 제공하며, 광고비 지출 대비 수익(ROAS)을 명확하게 증명합니다.",
        icon: "📈"
    },
    {
        title: "최적의\nA/B\n테스트",
        description: "최고의 성과를 찾기 위해 소재, 타겟, 매체를 끊임없이 테스트하고 개선하여 최적의 효율을 유지합니다.",
        icon: "🔬"
    }
];

// 2. 업무영역 (Services) 섹션 데이터
export const services = [
    {
        title: "공식광고 대행",
        description: "네이버, 구글, 메타 등 주요 매체의 파트너로서 최적화된 광고 운영을 지원합니다.",
        icon: "🚀"
    },
    {
        title: "바이럴 대행",
        description: "커뮤니티와 SNS를 통해 자연스러운 브랜드 확산과 긍정적인 여론을 형성합니다.",
        icon: "📈"
    },
    {
        title: "데이터 분석",
        description: "단순한 노출이 아닌, 전환과 매출데이터를 분석하여 비즈니스 의사결정을 돕습니다.",
        icon: "📊"
    },
    {
        title: "마케팅 컨설팅",
        description: "브랜드의 현 위치를 진단하고 비즈니스 단계별 최적화된 마케팅 전략을 수립합니다.",
        icon: "💡"
    },
    {
        title: "마케팅 교육",
        description: "실무에 바로 활용 가능한 최신 마케팅 트렌드와 데이터 활용 능력을 교육합니다.",
        icon: "🎓"
    }
];

// 3. 업무 프로세스 (Process) 섹션 데이터
export const processSteps = [
    {
        number: "01",
        title: "현황 분석 및 진단",
        description: "브랜드의 현재 미디어 노출 현황과 시장 데이터를 분석하여 승리할 포인트를 찾아냅니다.",
        icon: "🔍"
    },
    {
        number: "02",
        title: "맞춤형 전략 수립",
        description: "브랜드의 상황에 맞는 최적의 매체 믹스와 타겟팅 리스트를 설계합니다.",
        icon: "📋"
    },
    {
        number: "03",
        title: "캠페인 실행",
        description: "준비된 소재와 타겟으로 가장 효율적인 캠페인을 라이브하고 관리합니다.",
        icon: "🚀"
    },
    {
        number: "04",
        title: "실시간 성과 최적화",
        description: "유입 및 전환 데이터를 실시간으로 모니터링하여 캠페인의 효율을 극대화합니다.",
        icon: "📈"
    },
    {
        number: "05",
        title: "성과 보고 및 인사이트 공유",
        description: "수치로 증명하는 리포트와 다음 캠페인을 위한 데이터 인사이트를 공유합니다.",
        icon: "✨"
    }
];

// 4. 회사소개 - 연혁 (History)
export const companyHistory = [
    { year: "2019.07.24", event: "필립(必立)커뮤니케이션 설립" },
    { year: "2024.04.01", event: "필립(必立) 상호명 변경" },
    { year: "2025.05", event: "한국관광공사 데이터분석 사업 컨설턴트 참여" },
];

/**
 * 5. 협업 신청 (Collaboration) 섹션 데이터
 */

// 인플루언서 협업 데이터
export const influencerCollabs = [
    {
        id: 1,
        title: "두나무 인플루언서 협업",
        description: "네이버/인스타그램 협업 인플루언서 모집",
        image: "/portfolio/16.png",
        isActive: true,
        link: "https://docs.google.com/forms/your-influencer-form-url"
    }
];

// 대행사/실행사 협업 데이터
export const agencyCollabs = [
    {
        id: 1,
        title: "대행사/실행사 전략 제휴",
        description: "귀사의 귀한 제안을 기다립니다. 언제든지 좋은제안 감사합니다.",
        image: "/handshake.png",
        isActive: true,
        link: "https://docs.google.com/forms/your-agency-form-url",
        buttonText: "협업제안"
    }
];
