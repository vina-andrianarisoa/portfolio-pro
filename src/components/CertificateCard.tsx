import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CertificateCardProps {
    title: string;
    preview?: string;
    onView?: () => void;
    locked?: boolean;
}

const CertificateCard = ({ title, preview, onView, locked=false } : CertificateCardProps) => {
  return (
    <Card className={cn(`bg-background w-full overflow-hidden shadow-md hover:scale-[1.02] transition duration-300 border-none rounded-lg`, locked ? "opacty-60" : "")}>
        <CardContent className="p-0">
            { locked ? (
                <div className="flex flex-col items-center justify-center h-48 bg-input">
                    <Lock className="w-12 h-12 mb-2 text-muted-foreground animate-pulse"/>
                    <span className="text-sm text-muted-foreground text-center animate-pulse">A venir bientôt...</span>
                </div>
            ) : (
                <img src={preview} alt={`Aperçu ${title}`} className="w-full h-48 object-cover" />
            ) }
        </CardContent>
        { !locked && onView && (
            <CardFooter className="flex items-center p-4">
                <Button variant="outline" size="sm" onClick={onView}>
                    Voir le certificat
                </Button>
            </CardFooter>
        ) }
    </Card>
  )
}

export default CertificateCard