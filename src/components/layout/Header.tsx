import { MenuDesktop } from '@/components/layout/MenuDesktop'
import { MenuMobile } from '@/components/layout/MenuMobile'
import { cn } from '@/lib/utils'
import useScroll from '@/hooks/useScroll'

export const Header = () => {
    const scrolled = useScroll(50);

    return (
        <header className={cn(`fixed top-0 left-0 w-full bg-transparent px-0 text-foreground z-50`, scrolled && "backdrop-blur-sm shadow-sm transition-[backdrop-filter, box-shadow, background-color] duration-500")}>
            <nav className="container px-4 py-3 flex justify-between items-center">
                <div className='text-xl font-bold text-foreground'>V<span className="text-primary font-extrabold">.</span>Andrianarisoa</div>
                
                {/* Menu Desktop */}
                <MenuDesktop/>

                {/* Menu Mobile */}
                <MenuMobile/>
            </nav>
        </header>
    )
}