import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faPhp,
  faReact,
  faNodeJs,
  faDocker,
  faLinux,
  faBootstrap,
  faGit,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import classes from "./Languages.module.css";

const Languages = () => {
  return (
    <div className={classes.container}>
      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.html5}`}>
          <FontAwesomeIcon icon={faHtml5} size="5x" />
        </div>

        <h3>HTML 5</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.css3}`}>
          <FontAwesomeIcon icon={faCss3} size="5x" />
        </div>

        <h3>CSS 3</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.js}`}>
          <FontAwesomeIcon icon={faJs} size="5x" />
        </div>

        <h3>JavaScript</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.php}`}>
          <FontAwesomeIcon icon={faPhp} size="5x" />
        </div>

        <h3>PHP</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.react}`}>
          <FontAwesomeIcon icon={faReact} size="5x" />
        </div>

        <h3>React</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.nodeJs}`}>
          <FontAwesomeIcon icon={faNodeJs} size="5x" />
        </div>

        <h3>NodeJS</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.docker}`}>
          <FontAwesomeIcon icon={faDocker} size="5x" />
        </div>

        <h3>Docker</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.linux}`}>
          <FontAwesomeIcon icon={faLinux} size="5x" />
        </div>

        <h3>Linux</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.bootstrap}`}>
          <FontAwesomeIcon icon={faBootstrap} size="5x" />
        </div>

        <h3>Bootstrap</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.linux}`}>
          <FontAwesomeIcon icon={faGit} size="5x" />
        </div>

        <h3>Git</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.linux}`}>
          <FontAwesomeIcon icon={faDatabase} size="5x" />
        </div>

        <h3>SQL</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.windows}`}>
          <FontAwesomeIcon icon={faWindows} size="5x" />
        </div>

        <h3>Windows</h3>
      </div>
    </div>
  );
};

export default Languages;
