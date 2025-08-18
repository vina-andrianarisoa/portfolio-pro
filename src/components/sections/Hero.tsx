import { heroData } from "@/data/heroData"
import { Mouse, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion' 
import Typewriter from 'typewriter-effect'
import { Link } from "react-scroll"
import HeroParticles from "./HeroParticles"

export default function Hero() {
    const { greetingText, greetingEmoji, intro, roles, name, description, imageSrc, ctas } = heroData

    return (
        <>
            <HeroParticles/>
            <section id="home"
                className="min-h-screen w-full flex justify-center items-center"
            >
                <div className="container">
                    <div className="grid place-content-center rounded-xl lg:grid-cols-[2fr_1fr] gap-2 lg:pt-32">

                        {/* Contenu textuel */}
                        <motion.div 
                            className="space-y-8 order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            >

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

                                    <h2 className="text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-primary bg-gradient-primary-dark font-extrabold tracking-tight bg-clip-text text-transparent whitespace-nowrap">
                                        <Typewriter
                                            onInit={(typewriter) => {
                                                typewriter.typeString(`${name}`)
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString(`${roles[0]}`)
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString(`${roles[1]}`)
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString(`${roles[2]}`)
                                                    .pauseFor(1000)
                                                    .deleteAll()
                                                    .typeString(`${roles[3]}`)
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

                                <motion.p 
                                    className="w-full text-sm text-center lg:text-left lg:text-base text-muted-foreground mx-auto lg:mx-0 max-w-md lg:max-w-lg px-4 lg:px-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    >
                                    {description.map((part, index) => 
                                        (
                                            part.bold ? <span key={index} className="font-bold text-accent">{" "}{part.text}{" "}</span> : <span key={index}>{part.text}</span>
                                        )
                                    )}
                                </motion.p>
                            </div>

                            {/* Boutons d'action */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {ctas.map(({ variant, href, label, icon: Icon }) => (
                                    <motion.div
                                        key={label}
                                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    >
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
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image/Profil */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            className="relative order-1 lg:order-2 pt-10 pb-5 lg:p-0"
                            >
                            <div className="relative h-[150px] w-[150px] lg:h-[25vw] lg:w-[25vw] max-w-[300px] max-h-[300px] mx-auto rounded-full border-4 border-primary before:absolute before:content-[''] before:shadow-img before:overflow-hidden before:w-full before:h-full before:animate-pulse before:rounded-full">
                                <div className="aspect-[4/4] rounded-full">
                                    <img
                                        src={imageSrc}
                                        alt="Photo de mon profil"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center mt-12 lg:mt-20 mx-auto w-fit opacity-25 animate-pulse"
                        >
                        <div className="flex">
                            <Mouse className="h-6 w-6"/>
                            <ArrowDown className="h-6 w-4 animate-bounce"/>
                        </div>
                        <p className="text-xs my-2">Faites défiler</p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}