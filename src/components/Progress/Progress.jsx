import awwwards from '../../images/awwwards.svg';
import FWA from '../../images/FWA.svg';
import Hackathon from '../../images/Hackathon.svg';
import Css from '../../images/Css.svg';
import Dprofile from '../../images/Dprofile.svg';

const Progress = ({ languageText, ru }) => {

  return (
    <section className="progress">
      <div className="progress__container">
        <div className="progress__awards">
          <h3 className={`progress__awards__title ${ru ? 'progress__awards__title_ru' : ''}`}>{languageText('progressAwardsTitle')}</h3>
          <h3 className={`progress__awards__title progress__awards__title_botton ${ru ? 'progress__awards__title_ru' : ''}`}>{languageText('progressAwardsTitleBotton')}</h3>
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
          <p className={`progress__technology__title ${ru ? 'progress__technology__title_ru' : ''}`}>{languageText('progressTechnologyTitle')}
            <span className={`progress__technology__title_red  ${ru ? 'progress__technology__title_ru' : ''}`} >{languageText('progressTechnologyTitleRed')} </span></p>
          <div className="progress__technology__info">
            <p className={`progress__technology__info__text ${ru ? 'progress__technology__info__text_ru' : ''}`}>{languageText('progressTechnologyInfoText')} </p>
            <div className="progress__technology__info__number">
              <div className="block__number">

                <p className='progress__technology__info__number_100'>100+</p>

                <span className="line line_number"></span>
                <p className={`progress__technology__info__number__text ${ru ? 'progress__technology__info__number__text_ru' : ''}`}>{languageText('progressTechnologyInfoNumberTextOne')}</p>
              </div>

              <div className="progress__technology__info__number__conteiner">
                <div className="progress__technology__info__number__content">
                  <p className='progress__technology__info__number_small'>5+ </p>
                  <p className={`progress__technology__info__number__text ${ru ? 'progress__technology__info__number__text_ru' : ''}`}>{languageText('progressTechnologyInfoNumberTextTwo')} </p>
                  <span className="line line_number"></span>
                </div>
                <div className="progress__technology__info__number__content">
                  <p className='progress__technology__info__number_small'>10+ </p>
                  <p className={`progress__technology__info__number__text ${ru ? 'progress__technology__info__number__text_ru' : ''}`}>{languageText('progressTechnologyInfoNumberTextTree')}</p>
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