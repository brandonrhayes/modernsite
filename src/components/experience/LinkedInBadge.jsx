import "./linkedinbadge.scss";
import linkedinLogo from "../../assets/Logos/linkedin-white.webp";
import headshot from "../../assets/headshots/BH Headshot 16Aug2025.JPG";

const LinkedInBadge = () => {
  return (
    <a
      className="linkedin-badge"
      href="https://ca.linkedin.com/in/brandonrhayes"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="top-header">
        <div className="linkedin-badge__logo">
          <img src={linkedinLogo} alt="LinkedIn" />
        </div>
      </div>
      <div className="linkedin-badge__info">
        <img
          src={headshot}
          alt={"Brandon Smiling"}
          className="linkedin-badge__headshot"
        />
        <div>
          <div className="linkedin-badge__name">Brandon Hayes</div>
          <div className="linkedin-badge__header">
            Adventurer, Builder, Optimizer; but ultimately driven to inspire (Ex
            Cut+Dry)
          </div>
          <div className="linkedin-badge__recents">
            Cut+Dry | University of Waterloo
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinkedInBadge;
