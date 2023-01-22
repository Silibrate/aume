import Header from "../Header/Header";
import AumiInfo from "../AumiInfo/AumiInfo";
import Creative from "../Creative/Creative";
import Slider from "../Slider/Slider";
import Progress from "../Progress/Progress";
import Work from "../Work/Work";
import Comments from "../Comments/Comments";
import AumiForm from "../AumiForm/AumiForm";


function App() {

  return (
    <div className="App">
      <Header />
      <AumiInfo />
      <Creative />
      <Slider />
      <Progress />
      <Work />
      <Comments/>
      <AumiForm/>
    </div>
  );
}

export default App;
