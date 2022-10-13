import React from "react";
import Introduction from "../components/portfolio/Introduction";
import WhoAmI from "../components/portfolio/WhoAmI";
import Languages from "../components/portfolio/Languages";
import Projects from "../components/portfolio/Projects";

const Portfolio = () => {
  return (
    <React.Fragment>
      <Introduction />
      <WhoAmI />
      <Languages />
      <Projects />
    </React.Fragment>
  );
};

export default Portfolio;
