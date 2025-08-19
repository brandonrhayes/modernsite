import "./experience.css";
import LinkedInBadge from "./LinkedInBadge";
import ResumeBadge from "./resumeBadge";

const Experience = () => {
  return (
    //https://www.youtube.com/watch?app=desktop&v=G-Cr00UYokU
    <div className="experience__container">
      <section id="experience">
        <h5>
          Growth, Continuous Improvement, and a Lot of Data Consumption
          (Reading)
        </h5>
        <h2>Experience</h2>
        <div className="experience-options">
          <LinkedInBadge />
          <ResumeBadge />
        </div>
      </section>
    </div>
  );
};

export default Experience;
