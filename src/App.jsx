import { useState } from 'react'
import Navbar from './components/landing/Navbar'
import Hero from './components/landing/Hero'
import Features from './components/landing/Features'
import { Stats, Pricing, Testimonials, CTA, Footer } from './components/landing/Sections'
import Dashboard from './components/dashboard/Dashboard'

export default function App() {
  const [view, setView] = useState('landing')   // 'landing' | 'dashboard'
  const [dark, setDark] = useState(false)

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      {view === 'landing' ? (
        <>
          <Navbar dark={dark} setDark={setDark} setView={setView} />
          <Hero setView={setView} />
          <Features />
          <Stats />
          <Pricing setView={setView} />
          <Testimonials />
          <CTA setView={setView} />
          <Footer />
        </>
      ) : (
        <Dashboard dark={dark} setDark={setDark} setView={setView} />
      )}
    </div>
  )
}
