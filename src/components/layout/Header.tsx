import { MenuDesktop } from '@/components/layout/MenuDesktop'
import { MenuMobile } from '@/components/layout/MenuMobile'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import useScroll from '@/hooks/useScroll'

export const Header = () => {
    const scrolled = useScroll(50);

    const containerVariants : Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
    };

    const itemVariants : Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0,
        transition: { delay: 0.5, type: "spring", stiffness: 100, damping: 20 } }
    }

    return (
        <header
            className={cn(`fixed top-0 left-0 w-full bg-transparent px-0 text-foreground z-50`, scrolled && "backdrop-blur-sm shadow-sm transition-[backdrop-filter, box-shadow, background-color] duration-500")}
            >
            <motion.nav 
                className="container px-4 py-3 flex justify-between items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                >
                <motion.div 
                    className='text-xl font-bold text-foreground'
                    variants={itemVariants}
                    >
                        V<span className="text-primary font-extrabold">.</span>Andrianarisoa
                </motion.div>
                
                {/* Menu Desktop */}
                <MenuDesktop/>

                {/* Menu Mobile */}
                <MenuMobile/>
            </motion.nav>
        </header>
    )
}