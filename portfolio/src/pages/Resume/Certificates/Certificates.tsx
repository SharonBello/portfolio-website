import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Modal, Box, Typography, IconButton } from "@mui/material";

interface Certificate {
  title: string;
  img: string;
}

interface CertificatesProps {
  certificates: {
    title: string;
    content: Certificate[];
  };
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string | null>(null);

  const handleOpen = (img: string) => {
    setCurrentImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentImg(null);
    setOpen(false);
  };

  return (
    <Box className="card" sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {certificates.title}
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
        {certificates.content.map((cert, index) => (
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
            <Typography variant="body1" sx={{ flex: 1 }}>
              {cert.title}
            </Typography>
            <IconButton
              onClick={() => handleOpen(cert.img)}
              aria-label="View certificate"
              sx={{ color: "#007BFF" }}
            >
              <FaEye />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* MUI Modal for displaying the certificate */}
      <Modal open={open} onClose={handleClose} aria-labelledby="certificate-modal">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: 2,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          {currentImg && (
            <Box
              sx={{
                maxWidth: "90%",
                maxHeight: "90%",
                position: "relative",
              }}
            >
              <img
                src={currentImg}
                alt="Certificate"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  border: "4px solid #007BFF",
                  borderRadius: "8px",
                }}
              />
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificates;
