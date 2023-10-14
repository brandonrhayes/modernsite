import React from 'react'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGoodreadsG} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaPaypal} from 'react-icons/fa'

import { styled } from '@mui/material/styles';

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {

  const DarkestTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#1F1F38',
      color: '#FFF',
      boxShadow: theme.shadows[1],
    },
  }));

  return (
    <footer id='footer'>
      <a href="/#" className='footer__logo'>Brandonrhayes</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <DarkestTooltip title = 'Connect on LinkedIn'>
          <a href="https://linkedin.com/in/brandonrhayes" target="_blank" rel="noreferrer"><FaLinkedinIn size={15}/></a>
        </DarkestTooltip>
        <DarkestTooltip title = 'Connect on Instagram'>
          <a href="https://www.instagram.com/brandonrhayes" target="_blank" rel="noreferrer"><FaInstagram size={15}/></a>
        </DarkestTooltip>
        <DarkestTooltip title = 'Connect on Twitter'>
          <a href="https://twitter.com/brandonrhayes" target="_blank" rel="noreferrer"><FaTwitter size={15}/></a>
        </DarkestTooltip>
        <DarkestTooltip title = 'See what Brandon is reading'>
          <a href="https://www.goodreads.com/brandonrhayes" target="_blank" rel="noreferrer"><FaGoodreadsG size={15}/></a>
        </DarkestTooltip>
        <DarkestTooltip title = 'See what Brandon has been developing'>
          <a href="https://www.github.com/brandonrhayes" target="_blank" rel="noreferrer"><FaGithub size={15}/></a>
        </DarkestTooltip>
        <DarkestTooltip title = 'Pay Brandon'>
          <a href="https://paypal.me/brandonrhayes" target="_blank" rel="noreferrer"><FaPaypal size={15}/></a>
        </DarkestTooltip>
      </div>

      <div className="footer__copyright">
        <small>&copy; {getCurrentYear()} Brandonrhayes. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer