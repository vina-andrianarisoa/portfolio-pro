import Lottie from "lottie-react";
import bubble from "@/assets/animations/lottie-bubble.json";

const LottieAnimation = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[15vw] max-w-[120px] block h-auto mx-auto">
                <Lottie animationData={bubble} loop={true}/>
            </div>
            <div className="text-base text-muted-foreground animate-pulse">Chargement...</div>
        </div>
    )
}

export default LottieAnimation