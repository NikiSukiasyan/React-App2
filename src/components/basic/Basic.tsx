import "./Basic.css";
import LemonPhoto from "../../images/PhotoLemons.png";
import CarrotPhoto from "../../images/Photocarrot.png";
import BetelPhoto from "../../images/PhotoBetel.png";
import TomattoPhoto from "../../images/PhotoTommato.png";
import RaspberryPhoto from "../../images/PhotoRaspberry.png";
import OrangePhoto from "../../images/PhotoOrange.png";
import RobotoFont from "../../fonts/Roboto-Medium.ttf";
import YellowtailFont from "../../fonts/Yellowtail-Regular.ttf";

function Basic() {
  return (
    <div className="container">
      <div>
        <img src={LemonPhoto} alt="Lemon Photo" />
        <p>Green & Tasty Lemon</p>
        <span>Fruits</span>
      </div>
      <div>
        <img src={CarrotPhoto} alt="Carrot Photo" />
        <p>Organic Carrot</p>
        <span>Farmer</span>
      </div>
      <div>
        <img src={BetelPhoto} alt="Betel Photo" />
        <p>Organic Betel Leaf</p>
        <span>Leaf</span>
      </div>
      <div>
        <img src={TomattoPhoto} alt="Tommato Photo" />
        <p>Natural Tommato</p>
        <span>Fruits</span>
      </div>
      <div>
        <img src={RaspberryPhoto} alt="Raspberry Photo" />
        <p>Black Raspberry</p>
        <span>Farmer</span>
      </div>
      <div>
        <img src={OrangePhoto} alt="Orangeaspberry Photo" />
        <p>Black Raspberry</p>
        <span>Farmer</span>
      </div>
    </div>
  );
}

export default Basic;
