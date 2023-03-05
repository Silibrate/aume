import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import menu from '../../images/headerBurger.svg';
import Navigation from "../Navigation/Navigation";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import UseLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../i18n";

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

  const { t } = useTranslation();
  const [language, setLanguage] = UseLocalStorage('language', 'ru');

  const handleLenguageChange = () => {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru')
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en')
    }
  }

  const ru = t('aumiInfoTitleOne') === "Дизайн.";

  return (
    <header className={`header  ${paths[location.pathname] ? '' : 'header_bg-erroe'} ${location.pathname !== '/' ? 'header_bg' : ''} `}>
      <div className="header__container">
        <div className={`header__lenguich`}>
          <Link to='/'><img className={`header__logo ${paths[location.pathname] ? '' : 'header__logo_invert'}`} src={logo} alt="Logo" /></Link>
          <p onClick={() => { handleLenguageChange() }} className={`header__lenguich__text ${paths[location.pathname] ? '' : 'header__lenguich__text_black'}`}>{t('headerLenguichText')}</p>
        </div>
        <div className="header__menu">
          <button className={`button header__button ${ru ? "button_ru" : ""}`}>{t('Button')}</button>
          <img onClick={() => openMenu()} className='header__menu_img' src={menu} alt="Menu" />
        </div>
      </div>
      <Navigation
        language={t}
        onCloseMenu={closeMenu}
        isOpenMenu={isOpenMenu}
      />
    </header>
  );
}

export default Header;