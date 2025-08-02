import { Link } from 'react-scroll';
import { navLinks } from '@/data/navLinks';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useUIStore from '@/store/useUIStore';

export const MenuMobile = () => {
    const { active, setActive, open, setOpen } = useUIStore();

    return (
<div className="md:hidden flex items-center gap-2">
                <ModeToggle/>

                {/* Menu Popover */}
                <Button 
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(!open)}
                    >
                    <motion.div
                        key={open ? 'open' : 'menu'}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        { open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/> }
                    </motion.div>
                </Button>

                <AnimatePresence mode="wait">
                    { open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[64px] mx-auto left-0 w-full bg-background shadow-md z-40"
                        >
                            <motion.div
                                className="flex flex-col space-y-2 py-6 px-4"
                                initial="hidden"
                                animate="visible"
                                variants={{ 
                                    hidden: {}, 
                                    visible: { transition: { staggerChildren: 0.1 }},
                                }}
                            >
                                { navLinks.map((link) => (
                                    <motion.div
                                        key={link.id}
                                        variants={{ 
                                            hidden: { opacity: 0, y: -10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="text-center"
                                        >
                                            <Link
                                                to={link.id}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                onSetActive={() => setActive(link.id)}
                                                className={cn('cursor-pointer text-lg font-medium transition-colors hover:text-primary', active === link.id ? 'text-primary font-semibold' : 'text-muted-foreground')}
                                                onClick={() => setOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                    </motion.div>
                                ))}

                                {/* Bouton CV */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: -10 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <Button className="w-full mt-4" >
                                        <a href="public/cv/Andrianarisoa_Vina_CV.pdf" download="Andrianarisoa_Vina_CV.pdf">Telécharger CV</a>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
    )
}