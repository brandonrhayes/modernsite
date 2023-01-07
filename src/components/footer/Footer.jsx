import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Brandonrhayes</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/brandonrhayes" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
        <a href="https://twitter.com/brandonrhayes" target="_blank" rel="noreferrer"><AiFillTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Brandonrhayes. All rights resrved.</small>
      </div>
    </footer>
  )
}

export default Footer