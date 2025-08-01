import { Navbar } from '@/components/Navbar'

function App() {

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="fixed top-0 left-0 w-full bg-transparent text-foreground shadow-md z-50">
        <Navbar/>
      </header>
      
      <main className="flex-1">
        <div>Main</div>
      </main>

      <footer>
        <div>Footer</div>
      </footer>
    </div>
  )
}

export default App