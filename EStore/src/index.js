import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/fontawesome.css";
import "./assets/css/flex-slider.css";
import "./assets/css/templatemo-sixteen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.css";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Product from "./Product.js";
import About from "./About.js";
import Profile from "./Profile.js"
//import Header from "./Components/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login,Signup} from "./LoginSingup";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/about" element={<About main={2}/>} />
          <Route exact path="/product" element={<Product main={1}/>} />
          <Route exact path="/contact" element={<Contact main={3}/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/profile" element={<Profile main={4}/>} />
          <Route exact path="/" element={<Home main={0}/>} />
        </Routes>
      </Router>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
