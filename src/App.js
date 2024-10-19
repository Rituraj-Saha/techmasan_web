import logo from "./logo.svg";
import "./App.css";
import Hero from "./heroSection/Hero";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Steps from "./steps/Steps";

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Portfolio />
      <Steps />
    </div>
  );
}

export default App;
