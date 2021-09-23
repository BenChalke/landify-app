import Companies from './components/Companies/Companies';
import CtaBanner from './components/CtaBanner/CtaBanner';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import HomeHero from './components/HomeHero/HomeHero';
import './styles/App.scss';


function App() {
  return (
    <div className="app">
      <HomeHero />
      <Companies />
      <Features />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;
