"use client";

import { useState, useEffect } from "react";
import HeroV1 from "./HeroV1";
import HeroV2 from "./HeroV2";

export default function Hero() {
    const [currentVersion, setCurrentVersion] = useState(1);

    useEffect(() => {
        const handleVersionChange = (e: any) => {
            if (e.detail) {
                setCurrentVersion(e.detail);
            }
        };
        window.addEventListener('heroVersionChange', handleVersionChange);
        return () => window.removeEventListener('heroVersionChange', handleVersionChange);
    }, []);

    return (
        <div key={currentVersion}>
            {currentVersion === 1 ? <HeroV1 /> : <HeroV2 />}
        </div>
    );
}
