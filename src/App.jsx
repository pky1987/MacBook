import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import ProductView from './components/ProductView'
import Performance from './components/Performance'
import Showcase from './components/Showcase'
import Features from './components/Feature'
import Highlights from './components/Highlights'
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductView />
      <Performance />
      <Showcase />
      <Features/>
      <Highlights/>
      <Footer />
    </div>
  )
}

export default App
