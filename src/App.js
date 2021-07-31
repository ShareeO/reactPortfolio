import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('about')

const handlePageChange= (page) => {
  setPage(page)
}

  return (
    <div className="App">
      <Header onPageChange={handlePageChange}/>
      {page === "about" && <AboutMe/> }
      {page === "portfolio" && <Portfolio/> }
      {page === "contact" && <Contact/> }
      {page === "resume" && <Resume/> }  
      <Footer/>
    </div>
  );
}

export default App;
