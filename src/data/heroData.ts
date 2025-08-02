import { HeroData } from "@/types/hero";

export const heroData: HeroData = {
    greeting: "Hey, je suis",
    name: "Vina Andrianarisoa",
    location: "Madagascar",
    role: "Developpeur Front-end spécialisé React",
    availability: "Disponible pour opportunités",
    description: "Passionné par la création d'interfaces modernes, fluides et interactives modernes, fluides et interactives avec React. Tailwind CSS et Framer Motion. J'aime transformer mes idées en experiences visuelles engageantes.",
    image: "/",
    tech: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Framer Motion", icon: "framer" },
        { name: "Zustand", icon: "zustand" },
        { name: "ShadCN UI", icon: "shadcn" },
    ],
    ctas: [
        { label: "Me contater", href: "#contact", icon: "mail", variant: "primary" },
        { label: "GitHub", href: "https://github.com/vina-andrianarisoa", icon: "github", variant: "secondary" },
        { label: "Linkedin", href: "https://linkedin.com/in/...", icon: "linkedin", variant: "secondary" },
        { label: "CV", href: "public/Andrianarisoa_Vina_CV.pdf", icon: "download", variant: "secondary" },
    ],
};