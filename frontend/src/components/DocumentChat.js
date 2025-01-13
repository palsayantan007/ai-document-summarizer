import React, { useState } from 'react';

const DocumentChat = ({ documentText }) => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleAsk = () => {
        const lowerQuery = query.toLowerCase();
        const results = documentText
            .split('\n')
            .filter((line) => line.toLowerCase().includes(lowerQuery))
            .join('\n');

        setResponse(results || 'No relevant information found.');
    };

    return (
        <div style={{ margin: '20px' }}>
            <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a question about the document..."
                rows="4"
                style={{ width: '100%', marginBottom: '10px' }}
            />
            <button onClick={handleAsk}>Ask</button>
            <div style={{ marginTop: '20px' }}>
                <h3>Response:</h3>
                <pre>{response}</pre>
            </div>
        </div>
    );
};

export default DocumentChat;
