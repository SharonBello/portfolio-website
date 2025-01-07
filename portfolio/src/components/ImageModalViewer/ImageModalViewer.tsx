import React, { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImageModalViewer: React.FC<{ imageSrc: string; altText: string }> = ({ imageSrc, altText }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Thumbnail Image */}
            <img
                src={imageSrc}
                alt={altText}
                style={{
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                }}
                onClick={handleOpen}
            />

            {/* Modal */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: "90%",
                        maxHeight: "90%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: "8px",
                        padding: "16px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: "1.2rem",
                            right: "1.2rem",
                            color: "#ccc",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Full Image */}
                    <img
                        src={imageSrc}
                        alt={altText}
                        style={{
                            maxWidth: "85%",
                            maxHeight: "85%",
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
};

export default ImageModalViewer;
