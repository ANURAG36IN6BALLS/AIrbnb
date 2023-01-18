import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import AirbnbHome from "./pages/AirbnbHome";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header"




function App() {

  return (

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AirbndHome" element={<AirbnbHome/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </Router>

    
  );
}

export default App;
