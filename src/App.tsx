import React from "react";
import { Route, Routes } from "react-router-dom";
import "./css/App.css";

import NavBar from "./component/menu/NavMenu.tsx";
import logo from "../src/assets/images/ed.jpg";
import { USAJobs } from "./component/usajobs/USAJobs.tsx";
import { HomePage } from "./component/HomePage.tsx";

function App() {
  let items = ["Home", "USA-Jobs", "Service", "Resume"];

  return (
    <div className="container">
      <NavBar brandName="" imageSrcPath={logo} navItems={items} />
      <div className="main-body h-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/usa-jobs" element={<USAJobs />} />
          {/* <Route path="/finance" element={<Finance />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      {/* <Resume /> */}
    </div>
  );
}

export default App;
