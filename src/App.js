import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComp from './components/NavbarComp';
import Banner from './components/Banner';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

function App() {

  /*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }*/

  return (
    <div className="App">
      <Router>
        <div className="FirstPart">
          <NavbarComp/>
          <Banner/>
          <About/>
        </div>
        <div className="SecondPart">
          <Portfolio/>
          <Experience/>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
