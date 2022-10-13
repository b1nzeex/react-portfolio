import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.quote}>
        “Don't just complete the requirements... Go above and beyond!”
      </p>

      <div className={classes.links}>
        <a href="https://github.com/b1nzeex">
          <FontAwesomeIcon icon={brands("github")} size="2xl" />
        </a>

        <a href="mailto:cbeachx@gmail.com">
          <FontAwesomeIcon icon={solid("envelope")} size="2xl" />
        </a>
      </div>

      <p className={classes.copyright}>Made with ❤ by Connor Beach</p>
    </footer>
  );
};

export default Footer;
