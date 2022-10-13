import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
