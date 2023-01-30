import { motion } from "framer-motion";
import covichki from '../../images/covichki.svg';
import nextWhite from '../../images/nextWhite.svg';
import prevWhite from '../../images/prevWhite.svg';
import avtor1 from '../../images/avtor1.svg';
import liixxx from '../../images/liixxx.jpg';
import ships from '../../images/ships.png';
import { useState } from 'react';

const Comments = () => {
  const [comment, setComment] = useState(1);

  const nextComment = () => {
    setComment(comment + 1)
  }
  const prevComment = () => {
    setComment(comment - 1)
  }

  const controlComments = () => {
    if (comment === 4) {
      setComment(1)
    }
    if (comment === 0) {
      setComment(1)
    }
  }

  controlComments();


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
      transition: { duration: 1, delay: 1.6 },
    }
  }

  const animationOpacityImg = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    }
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

  return (
    <section className="comments">
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.8, once: true }}
        className="comments__container">
        <div className="comments__contents">
          <div className="comments__buttons">
            <img className='comments__buttons__img' src={covichki} alt="Covichki" />
            <button onClick={() => prevComment()} className="comments__button comments__button__prev"><img className='comments__button__img' src={prevWhite} alt="Prev" /></button>
            <button onClick={() => nextComment()} className="comments__button comments__button__next"><img className='comments__button__img' src={nextWhite} alt="Next" /></button>
          </div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false }}
            className={`comments__content ${comment === 1 ? "comments__content_active" : ""}`}>
            <div className="block"><motion.p custom={1} variants={animation} className="comments__content__text">I am pleased to recommend Vide Infra, we have assigned to this</motion.p></div>
            <div className="block"><motion.p custom={2} variants={animation} className="comments__content__text">company already two projects and they was accomplished perfect — I</motion.p></div>
            <div className="block"><motion.p custom={3} variants={animation} className="comments__content__text">like their organization of work, their initiative and support, and that they</motion.p></div>
            <div className="block"><motion.p custom={4} variants={animation} className="comments__content__text">provide assistance after the project is completed. We are satisfied of</motion.p></div>
            <div className="block"><motion.p custom={5} variants={animation} className="comments__content__text">particular service provided by Vide Infra and we will be glad to continue</motion.p></div>
            <div className="block"><motion.p custom={6} variants={animation} className="comments__content__text">our cooperation in the future.</motion.p></div>
            <div className="comments__content__avtor">
              <motion.img variants={animationOpacityImg} className='comments__content__avtor__img' src={liixxx} alt="Avtor" />
              <div className="comments__content__avtor__info">
                <div className="block"> <motion.p custom={1} variants={animation} className="comments__content__avtor__info__name">Silibrate SiberSport</motion.p></div>
                <div className="block">  <motion.p custom={2} variants={animation} className="comments__content__avtor__info__about">FPS player overwatch 2</motion.p></div>
              </div>
            </div>
          </motion.div>

          <div className={`comments__content ${comment === 2 ? "comments__content_active" : ""}`}>
            <p className="comments__content__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, ut dolor. Eaque dicta molestiae illo dignissimos enim? Fuga, commodi non blanditiis voluptates dicta placeat, perferendis ducimus enim assumenda earum odio!</p>
            <div className="comments__content__avtor">
              <img className='comments__content__avtor__img' src={avtor1} alt="Avtor" />
              <div className="comments__content__avtor__info">
                <p className="comments__content__avtor__info__name">Roland Citajevs</p>
                <p className="comments__content__avtor__info__about">CIO, Member of the Board at ABLV Bank</p>
              </div>
            </div>
          </div>

          <div className={`comments__content ${comment === 3 ? "comments__content_active" : ""}`}>
            <p className="comments__content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit qui nobis voluptatibus nesciunt. Cum quaerat culpa natus aliquid provident mollitia libero id? Animi quia, nihil tempore error reprehenderit aut!
              Illum cupiditate magnam optio, quasi repellat facere. Quidem, blanditiis. Ex cupiditate deserunt iusto nostrum, fuga hic vel debitis accusantium? Ab explicabo, maxime minima quos id quo nisi a atque. Modi.</p>
            <div className="comments__content__avtor">
              <img className='comments__content__avtor__img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOojLBOu6pvkRBEALguYkT507uG4ot8IvF-w&usqp=CAU' alt="Avtor" />
              <div className="comments__content__avtor__info">
                <p className="comments__content__avtor__info__name">RAp HiP-Hop</p>
                <p className="comments__content__avtor__info__about">CIO, Member of the Board at ABLV Bank</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <motion.h2 custom={2} variants={animation} className='comments__title'>About aumi</motion.h2>
        </div>
        <motion.p variants={animationOpacity} className="comments__text">Our agency is about people who love creating, designing and developing wow projects. In the same time we are a boutique agency that is more than the collective. We learn and grow, win and celebrate together.</motion.p>
      </motion.div>
      <img className='comments__img' src={ships} alt="ships" />
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className="block">
        <motion.p variants={animationOpacityFast} className='comments__text comments__text_bottom'>We are happy to present our new website and updated version of Aumi agency. As before we are open for new projects worldwide!</motion.p>
        <motion.p variants={animationOpacityFast} className='comments__text comments__text_bottom'>Would you like to have award winning site or unique branding style, please say hi to our manager — aumi.digital@gmail.com. And we will help you with the pleasure.</motion.p>
      </motion.div>

      <button className='comments__button__about button'>More about us</button>
    </section>
  );
}

export default Comments;