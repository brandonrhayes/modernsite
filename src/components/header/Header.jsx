import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/brandon-mountain.png' // brandon-nerd-transparent //brandon-mountain.png
import HeaderSocials from './HeaderSocials'
import {AiFillDownCircle} from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h4>Hey, curious one. Welcome to the adventure!</h4>
          <h1>Brandon Hayes</h1>
          <h5 className="text-light">Lead Product Manager</h5>
          <CTA />

          <div className="me">
            <img src={ME} className="me__img" alt="me" />
          </div>

          <a href="#contact" className='scroll__down'><AiFillDownCircle size={40}/></a>
          <HeaderSocials />

        </div>
      </header>
    </>
  )
}

export default Header