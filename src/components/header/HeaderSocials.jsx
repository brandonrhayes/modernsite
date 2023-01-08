import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/brandonrhayes" target="_blank" rel="noreferrer"><AiFillLinkedin size={40}/></a>
        <a href="https://www.instagram.com/brandonrhayes" target="_blank" rel="noreferrer"><AiFillInstagram size={40}/></a>
        <a href="https://twitter.com/brandonrhayes" target="_blank" rel="noreferrer"><AiFillTwitterSquare size={40}/></a>
    </div>
  )
}

export default HeaderSocials 
