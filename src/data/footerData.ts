import { FooterLinks } from "@/types/footer"
import { Github, Linkedin, Mail } from "lucide-react"

export const footerLinks: FooterLinks[] = [
    {
        href: "https://github.com/vina-andrianarisoa",
        label: "GitHub",
        icon: Github,
    },
    {
        href: "https://linkedin.com/in/vinatendrinekenaandrianarisoa",
        label: "LinkedIn",
        icon: Linkedin,
    },
    {
        href: "mailto:vinaandrianarisoa1@gmail.com",
        label: "Email",
        icon: Mail,
    },
]