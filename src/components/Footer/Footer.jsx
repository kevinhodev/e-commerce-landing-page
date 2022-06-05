import motocycle from "../../assets/images/motocycle.png";
import nature from "../../assets/images/nature.png";
import person from "../../assets/images/person.png";
import tools from "../../assets/images/tools.png";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeftSIcon } from "../../assets/icons/arrow-left-s.svg";
import { ReactComponent as ArrowRightSIcon } from "../../assets/icons/arrow-right-s.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="discover">
        <a href="#" className="link">
          Discover All Colections
        </a>
        <div className="collections">
          <div className="collection">
            <img src={motocycle} alt="" />
          </div>
          <div className="collection">
            <img src={nature} alt="" />
          </div>
          <div className="collection">
            <img src={person} alt="" />
          </div>
          <div className="collection">
            <img src={tools} alt="" />
          </div>
        </div>
      </div>
      <button>
        Next Page <ArrowRightIcon className="icon" />
      </button>
      <div className="pageControl">
        <span className="label">Page</span>
        <div className="controls">
          <div className="control">
            <ArrowLeftSIcon className="icon" />
          </div>
          <div className="control">
            <span>1</span>
          </div>
          <div className="control">
            <ArrowRightSIcon className="icon" />
          </div>
        </div>
        <span className="page">of 120</span>
      </div>
    </div>
  );
};

export default Footer;
