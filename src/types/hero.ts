import { ComponentType, SVGProps } from "react";

export interface HeroData {
    greetingText: string;
    greetingEmoji: string;
    intro: string;
    name: string;
    roles: string[];
    description: { text: string; bold: boolean }[];
    imageSrc?: string;
    ctas: { label: string; href: string; icon: ComponentType<SVGProps<SVGSVGElement>>; variant: "default" | "secondary" | "outline";  }[],
}