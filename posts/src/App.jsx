import React from "react";
import "../src/App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Services from "./Components/Services"
import Login from "./Components/Login"
import NavBar from "./Components/Navbar/Navbar";
function App() {
  return <BrowserRouter>
    <NavBar/>

  <Routes> 
    <Route path="/" exact element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about-us" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/login" element={<Login/>} />
  </Routes>
  </BrowserRouter>;
}

export default App;
