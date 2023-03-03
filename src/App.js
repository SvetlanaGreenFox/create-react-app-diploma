import './App.scss';

import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import HowItWorkSection from './components/HowItWorkSection';
import FeedbackSection from './components/FeedbackSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <MainSection />
      <AboutSection />
      <HowItWorkSection />
      <FeedbackSection />
      <FooterSection />
    </div>
  );
}

export default App;
