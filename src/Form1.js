// Filename - ProjectForm.js
// It contains the Project Form, its Structure
// and Basic Form Functionalities

import "./Form.css";
import React, { useState } from "react";

function Form1() {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectDomain, setProjectDomain] = useState("");
  const [teamMember1, setTeamMember1] = useState("");
  const [teamMember1Level, setTeamMember1Level] = useState("");
  const [teamMember1Contribution, setTeamMember1Contribution] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      projectTitle,
      projectDescription,
      projectType,
      projectDomain,
      teamMember1,
      teamMember1Level,
      teamMember1Contribution
    );
    // Add logic for handling form submission
  };

  const handleReset = () => {
    // Reset all state variables here
    setProjectTitle("");
    setProjectDescription("");
    setProjectType("");
    setProjectDomain("");
    setTeamMember1("");
    setTeamMember1Level("");
    setTeamMember1Contribution("");
  };

  return (
    <div className="App">
      <h1>Project Details Form</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="projectTitle">Project Title*</label>
          <input
            type="text"
            name="projectTitle"
            id="projectTitle"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder="Enter Project Title"
            required
          />
          <label htmlFor="projectDescription">Project Description*</label>
          <textarea
            name="projectDescription"
            id="projectDescription"
            cols="30"
            rows="10"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            placeholder="Enter Project Description"
            required
          ></textarea>
          <label htmlFor="projectType">Select Project Type*</label>
          <select
            name="projectType"
            id="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a Type
            </option>
            <option value="Type1">Type1</option>
            <option value="Type2">Type2</option>
            {/* Add more options as needed */}
          </select>
          <label htmlFor="projectDomain">Select Project Guide*</label>
          <select
            name="projectDomain"
            id="projectDomain"
            value={projectDomain}
            onChange={(e) => setProjectDomain(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a Domain
            </option>
            <option value="Domain1">Domain1</option>
            <option value="Domain2">Domain2</option>
            {/* Add more options as needed */}
          </select>
          <label htmlFor="teamMember1">Team Member 1*</label>
          <input
            type="text"
            name="teamMember1"
            id="teamMember1"
            value={teamMember1}
            onChange={(e) => setTeamMember1(e.target.value)}
            placeholder="Enter Team Member Name"
            required
          />
          <label htmlFor="teamMember1Level">Select Project Level*</label>
          <select
            name="teamMember1Level"
            id="teamMember1Level"
            value={teamMember1Level}
            onChange={(e) => setTeamMember1Level(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a Level
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            {/* Add more options as needed */}
          </select>
          <label htmlFor="teamMember1Contribution">
            Member 1 Contribution (0 - 100)*
          </label>
          <input
            type="number"
            name="teamMember1Contribution"
            id="teamMember1Contribution"
            value={teamMember1Contribution}
            onChange={(e) => setTeamMember1Contribution(e.target.value)}
            placeholder="Enter Contribution Percentage"
            min="0"
            max="100"
            required
          />
          <button type="reset" value="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Form1;
