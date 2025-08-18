import React from 'react'
import LottieAnimation from "@/components/LottieAnimation"
import useLoaderStore from "@/store/useLoader"
import { motion, AnimatePresence } from "framer-motion"

const Loader = () => {
const { loading } = useLoaderStore()


  return (
    <AnimatePresence>
      { loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-screen h-screen bg-background flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex items-center justify-center"
            >
              <LottieAnimation/>
          </motion.div>
        </motion.div>
      ) }
    </AnimatePresence>
  )
}

export default Loader