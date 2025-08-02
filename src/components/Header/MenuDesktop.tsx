import { Link } from 'react-scroll';
import { navLinks } from '@/data/navLinks';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useUIStore from '@/store/useUIStore';

export const MenuDesktop = () => {
    const { active, setActive } = useUIStore();

    return (
        <>
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

            <div className="hidden md:flex items-center gap-3">
                <ModeToggle/>
                <Button variant="default" asChild><a href="public/cv/Andrianarisoa_Vina_CV.pdf" download="Andrianarisoa_Vina_CV.pdf">Télecharger CV</a></Button>
            </div>
        </>
    )
}