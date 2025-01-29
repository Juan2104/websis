import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import { useEffect } from "react";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-MTBE6JJ3H0"; // Reemplaza con tu ID de Google Analytics

ReactGA.initialize(TRACKING_ID);


const App = () => {
  useEffect(() => {
    ReactGA.send("pageview"); // Envía un evento cada vez que se carga la página
  }, []);
  return (
    <div>
      <Navbar />
      <HomeSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default App;