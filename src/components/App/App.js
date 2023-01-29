import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Works from "../../Pages/Works/Works";
import News from "../../Pages/News/News";
import NewsFinalist from "../../Pages/NewsFinalist/NewsFinalist";
import Footer from "../Footer/Footer";
import { useState } from "react";


function App() {

  const body = document.querySelector('.body');

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const openMenu = () => {
    setIsOpenMenu(true)
    body.style.overflow = 'hidden';
  }
  const closeMenu = () => {
    setIsOpenMenu(false)
    body.style.overflow = 'auto';
  }

  return (
    <div className={`App ${isOpenMenu ? "App_hiden" : ""}`}>
      <Routes>
        <Route path='/' element={<Main
          isOpenMenu={isOpenMenu}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />} />

        <Route path='/works' element={<Works
          isOpenMenu={isOpenMenu}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />} />

        <Route path="/news" element={<News
          isOpenMenu={isOpenMenu}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />} />

        <Route path="news-finalist" element={<NewsFinalist
          isOpenMenu={isOpenMenu}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
