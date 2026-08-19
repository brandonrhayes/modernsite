import "./services.scss";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>
        Helping teams grow through clarity, strategy, and momentum from 0 to
        scale
      </h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Product Strategy</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>AI product roadmap & architecture design</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>ML-powered feature development & scaling</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>AI go-to-market strategy & adoption</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>UI/UX design for mobile & desktop</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Technical product requirements & documentation</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Model evaluation & prompt engineering</p>
            </li>
          </ul>

          <div className="preaction">
            <h5>Results-driven engagement, scoped to your needs</h5>
          </div>

          <div className="action">
            <a href="#contact" className="btn btn-magical">
              {" "}
              Let's Talk
            </a>
          </div>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>0→1 Building</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Building & launching new products from scratch</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>B2B SaaS & marketplace platform strategy</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Product-led growth & monetization models</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Multi-tenant architecture & scalability</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Cross-functional team leadership & delivery</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Executive & team presentations</p>
            </li>
          </ul>

          <div className="preaction">
            <h5>Results-driven engagement, scoped to your needs</h5>
          </div>

          <div className="action">
            <a href="#contact" className="btn btn-magical">
              {" "}
              Let's Talk
            </a>
          </div>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Product Advisory</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Product strategy audits & optimization</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Revenue architecture & growth metrics</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Team structure & process design</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>PM mentorship & career development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Go-to-market strategy for new verticals</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Partnership & platform integration strategy</p>
            </li>
          </ul>

          <div className="preaction">
            <h5>Flexible engagement</h5>
          </div>

          <div className="action">
            <a href="#contact" className="btn btn-magical">
              {" "}
              Let's Talk
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
