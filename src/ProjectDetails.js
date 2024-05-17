import React from "react";
import "./ProjectDetails.css"; // Add CSS file for additional styling if needed

const ProjectDetails = () => {
  return (
    <div className="project-details">
      <div className="projects">
        <h2 className="title">2-projecttracking-projectflow</h2>
        <div className="status-badge">
          <h6>Project Approved</h6>
        </div>
        <div className="primary-card">
          <h2 className="subtitle" style={{ textAlign: "left" }}>
            Description
          </h2>
          <p style={{ textAlign: "left" }}>
            Project Tracking simplifies collaboration between students and
            admins. It offers easy project creation, daily work logging, and
            deadline tracking. With personalized dashboards and notifications,
            teams stay organized and informed. Built with React.js, Node.js, and
            MongoDB, it ensures secure access and smooth deployment for
            effective project management.
          </p>
        </div>
        <div className="primary-card">
          <div className="flex-container">
            <h2 className="subtitle" style={{ textAlign: "left" }}>
              Github Repo Details
            </h2>
            <h3 className="commit" style={{ textAlign: "left" }}>
              1 Commits
            </h3>
          </div>
          <a
            style={{ textAlign: "left" }}
            href="https://github.bitsathy.ac.in/ps/PS_TAC_259"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ textAlign: "left" }}>
              Rep Name : PS_TAC_259 (1 Collaborates)
            </p>
          </a>
          <br />
          <br />
          <h4 style={{ textAlign: "left" }}>Collaborates Not Added</h4>
          <div className="flex-container"></div>
        </div>
        <div className="primary-card" style={{ textAlign: "left" }}>
          <h2 className="subtitle">Team Details</h2>
          <div className="flex-container">
            <div className="avatar">AS</div>
            <h3>AKSHAYA SURUTHI A R K</h3>
            <h4>C Programming 3rd Years - 1</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
