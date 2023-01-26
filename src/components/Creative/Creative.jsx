import { motion } from "framer-motion"

const Creative = () => {
  const animation = {
    hidden: {
      y: 720,
      opacity: 0,

    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  return (
    <section
      className="creative">
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.5, once: true }}
        className="creative__container">
        <p className="creative__text">We call it</p>
        <motion.h1 variants={animation}  className="creative__title">CREATIVE DESIGN <button className="creative__button button">Get to know us</button> </motion.h1>
      </motion.div>
    </section>
  );
}

export default Creative;