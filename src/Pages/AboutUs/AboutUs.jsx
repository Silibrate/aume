import Header from "../../components/Header/Header";
import Progress from "../../components/Progress/Progress";
import AumiForm from "../../components/AumiForm/AumiForm";
import Footer from "../../components/Footer/Footer";
import aboutUs from '../../images/aboutUs/aboutUs.png';
import aboutUsTeam from '../../images/aboutUs/aboutUsTeam.png';
import aboutUsUser from '../../images/aboutUs/aboutUsUser.png';

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="aboutUs">
        <div className={`aboutUs__titles`}>
          <h2 className="aboutUs__title aboutUs__title_left">We’re AumiDigital</h2>
          <h2 className="aboutUs__title aboutUs__title_right">Design <span>+ Strategy</span></h2>
          <img className="aboutUs__titles__img" src={aboutUs} alt="aboutUs" />
        </div>
        <p className="aboutUs__text">We focus on the design and development of websites, online services and ERP systems.</p>
        <img className="aboutUs__img__team" src={aboutUsTeam} alt="aboutUsTeam" />
        <div className="aboutUs__expertise">
          <h2 className="aboutUs__expertise__title">Expertise</h2>
          <div className="aboutUs__expertise__info">
            <div className="aboutUs__expertise__info__left">
              <p className="aboutUs__expertise__info__title">About us</p>
              <div className="aboutUs__expertise__info__left__block">
                <p className="aboutUs__expertise__info__text">We accumulate expertise within the team and implement all our capabilities on projects. We offer several options for solving your problem.</p>
                <p className="aboutUs__expertise__info__text">We give you the opportunity to communicate with experts directly.</p>
              </div>
            </div>

            <div className="aboutUs__expertise__info__right">
              <p className="aboutUs__expertise__info__title">An approach</p>
              <p className="aboutUs__expertise__info__text aboutUs__expertise__info__text_right"> <span>We believe that the client at each</span> stage must understand what is happening with the project. Building transparent processes with Jira and Trello. We work in different formats, starting from business tasks:
              </p>
              <p className="aboutUs__expertise__info__text aboutUs__expertise__info__text_right">Outstaffing, Time&Material, Fixed price and Retainer.</p>
            </div>
          </div>
          <p className="aboutUs__expertise__info__title aboutUs__expertise__info__title_bottom">Accents</p>
          <p className="aboutUs__expertise__info__text_main"><span>Design and technology —</span> are just tools for solving business problems. The result of our work — is a product made on time and within the expectations of the customer.</p>


          <div className="aboutUs__expertise__comment">
            <p className="aboutUs__expertise__info__title aboutUs__expertise__info__title_bottom">Accents</p>
            <p className="aboutUs__expertise__comment__text"> <span>We are responsible for</span> the quality of our projects. We provide technical and analytical support. We are proud of every case.</p>
            <div className="aboutUs__expertise__comment__user">
              <img className="aboutUs__expertise__comment__user__img" src={aboutUsUser} alt="User" />
              <div className="aboutUs__expertise__comment__user__info">
                <p className="aboutUs__expertise__comment__user__name">Roland Citajevs</p>
                <p className="aboutUs__expertise__comment__user__about">Ceo-Founder</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Progress />
      <AumiForm />
      <Footer />
    </>
  );
}

export default AboutUs;