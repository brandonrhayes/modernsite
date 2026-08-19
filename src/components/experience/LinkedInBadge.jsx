import "./badge.scss";
import linkedinLogo from "../../assets/Logos/linkedin-white.webp";
import headshot from "../../assets/images/BRANDONRHAYES BW Headshot.JPG";

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
            Senior Product Manager | Marketplaces, AI Products, B2B SaaS Platforms
          </div>
          <div className="linkedin-badge__recents">
            OpenTable | University of Waterloo
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinkedInBadge;
