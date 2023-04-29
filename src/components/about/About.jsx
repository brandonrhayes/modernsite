import React from 'react'
import './about.css'
import ME from '../../assets/images/Brandon-talk-data.JPG'
import ME2 from '../../assets/images/brandon-nerd.JPG'
//import {FaAward} from 'react-icons/fa'
//import {AiOutlineTeam} from 'react-icons/ai'

const About = () => {
  return (
    <>
       <section id='about'>
        <h5>I like the outdoors and making people smile...</h5>
        <h2>More About Me</h2>
        
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Me" />
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
              {/* <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>5+ Years Working</small>
              </article>

              <article className='about__card'>
                <AiOutlineTeam className='about__icon'/>
                <h5>Experience</h5>
                <small>5+ Years Working</small>
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>5+ Years Working</small>
              </article> */}

            </div>
              <p>I was born and raised in a small town near the shoreline of Lake Huron, one of Canada's Great Lakes. 
                Growing up, I enjoyed a simple life of playing in nature with friends along the water I was blessed with.
                But after a while, it grew stale. The exploration excited me- the adventure of exploring something new.
                I was curious about everything, and that curiosity fueled my desire to learn; I wanted to become the best version of myself.
                A version in which I could help everyone else do the same, so they can live their dream just like I'm so fortunate to do today.</p>
          
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
       </section>
    </>
  )
}

export default About