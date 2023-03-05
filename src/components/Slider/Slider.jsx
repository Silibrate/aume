import React from "react";
import { Link } from "react-router-dom";
import arrowRight from '../../images/arrowRight.svg';
import sliderCircol from '../../images/sliderCircol.svg';
import "./slick.css";
import "./slick-theme.css";
import { useEffect } from "react";

const MySlider = ({languageText}) => {

  useEffect(() => {
    const cursor = document.querySelector('.follow-cursor');
    const cursorFolow = () => {
      window.addEventListener('mousemove', (event) => {
        if (event.target.className === 'slider__card__container_circle') {
          const mouseX = event.offsetX;
          const mouseY = event.offsetY;
          cursor.style.left = Math.floor(mouseX) + 'px';
          cursor.style.top = Math.floor(mouseY) + 'px';
        } else {
          cursor.style.left = 50 + '%';
          cursor.style.top = 50 + '%';
        }
      });
    }
    cursorFolow();
  }, [])


  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__card slider__card_branding">
          <Link className="slider__card__link" to='/branding'>
            <div className="slider__card__container">
              <h2 className="slider__card__title">{languageText('sliderCardTitleBranding')}</h2>
              <div className="slider__card__arrow">
                <img className="slider__card__arrow__img_1" src={arrowRight} alt="arrow" />
                <img className="slider__card__arrow__img_2" src={arrowRight} alt="arrow" />
              </div>
            </div>
          </Link>
        </div>

        <div className="slider__card slider__card_product">
          <Link className="slider__card__link" to='/product'>
            <div className="slider__card__container">
              <h2 className="slider__card__title">UI/UX</h2>
              <div className="slider__card__arrow">
                <img className="slider__card__arrow__img_1" src={arrowRight} alt="arrow" />
                <img className="slider__card__arrow__img_2" src={arrowRight} alt="arrow" />
              </div>
            </div>
          </Link>
        </div>

        <div className="slider__card slider__card_development">
          <Link className="slider__card__link" to='/development'>
            <div className="slider__card__container">
              <h2 className="slider__card__title">{languageText('sliderCardTitleDevelopment')}</h2>
              <div className="slider__card__arrow">
                <img className="slider__card__arrow__img_1" src={arrowRight} alt="arrow" />
                <img className="slider__card__arrow__img_2" src={arrowRight} alt="arrow" />
              </div>
            </div>
          </Link>
        </div>

        <div className="slider__card slider__card_circle">
          <div className="slider__card__container_circle">
            <img className="slider__card__img " src={sliderCircol} alt="Circul" />
            <div className="follow-cursor"></div>
          </div>
          <div className="slider__card__img_bg-one"> </div>
          <div className="slider__card__img_bg-two"> </div>
          <div className="slider__card__img_bg-three"> </div>
        </div>
      </div>
    </div>
  );
}

export default MySlider;