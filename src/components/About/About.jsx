import ships from '../../images/ships.png';

const About = ({ languageText }) => {
  return (
    <div className='about'>
      <div className="about__container">
        <h2 className='about__title'>{languageText('aboutTitle')}</h2>
        <p className="about__text">{languageText('aboutText')}</p>
        <img className='about__img' src={ships} alt="ships" />
        <p className='about__text about__text_bottom'>{languageText('aboutTextBottomOne')}</p>
        <p className='about__text about__text_bottom'>{languageText('aboutTextBottomTwo')}</p>
      </div>

      <form className='about__form' action="/about-us">
        <button className='button about__button__about'>{languageText('aboutButtonAbout')}</button>
      </form>
    </div>)
}

export default About;