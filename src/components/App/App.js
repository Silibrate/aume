import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Works from "../../Pages/Works/Works";
import WorksVivaldis from "../../Pages/WorksVivaldis/WorksVivaldis";
import News from "../../Pages/News/News";
import NewsFinalist from "../../Pages/NewsFinalist/NewsFinalist";
import Services from "../../Pages/Services/Services";
import ServicesBrand from "../../Pages/ServicesBrand/ServicesBrand";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Process from "../../Pages/Process/Process";
import Contact from "../../Pages/Contact/Contact";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const ru = t('aumiInfoTitleOne') === "Дизайн.";
  return (
    <div className={`App`}>
      <Routes>
        <Route path='/' element={<Main
          languageText={t}
          ru={ru}
        />} />

        <Route path='/about-us' element={<AboutUs />} />

        <Route path='/works' element={<Works />} />

        <Route path='/works-vivaldis' element={<WorksVivaldis />} />

        <Route path="/news" element={<News
          languageText={t}
        />} />

        <Route path='/news-finalist' element={<NewsFinalist />} />

        <Route path='/services' element={<Services />} />

        <Route path='/services-brand' element={<ServicesBrand />} />

        <Route path='/process' element={<Process />} />

        <Route path='/contact' element={<Contact />} />

        <Route path="*" element={<ErrorPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
