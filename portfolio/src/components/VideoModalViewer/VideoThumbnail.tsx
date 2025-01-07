import React, { useEffect, useState } from "react";
import { generateVideoThumbnail } from "./generateVideoThumbnail";

const VideoThumbnail: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    useEffect(() => {
        const fetchThumbnail = async () => {
            try {
                const generatedThumbnail = await generateVideoThumbnail(videoUrl);
                setThumbnail(generatedThumbnail);
            } catch (error) {
                console.error("Failed to generate video thumbnail:", error);
            }
        };

        fetchThumbnail();
    }, [videoUrl]);

    if (!thumbnail) {
        return <p>Loading thumbnail...</p>;
    }

    return (
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
        />
    );
};

export default VideoThumbnail;
