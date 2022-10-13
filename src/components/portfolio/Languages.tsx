import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Languages.module.css";

const Languages = () => {
  return (
    <div className={classes.container}>
      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.html5}`}>
          <FontAwesomeIcon icon={brands("html5")} size="5x" />
        </div>

        <h3>HTML 5</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.css3}`}>
          <FontAwesomeIcon icon={brands("css3")} size="5x" />
        </div>

        <h3>CSS 3</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.js}`}>
          <FontAwesomeIcon icon={brands("js")} size="5x" />
        </div>

        <h3>JavaScript</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.php}`}>
          <FontAwesomeIcon icon={brands("php")} size="5x" />
        </div>

        <h3>PHP</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.react}`}>
          <FontAwesomeIcon icon={brands("react")} size="5x" />
        </div>

        <h3>React</h3>
      </div>

      <div className={classes.language}>
        <div className={`${classes.iconBorder} ${classes.nodeJs}`}>
          <FontAwesomeIcon icon={brands("node-js")} size="5x" />
        </div>

        <h3>NodeJS</h3>
      </div>
    </div>
  );
};

export default Languages;
