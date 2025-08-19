export const preloadImages = (imageUrls: string[]) => {
    return Promise.allSettled(
        imageUrls.map((url) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve();
                img.onerror = () => reject(new Error(`Erreur de chargement de ${url}`));
            });
        })
    )
}