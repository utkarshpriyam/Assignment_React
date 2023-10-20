import './App.css';
import HomeSection from './sections/HomeSection/HomeSection';
import FrontSections from './sections/FrontSections/FrontSections';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import CustomerEaseSection from './sections/CustomerEaseSection/CustomerEaseSection';
import ExtraFeaturesSection from './sections/ExtraFeaturesSection/ExtraFeaturesSection';
import AtUniSection from './sections/AtUniSection/AtUniSection';

function App() {
  return (
    <div>
    <HomeSection />
    <div id="frontSections">
      <FrontSections />
      <FeaturesSection />
      <CustomerEaseSection />
      <ExtraFeaturesSection />
      <AtUniSection />
    </div>
    </div>
  );
}

export default App;
