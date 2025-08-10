import { heroData } from "@/data/heroData"
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { cn } from './../../lib/utils';

export default function Hero() {
    const { greeting, role, name} = heroData

    return (
        <section id="home"
            className="py-20 md:py-32"
        >
            <div className="container">
                <div className="grid justify-center items-center">
                    <div className="space-y-8">
                        
                        {/* Status disponibilité */}
                        {/* <div className="relative inline-flex items-center w-fit bg-muted py-2 px-3 rounded-full gap-x-2 pointer-events-none">
                            <div className="h-3 w-3 animate-pulse bg-success rounded-full"></div>
                            <div className="text-xs text-foreground">Ouvert à de nouvelles opportunités</div>
                        </div> */}

                        {/* Profil */}
                        <div className="rounded-full w-40 h-40 mx-auto overflow-hidden ring ring-2 ring-primary animate-pulse shadow-glow">
                            <div className="w-full h-full bg-gradient-to-br from-primary via-black to-primary"></div>
                        </div>

                        <div className="relative inline-flex items-center w-fit bg-muted py-2 px-3 rounded-full gap-x-2 pointer-events-none">
                            <div className="h-3 w-3 animate-pulse bg-success rounded-full"></div>
                            <div className="text-xs text-foreground">Ouvert à de nouvelles opportunités</div>
                        </div>

                        {/* Titre principal */}
                        <div className="space-y-4">
                            <h1 className="text-xl text-center font-bold">{ greeting } <span className="text-primary animate-">{ name }</span> <span className="animate-bounce">👋</span></h1>

                            <p className="text-5xl text-center font-bolder text-primary max-w-lg tracking-tight">{ role }</p>
                        </div>

                        <div className="max-w-fit mx-auto text-center animate-bounce">
                            <Button
                                variant="default"
                                size="icon"
                                className={cn("bg-transparent text-lg hover:bg-transparent")}>
                                <ChevronDown className="w-4 h-4 text-lg"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}