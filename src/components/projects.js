import React, { useEffect } from "react";
import Projectcard from "./Projectcard";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>   
      <div id="projects">
        <br />
        <br />
        <br />
        <h2 className="font-weight-bold contact3" data-aos="zoom-in-up">
         Projects
        </h2>

        <h4 data-aos="fade-right " className=" text-center bold lead">
          Here are some of the projects 
        </h4>
        <div>
          <div className="container d-flex flex-wrap">
            <Projectcard
              title="Gym On-Freak"
              data="project :
              This website offers useful gym equipment and fitness-related tips. The solution works with a gym user's ideas and improves the working environment for both of them. "
              img="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              srclink="https://github.com/singhva59/GymOn-Freak"
            ></Projectcard>

            <Projectcard
              title="Spotify Clone"
              data="project :The Spotify Clone App is a song-based online application created utilising HTML,CSS and Javascript"
              img="https://images.unsplash.com/photo-1643208589858-444e42c4c95e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
              srclink="https://github.com/singhva59/Spotify-Clone"
            ></Projectcard>

            <Projectcard
              title="Chandrayaan-3"
              data="project :The chandrayaan-3 website  created utilising HTML,CSS and Javascript"
              img="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              srclink="https://chandrayaan-3.vercel.app/"
            ></Projectcard>           
            <Projectcard
              title="Aventador Page"
              data="project :Simple Lamborghini Aventador created using HTML ."
              img="https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=499&q=80"
              srclink="https://singhva59.github.io/Aventador-parallax/"
            ></Projectcard>    
            <Projectcard
              title="Digital-Clock"
              data="project : Digital-Clock created utilising HTML,CSS and Javascript"
              img="https://images.unsplash.com/photo-1612310595736-9e2a8c1d676a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              srclink="https://singhva59.github.io/Digital-Clock1/"
            ></Projectcard> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
