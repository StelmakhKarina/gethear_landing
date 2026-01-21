import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MissedOpportunities } from './components/MissedOpportunities'
import { HowItWorks } from './components/HowItWorks'
import { Sources } from './components/Sources'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50 to-primary-100 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full gradient-blob -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-300 rounded-full gradient-blob translate-x-1/3" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary-300 rounded-full gradient-blob translate-y-1/2" />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <MissedOpportunities />
        <HowItWorks />
        <Sources />
        <Pricing />
        <Footer />
      </div>
    </div>
  )
}

export default App
