import "./about.scss";
import ME from "../../assets/images/li-headshot.jpg";
import { FaUserNinja, FaMagic, FaHandsHelping } from "react-icons/fa";
import { paragraph } from "./About_Me";

function calculateYearsBetween(pastDate) {
  const today = new Date();
  const past = new Date(pastDate);

  // Calculate the difference in years
  let years = today.getFullYear() - past.getFullYear();

  // Adjust if the current month and day are before the past month and day
  const isBefore =
    today.getMonth() < past.getMonth() ||
    (today.getMonth() === past.getMonth() && today.getDate() < past.getDate());

  if (isBefore) {
    years--;
  }

  return years;
}

const About = () => {
  const PMDate = "2021/06/30";
  const PMYears = calculateYearsBetween(PMDate);
  const LifeLeadDate = "2013/09/01";
  const LifeLeadYears = calculateYearsBetween(LifeLeadDate);
  const coopDate = "2017/04/01";
  const ageYears = calculateYearsBetween(coopDate);

  return (
    <>
      <section id="about">
        <h5>
          Product Builder | World Explorer | Strategic (Stoic) Thinker |
          Optimizer of What Matters | Investor in Quality & Growth
        </h5>
        <h2>Biography</h2>

        <div className="container about__cards">
          <article className="about__card">
            <FaHandsHelping className="icon" />
            <h5>Organizational Leadership</h5>
            <small>
              {LifeLeadYears}+ years building products and teams. Led teams of
              6+ shipping products that scaled from 200 to 100K+ users.
              Presented platform strategy to hundreds of executives, directly
              funding roadmap. Started on warehouse floors in 2013, funded my
              education through operations. Every product decision I make
              accounts for people doing real work.
            </small>
          </article>
          <article className="about__card">
            <FaUserNinja className="icon" />
            <h5>Product Management</h5>
            <small>
              {PMYears}+ years shipping 0-to-1 products that generate revenue.
              Built AdTech platform from zero to $2M+ revenue using a
              single-digit share of company resources. Drove 9-figure GMV impact
              through search redesign in 1 month. Shipped industry-first LLM
              products with 90% adoption. Led 300+ user interviews. Specializing
              in marketplace platforms, AI integration, and turning ambiguity
              into traction.
            </small>
          </article>
          <article className="about__card">
            <FaMagic className="icon" />
            <h5>Systems & Operations</h5>
            <small>
              {ageYears}+ years automating processes and scaling platforms.
              Architected platform primitives (RBAC, feature flags, dynamic
              schemas) scaling from 1 template to 10K+ requirements. Reduced
              defect rates 60% through design systems. Automated processes
              saving 50%+ staff time. Built systems that scale because I know
              what breaks when products grow.
            </small>
          </article>
        </div>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Me" />
            </div>
          </div>
          <div class="panel-wrapper">
            <a href="#show" class="show btn2" id="show">
              Continue Reading
            </a>
            <a href="#hide" class="hide btn2" id="hide">
              Hide
            </a>
            <div className="paragraph">
              {" "}
              {paragraph
                .trim()
                .split("\n\n") // split by paragraph breaks
                .map(
                  (
                    p,
                    idx // map each to a <p>
                  ) => (
                    <p key={idx}>{p}</p>
                  )
                )}
            </div>
            <div class="fade"></div>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
