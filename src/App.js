import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Items from "./pages/Items.js";
import Mint from "./pages/Mint";
import AboutUs from "./pages/About";
import Connect from "./pages/ConnectWallet";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Items" component={Items}></Route>
          <Route path="/Mints" component={Mint}></Route>
          <Route path="/About-Us" component={AboutUs}></Route>
          <Route path="/Connect-Wallet" component={Connect}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

