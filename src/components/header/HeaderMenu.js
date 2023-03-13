import "./HeaderMenu.css";
import logo from "./media/logo copy 1.png";

function HeaderMenu(props) {
  const { title, text, image } = props;
  return (
    <div className="container">
      <div className="header_menu">
        <div className="header_ihnen">
          <img className="menu_logo" src={logo} alt="logo" />
          <ul className="menu_nav">
            <li className="nav_list">О нас</li>
            <li className="nav_list">Услуги</li>
            <li className="nav_list">Аренда</li>
          </ul>
          <button className="menu_btn">Связаться</button>
        </div>

        <div className="info_block">
          <div className="text_block">
            <h1 className="h1">{title}</h1>
            <p className="p">{text}</p>
          </div>
          <img className="info_image" src={image} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
