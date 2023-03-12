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

const Main = ({ languageText, ru }) => {
  return (
    <>
      <Header />
      {/*    <AumiInfo
        languageText={languageText}
        ru={ru}
      />
      <Creative
        languageText={languageText}
        ru={ru}
      />
      <Slider
        languageText={languageText}
        ru={ru}
      />
      <Progress
        languageText={languageText}
        ru={ru}
      /> */}
      {/*    <Work
        languageText={languageText}
        ru={ru}
      /> */}
      <Comments
        languageText={languageText}
        ru={ru}
      />
      <About
        languageText={languageText}
        ru={ru}
      />
      <AumiForm
        languageText={languageText}
        ru={ru}
      />
      {/* 
      <Footer
        languageText={languageText}
        ru={ru}
      /> */}
    </>
  );
}

export default Main;