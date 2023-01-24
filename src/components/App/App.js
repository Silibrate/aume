import Header from "../Header/Header";
import AumiInfo from "../AumiInfo/AumiInfo";
import Creative from "../Creative/Creative";
import Slider from "../Slider/Slider";
import Progress from "../Progress/Progress";
import Work from "../Work/Work";
import Comments from "../Comments/Comments";
import AumiForm from "../AumiForm/AumiForm";
import Footer from "../Footer/Footer";
import { useState } from "react";


function App() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const openMenu = () => {
    setIsOpenMenu(true)
  }
  const closeMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default App;
