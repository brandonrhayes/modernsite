import { React, useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineDashboard} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
//import Tooltip from '@mui/material/Tooltip';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a 
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      ><AiOutlineHome size={25}/></a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      ><AiOutlineUser size={25}/></a>
      <a 
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      ><AiOutlineBook size={25}/></a>
      <a 
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      ><AiOutlineDashboard size={25}/></a>
      <a 
        href="#contact"
        onClick={()=> setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      ><AiOutlineMessage size={25}/></a>

    </nav>
  )
}

export default Nav