import { Fragment } from "react";

import NavBar from "./NavBar/NavBar";
import classes from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <Fragment>
      <div id="hero" className={classes.container}>
        <div className={classes.header_1}>
          Hey there, my name is
          <span className={classes.header_2}> Christian Walton</span>.
        </div>
        <div className={classes.header_3}>I am a front-end web developer.</div>
        <a href="#projects" className={classes.aButton}>
          <div className={classes.heading_cta}>
            View my work
            <svg
              className={classes.heading_arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>arrow-right</title>
              <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
            </svg>
          </div>
        </a>
      </div>

      <NavBar />
    </Fragment>
  );
};

export default SplashScreen;
