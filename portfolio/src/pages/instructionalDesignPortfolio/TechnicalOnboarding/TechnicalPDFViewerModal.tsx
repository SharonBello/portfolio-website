import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Modal, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { BsFilePdf } from "react-icons/bs";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Worker copied from node_modules/pdfjs-dist/build/pdf.worker.min.js to /public
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

interface Props { filePath: string; thumbnail: string; }

const FallbackIcon: React.FC<{ label: string }> = ({ label }) => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, color: "#415161", p: 3 }}>
        <BsFilePdf size={48} />
        <Typography variant="caption">{label}</Typography>
    </Box>
);

const TechnicalPDFViewerModal: React.FC<Props> = ({ filePath }) => {
    const [open, setOpen] = useState(false);
    const [numPages, setNumPages] = useState(0);

    return (
        <>
            {/* ── Thumbnail card ── */}
            <Box
                onClick={() => setOpen(true)}
                sx={{
                    width: 240, height: 200, borderRadius: "8px",
                    overflow: "hidden", cursor: "pointer",
                    border: "1px solid #e6e9eb",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#f9f9f9",
                    transition: "box-shadow 0.2s, transform 0.2s",
                    "&:hover": { boxShadow: "0 6px 20px rgba(0,0,0,0.15)", transform: "translateY(-3px)" },
                }}
            >
                <Document
                    file={filePath}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    loading={<FallbackIcon label="Loading..." />}
                    error={<FallbackIcon label="Click to view" />}
                >
                    {numPages > 0 && (
                        <Page pageNumber={1} width={240} renderTextLayer={false} renderAnnotationLayer={false} />
                    )}
                </Document>
            </Box>

            {/* ── Full modal ── */}
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "90%", height: "90%",
                    bgcolor: "background.paper", boxShadow: 24,
                    borderRadius: "8px", overflow: "hidden",
                    display: "flex", flexDirection: "column",
                }}>
                    <IconButton onClick={() => setOpen(false)}
                        sx={{ position: "absolute", top: 12, right: 12, zIndex: 10 }}>
                        <CloseIcon />
                    </IconButton>

                    <Box sx={{ flex: 1, overflow: "auto", pt: 6 }}>
                        <TransformWrapper>
                            <TransformComponent>
                                <Document file={filePath} error="Failed to load PDF.">
                                    {Array.from({ length: numPages }, (_, i) => (
                                        <Page key={i + 1} pageNumber={i + 1} renderTextLayer={false} renderAnnotationLayer={false} />
                                    ))}
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