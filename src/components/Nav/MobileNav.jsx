import { useState } from "react";
import "../../styles/components/mobile-nav.css";

function MobileNav({ links }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="mobile__nav">
      <button className="nav__bars" onClick={() => setToggle(!toggle)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      {toggle && (
        <ul className="mobile__menu">
          {links.map((nav) => {
            return (
              <li key={nav.title}>
                <a
                  href={nav.link}
                  className="mobile-nav__link"
                  onClick={() => setToggle(!toggle)}
                >
                  {nav.title}
                </a>
              </li>
            );
          })}
          <li>
            <div className="mobile-nav__line"></div>
          </li>
          <li>
            <button className="mobile-resume-btn">Resume</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default MobileNav;
