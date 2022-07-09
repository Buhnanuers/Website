import classes from "./About.module.css";
import AboutText from "./About Info/AboutText";
import AboutSkills from "./About Info/AboutSkills";

const SKILLS = [
  {
    id: 1,
    name: "C++",
  },
  {
    id: 2,
    name: "C",
  },
  {
    id: 3,
    name: "JAVA",
  },
  {
    id: 4,
    name: "JAVASCRIPT",
  },
  {
    id: 5,
    name: "HTML",
  },
  {
    id: 6,
    name: "CSS",
  },
  {
    id: 7,
    name: "GIT",
  },
  {
    id: 8,
    name: "NODE.JS",
  },
  {
    id: 9,
    name: "REACT",
  },
  {
    id: 10,
    name: "REDUX",
  },
  {
    id: 11,
    name: "SQL",
  },
  {
    id: 12,
    name: "EXPRESS.JS",
  },
];

const About = () => {
  

  return (
    <div id="about" className={classes.container}>
      <h2 className={classes.header}>About</h2>
      <div className={classes.content}>
        <AboutText />
        <AboutSkills list={SKILLS} />
      </div>
    </div>
  );
};

export default About;
