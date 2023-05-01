import React from 'react'
import Header from './components/header/Header'
import Particles from './components/header/Particles'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import BRANDONTEXT from './assets/images/brandon-bg2.jpg'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
//import Portfolio from './components/portfolio/Portfolio'
//import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

/*Removed experience for now
 <Experience />
  <Portfolio />
       <Testimonials />
*/

const Home = () => {
    return (
        <>
           <Particles />
           <Header />
           <Nav />
           <About />
           <Experience />
           <Services />
           <Contact />
           <div className='brandon__text'>
              <img className='brandon__text-image' src={BRANDONTEXT} alt="Brandon" />
           </div>
           <Footer />
        </>
      )
}
  
export default Home;