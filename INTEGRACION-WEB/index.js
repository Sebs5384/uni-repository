import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const filePath = path.join(__dirname, 'data', 'api.json');

app.use(express.json());
app.get('/api4', (req, res) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
        if(error) {
            console.error(`Error while reading the api.json file, log: ${error}`)
            res.status(500).send('Error reading file');
            return;
        };

        res.json(JSON.parse(data));
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});