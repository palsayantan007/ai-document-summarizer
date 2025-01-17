import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onTextParsed }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8080/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            onTextParsed(response.data.text);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload the file.');
        }
    };

    return (
        <div style={{ margin: '20px' }}>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUpload;
