import Lottie from "lottie-react";
import bubble from "@/assets/animations/lottie-bubble.json";

const LottieAnimation = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw] max-w-[120px] block mx-auto">
                <Lottie animationData={bubble} loop={true}/>
            </div>
            <div className="text-lg md:text-base text-muted-foreground animate-pulse">Chargement...</div>
        </div>
    )
}

export default LottieAnimation