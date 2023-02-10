import { Link } from "react-router-dom";
import worksArrow from '../../images/worksArrow.svg';
import worksHome from '../../images/worksHome.png';
import worcksKerpich from '../../images/worcksKerpich.png';
import bunka from '../../images/bunka.png';
import worksBunkaBig from '../../images/worksBunkaBig.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Works = () => {

  return (
    <>
      <Header/>
      <section className="works">
        <div className="works__container">
          <div className={`works__titles`}>
            <h2 className="works__title works__title_left">We love creating</h2>
            <h2 className="works__title works__title_right">to design the future</h2>
          </div>

          <div className="works__projects">
            <div className="works__projects__title-block">
              <h2 className="works__projects__title">Recent projects</h2>
              <div className="works__projects__title-block__format">
                <p className="format format_sorting">UX/UI</p>
                <p className="format format_sorting">Branding</p>
                <p className="format format_sorting">Development</p>
              </div>
            </div>

            <div className="works__projects__card">
              <div className="works__projects__card__container">
                <div className="works__projects__card__info">
                  <div className="works__projects__card__info__container">
                    <h3 className="works__projects__card__title">House T</h3>
                    <div className="works__projects__card__format">
                      <p className="format">UX/UI</p>
                      <p className="format">3D</p>
                    </div>
                  </div>
                  <Link className='button_arrow'>See in live <img className="button_arrow__img" src={worksArrow} alt="arrow" /></Link>
                </div>
                <p className="works__projects__card__text">Augmenteers is a platform for online retailers to increase performance with 3D product visualizations. We designed and developed a user-friendly experience that lets customers configure the product, scan the QR code and see the model in their room using AR technology. We implemented the front end of the web app in React.js.</p>
              </div>
              <div className="works__projects__card__imgs">
                <img src={worksHome} alt="Home" className="works__projects__card__img" />
                <img src={worksHome} alt="Home" className="works__projects__card__img" />
              </div>
            </div>

            <div className="works__projects__card">
              <div className="works__projects__card__container">
                <div className="works__projects__card__info">
                  <div className="works__projects__card__info__container">
                    <h3 className="works__projects__card__title">House T</h3>
                    <div className="works__projects__card__format">
                      <p className="format">UX/UI</p>
                      <p className="format">3D</p>
                    </div>
                  </div>
                  <Link className='button_arrow'>See in live <img className="button_arrow__img" src={worksArrow} alt="arrow" /></Link>
                </div>
                <p className="works__projects__card__text">Augmenteers is a platform for online retailers to increase performance with 3D product visualizations. We designed and developed a user-friendly experience that lets customers configure the product, scan the QR code and see the model in their room using AR technology. We implemented the front end of the web app in React.js.</p>
              </div>
              <div className="works__projects__card__imgs">
                <img src={worcksKerpich} alt="Kerpich" className="works__projects__card__img works__projects__card__img_kerpich" />
              </div>
            </div>

            <div className="works__projects__card">
              <div className="works__projects__card__container">
                <div className="works__projects__card__info">
                  <div className="works__projects__card__info__container">
                    <h3 className="works__projects__card__title">House T</h3>
                    <div className="works__projects__card__format">
                      <p className="format">UX/UI</p>
                      <p className="format">3D</p>
                    </div>
                  </div>
                  <Link className='button_arrow'>See in live <img className="button_arrow__img" src={worksArrow} alt="arrow" /></Link>
                </div>
                <p className="works__projects__card__text">Augmenteers is a platform for online retailers to increase performance with 3D product visualizations. We designed and developed a user-friendly experience that lets customers configure the product, scan the QR code and see the model in their room using AR technology. We implemented the front end of the web app in React.js.</p>
              </div>
              <div className="works__projects__card__imgs">
                <img src={bunka} alt="Kerpich" className="works__projects__card__img works__projects__card__img_bunka" />
                <img src={worksBunkaBig} alt="Kerpich" className="works__projects__card__img works__projects__card__img_bunka-big" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Works;