import { skills } from "../../constants/Skills";
import SkillInfo from "./SkillInfo";
import "../../styles/components/about.css";

function Skills() {
  return (
    <section id="About" className="container about section">
      <div className="skill__div">
        <h1 className="title">Skills</h1>
        <hr className="hr" />
        <table className="skill__table">
          <tbody>
            {skills.map((skill) => {
              return <SkillInfo key={skill.name} skill={skill} />;
            })}
          </tbody>
        </table>
      </div>

      <div className="about__div">
        <h1 className="title">About</h1>
        <hr className="hr" />
        <p className="about__p">
          Anthony graduated from ******** University with a degree in{" "}
          <strong>computational mathematics</strong>. In college he worked with
          a <strong>startup company</strong> designing & building their Data
          analytics platform through <strong>SQL and Tableau</strong>.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud{" "}
          <strong>exercitation ullamco</strong> laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </section>
  );
}

export default Skills;
