import { motion } from "framer-motion"
import awwwards from '../../images/awwwards.svg';
import FWA from '../../images/FWA.svg';
import Hackathon from '../../images/Hackathon.svg';
import Css from '../../images/Css.svg';
import Dprofile from '../../images/Dprofile.svg';

const Progress = () => {

  const animation = {
    hidden: {
      y: 350,
    },
    visible: custom => ({
      y: 0,
      transition: { delay: custom * 0.2 },
    })
  }

  const animationOpacity = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    }
  }

  return (
    <section className="progress">
      <div className="progress__container">
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.3, once: true }}
          className="progress__awards">
          <motion.h3 variants={animationOpacity} className="progress__awards__title">Aumi award winning creative design agency</motion.h3>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            className="progress__awards__container">

            <motion.div custom={1} variants={animation} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={awwwards} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Awwwards</p>
            </motion.div>

            <motion.div custom={2} variants={animation} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={FWA} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">FWA</p>
            </motion.div>

            <motion.div custom={3} variants={animation} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={Css} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Css design awards</p>
            </motion.div>

            <motion.div custom={4} variants={animation} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={Dprofile} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Dprofile</p>
            </motion.div>

            <motion.div custom={5} variants={animation} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={Hackathon} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Hackathon</p>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className="progress__technology">
        <div className="progress__technology__container">
          <motion.p custom={2} variants={animationOpacity} className='progress__technology__title'>Inspiring with design.
            <span className='progress__technology__title_red' >Empowering through technology. </span></motion.p>
          <div className="progress__technology__info">
            <motion.p variants={animationOpacity} className="progress__technology__info__text">
              We are a comprehensive design and technology partner for the digital age. We help businesses to innovate and remain highly relevant to their customers by developing cutting-edge digital products and executing smart and valuable communication.
            </motion.p>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.3, once: true }}
              className="progress__technology__info__number">
              <div className="block">
                <motion.p variants={animation} className='progress__technology__info__number_100'>100+</motion.p>
              </div>

              <motion.p variants={animationOpacity} className='progress__technology__info__number__text'>Project’s done</motion.p>
            <div className="progress__technology__info__number__conteiner">
              <div className="progress__technology__info__number__content">
                <motion.p variants={animation} className='progress__technology__info__number_small'>5+</motion.p>
                <motion.p variants={animationOpacity} className='progress__technology__info__number__text'>Years of experience</motion.p>
              </div>
              <div className="progress__technology__info__number__content">
                <motion.p variants={animation} className='progress__technology__info__number_small'>10+</motion.p>
                <motion.p variants={animationOpacity} className='progress__technology__info__number__text'>Team members</motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
    </section >
  );
}

export default Progress;