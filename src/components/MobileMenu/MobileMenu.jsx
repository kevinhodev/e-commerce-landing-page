import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as GmailIcon } from "../../assets/icons/gmail.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { useState } from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="menuContainer">
      <div className="toggle" onClick={toggleMenu}>
        {!open ? (
          <MenuIcon className="menuIcon" />
        ) : (
          <CloseIcon className="menuIcon" />
        )}
      </div>
      <div className={`mobileMenu ${open ? "open" : "closed"}`}>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/vectors">Vectors</a>
            </li>
            <li>
              <a href="/photos">Photos</a>
            </li>
            <li>
              <a href="/psd">PSD</a>
            </li>
            <li>
              <a href="/videos">Video</a>
            </li>
            <li>
              <a href="/more">More</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button>+ Submit</button>
          <div className="icons">
            <GmailIcon className="icon gmail" />
            <FacebookIcon className="icon facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
