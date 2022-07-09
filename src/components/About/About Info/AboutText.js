import { useInView } from "react-intersection-observer";
import classes from "./AboutText.module.css";
import me from "../../../Assets/lionhead-rabbit-drawing-clip-art-lionhead-96826cef62334d7cb2ff5783b78bb3fa.png";

const AboutText = () => {
  const { ref: animationRef, inView: sectionIsVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={animationRef}
      className={`${classes.container} ${
        sectionIsVisible ? classes.animation : ""
      }`}
    >
      <img className={classes.image} src={me} alt="me" />
      <div className={classes.textContainer}>
        <p className={classes.text}>
          Fresh out of undergraduate, I am a front-end oriented developer with a
          passion for web development and lifelong learning. Javascript, React,
          and all other manner of frameworks constitute my primary focus, as
          well as maintaining a deep understanding of the fundamentals of data
          structures and algorithms. My drive for excellent code and
          professional design combine with my passion for quality products to
          produce a developer well worth the consideration. In my free time, I
          am an avid gamer, classical pianist, and a budding cook to boot.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
