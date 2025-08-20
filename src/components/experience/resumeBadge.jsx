import "./badge.scss";
import CV from "../../assets/files/Lead Product Manager, Brandon Hayes - Resume V25.8.19.pdf";
import { FaFileDownload } from "react-icons/fa";

const ResumeBadge = () => {
  return (
    <a href={CV} download className="resume-badge">
      <div className="resume-download__logo">
        <FaFileDownload />
        <p>Resume</p>
      </div>
    </a>
  );
};

export default ResumeBadge;
