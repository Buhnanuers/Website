import classes from "./NavBar.module.css";

const NavBar = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  return (
    <div className={classes.topnav}>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#hero">
        Home
      </a>
    </div>
  );
};

export default NavBar;
