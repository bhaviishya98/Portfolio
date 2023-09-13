import classes from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import vidoHubImage from "../../../../../public/images/projects images/icons8-pot-player.svg";
import PokemonImage from "../../../../../public/images/projects images/pk.jpg";
import NetflixImage from "../../../../../public/images/projects images/n.jpg";
import VSImage from "../../../../../public/images/projects images/vs.jpg";

function Project() {
  let projectsData = [
    {
      title: "VS Portfolio",
      description: "Personal Portfolio",
      image: VSImage,
      tags: ["react" ,"html", "css", "javascript"],
      links: {
        source: "https://github.com/bhaviishya98/Portfolio",
        live: "https://bhaviishya98.github.io/Portfolio/",
      },
    },
    {
      title: "Pokemon Search App",
      description: "Website to search about details of Pokemons",
      image: PokemonImage,
      tags: ["react", "html", "css", "javascript"],
      links: {
        source: "https://github.com/bhaviishya98/Pokemon-Search-App",
        live: "https://bhaviishya98.github.io/Pokemon-Search-App/",
      },
    },
    {
      title: "Video Hub",
      description: "Website to watch videos",
      image: vidoHubImage,
      tags: ["react", "html", "css", "javascript"],
      links: {
        source: "https://github.com/bhaviishya98/VideoHub",
        live: "https://videohub-two.vercel.app/",
      },
    },
    {
      title: "Netflix Landing Page",
      description: "Developed frontend of Netflix Landing Page",
      image: NetflixImage,
      tags: ["javascript", "html", "css"],
      links: {
        source: "https://github.com/bhaviishya98/Netflix-Landing-Page/",
        live: "https://bhaviishya98.github.io/Netflix-Landing-Page/",
      },
    },
  ];
  return (
    <div className={classes.projectPage}>
      {projectsData.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Project;
