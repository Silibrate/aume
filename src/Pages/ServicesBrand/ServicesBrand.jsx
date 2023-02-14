import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import humen from '../../images/servicesBrand/humen.png';
import servicesBrandCirkol from '../../images/servicesBrand/servicesBrandCirkol.png';
import servicesBrandCTMK from '../../images/servicesBrand/servicesBrandCTMK.png';

const ServicesBrand = () => {
  return (
    <>
      <Header />
      <section className="servicesBrand">
        <div className="servicesBrand__container">
          <div className="servicesBrand__block__left">
            <p className="servicesBrand__subtitle">Brand</p>
            <h2 className="servicesBrand__block__left__title">Design that stands out and scales up</h2>
            <p className="servicesBrand__block__left__text">Grounded in research and insights, we uncover your brand’s unique DNA. Then we bring it to life with creative systems that let it flex, grow, and thrive in the real, ever-changing world.</p>
          </div>

          <div className="servicesBrand__block__right">
            <p className="servicesBrand__block__right__text">Brand Strategy</p>
            <p className="servicesBrand__block__right__text">Brand Messaging</p>
            <p className="servicesBrand__block__right__text">Naming Systems</p>
            <p className="servicesBrand__block__right__text">Voice + Tone Guidelines</p>
            <p className="servicesBrand__block__right__text">Campaign Planning</p>
            <p className="servicesBrand__block__right__text">Campaign Creative</p>
            <p className="servicesBrand__block__right__text">Brand Identity</p>
            <p className="servicesBrand__block__right__text">Logo Design</p>
            <p className="servicesBrand__block__right__text">Icons</p>
            <p className="servicesBrand__block__right__text">Illustration</p>
            <p className="servicesBrand__block__right__text">Color Palettes</p>
            <p className="servicesBrand__block__right__text">Typography Systems</p>
            <p className="servicesBrand__block__right__text">Art + Photography Direction</p>
            <p className="servicesBrand__block__right__text">Brand Guidelines</p>
            <p className="servicesBrand__block__right__text">Website Design</p>
            <p className="servicesBrand__block__right__text">Website Copywriting</p>
            <p className="servicesBrand__block__right__text">Marketing Collateral</p>
            <div className="servicesBrand__block__right__info">
              <p className="servicesBrand__block__right__info__case">Case studies</p>
              <img className="servicesBrand__block__right__info__img" src={humen} alt="Humen" />
              <p className="servicesBrand__block__right__info__title">Cambrian Biopharma</p>
              <p className="servicesBrand__block__right__info__subtitle">Developing a timeless brand identity for a new age of growth</p>
              <img className="servicesBrand__block__right__info__img" src={servicesBrandCirkol} alt="Circol" />
              <p className="servicesBrand__block__right__info__title">Aumni</p>
              <img className="servicesBrand__block__right__info__img" src={servicesBrandCTMK} alt="CTMK" />
              <p className="servicesBrand__block__right__info__title">CTMK*</p>
              <a href="#" className="servicesBrand__block__right__info__link">View more</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ServicesBrand;