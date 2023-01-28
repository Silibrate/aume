import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import menu from '../../images/headerBurger.svg';
import Navigation from "../Navigation/Navigation";

const Header = ({ isOpenMenu, openMenu, closeMenu, ...props }) => {

  return (
    <header className={`header ${props.class}`}>
      <div className="header__container">
        <div className="header__lenguich">
          <Link to='/'><img className='header__logo' src={logo} alt="Logo" /></Link>
          <p className='header__lenguich__text'>En</p>
        </div>
        <div className="header__menu">
          <button className='header__button button'>Get in touch</button>
          <img onClick={() => openMenu()} className='header__menu_img' src={menu} alt="Menu" />
        </div>
      </div>
      <Navigation
        onCloseMenu={closeMenu}
        isOpenMenu={isOpenMenu}
      />
    </header>
  );
}

export default Header;