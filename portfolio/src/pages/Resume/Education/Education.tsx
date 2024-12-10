import "./Education.scss";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";

const Education = (props: any): JSX.Element => {
  const { education } = props

  return (
    <>
      <div className="education-background-shape"></div>
      <div className="education-header">
        <education.icon className="education-icon" />
        <Typography variant="h4" component="h2" className="education-title">
          {education.title}
        </Typography>
      </div>
      <div className="education-content">
        {education.content.map((item: any, index: number) => (
          <div key={index} className="education-item">
            <Typography variant="subtitle1" className="education-year">
              {item.year}
            </Typography>
            <div className="education-details">
              <Typography variant="h6" className="education-degree">
                {item.degree}
              </Typography>
              <Typography variant="body2" className="education-university">
                {item.university}
              </Typography>
              <Typography variant="body2" className="education-description">
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
