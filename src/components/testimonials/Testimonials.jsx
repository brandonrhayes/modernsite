import "./testimonials.scss";
import { useState, useRef, useEffect } from "react";
import { recommendations } from "./recommendations.js";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const total = recommendations.length;
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width dynamically including margin/gap
  useEffect(() => {
    if (cardRef.current) {
      const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
      setCardWidth(cardRef.current.offsetWidth + gap);
    }
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="recommendations">
      <section id="testimonials">
        <h5>I'll let the data talk</h5>
        <h2>Testimonials</h2>

        {/* Carousel Wrapper */}
        <div
          className="recommendations__carousel-wrapper"
          style={{ position: "relative" }}
        >
          {/* Carousel Track */}
          <div className="recommendations__carousel">
            <div
              className="recommendations__track"
              ref={trackRef}
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {recommendations.map((rec, index) => (
                <div
                  className="recommendations__card"
                  key={index}
                  ref={index === 0 ? cardRef : null} // only first card used for measuring
                >
                  <div className="recommendations__card__text">
                    {rec.text
                      .trim()
                      .split("\n\n")
                      .map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                  </div>
                  <div className="recommendations__card__who">
                    {rec.avatar && (
                      <img
                        src={rec.avatar}
                        alt={rec.name}
                        className="recommendations__card__avatar"
                      />
                    )}
                    <div className="recommendations__card__info">
                      <h4 className="recommendations__card__name">
                        {rec.name}
                      </h4>
                      <h5 className="recommendations__card__role">
                        {rec.role}
                      </h5>
                      <h6 className="recommendations__card__relationship">
                        {rec.relationship}
                      </h6>
                      <p className="recommendations__card__date">{rec.date}</p>
                    </div>

                    {rec.sourceType === "linkedin" ? (
                      <a
                        href={rec.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn2 recommendations__card__source"
                      >
                        <FaLinkedin /> {rec.source}
                      </a>
                    ) : rec.sourceType === "file" ? (
                      <a
                        href={rec.sourceUrl}
                        download
                        className="btn2 recommendations__card__source"
                      >
                        <FaCloudDownloadAlt /> {rec.source}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Arrows */}
          <div className="recommendations__nav">
            <button
              className="recommendations__nav-arrow left-arrow"
              onClick={prevSlide}
            >
              <FaAngleLeft />
            </button>
            <button
              className="recommendations__nav-arrow right-arrow"
              onClick={nextSlide}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="recommendations__dots">
          {recommendations.map((_, index) => (
            <span
              key={index}
              className={`recommendations__dots-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
