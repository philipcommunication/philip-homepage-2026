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
        description: "네이버, 구글, 메타 등 주요 매체의 최적화된 광고 운영을 지원합니다.",
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

// 2.5 업무 형태 (Service Types) 섹션 데이터
export const serviceTypes = [
    {
        title: "광고대행",
        icon: "🚀",
        items: [
            "공식/바이럴 광고 운영 대행이 필요할 때"
        ]
    },
    {
        title: "데이터분석",
        icon: "📊",
        items: [
            "마케팅 운영중 진단이 필요할 때"
        ]
    },
    {
        title: "마케팅 컨설팅/교육",
        icon: "🎓",
        items: [
            "마케팅 운영 담당이 필요할 때",
            "마케팅에 바로 투입될 수 있도록 실무교육이 필요할 때"
        ]
    }
];

// 3. 마케팅 예산 섹션 데이터 (New)
export const marketingBudget = {
    title: "마케팅 무조건 예산을 쓰면 되는거 아닌가요?",
    description: "필립은 맹목적인 예산 증액이 아닌\n합리적인 예산 증감을 제안합니다.",
    content: {
        text: "대부분의 광고대행사들은 예산 증액을 말합니다.\n반대로 예산 감액을 말하는 대행사는 찾기 어렵습니다.\n\n예산이 증액 될 수록 대행사 수익은 상승하기 때문입니다.",
        highlights: [
            { text: "예산 증액", color: "red" },
            { text: "예산 감액", color: "blue" }
        ]
    }
};

// 4. 상세 업무 프로세스 (Service Details) 데이터 (New)
export const serviceDetails = [
    {
        id: "official-ad",
        title: "공식 광고 대행",
        intro: {
            title: "공식 광고 대행 소개",
            desc: "네이버·구글·메타·카카오 등\n공식 광고 매체 운영을 대행합니다.\n예산 증액이 아닌, 성과 기준의 합리적인 예산 운용을 지향합니다."
        },
        process: [
            { step: "01", title: "현황 분석 및 진단", desc: "현재 광고 운영 상태, 데이터, 예산 구조를 분석합니다." },
            { step: "02", title: "맞춤형 전략 수립", desc: "브랜드 목표에 맞는 채널·예산·성과 기준을 설정합니다." },
            { step: "03", title: "캠페인 실행", desc: "전략에 따라 광고를 실행하고 구조를 세팅합니다." },
            { step: "04", title: "실시간 성과 최적화", desc: "성과 데이터를 기반으로 지속적인 개선을 진행합니다." },
            { step: "05", title: "성과 보고 및 인사이트 공유", desc: "결과를 정리하고 다음 단계 전략을 제안합니다." }
        ]
    },
    {
        id: "viral-ad",
        title: "바이럴 마케팅 (인플루언서)",
        intro: {
            title: "바이럴 마케팅 소개",
            desc: "직접 발굴한 인플루언서들과 협업하여\n의도된 확산 구조의 바이럴 마케팅을 운영합니다.\n단순 섭외가 아닌, 전략 중심의 바이럴을 지향합니다."
        },
        process: [
            { step: "01", title: "브랜드 진단 및 캠페인 목적 설정", desc: "브랜드 특성과 바이럴 목적을 명확히 정의합니다." },
            { step: "02", title: "타겟층 및 매체 선정", desc: "타겟에 맞는 플랫폼과 콘텐츠 유형을 설계합니다." },
            { step: "03", title: "인플루언서 선별 및 검증", desc: "수량이 아닌 반응도·신뢰도 기준으로 인플루언서를 선별합니다." },
            { step: "04", title: "콘텐츠 가이드 제공 및 캠페인 실행", desc: "브랜드 가이드라인을 기반으로 캠페인을 운영합니다." },
            { step: "05", title: "성과 모니터링 및 리스크 관리", desc: "반응·이슈를 실시간으로 관리하고 대응합니다." },
            { step: "06", title: "성과 보고 및 인사이트 공유", desc: "성과 분석 후 개선 방향을 제안합니다." }
        ]
    },
    {
        id: "data-analysis",
        title: "마케팅 데이터 진단 / 분석",
        intro: {
            title: "마케팅 데이터 진단 소개",
            desc: "현재 마케팅 운영 상태를 1회성으로 진단하거나,\n필요 시 주기적으로 개선 방향을 제시하는 카운셀러 형태로 운영합니다."
        },
        process: [
            { step: "01", title: "마케팅 현황 데이터 수집", desc: "광고·콘텐츠·채널 운영 데이터를 수집합니다." },
            { step: "02", title: "문제 구간 진단 및 원인 분석", desc: "성과 저하 원인을 구조적으로 분석합니다." },
            { step: "03", title: "개선 방향 제안", desc: "실행 가능한 개선 포인트를 정리합니다." },
            { step: "04", title: "주기적 미팅 및 피드백 (선택)", desc: "정기 미팅을 통해 지속적인 개선을 지원합니다." }
        ]
    },
    {
        id: "consulting",
        title: "마케팅 컨설팅",
        intro: {
            title: "마케팅 컨설팅 소개",
            desc: "외부 대행이 아닌,\n브랜드의 마케팅 팀장 역할로 참여하는 컨설팅입니다.\n월 단위 계약 형태로 운영됩니다."
        },
        process: [
            { step: "01", title: "현황 진단 및 목표 정의", desc: "마케팅 구조와 목표를 재정리합니다." },
            { step: "02", title: "전략 구조 설계", desc: "채널별 역할, 예산 구조, KPI를 설정합니다." },
            { step: "03", title: "실행 방향 관리 및 의사결정 지원", desc: "실무자·대행사 관리 및 대표 의사결정을 지원합니다." },
            { step: "04", title: "월간 점검 및 개선 제안", desc: "정기 리뷰를 통해 방향을 조정합니다." },
            { step: "05", title: "구조 정리 및 이관 (선택)", desc: "내부 운영이 가능하도록 구조를 정리합니다." }
        ]
    },
    {
        id: "education",
        title: "마케팅 교육",
        intro: {
            title: "마케팅 교육 소개",
            desc: "마케팅 실무에 익숙하지 않은\n대표님 및 실무자를 위한 실전 중심 교육입니다.\n이론이 아닌, 구조 이해와 판단 기준에 집중합니다."
        },
        process: [
            { step: "01", title: "교육 대상 및 수준 파악", desc: "교육 대상과 현재 이해도를 분석합니다." },
            { step: "02", title: "맞춤 교육 커리큘럼 구성", desc: "업종·목적에 맞는 교육 내용을 설계합니다." },
            { step: "03", title: "실무 중심 교육 진행", desc: "실제 사례 기반으로 교육을 진행합니다." },
            { step: "04", title: "운영 체크리스트 제공", desc: "광고·대행사 관리 기준을 제공합니다." },
            { step: "05", title: "피드백 및 Q&A", desc: "교육 후 실무 적용을 지원합니다." }
        ]
    }
];

// 3. 업무 프로세스 (Process) 섹션 데이터 (Deprecated - Kept for reference or cleanup)
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
        isActive: false,
        link: "https://docs.google.com/forms/your-influencer-form-url",
        buttonText: "신청하기"
    },
    {
        id: 2,
        title: "오쎄 인플루언서 협업",
        description: "네이버/인스타그램 협업 인플루언서 모집",
        image: "/portfolio/15.png",
        isActive: false,
        link: "#",
        buttonText: "신청하기"
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
        link: "https://forms.gle/XJLjMwUvwWKn31vW8",
        buttonText: "협업제안"
    }
];
