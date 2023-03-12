import ships from '../../images/ships.png';

const About = ({ languageText, ru }) => {
  return (
    <div className='about'>
      <div className="about__container">
        <h2 className={`about__title ${ru ? 'about__title_ru' : ''}`}>{languageText('aboutTitle')}</h2>
        <p className={`about__text ${ru ? 'about__text_ru' : ''} `}>{languageText('aboutText')}</p>
        <img className='about__img' src={ships} alt="ships" />
        <p className={`about__text about__text_bottom ${ru ? 'about__text_ru' : ''}`}>{languageText('aboutTextBottomOne')}</p>
        <p className={`about__text about__text_bottom ${ru ? 'about__text_ru' : ''}`}>{languageText('aboutTextBottomTwo')}</p>
      </div>

      <form className='about__form' action="/about-us">
        <button className={`button about__button__about ${ru ? 'about__button__about_ru' : ''}`}>{languageText('aboutButtonAbout')}</button>
      </form>
    </div>)
}

export default About;