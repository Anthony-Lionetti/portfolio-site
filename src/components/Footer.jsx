import { socials } from "../constants/NavLinks";
import "../styles/components/footer.css";

function Footer() {
  return (
    <footer className="container section">
      <hr className="hr" />
      <div className="footer">
        <div className="footer__div">
          <p className="footer__text">~ By Anthony Lionetti ~</p>
        </div>
        <div className="footer__div">
          {socials.map((site) => {
            return (
              <a
                key={site.social}
                href={site.link}
                rel="noreferrer"
                target="_blank"
                className="social__link"
              >
                {site.svg}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
