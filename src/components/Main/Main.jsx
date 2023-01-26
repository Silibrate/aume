import AumiInfo from "../AumiInfo/AumiInfo";
import Creative from "../Creative/Creative";
import Slider from "../Slider/Slider";
import Progress from "../Progress/Progress";
import Work from "../Work/Work";
import Comments from "../Comments/Comments";
import AumiForm from "../AumiForm/AumiForm";
import Header from "../Header/Header";

const Main = ({ isOpenMenu, openMenu, closeMenu }) => {
  return (
    <>
      <Header
        isOpenMenu={isOpenMenu}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <AumiInfo />
      <Creative />
      <Slider />
      <Progress />
      <Work />
      <Comments />
      <AumiForm />
    </>
  );
}

export default Main;