import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection'
import Contact from './component/Contact';
import ChiSiamo from './component/ChiSiamo';
import Footer from './component/Footer';

import './app.css'
function App() {



  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Contact />
      <ChiSiamo />
      <Footer />
    </div>
  );
}

export default App;
