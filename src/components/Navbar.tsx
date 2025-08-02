import { MenuDesktop } from '@/components/MenuDesktop'
import { MenuMobile } from '@/components/MenuMobile'

export const Navbar = () => {

    return (
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className='text-xl font-bold'>VA</div>
            
            {/* Menu Desktop */}
            <MenuDesktop/>

            {/* Menu Mobile */}
            <MenuMobile/>
        </nav>
    )
}