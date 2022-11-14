import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from "./component/Header/Header.js";
import Content from "./component/Content/Content.js";
import Footer from "./component/Footer/Footer.js";

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>

  );
}

export default App;
