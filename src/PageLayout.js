import React from "react";
import "./PageLayout.css"; // Add CSS file for additional styling if needed

const PageLayout = () => {
  return (
    <div className="outer-layout">
      <div className="title-container">
        <h2>Title</h2>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Description</h3>
          <p>
            Project Tracking simplifies collaboration between students and
            admins. It offers easy project creation, daily work logging, and
            deadline tracking. With personalized dashboards and notifications,
            teams stay organized and informed. Built with React.js, Node.js, and
            MongoDB, it ensures secure access and smooth deployment for
            effective project management.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Github Repo Details</h3>
          <p>1 Commits</p>
          <p>Rep Name : PS_TAC_259 (1 Collaborates)</p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Team Details</h3>
          <p>AKSHAYA SURUTHI A R K</p>
          <p>C Programming 3rd Years - 1</p>
        </div>
      </div>
      <div className="circle">
        <span>Button</span>
      </div>
    </div>
  );
};

export default PageLayout;
