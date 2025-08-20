import "./contact.scss";
import { FaPaperPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Let’s start the conversation — I’m excited to connect</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <a
          href="https://calendar.app.google/vaMGsUzT3XQFZypj8"
          target="_blank"
          rel="noreferrer"
          className="contact__option-link"
        >
          <article className="contact__option">
            <FaRegCalendarPlus className="contact__option-icon" />
            <h3>Schedule a Conversation</h3>
            <h5>Video or In-person</h5>
            <span className="contact__option-cta">Find a Time</span>
          </article>
        </a>

        <a
          href="mailto:hello@brandonrhayes.com"
          target="_blank"
          rel="noreferrer"
          className="contact__option-link"
        >
          <article className="contact__option">
            <FaPaperPlane className="contact__option-icon" />
            <h3>Business Inquiries</h3>
            <h5>hello@brandonrhayes.com</h5>
            <span className="contact__option-cta">Email Me</span>
          </article>
        </a>

        <a
          href="https://www.instagram.com/brandonrhayes"
          target="_blank"
          rel="noreferrer"
          className="contact__option-link"
        >
          <article className="contact__option">
            <FaInstagram className="contact__option-icon" />
            <h3>Instagram</h3>
            <h5>brandonrhayes</h5>
            <span className="contact__option-cta">DM Me</span>
          </article>
        </a>

        <a
          href="https://www.linkedin.com/in/brandonrhayes/"
          target="_blank"
          rel="noreferrer"
          className="contact__option-link"
        >
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h3>LinkedIn</h3>
            <h5>brandonrhayes</h5>
            <span className="contact__option-cta">Connect with Me</span>
          </article>
        </a>
      </div>
      {/*END OF CONTACT OPTIONS */}
    </section>
  );
};

export default Contact;
