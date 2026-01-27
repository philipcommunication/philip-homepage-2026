import { ImageResponse } from 'next/og';
import { join } from 'path';
import { readFile } from 'fs/promises';

export const runtime = 'nodejs';

export const alt = '필립(必立) | 데이터 기반 마케팅 에이전시';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    try {
        // 로컬 파일 시스템에서 로고 이미지 읽기
        const logoPath = join(process.cwd(), 'public', 'images', 'logo-gold.png');
        const logoData = await readFile(logoPath);
        // Base64 데이터 URL로 변환
        const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

        return new ImageResponse(
            (
                <div
                    style={{
                        background: '#0F1C2E', // 짙은 네이비 배경 (브랜드 컬러)
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={logoSrc}
                        alt="Philip Logo"
                        width={400}
                        height={150} // 대략적인 비율 (필요하면 조정)
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
            ),
            {
                ...size,
            }
        );
    } catch (e) {
        // 이미지 로드 실패 시 대체 텍스트 렌더링
        return new ImageResponse(
            (
                <div
                    style={{
                        background: '#0F1C2E',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#D4AF37', // Gold color
                        fontSize: 64,
                        fontWeight: 'bold',
                    }}
                >
                    필립(必立)
                </div>
            ),
            {
                ...size,
            }
        );
    }
}
