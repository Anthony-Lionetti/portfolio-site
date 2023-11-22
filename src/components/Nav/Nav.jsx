import { links } from "../../constants/NavLinks";
import "../../styles/components/nav.css";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Nav() {
  return (
    <header className="container header">
      <nav className="nav">
        <DesktopNav links={links} />
        <MobileNav links={links} />
      </nav>
    </header>
  );
}

export default Nav;
