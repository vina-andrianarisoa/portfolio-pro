import { MenuDesktop } from '@/components/Header/MenuDesktop'
import { MenuMobile } from '@/components/Header/MenuMobile'

export const Header = () => {

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent text-foreground shadow-md z-50">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className='text-xl font-bold'>VA</div>
                
                {/* Menu Desktop */}
                <MenuDesktop/>

                {/* Menu Mobile */}
                <MenuMobile/>
            </nav>
        </header>
    )
}