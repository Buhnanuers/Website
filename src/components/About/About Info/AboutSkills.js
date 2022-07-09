import { useInView} from "react-intersection-observer";

import classes from "./AboutSkills.module.css";

const AboutSkills = (props) => {
  const { ref: animationRef, inView: sectionIsVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div ref={animationRef} className={classes.skills}>
      <div className={`${classes.skills_row_left} ${sectionIsVisible ? classes.animateLeft : ''}`}>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[0].name}</div>
        </div>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[1].name}</div>
        </div>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[2].name}</div>
        </div>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[3].name}</div>
        </div>
      </div>
      <div className={`${classes.skills_row_middle} ${sectionIsVisible ? classes.animateBottom : ''}`}>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[4].name}</div>
        </div>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[5].name}</div>
        </div>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[6].name}</div>
        </div>
      </div>
      <div className={`${classes.skills_row_right} ${sectionIsVisible ? classes.animateRight : ''}`}>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[8].name}</div>
        </div>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[9].name}</div>
        </div>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[10].name}</div>
        </div>
        <div className={classes.skills_item}>
          <div className={classes.skill_item_name}>{props.list[7].name}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
