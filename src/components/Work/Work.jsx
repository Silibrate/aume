import home from '../../images/home.png';
import kirpich from '../../images/kirpich.png';
import bunka from '../../images/bunka.png';

const Work = () => {
  return (
    <section className="work">
      <div className="work__container">
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
    </section>
  );
}

export default Work;