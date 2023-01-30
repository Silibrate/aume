import { motion } from "framer-motion"
import awwwards from '../../images/awwwards.svg';
import FWA from '../../images/FWA.svg';
import Hackathon from '../../images/Hackathon.svg';
import Css from '../../images/Css.svg';
import Dprofile from '../../images/Dprofile.svg';

const Progress = () => {

  const animation = {
    hidden: {
      y: 250,
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

    visible: custom => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    })
  }

  const animationOpacityCard = {
    hidden: {
      opacity: 0,
    },
    visible: custom => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    })
  }

  const animationLine = {
    hidden: {
      width: 0,
    },
    visible: custom => ({
      width: '100%',
      transition: { delay: custom * 0.2 }
    })
  }

  return (
    <section className="progress slow">
      <div className="progress__container">
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.3, once: true }}
          className="progress__awards">
          <div className="block"><motion.h3 variants={animation} custom={1} className="progress__awards__title">Aumi award winning</motion.h3></div>
          <div className="block"><motion.h3 variants={animation} custom={3} className="progress__awards__title progress__awards__title_botton">creative design agency</motion.h3></div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            className="progress__awards__container">

            <motion.div custom={9} variants={animationOpacityCard} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={awwwards} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Awwwards</p>
            </motion.div>

            <motion.div custom={10} variants={animationOpacityCard} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={FWA} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">FWA</p>
            </motion.div>

            <motion.div custom={11} variants={animationOpacityCard} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={Css} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Css design awards</p>
            </motion.div>

            <motion.div custom={12} variants={animationOpacityCard} className="progress__awards__card">
              <div className="progress__awards__card__logo">
                <img className='progress__awards__card__logo__img' src={Dprofile} alt="awwerds" />
              </div>
              <p className="progress__awards__card__text">Dprofile</p>
            </motion.div>

            <motion.div custom={13} variants={animationOpacityCard} className="progress__awards__card">
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
          <motion.p custom={16} variants={animationOpacity} className='progress__technology__title'>Inspiring with design.
            <span className='progress__technology__title_red' >Empowering through technology. </span></motion.p>
          <div className="progress__technology__info">
            <div className="block"><motion.p variants={animation} custom={17} className="progress__technology__info__text">We are a comprehensive design and technology</motion.p></div>
            <div className="block"><motion.p variants={animation} custom={18} className="progress__technology__info__text">partner for the digital age. We help businesses to</motion.p></div>
            <div className="block"><motion.p variants={animation} custom={19} className="progress__technology__info__text"> innovate and remain highly relevant to their customers</motion.p></div>
            <div className="block"><motion.p variants={animation} custom={20} className="progress__technology__info__text">by developing cutting-edge digital products and</motion.p></div>
            <div className="block"><motion.p variants={animation} custom={21} className="progress__technology__info__text">executing smart and valuable communication.</motion.p></div>
            <motion.p variants={animationOpacity} className="progress__technology__info__text">
            </motion.p>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.3, once: true }}
              className="progress__technology__info__number">
              <div className="block__number">
                <div className="block">
                  <motion.p variants={animation} custom={1} className='progress__technology__info__number_100'>100+</motion.p>
                </div>
                <motion.span custom={6} variants={animationLine} className="line line_number"></motion.span>
                <motion.p variants={animationOpacity} custom={12} className='progress__technology__info__number__text'>Project’s done</motion.p>
              </div>

              <div className="progress__technology__info__number__conteiner">
                <div className="progress__technology__info__number__content">
                  <div className="block"> <motion.p custom={1} variants={animation} className='progress__technology__info__number_small'>5+ </motion.p></div>
                  <motion.p variants={animationOpacity} custom={12} className='progress__technology__info__number__text'>Years of experience </motion.p>
                  <motion.span custom={6} variants={animationLine} className="line line_number"></motion.span>
                </div>
                <div className="progress__technology__info__number__content">
                  <div className="block"> <motion.p custom={1} variants={animation} className='progress__technology__info__number_small'>10+ </motion.p></div>
                  <motion.p variants={animationOpacity} custom={12} className='progress__technology__info__number__text'>Team members</motion.p>
                  <motion.span custom={6} variants={animationLine} className="line line_number"></motion.span>
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