import classes from "./ProjectItem.module.css";
import { useInView } from "react-intersection-observer";

import IMimage from "../../Assets/Screenshot 2022-06-15 220520.png";
import CBimage from "../../Assets/commbot.png";
import CRimage from "../../Assets/chatroom screen.png";
import RAimage from "../../Assets/RAimage.png";

const ProjectItem = (props) => {
  const { ref: animationRef, inView: sectionisVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const image =
    props.id === 1
      ? RAimage
      : props.id === 2
      ? CRimage
      : props.id === 3
      ? IMimage
      : CBimage;

  return (
    <li
      ref={animationRef}
      className={`${classes.item} ${
        sectionisVisible ? classes.staggered_fade_in : ""
      }`}
    >
      <a href={props.github}>
        <div className={classes.info}>
          <h1>{props.name}</h1>
          <h3>{props.subtitle}</h3>
          <p>{props.description}</p>
          <h3>LEARN MORE</h3>
        </div>
        <div className={classes.image}>
          <img src={image} alt="project" />
        </div>
      </a>
    </li>
  );
};

export default ProjectItem;
