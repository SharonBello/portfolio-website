import React from "react";

interface VolunteerProps {
  volunteer: {
    title: string;
    content: string[];
  };
}

const ProjectsVolunteer: React.FC<VolunteerProps> = ({ volunteer }) => {
  return (
    <div className="card">
      <h3>{volunteer.title}</h3>
      <p>{volunteer.content[0]}</p>
    </div>
  );
};

export default ProjectsVolunteer;
