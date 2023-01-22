import { Link } from 'react-router-dom';
import home from '../../images/home.png';
import kirpich from '../../images/kirpich.png';
import bunka from '../../images/bunka.png';
import { useState, useEffect } from 'react';

const Work = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(window.scrollY)

  return (
    <section className="work">
      <div className={`work__container element-animation ${scroll > 4909 ? 'element-show' : ''} ${scroll > 10524 ? 'element-show_end' : ''}`} >
        <figure className="work__card">
          <img className='work__card__img' src={home} alt="Home" />
          <figcaption className='work__card__subtitle'>House T</figcaption>
        </figure>

        <figure className="work__card">
          <img className='work__card__img' src={bunka} alt="bunka" />
          <figcaption className='work__card__subtitle'>Olive</figcaption>
        </figure>

        <figure className="work__card">
          <img className='work__card__img' src={kirpich} alt="kirpich" />
          <figcaption className='work__card__subtitle'>House T</figcaption>
        </figure>

        <figure className="work__card">
          <img className='work__card__img' src={home} alt="Home" />
          <figcaption className='work__card__subtitle'>House T</figcaption>
        </figure>

        <figure className="work__card">
          <img className='work__card__img' src={bunka} alt="bunka" />
          <figcaption className='work__card__subtitle'>Olive</figcaption>
        </figure>

        <figure className="work__card">
          <img className='work__card__img' src={kirpich} alt="kirpich" />
          <figcaption className='work__card__subtitle'>House T</figcaption>
        </figure>
      </div>
      <div className={`work__all ${scroll > 11225 ? "work__all_show" : ""} ${scroll > 12048 ? "work__all_show_end" : ""}`}>
        <div className={`work__all__container`}>
          <div className={`work__all__content ${scroll > 11225 ? "work__all__content_show" : ""} ${scroll > 12048 ? "work__all__content_show_end" : ""}`}>
            <p className="work__all__text work__all__text_left">Take a look at what</p>
            <p className="work__all__text work__all__text_right">we can do for you</p>
          </div>
          <Link className={`work__all__link ${scroll > 12048 ? "work__all__link_show" : ""}`} to='work'>All work</Link>
        </div>
      </div>
    </section >
  );
}

export default Work;