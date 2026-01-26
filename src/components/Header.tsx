"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCollabOpen, setIsCollabOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen === false) {
            setIsCollabOpen(false); // 메뉴 닫을 때 서브메뉴도 초기화
        }
    };

    const toggleCollab = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsCollabOpen(!isCollabOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.headerInner}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <div className={styles.logoContainer}>
                            <Image
                                src="/logo-black.png"
                                alt="PHILIP"
                                width={120}
                                height={40}
                                className={styles.logoImage}
                                priority
                                unoptimized
                            />
                        </div>
                    </Link>
                </div>

                {/* 데스크탑 내비게이션 */}
                <nav className={styles.nav}>
                    <Link href="/about" className={styles.navLink}>회사소개</Link>
                    <Link href="/#services" className={styles.navLink}>업무영역</Link>
                    <Link href="/#reference" className={styles.navLink}>레퍼런스</Link>
                    <div className={styles.dropdown}>
                        <Link href="/collaboration" className={styles.navLink}>협업신청</Link>
                        <div className={styles.dropdownMenu}>
                            <Link href="/collaboration/influencer" className={styles.dropdownItem}>인플루언서 협업</Link>
                            <Link href="/collaboration/agency" className={styles.dropdownItem}>대행사/실행사 협업</Link>
                        </div>
                    </div>
                    <Link href="/#contact" id="btn-contact-header" className={styles.contactBtn}>문의하기</Link>
                </nav>

                {/* 모바일 메뉴 버튼 */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                {/* 모바일 내비게이션 오버레이 */}
                <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.active : ""}`}>
                    <Link href="/about" className={styles.mobileNavLink} onClick={toggleMobileMenu}>회사소개</Link>
                    <Link href="/#services" className={styles.mobileNavLink} onClick={toggleMobileMenu}>업무영역</Link>
                    <Link href="/#reference" className={styles.mobileNavLink} onClick={toggleMobileMenu}>레퍼런스</Link>

                    <div className={styles.mobileMenuWrapper}>
                        <div className={styles.mobileNavLink} onClick={toggleCollab}>
                            협업신청
                        </div>
                        <div className={`${styles.mobileSubMenu} ${isCollabOpen ? styles.open : ""}`}>
                            <Link href="/collaboration/influencer" className={styles.mobileSubLink} onClick={toggleMobileMenu}>인플루언서 협업</Link>
                            <Link href="/collaboration/agency" className={styles.mobileSubLink} onClick={toggleMobileMenu}>대행사/실행사 협업</Link>
                        </div>
                    </div>

                    <Link href="/#contact" id="btn-contact-header-mobile" className={styles.contactBtn} onClick={toggleMobileMenu}>문의하기</Link>
                </nav>
            </div>
        </header>
    );
}
