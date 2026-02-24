import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AppPreview } from './components/AppPreview'
import { Pricing } from './components/Pricing'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Background gradient orbs - fixed, subtle */}
      <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-0 left-[-20%] w-[500px] h-[500px] rounded-full bg-primary-600/8 blur-[150px]" />
        <div className="absolute top-[50%] right-[-15%] w-[400px] h-[400px] rounded-full bg-accent-500/6 blur-[120px]" />
        <div className="absolute bottom-0 left-[20%] w-[350px] h-[350px] rounded-full bg-primary-500/5 blur-[100px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppPreview />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
