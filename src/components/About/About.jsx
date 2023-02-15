import ships from '../../images/ships.png';
import { motion } from "framer-motion";

const About = () => {

  const animation = {
    hidden: {
      y: 350,
    },
    visible: custom => ({
      y: 0,
      transition: { delay: custom * 0.2 },
    })
  }

  const animationOpacityFast = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    }
  }

  const animationOpacity = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 1.6 },
    }
  }

  return (
    <div className='about'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className="about__container">
        <div className="block">
          <motion.h2 custom={2} variants={animation} className='about__title'>About aumi</motion.h2>
        </div>
        <motion.p variants={animationOpacity} className="about__text">Our agency is about people who love creating, designing and developing wow projects. In the same time we are a boutique agency that is more than the collective. We learn and grow, win and celebrate together.</motion.p>
        <img className='about__img' src={ships} alt="ships" />
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1, once: true }}
          className="block">
          <motion.p variants={animationOpacityFast} className='about__text about__text_bottom'>We are happy to present our new website and updated version of Aumi agency. As before we are open for new projects worldwide!</motion.p>
          <motion.p variants={animationOpacityFast} className='about__text about__text_bottom'>Would you like to have award winning site or unique branding style, please say hi to our manager — aumi.digital@gmail.com. And we will help you with the pleasure.</motion.p>
        </motion.div>
      </motion.div>

      <form action="/about-us">
        <button className='about__button__about button'>More about us</button>
      </form>
    </div>)
}

export default About;