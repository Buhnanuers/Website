import React, { Suspense } from "react";

import classes from "./App.css";

const SplashScreenComponent = React.lazy(() =>
  import("./components/Splash/SplashScreen")
);
const AboutComponent = React.lazy(() => import("./components/About/About"));
const ProjectsComponent = React.lazy(() =>
  import("./components/Projects/Projects")
);

const FooterComponent = React.lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <div className={classes.main}>
      <Suspense fallback={<div>Loading...</div>}>
        <SplashScreenComponent />
        <AboutComponent />
        <ProjectsComponent />
        <FooterComponent />
      </Suspense>
    </div>
  );
}

export default App;
