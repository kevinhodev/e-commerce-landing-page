import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as GmailIcon } from "../../assets/icons/gmail.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { links } from "./data";
import { useState } from "react";
import "./MobileNav.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="toggle" onClick={toggleMenu}>
        {!open ? (
          <MenuIcon className="toggle__icon" />
        ) : (
          <CloseIcon className="toggle__icon" />
        )}
      </div>
      <nav className={`mobile-nav ${open ? "open" : "closed"}`}>
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
    </>
  );
};

export default MobileNav;
