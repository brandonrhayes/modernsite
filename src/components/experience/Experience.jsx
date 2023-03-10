import React from 'react'
import './experience.css'
import CV from '../../assets/files/Brandon Hayes - Lead Product Manager Tech Startup Winter 2022 v2.24.pdf'

const Experience = () => {
  return (
    //https://www.youtube.com/watch?app=desktop&v=G-Cr00UYokU
    <section id='experience'>
      <h5>I happen to be good at a few things. Let me share</h5>
      <h2>My Experience</h2>
      <p>I'm all about efficiency...</p>
      <p>Please download my CV or checkout my 
      <a href="https://linkedin.com/in/brandonrhayes" target="_blank" rel="noreferrer"> LinkedIn </a> 
        for my latest experience.
      </p>

      <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="https://linkedin.com/in/brandonrhayes" target="_blank" rel="noreferrer" className='btn'> View LinkedIn Profile</a>
      </div>
    </section>
  )
}

export default Experience