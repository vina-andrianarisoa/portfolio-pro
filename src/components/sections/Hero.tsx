import { heroData } from "@/data/heroData"
import { Mouse, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion' 
import Typewriter from 'typewriter-effect'
import { Link } from "react-scroll"

export default function Hero() {
    const { greetingText, greetingEmoji, intro, role, name, description, imageSrc, ctas } = heroData

    return (
        <section id="home"
            className="min-h-screen w-full flex justify-center items-center"
        >
            <div className="container">
                <div className="grid place-content-center rounded-xl lg:grid-cols-[2fr_1fr] gap-2 lg:pt-32">

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

                                <h2 className="text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-primary bg-gradient-primary-light dark:bg-gradient-primary-dark font-extrabold tracking-tight bg-clip-text text-transparent whitespace-nowrap">
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

                            <p className="text-sm text-center lg:text-left lg:text-base text-muted-foreground mx-auto lg:mx-0 max-w-lg">
                                {description}
                            </p>
                        </div>

                        {/* Boutons d'action */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {ctas.map(({ variant, href, label, icon: Icon }) => (
                                <Button
                                    key={label}
                                    variant={variant}
                                    className="text-base shadow-xl"
                                    size="lg"
                                    asChild
                                >
                                    <Link to={href}>
                                        {label}
                                        {Icon && <Icon className="ml-2 h-5 w-5" />}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Image/Profil */}
                    <div className="relative order-1 lg:order-2 pt-10 pb-5 lg:pt-0 lg:pb-0">
                        <div className="relative h-[150px] w-[150px] lg:h-[25vw] lg:w-[25vw] max-w-[300px] max-h-[300px] mx-auto rounded-full border-4 border-primary before:absolute before:content-[''] before:shadow-glow before:overflow-hidden before:w-full before:h-full before:animate-pulse before:rounded-full">
                            <div className="aspect-[4/4] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                                <img
                                    src={imageSrc}
                                    alt="Photo de mon profil"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-10 lg:mt-20 mx-auto w-fit animate-pulse">
                    <div className="flex">
                        <Mouse className="h-6 w-6"/>
                        <ArrowDown className="h-6 w-4 animate-bounce"/>
                    </div>
                    <p className="text-sm">Faites défiler</p>
                </div>
            </div>
        </section>
    )
}