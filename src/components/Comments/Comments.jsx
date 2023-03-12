import covichki from '../../images/covichki.svg';
import nextWhite from '../../images/nextWhite.svg';
import prevWhite from '../../images/prevWhite.svg';
import avtor1 from '../../images/avtor1.svg';
import liixxx from '../../images/liixxx.jpg';
import { useState } from 'react';

const Comments = ({ languageText, ru }) => {
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
            <p className={`comments__content__text ${ru ? 'comments__content__text_ru' : ''}`}>{languageText('commentsContentTextOne')} </p>
            <div className="comments__content__avtor">
              <img className='comments__content__avtor__img' src={liixxx} alt="Avtor" />
              <div className="comments__content__avtor__info">
                <p className={`comments__content__avtor__info__name ${ru ? 'comments__content__avtor__info__name_ru' : ''}`}>{languageText('commentsContentAvtorInfoNameOne')}</p>
                <p className={`comments__content__avtor__info__about ${ru ? 'comments__content__avtor__info__about_ru' : ''}`}>{languageText('commentsContentAvtorInfoAboutOne')}</p>
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
      </div>
    </section >
  );
}

export default Comments;