const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

const port = 3000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/key', (req, res) => {
    res.send({ apiKey: process.env.API_KEY });
});