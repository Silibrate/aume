import ships from '../../images/ships.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about__container">
        <h2 className='about__title'>About aumi</h2>
        <p className="about__text">Our agency is about people who love creating, designing and developing wow projects. In the same time we are a boutique agency that is more than the collective. We learn and grow, win and celebrate together.</p>
        <img className='about__img' src={ships} alt="ships" />
        <p className='about__text about__text_bottom'>We are happy to present our new website and updated version of Aumi agency. As before we are open for new projects worldwide!</p>
        <p className='about__text about__text_bottom'>Would you like to have award winning site or unique branding style, please say hi to our manager — aumi.digital@gmail.com. And we will help you with the pleasure.</p>
      </div>

      <form className='about__form' action="/about-us">
        <button className='button about__button__about'>More about us</button>
      </form>
    </div>)
}

export default About;