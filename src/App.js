import logo from "./logo.svg";
import "./App.css";
import Hero from "./heroSection/Hero";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Steps from "./steps/Steps";
import NavigationBar from "./navigationBar/NavigationBar";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Services />
      <Portfolio />
      <Steps />
      <Contact />
    </div>
  );
}

export default App;
