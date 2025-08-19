import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  FaInstagram,
  FaPaperPlane,
  FaLinkedinIn,
  FaGoodreadsG,
  FaGithub,
} from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { styled } from "@mui/material/styles";

const HeaderSocials = () => {
  const DarkTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#2c2c6c",
      color: "#FFF",
      boxShadow: theme.shadows[1],
    },
  }));

  return (
    <div className="header__socials">
      <DarkTooltip title="Reach Out">
        <a
          href="mailto:hello@brandonrhayes.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaPaperPlane size={35} />
        </a>
      </DarkTooltip>

      <DarkTooltip title="Connect on LinkedIn">
        <a
          href="https://linkedin.com/in/brandonrhayes"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size={35} />
        </a>
      </DarkTooltip>

      <DarkTooltip title="DM on Instagram">
        <a
          href="https://www.instagram.com/brandonrhayes"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={35} />
        </a>
      </DarkTooltip>

      {/* <DarkTooltip title = 'Connect with Brandon on Twitter'>
        <a href="https://twitter.com/brandonrhayes" target="_blank" rel="noreferrer"><FaTwitter size={35}/></a>
      </DarkTooltip> */}

      <DarkTooltip title="See what I'm reading">
        <a
          href="https://www.goodreads.com/brandonrhayes"
          target="_blank"
          rel="noreferrer"
        >
          <FaGoodreadsG size={35} />
        </a>
      </DarkTooltip>

      <DarkTooltip title="See what I've been developing">
        <a
          href="https://www.github.com/brandonrhayes"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={35} />
        </a>
      </DarkTooltip>
    </div>
  );
};

export default HeaderSocials;
