import { Link } from "react-router-dom";
/* import arrow from '../../images/footerArrow.svg' */
import closeMenu from '../../images/closeMenu.svg';

const Navigation = ({ onCloseMenu, isOpenMenu }) => {
  return (
    <div onClick={(Event) => {
      if (Event.target.className === 'navigation navigation_open') {
        onCloseMenu(); Event.stopPropagation()
      }
    }}
      className={`navigation ${isOpenMenu ? "navigation_open" : ""}`}>

      <div className={`navigation__container ${isOpenMenu ? 'navigation__container_open' : ''}`}>
        <div className="navigation__close">
          <button className='header__button button'>Get in touch</button>
          <img onClick={() => onCloseMenu()} className='header__menu_img' src={closeMenu} alt="Menu" />
        </div>
        <nav className="navigation__nav">
          <Link className="navigation__nav__link" to="works">Works</Link>
          <Link className="navigation__nav__link" to="price">Price</Link>
          <Link className="navigation__nav__link" to="news">News</Link>
          <Link className="navigation__nav__link" to="about">About us</Link>
          <Link className="navigation__nav__link" to="contact">Contact</Link>
          <Link className="navigation__nav__link" to="services">Services</Link>
          <Link className="navigation__nav__link" to="faq">Faq</Link>
        </nav>
        <div className="navigation__footer">
          <div className="navigation__footer__socials">
            <p className="navigation__footer__text">Socials</p>
            <Link className='navigation__footer__link' to='#'>Dribbble</Link>
            <Link className='navigation__footer__link' to='#'>Instagram</Link>
            <Link className='navigation__footer__link' to='#'>Github</Link>
            <Link className='navigation__footer__link' to='#'>Twitter</Link>
            <Link className='navigation__footer__link' to='#'>YouTube</Link>
          </div>
          <div className="navigation__footer__email">
            <p className='navigation__footer__text'>Email</p>
            <Link className='navigation__footer__link' to='#'>info@dsx.agency</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;