import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.quote}>
        “Don't just complete the requirements... Go above and beyond!”
      </p>

      <div className={classes.links}>
        <a href="https://github.com/b1nzeex">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>

        <a href="mailto:contact@b1nzee.me">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </a>
      </div>

      <p className={classes.copyright}>Made with ❤ by Connor Beach</p>
    </footer>
  );
};

export default Footer;
