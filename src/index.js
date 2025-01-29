const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/index');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

app.set('view engine', 'ejs');

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

main();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});