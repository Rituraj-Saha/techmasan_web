import logo from "./logo.svg";
import "./App.css";
import Hero from "./heroSection/Hero";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Steps from "./steps/Steps";
import NavigationBar from "./navigationBar/NavigationBar";
import Contact from "./contact/Contact";
import AlertBox from "./Components/AlertBox/AlertBox";
import ContactForm from "./contact/ContactForm";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Services />
      <Portfolio />
      <Steps />
      <Contact />
      <AlertBox>
        <ContactForm />
      </AlertBox>
    </div>
  );
}

export default App;
