import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

let Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer__wrapper">
      <h1 className="footerTag">Design & Developed by Kamran Ashraf</h1>
      <h1 className="contributionText">
        Contribution would be a great favour |
        <a href="https://github.com/itsCodingGeek/Kami-portfolio-website.git">
          Github
        </a>{" "}
        <FontAwesomeIcon className="gitHub__icon" icon={faGithub} />{" "}
      </h1>
    </div>
  );
};

export default Footer;
