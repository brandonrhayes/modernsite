import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/brandonrhayes" target="_blank"><AiFillLinkedin/></a>
        <a href="https://www.instagram.com/brandonrhayes" target="_blank"><AiFillInstagram/></a>
        <a href="https://twitter.com/brandonrhayes" target="_blank"><AiFillTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocials 
