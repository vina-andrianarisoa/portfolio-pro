import { motion } from "framer-motion"
import { aboutData } from "@/data/aboutData"
import { cn } from "@/lib/utils"

const About = () => {

    return (
        <section id="about"
            className="py-20 bg-transparent w-full"
        >
            <div className="container flex flex-col items-center max-w-5xl mx-auto w-full gap-16">
                <motion.h2 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="relative flex items-center gap-4 mx-auto w-fit text-3xl font-extrabold mb-6 bg-clip-text bg-gradient-primary-dark text-transparent border-special"
                    >
                    { aboutData.title }
                </motion.h2>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-muted w-full py-6 px-8 border-l-8 border-primary rounded-xl text-base shadow-lg backdrop-blur-lg space-y-4"
                    >

                    { aboutData.subtitle.map(({ title, icon: Icon, description, color }, idx) => (
                        <div key={idx}>
                            <h3 className="text-xl font-semibold flex items-center gap-4">
                                < Icon className={cn(`w-6 h-6 ${color}`)}/>
                                { title }
                            </h3>

                            <p className="text-muted-foreground text-justify [hyphens:auto] leading-relaxed px-4 mx-2 mb-6">{ description.map((part, index) => (
                                part.bold ? <span key={index} className="font-bold text-accent">{" "}{part.text}</span> : <span key={index}>{""}{part.text}</span>
                            )) }</p>
                        </div>
                    )) }
                
                </motion.div>

            </div>
        </section>
    )
} 

export default About