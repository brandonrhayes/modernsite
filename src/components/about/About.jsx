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
  const PMDate = "2020/06/30";
  const PMYears = calculateYearsBetween(PMDate);
  const LifeLeadDate = "2011/09/01";
  const LifeLeadYears = calculateYearsBetween(LifeLeadDate);
  const ageDate = "1997/01/01";
  const ageYears = calculateYearsBetween(ageDate);

  return (
    <>
      <section id="about">
        <h5>Product Leader, Explorer, Builder, Stoic Thinker</h5>
        <h2>Biography</h2>

        <div className="container about__cards">
          <article className="about__card">
            <FaHandsHelping className="icon" />
            <h5>Organizational Leadership</h5>
            <small>
              {LifeLeadYears}+ years rallying teams to tackle wicked problems
              with grit, creativity, and excellence — delivering sticky,
              category-defining results.
            </small>
          </article>
          <article className="about__card">
            <FaUserNinja className="icon" />
            <h5>Product Management</h5>
            <small>
              {PMYears}+ years crafting products people truly love — experiences
              that delight, fuel growth, and have unlocked $2M+ in new revenue
              with 10x adoption.
            </small>
          </article>
          <article className="about__card">
            <FaMagic className="icon" />
            <h5>Philosophy & Process</h5>
            <small>
              {ageYears}+ years chasing clarity— rooted in integrity, driven by
              curiosity, guided by stoicism always seeking progress over
              perfection.
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
