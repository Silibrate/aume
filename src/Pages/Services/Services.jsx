import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import sevicesLinkImg from '../../images/services/sevicesLinkImg.png';

const Services = () => {
  return (
    <>
      <Header />
      <section className="services">
        <div className={`services__titles`}>
          <h2 className="services__title services__title_left">We only do <span>what</span></h2>
          <h2 className="services__title services__title_right">we do <span>best</span></h2>
        </div>
        <nav className="services__nav">
          <Link to={'/services-brand'} className="services__nav__link">
            <div className="services__nav__link__titles">
              <h3 className="services__nav__link__title">Brand</h3>
              <p className="services__nav__link__subtitle">Unique brand identities that make a mark.</p>
            </div>
            <img className="services__nav__link__img" src={sevicesLinkImg} alt="Brand" />
          </Link>

          <Link className="services__nav__link">
            <div className="services__nav__link__titles">
              <h3 className="services__nav__link__title">Product</h3>
              <p className="services__nav__link__subtitle">Unique brand identities that make a mark.</p>
            </div>
            <img className="services__nav__link__img" src={sevicesLinkImg} alt="Brand" />
          </Link>
        </nav>
      </section>
      <Footer />
    </>
  );
}

export default Services;