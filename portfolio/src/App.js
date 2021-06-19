import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
    <div className="App">
      <Router>
          <Navbar />
          <Header />
            <Route exact path="/" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
     </Router>
    </div>
    </>
  );
}

export default App;
