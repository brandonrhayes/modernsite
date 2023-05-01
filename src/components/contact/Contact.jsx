import React, { useRef, useState, useReducer } from 'react'
import './contact.css'
import {FaEnvelope} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaCalendarPlus} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import BasicModal from '../modal/BasicModal'

const Contact = () => {
  const form = useRef();

  const [open, setOpen] = useState(false);

  const modalReducer = (state, action) => {
    switch (action.type) {
      case "SUCCESS":
        return {
          header: 'Thank you',
          content: 'Your message has been sent to Brandon.',
          buttonText: 'Close'
        }
        
      case "ERROR":
        return {
          header: 'Whoops...', 
          content: 'Something went wrong. Your message has failed to send.',
          buttonText: 'Try Again'
        }
      default:
        throw new Error();
    }
  }
  
  const [modalState, modalDispatch] = useReducer (modalReducer, {
    header: '',
    content: '',
    buttonText: ''
  })

  function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      emailjs.sendForm('service_sxxfleg', 'template_urw8pud', form.current, 'FisbNRwLM1hbUYXvo')
        .then((result) => {
          modalDispatch({type: "SUCCESS"})
          setOpen(true)
        }, (error) => {
          modalDispatch("ERROR")
          setOpen(true)
      });
      e.target.reset()
    }
  
    return (
      <form ref={form} onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <input type='subject' name='subject' placeholder='Message Subject' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <label>Using this form, you acknowledge and accept a significantly delayed response time 
              relative to other options.</label>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    );
  }

  return (
    <section id='contact'>
      <h5>So, get in touch!</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        
        <div className='contact__options'>
        <article className='contact__option'>
            <FaCalendarPlus className='contact__option-icon'/>
            <h4>Visual Connection</h4>
            <h5>Video or In-person</h5>
            <a href="https://calendly.com/brandonrhayes/30" target="_blank" rel="noreferrer">Schedule a time</a>
          </article>
          <article className='contact__option'>
            <FaEnvelope className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hello@brandonrhayes.com</h5>
            <a href="mailto:hello@brandonrhayes.com" target="_blank" rel="noreferrer">Drop a message</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>brandonrhayes</h5>
            <a href="https://www.instagram.com/brandonrhayes" target="_blank" rel="noreferrer">Send a DM</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        
        <Form/>

        {open && <BasicModal 
                    handleClose={setOpen} 
                    header={modalState.header} 
                    content={modalState.content} 
                    buttonText={modalState.buttonText}
                  />}

      </div>
    </section>
  )
}

export default Contact