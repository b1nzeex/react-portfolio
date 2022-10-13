import React from "react";
import classes from "./Introduction.module.css";
import logo from "../../media/cbeachx.png";

const Introduction = () => {
  return (
    <div className={classes.container}>
      <h2>Full Stack Developer</h2>
      <h5>I turn ideas into reality and take pride in my work!</h5>

      <img src={logo} alt="Emoji of Connor Beach" />
    </div>
  );
};

export default Introduction;
