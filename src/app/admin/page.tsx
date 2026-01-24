"use client";

import { useState } from "react";
import styles from "./admin.module.css";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("main");

    return (
        <div className={styles.adminLayout}>
            <aside className={styles.sidebar}>
                <h2 className={styles.adminTitle}>PHILIP ADMIN</h2>
                <nav className={styles.adminNav}>
                    <button onClick={() => setActiveTab("main")} className={activeTab === "main" ? styles.active : ""}>메인 관리</button>
                    <button onClick={() => setActiveTab("hero")} className={activeTab === "hero" ? styles.active : ""}>히어로 슬라이더 관리</button>
                    <button onClick={() => setActiveTab("reference")} className={activeTab === "reference" ? styles.active : ""}>레퍼런스 관리</button>
                    <button onClick={() => setActiveTab("collaboration")} className={activeTab === "collaboration" ? styles.active : ""}>협업신청 관리</button>
                    <button onClick={() => setActiveTab("blog")} className={activeTab === "blog" ? styles.active : ""}>블로그 관리</button>
                    <button onClick={() => setActiveTab("files")} className={activeTab === "files" ? styles.active : ""}>제안서 관리</button>
                </nav>
            </aside>

            <main className={styles.adminMain}>
                <header className={styles.adminHeader}>
                    <h1>{activeTab.toUpperCase()} MANAGEMENT</h1>
                    <div className={styles.userProfile}>관리자님 안녕하세요</div>
                </header>

                <section className={styles.adminContent}>
                    {activeTab === "hero" && (
                        <div className={styles.editCard}>
                            <h3>히어로 슬라이더 이미지 및 문구 관리</h3>
                            <p className={styles.info}>메인 페이지 상단 슬라이드의 이미지와 문구를 개별적으로 관리할 수 있습니다.</p>

                            {[1, 2].map((num) => (
                                <div key={num} className={styles.formGroup}>
                                    <label>슬라이드 {num} - 이미지 업로드</label>
                                    <input type="file" className={styles.fileInput} />
                                    <label>슬라이드 {num} - 메인 문구</label>
                                    <input type="text" placeholder="메인 타이틀 입력" className={styles.input} />
                                    <label>슬라이드 {num} - 서브 문구</label>
                                    <textarea placeholder="설명 입력" className={styles.textarea}></textarea>
                                </div>
                            ))}

                            <button className={styles.saveBtn}>슬라이더 설정 저장</button>
                        </div>
                    )}

                    {activeTab === "collaboration" && (
                        <div className={styles.editCard}>
                            <h3>협업신청 페이지 이미지 및 텍스트 관리</h3>
                            <p className={styles.info}>각 섹션의 이미지와 상품 설명을 업로드하고 수정할 수 있습니다.</p>

                            <div className={styles.formGroup}>
                                <label>섹션 1 이미지</label>
                                <input type="file" className={styles.fileInput} />
                                <label>섹션 1 설명</label>
                                <textarea placeholder="상품 설명을 입력하세요" className={styles.textarea}></textarea>
                            </div>

                            <div className={styles.formGroup}>
                                <label>섹션 2 이미지</label>
                                <input type="file" className={styles.fileInput} />
                                <label>섹션 2 설명</label>
                                <textarea placeholder="상품 설명을 입력하세요" className={styles.textarea}></textarea>
                            </div>

                            <button className={styles.saveBtn}>설정 저장하기</button>
                        </div>
                    )}

                    {activeTab !== "collaboration" && (
                        <div className={styles.placeholder}>
                            {activeTab} 관리 기능이 준비 중입니다.
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
