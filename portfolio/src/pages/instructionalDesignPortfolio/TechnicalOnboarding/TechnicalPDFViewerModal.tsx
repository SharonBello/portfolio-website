import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const TechnicalPDFViewerModal: React.FC<{ filePath: string; thumbnail: string }> = ({
    filePath,
    thumbnail,
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Thumbnail Image */}
            <img
                src={thumbnail}
                alt="PDF Thumbnail"
                style={{
                    width: "240px",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor: "pointer",
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
                        width: "90%",
                        height: "90%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: "8px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: "1.2rem",
                            right: "1.2rem",
                            zIndex: 1000,
                            color: "black",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* PDF Viewer with Zoom/Pan */}
                    <Box sx={{ flex: 1 }}>
                        <TransformWrapper>
                            <TransformComponent>
                                <Document file={filePath} loading="Loading PDF...">
                                    <Page pageNumber={1} />
                                </Document>
                            </TransformComponent>
                        </TransformWrapper>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default TechnicalPDFViewerModal;
