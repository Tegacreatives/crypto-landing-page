import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import DailyPrices from './components/DailyPrices'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import SignUp from './components/SignUp'
import Roadmap from './components/Roadmap'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <SignUp />
      <Roadmap />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App