import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import arrowBottom from "../../images/arrowBottom.svg";
import imgOne from "../../images/works-vivaldis/imgOne.png";

const WorksVivaldis = () => {
  return (
    <>
      <Header />
      <section className="works-vivaldis">
        <div className="works-vivaldis__container">
          <div className="works-vivaldis__titles__container">
            <h2 className="works-vivaldis__title"><span className="works-vivaldis__title_red">©2021</span><span>Vivaldis</span>payroll</h2>
            <div className="works-vivaldis__format">
              <p className="format">UX/UI</p>
              <p className="format">3D</p>
            </div>
          </div>
          <div className="works-vivaldis__info">
            <p className="works-vivaldis__info__text">What started as a simple app that matched students with companies, quickly grew to become a leading digital payroll tool. Appart helped design and launch the brand and has been their go-to product and design partner since launch. </p>
            <img className="arrow-bottom__img works-vivaldis__info__arrow-img" src={arrowBottom} alt="Arrow-Bottom" />
          </div>
          <img className="works-vivaldis__imgOne" src={imgOne} alt="imgOne" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WorksVivaldis;