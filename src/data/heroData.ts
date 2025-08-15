import { HeroData } from "@/types/hero";
import { ArrowRight, FolderOpen } from "lucide-react";

export const heroData: HeroData = {
    greetingText: "Hey!",
    greetingEmoji: "👋",
    intro: "je suis,",
    name: "Vina Andrianarisoa",
    roles: ["autodidacte", "passionné", "créatif", "Développeur Front-end React"],
    description: [
        { text: "Développeur Front-end autodidacte, je conçois des interfaces modernes et interactives avec", bold: false },
        { text: "React, Tailwind CSS, Framer Motion et ShadCN", bold: true},
        { text: "transformant les idées en expériences visuelles captivantes.", bold: false },
    ],
    imageSrc: "images/profile/profile.jpg",
    ctas: [
        { label: "Me contater", href: "#contact", icon: ArrowRight, variant: "default" },
        { label: "Voir mes projets", href: "#projets", icon: FolderOpen, variant: "outline" },
    ],
};