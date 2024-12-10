import React from "react";

interface CertificatesProps {
  certificates: {
    title: string;
    content: string[];
  };
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <div className="card">
      <h3>{certificates.title}</h3>
      {certificates.content.map((certificate, index) => (
        <p key={index}>{certificate}</p>
      ))}
    </div>
  );
};

export default Certificates;
