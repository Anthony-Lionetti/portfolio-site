function SkillInfo({ skill }) {
  return (
    <tr key={skill.name} className="skill__row">
      <td>
        <img className="skill__img" src={skill.svg} />
      </td>
      <td>
        <h3 className="skill__text">{skill.name}</h3>
      </td>
      <td>
        <span className="skill__text">{"⭐".repeat(skill.level)}</span>
      </td>
    </tr>
  );
}

export default SkillInfo;
