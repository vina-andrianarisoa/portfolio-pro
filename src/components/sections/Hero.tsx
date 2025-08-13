import { heroData } from "@/data/heroData"
import { ArrowRight, Play, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion' 
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll';

export default function Hero() {
    const { greetingText, greetingEmoji, intro, role, name, description } = heroData

    return (
        <section id="home"
            className="py-20 lg:py-32 max-h-screen"
        >
            <div className="container">
                <div className="grid justify-center rounded-xl p-3 items-center lg:grid-cols-[2fr_1fr] gap-4">

                    {/* Contenu textuel */}
                    <div className="space-y-8 order-2 lg:order-1">

                        {/* Titre principal */}
                        <div className="space-y-3 lg:space-y-4">
                            <div className="space-y-1">
                                <h1 className="text-center lg:text-left text-2xl font-bold tracking-tighter">
                                    {greetingText}{" "}
                                    <motion.span 
                                        style={{ transformOrigin: "70% 70%" }}
                                        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }} 
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                                        className="inline-block text-primary"
                                        >
                                            {greetingEmoji}
                                    </motion.span>
                                    <span>{" "}{intro}</span>
                                </h1>

                                <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl bg-primary bg-gradient-primary-light dark:bg-gradient-primary-dark font-extrabold tracking-tight bg-clip-text text-transparent">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString(`${name}`)
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString(`${role[0]}`)
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString(`${role[1]}`)
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString(`autodidacte & passionné`)
                                                .pauseFor(500)
                                                .deleteAll()
                                                .typeString(`créatif`)
                                                .start()
                                            }}
                                            options={{
                                                autoStart: true,
                                                loop: true,
                                                cursor: '|',
                                                delay: 75,
                                        }}
                                    />
                                </h2>
                            </div>

                            <p className="text-sm text-center lg:text-left lg:text-base text-muted-foreground max-w-lg">
                                {description}
                            </p>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="flex items-center space-x-8 py-4">
                        
                        </div>

                        {/* Boutons d'action */}
                        <div className="flex gap-4">
                            <Button size="lg" className="text-base shadow-xl" asChild>
                                <a href="">
                                Contactez-moi
                                <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="text-base shadow-xl">
                                <Play className="mr-2 h-5 w-5" />
                                Voir mes projets
                            </Button>
                        </div>
                    </div>

                    {/* Image/Profil */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative h-[150px] w-[150px] lg:h-[25vw] lg:w-[25vw] mx-auto rounded-full border-4 border-primary before:absolute before:content-[''] before:shadow-glow before:overflow-hidden before:w-full before:h-full before:animate-pulse before:rounded-full">
                            <div className="aspect-[4/4] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                                <img
                                src="images/profile/profile.jpg"
                                alt="Photo de mon profil"
                                className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        
                            {/* Éléments décoratifs flottants */}
                            {/* <div className="absolute -top-4 -right-4 h-24 w-24 bg-red-900 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-secondary/30 rounded-full blur-2xl"></div>
                            <div className="absolute top-10 left-10 h-24 w-24 bg-primary/30 rounded-full blur-2xl"></div> */}
                        </div>
                        
                        {/* Badge flottant */}
                        <div className="absolute -bottom-6 right-6 bg-background border rounded-lg shadow-lg px-2 animate-bounce">
                            <div className="flex items-center space-x-3">
                                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Ouvert à toutes opportunités</div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
                
                <div className="mx-auto flex items-center w-fit animate-bounce cursor-pointer my-5 lg:my-20">
                    <Link to="#about">
                        <ChevronDown className="h-6 w-6"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}