import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import arrowBottom from '../../images/arrowBottom.svg';
import arrowNews from '../../images/news/arrowNews.svg';
import newsImgFinalist from '../../images/news/newsImgFinalist.png';
import { useEffect, useRef } from 'react';

const News = () => {
  const parallax = useRef();
  const blockLink = useRef();
  useEffect(() => {
    const speed = 0.05;
    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0
    const parallaxEffect = () => {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);
      parallax.current.style.cssText = `transform: translate(${positionX / 2}%,${positionY / 15}%)`;

      requestAnimationFrame(parallaxEffect);
    }
    console.log(blockLink.current.offsetWidth)
    blockLink.current.addEventListener("mousemove", (e) => {
      const paralaxWidth = blockLink.current.offsetWidth;
      const paralaxHeight = blockLink.current.offsetHeight;

      const coordX = e.pageX - paralaxWidth / 2;
      const coordY = e.pageY - paralaxHeight / 2;

      coordXprocent = coordX / paralaxWidth * 100;
      coordYprocent = coordY / paralaxHeight * 100;
    })
    parallaxEffect();
  }, [])

  return (
    <>
      <Header />
      <section className="news">
        <h1 className="news__title">News</h1>
        <div className="news__container">
          <div className="news__arrow__block">
            <img className='arrow-bottom__img' src={arrowBottom} alt="Arrow-bottom" />
          </div>

          <div className="news__card">
            <Link ref={blockLink} onClick={'scroll:0'} className='news__card__link' to='/news-finalist'>
              <p className="news__subtitle">Webflow selects RocketAir as finalist for New Partner Award</p>
              <p className="news__date">October 26, 2022</p>
              <img className='news__card__img' ref={parallax} src={newsImgFinalist} alt="newsImgFinalist" />
              <img className='news__card__arrow' src={arrowNews} alt="Arrow" />
            </Link>
          </div>

          <div className="news__card">
            <Link className='news__card__link' to='#'>
              <p className="news__subtitle">RocketAir wins Awwwards Site of the Day</p>
              <p className="news__date">June 26, 2022</p>
              <img className='news__card__arrow' src={arrowNews} alt="Arrow" />
            </Link>
          </div>

          <div className="news__card">
            <Link className='news__card__link' to='#'>
              <p className="news__subtitle">CSS Design Awards names RocketAir Website of the Day</p>
              <p className="news__date">June 6, 2022</p>
              <img className='news__card__arrow' src={arrowNews} alt="Arrow" />
            </Link>
          </div>

          <div className="news__card">
            <Link className='news__card__link' to='#'>
              <p className="news__subtitle">RocketAir expands leadership team, now majority women-led</p>
              <p className="news__date">May 2, 2022</p>
              <img className='news__card__arrow' src={arrowNews} alt="Arrow" />
            </Link>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default News;