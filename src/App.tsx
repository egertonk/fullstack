import React from "react";
import { Route, Routes } from "react-router-dom";
import "./css/App.css";

import NavBar from "./component/menu/NavMenu.tsx";
import logo from "../src/assets/images/ed.jpg";
import { USAJobs } from "./component/usajobs/USAJobs.tsx";
import { HomePage } from "./component/HomePage.tsx";

function App() {
  let items = ["Home", "Projects", "Service", "Resume"];

  return (
    <div className="App">
      <NavBar brandName="" imageSrcPath={logo} navItems={items} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<USAJobs />} />
        {/* <Route path="/finance" element={<Finance />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Resume /> */}
    </div>
  );
}

export default App;
