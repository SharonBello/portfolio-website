import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Card, CardActionArea, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import { InfographicImages } from "../portfolioHelper";

const ExpandableCard = styled(Card)(({ theme }) => ({
  overflow: 'hidden',
  borderRadius: 8,
  transition: 'height 0.5s ease', // Smooth transition
  cursor: 'pointer',
}));

const InfographicGallery: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<{
    title: string;
    src: string;
    description: string;
  } | null>(null);
  const [imageHeights, setImageHeights] = useState<{ collapsed: number; full: number }[]>([]);

  const imageRefs = useRef<HTMLImageElement[]>([]); // References to images

  // Calculate dynamic heights for collapsed and full views
  useEffect(() => {
    const heights = imageRefs.current.map((img) => {
      if (img) {
        const naturalHeight = img.naturalHeight;
        const naturalWidth = img.naturalWidth;
        const collapsedHeight = (300 / naturalWidth) * naturalHeight; // Set collapsed height proportionally
        return { collapsed: collapsedHeight, full: naturalHeight };
      }
      return { collapsed: 200, full: 400 }; // Fallback heights
    });
    setImageHeights(heights);
  }, []);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
  };

  const handleOpenModal = (image: { title: string; src: string; description: string }) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <Box sx={{ padding: 2, paddingInline: '6vw' }}>
      <Typography variant="h4" textAlign="center" marginBottom={4}>
        Infographic Gallery
      </Typography>
      <Masonry columns={3} spacing={6}>
        {InfographicImages.map((image, index) => (
          <ExpandableCard
            key={index}
            sx={{
              height:
                expandedIndex === index
                  ? imageHeights[index]?.full || 400 // Full height dynamically calculated
                  : imageHeights[index]?.collapsed || 200, // Collapsed height dynamically calculated
              cursor: expandedIndex === index ? 'pointer' : 'default', // Pointer cursor for expanded state
            }}
            onClick={() => {
              if (expandedIndex === index) handleOpenModal(image); // Open modal when expanded
            }}
          >
            <CardActionArea onClick={() => handleToggle(index)}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '8px',
                  textAlign: 'center',
                  zIndex: 1,
                }}
              >
                <Typography variant="subtitle2">{image.title}</Typography>
              </Box>
              <img
                src={image.src}
                alt={image.title}
                ref={(el) => (imageRefs.current[index] = el!)} // Assign image to refs
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </CardActionArea>
          </ExpandableCard>
        ))}
      </Masonry>
      {/* Modal */}
      <Modal open={!!modalImage} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 800,
            maxHeight: '80vh', // Limit modal height to 80% of viewport height
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            overflowY: 'auto', // Enable scrolling if content exceeds height
            p: 4,
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
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
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
