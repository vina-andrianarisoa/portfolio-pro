import { AboutData } from "@/types/about"
import { Code, Wrench, GraduationCap, Award, Target, Heart } from "lucide-react"

export const aboutData : AboutData = {
    title: "Qui suis-je ?",
    subtitle: [
        {
            title: "Introduction",
            icon: Code,
            color: "text-blue-500",
            description: [
                { text: "Un développeur web autodidacte passionné ", bold: true },
                { text: "par la création d'interfaces modernes, interactives et agréables à utiliser.\n", bold:false },
                { text: "Actuellement, j'apprends et pratique les technologies front-end comme", bold: false },
                { text: "React, Tailwind CSS, ShadCN, Framer Motion et bien d'autres", bold: true },
                { text: ", afin de renforcer mes compétences. \n\n Même si je n'ai pas encore d'expériences en entreprise, je consacre chaque jour plusieurs heures à l'apprentissage et à la réalisation de projets personnels, pour mettre en pratique mes connaissances et progresser.", bold: false },
            ]
        },
        {
            title: "Compétences",
            icon: Wrench,
            color: "text-green-500",
            description: [ 
                { text: "Je possède de solides bases en ", bold: false},
                { text: "HTML, CSS et JavaScript ", bold: true},
                { text: "ainsi qu'une bonne maîtrise de ", bold: false},
                { text: "Bootstrap et Tailwind CSS ", bold: true},
                { text: "pour concevoir des interfaces modernes et responsives. \n", bold: false},
                { text: "En parallèle, je développe mes compétences avec ", bold: false},
                { text: "React et son écosystème (React Router, Zustand, React Query, React Hook Form, Framer Motion, ShadCN UI). ", bold: true},
                { text: "En réalisant divers projets personnels. \nJe pratique régulièrement depuis plus d'un an, ce qui me permet de progresser constamment et d'aquerir de l'assurance dans mes réalisations.", bold: false},
            ]
        },
        {
            title: "Education",
            icon: GraduationCap,
            color: "text-indigo-500",
            description: [
                { text: "Je n'ai pas suivi de parcours académique en informatique.", bold: false},
                { text: "Je me forme en autodidacte. ", bold: true},
                { text: "En complètant mes apprentissages par des formations en ligne et des programmes reconnus comme la formation de l'OIF, qui m'a permis de découvrir les bases essentielles du développement web et d'aquérir une méthode de travail structurée.", bold: false},
                { text: "Grâce à des resources en ligne (documentation, cours, tutoriels, projets pratiques) et à une pratique quotidienne intensive. Cette approche me permet d'apprendre de manière progressive et concrète.", bold: false},
            ]
        },
        {
            title: "Certifications",
            icon: Award,
            color: "text-yellow-500",
            description: [
                { text: "J'ai obtenu la certification ", bold: false },
                { text: "D-CLiC débutant", bold: true },
                { text: ", validant mes premières compétences en développement web. \n", bold: false },
                { text: "Je poursuis actuelement les modules \n", bold: false },
                { text: "intermédiaire et avancé \n", bold: true },
                { text: ", pour approfondir mes connaissances et consolider mes compétences front-end.", bold: false },
            ],
            certificates: [
                {
                    title: "Attestation de formation débutant",
                    preview: "/certificats/preview_attestation1.png",
                    pdf: "/certificats/attestation_de_formation.pdf",
                    locked: false
                },
                {
                    title: "Attestation de formation intermédiaire",
                    locked: true
                }
            ]
        },
        {
            title: "Motivation",
            icon: Target,
            color: "text-red-500",
            description: [
                { text: "Ce qui me motive chaque jour, c'est la possibilité de ", bold: false }, 
                { text: "créer des projets utiles, beaux et intéractifs.", bold: true }, 
                { text: " J'aime relever des défis, apprendre en continu et améliorer mes compétences pas à pas. ", bold: false }, 
                { text: "Mon objectif est d'évoluer vers un poste de développeur front-end, tout en continuant à progresser sur le long terme.", bold: false }, 
            ]
        },
        {
            title: "Centres d'interêt",
            icon: Heart,
            color: "text-pink-500",
            description: [
                { text: "En dehors du code, je m'interesse à ", bold: false },
                { text: "l'UX/UI design, les nouvelles technologies et la création de contenus visuels", bold: true },
                { text: "J'aime également partager mes découvertes et apprendre des autres développeurs à travers des communautés en ligne.", bold: false },
            ]
        },
            
    ]
};