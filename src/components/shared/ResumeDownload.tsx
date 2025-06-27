"use client";
import { useState } from 'react';
import { HiDownload } from "react-icons/hi"; // ✅ Import React Icon

const ResumeDownload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    try {
      const link = document.createElement("a");
      link.href = "/file/CV_AMIN_SK_WORK.pdf";
      link.download = "CV_AMIN_SK_WORK.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert("Download failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      disabled={isLoading}
      className={`bg-transparent dark:text-white hover:text-white border hover:bg-cyan-900   dark:border-white flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition ${
        isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:border-green-900 dark:hover:text-black'
      }`}
    >
      <HiDownload className="text-xl" />
      {isLoading ? 'Downloading...' : 'RESUME DOWNLOAD'}
    </button>
  );
};

export default ResumeDownload;
