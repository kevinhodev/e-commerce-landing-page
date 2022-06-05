import { ReactComponent as OptionsIcon } from "../../assets/icons/options.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark.svg";
import "./OptionsBar.css";

const OptionsBar = () => {
  return (
    <div className="optionsBar">
      <ul className="filterOptions">
        <li className="latest">Latest</li>
        <li className="popular">Popular</li>
        <span className="divisor">|</span>
        <li className="premium">Premium</li>
        <li className="free">Free</li>
      </ul>
      <div className="settings">
        <OptionsIcon />
        <BookmarkIcon />
      </div>
    </div>
  );
};

export default OptionsBar;
