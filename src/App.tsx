import { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Loader from '@/components/Loader'
import useLoaderStore from '@/store/useLoader'
import { preloadImages } from '@/utils/preload'
import { criticalmages } from '@/utils/images'
import { motion } from "framer-motion"

function App() {
  const { hideLoader, loading } = useLoaderStore();
  const [ contentReady, setContentReady ] = useState(false);

  useEffect(() => {
    preloadImages(Object.values(criticalmages)).then(() => {
      setTimeout(() => {
        setContentReady(true);
        hideLoader();
      }, 5000);
    });
  }, []);

  return (
    <>
      {/* Loader global */}
      { loading && (
        <Loader/>
      )}
      
      {/* Contenu principal */}
      { contentReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="flex flex-col min-h-screen justify-between">
            <Header/>
          
            <main className="flex-1 flex justify-center items-center">
              <Hero/>
            </main>

            <footer>
              <div>Footer</div>
            </footer>
          </div>
        </motion.div>
      ) }
    </>
  )
}

export default App