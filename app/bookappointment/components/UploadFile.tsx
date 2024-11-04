import React, { useState } from 'react';
import { FaCloudUploadAlt, FaTimesCircle } from 'react-icons/fa';

export default function UploadFile() {
    const [files, setFiles] = useState([]);
    const [fileURLs, setFileURLs] = useState([]);

    const handleFileChange = (e: { target: { files: Iterable<unknown> | ArrayLike<unknown>; }; }) => {
        const uploadedFiles = Array.from(e.target.files);
        setFiles(uploadedFiles);
        const newFileURLs = uploadedFiles.map(file => URL.createObjectURL(file));
        setFileURLs(newFileURLs);
    };

    const handleClear = () => {
        setFiles([]);
        setFileURLs([]);
        fileURLs.forEach(url => URL.revokeObjectURL(url)); // Clean up memory
    };

    const renderPreview = () => {
        return fileURLs.map((fileURL, index) => {
            const fileType = files[index].type.split('/')[0];

            if (fileType === 'image') {
                return (
                    <img
                        key={index}
                        src={fileURL}
                        alt={`Preview ${index}`}
                        className="rounded-lg max-w-full max-h-32 object-cover mb-2"
                    />
                );
            } else if (fileType === 'video') {
                return (
                    <video
                        key={index}
                        src={fileURL}
                        controls
                        className="rounded-lg max-w-full max-h-32 mb-2"
                    />
                );
            }
            return <p key={index} className="text-gray-500">Preview not available for {files[index].name}.</p>;
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
                {/* Icon and Heading */}
                <div className="mb-6">
                    <FaCloudUploadAlt className="text-indigo-500 text-6xl mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Upload Your Files</h2>
                    <p className="text-gray-600">Choose files or drag and drop them here</p>
                </div>

                {/* File Upload Area */}
                <div className="relative border-dashed border-2 border-gray-400 rounded-lg p-6 bg-gray-50">
                    <input
                        type="file"
                        accept="image/*, video/*"
                        multiple
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                    />
                    {files.length === 0 ? (
                        <p className="text-gray-500">No files chosen</p>
                    ) : (
                        <p className="text-gray-700 font-medium">{files.length} files selected</p>
                    )}
                </div>

                {/* Preview Section */}
                {files.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">Preview:</h3>
                        <div className="rounded-lg border border-gray-300 p-2">
                            {renderPreview()}
                        </div>
                    </div>
                )}

                {/* Buttons */}
                <div className="mt-4 flex justify-center gap-4">
                    <button
                        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
                        onClick={() => document.querySelector('input[type="file"]').click()}
                    >
                        Choose Files
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition flex items-center gap-2"
                        onClick={handleClear}
                        disabled={files.length === 0}
                    >
                        <FaTimesCircle /> Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
