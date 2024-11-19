import React, { useState } from 'react';
import { FaCloudUploadAlt, FaTimesCircle } from 'react-icons/fa';

export default function UploadFile() {
    const [files, setFiles] = useState([]);
    const [fileURLs, setFileURLs] = useState([]);

    const handleFileChange = (e: { target: { files: Iterable<unknown> | ArrayLike<unknown>; }; }) => {
        const uploadedFiles = Array.from(e.target.files);
        // @ts-ignore 
        setFiles(uploadedFiles);
        // @ts-ignore 
        const newFileURLs = uploadedFiles.map(file => URL.createObjectURL(file));
        // @ts-ignore 
        setFileURLs(newFileURLs);
    };

    const handleClear = () => {
        setFiles([]);
        setFileURLs([]);
        fileURLs.forEach(url => URL.revokeObjectURL(url)); // Clean up memory
    };

    const renderPreview = () => {
        return fileURLs.map((fileURL, index) => {
            // @ts-ignore 
            const fileType = files[index].type.split('/')[0];

            if (fileType === 'image') {
                return (
                    <img
                        key={index}
                        src={fileURL}
                        alt={`Preview ${index}`}
                        className="rounded-lg w-full h-32 object-cover mb-2"
                    />
                );
            } else if (fileType === 'video') {
                return (
                    <video
                        key={index}
                        src={fileURL}
                        controls
                        className="rounded-lg w-full h-32 mb-2"
                    />
                );
            }// @ts-ignore 
            return <p key={index} className="text-gray-500 text-sm">Preview not available for {files[index].name}.</p>;
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 p-4 sm:p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4 sm:p-8 text-center">
                {/* Icon and Heading */}
                <div className="mb-4 sm:mb-6">
                    <FaCloudUploadAlt className="text-indigo-500 text-5xl sm:text-6xl mx-auto mb-3 sm:mb-4" />
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">Upload Your Files</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Choose files or drag and drop them here</p>
                </div>

                {/* File Upload Area */}
                <div className="relative border-dashed border-2 border-gray-400 rounded-lg p-4 sm:p-6 bg-gray-50 mb-4">
                    <input
                        type="file"
                        accept="image/*, video/*"
                        multiple
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        // @ts-ignore 
                        onChange={handleFileChange}
                    />
                    {files.length === 0 ? (
                        <p className="text-gray-500 text-sm">No files chosen</p>
                    ) : (
                        <p className="text-gray-700 font-medium text-sm sm:text-base">{files.length} files selected</p>
                    )}
                </div>

                {/* Preview Section */}
                {files.length > 0 && (
                    <div className="mt-3 sm:mt-4">
                        <h3 className="text-md sm:text-lg font-medium text-gray-800 mb-2">Preview:</h3>
                        <div className="rounded-lg border border-gray-300 p-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {renderPreview()}
                        </div>
                    </div>
                )}

                {/* Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <button
                        className="bg-indigo-500 text-white py-2 px-3 sm:px-4 rounded hover:bg-indigo-600 transition text-sm sm:text-base"
                        // @ts-ignore 
                        onClick={() => document.querySelector('input[type="file"]').click()}
                    >
                        Choose Files
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-3 sm:px-4 rounded hover:bg-red-600 transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
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
