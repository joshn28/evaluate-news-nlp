const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

const port = 3000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

