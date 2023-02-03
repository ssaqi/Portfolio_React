import Nav from './components/nav/Nav'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Porfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/Skills/Skills';
function App() {
  return (
 <>

 <Nav/>
 <Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/Home" element={<Home/>} />
 <Route path="/About" element={<About/>} />
 <Route path="/Porfolio" element={<Portfolio/>} />
 <Route path="/Skills" element={<Skills/>}/>
 <Route path="/contact" element={<Contact/>} />

 </Routes>
 
 </>
  );
}

export default App;
