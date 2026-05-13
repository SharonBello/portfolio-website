import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { InfographicImages } from "../portfolioHelper";
import PortfolioCategoryLayout from "../PortfolioCategoryLayout/PortfolioCategoryLayout";

// ── Types ──────────────────────────────────────────
interface InfographicImage {
  title: string;
  src: string;
  description: string;
}

// ── Sub-components ─────────────────────────────────
const InfographicCard: React.FC<{
  image: InfographicImage;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}> = ({ image, isHovered, onHover, onClick }) => (
  <Box
    sx={{
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      borderRadius: "8px",
      border: "solid #fff 10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    }}
    onClick={onClick}
  >
    <img
      src={image.src}
      alt={image.title}
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "8px",
        boxShadow: isHovered
          ? "0 6px 10px rgba(0, 0, 0, 0.2)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
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
);

const InfographicModal: React.FC<{
  image: InfographicImage | null;
  onClose: () => void;
}> = ({ image, onClose }) => (
  <Modal open={!!image} onClose={onClose}>
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
      {image && (
        <>
          <Typography variant="h5" gutterBottom>{image.title}</Typography>
          <Typography variant="body1" gutterBottom>{image.description}</Typography>
          <img
            src={image.src}
            alt={image.title}
            style={{ width: "100%", height: "auto", borderRadius: "4px" }}
          />
        </>
      )}
    </Box>
  </Modal>
);

// ── Main Component ─────────────────────────────────
const InfographicGallery: React.FC = () => {
  const [modalImage, setModalImage] = useState<InfographicImage | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <PortfolioCategoryLayout>
      <Typography variant="h4" textAlign="center" marginBottom={4}>
        Infographic Gallery
      </Typography>

      <Box sx={{ paddingInline: "4vw" }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={5}>
          {InfographicImages.map((image, index) => (
            <InfographicCard
              key={index}
              image={image}
              isHovered={hoveredIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
              onClick={() => setModalImage(image)}
            />
          ))}
        </Masonry>
      </Box>

      <InfographicModal
        image={modalImage}
        onClose={() => setModalImage(null)}
      />
    </PortfolioCategoryLayout>
  );
};

export default InfographicGallery;