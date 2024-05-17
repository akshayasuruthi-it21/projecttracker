import React from "react";
import { PieChart } from "react-chartkick";
import "chart.js";

const SkillsChart = () => {
  const skillsData = [
    ["HTML", 90],
    ["CSS", 80],
    ["JavaScript", 85],
    ["MERN Stack", 70],
  ];

  const projectCompletion = 70; // Assuming project completion percentage

  return (
    <div>
      <h2>Skills Chart</h2>
      <PieChart data={skillsData} />

      <div style={{ marginTop: "20px" }}>
        <h2>Project Completion Status</h2>
        <div
          style={{
            backgroundColor: "lightgray",
            height: "20px",
            width: "300px",
            borderRadius: "10px",
            marginTop: "5px",
          }}
        >
          <div
            style={{
              backgroundColor: "green",
              height: "100%",
              width: `${projectCompletion}%`,
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsChart;
