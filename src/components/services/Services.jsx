import "./services.scss";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>And I want to help you grow</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Product & Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>UI/UX design for mobile & desktop</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Product strategy & roadmapping</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Agile methodology coaching</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Stakeholder communication & documentation</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Team coaching, mentorship & support</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Unlimited phone discussions</p>
            </li>
          </ul>

          <div className="preaction">
            <h5>Starting at</h5>
            <div className="sidebyside">
              <h2>$213.00</h2>
              <h6>per billable hour</h6>
            </div>
          </div>

          <div className="action">
            <a href="#contact" className="btn btn-magical">
              {" "}
              Get Started
            </a>
          </div>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Organizational Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Designing high-performing teams</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Optimizing for stakeholder engagement</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Developing junior team members</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Fostering curiosity & growth mindsets</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Handling difficult team members</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Future proofing your team</p>
            </li>
          </ul>

          <div className="preaction">
            <h5>Starting at</h5>
            <div className="sidebyside">
              <h2>$257.00</h2>
              <h6>per billable hour</h6>
            </div>
          </div>

          <div className="action">
            <a href="#contact" className="btn btn-magical">
              {" "}
              Get Started
            </a>
          </div>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Career Consulting</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Determining what to study</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Developing a post-education plan</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Setting & executing career goals</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Changing careers & becoming more</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Unlimited email discussions & consultations</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Limited phone calls & coffee chats</p>
            </li>
          </ul>

          <div className="preaction">
            <h5>Starting at</h5>
            <div className="sidebyside">
              <h2>$129.99</h2>
              <h6>per consultation</h6>
            </div>
          </div>

          <div className="action">
            <a href="#contact" className="btn btn-magical">
              {" "}
              Get Started
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
