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



  return (
    <section className="comments">
      <div className="comments__container">
        <div className="comments__contents">
          <div className="comments__buttons">
            <img className='comments__buttons__img' src={covichki} alt="Covichki" />
            <button onClick={() => prevComment()} className="comments__button comments__button__prev"><img className='comments__button__img' src={prevWhite} alt="Prev" /></button>
            <button onClick={() => nextComment()} className="comments__button comments__button__next"><img className='comments__button__img' src={nextWhite} alt="Next" /></button>
          </div>

          <div className={`comments__content ${comment === 1 ? "comments__content_active" : ""}`}>
            <p className="comments__content__text">I am pleased to recommend Vide Infra, we have assigned to this company already two projects and they was accomplished perfect — I like their organization of work, their initiative and support, and that they provide assistance after the project is completed. We are satisfied of particular service provided by Vide Infra and we will be glad to continue our cooperation in the future.</p>
            <div className="comments__content__avtor">
              <img className='comments__content__avtor__img' src={liixxx} alt="Avtor" />
              <div className="comments__content__avtor__info">
                <p className="comments__content__avtor__info__name">Silibrate SiberSport</p>
                <p className="comments__content__avtor__info__about">FPS player overwatch 2</p>
              </div>
            </div>
          </div>

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
        <h2 className='comments__title'>About aumi</h2>
        <p className="comments__text">Our agency is about people who love creating, designing and developing wow projects. In the same time we are a boutique agency that is more than the collective. We learn and grow, win and celebrate together.</p>
      </div>
      <img className='comments__img' src={ships} alt="ships" />
      <p className='comments__text comments__text_bottom'>We are happy to present our new website and updated version of Aumi agency. As before we are open for new projects worldwide!</p>
      <p className='comments__text comments__text_bottom'>Would you like to have award winning site or unique branding style, please say hi to our manager — aumi.digital@gmail.com. And we will help you with the pleasure.</p>
      <button className='comments__button__about button'>More about us</button>
    </section>
  );
}

export default Comments;