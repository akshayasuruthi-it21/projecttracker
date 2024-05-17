import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./WelcomeGrid.css"; // Add CSS file for additional styling if needed

const WelcomeGrid = () => {
  return (
    <div className="welcome-grid">
      <div className="welcome-message">
        <h1>Welcome AKSHAYA SURUTHI A R K</h1>
        <p>ON going projects</p>
      </div>
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.dGg21TK0IHpwCim4JM7SrgHaEK&pid=Api&P=0&h=180" // Replace with your course image URL
          />
          <Card.Body>
            <Card.Title>Project tracking</Card.Title>
            <Card.Text>
              Project Tracking simplifies collaboration between students and
              admins.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Add more Card components here if needed */}
      </div>
    </div>
  );
};

export default WelcomeGrid;
