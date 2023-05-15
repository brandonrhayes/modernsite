import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGoodreadsG} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <Tooltip className='tooltip' title = 'Connect with Brandon on LinkedIn'>
        <a href="https://linkedin.com/in/brandonrhayes" target="_blank" rel="noreferrer"><FaLinkedinIn size={35}/></a>
      </Tooltip>

      <Tooltip className='tooltip' title = 'Connect with Brandon on Instagram'>
        <a href="https://www.instagram.com/brandonrhayes" target="_blank" rel="noreferrer"><FaInstagram size={35}/></a>
      </Tooltip>

      <Tooltip className='tooltip' title = 'Connect with Brandon on Twitter'>
        <a href="https://twitter.com/brandonrhayes" target="_blank" rel="noreferrer"><FaTwitter size={35}/></a>
      </Tooltip>

      <Tooltip className='tooltip' title = 'See what Brandon is reading'>
        <a href="https://www.goodreads.com/brandonrhayes" target="_blank" rel="noreferrer"><FaGoodreadsG size={35}/></a>
      </Tooltip>

      <Tooltip className='tooltip' title = 'See what Brandon has been developing'>
        <a href="https://www.github.com/brandonrhayes" target="_blank" rel="noreferrer"><FaGithub size={35}/></a>
      </Tooltip>
    </div>
  )
}

export default HeaderSocials 
