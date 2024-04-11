import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./Projects.module.css";
import streamishLogo from "../../media/streamish.png";
import takeawayAppLogo from "../../media/takeaway-app.png";
import dvsLogo from "../../media/dvs.png";

const openUrl = (url: string) => {
  return window.open(url);
};

const Projects = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.info}>
          <h3>My Work</h3>
          <p>
            Here are a few random projects I've worked on in the past, some are
            open source and some are not. If you would like to see more of my
            work, feel free to contact me!
          </p>
        </div>

        <div className={classes.cardContainer}>
          <div className={classes.card}>
            <img src={streamishLogo} alt="Logo of Streamish" />

            <p>
              A streaming website template for movies and TV shows, made in HTML
              and CSS - this is NOT an open source project
            </p>

            <div className={classes.cardLinks}>
              <button
                onClick={() => openUrl("https://i.imgur.com/4xNUiGw.png")}
                className={classes.screenshot}
              >
                <FontAwesomeIcon icon={solid("image")} /> Screenshot
              </button>
              <button className={classes.preview} disabled>
                <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />{" "}
                Live Preview
              </button>
              <button className={classes.source} disabled>
                <FontAwesomeIcon icon={brands("github")} /> Source
              </button>
            </div>
          </div>

          <div className={classes.card}>
            <img src={takeawayAppLogo} alt="Logo of Takeaway App" />

            <p>
              A react website which uses a backend to list possible food to
              order from a takeaway and is complete with an order system
            </p>

            <div className={classes.cardLinks}>
              <button
                onClick={() => openUrl("https://i.imgur.com/G1YpSX9.png")}
                className={classes.screenshot}
              >
                <FontAwesomeIcon icon={solid("image")} /> Screenshot
              </button>
              <button className={classes.preview} disabled>
                <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />{" "}
                Live Preview
              </button>
              <button
                onClick={() =>
                  openUrl("https://github.com/b1nzeex/react-takeaway-app")
                }
                className={classes.source}
              >
                <FontAwesomeIcon icon={brands("github")} /> Source
              </button>
            </div>
          </div>

          <div className={classes.card}>
            <img src={dvsLogo} alt="Logo of DvS" />

            <p>
              A react website for a rust console edition server, which uses a
              backend to fetch servers and shop products from sellix
            </p>

            <div className={classes.cardLinks}>
              <button
                onClick={() => openUrl("https://i.imgur.com/VT4tliv.png")}
                className={classes.screenshot}
              >
                <FontAwesomeIcon icon={solid("image")} /> Screenshot
              </button>
              <button
                className={classes.preview}
                onClick={() => openUrl("https://dvs.gg")}
              >
                <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />{" "}
                Live Preview
              </button>
              <button className={classes.source} disabled>
                <FontAwesomeIcon icon={brands("github")} /> Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
