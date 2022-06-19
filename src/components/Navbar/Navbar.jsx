import { ReactComponent as GmailIcon } from "../../assets/icons/gmail.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import MobileNav from "./MobileNav";
import { links } from "./data";
import { useState, useEffect } from "react";
import "./Navbar.css";

const checkIsMobile = () => {
  return window.matchMedia("(max-width: 696px)").matches;
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(checkIsMobile());
  const [scrolled, setScrolled] = useState(window.scrollY >= 40);

  const changeBackgroundColor = () => {
    setScrolled(window.scrollY >= 40);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setIsMobile(checkIsMobile()));
    return () =>
      window.removeEventListener("resize", () => setIsMobile(checkIsMobile()));
  });

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("scroll", changeBackgroundColor);
      return () => window.removeEventListener("scroll", changeBackgroundColor);
    }
  }, [isMobile]);

  return (
    <div className={`${scrolled && !isMobile ? "navbar scrolled" : "navbar"}`}>
      <div className="navbar__logo">
        <span>KR</span>
      </div>
      {isMobile ? (
        <MobileNav />
      ) : (
        <nav className="nav">
          <div className="nav__list">
            {links.map(({ label, pathname }) => (
              <a className="nav-link" href={pathname}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav__buttons">
            <button className="btn submit">+ Submit</button>
            <GmailIcon className="icon gmail" />
            <FacebookIcon className="icon facebook" />
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
