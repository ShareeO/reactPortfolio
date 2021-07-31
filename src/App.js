import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <AboutMe/> */}
        {/* <Portfolio/> */}
        <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
