import classes from "./Footer.module.css";

import github_pic from "../../Assets/GitHub-Mark-Light-32px.png";
import linkedin_pic from "../../Assets/toppng.com-linkedin-logo-black-png-linkedin-icon-black-and-white-981x982.png";
import email_pic from "../../Assets/icons8-gmail-32.png";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.socials}>
        <a href="https://github.com/Buhnanuers">
          <div>
            <img src={github_pic} alt="github" />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/christian-walton-900112177/">
          <div>
            <img src={linkedin_pic} alt="linkedin" />
          </div>
        </a>


        <a href="mailto:christianpwalton@gmail.com">
          <div>
            <img src={email_pic} alt="email" />
          </div>
        </a>
      </div>
      <div className={classes.credit}>Christian Walton @2022</div>
    </div>
  );
};

export default Footer;
