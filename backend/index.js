const bodyParser = require('body-parser');
const express = require('express');
const env = require('dotenv');
const cors = require('cors');

const app = express();
const router = require('./src/routes/routes');

env.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.listen(4007, () => {
  console.log('Server is running');
  console.log('http://localhost:4007');
});
