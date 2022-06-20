import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import "./Presentation.css";

const Presentation = () => {
  return (
    <div className="presentation">
      <h1 className="presentation__title">Popular Pro Stock Vectors</h1>
      <p className="presentation__description">
        High quality Vectors with worry-free licensing for personal and
        comercial use
      </p>
      <div className="presentation__searchBar">
        <div className="searchBar__filter">Vectors</div>
        <input type="text" placeholder="Search vectors..." id="" />
        <SearchIcon className="search-icon" />
      </div>
    </div>
  );
};

export default Presentation;
