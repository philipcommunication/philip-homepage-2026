# GSC 리디렉션 문제 검토 및 모니터링 계획

## 개요
필립 홈페이지(`philip.kr`)의 구글 서치 콘솔(GSC) 색인 생성 문제 중 '리디렉션이 포함된 페이지' 항목에 대한 원인을 진단하고 모니터링 방안을 제시합니다.

## 분석 결과
- **정상적인 리디렉션**: `http://www.philip.kr` -> `https://www.philip.kr` (308 Permanent Redirect)
- **설정 상태**:
    - `next.config.ts`: 기본 리디렉션 규칙 적용
    - `layout.tsx`: `canonical` 태그가 `https://www.philip.kr`로 설정됨 (양호)
    - `sitemap.ts`: 모든 URL이 `https://www.philip.kr` 기반 (양호)
    - `robots.ts`: HTTPS sitemap 지정 (양호)

## 실행 계획
1.  **현상 진단**: 실시간 URL 응답 헤더 확인 (완료)
    - `curl.exe`를 통해 HTTP에서 HTTPS로의 정상 리디렉션 확인됨.
2.  **보안 점검**: 내부 코드 내 하드코딩된 HTTP 링크 검색 (완료)
    - 내부 링크는 모두 상대 경로를 사용 중임.
3.  **검증 요청 가이드**:
    - 유효성 검사 '실패'는 HTTP URL이 여전히 리디렉션 중임을 의미합니다.
    - 이는 오류가 아니라 **의도된 동작**임을 사용자에게 설명합니다.
    - 중요한 것은 **HTTPS 버전이 정상 색인되는지**를 모니터링하는 것입니다.

## 모니터링 체크리스트
- [ ] GSC에서 `https://www.philip.kr/` URL 검사 (실제 URL 테스트 실행)
- [ ] '색인 생성 범위' 리포트에서 HTTPS URL의 색인 상태 확인
- [ ] 타 외부 사이트로부터 유입되는 구버전 링크(HTTP)가 있는지 백링크 분석 (필요시)
