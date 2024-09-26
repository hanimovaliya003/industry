import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About';
import Campous from './Components/Campous/Campous';
import Review from './Components/Review/Review';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our program' title='What We Offer'/>
          <Program/>
          <About/>
        <Title subTitle='GALLERY' title='Campus Photos'/>
        <Campous/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Review/>
        <Title subTitle='CONTACT US' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App