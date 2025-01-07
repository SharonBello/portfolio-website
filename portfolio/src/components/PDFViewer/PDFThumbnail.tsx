import React, { useState, useEffect } from "react";
import { generatePDFThumbnail } from "./generatePDFThumbnail";

const PDFThumbnail: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    useEffect(() => {
        const fetchThumbnail = async () => {
            const generatedThumbnail = await generatePDFThumbnail(pdfUrl);
            setThumbnail(generatedThumbnail);
        };

        fetchThumbnail();
    }, [pdfUrl]);

    if (!thumbnail) {
        return <p>Loading thumbnail...</p>;
    }

    return (
        <img
            src={thumbnail}
            alt="PDF Thumbnail"
            style={{
                width: "240px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
            }}
        />
    );
};

export default PDFThumbnail;
