import { Link, NavLink } from "react-router-dom";
import closeMenu from '../../images/closeMenu.svg';

const Navigation = ({ onCloseMenu, isOpenMenu, language }) => {

  const ru = language('aumiInfoTitleOne') === "Дизайн.";

  return (
    <div onClick={(Event) => {
      if (Event.target.className === 'navigation navigation_open') {
        onCloseMenu(); Event.stopPropagation()
      }
    }}
      className={`navigation ${isOpenMenu ? "navigation_open" : ""}`}>

      <div className={`navigation__container ${isOpenMenu ? 'navigation__container_open' : ''}`}>
        <div className="navigation__close">
          <button className='header__button button'>{language('Button')}</button>
          <img onClick={() => onCloseMenu()} className='header__menu_img' src={closeMenu} alt="Menu" />
        </div>
        <nav className="navigation__nav">
          <NavLink onClick={() => onCloseMenu()} className={`link navigation__nav__link ${ru?'navigation__nav__link_ru':''}`} to="/news">{language('navigationNavLinkNews')}</NavLink>
          <NavLink onClick={() => onCloseMenu()} className={`link navigation__nav__link ${ru?'navigation__nav__link_ru':''}`} to="/about-us">{language('navigationNavLinkAboutUs')}</NavLink>
          <NavLink onClick={() => onCloseMenu()} className={`link navigation__nav__link ${ru?'navigation__nav__link_ru':''}`} to="/services">{language('navigationNavLinkServices')}</NavLink>
          <NavLink onClick={() => onCloseMenu()} className={`link navigation__nav__link ${ru?'navigation__nav__link_ru':''}`} to="/contact">{language('navigationNavLinkContact')}</NavLink>

        </nav>
        <div className="navigation__footer">
          <div className="navigation__footer__socials">
            <p className={`navigation__footer__text ${ru?'navigation__footer__text_ru':''}`}>{language('navigationFooterTextSocials')}</p>
            <Link className='link navigation__footer__link' to='#'>Dribbble</Link>
            <Link className='link navigation__footer__link' to='#'>Instagram</Link>
            <Link className='link navigation__footer__link' to='#'>Github</Link>
            <Link className='link navigation__footer__link' to='#'>Twitter</Link>
            <Link className='link navigation__footer__link' to='#'>YouTube</Link>
          </div>
          <div className="navigation__footer__email">
            <p className='navigation__footer__text'>Email</p>
            <a className='link navigation__footer__link' href='mailto:info@dsx.agency.ru'>info@dsx.agency</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;