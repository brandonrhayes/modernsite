import "./badge.scss";
import CV from "../../assets/files/Brandon Hayes - Lead PM - 260114.pdf";
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
