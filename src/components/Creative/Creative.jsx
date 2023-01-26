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

  return (
    <section
      className="creative">
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3, once: true }}
        className="creative__container">
        <p className="creative__text">We call it</p>
        <motion.div
          className="test"><motion.p custom={1} variants={animation} className="creative__title creative__title_one">CREATIVE</motion.p></motion.div>
        <motion.p custom={2} variants={animation} className="creative__title creative__title_two">DESIGN</motion.p>
        <button className="creative__button button">Get to know us</button>
      </motion.div>
    </section>
  );
}

export default Creative;