const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const categories = require('./data/data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running')

});

app.listen(port, () => {
    console.log(`API is running on port: ${port}`)
})