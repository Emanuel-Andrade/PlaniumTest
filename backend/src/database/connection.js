const env = require('dotenv');

env.config();

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DATABASEHOST,
    user: 'root',
    password: process.env.DATABASEPASSWORD,
    database: 'planium',
  },
});

module.exports = knex;
