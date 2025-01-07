import React, { useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type VideoModalViewerProps = {
    videoPath: string;
    thumbnail?: string; // Optional thumbnail string
    thumbnailComponent?: React.ReactNode; // Optional thumbnail component
};

const VideoModalViewer: React.FC<VideoModalViewerProps> = ({
    videoPath,
    thumbnail,
    thumbnailComponent,
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Render the thumbnail (component or string) */}
            {thumbnailComponent ? (
                <div onClick={handleOpen} style={{ cursor: "pointer" }}>
                    {thumbnailComponent}
                </div>
            ) : (
                <img
                    src={thumbnail}
                    alt="Video Thumbnail"
                    style={{
                        width: "240px",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                    onClick={handleOpen}
                />
            )}

            {/* Modal to display the video */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        // width: "85%",
                        // maxWidth: "1000px",
                        // height: "85%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        borderRadius: "8px",
                        overflow: "hidden",
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

                    {/* Video Player */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: 2,
                        }}
                    >
                        <video
                            controls
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "8px",
                                backgroundColor: "black",
                            }}
                        >
                            <source src={videoPath} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default VideoModalViewer;
