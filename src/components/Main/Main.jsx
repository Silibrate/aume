import AumiInfo from "../AumiInfo/AumiInfo";
import Creative from "../Creative/Creative";
import Slider from "../Slider/Slider";
import Progress from "../Progress/Progress";
import Work from "../Work/Work";
import Comments from "../Comments/Comments";
import AumiForm from "../AumiForm/AumiForm";
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = ({ languageText }) => {
  return (
    <>
      <Header />
      <AumiInfo
        languageText={languageText}
      />
      <Creative
        languageText={languageText}
      />
      <Slider
        languageText={languageText}
      />
      <Progress
        languageText={languageText}
      />
      <Work
        languageText={languageText}
      />
      <Comments
        languageText={languageText}
      />
      <About
        languageText={languageText}
      />
      <AumiForm
        languageText={languageText}
      />
      <Footer 
      languageText={languageText}
      />
    </>
  );
}

export default Main;