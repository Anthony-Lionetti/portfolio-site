import "../../styles/components/projects.css";
import ProjectGrid from "./ProjectGrid";

function Projects() {
  return (
    <section id="Projects" className="container section">
      <h1 className="title">Projects</h1>
      <hr className="hr" />
      <ProjectGrid />
    </section>
  );
}

export default Projects;
