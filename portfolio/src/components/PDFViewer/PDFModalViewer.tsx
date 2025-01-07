import React, { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PDFModalViewer: React.FC<{
    filePath: string;
    thumbnailComponent: React.ReactNode;
}> = ({ filePath, thumbnailComponent }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Render the provided thumbnail component */}
            <div onClick={handleOpen} style={{ cursor: "pointer" }}>
                {thumbnailComponent}
            </div>

            {/* Modal to display the PDF */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "85%",
                        maxWidth: "1000px",
                        height: "85%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: "8px",
                        overflow: "hidden", // Prevent content overflow
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Close Button at the Top Right */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: "1.2rem",
                            right: "1.2rem",
                            color: "#ffffff",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* PDF Viewer */}
                    <Box
                        sx={{
                            flex: 1, // Fill remaining space
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: "16px", // Add consistent padding
                        }}
                    >
                        <iframe
                            src={`${filePath}#toolbar=0`} // Hide toolbar
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                            }}
                            title="PDF Viewer"
                        />
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default PDFModalViewer;
