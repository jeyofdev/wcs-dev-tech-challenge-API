const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the API');
});

app.listen(port, (err) => {
    if (err) {
        throw err;
    }

    console.log(`Server is running on ${port}`);
});
