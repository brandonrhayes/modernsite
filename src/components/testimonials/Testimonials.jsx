import "./testimonials.scss";
import { useState, useRef, useEffect } from "react";
import { recommendations } from "./recommendations.js";
import {
  FaAngleRight,
  FaAngleLeft,
  FaLinkedin,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const total = recommendations.length;
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width dynamically including margin/gap
  useEffect(() => {
    if (cardRef.current && trackRef.current) {
      const style = getComputedStyle(cardRef.current);
      const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
      setCardWidth(cardRef.current.offsetWidth + gap);
    }
  }, [trackRef.current, cardRef.current, window.innerWidth]);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  const goToSlide = (index) => setCurrentIndex(index);

  // Component for the scrollable text with dynamic fade
  const RecommendationsText = ({ text }) => {
    const textRef = useRef(null);
    const [fadeStyle, setFadeStyle] = useState({
      maskImage: "none",
      WebkitMaskImage: "none",
    });

    const handleScroll = () => {
      const el = textRef.current;
      if (!el) return;

      const scrollable = el.scrollHeight > el.clientHeight;
      if (!scrollable) {
        // No scroll → no fade
        setFadeStyle({ maskImage: "none", WebkitMaskImage: "none" });
        return;
      }

      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      if (atBottom) {
        // Remove fade completely when at bottom
        setFadeStyle({ maskImage: "none", WebkitMaskImage: "none" });
        return;
      }

      // Dynamically adjust fade based on scroll position
      const scrollFraction = el.scrollTop / (el.scrollHeight - el.clientHeight);
      const startPercent = 80 - scrollFraction * 50; // adjust fade start dynamically
      const mask = `linear-gradient(to bottom, black ${startPercent}%, transparent 100%)`;

      setFadeStyle({
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      });
    };

    useEffect(() => handleScroll(), [text]);

    return (
      <div
        ref={textRef}
        className="recommendations__card__text"
        onScroll={handleScroll}
        style={fadeStyle}
      >
        {text
          .trim()
          .split("\n\n")
          .map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
      </div>
    );
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
                  ref={index === 0 ? cardRef : null}
                >
                  <RecommendationsText text={rec.text} />

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
