import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as UnlockIcon } from "../../assets/icons/unlock.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";
import dog from "../../assets/images/dog.png";
import astronaut from "../../assets/images/astronaut.png";
import rockstar from "../../assets/images/rockstar.png";
import basketball from "../../assets/images/basketball.png";
import "./Card.css";

const Card = ({ type, image, name }) => {
  return (
    <>
      <div className="card">
        <div className="vectorImage">
          <div className="type">
            <LockIcon className="icon" />
            <span>Premium</span>
          </div>
          <div className="imageContainer">
            <img className="image" src={dog} alt="Dog" />
          </div>
          <div className="title">
            <h2>
              <span className="highlight">D</span>
              og Ilustration
            </h2>
          </div>
          <div className="download">
            <button>Download</button>
            <DownloadIcon className="icon" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="vectorImage">
          <div className="type">
            <LockIcon className="icon" />
            <span>Premium</span>
          </div>
          <div className="imageContainer">
            <img className="image" src={astronaut} alt="Dog" />
          </div>
          <div className="title">
            <h2>
              <span className="highlight">A</span>
              stronaut Riding
            </h2>
          </div>
          <div className="download">
            <button>Download</button>
            <DownloadIcon className="icon" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="vectorImage">
          <div className="type">
            <UnlockIcon className="icon free" />
            <span>Free</span>
          </div>
          <div className="imageContainer">
            <img className="image" src={rockstar} alt="Dog" />
          </div>
          <div className="title">
            <h2>
              <span className="highlight">R</span>
              ockstar Guitarist
            </h2>
          </div>
          <div className="download">
            <button>Download</button>
            <DownloadIcon className="icon" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="vectorImage">
          <div className="type">
            <UnlockIcon className="icon free" />
            <span>Free</span>
          </div>
          <div className="imageContainer">
            <img className="image" src={basketball} alt="Dog" />
          </div>
          <div className="title">
            <h2>
              <span className="highlight">B</span>
              asketball Player
            </h2>
          </div>
          <div className="download">
            <button>Download</button>
            <DownloadIcon className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
