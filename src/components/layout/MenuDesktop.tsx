import { Link } from 'react-scroll';
import { navLinks } from '@/data/navLinks';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import useUIStore from '@/store/useUIStore';
import { Download } from 'lucide-react';

export const MenuDesktop = () => {
    const { active, setActive } = useUIStore();

    const parentVariant : Variants = {
        hidden: {}, visible: { transition: { delayChildren: 0.3, staggerChildren: 0.3 } }
    }

    const itemVariant : Variants = {
        hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    }

    return (
        <>
            <motion.ul 
                className="hidden lg:flex items-center gap-6 relative"
                initial="hidden"
                animate="visible"
                variants={parentVariant}
                >
                { navLinks.map((link) => (
                    <motion.li 
                        key={link.id}
                        className="relative"
                        variants={ itemVariant }
                        >
                        <Link
                            to={link.id}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onSetActive={() => setActive(link.id)}
                            className={cn('cursor-pointer text-base font-medium transition-colors hover:text-primary dark:hover:text-shadow-glow', active === link.id ? 'text-primary dark:text-shadow-glow font-semibold' : 'text-muted-foreground')}
                        >
                            {link.label}
                        </Link>

                        { active === link.id && (
                            <motion.div
                                layoutId='underline'
                                className="absolute -bottom-5 left-0 h-[2px] w-full bg-primary dark:shadow-glow"
                                transition={{ type: "spring", stiffness: 400 }}
                            />
                        )}
                    </motion.li>
                )) }
            </motion.ul>

            <motion.div 
                className="hidden lg:flex items-center gap-3"
                initial="hidden"
                animate="visible"
                variants={parentVariant}
                >
                <motion.div
                    variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { delay: 2, type: "spring", stiffness: 100, damping: 15 } } }}
                >
                    <ModeToggle/>
                </motion.div>
                
                <motion.div
                    variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { delay: 2.5, type: "spring", stiffness: 100, damping: 15 } } }}
                >
                    <Button variant="outline" asChild><a href="/cv/Andrianarisoa_Vina_CV.pdf" download="Andrianarisoa_Vina_CV.pdf">Télecharger CV <Download/></a></Button>
                </motion.div>
            </motion.div>
        </>
    )
}