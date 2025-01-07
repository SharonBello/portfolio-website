import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { InfographicImages } from "../portfolioHelper";

const InfographicGallery: React.FC = () => {
  const [modalImage, setModalImage] = useState<{
    title: string;
    src: string;
    description: string;
  } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track hovered index

  const handleOpenModal = (image: { title: string; src: string; description: string }) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <Box sx={{ padding: 2, paddingInline: "6vw" }}>
      <Typography variant="h4" textAlign="center" marginBottom={4}>
        Infographic Gallery
      </Typography>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={5}>
        {InfographicImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              borderRadius: "8px",
              border: "solid #fff 10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => handleOpenModal(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow:
                  hoveredIndex === index
                    ? "0 6px 10px rgba(0, 0, 0, 0.2)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
              onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "8px",
                textAlign: "center",
              }}
            >
              <Typography variant="subtitle2">{image.title}</Typography>
            </Box>
          </Box>
        ))}
      </Masonry>
      {/* Modal */}
      <Modal open={!!modalImage} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            maxHeight: "90vh",
            maxWidth: "90vw",
            overflow: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {modalImage && (
            <>
              <Typography variant="h5" gutterBottom>
                {modalImage.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {modalImage.description}
              </Typography>
              <img
                src={modalImage.src}
                alt={modalImage.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  display: "block",
                }}
              />
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default InfographicGallery;
