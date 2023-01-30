import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import arrowBottom from '../../images/arrowBottom.svg';

const News = ({ isOpenMenu, openMenu, closeMenu }) => {

  return (
    <>
      <Header
        isOpenMenu={isOpenMenu}
        openMenu={openMenu}
        closeMenu={closeMenu}
        class={'header_bg'}
      />
      <section className="news">
        <h1 className="news__title">News</h1>
        <div className="news__container">
          <div className="news__arrow__block">
            <img className='arrow-bottom__img' src={arrowBottom} alt="Arrow-bottom" />
          </div>

          <div className="news__card">
            <Link onClick={'scroll:0'} className='news__card__link' to='/news-finalist'>
              <p className="news__date">October 26, 2022</p>
              <p className="news__subtitle">Webflow selects RocketAir as finalist for New Partner Award</p>
            </Link>
          </div>

          <div className="news__card">
            <Link className='news__card__link' to='#'>
              <p className="news__date">June 26, 2022</p>
              <p className="news__subtitle">RocketAir wins Awwwards Site of the Day</p>
            </Link>
          </div>

          <div className="news__card">
            <Link className='news__card__link' to='#'>
              <p className="news__date">June 6, 2022</p>
              <p className="news__subtitle">CSS Design Awards names RocketAir Website of the Day</p>
            </Link>
          </div>

          <div className="news__card">
            <Link className='news__card__link' to='#'>
              <p className="news__date">May 2, 2022</p>
              <p className="news__subtitle">RocketAir expands leadership team, now majority women-led</p>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default News;