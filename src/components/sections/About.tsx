import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { aboutData } from "@/data/aboutData"
import { cn } from "@/lib/utils"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { X } from "lucide-react"
import CertificateCard from '@/components/CertificateCard'

const PDF_URL = "/certificats/attestation_de_formation.pdf";

const About = () => {
    const [openItem, setOpenItem] = useState<string | undefined>("item-0");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

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
                    <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="w-full space-y-4">

                        { aboutData.subtitle.map(({ title, icon: Icon, description, color, certificates }, idx) => {
                            const isOpen = openItem === `item-${idx}`;

                            return (
                                <AccordionItem 
                                    key={idx}
                                    value={`item-${idx}`}
                                >
                                    <AccordionTrigger
                                        className="flex items-center gap-4 text-lg font-semibold [&[data-state=open]>span>svg]:rotate-0 [&>span>svg]:transition-none"
                                    >
                                        <span className="shrink-0 flex items-center gap-4">
                                            <span
                                                className="flex items-center"
                                            >
                                                < Icon className={cn(`w-6 h-6 ${color}`)}/>
                                            </span>
                                                { title }
                                        </span>
                                    </AccordionTrigger>
    
                                    <AccordionContent
                                        className="text-muted-foreground text-base leading-relaxed px-2 sm:px-4"
                                    >
                                        <AnimatePresence mode="wait">
                                            { isOpen && (
                                                <motion.div 
                                                    key={title}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                                                    transition={{ staggerChildren: 0.05, duration: 0.25 }}
                                                >
    
                                                    { description.map((part, index) => (
                                                        <motion.span
                                                            key={index}
                                                            variants={{ hidden: { opacity: 0, y: -5 }, visible: { opacity: 1, y: 0 } }}
                                                            className={ part.bold ? "font-bold text-accent" : "" }
                                                        >
                                                            { part.text }{" "}
                                                        </motion.span>
                                                    )) }
                                                    
                                                    { certificates && certificates.length > 0 && (
                                                        <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_300px))] py-6">
                                                            { certificates.map((cert, i) => (
                                                                <CertificateCard
                                                                    key={i}
                                                                    title={cert.title}
                                                                    preview={cert.locked ? undefined : cert.preview}
                                                                    onView={cert.locked ? undefined : () => {
                                                                        setIsOpenModal(true)
                                                                    }}
                                                                    locked={cert.locked}
                                                                >
                                                                </CertificateCard>
                                                            )) }
                                                        </div>
                                                    ) }
                                                </motion.div>
                                            ) }
                                        </AnimatePresence>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        }    
                        ) }
                    </Accordion>
                </motion.div>

                {/* Modal Certificat */}
                <AnimatePresence mode="wait">
                    { isOpenModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9998] pointer-events-auto"
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                className="bg-muted p-4 rounded-lg w-11/12 max-w-3xl h-[80vh] z-[9999] overflow-hidden"
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    whileHover={{ opacity: 1, color: "hsl(var(--primary))" }}
                                >
                                    <X className="absolute w-6 h-6 top-5 right-5 cursor-pointer" onClick={() => setIsOpenModal(false)}/>
                                </motion.div>
                                <iframe src={PDF_URL} title="Attestation de formation" className="inset-0 w-full h-full"/>
                            </motion.div>
                        </motion.div>
                    ) }
                </AnimatePresence>
            </div>
        </section>
    )
} 

export default About