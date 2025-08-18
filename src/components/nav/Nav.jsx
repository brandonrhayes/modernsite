import { React, useState } from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      color: "#1F1F38",
      boxShadow: theme.shadows[1],
    },
  }));

  return (
    <nav>
      <LightTooltip title="To the Moon!">
        <a
          href="/#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <FaHome size={25} />
        </a>
      </LightTooltip>
      <LightTooltip title="About">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <FaUserAstronaut size={25} />
        </a>
      </LightTooltip>
      <LightTooltip title="Testimonials">
        <a
          href="#testimonials"
          onClick={() => setActiveNav("#testimonials")}
          className={activeNav === "#testimonials" ? "active" : ""}
        >
          <FaUserGraduate size={25} />
        </a>
      </LightTooltip>
      <LightTooltip title="Services">
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <FaUserTie size={25} />
        </a>
      </LightTooltip>
      <LightTooltip title="Contact">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <FaCommentDots size={25} />
        </a>
      </LightTooltip>
    </nav>
  );
};

export default Nav;
