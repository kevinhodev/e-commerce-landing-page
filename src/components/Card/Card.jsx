import { ReactComponent as LookIcon } from "../../assets/icons/look.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";
import dog from "../../assets/images/dog.png";
import "./Card.css";

const Card = ({ type, image, name }) => {
  return (
    <div className="card">
      <div className="vectorImage">
        <div className="type">
          <LookIcon className="icon" />
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
  );
};

export default Card;
