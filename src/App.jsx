import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';

const App = () => {
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