import { motion, AnimatePresence } from "framer-motion"
import { aboutData } from "@/data/aboutData"
import { cn } from "@/lib/utils"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion" 

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
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="bg-muted w-full py-6 px-8 border-l-4 border-primary rounded-xl text-base shadow-lg backdrop-blur-lg space-y-6 divide-y divide-border"
                    >
                    <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">

                        { aboutData.subtitle.map(({ title, icon: Icon, description, color }, idx) => (
                            
                            <AccordionItem 
                                key={idx}
                                value={`item-${idx}`}
                            >
                                <AccordionTrigger
                                    className="flex items-center gap-4 text-lg font-semibold [&[data-state=open]>span>svg]:rotate-0 [&>span>svg]:transition-none"
                                >
                                    <span className="shrink-0 flex items-center gap-4">
                                        < Icon className={cn(`w-6 h-6 ${color}`)}/>
                                        { title }
                                    </span>
                                </AccordionTrigger>

                                <AccordionContent
                                    className="text-muted-foreground leading-relaxed px-2 sm:px-4"
                                >
                                    <AnimatePresence initial={false}>
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            { description.map((part, index) => (
                                                part.bold ? <span key={index} className="font-bold text-accent">{" "}{part.text}</span> : <span key={index}>{""}{part.text}</span>
                                            )) }
                                        </motion.div>
                                    </AnimatePresence>
                                </AccordionContent>
                            </AccordionItem>
                        )) }
                    </Accordion>
                
                </motion.div>

            </div>
        </section>
    )
} 

export default About