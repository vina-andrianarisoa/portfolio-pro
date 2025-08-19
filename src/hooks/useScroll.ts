import { useState, useEffect } from "react"

export default function useScroll(offset = 50) {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > offset);
        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, [offset]);

    return scrolled;
}