import "./about.scss";
import { useState, useEffect, useRef } from "react";
import ME1 from "../../assets/images/Brandon On Site.PNG";
import ME2 from "../../assets/images/Brandon Takes CutandDry Atop Kilimanjaro.JPG";
import ME3 from "../../assets/images/Brandon and Daniel at Conference in KC.PNG";
import ME4 from "../../assets/images/Brandon Talk Data To Me.jpg";
import ME5 from "../../assets/images/B on Smutwood.PNG";
import ME6 from "../../assets/images/Brandon at IFMA running Sales.PNG";
import ME7 from "../../assets/images/Brandon and Friends.JPG";
import ME8 from "../../assets/images/Brandon Arms Crossed on Mountain.jpg";
import {
  FaUserNinja,
  FaMagic,
  FaHandsHelping,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
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
    { src: ME4, alt: "Talk data to me" },
    { src: ME5, alt: "Smutwood" },
    { src: ME6, alt: "Running Sales at IFMA" },
    { src: ME7, alt: "Friends" },
    { src: ME8, alt: "Arms crossed on a mountain summit" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [bioExpanded, setBioExpanded] = useState(false);
  const bioToggleRef = useRef(null);

  const handleHideBio = () => {
    setBioExpanded(false);
    requestAnimationFrame(() => {
      bioToggleRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

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
          0→1 Product Leadership | AI/ML & Marketplace Platforms | $2M+ to
          9-Figure Impact
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

        <div className="container about__thinking">
          <h3>How I Think About Product</h3>
          <div className="about__thinking-grid">
            <p>
              Most people can point at the pain. Spotting the actual problem
              underneath it, the one worth solving, is a different skill, and
              it's the one I get hired for.
            </p>
            <p>
              Directing people who build isn't the same skill as building. I
              get in and build, with a team or, lately, directly with AI
              tools, because I don't trust a solution I haven't gotten my
              hands into.
            </p>
            <p>
              A solution that delights the customer but breaks finance,
              legal, or a legacy system isn't a solution; it's a delayed
              failure. I've spent as much time in compliance and systems
              conversations as in user interviews.
            </p>
          </div>
        </div>

        <div className="container about__container">
          <div className="about__me-wrapper">
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

            <p className="about__caption">
              Product Builder · World Explorer · Investor in Quality
            </p>
          </div>
          <div className="panel-wrapper">
            {!bioExpanded ? (
              <button
                ref={bioToggleRef}
                type="button"
                className="show btn2"
                onClick={() => setBioExpanded(true)}
              >
                Continue Reading <FaChevronDown />
              </button>
            ) : (
              <button
                ref={bioToggleRef}
                type="button"
                className="hide btn2"
                onClick={handleHideBio}
              >
                Hide <FaChevronUp />
              </button>
            )}
            <div className={`paragraph ${bioExpanded ? "expanded" : ""}`}>
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
