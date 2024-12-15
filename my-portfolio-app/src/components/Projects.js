import React from "react";
import imageCraapp from "../images/craapp.png";
import imageHoliDaze from "../images/holiDaze.png";
import imageECom from "../images/eCom.png";

const projects = [
  {
    name: "E-Com",
    description:
      "E-com, an online shop where users can find products to buy and more.",
    image: imageECom,
    liveLink: "https://crapp-com.netlify.app",
    sourceLink: "https://github.com/KristaKaza/CRA-app",
  },
  {
    name: "HoliDaze",
    description: "Book your next holidays here!",
    image: imageHoliDaze,
    liveLink: "https://dancing-medovik-0e0526.netlify.app/",
    sourceLink: "https://github.com/KristaKaza/project-exam2.git",
  },
  {
    name: "Find&Bid",
    description: "A bidding website.",
    image: imageCraapp,
    liveLink: "https://findandbid.netlify.app/",
    sourceLink: "https://github.com/KristaKaza/Semester-Project.git",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div id="projects-section" className="scaleUp m-4"></div>
      <h3 className="title text-white text-center p-3">My Projects</h3>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-12 col-sm-8 col-md-4 mb-4"
              style={{ padding: "0 15px" }}
            >
              <div className="website">
                <a href={project.liveLink}>
                  <img
                    className="image-web img-fluid rounded pb-4"
                    src={project.image}
                    alt={`screenshot of the ${project.name} website`}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <h4 className="text-white">{project.name}</h4>
                <p className="text-white">{project.description}</p>
                <div className="buttons-inline">
                  <a className="github-btn" href={project.sourceLink}>
                    Source
                  </a>
                  <a className="live-btn" href={project.liveLink}>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
