# 필립 홈페이지(Philip Homepage 2026) 사이트 구조 명세서

이 문서는 현재 홈페이지의 섹션 구성, 담당 컴포넌트, 그리고 연결된 데이터 소스를 정의합니다. AI(Gemini)가 코드 구조를 파악하고 수정하는 데 참조할 수 있습니다.

## 전체 페이지 순서 (Page Flow)
`src/app/page.tsx`에 정의된 순서입니다.

### 1. 헤더 (Header)
*   **컴포넌트:** `src/components/Header.tsx`
*   **역할:** 사이트 로고 및 GNB(네비게이션 메뉴) 표시
*   **주요 기능:** 스크롤 시 안보이다가 위로 올리면 나타나는 고정 헤더

### 2. 메인 배너 (Hero)
*   **컴포넌트:** `src/components/sections/Hero.tsx`
*   **역할:** 최상단 메인 이미지 및 핵심 카피 문구
*   **스타일:** 전체 화면 높이(100vh) 혹은 지정된 높이, 배경 이미지 또는 비디오

### 3. 마케팅 예산 전략 (Marketing Budget) -- *[NEW]*
*   **컴포넌트:** `src/components/sections/MarketingBudget.tsx`
*   **데이터 소스:** `src/data/siteData.ts` > `marketingBudget`
*   **역할:** "예산 증액 vs 감액"에 대한 필립의 철학 전달
*   **스타일:** 검정색 배경 (#000000), 흰색 텍스트, 포인트 컬러(Red/Blue) 강조

### 4. 왜 필립인가? (Why Philip)
*   **컴포넌트:** `src/components/sections/WhyPhilip.tsx`
*   **데이터 소스:** `src/data/siteData.ts` > `strengths`
*   **역할:** 필립의 5가지 핵심 강점(진단, 전략, 프로세스, 리포팅, 테스트) 소개
*   **스타일:** 아이콘 + 타이틀 + 설명으로 구성된 카드 그리드

### 5. 업무 영역 (Services)
*   **컴포넌트:** `src/components/sections/Services.tsx`
*   **데이터 소스:** `src/data/siteData.ts` > `services`
*   **역할:** 5대 서비스 분야(공식광고, 바이럴, 데이터분석, 컨설팅, 교육) 아이콘 요약
*   **스타일:** 서비스별 아이콘이 강조된 카드형 UI

### 6. 업무 형태 (Service Types)
*   **컴포넌트:** `src/components/sections/ServiceTypes.tsx`
*   **데이터 소스:** `src/data/siteData.ts` > `serviceTypes`
*   **역할:** 고객의 상황(Needs)에 따른 서비스 분류 제안 (ex: "진단이 필요할 때")
*   **스타일:** 텍스트 리스트 형태의 깔끔한 카드 UI

### 7. 서비스 상세 프로세스 (Service Details) -- *[NEW]*
*   **컴포넌트:** `src/components/sections/ServiceDetails.tsx`
*   **데이터 소스:** `src/data/siteData.ts` > `serviceDetails`
*   **역할:** 5대 서비스 각각에 대한 상세 소개 및 단계별(STEP 1~5) 진행 프로세스 안내
*   **내용:**
    *   공식 광고 대행 소개 및 프로세스
    *   바이럴 마케팅 소개 및 프로세스
    *   마케팅 데이터 진단 소개 및 프로세스
    *   마케팅 컨설팅 소개 및 프로세스
    *   마케팅 교육 소개 및 프로세스

### 8. 레퍼런스 (Reference)
*   **컴포넌트:** `src/components/sections/Reference.tsx`
*   **역할:** 주요 포트폴리오 및 성공 사례 이미지 슬라이더/그리드

### 9. 문의하기 (Contact)
*   **컴포넌트:** `src/components/sections/Contact.tsx`
*   **데이터 소스:** `src/data/siteData.ts` > `siteConfig` (전화번호, 링크 등)
*   **역할:** 인스타그램, 전화, 카카오톡 상담 연결 버튼
*   **스타일:** 상단 여백 8rem, 하단 여백 10rem으로 넉넉한 레이아웃

### 10. 푸터 (Footer)
*   **컴포넌트:** `src/components/Footer.tsx`
*   **데이터 소스:** `src/data/siteData.ts` > `siteConfig`
*   **역할:** 회사 정보(주소, 등록번호 등) 및 카피라이트 표시

---

## 데이터 관리 (Data Management)
모든 텍스트 데이터는 **`src/data/siteData.ts`** 파일에서 통합 관리됩니다. 내용을 수정하려면 이 파일만 편집하면 됩니다.

## 테마 (Theme)
현재 `globals.css`의 `theme7`을 사용 중이며, **Navy(배경) & Ivory/Gold(포인트)** 컬러 팔레트를 기본으로 합니다.
