import "./about.scss";
import { useState, useEffect } from "react";
import ME1 from "../../assets/images/Brandon On Site.PNG";
import ME2 from "../../assets/images/Brandon Takes CutandDry Atop Kilimanjaro.JPG";
import ME3 from "../../assets/images/Brandon and Daniel at Conference in KC.PNG";
import ME4 from "../../assets/images/Brandon IFMA Presidence Conference Announcement to Execs.PNG";
import ME5 from "../../assets/images/B on Smutwood.PNG";
import ME6 from "../../assets/images/Brandon at IFMA running Sales.PNG";
import ME7 from "../../assets/images/Brandon and Friends.JPG";
import {
  FaUserNinja,
  FaMagic,
  FaHandsHelping,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
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

  // Carousel state
  const images = [
    { src: ME1, alt: "Professional headshot" },
    { src: ME2, alt: "Kilimanjaro" },
    { src: ME3, alt: "Conference in KC" },
    { src: ME4, alt: "LinkedIn headshot" },
    { src: ME5, alt: "Smutwood" },
    { src: ME6, alt: "Running Sales at IFMA" },
    { src: ME7, alt: "Friends" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-play carousel (optional - can be disabled)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <>
      <section id="about">
        <h5>
          Product Builder | World Explorer | Stoic Thinker | Optimizer of What
          Matters | Investor in Quality
        </h5>
        <h2>About Brandon</h2>

        <div className="container about__cards">
          <article className="about__card">
            <FaHandsHelping className="icon" />
            <h5>Organizational Leadership</h5>
            <small>
              {LifeLeadYears}+ years building products and teams. Led teams of
              20+ shipping products that scaled 500x. Presented platform
              strategy to hundreds of executives, directly funding roadmap.
              Started on warehouse floors in 2013, funded my education through
              operations. Every product decision I make accounts for people
              doing real work.
            </small>
          </article>
          <article className="about__card">
            <FaUserNinja className="icon" />
            <h5>Product Management</h5>
            <small>
              {PMYears}+ years shipping 0-to-1 products that generate revenue.
              Built AdTech platform from zero to $2M+ revenue. Drove 9-figure
              GMV impact through search redesign in 1 month. Shipped
              industry-first LLM products with 90% adoption. Led 300+ user
              interviews. Specializing in marketplace platforms, AI integration,
              and turning ambiguity into traction.
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
            <div className="about__carousel">
              <div
                className="about__carousel-container"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`about__carousel-slide ${
                      index === currentIndex ? "active" : ""
                    }`}
                  >
                    <div className="about__me-image">
                      <img src={image.src} alt={image.alt} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicator Dots */}
              <div className="about__carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`about__carousel-indicator ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Outside carousel to allow overflow */}
            <button
              className="about__carousel-btn about__carousel-btn--prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              className="about__carousel-btn about__carousel-btn--next"
              onClick={goToNext}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="panel-wrapper">
            <a href="#show" className="show btn2" id="show">
              Continue Reading
            </a>
            <a href="#hide" className="hide btn2" id="hide">
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
                    idx, // map each to a <p>
                  ) => (
                    <p key={idx}>{p}</p>
                  ),
                )}
            </div>
            <div className="fade"></div>
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
