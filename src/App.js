import React from 'react'
import Home from './PortfolioContainer/Home/Home'
import Navbar from './PortfolioContainer/Navbar/Navbar'
import About from './PortfolioContainer/AboutMe/About'
import Resume from './PortfolioContainer/Resume/Resume'
import Testimonial from './PortfolioContainer/Testimonial/Testimonial'
import Contact from './PortfolioContainer/ContactMe/Contact'
import Footer from './PortfolioContainer/Footer/Footer'
import ScrollTopBtn from './PortfolioContainer/ScrollTopBtn/ScrollTopBtn'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Resume/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <ScrollTopBtn/>
    </>
  )
}

export default App
