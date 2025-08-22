import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import {  Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent } from "@/components/ui/dialog"

export default function DialogCertificat ({ pdfUrl, title="Certificat" } : { pdfUrl?: string, title?: string }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)}>Voir le certificat
                </Button>
            </DialogTrigger>

            <AnimatePresence>
                 { open && (
                     <DialogPortal forceMount>
                         <DialogOverlay asChild>
                             < motion.div
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 z-40"
                             />
                         </DialogOverlay>
                         <DialogContent asChild>
                             <motion.div
                                 initial={{ scale: 0.8, opacity: 0 }}
                                 animate={{ scale: 1, opacity: 1 }}
                                 exit={{ scale: 0.8, opacity: 0 }}
                                 className="fixed top-1/2 left-1/2 max-w-3xl w-11/12 h-3/4 bg-white rounded-lg p-4 z-50 transform -translate-x-1/2 -translate-y-1/2"
                             >
                                 <div className="flex justify-between items-center mb-2">
                                     <h3 className='text-lg font-semibold'>{title}</h3>
                                     <DialogClose asChild>
                                         <Button variant="outline" size="sm">Fermer</Button>
                                     </DialogClose>
                                 </div>
                                 <div className="w-full h-full">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, possimus tenetur. Sed tempore quia sapiente, molestiae fugit atque dolorem quam quo assumenda quaerat at quasi, facere doloremque cumque eum cum.
                                 </div>
                             </motion.div>
                         </DialogContent>
                     </DialogPortal>
                 )}
             </AnimatePresence>
        </Dialog>
    )
}