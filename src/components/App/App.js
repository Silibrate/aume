import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Works from "../../Pages/Works/Works";
import WorksVivaldis from "../../Pages/WorksVivaldis/WorksVivaldis";
import News from "../../Pages/News/News";
import NewsFinalist from "../../Pages/NewsFinalist/NewsFinalist";
import Services from "../../Pages/Services/Services";
import ServicesBrand from "../../Pages/ServicesBrand/ServicesBrand";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";


function App() {
  return (
    <div className={`App`}>
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/about-us' element={<AboutUs />} />

        <Route path='/works' element={<Works />} />

        <Route path='/works-vivaldis' element={<WorksVivaldis />} />

        <Route path="/news" element={<News />} />

        <Route path='/news-finalist' element={<NewsFinalist />} />
        
        <Route path='/services' element={<Services />} />

        <Route path='/services-brand' element={<ServicesBrand />} />

        <Route path="*" element={<ErrorPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
