export const generateVideoThumbnail = async (
    videoUrl: string,
    timeInSeconds: number = 1
): Promise<string> => {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = videoUrl;
        video.crossOrigin = "anonymous"; // Enable cross-origin for hosted videos
        video.currentTime = timeInSeconds;

        video.onloadeddata = () => {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const ctx = canvas.getContext("2d");
            if (!ctx) {
                reject(new Error("Canvas context is not available."));
                return;
            }

            video.onseeked = () => {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const thumbnail = canvas.toDataURL("image/png"); // Convert to data URL
                resolve(thumbnail);
            };

            video.onerror = (err) => {
                reject(err);
            };

            // Seek to the desired frame
            video.currentTime = timeInSeconds;
        };
    });
};
