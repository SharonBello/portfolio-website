import "./Summary.scss";
import { Typography } from "@mui/material";

const Summary = (props: any): JSX.Element => {
  const { summary } = props

  return (
    <>
      {/* Decorative Background Shape */}
      <div className="summary-background-shape"></div>

      {/* Header with Title and Icon */}
      <div className="summary-header">
        <Typography variant="h4" component="h2" className="summary-title">
          {summary.title}
        </Typography>
        <summary.icon className="summary-icon" />
      </div>

      {/* Summary Content */}
      <div className="summary-content">
        {summary.content.map((section: any, index: number) => (
          <Typography key={index} variant="body1" className="summary-text">
            {section.heading && <strong>{section.heading}: </strong>}
            {section.text}
          </Typography>
        ))}
      </div>
    </>
  );
};

export default Summary;
