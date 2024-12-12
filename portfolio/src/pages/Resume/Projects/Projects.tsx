import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaGoogle, FaGithub } from "react-icons/fa";

interface Project {
  name: string;
  description: string;
  link: string;
}

interface ProjectsProps {
  projects: {
    title: string;
    content: Project[];
  };
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const getIcon = (link: string) => {
    // Determine the appropriate icon based on the URL
    if (link.includes("technovation.org")) {
      return <FaGoogle style={{ color: "#4285F4" }} />; // Google Icon for Technovation Girls
    }
    return <FaGithub style={{ color: "#333" }} />; // GitHub Icon for other projects
  };

  return (
    <Box className="card" sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {projects.title}
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
        {projects.content.map((project, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 2,
              padding: 1,
              borderRadius: 1,
              backgroundColor: "#f9f9f9",
              boxShadow: 1,
            }}
          >
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {project.name}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
            </Box>
            <IconButton
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
            >
              {getIcon(project.link)}
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
