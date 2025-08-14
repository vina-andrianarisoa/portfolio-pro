import { HeroData } from "@/types/hero";
import { ArrowRight, FolderOpen } from "lucide-react";

export const heroData: HeroData = {
    greetingText: "Hi!",
    greetingEmoji: "👋",
    intro: "je suis,",
    name: "Vina Andrianarisoa",
    role: ["Développeur Front-end", "Spécialisé en React"],
    description: "Passionné par la création d'interfaces modernes, fluides et interactives modernes, fluides et interactives avec React. Tailwind CSS et Framer Motion. J'aime transformer mes idées en experiences visuelles engageantes.",
    imageSrc: "images/profile/profile.jpg",
    ctas: [
        { label: "Me contater", href: "#contact", icon: ArrowRight, variant: "default" },
        { label: "Voir mes projets", href: "#projets", icon: FolderOpen, variant: "outline" },
    ],
};