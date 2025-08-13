import { Header } from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'

function App() {

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header/>
    
      <main className="flex-1 flex justify-center items-center">
        <Hero/>
      </main>

      <footer>
        <div>Footer</div>
      </footer>
    </div>
  )
}

export default App