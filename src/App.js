import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Colina from "./Components/Colina";
import Siena from "./Components/Siena";
import ScrollToTop from "./Components/ScrollToTop";
import Preloader from "./Preloader";
import NewNav from "./NewNav";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import './Components/js/main';


function App() {
  return (
    <div className="App">
     
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
        <Route path="*" element={<Home />} />

          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />}  />
          
          <Route path="/colina" element={<Colina />} />

          <Route path="/siena" element={<Siena />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
