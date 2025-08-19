import { motion } from "framer-motion"
import { footerLinks } from "@/data/footerData"

export default function Footer(){
    return (
        <footer className="bg-primary text-primary-foreground dark:bg-background dark:text-white dark:backdrop-blur-md py-6 mt-10">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <motion.p 
                    className="text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    >
                        &copy; { new Date().getFullYear() } Vina Andrianarisoa. Tous droits réservés
                </motion.p>

                {/* Réseaux sociaux */}
                <div className="flex gap-6 text-primary-foreground">
                    { footerLinks.map(({ href, label, icon: Icon }) => (
                        <motion.a
                            key={label}
                            whileHover={{ scaleY: 0.9 }}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary-foreground dark:hover:text-accent transition flex items-center gap-1"
                            aria-label={label}
                        >
                            <Icon className="w-5 h-5"/>
                        </motion.a>
                    )) }
                </div>
            </div>
        </footer>
    )
}