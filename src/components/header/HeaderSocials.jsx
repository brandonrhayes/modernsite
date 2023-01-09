import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaGoodreads} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/brandonrhayes" target="_blank" rel="noreferrer"><FaLinkedin size={35}/></a>
        <a href="https://www.instagram.com/brandonrhayes" target="_blank" rel="noreferrer"><FaInstagramSquare size={35}/></a>
        <a href="https://twitter.com/brandonrhayes" target="_blank" rel="noreferrer"><FaTwitterSquare size={35}/></a>
        <a href="https://www.goodreads.com/brandonrhayes" target="_blank" rel="noreferrer"><FaGoodreads size={35}/></a>
    </div>
  )
}

export default HeaderSocials 
