import { motion } from "framer-motion";

const AumiInfo = () => {

  const animation = {
    hidden: {
      y: 100,
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
      opacity: 0.7,
      transition: { duration: 1, delay: 1.6 },
    }
  }

  return (
    <div className="aumiInfo">
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className="aumiInfo__container">
        <motion.div
          className="aumiInfo__title__container">
          <div className="aumiInfo__title__contant">
            <motion.h2 custom={1} variants={animation} className="aumiInfo__title aumiInfo__title_one">Design.</motion.h2>
            <motion.h2 custom={2} variants={animation} className="aumiInfo__title aumiInfo__title_two">Development.</motion.h2>
          </div>
          <motion.h2 custom={3} variants={animation} className="aumiInfo__title">Mastership.</motion.h2>
        </motion.div>
        <motion.p variants={animationOpacity} className="aumiInfo__text ">AumiDigtial is a design and strategy company with an adaptive approach to problem-solving.</motion.p>
        <button className="aumiInfo__button button">Get in touch</button>
      </motion.div>
    </div>
  );
}

export default AumiInfo;