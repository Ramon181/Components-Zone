import "./Header.scss";
import logo from "../../utils/images/cz.png";
import { Dark, Light } from "../../utils/svg/Svg";

const Header = () => {
  return (
    <div class="header">
      <nav class="site-navigation">
        <div className="logotype">
          <img src={logo} alt="logo" />
        </div>
        <ul id="footer-menu" class="nav-menu">
          <li id="menu-item-26" class="menu-item">
            <a href="#">CSS</a>
          </li>
          <li id="menu-item-27" class="menu-item ">
            <a href="#">JavaScript</a>
          </li>
          <li id="menu-item-28" class="menu-item ">
            <a href="#">React.JS</a>
          </li>
          <li id="menu-item-29" class="menu-item">
            <a href="#">Taildwind</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
