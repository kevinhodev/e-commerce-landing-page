import { ReactComponent as GmailIcon } from "../../assets/icons/gmail.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 696px)").matches
  );

  const checkIsMobile = () => {
    setIsMobile(window.matchMedia("(max-width: 696px)").matches);
  };

  useEffect(() => {
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  });

  return (
    <div className="header">
      <div className="top">
        <div className="left">
          <div className="logo">
            <span>KR</span>
          </div>
        </div>
        <div className="right">
          {!isMobile ? (
            <div className="menu">
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
                    <a href="/video">Video</a>
                  </li>
                  <li>
                    <a href="/more">More</a>
                  </li>
                </ul>
              </nav>
              <div className="buttons">
                <button>+ Submit</button>
                <GmailIcon className="icon gmail" />
                <FacebookIcon className="icon facebook" />
              </div>
            </div>
          ) : (
            <MobileMenu />
          )}
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Popular Pro Stock Vectors</h1>
        <p className="description">
          High quality Vectors with worry-free licensing for personal and
          comercial use
        </p>
        <div className="searchBar">
          <div className="filter">Vectors</div>
          <input type="text" placeholder="Search vectors..." id="" />
          <SearchIcon className="searchIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
