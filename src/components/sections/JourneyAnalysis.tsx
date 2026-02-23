"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from "./JourneyAnalysis.module.css";

const JourneyAnalysis = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="journey-analysis" className={styles.journeyAnalysis} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>
                        대부분의 비즈니스가 겪고 있는 <br />
                        <span className={styles.highlight}>보이지 않는 벽</span>
                    </h2>
                    <p className={styles.sectionDesc}>
                        공들여 데려온 고객이 왜 마지막 단계에서 멈추는지,<br />
                        필립은 데이터로 그 해답을 찾습니다.
                    </p>
                </div>

                <div className={styles.journeyWrapper}>
                    <div className={styles.journeyContainer}>
                        <svg viewBox="0 0 800 180" className={styles.journeySvg}>
                            {/* Background Line with Gradient */}
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#64748B" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#EF4444" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
                                </linearGradient>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            <path
                                d="M50 90 Q 200 90, 400 90 T 750 90"
                                fill="none"
                                stroke="url(#lineGrad)"
                                strokeWidth="3"
                                strokeDasharray="8 8"
                            />

                            {/* Stages */}
                            {[
                                { x: 100, label: "방문", color: "#94A3B8", sub: "유입채널" },
                                { x: 300, label: "검색/탐색", color: "#64748B", sub: "상세페이지" },
                                { x: 500, label: "이탈(원인미상)", color: "#EF4444", error: true, sub: "Pain Point" },
                                { x: 700, label: "구매전환", color: "#F97316", sub: "Goal" }
                            ].map((stage, i) => (
                                <g key={i}>
                                    {stage.error ? (
                                        <g className={styles.errorPoint}>
                                            <circle cx={stage.x} cy="90" r="22" fill="rgba(239, 68, 68, 0.15)" className={styles.pulse} />
                                            <circle cx={stage.x} cy="90" r="8" fill={stage.color} />
                                            <text x={stage.x} y="82" textAnchor="middle" fontSize="18" fontWeight="900" fill="#FFFFFF">!</text>
                                        </g>
                                    ) : (
                                        <g>
                                            <circle cx={stage.x} cy="90" r="6" fill={stage.color} />
                                            <circle cx={stage.x} cy="90" r="10" fill="transparent" stroke={stage.color} strokeWidth="1" strokeOpacity="0.3" />
                                        </g>
                                    )}
                                    <text x={stage.x} y="135" textAnchor="middle" fontSize="14" fontWeight="800" fill={stage.color}>
                                        {stage.label}
                                    </text>
                                    <text x={stage.x} y="155" textAnchor="middle" fontSize="11" fontWeight="600" fill={stage.color} opacity="0.5">
                                        {stage.sub}
                                    </text>
                                </g>
                            ))}

                            {/* Connection Lines (Flow) with animated dash */}
                            {isVisible && (
                                <>
                                    <path
                                        d="M115 90 L 285 90"
                                        stroke="#64748B"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                        markerEnd="url(#arrow)"
                                    >
                                        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                                    </path>
                                    <path
                                        d="M315 90 L 480 90"
                                        stroke="#EF4444"
                                        strokeWidth="2.5"
                                        strokeDasharray="5 5"
                                        markerEnd="url(#arrowRed)"
                                    >
                                        <animate attributeName="stroke-dashoffset" from="30" to="0" dur="0.8s" repeatCount="indefinite" />
                                    </path>
                                </>
                            )}

                            {!isVisible && (
                                <>
                                    <path d="M115 90 L 285 90" stroke="#64748B" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                                    <path d="M315 90 L 480 90" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="5 5" markerEnd="url(#arrowRed)" />
                                </>
                            )}

                            <path
                                d="M525 90 L 685 90"
                                stroke="#CBD5E1"
                                strokeWidth="1.5"
                                opacity="0.2"
                            />

                            {/* User Flow Particles - Enhanced */}
                            {isVisible && (
                                <>
                                    <circle r="3" fill="#F97316" filter="url(#glow)">
                                        <animateMotion path="M100 90 L 300 90" dur="4s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
                                    </circle>

                                    <g className={styles.dropUsers}>
                                        {[0, 1, 2].map(n => (
                                            <circle key={n} r="2.5" fill="#EF4444" opacity="0.8">
                                                <animateMotion
                                                    path={`M500 90 Q ${500 + (n - 1) * 15} 120, ${505 + (n - 1) * 25} 175`}
                                                    dur={`${2 + n * 0.7}s`}
                                                    begin={`${n * 0.5}s`}
                                                    repeatCount="indefinite"
                                                />
                                                <animate attributeName="opacity" values="1;0" dur={`${2 + n * 0.7}s`} begin={`${n * 0.5}s`} repeatCount="indefinite" />
                                            </circle>
                                        ))}
                                    </g>
                                </>
                            )}

                            {/* Arrow Markers */}
                            <defs>
                                <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orientation="auto">
                                    <path d="M0 0 L8 4 L0 8 Z" fill="#64748B" />
                                </marker>
                                <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="7" refY="4" orientation="auto">
                                    <path d="M0 0 L8 4 L0 8 Z" fill="#EF4444" />
                                </marker>
                            </defs>
                        </svg>
                        <div className={styles.journeyMessage}>
                            "분명히 광고는 나가는데... 왜 구매까지 이어지지 않을까?"
                            <span className={styles.subMessage}>필립은 고객이 멈춰선 그 지점의 이유를 찾아냅니다.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JourneyAnalysis;
