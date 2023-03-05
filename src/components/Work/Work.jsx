import { Link } from 'react-router-dom';
import home from '../../images/home.png';
import kirpich from '../../images/kirpich.png';
import bunka from '../../images/bunka.png';
import { useAnimation, motion } from "framer-motion";

const Work = ({ languageText }) => {

  const imgAnimation = useAnimation()
  console.log(window.innerWidth)

  const handleMouseMove = e => {
    if (window.innerWidth > 568) {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offsetFactor = 10
      imgAnimation.start({
        x: moveX / offsetFactor,
        y: moveY / offsetFactor
      })
    }
  }

  return (
    <section className="work">
      <div className={`work__container`} >
        <p className='Work__text_bg'>WORK</p>
        <motion.figure
          animate={imgAnimation}
          onMouseMove={e => handleMouseMove(e)}
          className="work__card">
          <img className='work__card__img' src={home} alt="Home" />
          <figcaption className='work__card__subtitle'>House T</figcaption>
        </motion.figure>

        <motion.figure
          animate={imgAnimation}
          onMouseMove={e => handleMouseMove(e)}
          className="work__card">
          <img className='work__card__img' src={bunka} alt="bunka" />
          <figcaption className='work__card__subtitle'>Olive</figcaption>
        </motion.figure>

        <motion.figure
          animate={imgAnimation}
          onMouseMove={e => handleMouseMove(e)}
          className="work__card">
          <img className='work__card__img' src={kirpich} alt="kirpich" />
          <figcaption className='work__card__subtitle'>House T</figcaption>
        </motion.figure>
      </div>
      <div className={`work__all`}>
        <div className={`work__all__container`}>
          <div className={`work__all__content`}>
            <p className="work__all__text work__all__text_left">{languageText('workAllTextLeft')}<span className='top__line'></span></p>
            <p className="work__all__text work__all__text_right">{languageText('workAllTextRight')}<span className='bottom__line'></span></p>
          </div>
          <div className="wrapper__link  ">
            <Link
              onClick={'scroll:0'} className={`work__all__link `} to='/works'>{languageText('workAllLink')}</Link>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Work;