

# AI-Powered Document Summarizer & Q&A

## Overview
This project is an **AI-Powered Document Summarizer & Q&A App** built using **React**, **CopilotKit**, and **Node.js**. It allows users to upload PDF files, extract their content, and ask questions about the uploaded document in a conversational interface. The app provides an interactive and user-friendly way to interact with large documents without reading them manually.

---

## Key Features
1. **PDF Upload and Parsing**: Upload a PDF file to extract its textual content using the backend.
2. **Question & Answer Interface**: Ask natural-language questions about the uploaded document, and get relevant answers.
3. **CopilotKit Integration**: Seamlessly integrates CopilotKit to manage AI queries and streamline user interactions.
4. **Local Hosting**: Run the project entirely on your local machine.
5. **Dynamic Chat Interface**: Query the document interactively and view responses dynamically.

---

## How CopilotKit Has Helped
- **Simplified AI Interactions**: CopilotKit enabled easy integration of an AI-powered Q&A system for document queries.
- **Tooling Support**: The library provided tools for creating a conversational AI agent that handles user queries efficiently.
- **Ease of Development**: With CopilotKit, we could focus on building a smooth user experience rather than handling complex AI infrastructure.

---

## Installation

Follow these steps to install and run the project on your local machine:

### Prerequisites
1. **Node.js**: Install [Node.js](https://nodejs.org/) (v16.x or later recommended).
2. **NPM or Yarn**: Comes with Node.js.
3. **Git**: Install [Git](https://git-scm.com/).

---

### Steps to Clone and Run

#### 1. Clone the Repository
```bash
git clone https://github.com/palsayantan007/ai-document-summarizer.git
cd ai-document-summarizer
```

#### 2. Setup Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
   The backend server will run on `http://localhost:5000`.

#### 3. Setup Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the React frontend:
   ```bash
   npx react-scripts start
   ```
   The app will be accessible at `http://localhost:3000`.

---

## Usage
1. Open the app in your browser at `http://localhost:3000`.
2. Upload a PDF document using the **Choose File** button.
3. Click **Upload** to parse the document and display its contents in the backend.
4. Type a query about the document in the text box and click **Ask** to receive an answer.

---

## Project Structure
```
ai-document-summarizer/
├── backend/                # Backend for file upload and PDF parsing
│   ├── server.js           # Node.js server script
│   ├── package.json        # Backend dependencies
├── frontend/               # Frontend for user interaction
│   ├── public/             # Public files (e.g., index.html)
│   │   ├── index.html      # React entry point
│   ├── src/                # React source files
│   │   ├── components/     # React components (FileUpload, DocumentChat)
│   │   ├── App.js          # Main application component
│   │   ├── index.js        # React entry point
│   ├── package.json        # Frontend dependencies
```

---

## Dependencies
### Backend
- **Express**: Handles backend server logic.
- **Cors**: Enables cross-origin requests.
- **Express-Fileupload**: Manages file uploads.
- **PDF-Parse**: Extracts text from uploaded PDFs.

### Frontend
- **React**: Frontend framework.
- **React-Dropzone**: Handles file uploads.
- **React-Syntax-Highlighter**: Formats the extracted text.
- **Axios**: Manages API requests.

---

## Sample Output
Below is an example of how the app looks when parsing a document and asking a question:

[![Sample Output](./Screenshot (15).png)](https://github.com/palsayantan007/ai-document-summarizer/blob/2cb0ced8882df2bbbb1ac0e925fdb96e9751e0af/Screenshot%20(15).png)



---

## Troubleshooting
1. **Backend Not Starting**:
   - Ensure no other processes are using port `5000`.
   - Run `npm install` in the backend directory.

2. **Frontend Not Starting**:
   - Ensure React and `react-scripts` are installed.
   - Clear `node_modules` and reinstall:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```

3. **PDF Parsing Issues**:
   - Ensure the uploaded file is a valid PDF.
   - Check the backend logs for errors.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

