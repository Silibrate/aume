import logo from '../../images/logo.svg';
import menu from '../../images/headerBurger.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__lenguich">
          <img className='header__logo' src={logo} alt="Logo" />
          <p className='header__lenguich__text'>En</p>
        </div>
        <div className="header__menu">
          <button className='header__button button'>Get in touch</button>
          <img src={menu} alt="Menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;