import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { cn } from "@/lib/utils";

export default function HeroParticles() {
    const particlesInit = useCallback(async (engine : Engine) => {
        await loadFull(engine);
    }, []);


    return (
            <div className={cn(`absolute top-0 left-0`)}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        fullScreen: { enable: true, zIndex: -1 },
                        background: { color: "transparent" },
                        fpsLimit: 60,
                        particles: {
                            number: { value: 80, density: { enable: true, area: 800 } },
                            color: { value: ["#8d5eed", "rgba(255, 255, 255, 0.7"] },
                            shape: { type: ["circle"] },
                            opacity: { value: 0.2, random: true },
                            size: { value: { min: 1, max: 8 }, random: true },
                            move: { enable: true, speed: 1, direction: "none", random: true, straight: false, outModes: "out", attract: { enable: false } },
                            links: { enable: false },
                            twinkle: { enable: true, color: "#ffffff", frequency: 0.002, opacity: 0.6 },
                            shadow: { enable: true, color: "#8d5eed", blur: 4 }
                        },
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "bubble" },
                                onClick: { enable: true, mode: "repulse" },
                            },
                            modes: {
                                bubble: { distance: 150, size: 10, duration: 2, opacity: 0.8 },
                                repulse: { distance: 100 },
                            },
                        },
                        detectRetina: true,
                    }}
                    className="absolute top-0 left-0 w-full h-full z-[-1]"
                ></Particles>
            </div>
    )
}