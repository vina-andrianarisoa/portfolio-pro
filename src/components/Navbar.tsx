import { navLinks } from '@/data/navLinks'
import { Link } from 'react-scroll'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '@/components/ui/theme-provider'
import { Menu, X, Laptop, Sun } from 'lucide-react';
import { Moon } from 'lucide-react';


export const Navbar = () => {
    const [active, setActive] = useState<string>('home');
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent text-foreground-dark shadow-md z-50">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className='text-xl font-bold'>VA</div>
                
                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6">
                    { navLinks.map((link) => (
                        <li key={link.id}>
                            <Link 
                                to={link.id}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onSetActive={() => setActive(link.id)}
                                className={cn('cursor-pointer transition-colors hover:text-primary', active === link.id ? 'text-primary font-semibold' : 'text-muted-foreground')}
                            >
                                {link.label}
                            </Link>
                        </li>
                    )) }
                </ul>

                {/* Menu Mobile */}
                <div className="md:hidden flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            asChild
                            className="rounded-full"
                        >
                            <Button 
                                variant="ghost"
                                size="icon"
                                >
                                    { theme === "light" ? 
                                        (<Sun className="h-5 w-5"/>)
                                        : theme === "dark" ?
                                        (<Moon className="h-5 w-5"/>)
                                        :
                                        (<Laptop className="h-5 w-5"/>)
                                    }
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => setTheme("light")}
                            >
                                <Sun className="mr-2 h-4 w-4"/>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme("dark")}
                            >
                                <Moon className="mr-2 h-4 w-4"/>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setTheme("system")}
                            >
                                <Laptop className="mr-2 h-4 w-4"/>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

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

                            <AnimatePresence>
                                { open && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-[64px] left-0 w-full bg-background shadow-md z-40"
                                    >
                                        <motion.div
                                            className="flex flex-col space-y-6 py-6 px-4"
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
                                                    }}>
                                                        <Link
                                                            to={link.id}
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-70}
                                                            duration={500}
                                                            className="cursor-pointer text-lg font-medium transition-colors hover:text-primary transition"
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
                                                <Button asChild className="w-full mt-4">
                                                    <a href="" download>Telécharger CV</a>
                                                </Button>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                    </Button>

                </div>

                <div className="hidden md:flex items-center gap-3">
                    <ModeToggle/>
                    <Button variant="default" asChild><a href="" download>Télecharger CV</a></Button>
                </div>
            </nav>
        </header>
    )
}