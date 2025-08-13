export interface HeroData {
    greetingText: string;
    greetingEmoji: string;
    intro: string;
    name: string;
    location: string;
    role: string[];
    availability: string;
    description: string;
    image: string;
    tech: { name: string; icon: string }[],
    ctas: { label: string; href: string; icon: string; variant: "primary" | "secondary"  }[],
}