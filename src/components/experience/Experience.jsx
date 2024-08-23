import React from 'react'
import './experience.css'

// import CV from '../../assets/files/Brandon Hayes - Lead Product Manager Tech Startup Winter 2023 v2.25_Online.pdf'
// import LinkedInBadge from './LinkedInBadge'

const Experience = () => {
  return (
    //https://www.youtube.com/watch?app=desktop&v=G-Cr00UYokU
    <div className='experience__container'>
      <section id='experience'>
        <h5>I happen to love learning...</h5>
        <h2>Experience</h2>
        <p>I'm all about efficiency...</p>
        <p>LinkedIn happens to have most of it, but if you want more information please 
            <a href="#contact"> contact me</a> 
        </p>


        {/* <div className='linkedin'>
          <LinkedInBadge />
        </div> */}

        {/* <p>Please download my CV or checkout my 
        <a href="https://linkedin.com/in/brandonrhayes" target="_blank" rel="noreferrer"> LinkedIn </a> 
          for my latest experience.
        </p> */}

       {/* <div className="cta">
          <a href={CV} download className='btn'>Download CV</a>
          <a href="https://linkedin.com/in/brandonrhayes" target="_blank" rel="noreferrer" className='btn'> Brandon's LinkedIn</a>
        </div> */}
      </section>
    </div>
  )
}

export default Experience;