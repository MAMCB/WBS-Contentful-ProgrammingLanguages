import React from "react";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer container-fluid">
        <div className="socialmedia">
          <h5>You can find us on:</h5>

          <div className="social-icons">
            <a href="#" className="social-icon">
              <SocialIcon className="icon" network="linkedin" />
            </a>
            <a
              href="https://github.com/MAMCB/WBS-Contentful-ProgrammingLanguages"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon className="icon" network="github" />
            </a>
            <a href="#" className="social-icon">
              <SocialIcon className="icon" network="facebook" />
            </a>
            <a href="#" className="social-icon">
              <SocialIcon className="icon" network="instagram" />
            </a>
            <a href="#" className="social-icon">
              <SocialIcon className="icon" network="youtube" />
            </a>
            <a href="#" className="social-icon">
              <SocialIcon className="icon" network="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
