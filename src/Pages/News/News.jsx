import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import arrowBottom from '../../images/arrowBottom.svg';
import arrowNews from '../../images/news/arrowNews.svg';
import arrowWhiteNiwsMobile from '../../images/news/arrowWhiteNiwsMobile.svg';
import newsImgFinalist from '../../images/news/newsImgFinalist.png';
import { useEffect, useRef } from 'react';

const News = () => {
  const parallax1 = useRef();
  const parallax2 = useRef();
  const parallax3 = useRef();
  const parallax4 = useRef();
  const blockLink1 = useRef();
  const blockLink2 = useRef();
  const blockLink3 = useRef();
  const blockLink4 = useRef();

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth > 720) {
      const speed = 0.05;
      let positionX = 0, positionY = 0;
      let coordXprocent = 0, coordYprocent = 0
      const parallaxEffect = () => {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);

        parallax1.current.style.cssText = `transform: translate(${positionX / 2}%,${positionY / 15}%)`;
        parallax2.current.style.cssText = `transform: translate(${positionX / 2}%,${positionY / 15}%)`;
        parallax3.current.style.cssText = `transform: translate(${positionX / 2}%,${positionY / 15}%)`;
        parallax4.current.style.cssText = `transform: translate(${positionX / 2}%,${positionY / 15}%)`;

        requestAnimationFrame(parallaxEffect);
      }

      blockLink1.current.addEventListener("mousemove", (e) => {
        const paralaxWidth = blockLink1.current.offsetWidth;
        const paralaxHeight = blockLink1.current.offsetHeight;

        const coordX = e.pageX - paralaxWidth / 2;
        const coordY = e.pageY - paralaxHeight / 2;

        coordXprocent = coordX / paralaxWidth * 100;
        coordYprocent = coordY / paralaxHeight * 100;
      })

      blockLink2.current.addEventListener("mousemove", (e) => {
        const paralaxWidth = blockLink2.current.offsetWidth;
        const paralaxHeight = blockLink2.current.offsetHeight;

        const coordX = e.pageX - paralaxWidth / 2;
        const coordY = e.pageY - paralaxHeight / 2;

        coordXprocent = coordX / paralaxWidth * 100;
        coordYprocent = coordY / paralaxHeight * 100;
      })

      blockLink3.current.addEventListener("mousemove", (e) => {
        const paralaxWidth = blockLink3.current.offsetWidth;
        const paralaxHeight = blockLink3.current.offsetHeight;

        const coordX = e.pageX - paralaxWidth / 2;
        const coordY = e.pageY - paralaxHeight / 2;

        coordXprocent = coordX / paralaxWidth * 100;
        coordYprocent = coordY / paralaxHeight * 100;
      })

      blockLink4.current.addEventListener("mousemove", (e) => {
        const paralaxWidth = blockLink4.current.offsetWidth;
        const paralaxHeight = blockLink4.current.offsetHeight;

        const coordX = e.pageX - paralaxWidth / 2;
        const coordY = e.pageY - paralaxHeight / 2;

        coordXprocent = coordX / paralaxWidth * 100;
        coordYprocent = coordY / paralaxHeight * 100;
      })

      parallaxEffect();
    }
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
            <Link ref={blockLink1} onClick={'scroll:0'} className='news__card__link' to='/news-finalist'>
              <p className="news__subtitle">Webflow selects RocketAir as finalist for New Partner Award</p>
              <img className='news__card__img' ref={parallax1} src={newsImgFinalist} alt="newsImgFinalist" />
              <div className='news__card__dates'>
                <p className="news__date">October 26, 2022</p>
                <img className='news__card__arrow' src={`${windowWidth < 569 ? arrowWhiteNiwsMobile : arrowNews}`} alt="Arrow" />
              </div>
            </Link>
          </div>

          <div className="news__card">
            <Link ref={blockLink2} onClick={'scroll:0'} className='news__card__link' to='/news-finalist'>
              <p className="news__subtitle">RocketAir wins Awwwards Site of the Day</p>
              <img className='news__card__img' ref={parallax2} src={newsImgFinalist} alt="newsImgFinalist" />
              <div className='news__card__dates'>
                <p className="news__date">June 26, 2022</p>
                <img className='news__card__arrow' src={`${windowWidth < 569 ? arrowWhiteNiwsMobile : arrowNews}`} alt="Arrow" />
              </div>
            </Link>
          </div>

          <div className="news__card">
            <Link ref={blockLink3} onClick={'scroll:0'} className='news__card__link' to='/news-finalist'>
              <p className="news__subtitle">CSS Design Awards names RocketAir Website of the Day</p>
              <img className='news__card__img' ref={parallax3} src={newsImgFinalist} alt="newsImgFinalist" />
              <div className='news__card__dates'>
                <p className="news__date">June 6, 2022</p>
                <img className='news__card__arrow' src={`${windowWidth < 569 ? arrowWhiteNiwsMobile : arrowNews}`} alt="Arrow" />
              </div>
            </Link>
          </div>


          <div className="news__card">
            <Link ref={blockLink4} onClick={'scroll:0'} className='news__card__link' to='/news-finalist'>
              <p className="news__subtitle">RocketAir expands leadership team, now majority women-led</p>
              <img className='news__card__img' ref={parallax4} src={newsImgFinalist} alt="newsImgFinalist" />
              <div className='news__card__dates'>
                <p className="news__date">May 2, 2022</p>
                <img className='news__card__arrow' src={`${windowWidth < 569 ? arrowWhiteNiwsMobile : arrowNews}`} alt="Arrow" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default News;