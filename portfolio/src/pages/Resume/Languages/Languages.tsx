import React from "react";

interface LanguagesProps {
  languages: {
    title: string;
    content: string[];
  };
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className="card">
      <h3>{languages.title}</h3>
      <p>{languages.content.join(", ")}</p> {/* Comma-separated languages */}
    </div>
  );
};

export default Languages;
