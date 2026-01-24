"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const slides = [
    {
        id: 1,
        image: "/hero-main.png",
        subTitle: "\"어디서부터 시작해야 할까?\"",
        mainTitle: "데이터 분석 기반\n광고를 세웁니다.",
        description: "마케팅은 감(感)이 아니라 방향이 중요합니다.\n무작정 광고하지 마세요."
    },
    {
        id: 2,
        image: "/hero-2.png",
        subTitle: "브랜드와 고객 그 이상의 연결",
        mainTitle: "성장을 위한\n네트워킹 파트너",
        description: "필립은 단순한 광고를 넘어 타겟과 브랜드를 잇는\n가장 견고한 연결 고리를 만듭니다."
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
                >
                    <div className={`${styles.imageWrapper} heroImage`}>
                        <Image
                            src={slide.image}
                            alt="Philip Data Marketing"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                            unoptimized
                        />
                        <div className={styles.overlay}></div>
                    </div>

                    <div className={`container ${styles.content}`}>
                        <h2 className={styles.subTitle}>{slide.subTitle}</h2>
                        <h1 className={styles.mainTitle}>
                            {slide.mainTitle.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </h1>
                        <p className={styles.description}>
                            {slide.description.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ))}
                        </p>
                        <div className={styles.profile}>
                            <div className={styles.avatar}>
                                <Image
                                    src="/logo-gold.png"
                                    alt="Philip Gold Logo"
                                    width={30}
                                    height={30}
                                    className={styles.avatarImage}
                                    unoptimized
                                />
                            </div>
                            <p>
                                안녕하세요. 브랜드를 바로 세우는
                                <Image
                                    src="/logo-orange.png"
                                    alt="필립"
                                    width={60}
                                    height={24}
                                    className={styles.inlineLogo}
                                    unoptimized
                                />
                                입니다.
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            <div className={styles.indicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
}
