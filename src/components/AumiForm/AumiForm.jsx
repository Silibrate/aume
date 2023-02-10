import { motion } from "framer-motion"

const AumiForm = () => {

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
    <section className="aumiForm">
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true }}
        className="aumiForm__container">
        <div className="block block_form">
          <div className="block"> <motion.h2 variants={animation} custom={1} className="aumiForm__title">Let's make a </motion.h2></div>
          <motion.h2 variants={animation} custom={2} className="aumiForm__title"> winning team</motion.h2>
        </div>
        <form className="aumiForm__form" action="submit">
          <input className="aumiForm__form__input" required placeholder="First name *" type="text" />
          <input className="aumiForm__form__input" required placeholder="Last name *" type="text" />
          <input className="aumiForm__form__input" placeholder="Phone" type="tel" />
          <input className="aumiForm__form__input" required placeholder="Email *" type="email" />
          <input className="aumiForm__form__input" placeholder="Company Name" type="text" />
          <textarea className="aumiForm__form__input" placeholder="Enter your project details here" name="comment"></textarea>
          <button className="aumiForm__form__button" type="submit">Submit</button>
        </form>
      </motion.div>

    </section>
  );
}

export default AumiForm;