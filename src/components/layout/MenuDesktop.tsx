import { Link } from 'react-scroll';
import { navLinks } from '@/data/navLinks';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import useUIStore from '@/store/useUIStore';

export const MenuDesktop = () => {
    const { active, setActive } = useUIStore();

    return (
        <>
            <ul className="hidden md:flex items-center gap-6 relative">
                { navLinks.map((link) => (
                    <li 
                        key={link.id}
                        className="relative"
                        >
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

                        { active === link.id && (
                            <motion.div
                                layoutId='underline'
                                className="absolute -bottom-5 left-0 h-[2px] w-full bg-primary"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        ) }
                    </li>
                )) }
            </ul>

            <div className="hidden md:flex items-center gap-3">
                <ModeToggle/>
                <Button variant="default" asChild><a href="/cv/Andrianarisoa_Vina_CV.pdf" download="Andrianarisoa_Vina_CV.pdf">Télecharger CV</a></Button>
            </div>
        </>
    )
}