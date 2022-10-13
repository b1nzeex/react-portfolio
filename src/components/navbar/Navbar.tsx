import React from "react";
import logo from "../../media/cbeachxLogo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.branding}>
        <img className={classes.logo} src={logo} alt="Emoji of Connor Beach" />
      </div>

      <ul className={classes.links}>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a className={classes.btn} href="mailto:cbeachx@gmail.com">
            Say Hello
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
