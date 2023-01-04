import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/brandon-mountain.png' // brandon-nerd-transparent //brandon-mountain.png
import HeaderSocials from './HeaderSocials'
import {AiFillDownCircle} from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Welcome to the Adventure</h5>
          <h1>Brandon Hayes</h1>
          <h5 classname="text-light">Lead Product Manager</h5>
          <CTA />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'><AiFillDownCircle/></a>
          <HeaderSocials />

        </div>
      </header>
    </>
  )
}

export default Header