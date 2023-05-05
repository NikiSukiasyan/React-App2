import "./Newsleter.css";
import "../../images/NewsPhoto.jpg";
import RobotoFont from "../../fonts/Roboto-Medium.ttf";

function NewsLetter() {
  return (
    <div className="news-box">
      <p>Subscribe to our Newsletter</p>
      <input type="email" placeholder="Your Email Address" />
      <button>Subscribe</button>
    </div>
  );
}
export default NewsLetter;
