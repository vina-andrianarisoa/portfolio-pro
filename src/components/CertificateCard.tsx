import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface CertificateCardProps {
    title: string;
    preview: string;
    onView: () => void;
}

const CertificateCard = ({ title, preview, onView } : CertificateCardProps) => {
  return (
    <Card className="bg-background max-w-[250px] overflow-hidden shadow-md hover:scale-[1.02] transition duration-300 border-none rounded-lg">
        <CardContent className="p-0">
            <img src={preview} alt={`Apercu ${title}`} className='w-full h-48 object-cover' />
        </CardContent>
        <CardFooter className="flex items-center p-4">
            <Button variant="outline" size="sm" onClick={onView}>
                Voir le certificat
            </Button>
        </CardFooter>
    </Card>
  )
}

export default CertificateCard