import "./Footer.css";
import RobotoFont from "../../fonts/Roboto-Medium.ttf";
import Logo from "../../images/Logo.png";
import Links from "../../images/Follow.png";

function Footer() {
  return (
    <div className="footer-box">
      <div className="contact-box">
        <h4>Contact Us</h4>
        <p className="mail">Email</p>
        <span className="mail-span">needhelp@Organia.com</span>
        <p className="phone">Phone</p>
        <span className="phone-num">666888888</span>
        <p className="adress">Address</p>
        <span className="str">88 road, borklyn street, USA</span>
      </div>
      <div className="after"></div>
      <div className="organick-box">
        <img src={Logo} alt="Organick Logo" className="logo" />
        <h2>Organick</h2>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing{" "}
        </p>
        <img src={Links} alt="Links" className="logos" />
      </div>
      <div className="second-after"></div>
      <div className="utility-box">
        <h2>Utility Pages</h2>
        <p>Style Guide</p>
        <p>404 Not Found</p>
        <p>Password Protected</p>
        <p>Licenses</p>
        <p>Changelog</p>
      </div>
    </div>
  );
}

export default Footer;
