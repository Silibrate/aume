import { Link } from 'react-router-dom';
import home from '../../images/home.png';
import kirpich from '../../images/kirpich.png';
import bunka from '../../images/bunka.png';

const Work = () => {

  return (
    <section className="work">
      <div className={`work__container`} >
        <p className='Work__text_bg'>WORK</p>
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
      <div className={`work__all`}>
        <div className={`work__all__container`}>
          <div className={`work__all__content`}>
            <p className="work__all__text work__all__text_left">Take a look at what</p>
            <p className="work__all__text work__all__text_right">we can do for you</p>
          </div>
          <Link className={`work__all__link `} to='work'>All work</Link>
        </div>
      </div>
    </section >
  );
}

export default Work;