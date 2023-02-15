import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Comments from "../../components/Comments/Comments";
import arrowBottom from '../../images/arrowBottom.svg';
import avtor1 from '../../images/avtor1.svg';
import { Link } from "react-router-dom";
import { useState } from "react";

import workImg from '../../images/worksHome.png';

const Process = () => {

  const [slide, setSlide] = useState(false);
  console.log("slide", slide)

  return (
    <>
      <Header />
      <section className="process">
        <div className="process__container">
          <div className="process__titles">
            <h2 className={`process__title ${slide ? 'process__title_off' : 'process__title_on'}`}>MVP <span className={slide ? 'process__title_on' : 'process__title_off'} >REDESIGN</span></h2>
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
          <div className="process__block__text">
            <div className="process__subtitle">Principle</div>
            <div className="process__text"> <span>Thoughtful design for people.</span> We start from tasks and user experience.</div>
          </div>

          <div className="process__block__text process__block__text_left">
            <div className="process__subtitle">Whole product</div>
            <div className="process__text"> <span>The result of our work is a —</span> flexible design-system for your product or online service</div>
          </div>
          <p className="process__text_smal">We think about the development of your business even at the stage of agreeing on the terms of reference. Our design is easy to scale and maintain.</p>

          <div className="process__tasks">
            <h2 className="process__tasks__title">Tasks</h2>
            <p className="process__tasks__enumeration process__tasks__enumeration_first">Develop a digital product with a modern design from scratch</p>
            <p className="process__tasks__enumeration">Redesign an existing service or website</p>
            <p className="process__tasks__enumeration">Come up with and implement a new design concept</p>
            <p className="process__tasks__enumeration">Analyze and refine UX/UI</p>
            <p className="process__tasks__enumeration process__tasks__enumeration_last">Study user experience and solve business problems</p>

            <div className="process__block__text process__block__text_left">
              <div className="process__subtitle">Product</div>
              <div className="process__text"> <span>Design for us is not a tool</span> of art and self-realization. We offer economically justified solutions, commensurate with your tasks.</div>
              <p className="process__text_smal process__text_smal_mw323">We create a design that goes into production and benefits the business.</p>
            </div>

            <p className="process__tasks__enumeration process__tasks__enumeration_first">Let's analyze competitors</p>
            <p className="process__tasks__enumeration">Let's study the portrait of the audience</p>
            <p className="process__tasks__enumeration">Conduct interviews with experts</p>
            <p className="process__tasks__enumeration">Let's decipher the behavioral factors</p>
            <p className="process__tasks__enumeration process__tasks__enumeration_last">We will offer options for solving a business problem</p>

            <Link to={'/'} className="process__tasks__link">
              <img className="process__tasks__link__img" src={workImg} alt="Work" />
              <p className="process__tasks__link__subtitle">Product</p>
              <p className="process__tasks__link__title">House T</p>
            </Link>

            <div className="process__block__text process__block__text_left process__block__text_mw961">
              <div className="process__subtitle">An approach</div>
              <div className="process__text"> <span>An integrated approach</span>  to your product.</div>
            </div>

            <p className="process__tasks__enumeration process__tasks__enumeration_first">Emphasis on user convenience</p>
            <p className="process__tasks__enumeration">Optimization for search robots</p>
            <p className="process__tasks__enumeration">Integrations with external platforms</p>
            <p className="process__tasks__enumeration">Successful solutions in terms of marketing</p>
            <p className="process__tasks__enumeration process__tasks__enumeration_last">Thoughtful and economical layout</p>

            <div className="process__block__text process__block__text_left process__block__text_mw773">
              <div className="process__subtitle">Attention to detail</div>
              <div className="process__text"> <span>Different tasks —</span> different approach</div>
              <p className="process__text_smal process__text_smal_mw415">Typography and modularity, balanced style and overall aesthetics. Every detail is important: it affects the impression and behavior of users.</p>
            </div>

            <div className="process__tasks__development">
              <div className="process__tasks__development__card">
                <p className="process__tasks__development__card__title">Development or development of an online service</p>
                <p className="process__tasks__development__card__text">We design with an emphasis on analytics and user experience. We help you refine and improve your product. We rely on numbers and research.</p>
              </div>

              <div className="process__tasks__development__card">
                <p className="process__tasks__development__card__title">Development or development of an online service</p>
                <p className="process__tasks__development__card__text">We will develop a design concept that will captivate your future customers. Convenient interfaces, thoughtful structure, catchy animations are a good investment in your startup.</p>
              </div>

              <div className="process__tasks__development__card">
                <p className="process__tasks__development__card__title">Development or development of an online service</p>
                <p className="process__tasks__development__card__text">Our design performs exactly the functions that are needed. We create interfaces that are easy to master even for inexperienced users.</p>
              </div>
            </div>

            <Link to={'/'} className="process__tasks__link">
              <img className="process__tasks__link__img" src={workImg} alt="Work" />
              <p className="process__tasks__link__subtitle">Product</p>
              <p className="process__tasks__link__title">House T</p>
            </Link>

            <div className="process__block__text process__block__text_left process__block__text_mw1656">
              <div className="process__subtitle">Clear process</div>
              <div className="process__text process__text_fs96"> <span>We will develop a design</span> concept and bring it to implementation. From the first stages, you will learn how the site will look in "combat mode".</div>
            </div>
          </div>
        </div>
        <div className="process__why">
          <div className="process__container">
            <h3 className="process__why__title">Why are we?</h3>
            <div className="process__why__cards">
              <div className="process__why__card">
                <p className="process__why__card__number">1</p>
                <p className="process__why__card__text">Our team has a consistently high level of work, which is confirmed by dozens of awards in international competitions.</p>
              </div>

              <div className="process__why__card">
                <p className="process__why__card__number">2</p>
                <p className="process__why__card__text">We understand how the project will develop, lay the possibility of scaling, save your budget in the future.</p>
              </div>

              <div className="process__why__card">
                <p className="process__why__card__number">3</p>
                <p className="process__why__card__text">We solve your current problems based on experience and expertise. We know how to avoid 99% of the risks in working with large projects.</p>
              </div>

              <div className="process__why__card">
                <p className="process__why__card__number">4</p>
                <p className="process__why__card__text">We offer thoughtful and reasonable solutions. You clearly understand why every detail in the design is needed.</p>
              </div>

              <div className="process__why__card">
                <p className="process__why__card__number">5</p>
                <p className="process__why__card__text">Guaranteed result at the portfolio levelwithin the given task. Your project is in the hands of experienced professionals.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="process__container">
          <div className="process__block__text process__block__text_left process__block__text_mw961">
            <div className="process__subtitle">Models</div>
            <div className="process__text process__text_fs96"> <span>We use different</span> models of work</div>
          </div>
          <p className="process__tasks__enumeration process__tasks__enumeration_first">Outsourcing</p>
          <p className="process__tasks__enumeration">Outstaff</p>
          <p className="process__tasks__enumeration">Project Team</p>
          <p className="process__tasks__enumeration process__tasks__enumeration_last">Design support</p>

          <div className="process__price">
            <h3 className="process__price__title">Price</h3>
            <div className="process__price__container">
              <p className="process__price__text">The cost depends on the number of additional services and corporate identity elements.</p>
              <div className="process__price__comment">
                <div className="process__block__text process__block__text_pt0 process__block__text_left process__block__text_mw807 process__block__text_pt0">
                  <div className="process__subtitle">Experience</div>
                  <div className="process__text"> <span>The design we</span> develop provides real and reasonable added value to our customers' products and services.</div>
                </div>
                <div className="process__price__comment__user">
                  <img className="process__price__comment__user__img" src={avtor1} alt="User" />
                  <div className="process__price__comment__user__info">
                    <p className="process__price__comment__user__info__title">Roland Citajevs</p>
                    <p className="process__price__comment__user__info__subtitle">Ceo-Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Comments />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Process;