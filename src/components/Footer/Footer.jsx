import { Link } from 'react-router-dom';
import footerArrow from '../../images/footerArrow.svg';
import footerArrow580 from '../../images/footer/footerArrow580.svg';

const Footer = ({ languageText }) => {

  const windowHeight = window.innerWidth;

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <Link className='footer__title' to='#'>{languageText('footerTitle')} <img className='footer__title__img' src={`${windowHeight < 581 ? footerArrow580 : footerArrow}`} alt='Arrow' /></Link>
        <div className='footer__content'>
          <div className='footer__content__socials'>
            <nav className='footer__content__nav'>
              <p className='footer__content__text'>{languageText('footerContentTextSocials')}</p>
              <Link className='link footer__link footer__link_first' to='#'>Dribbble</Link>
              <Link className='link footer__link' to='#'>Instagram</Link>
              <Link className='link footer__link' to='#'>Github</Link>
              <Link className='link footer__link' to='#'>Twitter</Link>
              <Link className='link footer__link' to='#'>YouTube</Link>
            </nav>
            <div className='footer__content__email'>
              <p className='footer__content__text'>Email</p>
              <Link className='link footer__link' to='#'>info@dsx.agency</Link>
            </div>
          </div>
        </div>
        <p className="footer__content__text footer__content__text_number">Aumi digital © 2022</p>
      </div>
    </footer>
  );
}

export default Footer;