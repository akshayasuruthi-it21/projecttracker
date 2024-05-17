import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Sidebar from "./Sidebar";
import Analytics from "./Analytics";
import DynamicChart from "./DynamicChart";
import Form1 from "./Form1";
import WelcomeGrid from "./WelcomeGrid";
import PageLayout from "./PageLayout";
import ProjectDetails from "./ProjectDetails";
import SkillsChart from "./SkillsChart";
import SkillsAndProjectStatus from "./SkillsAndProjectStatus";
import Skills from "./Skills";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/welcome" element={<WelcomeGrid />} />
            <Route path="/form1" element={<Form1 />} />
            <Route path="/Projectdetails" element={<Skills />} />
            <Route path="/project" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
