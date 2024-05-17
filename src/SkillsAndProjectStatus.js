import React from "react";

const SkillItem = ({ skillName, level }) => {
  const barWidth = `${level}%`;
  const fillColor = level > 75 ? "green" : level > 50 ? "orange" : "red";

  return (
    <div className="skill-item">
      <div className="skill-name">{skillName}</div>
      <div className="skill-indicator-container">
        <svg viewBox="0 0 100 10">
          <rect width={barWidth} height="10" fill={fillColor} />
        </svg>
      </div>
      <div className="skill-level">{level}%</div>
    </div>
  );
};

const ProjectStatus = ({ label, level }) => {
  const levelIndicatorStyle = {
    width: `${level * 33.33}%`,
    backgroundColor: level > 2 ? "green" : level > 1 ? "orange" : "red",
  };

  return (
    <div className="project-status">
      <div className="project-status-label">{label}</div>
      <div className="project-status-bar">
        <div className="project-status-level" style={levelIndicatorStyle}></div>
      </div>
    </div>
  );
};

const SkillsAndProjectStatus = () => {
  // Define default values for skills and projectLevels
  const defaultSkills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 85 },
  ];

  const defaultProjectLevels = [1, 2, 3]; // Assuming completion levels (out of 3)

  return (
    <div className="skills-and-project-status">
      <div className="skills-container">
        {/* Map over skills (using default if not provided) */}
        {defaultSkills.map(
          (
            skill,
            index // Use defaultSkills here
          ) => (
            <SkillItem key={index} skillName={skill.name} level={skill.level} />
          )
        )}
      </div>
      <div className="project-status-container">
        {/* Map over projectLevels (using default if not provided) */}
        {defaultProjectLevels.map(
          (
            level,
            index // Use defaultProjectLevels here
          ) => (
            <ProjectStatus
              key={index}
              label={`Stage ${index + 1}`}
              level={level}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SkillsAndProjectStatus;
