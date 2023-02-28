import awwwards from '../../images/awwwards.svg';
import FWA from '../../images/FWA.svg';
import Hackathon from '../../images/Hackathon.svg';
import Css from '../../images/Css.svg';
import Dprofile from '../../images/Dprofile.svg';

const Progress = () => {

  return (
    <section className="progress">
      <div className="progress__container">
        <div className="progress__awards">
          <h3 className="progress__awards__title">Aumi award winning</h3>
          <h3 className="progress__awards__title progress__awards__title_botton">creative design agency</h3>
          <div className="progress__awards__container">

            <div className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={awwwards} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Awwwards</p>
            </div>

            <div className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={FWA} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">FWA</p>
            </div>

            <div className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={Css} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Css design awards</p>
            </div>

            <div className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={Dprofile} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Dprofile</p>
            </div>

            <div className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={Hackathon} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Hackathon</p>
            </div>

          </div>
        </div>
      </div>
      <div className="progress__technology">
        <div className="progress__technology__container">
          <p className='progress__technology__title'>Inspiring with design.
            <span className='progress__technology__title_red' >Empowering through technology. </span></p>
          <div className="progress__technology__info">
            <p className="progress__technology__info__text">We are a comprehensive design and technology
              partner for the digital age. We help businesses to
              innovate and remain highly relevant to their customers
              by developing cutting-edge digital products and
              executing smart and valuable communication.
            </p>
            <div className="progress__technology__info__number">
              <div className="block__number">

                <p className='progress__technology__info__number_100'>100+</p>

                <span className="line line_number"></span>
                <p className='progress__technology__info__number__text'>Project’s done</p>
              </div>

              <div className="progress__technology__info__number__conteiner">
                <div className="progress__technology__info__number__content">
                  <p className='progress__technology__info__number_small'>5+ </p>
                  <p className='progress__technology__info__number__text'>Years of experience </p>
                  <span className="line line_number"></span>
                </div>
                <div className="progress__technology__info__number__content">
                  <p className='progress__technology__info__number_small'>10+ </p>
                  <p className='progress__technology__info__number__text'>Team members</p>
                  <span className="line line_number"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Progress;