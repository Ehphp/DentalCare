import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection'
import Contact from './component/Contact';
import ChiSiamo from './component/ChiSiamo';
import FormHome from './component/FormHome';
import Footer from './component/Footer';

import './app.css'
function App() {



  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FormHome />

      <Contact />
      <ChiSiamo />
      <Footer />
    </div>
  );
}

export default App;
