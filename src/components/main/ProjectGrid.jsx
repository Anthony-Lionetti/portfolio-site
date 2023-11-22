import { projectList } from "../../constants/ProjectList";

function ProjectGrid() {
  return (
    <div className="projects__grid">
      {projectList.map((project, index) => (
        <div
          key={project.title}
          className={
            index % 2 === 0 ? "project__subgrid-reverse" : "project__subgrid"
          }
        >
          <div
            className="img__container"
            onClick={() => alert("Create modal w/ more infor in future")}
          >
            <img src={project.img} alt="project image" className="grid__img" />
            <div className="img__mask"></div>
          </div>

          <div id="project-info" className="details__div">
            <h1 className="subtitle project__title">{project.title}</h1>
            <hr className="hr" />
            <p className="p description">{project.description}</p>
            <ul className="project__menu">
              {project.tech.map((item) => {
                return (
                  <li key={item.name} className="project-list__item">
                    <img
                      src={item.logo}
                      alt={item.name + " logo"}
                      className="project-tech__logo"
                    />
                    <h3>{item.name}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
