import React from "react";

type PDFViewerProps = {
    filePath: string; // Path to the PDF file
    width?: string; // Optional width (default: 100%)
    height?: string; // Optional height (default: 500px)
};

const PDFViewer: React.FC<PDFViewerProps> = ({ filePath, width = "100%", height = "500px" }) => {
    return (
        <iframe
            src={filePath}
            width={width}
            height={height}
            style={{ border: "none" }}
            title="PDF Viewer"
        />
    );
};

export default PDFViewer;
