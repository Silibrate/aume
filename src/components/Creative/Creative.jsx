import { motion } from "framer-motion"

const Creative = () => {
  const animation = {
    hidden: {
      y: 350,
    },
    visible: custom => ({
      y: 0,
      transition: { delay: custom * 0.2 },
    })
  }

  const animationTop = {
    hidden: {
      y: 150,
    },
    visible: custom => ({
      y: 0,
    })
  }

  const animationLine = {
    hidden: {
      width: 0,
    },
    visible: custom => ({
      width: '90%',
      transition: { delay: custom * 0.2 }
    })
  }


  return (
    <section
      className="creative" >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true }}
        className="creative__container">
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className="block"><motion.p variants={animationTop} className="creative__text">We call it <motion.span custom={9} variants={animationLine} className="line"></motion.span></motion.p></motion.div>
        <motion.div
          className="block"><motion.p custom={11} variants={animation} className="creative__title creative__title_one">CREATIVE</motion.p></motion.div>
        <motion.p custom={12} variants={animation} className="creative__title creative__title_two">DESIGN</motion.p>
        <button className="creative__button button">Get to know us</button>
      </motion.div>
    </section >
  );
}

export default Creative;