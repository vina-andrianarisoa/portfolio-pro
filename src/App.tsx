import { Header } from '@/components/Header/Header'

function App() {

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header/>
    
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