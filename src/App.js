import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";


import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages";
import About from "./pages/about";
import Work from "./pages/work";


function App() {
  return (
    <Router>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/external" component={() => {window.location = "https://hubpages.com/@lizlilith"; return null;} } />
      <Route path="/about" element={<About />} />

      <Route path="/external" component={() => {window.location = "https://caroline-reed.github.io/vocab-app"; return null;} } />
      <Route path="/external" component={() => {window.location = "https://caroline-reed.github.io/far-out"; return null;} } />
    </Routes>

    <Footer />
    </Router>
  );
}

export default App;
