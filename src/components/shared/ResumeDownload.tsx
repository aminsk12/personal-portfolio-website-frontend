"use client";
const ResumeDownload = () => {
  const handleDownload = async () => {
    const fileUrl = "http://localhost:3000/file/CV_Aklima_Akter_work.pdf";

    try {
      // Fetch the file
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch the file.");
      }

      // Convert the response to a Blob
      const blob = await response.blob();

      // Create a URL for the Blob
      const blobUrl = URL.createObjectURL(blob);

      // Create an anchor element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "CV_Aklima_Akter_work.pdf";

      // Append to the body and trigger the click
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <button onClick={handleDownload} className="bg-white px-4 py-1 rounded-lg font-bold">
    RESUME DOWNLOAD 
    </button>
  );
};

export default ResumeDownload;