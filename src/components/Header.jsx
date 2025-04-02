import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import honeycombs from "../assets/img/honeycombs.svg";

function Header() {

  return (
    <div className="header">
      <div className="header__honeycombs">
        <img src={honeycombs} alt="honeycombs" />
      </div>
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="maya logo" />
          </div>
        </Link>
        <div className="header__phone">
          <a href="tel:+79784441414"> + 7 (978) 444 14 14 </a>
          <p>Вс-чт. 10.00-23.00 <br /> Пт-сб 10.00-00.00</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
