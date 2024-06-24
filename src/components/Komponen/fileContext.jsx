import React, { createContext, useState } from 'react';

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (file) => {
    setUploadedFiles([...uploadedFiles, file]);
  };

  return (
    <FileContext.Provider value={{ uploadedFiles, handleFileUpload }}>
      {children}
    </FileContext.Provider>
  );
};