import React from 'react';

const DownloadPdf = () => {
  const handleDownload = (pdfName) => {
    const pdfUrl = `/pdfs/${pdfName}`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;
    link.click();
  };

  // Function to handle PDF view
  const handleView = (pdfName) => {
    const pdfUrl = `/pdfs/${pdfName}`;
    window.open(pdfUrl, '_blank');  // Open the PDF in a new tab
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Explore and Download PDF Files
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* ADS PDF Section */}
        <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">ADS</h3>
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleDownload('ads.pdf')}
          >
            Download ADS PDF
          </button>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleView('ads.pdf')}
          >
            View ADS PDF
          </button>
        </div>

        {/* ADBSM PDF Section */}
        <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">ADBSM</h3>
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleDownload('adbms.pdf')}
          >
            Download ADBSM PDF
          </button>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleView('adbms.pdf')}
          >
            View ADBSM PDF
          </button>
        </div>

        {/* AJ PDF Section */}

        <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">AJ</h3>
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleDownload('AJL.pdf')}
          >
            Download AJ PDF
          </button>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleView('AJL.pdf')}
          >
            View AJ PDF
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">WT</h3>
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleDownload('wt.pdf')}
          >
            Download WT PDF
          </button>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleView('wt.pdf')}
          >
            View WT PDF
          </button>
        </div>

         <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">AIML</h3>
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleDownload('AIML_JOURNAL.pdf')}
          >
            Download AIML PDF
          </button>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleView('AIML_JOURNAL.pdf')}
          >
            View AIML PDF
          </button>
        </div>
         <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Devops</h3>
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleDownload('devops.pdf')}
          >
            Download devops PDF
          </button>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleView('devops.pdf')}
          >
            View devops PDF
          </button>
        </div>


         </div>
         <div className="flex flex-col items-center space-y-6 bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">AWT</h3>
          <button
            className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleDownload('C24047_AWT_JOURNAL.pdf')}
          >
            Download AWT PDF
          </button>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => handleView('C24047_AWT_JOURNAL.pdf')}
          >
            View AWT PDF
          </button>
        </div>
    </div>
  );
};

export default DownloadPdf;
