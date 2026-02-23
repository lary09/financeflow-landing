import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AppPreview } from './components/AppPreview'
import { Pricing } from './components/Pricing'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-600/10 blur-[120px] float" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-500/8 blur-[100px] float-delay" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-primary-500/6 blur-[80px] float" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <AppPreview />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
