import "../../styles/components/nav.css";

function DesktopNav({ links }) {
  return (
    <ul className="desktop__menu">
      {links.map((nav) => {
        return (
          <li key={nav.title}>
            <a href={nav.link} className="nav__link">
              {nav.title}
            </a>
          </li>
        );
      })}
      <li>
        <div className="nav__line"></div>
      </li>
      <li>
        <button className="btn">Resume</button>
      </li>
    </ul>
  );
}

export default DesktopNav;
