// DOCUMENT UPLOAD & VERIFICATION
import React, { useState } from "react";

const DocumentVerification = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "resume.pdf",
      type: "Resume",
      uploadedDate: "2024-01-15",
      status: "pending",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "degree_certificate.jpg",
      type: "Degree",
      uploadedDate: "2024-01-10",
      status: "approved",
      size: "1.8 MB",
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Simulate upload
      setTimeout(() => {
        const newDoc = {
          id: documents.length + 1,
          name: file.name,
          type: file.type.includes("image") ? "Image" : "Document",
          uploadedDate: new Date().toISOString().split("T")[0],
          status: "pending",
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        };
        setDocuments([...documents, newDoc]);
        setSelectedFile(null);
      }, 1000);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "text-green-400";
      case "rejected":
        return "text-red-400";
      default:
        return "text-yellow-400";
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Document Verification</h1>

        {/* Upload Section */}
        <div className="glassmorphism p-6 rounded-2xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upload New Document</h2>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <i className="fas fa-cloud-upload-alt text-4xl text-cyan-300 mb-4"></i>
              <p className="text-lg">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-400">PDF, JPG, PNG up to 10MB</p>
            </label>
          </div>
        </div>

        {/* Documents List */}
        <div className="glassmorphism p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Your Documents</h2>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <i className="fas fa-file text-2xl text-cyan-300"></i>
                  <div>
                    <h3 className="font-semibold">{doc.name}</h3>
                    <p className="text-sm text-gray-400">
                      {doc.type} • {doc.size} • {doc.uploadedDate}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full ${getStatusColor(
                    doc.status
                  )}`}
                >
                  {doc.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentVerification;
