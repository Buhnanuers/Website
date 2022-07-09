import classes from "./Projects.module.css";
import ProjectItem from "./ProjectItem";

import IMimage from "../../Assets/Screenshot 2022-06-15 220520.png";
import CBimage from "../../Assets/commbot.png";
import placeholder from "../../Assets/1024px-Tidal_Code_Screenshot.png";

const PROJECTS = [
  {
    id: 1,
    name: "Root Approximator",
    subtitle: "Calculation life-saver",
    description:
      "Windows console application allowing users to speed up long, complex Numerical Analysis calculations",
    github: "https://github.com/Buhnanuers/Root-Approximator",
    image: { placeholder },
  },

  {
    id: 2,
    name: "Chat Room",
    subtitle: "Web-Based Social App",
    description:
      "Web application utilizing express.js to provide chat room functionality to users",
    github: "https://github.com/Buhnanuers/Chat-room",
    image: { placeholder },
  },

  {
    id: 3,
    name: "Inventory Manager",
    subtitle: "Simple Mangement App",
    description:
      "Web application built with React to provide a smooth, simple inventory management experience",
    github: "https://github.com/Buhnanuers/Inventory-Manager",
    image: { IMimage },
  },

  {
    id: 4,
    name: "CommBot",
    subtitle: "Discord Bot",
    description:
      "Discord bot to assist artists with keeping track of impromptu or spontaneous commissions",
    github: "https://github.com/Buhnanuers/CommBot",
    image: { CBimage },
  },
];

const Projects = () => {
  const projectList = (
    <ul className={classes.list}>
      {PROJECTS.map((item) => (
        <ProjectItem
          key={item.id}
          id={item.id}
          name={item.name}
          subtitle={item.subtitle}
          description={item.description}
          github={item.github}
          image={item.image}
        />
      ))}
    </ul>
  );

  return (
    <div id="projects" className={classes.container}>
      <div className={classes.header}>Projects</div>
      {projectList}
    </div>
  );
};

export default Projects;
