import { useEffect, useRef, ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
};

export default function Reveal({ children, direction = "up" }: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current?.classList.add("show");
                } else {
                    ref.current?.classList.remove("show");
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref} className={`reveal ${direction}`}>
            {children}
        </div>
    );
}