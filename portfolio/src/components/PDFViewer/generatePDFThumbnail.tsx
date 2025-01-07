import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

export const generatePDFThumbnail = async (pdfUrl: string, canvasWidth: number = 240) => {
    try {
        // Load the PDF document
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;

        // Get the first page
        const page = await pdf.getPage(1);

        // Set up a canvas to render the page
        const viewport = page.getViewport({ scale: 1 });
        const scale = canvasWidth / viewport.width; // Scale to match the desired width
        const scaledViewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Handle null context
        if (!context) {
            throw new Error("Failed to get 2D context from canvas.");
        }

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        // Render the page onto the canvas
        await page.render({
            canvasContext: context,
            viewport: scaledViewport,
        }).promise;

        // Convert the canvas to a base64 image
        const thumbnail = canvas.toDataURL("image/png");

        return thumbnail;
    } catch (error) {
        console.error("Error generating PDF thumbnail:", error);
        return null;
    }
};
