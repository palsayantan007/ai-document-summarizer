const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');

const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.json());

app.get('/Picture', (req, res) => {
    res.send('This is the Picture route!');
});


app.post('/upload', async (req, res) => {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).send('No file uploaded');
        }

        const file = req.files.file;
        const dataBuffer = file.data;
        const parsedData = await pdfParse(dataBuffer);

        res.json({
            text: parsedData.text,
            info: parsedData.info,
        });
    } catch (error) {
        console.error('Error parsing PDF:', error);
        res.status(500).send('Error parsing PDF');
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
