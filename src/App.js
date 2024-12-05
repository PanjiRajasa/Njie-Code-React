import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";


function App() {
  return (
    <div className="background">
        <Router>
        <div className="container">
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
            <Footer />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
