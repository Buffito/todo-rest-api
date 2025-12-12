const express = require('express');
const dotenv = require('dotenv');
const database = require('./config/db');
const routes = require('./routes/index');
const { swaggerUi, swaggerSpec } = require('./config/swagger');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', routes);

database();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Access SwaggerUi on http://localhost:${PORT}/api-docs`);
});
