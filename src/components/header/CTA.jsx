import React from 'react'
import CV from '../../assets/Brandon Hayes - Lead Product Manager Tech Startup Winter 2022 v2.24.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Talk with Brandon</a>
    </div>
  )
}

export default CTA