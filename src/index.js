const express = require('express');
const dotenv = require('dotenv');
const database = require('./config/db');
const routes = require('./routes/index');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

database();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});