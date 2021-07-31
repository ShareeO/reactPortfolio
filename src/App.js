import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <AboutMe/> */}
        <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
