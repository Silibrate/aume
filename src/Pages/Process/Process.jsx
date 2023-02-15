import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import arrowBottom from '../../images/arrowBottom.svg';
import { useEffect, useRef, useState } from "react";

const Process = () => {

  const [slide, setSlide] = useState(false);
  console.log("slide", slide)

  return (
    <>
      <Header />
      <section className="process">
        <div className="process__container">
          <div className="process__titles">
            <h2 className="process__title">MVP <span>REDESIGN</span></h2>
            <label onChange={() => { setSlide(state => !state) }} className="switch">
              <input className="search__checkbox" type="checkbox" />
              <span className="sliderMVP round"></span>
            </label>
          </div>

          {slide ?
            <div className="process__info">
              <div className="process__info__arrow">
                <div className="process__info__arrow__block">
                  <img className="arrow-bottom__img process__info__arrow__block__img" src={arrowBottom} alt="ArrowBottom" />
                </div>
                <p className="process__info__arrow__text">Relying on context-driven design, we reconsider digital solutions to achieve your primary business objectives.</p>
              </div>

              <div className="process__info__card process__info__card_first">
                <div className="process__info__card__title">UX RESEARCH</div>
                <p className="process__info__card__text">PRODUCT DEFENITION <sup>1</sup></p>
                <p className="process__info__card__text">RESEARCH & ANALYSIS <sup>2</sup></p>
                <p className="process__info__card__text">IDEATION <sup>3</sup></p>
              </div>

              <div className="process__info__card">
                <div className="process__info__card__title">UX DESIGN</div>
                <p className="process__info__card__text">PROTOTYPING <sup>4</sup></p>
                <p className="process__info__card__text">USER-TESTING <sup>5</sup></p>
              </div>

              <div className="process__info__card">
                <div className="process__info__card__title">UI DESIGN</div>
                <p className="process__info__card__text">MOODBOARDS <sup>6</sup></p>
                <p className="process__info__card__text">CONCEPT <sup>7</sup></p>
                <p className="process__info__card__text">FINAL DESIGN <sup>8</sup></p>
              </div>

              <div className="process__info__card ">
                <div className="process__info__card__title">DELIVERY</div>
              </div>
            </div>
            :
            <div className="process__info">
              <div className="process__info__arrow">
                <div className="process__info__arrow__block">
                  <img className="arrow-bottom__img process__info__arrow__block__img" src={arrowBottom} alt="ArrowBottom" />
                </div>
                <p className="process__info__arrow__text">Leveraging a human-centered design methodology, we create solutions tailored to the needs of your target audience and aimed at growing your business.</p>
              </div>

              <div className="process__info__card process__info__card_first">
                <div className="process__info__card__title">UX RESEARCH</div>
                <p className="process__info__card__text">PRODUCT DEFENITION <sup>1</sup></p>
                <p className="process__info__card__text">RESEARCH & ANALYSIS <sup>2</sup></p>
                <p className="process__info__card__text">IDEATION <sup>3</sup></p>
              </div>

              <div className="process__info__card">
                <div className="process__info__card__title">UX DESIGN</div>
                <p className="process__info__card__text">PROTOTYPING <sup>4</sup></p>
                <p className="process__info__card__text">USER-TESTING <sup>5</sup></p>
                <p className="process__info__card__text">WIREFRAMING <sup>6</sup></p>
              </div>

              <div className="process__info__card">
                <div className="process__info__card__title">UI DESIGN</div>
                <p className="process__info__card__text">MOODBOARDS <sup>7</sup></p>
                <p className="process__info__card__text">CONCEPT <sup>8</sup></p>
                <p className="process__info__card__text">FINAL DESIGN <sup>9</sup></p>
              </div>

              <div className="process__info__card ">
                <div className="process__info__card__title">DELIVERY</div>
              </div>
            </div>
          }
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Process;