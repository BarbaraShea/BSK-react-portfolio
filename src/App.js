import './App.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { animation } from "./portfolioData";


// import portfolioData from "./portfolioData";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";


function App() {
   useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
    <div className="App">
      <Router>
          <Navbar />
          <Header />
            <Route exact path="/" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          <Footer />
     </Router>
    </div>
    </>
  );
}

export default App;
