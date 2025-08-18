import { motion } from "framer-motion"
import { aboutData } from "@/data/aboutData"

const About = () => {

    return (
        <section id="about"
            className="py-20 bg-transparent"
        >
            <div className="container mx-auto max-w-5xl flex flex-col items-center justify-center space-y-8">
                <motion.h2 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="relative mx-auto w-fit text-3xl font-extrabold mb-6 bg-clip-text bg-gradient-primary-dark text-transparent border-special"
                    >
                    { aboutData.title }
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="container bg-muted flex items-center p-6 border-l-8 border-primary rounded-xl shadow-lg backdrop-blur-lg"
                    >
                    <motion.p 
                        
                        className="text-muted-foreground text-justify [hyphens:auto] max-w-[65ch] leading-relaxed mb-6">
                        {aboutData.description.map((part, index) => 
                                        (
                                            part.bold ? <span key={index} className="font-bold text-accent">{" "}{part.text}</span> : <span key={index}>{" "}{part.text}</span>
                                        )
                                    )}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
} 

export default About