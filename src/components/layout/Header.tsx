import { MenuDesktop } from '@/components/layout/MenuDesktop'
import { MenuMobile } from '@/components/layout/MenuMobile'

export const Header = () => {

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent px-0 text-foreground backdrop-blur-md z-50">
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