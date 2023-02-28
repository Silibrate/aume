import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import menu from '../../images/headerBurger.svg';
import Navigation from "../Navigation/Navigation";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  const body = document.querySelector('.body');

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const paths = {
    '/': '/',
    '/works': '/works',
    '/works-vivaldis': '/works-vivaldis',
    '/news': '/news',
    '/news-finalist': '/news-finalist',
    '/about-us': '/about-us',
    '/services': '/services',
    '/services-brand': '/services-brand',
    '/process': '/process',
    '/contact': '/contact',
  }

  const openMenu = () => {
    setIsOpenMenu(true)
    body.style.overflow = 'hidden';
  }
  const closeMenu = () => {
    setIsOpenMenu(false)
    body.style.overflow = 'auto';
  }
  const location = useLocation();

  console.log(paths[location.pathname])

  return (
    <header className={`header  ${paths[location.pathname] ? '' : 'header_bg-erroe'} ${location.pathname !== '/' ? 'header_bg' : ''} `}>
      <div className="header__container">
        <div className={`header__lenguich`}>
          <Link to='/'><img className={`header__logo ${paths[location.pathname] ? '' : 'header__logo_invert'}`} src={logo} alt="Logo" /></Link>
          <p className={`header__lenguich__text ${paths[location.pathname] ? '' : 'header__lenguich__text_black'}`}>En</p>
        </div>
        <div className="header__menu">
          <button className='button header__button'>Get in touch</button>
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