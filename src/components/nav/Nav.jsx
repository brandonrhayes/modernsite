import { React, useState } from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAstronaut} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa'
import {FaCommentDots} from 'react-icons/fa'
//import Tooltip from '@mui/material/Tooltip';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a 
        href="/#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      ><FaHome size={25}/></a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      ><FaUserAstronaut size={25}/></a>
      <a 
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      ><FaUserGraduate size={25}/></a>
      <a 
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      ><FaUserTie size={25}/></a>
      <a 
        href="#contact"
        onClick={()=> setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      ><FaCommentDots size={25}/></a>

    </nav>
  )
}

export default Nav