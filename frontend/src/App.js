import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DocumentChat from './components/DocumentChat';

const App = () => {
    const [documentText, setDocumentText] = useState('');

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>AI-Powered Document Summarizer & Q&A</h1>
            <FileUpload onTextParsed={setDocumentText} />
            {documentText && <DocumentChat documentText={documentText} />}
        </div>
    );
};

export default App;
