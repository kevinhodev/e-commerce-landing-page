import { ReactComponent as GmailIcon } from "../../assets/icons/gmail.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <div className="left">
          <div className="logo">
            <span>KR</span>
          </div>
          <nav className="navigation">
            <ul className="menu">
              <li>
                <a href="#">Vectors</a>
              </li>
              <li>
                <a href="#">Photos</a>
              </li>
              <li>
                <a href="#">PSD</a>
              </li>
              <li>
                <a href="#">Video</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <button>+ Submit</button>
          <GmailIcon className="icon gmail" />
          <FacebookIcon className="icon facebook" />
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
