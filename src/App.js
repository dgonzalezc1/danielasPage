import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComp from './components/NavbarComp';
import Banner from './components/Banner';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="FirstPart">
          <NavbarComp/>
          <Banner/>
          <About/>
        </div>
        <Portfolio/>
        
      </Router>
    </div>
  );
}

export default App;
