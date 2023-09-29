import classes from "./About.module.css";
import profilePic from "../../../../public/images/profile_pic.png";

function About() {
  return (
    <div className={classes.aboutPage}>
      <img src={profilePic} alt="profile picture" />

      <div className={classes.aboutText}>
        I live and in{" "}
        <span>
          <a href="https://www.google.com/maps/place/Rewari,+Haryana+123401/@28.1990708,76.5993756,14z/data=!3m1!4b1!4m6!3m5!1s0x390d50719ae37551:0xe4c45afc4faedcee!8m2!3d28.1919738!4d76.6190774!16zL20vMDk4MHNj?entry=ttu" target="_blank" rel="noreferrer">
            {" "}
            Rewari, Haryana.
          </a>
        </span>
        <br />I freelance when I can, mostly build custom websites that you
        can’t get from a template. My place in the world seems to be at the{" "}
        <span>intersection of creativity and logic</span>. I approach each
        problem as a <span>learning experience</span> that informs the rest of
        the project.
        <br /> <br />
        Who is visiting your site? What are they looking for? How do they find
        it? These are the pointer that I keep in mind while developing my
        Desktop-first responsive websites with <span>HTML, CSS and React</span>.
        <br /> <br />
        <span>
          I am always experimenting, always learning, and never bored.
        </span>
      </div>
    </div>
  );
}

export default About;
