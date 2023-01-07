import React, { useRef } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import BasicModal from '../modal/BasicModal'

const Contact = () => {
  const form = useRef();

  function Form() {
    function handleSubmit(e) {
      e.preventDefault();

      emailjs.sendForm('service_sxxfleg', 'template_urw8pud', form.current, 'FisbNRwLM1hbUYXvo')
        .then((result) => {
          BasicModal(result.text);
        }, (error) => {
          BasicModal(error.text);
      });
      e.target.reset()
    }
  
    return (
      <form ref={form} onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <input type='subject' name='subject' placeholder='Message Subject' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
    );
  }

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_sxxfleg', 'template_urw8pud', form.current, 'FisbNRwLM1hbUYXvo')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset()
  // };

  // const openModal = () => {
  //   <div>
  //     <Button onClick={handleOpen}>Open modal</Button>
  //     <Modal
  //       open={open}
  //       onClose={handleClose}
  //       aria-labelledby="modal-modal-title"
  //       aria-describedby="modal-modal-description"
  //     >
  //       <Box sx={style}>
  //         <Typography id="modal-modal-title" variant="h6" component="h2">
  //           Text in a modal
  //         </Typography>
  //         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //         </Typography>
  //       </Box>
  //     </Modal>
  //   </div>
  // }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hello@brandonrhayes.com</h5>
            <a href="mailto:hello@brandonrhayes.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>brandonrhayes</h5>
            <a href="https://www.instagram.com/brandonrhayes" target="_blank" rel="noreferrer">Send a DM</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}

        <Form/>

      </div>
    </section>
  )
}

export default Contact