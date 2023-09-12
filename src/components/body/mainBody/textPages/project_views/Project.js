import classes from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import vidoHubImage from "../../../../../public/images/projects images/icons8-pot-player.svg";
import movieImage from "../../../../../public/images/projects images/blue_color_movie_symbol.jpg";
import forwardImage from "../../../../../public/images/projects images/red_color_shopping_cart.png";
import galleryImage from "../../../../../public/images/projects images/grey_color_camera_symbol.png";

function Project() {
  let projectsData = [
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
      title: "Pokemon Search App",
      description:
        "Website to search about details of Pokemons",
      image: movieImage,
      tags: ["react", "html", "css", "javascript"],
      links: {
        source: "https://github.com/Utkarsh-190/MovieInfo",
        live: "https://utkarsh-190.github.io/MovieInfo/",
      },
    },
    {
      title: "Forward",
      description: "Developed frontend of website to buy products online",
      image: forwardImage,
      tags: ["javascript", "html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Productathon",
        live: "https://utkarsh-190.github.io/Productathon/",
      },
    },
    {
      title: "Image Gallery",
      description: "Website to showcase your photography skills",
      image: galleryImage,
      tags: ["html", "css", "bootstrap"],
      links: {
        source: "https://github.com/Utkarsh-190/Image-Gallery",
        live: "https://utkarsh-190.github.io/Image-Gallery/",
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
