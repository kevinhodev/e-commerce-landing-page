import { ReactComponent as GmailIcon } from "../../assets/icons/gmail.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { links } from "./data";
import "./MobileNav.css";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav__list">
        {links.map(({ label, pathname }) => (
          <a className="nav-link" href={pathname}>
            {label}
          </a>
        ))}
      </div>
      <div className="mobile-nav__buttons">
        <GmailIcon className="icon gmail" />
        <button className="btn submit">+ Submit</button>
        <FacebookIcon className="icon facebook" />
      </div>
    </nav>
  );
};

export default MobileNav;
