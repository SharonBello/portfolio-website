import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaGoogle, FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RiProjectorLine } from "react-icons/ri";
import "./Projects.scss";

interface Project {
  name: string;
  company: string;
  icon: any;
  role: string;
  year: string;
  description: string;
  link: string;
  images: string[];
}

interface ProjectsProps {
  projects: {
    title: string;
    icon: any;
    content: Project[];
  };
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getIconForLink = (link: string) => {
    if (link.includes("https://technovation.org/") || link.includes("google")) {
      return <FaGoogle className="link-icon" />;
    }
    return <FaGithub className="link-icon" />;
  };

  return (
    <Box className="projects-card">
      {/* Title Section */}
      <Box className="projects-header">
        <Typography variant="h5" className="projects-title">
          {projects.title}
        </Typography>
        <RiProjectorLine className="projects-icon" />
      </Box>

      {/* Project List */}
      <Box component="ul" className="projects-list">
        {projects.content.map((project, index) => (
          <Box
            component="li"
            key={index}
            className={`project-item ${expandedIndex === index ? "expanded" : ""}`}
          >
            {/* Collapsed View */}
            <Box className="project-summary">
              {/* Link Icon at Top Right */}
              <Box className="top-right-link">
                <IconButton
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-icon"
                  aria-label={`Visit ${project.name}`}
                >
                  {getIconForLink(project.link)}
                </IconButton>
              </Box>

              {/* Project Info */}
              <Box className="project-info">
                <Typography className="project-details">
                  {project.year}
                </Typography>
                <Typography className="project-name">{project.name}</Typography>
                <Typography className="project-details">
                  {project.company} | {project.role}
                </Typography>
              </Box>

              {/* Expand/Collapse Button */}
              <IconButton
                onClick={() => handleExpandClick(index)}
                className="expand-icon"
                aria-label="Expand or collapse"
              >
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </IconButton>
            </Box>

            {/* Expanded View */}
            {expandedIndex === index && (
              <Box className="project-expanded">
                <Typography className="project-description">
                  {project.description}
                </Typography>
                <Box className="project-carousel">
                  {project.images.map((image, i) => (
                    <Box
                      key={i}
                      component="img"
                      src={image}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="project-image"
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
